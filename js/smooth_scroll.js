window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
        
        let highLightTargets = document.querySelectorAll("[data-highlight]")
        let index = 0;

        for (let i = 0; i < highLightTargets.length; i++) {
            highLightTargets[i].classList.remove('slideinSoft')
            if (Math.abs(highLightTargets[i].offsetTop - window.scrollY) < Math.abs(highLightTargets[index].offsetTop - window.scrollY)) {
                index = i
            }
        }
        highLightTargets[index].classList.add('slideinSoft')
        let highLightId = highLightTargets[index].id
        let highlightNav = document.querySelector('a[href ="#' + highLightId + '"]')
        let brothersNav = highlightNav.parentNode.parentNode.children
        for (let i = 0; i < brothersNav.length - 1; i++) {
            brothersNav[i].classList.remove('highlight')
        }
        highlightNav.parentNode.classList.add('highlight')
    } else {
        topNavBar.classList.remove('sticky')
    }
}

let loadcateTargets = document.querySelectorAll('#topNavBar #navBarul > li > a')
function animate(time) { requestAnimationFrame(animate); TWEEN.update(time); }
requestAnimationFrame(animate)
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