import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [name, setName] = useState('Sandy Blaze')
  const [loop, setLoop] = useState(null)

  useEffect(() => {

    const inter = setInterval(() => {
      setName(p => {
        if (p) {
          return null
        }
        return 'Sandy Blaze'
      })
    }, 5000)

    setLoop(p => {
      clearInterval(p)
      return inter
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>
            <code>name: {name || "User"}</code>
          </p>
          <p>
            <code>LoopId: {loop}</code>
          </p>
          <button
            style={{
              padding: '10px',
              backgroundColor: '#323b4d',
              border: 0,
              borderRadius: 10,
              color: '#61dafb',
              fontWeight: '500',
              fontSize: 15
            }}
            onClick={() => console.log('length', name.length)}
          >Crash App</button>
        </div>
      </header>
    </div>
  )
}

export default App
