import $ from 'jquery'
import './app2.css'
const $tabBar = $('#app2 .tabBar')//app2里面的tabBar
const $tabContent = $('#app2 .tabContent')
$tabBar.on('click', 'li', (e) => {
    let $li = $(e.currentTarget);
    $li.addClass('selected')
        .siblings().removeClass('selected')
    let index = $li.index()
    $tabContent.children().eq(index).addClass('active')
        .siblings().removeClass('active')
})
// $tabBar.children().eq(0).trigger('click')