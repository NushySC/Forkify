import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();
    //searchView.getInput();

    if (query) {
        state.search = new Search(query);

        // 3) Prepare UI for results
        //searchView.clearInput();
        //searchView.clearResults();
        //renderLoader(elements.searchRes);

        await state.search.getResults();

        // 5) Render results on UI
        //clearLoader();
        //searchView.renderResults(state.search.result);

        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});