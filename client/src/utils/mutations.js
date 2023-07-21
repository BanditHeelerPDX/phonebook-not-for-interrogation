import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($userName: String!, $email: String!, $password: String!) {
    createUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $userName: String!
    $email: String!
    $password: String!
    $profileImage: String!
    $coverImage: String!
    $friends: [ID]
    $minions: [ID]
  ) {
    updateUser(
      id: $id
      userName: $userName
      email: $email
      password: $password
      profileImage: $profileImage
      coverImage: $coverImage
      friends: $friends
      minions: $minions
    ) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;
