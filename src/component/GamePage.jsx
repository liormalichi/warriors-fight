import React, {useState} from 'react'
import Header from "./Header"


export default function GamePage(props) {
    
    const [round, setRound] = useState(-1)
    const [playerPoints, setplayerPoints] = useState(0)
    const [pcPoints, setpcPoints] = useState(0)
    const [pcCards, setPcCards] = useState([[]])
    const [playerCards, setPlayerCards] = useState([[]])
    const [shownPc, setshownPc] = useState("")
    const [shownPlayer, setshownPlayer] = useState("")

    const name = props.name
       


    const showCardPc= ()=>{
        if (round ==-1)
            setshownPc(pcCards[0][0])     
        else
            setshownPc(pcCards[round][0])   
    }

    const showCardPlayer= ()=>{
        if (round ==-1)
            setshownPlayer(playerCards[0][0])
        else
            setshownPlayer(playerCards[round][0])

    }

    const create = () =>{
        

        // const play = (pcCards,playerCards)=>{
        //     console.log(pcCards, playerCards)
        // }
        //creating the deck givng only first card
        if (round == -1){            
            const suits = ["spades", "diamonds", "clubs", "hearts"]
            const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]    
            const deck = suits.map(suit =>values.map(value => [value,suit])).flat()
            
            for(let i=1; i<=10000; i++){
                const pos = Math.floor((52 * Math.random()))
                const temp = deck[(i%51)]
                deck[(i%51)] = deck[pos]
                deck[pos] = temp            
            }
            const player = setPcCards(deck.slice(0,26))
            const pc = setPlayerCards(deck.slice(26,52))
            setRound(round+1)
            
        }

        //gives pc and player new crad
        else{
            const pc = parseInt(pcCards[round][0])
            const player = parseInt(playerCards[round][0])  

            if(round>=25){
                if (pcPoints>=playerPoints){
                    props.status("LOSE")
                    props.won(1)
                }
                else{
                    props.loss(1)
                    props.status("WIN")
                }
                return props.changePage("end")               
            }
             if(pc != player){
    
                if(pc>player){
                     setpcPoints(pcPoints+1)
                }
                else{
                     setplayerPoints(playerPoints+1)
                }
            }
            setRound(round+1)

        }
    }
   
    //console.log(pcCards, playerCards)

    const changeNameToNext = ()=>{
        const c = document.getElementById("create")
        if (c.innerHTML == "CREATE")
            c.innerHTML = "GO!";
        else {
            if(round ==24)
                c.innerHTML = "FINISH";
            else {
                if(round >=0)
                    c.innerHTML = "NEXT";
            
            }
        }
    }

  
    
        return (
        <div>
            <div className='title2'>WAR</div>
            <div class="container">
                <div class="pcPoints">{pcPoints}</div>
                <div class="card ">
                    <div class="innerCardPc cardShown">{shownPc}</div>
                </div>
                <div class="pc">PC</div>

                <div class="none"></div>
                <div class="button">
                    <button id="create" onClick= {() => {create(); changeNameToNext();showCardPc();showCardPlayer()}}>CREATE</button>                
                </div>
                <div class="none2"></div>

                <div class="playerPoints">{playerPoints}</div>
                <div class="card ">
                    <div class="innerCardPlayer cardShown">{shownPlayer}</div>
                </div>
                <div class="player">{name}</div>
            </div>


        </div>

            

    )
}
