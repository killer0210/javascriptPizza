require("babel-polyfill");
import Search from "./model/search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import Recipe from "./model/recipe";

// Web app tuluw
// Hailtiin query ,ur dun
// tuhain uzuulj baigaa jor
// laiklasan joruud
// Zahialj baigaa joriin nairlaganuud

const state = {};

const controlSesrch = async () => {
    // 1 web-ees hailtiin tulhuur ugiig awna.

    const query = searchView.getInput();

    if (query) {
        // 2 shineer hailtiin obektiig hiij ugnu.
        state.search = new Search(query);
        // 3 hailt hiihed zoriulj delgetsiin ui hiine.
        searchView.clearSearchQuery();
        searchView.clearSearchResult();
        renderLoader(elements.searchResultDev);
        // 4 hailtiig guitsetgene .
        await state.search.doSearch();
        // 5 hailttin ur dung delgetsend haruulna.
        clearLoader();
        if (state.search.result === undefined) alert('Hailtaar ilertsgui...');
        else searchView.renderRecipes(state.search.result);
    }


}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault(); //default uil ajilgaag boliul
    controlSesrch();
});

elements.pageButtons.addEventListener('click', e => {
    const btn = e.target.closest(".btn-inline");
    if (btn) {
        const gotoPageNumber = parseInt(btn.dataset.goto, 10); //buhel too ruu huwirgana
        searchView.clearSearchResult();
        searchView.renderRecipes(state.search.result, gotoPageNumber);
    };
});

const r = new Recipe(47746);
r.getRecipe();