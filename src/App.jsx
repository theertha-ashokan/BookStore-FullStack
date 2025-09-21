
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap'

function App() {

  return (
    <>
      
      <h1><FontAwesomeIcon icon={faInstagram} /> book</h1>
            <Button variant="primary">Primary</Button>
    </>
  )
}

export default App
