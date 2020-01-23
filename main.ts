namespace SpriteKind {
    export const poo = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f 1 f f f 
f f f f f f f f f f f f f f f f 
f f f f f 1 f f f f f f f f f f 
f f f f f f f f f f f f 1 f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f 
f f f f f f f 1 f f f 1 f f f f 
f f f f f f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f 1 f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 5 f f 
f f 5 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 5 f f f f 5 f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 5 f f 
f 5 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 5 f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 5 f f 
f f 5 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
function change_in_form () {
	
}
// This is the code for our hero
function space_guy () {
    waluigi = sprites.create(img`
. . . . . . . . . a a a a . . . 
. . . . . . . . a a a a 1 . . . 
. . . . . . . a a a a a 1 . . . 
. . . . . . a a a a a a a a a . 
. . . . d d e e d 9 1 f 3 . . . 
. . . . . d d e d f d d 3 3 . . 
. . . . . . d e d d f f 3 3 3 . 
. . . . . e e d d d 1 . 1 . . . 
. . . . . . . 8 a d d d d . . . 
. . . . . . a 8 a a 8 a d . . . 
. . . . . a a 8 a a 8 a a . . . 
. . . . a a a 5 8 8 5 . a a . . 
. . . a a . a 8 8 8 8 . . a a . 
. . . 1 1 . 8 8 8 8 8 8 . 1 1 . 
. . . 5 1 . 8 8 8 8 8 8 . 1 5 . 
. . . 1 1 8 8 8 8 8 8 8 8 1 1 . 
. . . . . 8 8 8 . . 8 8 8 . . . 
. . . . 8 8 8 8 . . 8 8 8 8 . . 
. . . . . e e . . . . e e . . . 
. . . e e e e . . . . e e e e . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(waluigi)
    waluigi.setFlag(SpriteFlag.StayInScreen, true)
}
// this tells the star to appear when the enemy is
// destroyed
sprites.onDestroyed(SpriteKind.poo, function (sprite) {
    star = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
f f f f f f 5 5 5 5 f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
. f 5 5 5 5 f 5 5 f 5 5 5 5 f . 
. . f 5 5 5 f 5 5 f 5 5 5 f . . 
. . . f 5 5 f 5 5 f 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f . . . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. f 5 5 5 5 5 f f 5 5 5 5 5 f . 
. f 5 5 5 f f . . f f 5 5 5 f . 
f 5 5 f f . . . . . . f f 5 5 f 
f f f . . . . . . . . . . f f f 
`, SpriteKind.Player)
    star.setPosition(141, 60)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.poo, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
// this sets the backround
function backround () {
    tiles.setTilemap(tiles.createTilemap(
            hex`100008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
}
function stronger_no0 () {
    stronger_no.setPosition(-10000, -10000)
}
// this is for when you hit the enemy he loses life
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
// this is for when your projectile colides with the
// enemy's projectile they explode
sprites.onOverlap(SpriteKind.Food, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile.destroy()
    projectile2.destroy()
})
// This makes it so if you get hit you lose
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.slash)
})
// This tells the hero to shoot a projectile when he
// preses (A)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    waluigi.setImage(img`
. . . . . . . . . a a a a . . . . . . . 
. . . . . . . . a a a a 1 . . . . . . . 
. . . . . . . a a a a a 1 . . . . . . . 
. . . . . . a a a a a a a a a . . . . . 
. . . . d d e e d 9 1 f 3 . . . . . . . 
. . . . . d d e d f d d 3 3 . . . . . . 
. . . . . . d e d d f f 3 3 3 . . . . . 
. . . . . e e d d d 1 . 1 . . . . . . . 
. . . . . . . 8 a d d d d . . . 1 . . . 
. . . . . . a 8 a a 8 a d . . . 1 1 1 1 
. . . . . a a 8 a a 8 a a a a a 1 5 1 . 
. . . . a a a 5 8 8 5 a a a a a 1 1 1 . 
. . . a a . a 8 8 8 8 . . . . . . . . . 
. . . 1 1 . 8 8 8 8 8 8 . . . . . . . . 
. . . 5 1 . 8 8 8 8 8 8 . . . . . . . . 
. . . 1 1 8 8 8 8 8 8 8 8 . . . . . . . 
. . . . . 8 8 8 . . 8 8 8 . . . . . . . 
. . . . 8 8 8 8 . . 8 8 8 8 . . . . . . 
. . . . . e e . . . . e e . . . . . . . 
. . . e e e e . . . . e e e e . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`)
    pause(100)
    waluigi.setImage(img`
. . . . . . . . . a a a a . . . 
. . . . . . . . a a a a 1 . . . 
. . . . . . . a a a a a 1 . . . 
. . . . . . a a a a a a a a a . 
. . . . d d e e d 9 1 f 3 . . . 
. . . . . d d e d f d d 3 3 . . 
. . . . . . d e d d f f 3 3 3 . 
. . . . . e e d d d 1 . 1 . . . 
. . . . . . . 8 a d d d d . . . 
. . . . . . a 8 a a 8 a d . . . 
. . . . . a a 8 a a 8 a a . . . 
. . . . a a a 5 8 8 5 . a a . . 
. . . a a . a 8 8 8 8 . . a a . 
. . . 1 1 . 8 8 8 8 8 8 . 1 1 . 
. . . 5 1 . 8 8 8 8 8 8 . 1 5 . 
. . . 1 1 8 8 8 8 8 8 8 8 1 1 . 
. . . . . 8 8 8 . . 8 8 8 . . . 
. . . . 8 8 8 8 . . 8 8 8 8 . . 
. . . . . e e . . . . e e . . . 
. . . e e e e . . . . e e e e . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 2 . 1 1 1 1 1 1 1 1 . . . . 
. . 2 1 1 1 1 1 1 1 1 1 2 . . . 
. . . 1 1 1 f f f 1 1 1 2 2 . . 
. 2 2 1 1 1 f 9 f 1 1 1 2 2 2 . 
. . . 1 1 1 f f f 1 1 1 2 2 . . 
. . . 1 1 1 1 1 1 1 1 1 2 . . . 
. . 2 1 1 1 1 1 1 1 1 1 . . . . 
. 2 2 . 1 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, waluigi, 200, 0)
    projectile2.setKind(SpriteKind.Food)
})
// This is the code for the green enemy
function enemy () {
    no = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . 7 f f f f 7 7 7 f f f f 7 . . . . 
. . . 7 f 9 9 9 9 f 7 f 9 9 9 9 f 7 . . . 
. . 7 7 f 9 f 9 9 f 7 f 9 f 9 9 f 7 7 . . 
. . 7 7 f 9 9 9 9 f 7 f 9 9 9 9 f 7 7 . . 
. . 7 7 f 9 9 9 9 f 7 f 9 9 9 9 f 7 7 . . 
. . 7 7 7 f f f f 7 7 7 f f f f 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 f f f f f f f f f f f 7 7 7 . . 
. . 7 7 7 f f f f f f f f f f f 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    no.setPosition(146, 95)
    no.vy = 100
    no.setFlag(SpriteFlag.BounceOnWall, true)
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    stronger_no = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . 2 f f f f 2 2 2 f f f f 2 . . . . 
. . . 2 f 9 9 9 9 f 2 f 9 9 9 9 f 2 . . . 
. . 2 2 f 9 f 9 9 f 2 f 9 f 9 9 f 2 2 . . 
. . 2 2 f 9 9 9 9 f 2 f 9 9 9 9 f 2 2 . . 
. . 2 2 f 9 9 9 9 f 2 f 9 9 9 9 f 2 2 . . 
. . 2 2 2 f f f f 2 2 2 f f f f 2 2 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 2 2 f f f f f f f f f f f 2 2 2 . . 
. . 2 2 2 f f f f f f f f f f f 2 2 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.poo)
    stronger_no.setPosition(146, 55)
    stronger_no.vy = 150
    stronger_no.setFlag(SpriteFlag.BounceOnWall, true)
    game.splash("you fool you thought you could defeat me")
    no.setPosition(-1000, -1000)
    stronger_no.say("poo", 5000)
})
// This is for when you destroy the enemy star appears
// when you touch it you win
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    star.destroy(effects.confetti, 500)
    tiles.setTilemap(tiles.createTilemap(
            hex`100008000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
    game.over(true)
})
// This tells the enemy to be destroyed when it loses
// all of its health
info.onLifeZero(function () {
    stronger_no.destroy(effects.halo, 1000)
})
let no: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let stronger_no: Sprite = null
let star: Sprite = null
let waluigi: Sprite = null
space_guy()
enemy()
backround()
info.setLife(70)
game.onUpdate(function () {
    if (info.life() <= 30) {
        no.destroy()
    }
})
// This is the projectile that comes from the enemy
game.onUpdateInterval(350, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 1 9 1 1 . . . . . . 
. . . . 1 9 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 9 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, stronger_no, -200, 0)
})
// This changes the sprite for the enemy when he
// shoots his projectile
forever(function () {
    no.setImage(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . 7 f f f f 7 7 7 f f f f 7 . . . . 
. . . 7 f 9 9 9 9 f 7 f 9 9 9 9 f 7 . . . 
. . 7 7 f 9 f 9 9 f 7 f 9 f 9 9 f 7 7 . . 
. . 7 7 f 9 9 9 9 f 7 f 9 9 9 9 f 7 7 . . 
. . 7 7 f 9 9 9 9 f 7 f 9 9 9 9 f 7 7 . . 
. . 7 7 7 f f f f 7 7 7 f f f f 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 f f f f f f f 7 7 7 7 7 . . 
. . 7 7 7 7 f f f f f f f f f 7 7 7 7 . . 
. . 7 7 7 7 f f f f f f f f f 7 7 7 7 . . 
. . 7 7 7 7 f f f f f f f f f 7 7 7 7 . . 
. . 7 7 7 7 f f f f f f f f f 7 7 7 7 . . 
. . . 7 7 7 f f f f f f f f f 7 7 7 . . . 
. . . . 7 7 f f f f f f f f f 7 7 . . . . 
. . . . . 7 f f f f f f f f f 7 . . . . . 
. . . . . . 7 f f f f f f f 7 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
`)
    pause(1000)
    no.setImage(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . 7 f f f f 7 7 7 f f f f 7 . . . . 
. . . 7 f 9 9 9 9 f 7 f 9 9 9 9 f 7 . . . 
. . 7 7 f 9 f 9 9 f 7 f 9 f 9 9 f 7 7 . . 
. . 7 7 f 9 9 9 9 f 7 f 9 9 9 9 f 7 7 . . 
. . 7 7 f 9 9 9 9 f 7 f 9 9 9 9 f 7 7 . . 
. . 7 7 7 f f f f 7 7 7 f f f f 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 f f f f f f f f f f f 7 7 7 . . 
. . 7 7 7 f f f f f f f f f f f 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 
`)
    pause(1000)
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(10)
})
// This is the projectile that comes from the enemy
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 1 9 1 1 . . . . . . 
. . . . 1 9 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 9 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, no, -200, 0)
})
