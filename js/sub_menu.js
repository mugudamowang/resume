
let navBarTargetList = document.querySelectorAll('#navBarul > li')
for (let i = 0; i < navBarTargetList.length; i++) {
    navBarTargetList[i].onmouseenter = function (e) {
        e.currentTarget.classList.add('active')
    }
    navBarTargetList[i].onmouseleave = function (e) {
        e.currentTarget.classList.remove('active')
    }
}