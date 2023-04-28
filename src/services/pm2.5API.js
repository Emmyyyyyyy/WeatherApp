// fetchAPI.js

export async function fetchPMData(setStoreData) {
    const pmData = await fetch("http://api.airvisual.com/v2/nearest_city?key=654948dd-af50-4598-b735-ef036f01b063", {
      method: "GET"
    });
    const pmInfo = await pmData.json();
    setStoreData(pmInfo);
  
    // const pm = pmInfo?.data?.current?.pollution?.aqius;
    // setpmValue(pm);
  
    // if (pm <= 50) {
    //   setStatusIcon(Icon.goodIcon);
    //   setInnerCircleColor("#ABC270");
    //   setLevel("Good");
    // } else if (pm > 50 && pm <= 100) {
    //   setStatusIcon(Icon.moderateIcon);
    //   setInnerCircleColor("#FBC252");
    //   setLevel("Moderate");
    // } else if (pm > 100 && pm <= 150) {
    //   setStatusIcon(Icon.unhealthyForSomeGroupIcon);
    //   setInnerCircleColor("#FF6E31");
    //   setLevel("Unhealthy for Sensitive Group");
    // } else if (pm > 150 && pm <= 200) {
    //   setStatusIcon(Icon.unhealthyIcon);
    //   setInnerCircleColor("#DC3535");
    //   setLevel("Unhealthy");
    // } else if (pm > 200 && pm <= 300) {
    //   setStatusIcon(Icon.veryUnhealthyIcon);
    //   setInnerCircleColor("#975C8D");
    //   setLevel("Very Unhealthy");
    // } else if (pm > 300) {
    //   setStatusIcon(Icon.hazardousIcon);
    //   setInnerCircleColor("#B01E68");
    //   setLevel("Hazardous");
    // }
  }
  