require("babel-polyfill");
import Search from "./model/search";

// Web app tuluw
// Hailtiin query ,ur dun
// tuhain uzuulj baigaa jor
// laiklasan joruud
// Zahialj baigaa joriin nairlaganuud

const state = {};

const controlSesrch = async () => {
    // 1 web-ees hailtiin tulhuur ugiig awna.

    const query = 'pizza';

    if (query) {
        // 2 shineer hailtiin obektiig hiij ugnu.
        state.search = new Search(query);
        // 3 hailt hiihed zoriulj delgetsiin ui hiine.

        // 4 hailtiig guitsetgene .
        await state.search.doSearch();
        // 5 hailttin ur dung delgetsend haruulna.

        console.log(state.search.result);
    }


}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault(); //default uil ajilgaag boliul
    controlSesrch();
})