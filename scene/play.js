
var ScenePlay = function(game) {
  //初始化操作
  var score = 0

  var paddle = Paddle(game)

  var ball = Ball(game)

  blocks = loadLevel(game, 1)

  var s = {
    game: game,
  }

  //mouse event
  var enableDrag = false

  game.canvas.addEventListener('mousedown', function(event){
    var x = event.offsetX
    var y = event.offsetY
    // log(event)
    if (ball.hasPoint(x, y)) {
      enableDrag = true
    }
  })

  game.canvas.addEventListener('mousemove', function(event){
    var x = event.offsetX
    var y = event.offsetY
    if (enableDrag) {
      ball.x = x
      ball.y = y
    }
  })

  game.canvas.addEventListener('mouseup', function(event){
    enableDrag = false
  })


  game.registerAction('a', function() {
    paddle.moveLeft()
  })

  game.registerAction('d', function() {
    paddle.moveRight()
  })

  game.registerAction('f', function() {
    ball.fire()
  })


  s.draw = function() {
    //draw background
    game.context.fillSytle = '#555'
    game.context.fillRect(0, 0, 400, 300)
    // draw
    game.drawImage(paddle)
    game.drawImage(ball)
    //draw blocks
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i]
      if (block.alive) {
        game.drawImage(block)
      }
    }
    //draw labels
    game.context.fillText('scores: ' + score , 10, 290)
  }

  s.update = function() {

    if (window.paused) {
      return
    }
    if (ball.y > paddle.y) {
      var end = SceneEnd(game)
      game.replaceScene(end)
    }
    ball.move()
    //判断 paddle && ball 相撞
    if (paddle.collide(ball)) {
      //ball.反弹()实现
      log('paddle && ball 相撞')
      ball.rebound()
    }

    //判断 blocks && ball 相撞
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i]
      if (block.collide(ball)) {
        log('block && ball 相撞')
        block.kill()
        ball.rebound()
        //更新分数
        score += 100
      }
    }
  }

  return s
}
