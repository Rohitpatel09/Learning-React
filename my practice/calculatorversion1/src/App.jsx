
import styles from './App.module.css'
import Container from './component/ButtonContainer'
import Display from './component/Display'

function App() {
const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <div className={styles.calculator}>
   <Display></Display>
    <Container buttonNames={buttonNames}></Container>
    </div>
  )
}

export default App
