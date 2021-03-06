/* 

Hello.

Thanks for caring about the source for this game.

I am twelve and I am just beginning to understand how I can make a JavaScript game. 
The code is probably horribly messy and things aren't functioning exactly the way they are supposed to (the game works though!).
If you have a bug, issue, or something else, go to the github repo at github.com/PixelXII/games

*/

// Variables
var output = "type start to begin <br> <br> <p style='font-size:12px;'>Sorry about there being no mobile support</p>"
var command = null;
var note;
var previous = null;
var place = 'first'
var thing;
var mainEats = ['cactus fruit']
var mainPoisons = ['']
var pickUp = ['pick up', 'pick', 'grab', 'take']
var eatWords = ['eat', 'consume']
var nonEats = ['rock', 'cactus', 'stick', 'twig', 'torch', 'sand']
var white, red, green, blue, purple, yellow, orange, brown;
var inventory = new Object()
inventory.spotsUsed = 0;
inventory.contentsOf = []
var inElement = document.getElementById('input');
var outElement = document.getElementById('out');
var out2 = document.getElementById('out2');
var noteElem = document.getElementById('note');
setInterval(function() { inventory.spotsUsed = inventory.contentsOf.length}, 100)
setInterval(printOut(output), 100)

// Utility functions

function printOut(mess, mess2) {
  outElement.innerHTML = mess
  if(mess2 != null) {
	  out2.innerHTML = mess2;
  }
}

var searchArray = function(needle, haystack) {
  for(var i = 0; i < needle.length; i++){
    	if(haystack.indexOf(needle[i]) === -1) {
       		return false;
  	} else {
 	 	return true;
	}
	}
}

var slice = function(command, start, end) {
	return command.slice(start, end)
}

function eating(eats, items, poisons) {
	if(command.includes('eat')) {
		game.eat(command)
	} else if(command.includes('throw') || command.includes('chuck') || command.includes('drop')) {
		game.throw(command)
	} else if(command.includes('grab') || command.includes('pick') || command.includes('take')) {
		game.pickUp(command, eats, items, poisons)
	}
}

// Functions that handle the messages to display for the locations.

function firstPlace() {
  	out2.innerHTML = ""
	var eats = ['cactus fruit']
	var poisons = ['']
	var items = ['rock', 'cactus fruit', "sand"]
	eating(eats, items, poisons)
	if(command.includes('look')) {
	outElement.innerHTML = game.look(command, 
	  "On your right there is a well with a considerable amount of water in it.", 
		"To your left is a very steep slope going down to an area of sparse shrubbery and rocks.", 
    "Behind you is a massive mound of boulders.", 
    "In front of you, away from the pile of boulders, is the edge of the dune that you are standing on.",
	"Above you is the cloudless sky. You see a vulture circling high above you.", 
	"Below you is the ground. You can see cactus fruit and rocks, and, of course, sand."
    )
	}
	if(command.includes('walk') || command.includes('step') || command.includes('move')) {
  outElement.innerHTML = game.move(command, 
		"You walk to the well.",
								 "well",
		"You slip and slide and eventually you find yourself at the bottom of the slope. <br> Gravel and sand continues falling long after you've reached the bottom.",
								 "belowSlope",
		"You cannot climb the boulders.",
								 "first",
		"Walking forward, you come to the end of the small dune.",
								"dune")
	}
}

function wellPlace() {
	out2.innerHTML = ""
	var eats = ['cactus fruit', 'well']
	var poisons = ['']
	var items = ['rock', 'cactus fruit', "sand", 'water']
	eating(eats, items, poisons)
	if(command.includes('look')) {
	outElement.innerHTML = game.look(command,
	 "On your right there are some more boulders.", 
	 "To your left is the dune where you started.", 
   	 "Behind you is a cacti patch.",
   	 "In front of you is a massive hole. There is a railing around the hole, forcing you to enter a different way.",
	 "Above you is the awning over the well. It's made of rotting wood and old rusty nails.", 
	 "Below you is the ground. You can see cactus fruit, rocks, sand, and the walls of the well."
    )
	}
	if(command.includes('walk') || command.includes('step') || command.includes('move')) {
  outElement.innerHTML = game.move(command, 
		"You cannot walk through the boulders.",
								 "well",
		"You decide to head back to the dune.",
								 "first",
		"It would be unwise to walk through the cacti.",
								 "well",
		"The railing is impossible to climb.",
								"dune")
	}
}

