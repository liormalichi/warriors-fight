import './App.css';
import HomePage from './component/HomePage';
import GamePage from './component/GamePage';
import EndGame from './component/EndGamePage';
import React, {useState} from 'react'

function App() {

  const pages = {
    home: 'home',
    game: 'game',
    end: 'end'
  }

  const [currentPage, setCurrentPage] = useState("home")
  const [playerName, setplayerName] = useState("sdf")
  const [status1, setstatus] = useState("")
  const [wins, setWins] = useState(0)
  const [losses, setlosses] = useState(0)

  
  const changePage = (page) => setCurrentPage(page)
  const changeName = (name) => setplayerName(name)
  const changestatus = (status) => setstatus(status)
  
  const setTheWins = (won) => {
    if (won == 1)
      setWins(parseInt(wins)+1)
  }

  const setTheLosses = (loss) => {
    if (loss == 1)
    setlosses(parseInt(losses)+1)
  }


  const switchPage =  (page) =>{
    switch(page){
      case pages.home:
        return <HomePage changePlayerName={changeName} changePage={changePage} />
      
      case pages.game:
        return <GamePage name ={playerName} changePage={changePage} status={changestatus} won ={setTheWins} loss ={setTheLosses} />
  
      
      case pages.end:
        return <EndGame name ={playerName} status={status1} changePage={changePage} wins ={wins} losses ={losses}/>
  
   }
  }
     

  return (
    <div className="App">
      {switchPage(currentPage)}
    </div>
  );
}

export default App;
