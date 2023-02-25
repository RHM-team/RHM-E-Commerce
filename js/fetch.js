var url = '../data.json';

fetchData(url); //calling fn

async function fetchData(url){

    let response = await fetch(url);   //fetch data by url
    let fetchedData = await response.text();  
    let  chairsArray = JSON.parse(fetchedData).chairs;
    let  bedsArray = JSON.parse(fetchedData).beds;
    let  mirrorsArray = JSON.parse(fetchedData).mirrors;
    let  sofasArray = JSON.parse(fetchedData).sofas;
    let  tablesArray = JSON.parse(fetchedData).tables;
    
    console.log(chairsArray);
    console.log(bedsArray);
    console.log(mirrorsArray);
    console.log(sofasArray);
    console.log(tablesArray);

    for(chair in chairsArray){
        console.log(chairsArray[chair]["title"]);
    }
}