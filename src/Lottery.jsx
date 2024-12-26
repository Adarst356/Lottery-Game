import { useState } from "react"
import "./Lottery.css"
import { genTicket,sum} from "./helper"
import Ticket from "./Ticket";

export default function Lottery({n,winCondition}){
  let [ticket,setTicket]=useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket=()=>{
    setTicket(genTicket(n))
  }
  return(
  <div className="h1">
      <h1>Lottery Game!</h1>
      <div className="ticket">
       <Ticket ticket={ticket}/> 
      </div>
      <button className="btn"onClick={buyTicket}>Buy New Ticket</button>
      <h1>{isWinning && "Congratulation ,you won"}</h1>
    </div>
  )
}