function belowSlope() {
	out2.innerHTML = ""
	var eats = ['cactus fruit', 'twig', 'stick']
	var poisons = ['']
	var items = ['rock', 'cactus fruit', "sand", 'twig', 'stick']
	eating(eats, items, poisons)
	if(command.includes('look')) {
	outElement.innerHTML = game.look(command, 
	  "To the right is the slope from which you came.", 
		"To your left is a very empty expanse which stretches on for as far as you can see.", 
    "Behind you is also the slope.", 
    "In front of you is a small mound of rocks.",
	"Above you is the cloudless sky. You see a vulture circling high above you.", 
	"Below you is the ground. You can see cactus fruit and rocks, and sand, of coarse."
    )
	}
	if(command.includes('walk') || command.includes('step') || command.includes('move')) {
  outElement.innerHTML = game.move(command, 
		"You cannot climb up the slope.",
								 "belowSlope",
		"You step into the expanse of space next to the slope, careful to keep the slope and dune in sight.",								 
				   "empty1",
		"You cannot climb up the slope.",
								 "belowSlope",
		"You move forward to the small pile of rocks",
								"rockpile")
	}
}

function rockPlace() {
	out2.innerHTML = ""
	var eats = ['cactus fruit']
	var poisons = ['']
	var items = ['rock', 'cactus fruit', "sand", 'stone', 'large rock']
	eating(eats, items, poisons)
	if(command.includes('look')) {
	outElement.innerHTML = game.look(command,
	 "On your right there is a small hill of clay and sand with a few bushes and sticks on top.", 
	 "To your left is a large expanse of emptiness.", 
   	 "Behind you is the bottom of the steep slope.",
   	 "In front of you is a small trail leading around a dead bush and between two cacti.",
	 "Above you is the cloudless sky with a hawk and a vulture circling.", 
	 "Below you is a dung beetle rolling a ball of poo across the sandy floor."
    )
	}
	if(command.includes('walk') || command.includes('step') || command.includes('move')) {
  outElement.innerHTML = game.move(command, 
		"Upon hearing a sharp rattling coming from the hill, you decide to step away from it.",
								 "rockpile",
		"You do not trust yourself to remain in sight of the dune and hill and do not stray from the path.",
								 "rockpile",
		"You find the hill of clay somewhat unflattering and slowly make your way back to the bottom of the hill.",
								 "belowSlope",
		"Following the trail, you dodge the cacti and keep going.",
								"empty2")
	}
	if(command == 'follow trail' || command == 'take trail' || command.includes('trail')) {
		printOut('You step onto the trail and go on.')
		place = 'empty2'
	}
	previous = 'rock'
}

function dunePlace() {
	out2.innerHTML = ""
	var eats = ['cactus fruit']
	var poisons = ['cactus']
	var items = ['rock', 'cactus fruit', "sand", 'cactus']
	eating(eats, items, poisons)
	if(command.includes('look')) {
	outElement.innerHTML = game.look(command, 
	  "On your right is a small hole in the ground. The hole is probably big enough for you to fit in, but you can't be sure.", 
		"To your left is a small hill of clay with some bushes and sticks on top.", 
    "Behind you is the dunes where you started.", 
    "In front of you is some cacti and rocks.",
	"Above you is the cloudless sky. You see a vulture circling high above you.", 
	"Below you is the ground. You can see cactus fruit and rocks, and, of course, sand."
    )
	}
	if(command.includes('walk') || command.includes('step') || command.includes('move')) {
  outElement.innerHTML = game.move(command, 
		"You squeeze through the hole and find yourself in a small, dank cavern.",
								 "firstCave",
		"You decide against stepping on the hill when you hear a sharp rattle coming from inside the den.",
								 "dune",
		"You move back to the dunes.",
								 "dune",
		"Walking forward, you dodge cacti and rocks and find yourself on a simple trail.",
								"empty2")
	}
	previous = 'dune'
}

