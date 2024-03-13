import { useState, useEffect } from 'react';
import Header from "./Header";
import PlayerData from "./PlayerData";

function App() {
  const [playerInfo, setPlayerInfo] = useState([]);

  useEffect(() => {
    fetch("api/players")
      .then((res) => res.json())
      .then((data) => {
        setPlayerInfo(data);
      });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <PlayerData  data={playerInfo}></PlayerData>
    </div>
  );
}

export default App;
