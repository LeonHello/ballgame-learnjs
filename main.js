var __main = function() {

  var images = {
    ball: 'picture/ball.png',
    block: 'picture/block.png',
    paddle: 'picture/paddle.png',
  }

  enableDebugMode(game, true)

  var game = Game.instance(30, images, function(g){
    var scene = new SceneStart(g)
    g.runWithScene(scene)
  })

}

__main()
