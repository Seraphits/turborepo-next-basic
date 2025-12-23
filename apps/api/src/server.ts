// apps/api/src/server.js (Reverted to standard, clean code)
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { connectDB, Project } from '@repo/db';
import express from 'express';
import cors from 'cors';

// Import all components:
// 1. Connection logic and Mongoose model from your shared package
import { connectDB, Project } from 'db';
// 2. The GraphQL contract
import { typeDefs } from './schema/typeDefs.js';
// 3. The GraphQL logic
import { resolvers } from './resolvers.js';

const PORT = 4000;

// Step 1: Initialize the Express Application
const app = express();

// Step 2: CRITICAL - Connect to the Database FIRST
await connectDB();

// Step 3: Initialize Apollo Server with your schema components
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Step 4: Start the Apollo Server process
await server.start();

// Step 5: Apply Apollo middleware to the Express app
app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, { // REVERTED FUNCTION CALL
        // CRITICAL: Injecting the Mongoose models into the context for every resolver
        context: async ({ req }) => ({
            models: { Project },
        }),
    }),
);

// Step 6: Start the HTTP Listener
app.listen(PORT, () => {
    console.log(`🚀 API Server ready at http://localhost:${PORT}/graphql`);
    console.log('You can visit that URL to test the API in your browser.');
});
