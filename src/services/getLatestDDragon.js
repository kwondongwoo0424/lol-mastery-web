
async function getLatestDDragon() {
    const version = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
    const latest = (await version.json())[0]
    
    const ddragon = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latest}/data/en_US/champion.json`);
    const champions = (await ddragon.json())['data'];
    console.log(champions)
}

export default getLatestDDragon;
