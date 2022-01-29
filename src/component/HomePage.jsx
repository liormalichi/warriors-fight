import React from 'react'
import Header from "./Header"
import {useState} from 'react'
import '../App.css'

export default function HomePage(props) {
    
    const [isValid, setIsValid] = useState(false)
    const [name, setName] = useState("")

    const start = () =>{
        if (isValid == true){
            props.changePlayerName(name)
            props.changePage("game")

        }

        else{
            alert("please enter a name with 1 to 6 characters")
        }
    }
    
    const nameValidition = (name)=>{
        if ((name != '') && (name.length <6)){
            setName(name)
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
    }

    return (
        <div class="homePage">
            <div className="title1">WARRIORS</div>              
            <input onChange={e => nameValidition(e.target.value)} type="text" placeholder="NickName up to 5 chars"/>
            <div class="btn" onClick= {start}> let the games begin</div>
            <div className="img" ></div>
            <div className="img_left" ></div>


        </div>
    )
}
