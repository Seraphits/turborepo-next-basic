// apps/api/src/schema/typeDefs.js

import gql from 'graphql-tag';

// Define the GraphQL types using Schema Definition Language (SDL)
export const typeDefs = gql`
  # 1. The custom type that mirrors your Mongoose Project Model
  type Project {
    id: ID!         # Automatically maps to MongoDB's _id
    title: String!  # Non-nullable (must exist)
    description: String!
    url: String
    tags:
    createdAt: String!
  }

  # Input type for creating a new Project via a Mutation
  # Note: Inputs only contain data the client SENDS, not database IDs or dates.
  input ProjectInput {
    title: String!
    description: String!
    url: String
    tags:
  }

  # 2. The Root Query Type (for reading data)
  type Query {
    # Fetches a list of all projects
    projects: [Project!]!

    # Fetches a single Project based on its unique ID
    project(id: ID!): Project
  }

  # 3. The Root Mutation Type (for writing/modifying data)
  type Mutation {
    # Takes structured input and returns the newly created Project
    addProject(input: ProjectInput!): Project!
  }
`;
