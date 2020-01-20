import {elements} from './base';

export const getInput = () => elements.searchInput.value

export const clearInput = () => {
  elements.searchInput.value = '';
}

export const clearResults = () => {
  elements.searchResultsList.innerHTML = '';
}

const limitRecipeTitle = (title, limit = 17) => {
  if(title.length > limit) {
    title = title.split('');
    title = title.slice(0, 17);
    title = title.join('');
    title = (title + '...');
  }
  return title;
}

const renderRecipe = recipe => {
  const markup = `
    <li>
        <a class="results__li" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `
  elements.searchResultsList.insertAdjacentHTML('beforeEnd', markup);
}

export const renderResults = recipes => {
  recipes.forEach(recipe => renderRecipe(recipe));
}

// Ask trevor above. why does it break if I do anything other than recipes.forEach(renderRecipe);
// for example recipes.forEach(renderRecipe); will work but nothing else will WTF?
