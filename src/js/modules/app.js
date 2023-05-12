import "./bvi/scss/bvi.scss";

import {Header} from "./header";
import {Slider} from "./slider";
import Swiper, {Navigation} from "swiper";
import Bvi from "./bvi/js/bvi";
import {Form} from "./form";
import {Modal} from "./modal";
import {Input} from "./input";
import {Agreement} from "./agreement";

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        this.initHeader();
        this.initArticleDrop();
        this.initForms();
        this.initMasonry();
        this.initSlider();
        this.initTimeline();
        this.initPlayer();
        this.initUploader();
        this.initDropSection();
        this.initMenu();
        this.initBvi();
        this.initIntro();
        this.initDropdown();
        this.initSelectDate();
        this.initModal();
        this.initInputs();
        this.initAgreement();
        this.initCondition();
    }

    initHeader() {
        const el = document.querySelector('[data-header]');
        if (el) this.header = new Header(el);
    }

    initArticleDrop() {
        const el = document.querySelectorAll('[data-article-drop]');
        if (el.length) this.articleDrop = [];

        el.forEach(item => {
            this.articleDrop.push(new ArticleDrop(item));
        });
    }

    initMasonry() {
        const el = document.querySelector('[data-masonry]');

        if (el) {
            this.masonry = new Masonry(el, {
                itemSelector: '.masonry__item',
                columnWidth: '.masonry__item',
                gutter: 10,
            });
        }
    }

    initSlider() {
        const el = document.querySelectorAll('[data-slider]');
        if (el.length) this.slider = [];

        el.forEach(item => {
            this.slider.push(new Slider(item));
        });
    }

    initPlayer() {
        const el = document.querySelectorAll('[data-player]');
        if(el.length) this.player = [];

        el.forEach(item => {
            this.player.push(new Player(item));
        })

    }

    initTimeline() {
        const el = document.querySelector('[data-timeline]');

        if (el) {
            this.timeline = new Swiper(el.querySelector('.swiper-container'), {
                slidesPerView: 'auto',
                modules: [Navigation],
                navigation: {
                    nextEl: '.timeline__button--next',
                    prevEl: '.timeline__button--prev',
                },
            });
        }
    }

    initUploader() {
        const el = document.querySelectorAll('[data-uploader]');
        if (el.length) this.uploader = [];

        el.forEach(item => this.uploader.push(new Uploader(item)));
    }

    initDropSection() {
        const el = document.querySelectorAll('[data-section-drop]');
        if (el.length) this.dropSection = [];

        el.forEach(item => this.dropSection.push(new DropSection(item, this.dropSection, this.header)));
    }

    initMenu() {
        const el = document.querySelector('[data-menu]');

        if (el) new Menu(el, this.header);
    }

    initBvi() {
        new Bvi({
            target: '[data-link-vipanel]',
            speech: true
        });
    }

    initIntro() {
        const el = document.querySelector('[data-intro]');

        if (el) new Intro(el);
    }

    initDropdown() {
        const els = document.querySelectorAll('[data-dropdown]');

        els.forEach(item => new Dropdown(item));
    }

    initSelectDate() {
        const el = document.querySelector('[data-select-date]');

        if (el) new SelectDate(el);
    }

    initForms() {
        const el = document.querySelectorAll('[data-form]');

        el.forEach(item => new Form(item));
    }

    initModal() {
        new Modal();
    }

    initInputs() {
        const el = document.querySelectorAll('[data-input]');

        el.forEach(item => new Input(item));
    }

    initAgreement() {
        const el = document.querySelectorAll('[data-agreement]');
        el.forEach(item => new Agreement(item));
    }

    initCondition() {
        const el = document.querySelectorAll('[data-condition]');
        if (el.length) this.condition = [];

        el.forEach(item => this.condition.push(new Condition(item)));
    }
}

export {App};
