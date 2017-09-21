class SceneStart extends Scene {
  constructor(game) {
    super(game)
    game.registerAction('k', function(){
      var play = SceneMain(game)
      game.replaceScene(play)
    })
  }

  //与拖动球的功能有冲突 但是实际中不需要拖动球
  // game.canvas.addEventListener('mousedown', function(event){
  //   var play = ScenePlay(game)
  //   game.replaceScene(play)
  // })

  draw() {
    this.game.context.fillText('press k to start the game' , 105, 145)
  }

  update() {

  }
}
