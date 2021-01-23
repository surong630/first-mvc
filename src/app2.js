import $ from 'jquery'
import './app2.css'
$('#box1').on('click', 'li', (e) => {
  let index = $(e.currentTarget).index()
  console.log(index);
  $('#box1 li').eq(index).addClass('active').siblings().removeClass('active')
  $("#box2 li").eq(index).addClass('selected').siblings().removeClass('selected')
})
$('#box1 li').eq(0).trigger('click')