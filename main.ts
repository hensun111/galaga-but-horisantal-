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
}
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
}
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
            [myTiles.tile0,myTiles.tile1],
            TileScale.Sixteen
        ))
}
// this is for when you hit the enemy he loses life
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile.destroy()
    projectile2.destroy()
})
// This makes it so if you get hit you lose
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.slash)
})
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
    music.wawawawaa.play()
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
    no.setPosition(142, 54)
    no.vy = 100
    no.setFlag(SpriteFlag.BounceOnWall, true)
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("good job you win")
    game.over(true)
    star.destroy(effects.confetti, 500)
})
info.onLifeZero(function () {
    no.destroy(effects.halo, 1000)
})
let star: Sprite = null
let no: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let waluigi: Sprite = null
space_guy()
enemy()
backround()
info.setLife(1)
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
`, no, -200, 0)
})
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
