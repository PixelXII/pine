var Rock = new Item('rock', "It's a rock.")
var Stick = new Item('stick', 'Just a small twig, a large branch.')
var Acorn = new Item('acorn', 'It\'s from an oak tree')
var Pickaxe = new Item('pickaxe', 'The pickaxe is rusty and worn with use.', 15)
var Gold;
var Stone = new Item('stone', 'It shimmers with an ethereal light.', 10)
var Branch = new Item('branch', 'It fell off a tree.')

var HealingTea = new Item('healing tea', 'A warm tea. You are not sure what it is made of.', 10, true, function() { Player.hp += 5; })
var HealingPotion = new Item('healing potion', 'A potion of healing. The label says: "You don\'t want to know what\'s in it.', 25, true, function() { Player.hp += 12; })
var Ale = new Item('ale', 'It\'s classic ale.', 20, true, function() { Player.hp += 10; })
var Beer = new Item('beer', 'It\'s classic beer.', 25, true, function() { Player.hp += 15; })
var Wine = new Item('wine', 'It\'s your average wine.', 50, true, function() { Player.hp += 25})