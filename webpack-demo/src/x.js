import './x.scss'
import './y.less'
import './z.styl'
import png from './assets/iu.png'


console.log(png)
let app2=document.getElementById('app2')
app2.innerHTML= `<img src="${png}">`


// 懒加载lazy.js文件
const button=document.createElement('button')
button.innerText='懒加载'
button.onclick=()=>{
    const promise=import('./lazy')
    promise.then((module)=>{
        const fn=module.default
        fn()
    })
}
app2.appendChild(button)

export default  'xxx'