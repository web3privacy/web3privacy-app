let data;

export async function loadData() {
  if (!data) {
    const response = await fetch("/projects.json");
    data = await response.json();
  }
  return data;
}
