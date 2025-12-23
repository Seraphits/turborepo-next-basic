"use client";
import { gql } from "@apollo/client/core/index.js";
import { useQuery } from "@apollo/client/react/index.js";
import type { IProject } from "@repo/db";

const GET_PROJECTS_QUERY = gql`
  query GetPortfolioProjects {
    projects {
      id
      title
      description
    }
  }
`;

export default function ProjectList() {
  // Pass IProject[] to useQuery for full IntelliSense
  const { loading, error, data } = useQuery<{ projects: IProject[] }>(GET_PROJECTS_QUERY);

  if (loading) return <p>Loading portfolio data...</p>;

  // Custom error message to distinguish between API and Network issues
  if (error) return <p>ERROR: Could not connect to API server. {error.message}</p>;

  return (
    <div className="project-grid">
      {data?.projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
