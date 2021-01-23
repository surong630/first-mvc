import $ from 'jquery'

const $add = $('#add')
const $decrease = $('#decrease')
const $double = $('#double')
const $divide = $('#divide')
const $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n  || 100)
$add.on('click', () => {
  let n = parseInt($number.text())
  n+=1
  localStorage.setItem('n', n)
  $number.text(n)
})
$decrease.on('click', () => {
  let n = parseInt($number.text())
  n-=1
  localStorage.setItem('n', n)
  $number.text(n)
})
$double.on('click', () => {
  let n = parseInt($number.text())
  n*=2
  localStorage.setItem('n', n)
  $number.text(n)
})
$divide.on('click', () => {
  let n = parseInt($number.text())
  n/=2
  localStorage.setItem('n', n)
  $number.text(n)
})