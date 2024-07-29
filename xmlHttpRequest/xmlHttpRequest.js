/** Solution 1 : Create data element into DOM html.
 *  For show many data such as for loop data.
 **/
// Pass 1
const xhr = new XMLHttpRequest();

// pass 2
xhr.addEventListener("readystatechange", () => {
 if(xhr.readyState != 4) return;

 if(xhr.status >= 200 && xhr.status < 300){
  console.log(xhr);
  console.log("Todo is success");
  let json = JSON.parse(xhr.responseText);
  console.log(json);

  let provinceDiv = document.getElementById("province");
  json.forEach((element, index) => {
   console.log(
    "Name province: ", element.name_th,
    "Name eng: ", element.name_en, 
    "Geography id: ", element.geography_id, 
    "Create data: ", element.created_at
   );

   // Create HTML element for each province and append it to the provinceDiv
   let provinceElement = document.createElement("div");
   provinceElement.innerHTML = `
       <p><string>NO. : </string> ${index+1} </p>
       <p><strong>Name (TH):</strong> ${element.name_th}</p>
       <p><strong>Name (EN):</strong> ${element.name_en}</p>
       <p><strong>Geography ID:</strong> ${element.geography_id}</p>
       <p><strong>Created data:</strong> ${element.created_at}</p>
       <hr>
   `;
   provinceDiv.appendChild(provinceElement);
  });
 }else{
  console.log("There was an error.");
 }
});

// pass 3
xhr.open("GET", "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json");

// pass 4
xhr.send();

//-------------------------------------------------------------------------------------------------------------------------

/** Solution 2 : Update data element into DOM html. 
 * For show data follow html structure only 
 * **/
// Pass 1
// const xhr = new XMLHttpRequest();

// // pass 2
// xhr.addEventListener("readystatechange", () => {
//  if(xhr.readyState != 4) return;

//  if(xhr.status >= 200 && xhr.status < 300){
//   console.log(xhr);
//   console.log("Todo is success");
//   let json = JSON.parse(xhr.responseText);
//   console.log(json);
 
//   // Assuming you want to display the first element in the JSON array
//    let element = json[0];
//    document.getElementById("name_th").textContent = `Name (TH): ${element.name_th}`;
//    document.getElementById("name_en").textContent = `Name (EN): ${element.name_en}`;
//    document.getElementById("geography").textContent = `Geography ID: ${element.geography_id}`;
//    document.getElementById("created").textContent = `Created At: ${element.created_at}`;
 
//  }else{
//   console.log("There was an error.");
//  }
// });

// // pass 3
// xhr.open("GET", " https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json");

// // pass 4
// xhr.send();
