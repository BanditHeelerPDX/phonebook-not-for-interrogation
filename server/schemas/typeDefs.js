const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]!
    profileImage: String
    coverImage: String
    friends: [User]!
    minions: [User]!
    isAdmin: Boolean
    createdAt: String
    updatedAt: String
  }
  type Post {
    _id: ID
    userId: String
    postText: String
    postImage: String
    createdAt: String
    updatedAt: String
    likes: Int
    comments: [Comment]!
  }
  type Comment {
    _id: ID
    username: String
    commentText: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    myself: User
    user(username: String!): User
    users: [User]
    post(postId: String!): Post
    posts(username: String): [Post]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    updateUser(
      username: String
      email: String
      password: String
      profileImage: String
      coverImage: String
      friends: [ID]
      minions: [ID]
      posts: [ID]
    ): User
    deleteUser(userId: ID!): User
    createPost(postText: String!, postImage: String, username: String): Post
    updatePost(postId: ID!, postText: String, postImage: String): Post
    deletePost(postId: ID!): Post
    createComment(postId: ID!, commentText: String!): Comment
    deleteComment(postId: ID!, commentId: ID!): Comment
    createFriend(userId: ID!): User
    deleteFriend(userId: ID!, friendId: ID!): User
    followUser(userId: ID!): User
    unfollowUser(userId: ID!): User
    likePost(postId: ID!, userId: ID!): Post
    unlikePost(postId: ID!, userId: ID!): Post
  }
`;

module.exports = typeDefs;
