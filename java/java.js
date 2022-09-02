const input = document.querySelector('#userName');   // create variable

input.addEventListener('keydown', function(e) {      //events to listen for key strokes
    console.log('KEY DOWN!');
});
input.addEventListener('keyup', function(e) {
    console.log('KEY UP!');
});
input.addEventListener('keypress', function(e) {
    console.log('KEY PRESS!');
});
                                                          // create self populating ordered list 
const addItemInput = document.querySelector('#addItem');
const itemsOL = document.querySelector('#items');
                                                          //listen for key press
                                                           //add item
                                                           //clear placeholder for next item
addItemInput.addEventListener('keypress', function(e) {
   if(e.key === 'Enter') {
    if(!this.value) return;
      const newItemText = this.value;
      const newItem = document.createElement('li');
      newItem.innerText = newItemText;
      itemsOL.appendChild(newItem);
      this.value = '';
   }
});
