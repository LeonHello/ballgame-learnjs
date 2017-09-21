
class Scene {
  constructor(game) {
    this.game = game
  }
  draw() {

  }
  update() {

  }
}




// class ScenePlay extends Scene {
//   constructor(game) {
//     super(game)
//
//     var self = this
//     self.score = 0
//
//     self.paddle = Paddle(game)
//
//     self.ball = Ball(game)
//
//     static blocks = loadLevel(game, 1)
//
//     window.enableDrag = false
//     game.canvas.addEventListener('mousedown', function(event){
//       var x = event.offsetX
//       var y = event.offsetY
//       // log(event)
//       if (ball.hasPoint(x, y)) {
//         window.enableDrag = true
//       }
//     })
//
//     game.canvas.addEventListener('mousemove', function(event){
//       var x = event.offsetX
//       var y = event.offsetY
//       if (window.enableDrag) {
//         ball.x = x
//         ball.y = y
//       }
//     })
//
//     game.canvas.addEventListener('mouseup', function(event){
//       window.enableDrag = false
//     })
//
//
//     game.registerAction('a', function() {
//       paddle.moveLeft()
//     })
//
//     game.registerAction('d', function() {
//       paddle.moveRight()
//     })
//
//     game.registerAction('f', function() {
//       ball.fire()
//     })
//
//   }
//   draw() {
//     var self = this
//     //draw background
//     self.game.context.fillSytle = '#555'
//     self.game.context.fillRect(0, 0, 400, 300)
//     // draw
//     self.game.drawImage(paddle)
//     self.game.drawImage(ball)
//     //draw blocks
//     for (var i = 0; i < blocks.length; i++) {
//       var block = blocks[i]
//       if (block.alive) {
//         self.game.drawImage(block)
//       }
//     }
//     //draw labels
//     self.game.context.fillText('scores: ' + score , 10, 290)
//   }
//
//   update() {
//     var self = this
//
//     if (window.paused) {
//       return
//     }
//     if (ball.y > paddle.y) {
//       var end = new SceneEnd(game)
//       self.game.replaceScene(end)
//     }
//     ball.move()
//     //判断 paddle && ball 相撞
//     if (paddle.collide(ball)) {
//       //ball.反弹()实现
//       log('paddle && ball 相撞')
//       ball.rebound()
//     }
//
//     //判断 blocks && ball 相撞
//     for (var i = 0; i < blocks.length; i++) {
//       var block = blocks[i]
//       if (block.collide(ball)) {
//         log('block && ball 相撞')
//         block.kill()
//         ball.rebound()
//         //更新分数
//         score += 100
//       }
//     }
//   }
//
// }
