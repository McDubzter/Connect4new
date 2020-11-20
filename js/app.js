document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const newgame = document.querySelector('#newgame')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1


  for (var i = 0, len = squares.length; i < len; i++)

  (function(index){
    squares[i].onclick = function(){

      //onclick placement must be above a "taken" square
      if(squares[index + 4].classList.contains('taken')
      && !squares[index].classList.contains('taken')) {

        if(currentPlayer === 1) {
          squares[index].classList.add('taken')
          squares[index].classList.add('player-one')
          //swap players after placement
          currentPlayer = 2
          displayCurrentPlayer.innerHTML = currentPlayer
        }

        else if (currentPlayer === 2)
        {
          squares[index].classList.add('taken')
          squares[index].classList.add('player-two')
          //swap players after placement
          currentPlayer = 1
          displayCurrentPlayer.innerHTML = currentPlayer
        }
      }
      else alert('There is already a piece here... Move somewhere else eh!')
    }
  }) (i)


  //checking for winning line
  //each individual win case

  function checkBoard() {
    const winningArrays = [
      [0,1,2,3], [0,4,8,12], [0,5,10,15], [1,5,9,13], [2,6,10,14], [3,7,11,15], [3,6,9,12], [4,5,6,7], [8,9,10,11], [12,13,14,15]
  ]

  //this checks for 4 in a row of same player pieces
  for(let y = 0; y < winningArrays.length; y++) {
    const square1 = squares[winningArrays[y][0]]
    const square2 = squares[winningArrays[y][1]]
    const square3 = squares[winningArrays[y][2]]
    const square4 = squares[winningArrays[y][3]]

    if(square1.classList.contains('player-one')
    && square2.classList.contains('player-one')
    && square3.classList.contains('player-one')
    && square4.classList.contains('player-one')) {

    //4 blue pieces
    result.innerHTML = 'Blue Wins!'

    }

    else if(square1.classList.contains('player-two')
    && square2.classList.contains('player-two')
    && square3.classList.contains('player-two')
    && square4.classList.contains('player-two')) {

    //4 red pieces
    result.innerHTML = 'Red Wins!'
    }
  }
}

squares.forEach(square => square.addEventListener('click', checkBoard))

//refresh page when button pressed
function newGame() {
  window.location.reload();
  }

  newgame.onclick = newGame;
})
