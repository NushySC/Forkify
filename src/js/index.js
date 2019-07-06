import axios from 'axios';

const APIKey = '25d102562bc4e7709d2b7714f2d6bcd4';
const proxy = 'https://cors-anywhere.herokuapp.com/';

const searchURL = 'https://www.food2fork.com/api/search'

const recipeURL = 'https://www.food2fork.com/api/get'

async function getResults(query) {
    try {
    const res= await axios(`${proxy}https://www.food2fork.com/api/search?key=${APIKey}&q=${query}`);
    console.log(res)
    }
    catch (error){
        alert(error)
    }
}

getResults('melon');