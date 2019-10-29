if (module.hot) {
  module.hot.accept();
}

// Фильтр
let filter = () => {
  let input = document.getElementById('tract');

  input.addEventListener('keyup', () => {
    let filter = input.value.toLowerCase(),
        filterItems = document.querySelectorAll('#search label');
        console.log(filterItems)
        filterItems.forEach(item => {
          if(item.innerHTML.toLowerCase().indexOf(filter) > -1) {
            item.style.display = '';
          } else {
            item.style.display = 'none'
          }
        })
  })
};

filter();

// Сброс чекбоксов

document.getElementById('clear').addEventListener('click', (e) => {
    let block = document.getElementById('tractItems');
    let kkk = block.querySelectorAll('input[type=checkbox]');
    kkk.forEach(function(el) {
      el.checked = false;
    });
})

// вывод в консоль значения чекбокса

let checkbox = document.querySelectorAll('.check'),
    ppp = [];
for (i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("click", checkedCheckboxes)
}

function checkedCheckboxes() {
  if (checkbox[i].checked) {
    ppp.push(checkbox[i].value);
    console.log(checkbox[i].value);
 }
}


document.querySelector('.navbar-btn').classList.add('active')
document.querySelector('.tab-content').classList.add('active')

function selectPanel(e) {
  let target = e.target.dataset.target;
  document.querySelectorAll('.navbar-btn, .tab-content').forEach(el => el.classList.remove('active'))
  e.target.classList.add('active')
  document.querySelector('.' + target).classList.add('active')

}
document.querySelectorAll('.navbar-btn').forEach(el => {
  el.addEventListener('click', selectPanel)
})
