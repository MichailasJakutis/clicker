
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
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHI1119aiQZ9c-NEReZxjhhkTz-fA5EJ5IK8iCVkTUVw9JKkpRElcpC8ESuqOejkIhXnQ&usqp=CAU',
  'https://www.fightersgeneration.com/np5/kof12/ralf-12s.gif',
  'https://wiki.supercombo.gg/images/b/b5/Chin98_stance.gif',
  'https://wiki.supercombo.gg/images/d/dd/Shermie98_stance.gif',]
const potionBtn = document.querySelector('.potion')
const goldElement = document.querySelector('.gold')
const indexElement = document.querySelector('.monster-index')
const gameOver = document.querySelector('.over')
const game = document.querySelector('.game-container')
const res = document.querySelector('.res')
const swordElement = document.querySelector('.sword')
const bowElement = document.querySelector('.bow')
const staffElement = document.querySelector('.staff')
const weapons = document.querySelectorAll('.weapon-size')
const xpElement = document.querySelector('.xp')
const levelElement = document.querySelector('.level')
const resGold = document.querySelector('.res-gold')
const resLvl = document.querySelector('.res-level')
const resMonsterIndex = document.querySelector('.res-monster-index')
const inventoryBtn = document.querySelector('.inventory')
const inventoryContainer = document.querySelector('.inventory-wrapper')
const closePopBtn = document.querySelector('.popupBtn')



  gameOver.style.display = 'none'

  let monsterIndex = 0
  let gold = 0
  let playerHp = 100
  let monsterHp = 100
  let xp = 0
  let lvl = 0
  let borderStyle = `solid rgb(248, 218, 46) 2px`

  let weaponSelected
  
  swordElement.style.border = borderStyle
  bowElement.style.border = 'none'
  staffElement.style.border = 'none'
  indexElement.textContent = `Monsters: ${monsterIndex}`
  inventoryBtn.textContent = 'Inventory'
 
 
  btn.onclick = () => { 
    
    const rnd = num => Math.round(Math.random() * num)
    const countProbability = (value) => rnd(100) < value

    let playerDamage = rnd(10)
    let monsterDamage = rnd(8)
    gold += rnd(5)
    xp += 10

    playerHp -= monsterDamage
    monsterHp -= playerDamage

      xpElement.style.width = xp + '%'
    player.style.width = playerHp + "%"
    enemy.style.width = monsterHp + "%"
    goldElement.textContent = `Gold: ${gold} `

    if (xp == 100){
      lvl++
      xp = 0
      xpElement.style.width = xp + '%'
    }
      
    
    levelElement.textContent = `Level: ${lvl}`
    indexElement.textContent = `Monsters: ${monsterIndex}`
    
    playerInfo.textContent = `Player HP: ${playerHp.toFixed(1)}`
    monsterInfo.textContent = `Monster HP: ${monsterHp.toFixed(1)}`
  
    console.log('player hp: ' + playerHp + ' dmg: ' + playerDamage)
    console.log('monster hp: ' + monsterHp + ' dmg: ' + monsterDamage)
  

    resGold.textContent = `Gold: ${gold}`
    resLvl.textContent = `Level: ${lvl}`
    resMonsterIndex.textContent = `Monster killed: ${monsterIndex}`

    if (playerHp <= 0) {
      game.style.display = 'none'
      gameOver.style.display = 'block'
    }
    if (monsterHp <= 0) {
      monsterHp = 100
      enemy.style.width = monsterHp + "%"
      enemyImg.src = enemies[rnd(enemies.length - 1)]
      monsterIndex++
      indexElement.textContent = `Monsters: ${monsterIndex}`
      monsterInfo.textContent = `Monster HP: ${monsterHp.toFixed(1)}`

    }


   switch (weaponSelected) {
    case 0: {
      if (countProbability(25)) {
        monsterDamage = 0
        console.log('Attack dodged')
      }
    }
      break
    case 1: {
      if (countProbability(30)) {
        playerDamage *= 2
        console.log('Damage doubled' + playerDamage)
      }
      break;
    }
    case 2: {
      if (countProbability(40)) {
        playerHp += rnd(7)
        if (playerHp > 100) playerHp = 100
        console.log('player healed')
        }
      }
    }
     weapons.forEach((weapon) => {
       weapon.onclick = (e) => {
       selectWeapon(e.target)
        }
      })
   }
    
  function selectWeapon(value) {
    weapons.forEach((weapon, index) => {
      if (weapon === value) {
        weaponSelected = index
        weapon.style.border = borderStyle
      } else {
        weapon.style.border = 'none'
      }
    })
  
  }

   res.onclick = () => {
   
    playerHp = 100
    player.style.width = playerHp + "%"

    monsterHp = 100
    enemy.style.width = monsterHp + "%"

    playerInfo.textContent = `Player HP: ${playerHp.toFixed(1)}`
    monsterInfo.textContent = `Monster HP: ${monsterHp.toFixed(1)}`

    gold = 0
    goldElement.textContent = `Gold: ${gold} `

    monsterIndex = 0
    indexElement.textContent = `Monsters killed: ${monsterIndex}`

    gameOver.style.display = 'none'
    game.style.display = 'flex'

  }
  potionBtn.onclick = () => {
    if (gold >= 50) {
      gold -= 50
      playerHp = 100
      player.style.width = playerHp + "%"
      goldElement.textContent = `Gold: ${gold} `
    }
  }

  function openPopup(){
    inventoryContainer.classList.add('open-popup')
  }
  function closePopup(){
    inventoryContainer.classList.remove('open-popup')
  }


  inventoryBtn.onclick = () => {openPopup()}
  closePopBtn.onclick = () => {closePopup()}












