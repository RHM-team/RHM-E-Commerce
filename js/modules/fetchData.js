export default async function fetchData() {
  var spinner = document.getElementById("spinner");
  spinner.removeAttribute('hidden');
  
  let response = await fetch("../data.json"); //fetch data by url
  let fetchedData = await response.text();
  let data = JSON.parse(fetchedData);
  
  return data;
}
