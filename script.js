
// const statusElement = document.querySelector('.status')
// const btnElement = document.querySelector('.btn')
// const inputElement = document.querySelector('#num')


// btnElement.onclick = () => {
//     statusElement.style.width = inputElement.value + "%"


// }


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
let monsterIndex = 0
let gold = 0



btn.onclick = () => { attack() }


let playerHp = 100;
let monsterHp = 100;

function attack() {
  const rnd = num => Math.round(Math.random()*num)

  let playerDamage = Math.random().toFixed(1) * 50
  let monsterDamage = Math.random().toFixed(1) * 8
  let hit = Math.random().toFixed(1) * 5


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
    }

    goldElement.textContent = `Gold: ${gold} `

  }
  if (monsterHp <= 0) {
    monsterHp = 100
    enemyImg.src = enemies[rnd(enemies.length - 1)]
    console.log(enemyImg)
    enemy.style.width = monsterHp + "%"
  }
  // if (monsterHp <= 0) {
  //   monsterIndex++

  //   monsterHp = 100;
  //  console.log(monsterIndex)
  // }
}


