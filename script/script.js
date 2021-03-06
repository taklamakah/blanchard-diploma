`use strict`
$(document).ready(function() {
	$("img.lazyload").lazyload({
		effect: "fadeIn"
	});
});
document.addEventListener('DOMContentLoaded', function() {
		// Top header
		// переход от меню к разделам
		const anchors = document.querySelectorAll('a.header__nav-link')
		for(let anchor of anchors) {
			anchor.addEventListener('click', function(e) {
				e.preventDefault()
				const blockID = anchor.getAttribute('href')
				document.querySelector(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			})
		}
		/*CUSTOM SELECT*/
		const element = document.querySelector('#selectCustom');
		const choices = new Choices(element, {
			itemSelectText: '',
			searchEnabled: false,
			position: 'bottom',
			shouldSort: false
		});
	})


let gallerySlider = new Swiper(".section-gallery__slider-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: "#gallery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // 	pagination: {
// 		el: '#gallery__pagination',
// 		type: 'fraction',
// 		clickable: true,
// 		observer: true,
// 		resizeObserver: true,
// 		centeredSlides: true,
// 	},
// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	keyboard: {
// 		enabled: true,
// 		onlyInViewport: true
// 	},

  breakpoints: {
    441: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});



// Тултип
tippy('#marker1', {
	theme: 'custom',
	duration: [600, 600],
	maxWidth: 270,
});
tippy('#marker2', {
	theme: 'custom',
	duration: [600, 600],
	maxWidth: 270,
});
tippy('#marker3', {
	theme: 'custom',
	duration: [600, 600],
	maxWidth: 270,
});
// tabs
$(function() {
	$(".tabs__accordion").accordion({
		collapsible: true,
		heightStyle: 'content'
	});
});
//   // Tabs
document.querySelectorAll('.section-catalog__btn').forEach(function(tabsBtn) {
	tabsBtn.addEventListener('click', function(event) {
		document.querySelectorAll('.section-catalog__btn').forEach(function(tabsBtnActive) {
			tabsBtnActive.classList.remove('section-catalog__btn-active')
		})
		this.classList.add('section-catalog__btn-active')
		const path = event.currentTarget.dataset.path
		document.querySelectorAll('.tabs__content').forEach(function(tabsContent) {
			tabsContent.classList.remove('tabs__content-active')
		})
		document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-active')
		let firstMatch = document.querySelector(`[data-target="${path}"]`).querySelectorAll('.accordion__item button');
		let activeFirstMatch;
		firstMatch.forEach(element => {
			if(element.classList.contains('accordion__btn-active')) {
				activeFirstMatch = element;
			}
		});
		let firstMatchValue;
		let dataValueFirstMatch;
		if(!activeFirstMatch) {
			firstMatch = document.querySelector(`[data-target="${path}"]`).querySelector('.ui-accordion-content-active .accordion__item button');
			firstMatch.classList.add('accordion__btn-active');
			firstMatchValue = firstMatch.innerHTML;
			dataValueFirstMatch = firstMatch.dataset.path;
		} else {
			firstMatchValue = activeFirstMatch.innerHTML;
			dataValueFirstMatch = activeFirstMatch.dataset.path;
		}
		const areaFirstMatch = document.querySelector(`[data-target="${dataValueFirstMatch}"]`)
		areaFirstMatch.classList.add('tabs__painter-desc-active');
		$(function() {
			$(".tabs__accordion").accordion("refresh");
		});
	})
})
document.querySelectorAll('.accordion__btn').forEach(function(tabsBtnAcc) {
	tabsBtnAcc.addEventListener('click', function(event) {
		document.querySelectorAll('.accordion__btn').forEach(function(tabsBtnAccActive) {
			tabsBtnAccActive.classList.remove('accordion__btn-active')
		})
		this.classList.add('accordion__btn-active')
		let currentBtnActive = this.innerHTML;
		const pathAcc = event.currentTarget.dataset.path
		document.querySelectorAll('.tabs__painter-desc').forEach(function(tabsContentAcc) {
			tabsContentAcc.classList.remove('tabs__painter-desc-active')
		})
		document.querySelector(`[data-target="${pathAcc}"]`).classList.add('tabs__painter-desc-active')
	})
})
const linksToAcc = document.querySelectorAll('a.desc-plug__link')
for(let element of linksToAcc) {
	element.addEventListener('click', function(e) {
		e.preventDefault()
		const blockID = element.getAttribute('href')
		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
/*HIDDEN BUTTON EVENTS*/
// let button = document.querySelector('.section-event__btn');
// button.addEventListener('click', function() {
// 	document.querySelectorAll('.hidden').forEach(function(hiddenCard) {
// 		hiddenCard.classList.remove('hidden')
// 	})
// 	this.classList.add('hidden')
// });
// const mediaQuery = window.matchMedia('(max-width: 991px)');

// function handleTabletChange(e) {
// 	if(e.matches) {
// 		document.querySelector('.event-card3').classList.add('hidden');
// 		document.querySelector('.event-card3').classList.add('fadeInUp');
// 	}
// }
// mediaQuery.addListener(handleTabletChange);
// handleTabletChange(mediaQuery);

/*SLIDER PUBLICATION*/
var swiper2 = new Swiper('.swiper-publications', {
	navigation: {
		nextEl: '.publications-swiper-button-next',
		prevEl: '.publications-swiper-button-prev',
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true
	},
	a11y: {
		prevSlideMessage: 'Предыдущий',
		nextSlideMessage: 'Следующий слайд',
		firstSlideMessage: 'Это первый слайд',
		lastSlideMessage: 'Это последний слайд'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		clickable: true,
	},
	breakpoints: {
		// 321: {
		// 	slidesPerView: 1,
		// 	slidesPerGroup: 3,
		// 	spaceBetween: 10
		// },
		// 481: {
		// 	slidesPerView: 2,
		// 	slidesPerGroup: 3,
		// 	spaceBetween: 30
		// },
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 34
		},
		992: {
			slidesPerView: 2,
			slidesPerGroup: 3,
			spaceBetween: 49
		},
		1200: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 48
		}
	}
});

const mediaQueryPublications320 = window.matchMedia('(max-width: 600px)');

function handleTabletChangePublications320(e) {
	if(e.matches) {
		swiper2.destroy();
		document.querySelector('.slider-publications__swiper-container').classList.remove('.swiper-wrapper');
	}
}
mediaQueryPublications320.addListener(handleTabletChangePublications320);
handleTabletChangePublications320(mediaQueryPublications320);
/*SLIDER PROJECTS*/
var swiper3 = new Swiper('.slider-projects__swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true
	},
	a11y: {
		prevSlideMessage: 'Предыдущий',
		nextSlideMessage: 'Следующий слайд',
		firstSlideMessage: 'Это первый слайд',
		lastSlideMessage: 'Это последний слайд'
	},
	breakpoints: {
		280: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		485: {
			slidesPerView: 1,
			spaceBetween: 34
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 34
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 50,
			slidesPerGroup: 2
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 50,
			slidesPerGroup: 3,
			loopFillGroupWithBlank: true
		}
	}
});
/*HERO ANIMATION*/
let swiperSectionHero = new Swiper('.section-hero.swiper-container', {
	effect: 'fade',
	loop: true,
	autoplay: {
		delay: 1500,
	},
	speed: 3000,
	spaceBetween: 30,
});
const mediaQuery480 = window.matchMedia('(max-width: 600px)');

function handleTabletChange480(e) {
	if(e.matches) {
		document.querySelector('.section-event__wrapper').classList.add('mobileSwiper');
		document.querySelectorAll('.section-event__item').forEach(function(AllCard) {
			AllCard.classList.add('swiper-slide');
		})
	}
}
mediaQuery480.addListener(handleTabletChange480);
handleTabletChange480(mediaQuery480);
/*МОБИЛЬНЫЙ СВАЙПЕР*/
var swiperEvents = new Swiper(".mobileSwiper", {
	direction: 'horizontal',
	slidesPerView: 1,
	pagination: {
		el: ".events-pagination",
	},
});
// выпадающее меню
jQuery(document).ready(function(e) {
	function t(t) {
		e(t).bind("click", function(t) {
			t.preventDefault();
			e(this).parent().fadeOut()
		})
	}
	e(".dropdown-toggle").click(function() {
		var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
		e(".button-dropdown .dropdown-menu").hide();
		e(".button-dropdown .dropdown-toggle").removeClass("active");
		if(t) {
			e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
		}
	});
	e(document).bind("click", function(t) {
		var n = e(t.target);
		if(!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
	});
	e(document).bind("click", function(t) {
		var n = e(t.target);
		if(!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
	})
});
// Bottom header
// нижнее выпадающее меню
const buttonDrop = document.querySelectorAll('.nav-direction__link');
buttonDrop.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		let button = this;
		console.log(this)
		if(e.target.classList.contains('toggle')) {
			e.currentTarget.classList.remove('toggle')
		} else {
			e.target.classList.add('toggle')
			buttonDrop.forEach(el => {
				if(el != button) {
					el.classList.remove("toggle");
				}
			});
		}
	})
})
document.addEventListener('click', function(event) {
		if(!event.target.classList.contains('nav-direction__link') && !event.target.classList.contains('nav-direction__scroll')) {
			buttonDrop.forEach(function(e) {
				e.classList.remove('toggle')
			})
		}
	})
	//скрол в выпадающем меню
