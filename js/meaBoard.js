!function () {
    var postView = document.querySelector('#postMessage')
    var showView = document.querySelector('#showMessage')

    var controller = {
        postView: postView,
        showView: showView,
        init: function() {
            //初始化
            AV.init({
                appId: "0iRrrBqig9K0WxJS8D3Pr6Jf-gzGzoHsz",
                appKey: "vLACPtUQYnenvRrddJ0YfgEe",
                serverURLs: "https://0irrrbqi.lc-cn-n1-shared.com"
            });

            //存入数据
            postView.addEventListener('submit', (e) => {
                e.preventDefault()//防止刷新页面
                let comment = postView.querySelector('input[name = content]').value
                let name = postView.querySelector('input[name = name]').value
                if (comment === "") { alert('GIAO~~~不能提交空字符QAQ') }
                else {
                    let Message = AV.Object.extend('Message')
                    let message = new Message()
                    message.set('comment', comment)
                    message.set('name', name)
                    message.save()
                        .then(

                            (message) => {
                                let li = document.createElement('li')
                                li.innerHTML = message.attributes.comment + "<sub>" + message.attributes.name + "</sub>"
                                showView.appendChild(li)
                                postView.querySelector('input[name = content]').value = ""
                            }
                        )
                        .then(
                            (message) => { console.log("真的存入成功") },
                            (message) => { console.log("存入失败") }
                        )
                }
            })

            var query = new AV.Query('Message');
            query.find().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerHTML = item.comment + "<sub>" + item.name + "</sub>"
                    showView.appendChild(li)
                });
            })

        }
    }

    controller.init.call()
}.call()