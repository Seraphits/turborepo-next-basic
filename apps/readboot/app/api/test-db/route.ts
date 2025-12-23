import { NextResponse } from 'next/server';
import { connectDB, Project } from '@repo/db';

export const runtime = 'nodejs'; // Mongoose requires the Node.js runtime

export async function GET() {
  try {
    // 1. Establish connection using your singleton utility
    await connectDB();

    // 2. Attempt a simple query
    const projects = await Project.find({}).limit(10).lean();

    // 3. Return results (Next.js requires POJOs, so we use.lean() or JSON.parse)
    return NextResponse.json({
      success: true,
      message: "✅ Database connected successfully!",
      data: projects
    });
  } catch (error: any) {
    console.error("❌ Database test failed:", error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
