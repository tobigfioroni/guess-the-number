// Numero aleatorio del 1 al 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
      
// Constante que hace referencia a etiquetas HTML que almacenan numeros intentados, resultado y pistas mayor o menor. 
      const guesses = document.querySelector('.guesses');
      const lastResult = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
// Constante que hace referencia a etiquetas HTML que almacena boton de envio y campo de entrada de los numeros.  
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
// Variable que almacena los intentos de los jugadores y otra que hara que reinicie el juego luego de terminarlo.
      let guessCount = 1;
      let resetButton;
// Funcion que al tocar el boton de envio se ejecutara. 
      function checkGuess() {
        const userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Números intentados: ';
        }

        guesses.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
          lastResult.textContent = 'Felicidades! Adivinaste!';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = '!!!FIN DEL JUEGO!!!';
          lowOrHi.textContent = '';
          setGameOver();
        } else {
          lastResult.textContent = 'Te equivocaste! intenta de nuevo!';
          lastResult.style.backgroundColor = 'red';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Pista: Un numero mas grande!' ;
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Pista: Un numero mas bajo!';
          }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
      }

      guessSubmit.addEventListener('click', checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Iniciar nuevo juego';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for (const resetPara of resetParas) {
          resetPara.textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }