let cp = 2
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${cp}.json`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            cp += 1
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            //将符合JSON语法的字符串转变成对应的对象或者其他东西
            const object = JSON.parse(request.response)
            console.log(object)
            myname.textContent = object.name
        }
    }
    request.send()
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            //console.log(request.response)
            console.log(request.responseXML)
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange = ()=>{
        //readyState为4时表示下载完成，但不知是失败还是成功
        if(request.readyState === 4){
            //成功的status是2xx，失败的是4xx、5xx
            if(request.status >= 200 && request.status < 300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }
            else{
                console.log(request.status)
            }
        }
    }
    request.send()
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/test.js')
    request.onload = ()=>{
        console.log(typeof(request.response))
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{}
    request.send()
}
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload = ()=>{
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror = ()=>{
    }
    request.send()
}

