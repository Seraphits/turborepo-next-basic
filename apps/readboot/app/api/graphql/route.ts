import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import { connectDB, Project } from "@repo/db";

const typeDefs = gql`
  type Project {
    id: ID!
    title: String!
    description: String
  }
  type Query {
    projects: [Project]
  }
`;

const resolvers = {
  Query: {
    projects: async () => {
      await connectDB(); // Ensure connection before query
      return await Project.find({}).lean(); // Use.lean() for POJOs
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };
