import Swiper, {Navigation, Pagination} from "swiper";

class Slider {
    constructor(el) {
        this.el = el;
        this.swiper = Swiper;
        this.init = false;

        this.type = this.el.hasAttribute('data-slider-desktop');
        this.desktop = window.matchMedia('(min-width: 1200px)');
        this.mobile = window.matchMedia('(min-width: 0px) and (max-width: 1199px)');

        this.quantity = this.el.getAttribute('data-slider-quantity') || 'auto';
        this.centered = (this.el.hasAttribute('data-slider-centered'));
        this.looped = (this.el.hasAttribute('data-slider-looped'));

        this.setListeners();
    }

    setListeners() {
        this.initSlider();

        window.addEventListener('resize', () => {
            this.initSlider();
        });
    }

    initSlider() {
        if (!this.type || this.type && this.desktop.matches) {
            if (!this.init) {
                this.init = true;
                this.swiper = this.create();
            }
        } else if (this.type && this.mobile.matches) {
            if (this.init) {
                this.swiper.destroy();
                this.init = false;
            }
        }
    }

    create() {
        return new Swiper(this.el.querySelector('.swiper-container'), {
            modules: [Navigation, Pagination],
            spaceBetween: 15,
            loop: this.looped,
            watchSlidesProgress: true,
            slideVisibleClass: 'slider__slide--visible',
            slidesPerView: 'auto',
            centeredSlides: this.centered,
            loopAdditionalSlides: 3,
            pagination: {
                el: '.slider__pagination',
                type: 'bullets',
                clickable: true,
                bulletClass: 'bullet',
                bulletActiveClass: 'bullet--active'
            },
            navigation: {
                nextEl: this.el.querySelector('[data-slider-next]'),
                prevEl: this.el.querySelector('[data-slider-prev]'),
                disabledClass: 'disabled'
            },
            breakpoints: {
                1200: {
                    spaceBetween: 30,
                    slidesPerView: this.quantity,
                }
            }
        });
    }
}

function createSlider(item) {
    // const type = item.hasAttribute('data-slider-desktop');
    // const desktop = window.matchMedia('(min-width: 1200px)');
    // const mobile = window.matchMedia('(min-width: 0px) and (max-width: 1199px)');
    // let swiper = Swiper;
    // let init = false;
    //
    // const quantity = item.getAttribute('data-slider-quantity') || 'auto';
    // const centered = (item.hasAttribute('data-slider-centered'));
    // const looped = (item.hasAttribute('data-slider-looped'));

    // function initSlider() {
    //     if (!this.type || this.type && this.desktop.matches) {
    //         if (!this.init) {
    //             this.init = true;
    //             this.swiper = create();
    //         }
    //     } else if (this.type && this.mobile.matches) {
    //         if (this.init) {
    //             this.swiper.destroy();
    //             this.init = false;
    //         }
    //     }
    // }

    function create() {
        // return new Swiper(item.querySelector('.swiper-container'), {
        //     modules: [Navigation, Pagination],
        //     spaceBetween: 15,
        //     loop: looped,
        //     watchSlidesProgress: true,
        //     slideVisibleClass: 'slider__slide--visible',
        //     slidesPerView: 'auto',
        //     centeredSlides: centered,
        //     loopAdditionalSlides: 3,
        //     pagination: {
        //         el: '.slider__pagination',
        //         type: 'bullets',
        //         clickable: true,
        //         bulletClass: 'bullet',
        //         bulletActiveClass: 'bullet--active'
        //     },
        //     navigation: {
        //         nextEl: item.querySelector('.slider__button--next'),
        //         prevEl: item.querySelector('.slider__button--prev'),
        //         disabledClass: 'slider__button--disabled'
        //     },
        //     breakpoints: {
        //         1200: {
        //             spaceBetween: 30,
        //             slidesPerView: quantity,
        //         }
        //     }
        // });
    }

    // initSlider();
    //
    // window.addEventListener('resize', () => {
    //     initSlider();
    //
    //     return swiper;
    // });
    //
    // return swiper;
}

export {Slider};