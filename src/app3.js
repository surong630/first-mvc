import './app3.css'
import $ from 'jquery'
$('.square').on('click', () => {
  $('.square').toggleClass('active')
})