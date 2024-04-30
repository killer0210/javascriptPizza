import { elements } from "./base";

//private function
const renderRecipe = recipe => {
    const markup = `
                <li>
                    <a class="results__link " href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
                `;
    // ul-ruu nemne
    elements.searchResultList.insertAdjacentHTML('beforeend', markup)
};

export const clearSearchQuery = () => {
    elements.searchInput.value = "";
};
export const clearSearchResult = () => {
    elements.searchResultList.innerHTML = '';
    elements.pageButtons.innerHTML = '';
}

export const getInput = () => elements.searchInput.value;

export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {

    //page = 2, start =0, end = 20
    const start = (currentPage - 1) * resPerPage;
    const end = currentPage * resPerPage;
    //undefiend
    recipes.slice(start, end).forEach(renderRecipe); //slice zusne starttaas end hoorond dawtalt hiine

    // huudaslatiin towchluur gargah
    const totalPages = Math.ceil(recipes.length / resPerPage); //ceil deeshee buheldene
    renderButtons(currentPage, totalPages);
};
// type ===> 'prev', 'next' direction
const creatButton = (page, type, direction) => `<button class="btn-inline results__btn--${type}" data-goto=${page}>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${direction}"></use>
                    </svg>
                    <span>Хуудас ${page}</span>
                </button>`;

const renderButtons = (currentPage, totalPages) => {
    let buttonHtml;
    if (currentPage === 1 && totalPages > 1) {
        // 1-R huudasnii deer baina, 2-r huudas gedeg tovchiig garga
        buttonHtml = creatButton(2, "next", 'right');
    } else if (currentPage < totalPages) {
        // umnuh bolon daraachiin huudas ruu shiljih towchiig haruul
        buttonHtml = creatButton(currentPage - 1, "prev", 'left');
        buttonHtml += creatButton(totalPages + 1, "next", 'right');
    }
    else if (currentPage === totalPages) {
        // Hamgiin suuliin huudas deer baina. umnuh ruu shiljuleh tovchiig darna
        buttonHtml = creatButton(totalPages - 1, "prev", 'left');
    }

    // elements.pageButtons.insertAdjacentHTML("afterbegin", buttonHtml);
    elements.pageButtons.innerHTML = buttonHtml;
};

// type ===> 'prev', 'next'
