
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ClockHeading from './component/ClockHeading'
import ClockSlogan from './component/ClockSlogan'
import ClockTime from './component/CurrentTime'

function App() {
  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <ClockTime></ClockTime>
  </center>
  
}

export default App
