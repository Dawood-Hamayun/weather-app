//API Calls

//API Key
const key = 'aGp5V0KLrY7JSOAZItkmgsmz8abzPQAK';

//2 Different Request For 2 Endpoints

const getCity = async (city) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    
    const response = await fetch(baseURL + query);
    const data = await response.json();
    data[0]

}

// getCity('Lahore')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


const getWeather = async(id) =>{
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/';
    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(baseURL + query);
    const data = await response.json();

    return data[0]
}

//Joining Methods

// getCity('lahore')
//     .then(data=> {
//         return getWeather(data.key)
//     }).then(data=> {
//         console.log(data)
//     }).catch(err => console.log(err))


//Seeting Dynamic location
