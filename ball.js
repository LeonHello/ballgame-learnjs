
var Ball = function(game){
  // var img = imageFromPath('picture/ball.png')
  var o = game.imageByName('ball')

  o.x = 150
  o.y = 200
  o.speedX = 5
  o.speedY = 5
  o.fired = false
  o.alive = true

  o.fire = function() {
    o.fired = true
  }
  o.move = function() {
    if (o.fired) {
      // log('move')
      if (o.x < 0 || o.x + o.image.width > 400) {
        o.speedX *= -1
      }
      if (o.y < 0 || o.y + o.image.height > 300) {
        o.speedY *= -1
      }

      //move
      o.x += o.speedX
      o.y += o.speedY
    }
  }
  o.rebound = function() {
    o.speedY *= -1
  }
  o.hasPoint = function(x, y) {
    var xIn = (x >= o.x) && (x <= o.x + o.w)
    var yIn = (y >= o.y) && y <= (o.y + o.h)
    return xIn && yIn
  }

  return o
}
