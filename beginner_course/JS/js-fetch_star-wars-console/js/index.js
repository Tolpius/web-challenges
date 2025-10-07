console.clear();

const url = "https://swapi.py4e.com/api/people";


async function fetchData(url) {
    const result = await fetch(url);       
    const data = await result.json();      
    console.log(data.results[2].eye_color);                    
}
fetchData(url);
