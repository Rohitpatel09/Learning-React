import Heading from './component/Heading'
import './App.css'
import Card from './component/Card'
function App() {
  const carddetails=[{
    name:"Logitech MX Master",
    feature:'8000 DPI',
    extra:"5 Programmable Buttons",
    oldprice:"12,495",
    newprice:"8,999"
},{
    name:"Aoole Pencil(2Gen)",
    feature:'Intutive Touch Surface',
    extra:"Designed for iPad Pro",
    oldprice:"11,900",
    newprice:"9,199"
},{
    name:"Xebronics",
    feature:'Desinged for iPad Pro',
    extra:"Intutive Touch Surface",
    oldprice:"1,599",
    newprice:"599"
},{
    name:"Petronics Touch",
    feature:'Wireless Mouse 2.4GHz',
    extra:"Optical Orientation",
    oldprice:"599",
    newprice:"189"
}];

  
  return (
    <>
     <Heading></Heading>
    <span>
    {carddetails.map((card, index) => (
          <Card
            key={index}
            title={card.name}
            feature={card.feature}
            extra={card.extra}
            oldprice={card.oldprice}
            newprice={card.newprice}
          />
        ))}
  
    </span>
    </>
  )
}

export default App
