import {Fancybox} from "@fancyapps/ui";

class Modal {
    constructor() {
        this.init();
    }

    init() {
        Fancybox.bind('[data-fancybox="modal-form"]', {
            type: "inline"
        });
    }
}

export {Modal};