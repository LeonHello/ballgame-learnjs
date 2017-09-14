
var Paddle = function(game){
  var o = game.imageByName('paddle')

  // var o = {
  //   image: img,
  //   x: 100,
  //   y: 280,
  //   speed: 12,
  // }
  o.x = 100
  o.y = 280
  o.speed = 12

  o.move = function(x){
    if (x < 0) {
      x = 0
    }
    if (x > 400 - o.image.width) {
      x = 400 - o.image.width
    }
    o.x = x
  }
  o.moveLeft = function(){
    o.move(o.x - o.speed)
  }
  o.moveRight = function(){
    o.move(o.x + o.speed)
  }
  // o.collide = function(ball){
  //   if (ball.y + ball.image.height > o.y) {
  //     if (ball.x > o.x && ball.x < o.x + o.image.width) {
  //       return true
  //     }
  //   }
  //   return false
  // }
  o.collide = function(ball) {
    return rectIntersects(o, ball) || rectIntersects(ball, o)
  }
  return o
}
