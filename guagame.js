//瓜
var GuaGame = function(fps, images, runCallback){
  //images 是一个对象，里面是图片的引用名字和路径
  //程序会在所有图片载入成功后才运行

  var g = {
    scenes: null,
    actions: {},
    keydowns: {},
    images: {},
  }
  var canvas = document.querySelector('#id-canvas')
  var context = canvas.getContext('2d')
  g.canvas = canvas
  g.context = context

  g.drawImage = function(guaImage){
    g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
  }

  //events
  window.addEventListener('keydown', function(event){
    g.keydowns[event.key] = true
  })
  window.addEventListener('keyup', function(event){
    g.keydowns[event.key] = false
  })
  //
  g.registerAction = function(key, callback){
    g.actions[key] = callback
  }
  g.update = function(){
    g.scene.update()
  }
  g.draw = function(){
    g.scene.draw()
  }
  //timer
  window.fps = 30
  var runloop = function() {
    //events
    var actions = Object.keys(g.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (g.keydowns[key]) {
        //如果按键被按下，调用注册的 actions
        g.actions[key]()
      }
    }
    //update
    g.update()
    //clear
    context.clearRect(0, 0, canvas.width, canvas.height)
    //draw
    g.draw()
    //next runloop
    setTimeout(function() {
      runloop()
    }, 1000/window.fps)
  }

  //
  var loads = []
  //预先载入所有图片
  var names = Object.keys(images)
  for (var i = 0; i < names.length; i++) {
    let name = names[i]
    var path = images[name]
    let img = new Image()
    img.src = path
    img.onload = function() {
      //存入 g.images 中
      g.images[name] = img
      //所有图片载入成功后，调用 run
      loads.push(1)
      if (loads.length == names.length) {
        g.__start()
      }
    }
  }
  g.runWithScene = function(scene) {
    g.scene = scene
    //开始运行程序
    setTimeout(function() {
      runloop()
    }, 1000/window.fps)
  }

  g.__start = function() {
    runCallback(g)
  }

  g.replaceScene = function(scene) {
    g.scene = scene
  }

  g.imageByName = function(name) {
    var img = g.images[name]
    var image = {
      w: img.width,
      h: img.height,
      image: img,
    }
    return image
  }

  // var m = setInterval(function(){
  //     //events
  //     var actions = Object.keys(g.actions)
  //     for (var i = 0; i < actions.length; i++) {
  //       var key = actions[i]
  //       if (g.keydowns[key]) {
  //         //如果按键被按下，调用注册的 actions
  //         g.actions[key]()
  //       }
  //     }
  //     //update
  //     g.update()
  //     //clear
  //     context.clearRect(0, 0, canvas.width, canvas.height)
  //     //draw
  //     g.draw()
  //   }, 1000/fps)
  //
  // g.mysetInterval = m

  return g
}
