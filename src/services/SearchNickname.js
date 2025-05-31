import React, {useState} from 'react';
import getLatestDDragon from './getLatestDDragon'

function SearchNickname() {
  let [gameName, setGameName] = useState("");
  let [tagLine, setTagLine] = useState("");
  let [region, setRegion] = useState("asia");

  const API_KEY = process.env.API_KEY;

  function SearchNickname(e){
    e.preventDefault();
    console.log(gameName,tagLine,region)
    console.log(`https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${API_KEY}`)
    //아직 초드 추가가 안되어있음
    getLatestDDragon()
  }
  
  return (
    <div>
      <form onSubmit={SearchNickname}>
        <select onChange={(e) => setRegion(e.target.value)} value={region}>
          <option value="asia">asia</option>
          <option value="americas">americas</option>
          <option value="europe">europe</option>
        </select>
        <input placeholder='Nickname' type='text' required onChange={(e) => setGameName(e.target.value)} value={gameName}/>
        <input placeholder='Tag' type='text' required onChange={(e) => setTagLine(e.target.value)} value={tagLine}/>
        <button value={"Submit"}>검색</button>
      </form>
    </div>
  );
}

export default SearchNickname;