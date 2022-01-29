import React, {useState} from 'react'
import Header from "./Header"


export default function EndGamePage(props) {
    
    const name = props.name
    const status = props.status
    const wins = props.wins
    const losses = props.losses
    
    let sentance = ""
    if ((status == "WIN" ))
        sentance = `Congrats ${name}, you WIN`
    
        else {
        sentance = `Sorry ${name}, you lose`

    }
    
    const start = () =>{
        props.changePage("game")
        
    }

    return (
        <div class="endPage">
            <div className='title2'>{sentance}</div>
            {/* <Header title = {sentance} /> */}
            <div>
                <div class="result">{wins} - {losses}</div>
                <br></br>
                <button  onClick= {start}> AGAIN!</button>              

            </div>
            <div className="img" ></div>
            <div className="img_left" ></div>
        </div>
    )
}
