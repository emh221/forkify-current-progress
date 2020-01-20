// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/*Global State of the app
* - Search object
* - Current recipe object
*- shopping list object
*-liked Recipes
*/
const state = {};

const controlSearch = async () => {
  // 1) Get query from viewport
  const query = searchView.getInput();
  // console.log(query); //TODO

  if(query) {
    //2) new search object and add to the state:
    state.search = new Search(query);

    //3) Prepare the UI for results
    searchView.clearInput();
    //4) Search for Recipes
    await state.search.getResults();
    //5) Render the results on the UI;
    searchView.clearResults();
    searchView.renderResults(state.search.result);
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});


// const search = new Search('pizza');


// search.getResults();
