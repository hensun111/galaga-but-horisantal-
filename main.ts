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
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(true, effects.bubbles)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile.destroy()
    projectile2.destroy()
})
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
`, waluigi, 100, 0)
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
let no: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let waluigi: Sprite = null
space_guy()
enemy()
game.onUpdateInterval(350, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 5 . 5 5 5 . 5 5 . 5 . 5 . 5 . 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 
5 . 5 5 . 5 5 . 5 5 . 5 . 5 . 5 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, no, -100, 0)
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
