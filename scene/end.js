
class SceneEnd extends Scene {
  constructor(game) {
    super(game)
    game.registerAction('r', function(){
      var start = new SceneStart(game)
      game.replaceScene(start)
    })
  }
  draw() {
    this.game.context.fillText('game over, press r to restart' , 125, 145)
  }

}
