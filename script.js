
// const statusElement = document.querySelector('.status')
// const btnElement = document.querySelector('.btn')
// const inputElement = document.querySelector('#num')


// btnElement.onclick = () => {
//     statusElement.style.width = inputElement.value + "%"

  
// }


const btn = document.querySelector('.attack')
const player = document.querySelector('.player-hp')
const enemy = document.querySelector('.enemy-hp')
const playerInfo = document.querySelector('.player-info')
const monsterInfo = document.querySelector('.enemy-info')
const monsterArray  = ['enemy.png', 'monster2.png', 'monster3.png', 'monster4.png', 'monster5.png']

console.log(monsterArray)
btn.onclick = () => {attack()}


let playerHp = 100;
let monsterHp = 100;

function attack() {
  let playerDamage = Math.random().toFixed(1) * 50;
  let monsterDamage = Math.random().toFixed(1) * 8;
 

  monsterHp -= playerDamage;
  playerHp -= monsterDamage;

  player.style.width = playerHp + "%";
  enemy.style.width = monsterHp + "%";
  playerInfo.textContent = `Player HP: ${playerHp.toFixed(1)}`
  monsterInfo.textContent = `Monster HP: ${monsterHp.toFixed(1)}`
console.log('player hp: ' + playerHp + ' dmg: ' + playerDamage)
console.log('monster hp: ' + monsterHp + ' dmg: ' +monsterDamage)

   

}