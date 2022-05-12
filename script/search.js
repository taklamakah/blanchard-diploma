document.addEventListener('DOMContentLoaded', function () {
  // const overlay = document.querySelector('.overlay');
  const siteContainer = document.querySelector('.container');
  // const burgerMenuCloseBtn = burgerMenu.querySelector('.header-nav-btn-close');

  // Показ мобильного поиска
  function showSerchFormOnTouchscreen() {
    const headerTopContainer = siteContainer.querySelector('.header__top');
    const serchFormTouchscreen = siteContainer.querySelector('.search-form-touchscreen');
    const serchFormOpenBtn = siteContainer.querySelector('.search-form-touchscreen__btn');
    const closeFormBtn = siteContainer.querySelector('.serch-form-close-btn');
    const serchFormLabel = siteContainer.querySelector('.search-form-touchscreen__label');
    const logo = siteContainer.querySelector('.logo__link');

    if (window.innerWidth > 1024) {
      if (serchFormOpenBtn.dataset.width) {
        hideSerchForm();
        serchFormOpenBtn.removeAttribute('data-width');
      };
    } else if (window.innerWidth > 800 && window.innerWidth < 1025) {
      if (serchFormOpenBtn.dataset.width !== 'large') {
        hideSerchForm();
        serchFormOpenBtn.setAttribute('data-width', 'large');
        setListener();
      };
    } else if (window.innerWidth < 801) {
      if (serchFormOpenBtn.dataset.width !== 'small') {
        hideSerchForm();
        serchFormOpenBtn.setAttribute('data-width', 'small');
        setListener();
      };
    };

    function setListener() {
      serchFormOpenBtn.addEventListener('click', showSerchForm);
    };

    function showSerchForm() {
      switch (serchFormOpenBtn.dataset.width) {
        case 'large':
          serchFormTouchscreen.classList.add('search-form-touchscreen_absolute');
          closeFormBtn.classList.add('serch-form-close-btn_visible');
          serchFormLabel.classList.add('search-form-touchscreen__label_animate');
          setTimeout(() => {
            serchFormLabel.classList.add('search-form-touchscreen__label_visible');
            closeFormBtn.classList.add('serch-form-close-btn_animate');
          }, 100);
          closeFormBtn.addEventListener('click', hideSerchForm);
          break;
        case 'small':
          burger.classList.add('burger_unvisible');
          logo.classList.add('logo__link_unvisible');
          headerTopContainer.classList.add('header-top__container_width-60');
          serchFormTouchscreen.classList.add('search-form-touchscreen_width-100pr');
          serchFormLabel.classList.add('search-form-touchscreen__label_visible');
          setTimeout(() => {
            closeFormBtn.classList.add('serch-form-close-btn_visible');
            serchFormLabel.classList.add('search-form-touchscreen__label_animate');
            closeFormBtn.classList.add('serch-form-close-btn_animate');
          }, 100);
          closeFormBtn.addEventListener('click', hideSerchForm);
          break;
      };
    };

    function hideSerchForm() {
      switch (serchFormOpenBtn.dataset.width) {
        case 'large':
          serchFormLabel.classList.remove('search-form-touchscreen__label_animate');
          closeFormBtn.classList.remove('serch-form-close-btn_animate');
          setTimeout(() => {
            closeFormBtn.classList.remove('serch-form-close-btn_visible');
            serchFormLabel.classList.remove('search-form-touchscreen__label_visible');
            serchFormTouchscreen.classList.remove('search-form-touchscreen_absolute');
          }, 100);
          break;
        case 'small':
          serchFormLabel.classList.remove('search-form-touchscreen__label_animate');
          closeFormBtn.classList.remove('serch-form-close-btn_animate');
          setTimeout(() => {
            serchFormLabel.classList.remove('search-form-touchscreen__label_visible');
            closeFormBtn.classList.remove('serch-form-close-btn_visible');
            serchFormTouchscreen.classList.remove('search-form-touchscreen_width-100pr');
            headerTopContainer.classList.remove('header-top__container_width-60');
            logo.classList.remove('logo__link_unvisible');
            burger.classList.remove('burger_unvisible');
          }, 100);
          break;
      };
    };

  };

  showSerchFormOnTouchscreen();

});
