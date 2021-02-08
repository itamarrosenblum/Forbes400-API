/* -------------------------------
Purpose: Main JS File
Version: 0.2
Author: Itamar Rosenblum
Date: 1--01-21
Last Update: None
------------------------------- */

// Async await function
(async function fn() {
    try {
    // Fetch to forbes400 API
    const res = await fetch("https://forbes400.herokuapp.com/api/forbes400?limit=10");
    const data = await res.json();

    // Creating the table
    for (let i = 0; i < data.length; i++) {
      // Get element
      const tbody = document.querySelector("tbody");

      // Create tr element
      const tr = document.createElement("tr");

      // Create img table data
      const tdImage = document.createElement("td");
      const img = document.createElement("img");
      tdImage.appendChild(img);
      
      // Fixing https:// bug of the API
      if(data[i].squareImage.indexOf("https") === -1) {
        img.src = `https:${data[i].squareImage}`;
      } else {
        img.src = data[i].squareImage;
      }
      tr.appendChild(tdImage);

      // Create rank table data
      const tdRank = document.createElement("td");
      const pRank = document.createElement("p");
      pRank.innerText = `${data[i].rank}`;
      tdRank.appendChild(pRank);
      tr.appendChild(tdRank);

      // Create name table data
      const tdName = document.createElement("td");
      tdName.innerText = data[i].personName;
      tr.appendChild(tdName);
      
      // Create networth table data
      const tdNetWorth = document.createElement("td");
      // Round a number
      const netNum = Math.floor(data[i].finalWorth);
      // Turning number to string
      const netStr = netNum.toString();
      // Abbreviate large numbers
      if (netStr.length > 5) {
          tdNetWorth.innerText = `$${Number(netStr.slice(0, 3))} B`;
      } else if (netStr.length <= 5) {
          tdNetWorth.innerText = `$${Number(netStr.slice(0, 2))} B`;
      }
      tr.appendChild(tdNetWorth);

      // Create gender table data
      const tdGender = document.createElement("td");
      tdGender.innerText = data[i].gender;
      tr.appendChild(tdGender);

      // Create residence table data
      const tdResidence = document.createElement("td");
      tdResidence.innerText = data[i].countryOfCitizenship;
      tr.appendChild(tdResidence);

      // Create source table data
      const tdSource = document.createElement("td");
      tdSource.innerText = data[i].source;
      tr.appendChild(tdSource);

      // Append tr to tbody
      tbody.appendChild(tr);
    }
  } catch (err) {
    console.error(err);
  }
})();