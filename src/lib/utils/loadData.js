let data;

export async function loadData() {
  if (!data) {
    const response = await fetch(
      "https://web3privacy-app.vercel.app/projects.json",
    );
    data = await response.json();
  }
  return data;
}