const simpleBar1 = new SimpleBar(document.getElementById('scroll-1'), {
	autoHide: false,
	scrollbarMaxSize: 28
});
simpleBar1.recalculate();
const simpleBar2 = new SimpleBar(document.getElementById('scroll-2'), {
	autoHide: false,
	scrollbarMaxSize: 28
});
simpleBar2.recalculate();
const simpleBar3 = new SimpleBar(document.getElementById('scroll-3'), {
	autoHide: false,
	scrollbarMaxSize: 28
});
simpleBar3.recalculate();
const simpleBar4 = new SimpleBar(document.getElementById('scroll-4'), {
	autoHide: false,
	scrollbarMaxSize: 28
});
simpleBar4.recalculate();
const simpleBar5 = new SimpleBar(document.getElementById('scroll-5'), {
	autoHide: false,
	scrollbarMaxSize: 28
});
simpleBar5.recalculate();
/*BURGER ACTION*/
$('#burger').click(function() {
	$("#menu").show('slide', {
		direction: 'right'
	}, 300);
});
$('#burger__close').click(function() {
	$("#menu").hide('slide', {
		direction: 'right'
	}, 300);
});
const mediaQueryMax991 = window.matchMedia('(max-width: 991px)');
/*MODAL*/
const cardGallery = document.querySelectorAll('.section-gallery__swiper-slide');
for(let card of cardGallery) {
	card.addEventListener('click', function() {
		const popup = document.querySelector('.popup');
		popup.classList.add('popup__is-active');
		let imgSrc = card.querySelector('picture source:nth-child(5)').getAttribute('srcset');
		const mediaQueryMax480img = window.matchMedia('(max-width: 480px)');

		function handleTabletChange480img(e) {
			if(e.matches) {
				imgSrc = card.querySelector('picture source:nth-child(1)').getAttribute('srcset');
			}
		}
		mediaQueryMax480img.addListener(handleTabletChange480img);
		handleTabletChange480img(mediaQueryMax480img);
		const newImg = document.createElement('img');
		newImg.src = imgSrc;
		$('.popup__content img').replaceWith(newImg);
		$("body").css("overflow", "hidden");
	});
}
document.querySelector('#popup__close').addEventListener('click', function() {
	document.querySelector('.popup').classList.remove('popup__is-active');
	$("body").css("overflow", "auto");
});

document.querySelector('.popup').addEventListener('click', function() {
	document.querySelector('.popup').classList.remove('popup__is-active');
  $("body").css("overflow", "auto");
});

const popupScroll = new SimpleBar(document.getElementById('popup__scroll'), {
	autoHide: false,
	scrollbarMaxSize: 20
});
// popupScroll.recalculate();

