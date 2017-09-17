
var SceneEnd = function(game) {

  var s = {
    game: game,
  }

  s.draw = function() {
    game.context.fillText('game over' , 175, 145)
  }

  s.update = function() {

  }

  return s
}