function empty2Place() {
	out2.innerHTML = ""
	var eats = ['cactus fruit']
	var poisons = ['cactus']
	var items = ['rock', 'cactus fruit', "sand", 'cactus']
	eating(eats, items, poisons)
	if(command.includes('look')) {
	outElement.innerHTML = game.look(command, 
	  "On your right is an empty expanse of desert", 
		"To your left is a massive cactus.", 
    "Behind you is the dune and the well.", 
    "In front of you is a split in the trail. In front of that, you see a small shack.",
	"Above you is the cloudless sky. You see a vulture circling high above you.", 
	"Below you is the ground. You can see cactus fruit and rocks, and, of course, sand."
    )
	}
	if(command.includes('walk') || command.includes('step') || command.includes('move')) {
  outElement.innerHTML = game.move(command, 
		"You decide to not take the risk of getting lost in the desert and stick to the trail.",
								 "empty2",
		"You take the split in the trail.",
								 "split",
		"You move back, taking the opposite split.",
								 "split",
		"Walking forward, you emerge from the trail into a clearing which houses the shack.",
								"empty2")
	}
}


function doAction() {
		command = inElement.value;
		inElement.value = ""; 
    	if(command == 'inventory' || command == 'show inventory') {
			if(inventory.contentsOf.length === 0) {
				printOut('There is nothing in your inventory.')
			} else {
				printOut(inventory.contentsOf.toString().replace(',', ', '))
				var inter = setInterval(function() { outElement.innerHTML.replace(',', ', ') }, 10)
				setTimeout(function() { clearInterval(inter) }, 50)
			} 
    	}
	if(command == 'thanks') {
		printOut("You're welcome")
	}
		if(command == 'start' || command == 'Start') {
			game.start()
		}
		if(place == 'thanks') {
			sure()
		} else if(place == 'first') {
			firstPlace()
		} else if(place == 'well') {
			wellPlace()
		} else if(place == 'belowSlope') {
			belowSlope()
		} else if(place === 'rockpile') {
			rockPlace()
		} else if(place === 'dune') {
			dunePlace()
		} else if(place === 'empty2') {
			empty2Place()
		} else if(place === 'split') {
			if(previous === 'dune') {
				place = 'rockpile'
				doAction()
			} else if(previous === 'rock') {
				place = 'dune'
				doAction()
			}
		}

		if(place == 'end') {
			game.end()
		} 
		if(outElement.innerHTML == 'undefined') {
			printOut("I don't understand what you're trying to do.", "")
		}
}

// event listeners help everything

inElement.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      doAction()
    }
});
	
// the game object

var game = new Object()

game.reset = function() {
	noteElem.innerHTML = ""
	out2.innerHTML = ""
	outElement.innerHTML = ""
	printOut("You screwed up. Reload to reset the game.")
}

game.end = function() {
	printOut('END OF GAME <br> ------------------------------<br> You have reached the end of this adventure. <br> <br> Game written by Kai Wildberger, age 12, grade 6 <br> <br> <br> <br> May 29th, 2018');
	inElement.style.display = "none"
}

game.start = function() {
	inElement.style.display = "none"
	printOut("move [direction](up down left right forward back)<br> look [direction] <br> eat [item] <br> pick up/grab [item] <br> drop[item] <br> inventory (to display inventory)")
	setTimeout(function() {game.first()}, 7000);
}

game.look = function(action, rightMess, leftMess, behMess, foMess, upMess, downMess) {
	if(action.includes('look ') || action.includes('Look ')) {
		if(action.includes('right')) {
			return rightMess;
		} else if(action.includes('left')) {
			return leftMess;
		} else if(action.includes('backwards') || action.includes('behind me') || action.includes('behind') || action.includes(' back')) {
			  return behMess;
		} else if(action.includes('forward') || action.includes('ahead')) {
			return foMess;
		} else if(action.includes('up')) {
			return upMess
		} else if(action.includes('down')) {
			return downMess
		} else if(action.includes('around')) {
			return rightMess + '<br>' + leftMess + '<br>' + behMess + '<br>' + foMess
		} else {
			return "I don't understand what you mean."
		}
	}
}

