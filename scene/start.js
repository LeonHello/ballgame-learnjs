
var SceneStart = function(game) {

  var s = {
    game: game,
  }
  game.registerAction('k', function(){
    var play = ScenePlay(game)
    game.replaceScene(play)
  })
  //与拖动球的功能有冲突 但是实际中不需要拖动球
  // game.canvas.addEventListener('mousedown', function(event){
  //   var play = ScenePlay(game)
  //   game.replaceScene(play)
  // })

  s.draw = function() {
    game.context.fillText('press k to start the game' , 105, 145)
  }

  s.update = function() {

  }

  return s
}
