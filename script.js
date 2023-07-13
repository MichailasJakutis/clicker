
// const statusElement = document.querySelector('.status')
// const btnElement = document.querySelector('.btn')
// const inputElement = document.querySelector('#num')


// btnElement.onclick = () => {
//     statusElement.style.width = inputElement.value + "%"


// }

const mega = document.querySelector('.mega')
const btn = document.querySelector('.attack')
const player = document.querySelector('.player-hp')
const enemy = document.querySelector('.enemy-hp')
const enemyImg = document.querySelector('.enemy')
const playerInfo = document.querySelector('.player-info')
const monsterInfo = document.querySelector('.enemy-info')
const enemies = ['https://i.pinimg.com/originals/29/32/e1/2932e1668db1bbccc0e4d161f093efad.png',
  'https://i.pinimg.com/236x/88/d4/11/88d4119fd76ed8feb85c55e573959b4a--monster-art-fantasy-monster.jpg',
  'https://i.pinimg.com/236x/56/dc/47/56dc4781c421ca452d25024919ca046b.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08J8mT5pV2EHHeaSVbHtaVyuuPKxSS-GSgNqUpR2it34lQ6AzXGkqNb3q6tqMENhucj0&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHI1119aiQZ9c-NEReZxjhhkTz-fA5EJ5IK8iCVkTUVw9JKkpRElcpC8ESuqOejkIhXnQ&usqp=CAU']
const potionBtn = document.querySelector('.potion')
const goldElement = document.querySelector('.gold')
const indexElement = document.querySelector('.monster-index')
const gameOver = document.querySelector('.over')
const game = document.querySelector('.game-container')
const res = document.querySelector('.res')



function init(){

  gameOver.style.display = 'none'

  let monsterIndex = 0
  let gold = 0
  
  
  
  btn.onclick = () => { attack() }
  
  
  let playerHp = 100;
  let monsterHp = 100;
  
  function attack() {
    const rnd = num => Math.round(Math.random()*num)
  
    let playerDamage = rnd(50)
    let monsterDamage = rnd(8)
    let hit = rnd(5)
  
  
    gold += hit
  
  
  
  
  
    goldElement.textContent = `Gold: ${gold} `
  
    monsterHp -= playerDamage
    playerHp -= monsterDamage
  
    player.style.width = playerHp + "%"
    enemy.style.width = monsterHp + "%"
  
    playerInfo.textContent = `Player HP: ${playerHp.toFixed(1)}`
    monsterInfo.textContent = `Monster HP: ${monsterHp.toFixed(1)}`
  
    console.log('player hp: ' + playerHp + ' dmg: ' + playerDamage)
    console.log('monster hp: ' + monsterHp + ' dmg: ' + monsterDamage)
  
    potionBtn.onclick = () => {
      if (gold >= 50) {
        gold -= 50
        playerHp = 100
        player.style.width = playerHp + "%"
        goldElement.textContent = `Gold: ${gold} `
      }
  
     
  
    }
    if (monsterHp <= 0) {
      monsterHp = 100
      enemy.style.width = monsterHp + "%"
      enemyImg.src = enemies[rnd(enemies.length - 1)]
      console.log(enemyImg)
      monsterIndex++
      indexElement.textContent = `Monsters killed: ${monsterIndex}`
    }

    if (playerHp <= 0){
      game.style.display = 'none'
      gameOver.style.display = 'block'
    }


  res.onclick = () => {
    playerHp = 100
    player.style.width = playerHp + "%"
  
    monsterHp = 100
    enemy.style.width = monsterHp + "%"
  
    gold = 0
    goldElement.textContent = `Gold: ${gold} `

    monsterIndex = 0
    indexElement.textContent = `Monsters killed: ${monsterIndex}`
  
    gameOver.style.display = 'none'
   game.style.display = 'flex'
  
  }



  console.log(res)
  
    // if (monsterHp <= 0) {
    //   monsterIndex++
  
    //   monsterHp = 100;
    //  console.log(monsterIndex)
    // }
  }
  
  
}

init()

