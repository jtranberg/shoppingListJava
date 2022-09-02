const input = document.querySelector('#userName');

input.addEventListener('keydown', function(e) {
    console.log('KEY DOWN!');
});
input.addEventListener('keyup', function(e) {
    console.log('KEY UP!');
});
input.addEventListener('keypress', function(e) {
    console.log('KEY PRESS!');
});

const addItemInput = document.querySelector('#addItem');
const itemsOL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
   if(e.key === 'Enter') {
      const newItemText = this.value;
      const newItem = document.createElement('li');
      newItem.innerText = newItemText;
      itemsOL.appendChild(newItem);
      this.value = '';
   }
});
