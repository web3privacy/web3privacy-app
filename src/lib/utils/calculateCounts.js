// utils/calculateCounts.js
import { loadData } from "./loadData";

// This function filters the projects based on the given conditions
function filterProjects(projects) {
  return projects.filter(
    (project) =>
      project.categories &&
      Array.isArray(project.categories) &&
      Object.keys(project).length > 1,
  );
}

// This function computes the counts
export async function calculateCounts() {
  const data = await loadData();
  const filteredProjects = filterProjects(data.projects);
  const counts = {};
  let totalCount = 0;

  filteredProjects.forEach((project) => {
    project.categories.forEach((categoryId) => {
      const categoryObj = data.categories.find(
        (category) => category.id === categoryId,
      );

      if (categoryObj) {
        const categoryName = categoryObj.name;
        counts[categoryName] = (counts[categoryName] || 0) + 1;
        totalCount += 1; // Increment the total count
      }
    });
  });

  counts.All = totalCount; // Add the total count to the counts object under "All"

  // Convert counts object to an array
  const countsArray = Object.keys(counts).map((key) => ({
    category: key,
    count: counts[key],
  }));

  // Sort the array based on count
  countsArray.sort((a, b) => b.count - a.count);

  // Optionally, convert the sorted array back to an object
  const sortedCounts = Object.fromEntries(
    countsArray.map((item) => [item.category, item.count]),
  );

  return sortedCounts; // or return countsArray if you prefer array format
}

// This function will be exported and will return the filtered projects
export async function getFilteredProjects() {
  const data = await loadData();
  return filterProjects(data.projects);
}
