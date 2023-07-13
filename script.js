
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
const swordElement = document.querySelector('.sword')
const bowElement = document.querySelector('.bow')
const staffElement = document.querySelector('.staff')





  gameOver.style.display = 'none'

  let monsterIndex = 0
  let gold = 0
  let playerHp = 100;
  let monsterHp = 100;
  
  btn.onclick = () => { 
    const rnd = num => Math.round(Math.random() * num)
    
    let playerDamage = rnd(50)
    let monsterDamage = rnd(8)
    gold += rnd(5)

    playerHp -= monsterDamage
    monsterHp -= playerDamage

    
    player.style.width = playerHp + "%"
    enemy.style.width = monsterHp + "%"
    goldElement.textContent = `Gold: ${gold} `

    playerInfo.textContent = `Player HP: ${playerHp.toFixed(1)}`
    monsterInfo.textContent = `Monster HP: ${monsterHp.toFixed(1)}`
  
    console.log('player hp: ' + playerHp + ' dmg: ' + playerDamage)
    console.log('monster hp: ' + monsterHp + ' dmg: ' + monsterDamage)
  
  

    if (playerHp <= 0) {
      game.style.display = 'none'
      gameOver.style.display = 'block'
    }
    if (monsterHp <= 0) {
      monsterHp = 100
      enemy.style.width = monsterHp + "%"
      enemyImg.src = enemies[rnd(enemies.length - 1)]
      monsterIndex++
      indexElement.textContent = `Monsters killed: ${monsterIndex}`
    }




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
  potionBtn.onclick = () => {
    if (gold >= 50) {
      gold -= 50
      playerHp = 100
      player.style.width = playerHp + "%"
      goldElement.textContent = `Gold: ${gold} `
    }
  }

  

 







    // swordElement.addEventListener('click', (event) => {
    //   if (event.code === 'click') {
    //     if (Math.random() < 0.25) {
    //       console.log('Išvengėte smūgio!');
    //     } else {
    //       console.log('Gavote smūgį!');
    //     }
    //   }
    //   swordElement.style.backgroundColor = 'gray'
    //   staffElement.style.backgroundColor = 'transparent'
    //   bowElement.style.backgroundColor = 'transparent'

    // })
    // bowElement.addEventListener('click', (bow) => {
    //   bowElement.style.backgroundColor = 'gray'
    //   swordElement.style.backgroundColor = 'transparent'
    //   staffElement.style.backgroundColor = 'transparent'
    // })
    // staffElement.addEventListener('click', (staff) => {
    //   staffElement.style.backgroundColor = 'gray'
    //   bowElement.style.backgroundColor = 'transparent'
    //   swordElement.style.backgroundColor = 'transparent'
    // })
   
  


















// document.addEventListener('keydown', function(event) {
//   if (event.code === 'KeyS') {
//     if (Math.random() < 0.25) {
//       console.log('Išvengėte smūgio!');
//     } else {
//       console.log('Gavote smūgį!');
//     }
//   }
// });

