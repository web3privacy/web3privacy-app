<script>
  import { onMount } from "svelte";
  import { activeCategory, projectCounts } from "../stores/store.js";
  import { calculateCounts } from "../lib/utils/calculateCounts.js";
  import { get } from "svelte/store";
  import projects from "../../public/projects.json";

  console.log(projects);

  const counts = {};
  let totalCount = 0;

  projects.projects.forEach((project) => {
    if (
      project.categories &&
      Array.isArray(project.categories) &&
      Object.keys(project).length > 1
    ) {
      project.categories.forEach((categoryId) => {
        const categoryObj = projects.categories.find(
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

  // Your existing code up to the sortedCounts definition
  const sortedCounts = Object.fromEntries(
    countsArray.map((item) => [item.category, item.count]),
  );

  console.log(sortedCounts);
  projectCounts.set(sortedCounts); // Set the store value directly as sortedCounts is not a promise

  function setActiveCategory(category) {
    activeCategory.set(category);
  }

  const activeCategoryValue = get(activeCategory);
  console.log("Hi! I’m the client. This is logged in browser dev console.");
</script>

<div class="flex flex-col items-start justify-start gap-8 w-1/4 box-border">
  <div class="flex flex-col items-start justify-start gap-2 box-border">
    {#each Object.entries($projectCounts) as [category, count]}
      <button
        class="flex items-center justify-center gap-1 p-2 hover:bg-white/20 {activeCategoryValue ==
        category
          ? 'bg-white text-black'
          : ''}"
        on:click={() => setActiveCategory(category)}
      >
        <div class="flex gap-1">
          <span class="text-xl font-bold leading-7 box-border text-left w-min"
            >{category}</span
          >
          {#if count !== null}
            <span class="text-gray-400 text-lg font-light leading-7 box-border"
              >({count})</span
            >
          {/if}
        </div>
      </button>
    {/each}
  </div>
</div>
