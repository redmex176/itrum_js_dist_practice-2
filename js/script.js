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
          body = document.querySelector('body');
          
    body.append(inputText);
    body.append(btnLogInput);
    body.append(btnClearInput);
    body.append(btnBlockInput);
    body.append(btnHideInput);
    body.append(btnRandomColor);
    body.append(btnCreateBlock);
    body.append(removeLastblock);
    body.append(numInput);
    body.append(btnNthBlock);

    btnLogInput.textContent = 'log input';
    btnClearInput.textContent = 'clear input';
    btnBlockInput.textContent = 'block input';
    btnHideInput.textContent = 'hide input';
    btnRandomColor.textContent = 'random color';
    btnCreateBlock.textContent = 'create block';
    removeLastblock.textContent = 'remove last block';
    btnNthBlock.textContent = 'remove Nth block';

    btnLogInput.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(inputText.value);
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

    function fillRandomColor() {
        const colors = ['black', 'red', 'green', 'blue'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        inputText.style.color = randomColor;
    }

    function createBlock() {
        const newBlock = document.createElement('div');

        newBlock.textContent = inputText.value;
        inputText.value = '';

        body.append(newBlock);
    }

    function deleteLastBlock() {
        const allBlocks = document.querySelectorAll('div'),
        blocks = Array.from(allBlocks);
        
        body.removeChild(blocks[blocks.length - 1]);
        console.log(blocks);
    }

    function deleteNthBlock() {
        const allBlocks = document.querySelectorAll('div'),
              blocks = Array.from(allBlocks);
        
        const num = parseInt(numInput.value);
        console.log(typeof(num));
        inputText.value = '';
        body.removeChild(blocks[num - 1]);     
    }

    btnRandomColor.addEventListener('click', fillRandomColor);
    btnCreateBlock.addEventListener('click', createBlock);
    removeLastblock.addEventListener('click', deleteLastBlock);
    btnNthBlock.addEventListener('click', deleteNthBlock);


});