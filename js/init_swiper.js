!function () {
    var view = document.querySelector('#slidesView')
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: { direction: 'horizontal', loop: true, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', }, pagination: { el: '.swiper-pagination', dynamicBullets: true, }, },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.swiper = new Swiper(this.view.querySelector('.swiper-container'), this.swiperOptions)
        }
    }

    controller.init.call(controller, view)
}.call()
