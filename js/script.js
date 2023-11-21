document.addEventListener('DOMContentLoaded', () =>{
    const inputText = document.createElement('input'),
          btnLogInput = document.createElement('button'),
          btnClearInput = document.createElement('button'),
          btnBlockInput = document.createElement('button'),
          btnHideInput = document.createElement('button'),
          btnRandomColor = document.createElement('button'),
          btnCreateBlock = document.createElement('button'),
          removeLastblock = document.createElement('button'),
          numInput = document.createElement('input'),
          btnNthBlock = document.createElement('button'),
          body = document.querySelector('body'),
          colors = ['black', 'red', 'green', 'blue']; // podobnoe luchshe vinosit v globalnuu oblast vidimosti +

        
    const arrDOM = [
        inputText, 
        btnLogInput, 
        btnClearInput, 
        btnBlockInput,
        btnHideInput,
        btnRandomColor,
        btnCreateBlock,
        removeLastblock,
        numInput,
        btnNthBlock
    ];

    arrDOM.forEach(item => {
        body.append(item);
    });
    
    btnLogInput.textContent = 'log input';
    btnClearInput.textContent = 'clear input';
    btnBlockInput.textContent = 'block input';
    btnHideInput.textContent = 'hide input';
    btnRandomColor.textContent = 'random color';
    btnCreateBlock.textContent = 'create block';
    removeLastblock.textContent = 'remove last block';
    btnNthBlock.textContent = 'remove Nth block';

    numInput.setAttribute("type", "number");
    numInput.setAttribute("placeholder", "number");

    function fillRandomColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        inputText.style.color = randomColor;
    }

    function createBlock() {// dobavit proverku na nalichie input value  
        const newBlock = document.createElement('div');

        if(inputText.value == '') {

        } else {
            newBlock.textContent = inputText.value;
            inputText.value = '';

        body.append(newBlock);
        }
    }

    function deleteLastBlock() {
        const allBlocks = document.querySelectorAll('div'),
        blocks = Array.from(allBlocks);
        if(blocks.length !== 0) {
            body.removeChild(blocks[blocks.length - 1]);
        }
        
        
    }

    function deleteNthBlock() {// sdelat proverku na nalichie detei
        const allBlocks = document.querySelectorAll('div'),
        blocks = Array.from(allBlocks);
        if(numInput.value !== '' && blocks.length !== 0) {
            const num = parseInt(numInput.value);

            inputText.value = '';
            body.removeChild(blocks[num - 1]);  
        } else {
            console.log('вы не ввели число!');
        }
       
    }

    btnLogInput.addEventListener('click', (e) => {
        e.preventDefault();
        if(inputText.value !== '' &&inputText.value !== ' ' ) {
            console.log(inputText.value);
        }
        
    });

    btnClearInput.addEventListener('click', (e) =>{
        e.preventDefault();
        inputText.value = '';
    });

    btnBlockInput.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.disabled = !inputText.disabled;
    });

    btnHideInput.addEventListener('click', (e) => {
        e.preventDefault();
        inputText.style.display = (inputText.style.display === 'none') ? 'block' : 'none';
    });
// removing event listeners
    btnRandomColor.addEventListener('click', fillRandomColor);
    btnCreateBlock.addEventListener('click', createBlock);
    removeLastblock.addEventListener('click', deleteLastBlock);
    btnNthBlock.addEventListener('click', deleteNthBlock);

});