import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const APIKey = '25d102562bc4e7709d2b7714f2d6bcd4';
        const proxy = 'https://cors-anywhere.herokuapp.com/';

        const searchURL = `${proxy}https://www.food2fork.com/api/search?key=${APIKey}&q=${this.query}`

        //const recipeURL = `${proxy}https://www.food2fork.com/api/get?key=${APIKey}&q=${query}`

        try {
            const res = await axios(searchURL);
            this.result = res.data.recipes;
            //console.log(this.result)
        } catch (error) {
            alert(error)
        }
    }
}