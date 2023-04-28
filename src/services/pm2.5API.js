export async function fetchPMData(setStoreData) {
    const pmData = await fetch("http://api.airvisual.com/v2/nearest_city?key=654948dd-af50-4598-b735-ef036f01b063", {
      method: "GET"
    });
    const pmInfo = await pmData.json();
    setStoreData(pmInfo);
  }
  