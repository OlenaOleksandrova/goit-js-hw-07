// document.querySelector('.name-input').addEventListener('input', function () {
   
//     const input = this.value.trim();
//     const output = document.getElement(`name-output`);
//     output.textContent = input !== `` ? input : `Anonymous`;
// });

// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');

// inputName.addEventListener('input', () => {
  
//   const newValue = inputName.value.trim();

//   if (newValue === '') {
//     outputName.textContent = 'Anonymous';
//   } else {
//     outputName.textContent = newValue;
//   }
// });




const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');


inputName.addEventListener('input', function() {
    const trimmedValue = this.value.trim(); 

    
    outputName.textContent = trimmedValue !== '' ? trimmedValue : 'Anonymous';
});