game.first = function() {
	inElement.style.display = "block"
	noteElem.innerHTML = "game written by kai wildberger"
	printOut('You find yourself in a desert, surrounded by tumbleweeds and sand.')
}

game.move = function(action, right, rightLoc, left, leftLoc, back, backLoc, forward, forLoc) {
	if(action.includes('move ') || action.includes('step') || action.includes('go') || action.includes('walk')) {
		if(action.includes('right')) {
			place = rightLoc
			return right;
		} else if(action.includes('left')) {
			place = leftLoc
			return left;
		} else if(action.includes('backwards') || action.includes('behind me') || action.includes('behind') || action.includes('back')) {
			place = backLoc
			return back;
		} else if(action.includes('forward') || action.includes('ahead')) {
			place = forLoc
			return forward;
		} else {
			return "I don't understand what you mean."
		}
	}
}

// This is where it gets slightly screwy. I wrote pickUp, throw, and eat all past 8pm on school nights. Somehow, they work.

game.pickUp = function(action, eats, items, poisons) {
	if(inventory.spotsUsed === 3) {
			printOut('Your hands are full.')
		} else {
			if(action.includes('pick up') || action.includes('pick') || action.includes('hold') || action.includes('grab') || action.includes('take')) {
			if(action.includes('pick up')) {
		   		var thing = action.slice(8);
				var otherThing = thing;
			} else {
				var thing = action.slice(5)
				var otherThing = thing
			}
			if(thing.includes(' ')) {
				thing = thing.split(' ')
				var newThing = thing.join()
				thing = newThing.replace(',', ' ');
			}
			if(items.includes(thing) === false) {
				outElement.innerHTML = ""
				printOut("", "You don't see a " + thing)
			} else {
				out2.innerHTML = ""
				inventory.contentsOf.push(thing)
				printOut('You have a ' + thing)
				console.log(thing + ' taken')
			}
			}
		}
	}

 game.eat = function(action) {
	if(action.includes('eat') || action.includes('consume')) {
		if(action.includes('consume')) {
			var thing = action.slice(8)
			var otherThing = action.slice(8)
		} else {
			var thing = action.slice(4)
			var otherThing = action.slice(4)
		}
		if(thing.includes(' ')) {
			thing = thing.split(' ')
			var newThing = thing.join()
			thing = newThing.replace(',', ' ');
		}
		if(inventory.contentsOf.includes(thing) === false) {
			printOut("", "You do not have a " + thing)
		} 
		if(mainEats.includes(thing)) {
			inventory.spotsUsed--
			if(inventory.contentsOf.indexOf(thing) == inventory.contentsOf.length-1) {
				inventory.contentsOf.pop()
			} else {
				var index = inventory.contentsOf.indexOf(thing);
  				array.splice(index, 1);
			}
			outElement.innerHTML = ""
			printOut("", 'Eaten.') 
		} else {
			printOut("You cannot eat that.", "")
		}
		console.log(thing+' eaten')
	}
 }
 
 game.throw = function(action) {
	 if(action.includes('throw') || action.includes('chuck') || action.includes('drop')) {
		if(action.includes('drop')) {
			var thing = action.slice(5)
			var otherThing = action.slice(5)
		} else {
			var thing = action.slice(6)
			var otherThing = action.slice(6)
		}
		if(thing.includes(' ')) {
			thing = thing.split(' ')
			var newThing = thing.join()
			thing = newThing.replace(',', ' ');
		} else if(thing.includes(',')) {
			thing = thing.replace(',', ' ')
		}
		if(inventory.contentsOf.includes(thing) === false) {
			printOut("", "You do not have a " + thing)
		} else {
			inventory.spotsUsed--
			if(inventory.contentsOf.indexOf(thing) == 0) {
				inventory.contentsOf.shift()
			} else if(inventory.contentsOf.indexOf(thing) == inventory.contentsOf.length-1) {
				inventory.contentsOf.pop()
			} else {
				var index = inventory.contentsOf.indexOf(thing);
  				array.splice(index, 1);
			}
			outElement.innerHTML = ""
			printOut('You do not have a '+thing+' anymore', "") 
		}
		console.log(thing+' dropped')
	}
 }
