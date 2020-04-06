!function () {
    var view = document.querySelector('#navBarul')
    view.style.border = "1px solid red"

    var controller = {
        view: null,
        loadcateTargets: null,
        init: function(){
            this.view = view
            this.initAnimation()
            this.loadcateAnimation()
        },
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate)
        },
        loadcateAnimation: function(){
            let loadcateTargets = this.view.querySelectorAll('#navBarul > li > a')

            for (let i = 0; i < loadcateTargets.length; i++) {
                loadcateTargets[i].onclick = function (e) {
                    e.preventDefault()
                    let href = e.currentTarget.getAttribute('href')
                    let currentTop = window.scrollY
                    let TargetTop = 0
                    if (document.querySelector(href)) {
                        TargetTop = document.querySelector(href).offsetTop - 100
                    }
                    let times = Math.abs(TargetTop - currentTop)
                    if (times > 1000) {
                        times = 1000
                    }
                    const coords = { y: currentTop }
                    const tween = new TWEEN.Tween(coords)
                        .to({ y: TargetTop }, times)
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .onUpdate(() => { window.scrollTo(0, coords.y) })
                        .start()
                }
            }
        }
    }
    controller.init.call(controller,view)
}.call()
