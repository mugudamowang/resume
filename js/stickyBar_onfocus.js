!function () {
    var view = document.querySelector('#topNavBar')

    var controller = {
        view: null,
        init: function(view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function() {
            var view = this.view
            window.onscroll = ()=> {//事件的this会与controller的this冲突
                if (window.scrollY > 0) {
                    this.active()
                    this.onfocus()
                } else {
                    this.deactive()
                }
            }
        }, 
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        },
        onfocus: function(){
            let highLightTargets = document.querySelectorAll("[data-highlight]")
                    let index = 0;
                    for (let i = 0; i < highLightTargets.length; i++) {
                        highLightTargets[i].classList.remove('slideinSoft')
                        if (Math.abs(highLightTargets[i].offsetTop - window.scrollY) < Math.abs(highLightTargets[index].offsetTop - window.scrollY)) {
                            index = i
                        }
                    }
                    highLightTargets[index].classList.add('slideinSoft')
        }
    }

    controller.init.call(controller,view)
}.call()



                //highlight部分待优化
                   //以下代码是添加到导航栏的高亮待优化
                //    let highLightId = highLightTargets[index].id
                //    let highlightNav = document.querySelector('a[href ="#' + highLightId + '"]')
                //    let brothersNav = highlightNav.parentNode.parentNode.children
                //    for (let i = 0; i < brothersNav.length - 1; i++) {
                //        brothersNav[i].classList.remove('highlight')
                //    }
                //    highlightNav.parentNode.classList.add('highlight')