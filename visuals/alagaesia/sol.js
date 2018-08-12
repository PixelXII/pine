var monster, monstername, monstertype;
var enemies = ['Piranha', 'Shark', 'Mutant Turtle', 'Pirate', 'Pirate Captain', 'Fire Atronach', 'Firebeetle', 'Flametongue', 'Dragon', 'Elf', 'Spriggan', 'Demented Flower', 'Dwarf', 'Dwarf King', 'Rockmouse', 'Storm Atronach', 'Air Elemental', 'Cloud Elf', 'Sunbird']
var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


// Player


var player = {
  level: 1,
  health: 30,
  mana: 30,
  exp: 0,
  levelUp: function() {
    player.level++;
    clearInterval(displayhealth)
    player.health = player.health + Math.floor(0.20*player.health)
    player.mana = player.mana + Math.floor(0.16*player.mana)
  }
}


// Spells


var flames = new Spell("Flames", 6)
var iceBlast = new Spell("Ice Blast", 8)
var sparks = new Spell("Sparks", 5)
var squirt = new Spell("Squirt", 7)
var firebolt = new Spell("Firebolt", 12)
var freeze = new Spell("Freeze", 11)
var lightningBolt = new Spell('Lightning Bolt', 15)
var waterfall = new Spell("Waterfall", 13)
var inferno = new Spell("Inferno", 19)
var blizzard = new Spell("Blizzard", 20)
var electricStorm = new Spell("Electrical Storm", 18)
var hurricane = new Spell("Hurricane", 21)
var spells = [flames, iceBlast, sparks, squirt, firebolt, freeze, lightningBolt, waterfall, inferno, blizzard, electricStorm, hurricane]
var lv1 = [flames, iceBlast, sparks, squirt]
var lv2 = [flames, iceBlast, sparks, squirt, firebolt, freeze, lightningBolt, waterfall]
function randomSpell() {  // returns random spell based on player's level
  if(player.level <= 7) {
    return lv1[Math.floor(Math.random()*lv1.length)]
  } else if(player.level > 7 && player.level <= 14) {
    return lv2[Math.floor(Math.random()*lv2.length)]
  } else {
    return spells[Math.floor(Math.random()*spells.length)]
  }
}

Spell.prototype.castByMonster = function() {  // enemy casts specified spell
  player.health -= this.damage
  if(monstername.includes('%20')) {
    return 'The ' + monstername.replace('%20', ' ') + ' used ' + this.name + '!'
  } else {
    return 'The ' + monstername + ' used ' + this.name + '!'
  }
}

Spell.prototype.cast = function() {  // casts spell
  let d = this.damage
  let n = this.name
  if(monster.health <= 0) {
    player.exp = player.exp + monster.exp
    if(player.exp >= Math.ceil(8.7*player.level)) {
      player.levelUp()
    }
    
    nextBattle()
  } else {
    monster.health -= d
  }
  randomSpell().castByMonster()
}


// Other functions


function nextBattle() {
  document.getElementById('opp').src = enemies[Math.floor(Math.random()*enemies.length)].toLowerCase()+'.png'
  cm()
}

function spellElement(spell) {  // creates spell element
  document.getElementById('t1').innerHTML = document.getElementById('t1').innerHTML + '<img class="spell" src="'+spell+'.png" onclick="castSpell('+spell+')" title="Cast '+spell.toString().replace(/^\w/, c => c.toUpperCase())+'">'
}

function fromImg(img) {  // Gets image name from src, excluding the extension
  var opp, fin;
  opp = img.src
  fin = opp.slice(opp.indexOf('alagaesia')+'alagaesia'.length+1)
  fin = fin.slice(fin[0], fin.indexOf('.'))
  
  return fin;
}

function cm() {  // creates monster with random stats generated from name
  monstername = fromImg(document.getElementById('opp'))
  monster = {
    name: monstername.replace(/^\w/, c => c.toUpperCase()),
    health: Math.ceil(alph.indexOf(monstername.charAt(0)) * alph.indexOf(monstername[Math.random()*monstername.length]))+31,
    damage: Math.floor((Math.ceil(alph.indexOf(Math.floor(monstername.length/2)))+16)/2),
    exp: Math.floor(Math.random()*monstername.length/2)+Math.floor(Math.random()*15)
  }
  if(monster.name.includes('%20')) {
    monster.name = monster.name.replace('%20', ' ')
  }
}

cm()
  
function Spell(name, damage) {  // Spell constructor function
  this.name = name
  this.damage = damage
  this.imgSrc = this.name.toLowerCase()
}


// Getting the numbers to the document (using document.write()!!)


var playerhealth = document.getElementById('playerhealth')
var monsterhealth = document.getElementById('monsterhealth')
var displayhealth, leveledspells;
function dhp() {  // d isplay  h it  p oints
  displayHealth = setInterval(function() {
    if(monster.health < 0) {
      monster.health = 0
    } else if(player.health < 0) {
      player.health = 0
    }
    playerhealth.innerText = player.health
    monsterhealth.innerText = monster.health
  }, 10)
}
  

leveledspells = setInterval(function() {
  if(player.level <= 7) {
    document.getElementById('t1').style.display = 'block'
  } else if(player.level > 7 && player.level <= 14) {
    document.getElementById('t1').style.display = 'block'
    document.getElementById('t2').style.display = 'block'
  } else {
    document.getElementById('t1').style.display = 'block'
    document.getElementById('t2').style.display = 'block'
    document.getElementById('t3').style.display = 'block'
  }
}, 10)