//Переход к футеру
let btn = document.querySelector('.btn-to-footer')
btn.addEventListener('click', function() {
	document.querySelector('#footer').scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
});
//Поиск по сайту (epic fail)
// $(document).ready(function () {
//   $("#submit").click(function () {
//     var term = "";
//     var n = "0";
//     $('body').removeHighlight();
//     term = $('#term').attr('value');
//     if ($('#term').val() == "") {
//       $("p.results").fadeIn().append("Вы ничего не ввели :(");
//       return false;
//     } else {
//       $('.content').highlight(term);
//       n = $("p.highlight").length;
//       if (n == 0) {
//         $("p.results").fadeIn().append("Ничего такого в тексте нет");
//       } else {
//         $("p.results").fadeIn().append('Найдено совпадений:' + n);
//       }
//       return false;
//     }
//   });
// });

/*FORM VALIDATE*/
$(document).ready(function() {
	$("#phone").mask("+7 (999) 999-99-99");
});
let validator = new JustValidate('.form__wrap', {
	colorWrong: '#D11616',
	rules: {
		name: {
			required: true
		},
		tel: {
			required: true,
			function: (name, value) => {
				const phone = selector.inputmask.unmaskedvalue()
				return Number(phone) && phone.length === 10
			}
		}
	},
	messages: {
		name: 'Недопустимый формат',
		tel: 'Недопустимый формат'
	},
  // //phpmailer
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
});

/*YANDEX MAP*/
document.addEventListener('DOMContentLoaded', () => {
	// lazyload для яндекс-карты
	function showMap() {
		const mapWrap = document.querySelector('.section-contacts__map');
		if(mapWrap.getBoundingClientRect().top - document.documentElement.clientHeight < 0) {
			ymaps.ready(init);
			this.removeEventListener('scroll', showMap);
		}
	}
	window.addEventListener('scroll', showMap);

	function init() {
		var myMap = new ymaps.Map("myMap", {
			center: [55.758468, 37.601088],
			zoom: 14,
			controls: []
		}, {
			suppressMapOpenBlock: true
		});
		var geolocationControl = new ymaps.control.GeolocationControl({
			options: {
				position: {
					right: 10,
					top: 355
				}
			}
		});
		myMap.controls.add(geolocationControl);
		var zoomControl = new ymaps.control.ZoomControl({
			options: {
				size: "small",
				position: {
					right: 10,
					top: 265
				}
			}
		});
		myMap.controls.add(zoomControl);
		var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
			balloonContentHeader: "Шоурум №4",
			balloonContentBody: "Леонтьевский переулок, дом 5, строение 1"
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/icon/icon_yandexmap.svg',
			iconImageSize: [20, 20],
			iconImageOffset: [0, 0]
		});
		var myGeoObject = new ymaps.GeoObject({
			geometry: {
				type: "Point",
				coordinates: [55.758468, 37.601088]
			}
		});
		myMap.geoObjects.add(myPlacemark);

		function onResizeMap() {
			if($(window).width() < '1600') {
				myMap.setCenter([55.7622, 37.63]);
				if($(window).width() < '1199') {
					myMap.setCenter([55.7599, 37.6177]);
					myMap.controls.remove(zoomControl);
					myMap.controls.remove(geolocationControl);
					if($(window).width() < '991') {
						myMap.setCenter([55.7600, 37.6105]);
					}
				}
			} else {
				myMap.setCenter([55.7622, 37.6461]);
			}
		}
		onResizeMap();
		window.onresize = function() {
			onResizeMap();
		};
		myMap.geoObjects.add(myPlacemark);
	}
});





let eventSlider = new Swiper(".section-event__wrapper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".section-event__swiper-pagination",
		clickable: true
  },
  navigation: {
    nextEl: ".section-event__btn-prev",
    prevEl: ".section-event__btn-next",
    disabledClass: "section-event__btn-disabled"
  },


  breakpoints: {
    611: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34
    },

    971: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1281: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});






(() => {
  const checkBtn = document.querySelector('.js-check-heading');

  checkBtn.addEventListener('click', function () {
      this.classList.toggle('is-active');
  });
})();



