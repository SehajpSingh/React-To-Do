import { useState } from 'react'
import './App.css'
import TodoTable from './components/TodoTable'

function App() {
  const [count, setCount] = useState(0)

  const todos = [
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make dineer', rowAssigned: 'User One' },
    { rowNumber: 4, rowDescription: 'Make dineer', rowAssigned: 'User One' }
  ]

  return (
    <>
      <div className='mt-5 container'>
        <div className='card'>
          <div className='card-header'>
            Your Todo's
          </div>
          <div className='card-body'>
            <TodoTable todos={todos}/> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
