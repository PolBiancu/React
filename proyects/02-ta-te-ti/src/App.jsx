import { Children, useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}



const Square = ({ children, isSelected, updateBoard, index}) => {
  // Para hacer que se ejecute el estilo correspondiente en css cambiando el nombre de la clase
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  // Ante un click llama al manejador del click que llama a la funcion updateBoard. 
  // Children es lo que escriban entre etiquetas de Squere
  return (
      <div onClick={handleClick} className = {className}>
        {children} 
      </div>
  )
}

// Todas las convinaciones ganadoras
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  // Estado del tablero
  const [board, setBoard] = useState(Array(9).fill(null))
  // Estado de los turnos
  const [turn, setTurn] = useState(TURNS.X)
  // Estado del ganador. null -> no hay ganador, false -> empate
  const [winner, setWinner] = useState(null)


  const updateBoard = (index) => {
    // Si ya esta usada la posicion o ya hay un ganador, no actualizamos el estado
    if (board[index] || winner) return

    // Creamos el nuevo estado del tablero: creando una copia del anterior y cargandole el cambio
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Se cambia el estado del turno 
    const newTurn = (turn == TURNS.X) ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Vemos si hay un ganador
    const newWinner = checkWinner(newBoard)

    if(newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
    }

  }

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      // Si coinciden todos los estados con el combo
      if (boardToCheck[a] && boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c]) {
        return boardToCheck[a] // Devolvemos el estado, x / o
      }
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    // Se revisa si hay empate viendo que ninguna casilla este en null
    return newBoard.every((square) => square != null)
  }

  return (
    <main className="board">
      <h1>TA TE TI</h1>

      <button onClick={resetGame}>Reset del juego</button>

      <section className="game">
        {
          board.map((squere, index) => {
            return(
              <Square
                key = {index}
                index = {index}
                updateBoard = {updateBoard}
              >
                {squere}  {/* Lo que hay en el cuadrado */}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected = {turn == TURNS.X}> {TURNS.X} </Square>
        <Square isSelected = {turn == TURNS.O}> {TURNS.O} </Square>
      </section>

      {
        winner != null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner == false ?
                  'Empate'
                  : 'Ganó: '
                }
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }

    </main>
    )
}

export default App
