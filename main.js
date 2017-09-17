var __main = function() {

  var images = {
    ball: 'picture/ball.png',
    block: 'picture/block.png',
    paddle: 'picture/paddle.png',
  }

  enableDebugMode(game, true)

  var game = GuaGame(30, images, function(g){
    var mainscene = Scene(g)
    g.runWithScene(mainscene)
  })

}

__main()
