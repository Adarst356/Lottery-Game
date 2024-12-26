import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Lottery from './Lottery'
import Ticket from './Ticket'
import TicketNum from './TicketNum'
import { genTicket,sum} from "./helper"
function App() {
  let winCondition =(ticket) =>{
    return ticket.every((num)=>num === ticket[0]); 
  }

  return (
    <>
      <div>
        <Lottery n={3} winCondition={winCondition}/>   
   </div>
    </>
  )
}

export default App
