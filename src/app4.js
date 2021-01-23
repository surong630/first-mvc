import './app4.css'
import $ from 'jquery'
$('.round').on('mouseenter', () => {
  $('.round').addClass('active')
}).on('mouseleave', () => {
  $('.round').removeClass('active')
})