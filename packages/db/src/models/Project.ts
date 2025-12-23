import mongoose, { Schema, Document, Model } from 'mongoose';

// 1. Define the TypeScript interface for your document
export interface IProject extends Document {
  title: string;
  description: string;
  url?: string;
  tags: string[];
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  url: { type: String },
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

// 2. Prevent OverwriteModelError by checking if model exists
export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
