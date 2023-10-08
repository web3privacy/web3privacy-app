let data;

export async function loadData() {
  if (!data) {
    const response = await fetch("https://data.web3privacy.info");
    data = await response.json();
    console.log(data);
  }
  return data;
}
