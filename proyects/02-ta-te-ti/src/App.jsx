import { Children } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null)

const Square = ({ children, updateBoar, index}) => {
  return (
      <dir className = "square">
        {children}
      </dir>
  )

}

function App() {
  return (
    <main className="board">
      <h1>TA TE TI</h1>
      <section className="game">
        {
          board.map((_, index)=> {
            return(
              <Square
                key = {index}
                index = {index}
              >
                {index}
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
