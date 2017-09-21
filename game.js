class Game {
  constructor(fps, images, runCallback) {

    window.fps = fps
    this.images = images
    this.runCallback = runCallback

    this.scenes = null
    this.actions = {}
    this.keydowns = {}

    this.canvas = document.querySelector('#id-canvas')
    this.context = this.canvas.getContext('2d')

    //events
    window.addEventListener('keydown', event => {
      // log(event)
      this.keydowns[event.key] = true
    })
    window.addEventListener('keyup', event => {
      this.keydowns[event.key] = false
    })

    this.init()
  }

  static instance(...args) {
        return new this(...args)
    }

  drawImage(img) {
    this.context.drawImage(img.image, img.x, img.y)
  }
  update() {
    this.scene.update()
  }
  draw() {
    this.scene.draw()
  }
  registerAction(key, callback) {
    this.actions[key] = callback
  }
  runloop() {
    //events
    var actions = Object.keys(this.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (this.keydowns[key]) {
        //如果按键被按下，调用注册的 actions
        this.actions[key]()
      }
    }
    //update
    this.update()
    //clear
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    //draw
    this.draw()
    //next runloop
    var g = this
    setTimeout(function() {
      g.runloop()
    }, 1000/window.fps)
  }
  imageByName(name) {
    var img = this.images[name]
    var image = {
      w: img.width,
      h: img.height,
      image: img,
    }
    return image
  }

  runWithScene(scene) {
    this.scene = scene
    //开始运行程序
    this.runloop()
    // var g = this
    // setTimeout(function() {
    //   g.runloop()
    // }, 1000/window.fps)
  }

  __start() {
    this.runCallback(this)
  }

  replaceScene(scene) {
    this.scene = scene
  }

  init() {
    var loads = []
    var g = this
    //预先载入所有图片
    var names = Object.keys(g.images)
    for (var i = 0; i < names.length; i++) {
      let name = names[i]
      var path = g.images[name]

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
  }


}
