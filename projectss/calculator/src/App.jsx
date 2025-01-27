import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import styles from "./App.module.css"
import Display from "./component/display";
import ButtonContainer from "./component/ButtonContainer";
function App() {
  
  return (
    <div className={styles.calculator}>
      <Display></Display>

     <ButtonContainer></ButtonContainer>
       
    </div>
  )
}

export default App
