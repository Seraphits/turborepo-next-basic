// apps/api/src/resolvers.js

/**
 * Resolvers map GraphQL operations to Mongoose database methods.
 * CRITICAL: We access the Project model via the 'models' object
 * that will be injected into the context of every request.
 */
export const resolvers = {
    // RESOLVERS FOR QUERIES (READ Operations)
    Query: {
        // Function that fulfills the 'projects' query from the Schema
        projects: async (parent, args, { models }) => {
            // models.Project is your Mongoose model imported from 'db'
            //.find({}) returns all documents in the Project collection
            return await models.Project.find({});
        },

        // Function that fulfills the 'project(id: ID!)' query
        project: async (parent, { id }, { models }) => {
            //.findById(id) finds a single document by its unique ID argument
            return await models.Project.findById(id);
        }
    },

    // RESOLVERS FOR MUTATIONS (WRITE Operations)
    Mutation: {
        // Function that fulfills the 'addProject(input: ProjectInput!)' mutation
        addProject: async (parent, { input }, { models }) => {
            //.create(input) creates a new document using the structured input data
            return await models.Project.create(input);
        }
    }
};
