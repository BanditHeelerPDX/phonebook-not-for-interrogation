const bcrypt = require("bcrypt");
const { User, Post } = require("../models");

const resolvers = {
  Query: {
    myself: async (_, __, context) => {
      // Assuming you have implemented authentication and stored the authenticated user's ID in the context
      const userId = context.authenticatedUserId;
      if (!userId) {
        throw new Error("Not authenticated.");
      }

      return User.findById(userId);
    },
    user: async (_, { username }) => {
      return User.findOne({ username });
    },
    users: async () => {
      return User.find();
    },
    post: async (_, { postId }) => {
      return Post.findById(postId);
    },
    posts: async (_, { username }) => {
      const query = username ? { username } : {};
      return Post.find(query);
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) throw new Error("User not found");

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) throw new Error("Invalid password");

        return user;
      } catch (error) {
        throw new Error("Login failed: " + error.message);
      }
    },
    createUser: async (_, { userName, email, password }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
          userName,
          email,
          password: hashedPassword,
        });
        const newUser = await user.save();
        return newUser;
      } catch (error) {
        throw new Error("Failed to create user");
      }
    },
    updateUser: async (_, { id, userName, email, password }) => {
      try {
        const user = await User.findById(id);
        if (!user) throw new Error("User not found");

        if (password) {
          const hashedPassword = await bcrypt.hash(password, 10);
          password = hashedPassword;
        }

        const updatedUser = await User.findByIdAndUpdate(
          id,
          {
            $set: { userName, email, password },
          },
          { new: true }
        );

        return updatedUser;
      } catch (error) {
        throw new Error("Failed to update user");
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) throw new Error("User not found");
        return "User deleted successfully";
      } catch (error) {
        throw new Error("Failed to delete user");
      }
    },
    createPost: async (_, { userId, postText, postImage }) => {
      try {
        const post = new Post({ userId, postText, postImage });
        const newPost = await post.save();
        return newPost;
      } catch (error) {
        throw new Error("Failed to create post");
      }
    },
    updatePost: async (_, { id, userId, postText, postImage }) => {
      try {
        const post = await Post.findById(id);
        if (!post) throw new Error("Post not found");

        if (post.userId !== userId)
          throw new Error("Cannot update another user's post");

        const updatedPost = await Post.findByIdAndUpdate(
          id,
          {
            $set: { postText, postImage },
          },
          { new: true }
        );

        return updatedPost;
      } catch (error) {
        throw new Error("Failed to update post");
      }
    },
    deletePost: async (_, { id }) => {
      try {
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) throw new Error("Post not found");
        return "Post deleted successfully";
      } catch (error) {
        throw new Error("Failed to delete post");
      }
    },
    likePost: async (_, { id, userId }) => {
      try {
        const post = await Post.findById(id);
        if (!post) throw new Error("Post not found");

        if (!post.likes.includes(userId)) {
          await post.updateOne({ $push: { likes: userId } });
          return post;
        } else {
          throw new Error("Post is already liked by the user");
        }
      } catch (error) {
        throw new Error("Failed to like post");
      }
    },
    unlikePost: async (_, { id, userId }) => {
      try {
        const post = await Post.findById(id);
        if (!post) throw new Error("Post not found");

        if (post.likes.includes(userId)) {
          await post.updateOne({ $pull: { likes: userId } });
          return post;
        } else {
          throw new Error("Post is not liked by the user");
        }
      } catch (error) {
        throw new Error("Failed to unlike post");
      }
    },
    followUser: async (_, { userId, followUserId }) => {
      try {
        if (userId === followUserId) {
          throw new Error("You cannot follow yourself.");
        }

        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User not found");
        }

        if (user.friends.includes(followUserId)) {
          throw new Error("You are already following this user.");
        }

        await User.findByIdAndUpdate(userId, {
          $push: { friends: followUserId },
        });
        await User.findByIdAndUpdate(followUserId, {
          $push: { minions: userId },
        });

        return "Successfully followed user.";
      } catch (error) {
        throw new Error("Failed to follow user: " + error.message);
      }
    },
    unfollowUser: async (_, { userId, unfollowUserId }) => {
      try {
        if (userId === unfollowUserId) {
          throw new Error("You cannot unfollow yourself.");
        }

        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User not found");
        }

        if (!user.friends.includes(unfollowUserId)) {
          throw new Error("You are not following this user.");
        }

        await User.findByIdAndUpdate(userId, {
          $pull: { friends: unfollowUserId },
        });
        await User.findByIdAndUpdate(unfollowUserId, {
          $pull: { minions: userId },
        });

        return "Successfully unfollowed user.";
      } catch (error) {
        throw new Error("Failed to unfollow user: " + error.message);
      }
    },
  },
};

module.exports = resolvers;
