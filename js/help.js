/* dropdown */
const dropDownButton = document.querySelector('.dropdown-button');
const dropDownMenu = document.querySelector('.dropdown-menu');

/* вкл/выкл выпадающего списка */
dropDownButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('dropdown-show');
})


/* клик вне пунктов меню */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-button')) {
    dropDownMenu.classList.remove('dropdown-show');
  }
})


/* help-search */
const inputSearch = document.querySelector('.input-search');
const searchMenu = document.querySelector('.search-menu');

/* вкл/выкл выпадающего списка */
inputSearch.addEventListener('click', () => {
  searchMenu.classList.add('search-show');
})

// закрытие выпадающего списка по клику на пункты меню
const searchArticles = document.querySelectorAll('.search-menu__items');
searchArticles.forEach(item => {
  item.addEventListener('click', () => {
    searchMenu.classList.remove('search-show');
  })
})

/* клик вне пунктов меню */
document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-menu') && !event.target.closest('.input-search')) {
    searchMenu.classList.remove('search-show');
  }
})

/* карточки */
const fetchData = () => {
  return fetch('../data.json')
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
};

const renderData = async () => {
  try {
    const products = await fetchData();
    const productsWrapper = document.querySelector('.products-wrapper');

    if (productsWrapper) {
      products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('card-wrapper');

        div.innerHTML = `
          <a class="card-link" href="#" target="_blank" rel="noopener noreferrer nofollow"></a>
          <div class="card">
            <div class="card-image">
              <img src="${product.imgSrc}" alt="image">
            </div>
            <div class="card-text__descr text-secondary">${product.rating}</div>
            <div class="card-text__config text-secondary">${product.name}</div>
            <div class="card-text__date text-secondary">${product.price}</div>
          </div>
        `;

        productsWrapper.appendChild(div);
      });
    } else {
      console.error('Element with class "products-wrapper" not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

/* help-list */
const links = document.querySelectorAll('.help-btn');

links.forEach(link => {
  link.addEventListener('click', event => {
    document.querySelector('.help-btn.help-btn__active').classList.remove('help-btn__active');
    event.currentTarget.classList.add('help-btn__active');
  })
})