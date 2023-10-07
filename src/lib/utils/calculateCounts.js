// utils/calculateCounts.js
import { loadData } from "./loadData";

export async function calculateCounts() {
  const data = await loadData();
  const counts = {};
  let totalCount = 0;

  data.projects.forEach((project) => {
    if (
      project.categories &&
      Array.isArray(project.categories) &&
      Object.keys(project).length > 1
    ) {
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
    }
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
