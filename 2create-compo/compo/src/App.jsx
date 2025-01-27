import MyButton from "./component/mybutton";
import NavBar from "./component/Navbar";
import Random from "./component/random";
import "bootstrap/dist/css/bootstrap.min.css"
function App(){
    let top=["creative" ,"attractive"];
  return<div>
<NavBar head={top}></NavBar>
<h1>My name is rohit</h1>
<MyButton></MyButton>
<Random></Random>
    </div>
}

export default App;