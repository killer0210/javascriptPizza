export const elements = {
    searchForm: document.querySelector(".search"),
    searchInput: document.querySelector(".search__field"),
    searchResultDev: document.querySelector(".results"),
    searchResultList: document.querySelector(".results__list"),
    pageButtons: document.querySelector(".results__pages"),
};
export const elementsStrings = {
    loader: "loader",
};
export const clearLoader = parent => {
    const loader = document.querySelector(`.${elementsStrings.loader}`);

    if (loader) loader.parentElement.removeChild(loader);
}

export const renderLoader = parent => {
    const loader = `
                    <div class="${elementsStrings.loader}">
                        <svg>
                            <use href="img/icons.svg#icon-cw"></use>
                        </svg>
                    </div>
                    `;

    parent.insertAdjacentHTML('afterbegin', loader);
}