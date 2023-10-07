let data;

export async function loadData() {
  if (!data) {
    const response = await fetch(
      "https://raw.githubusercontent.com/web3privacy/data/main/dist/bundle.json",
    );
    data = await response.json();
    console.log(data);
  }
  return data;
}
