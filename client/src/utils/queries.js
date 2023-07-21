import { gql } from "@apollo/client";

export const QUERY_MYSELF = gql`
  query myself {
    myself {
      _id
      userName
      email
      posts {
        _id
        postText
        createdAt
        username
        commentCount
        comments {
          _id
          commentText
          createdAt
          username
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      userName
      email
      posts {
        _id
        postText
        createdAt
        username
        commentCount
        comments {
          _id
          commentText
          createdAt
          username
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      userName
      email
      posts {
        _id
        postText
        createdAt
        username
        commentCount
        comments {
          _id
          commentText
          createdAt
          username
        }
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      createdAt
      username
      commentCount
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
      commentCount
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;
