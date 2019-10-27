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