var levels = [
  [
    [0, 0,],
  ],
  [
    [50, 0,],
    [100, 100,],
  ],
  [
    [50, 30,],
    [100, 100, 2],
    [200, 100, 3],
  ],
]

var blocks = []

var enableDebugMode = function(game, enable) {
  if (!enable) {
    return
  }
  window.paused = false
  window.addEventListener('keydown', function(event){
    var k = event.key
    if (k == 'p') {
      window.paused = !window.paused
    } else if ('1234567'.includes(k)) {
      blocks = loadLevel(game, Number(k))
    }
  })
  //控制速度
  document.querySelector('#id-input-speed').addEventListener('input', function(event) {
    var input = event.target
    // log(event, input.value)
    window.fps = input.value
  })
}

var loadLevel = function(game, n){
  n = n - 1
  var level = levels[n]
  var blocks = []
  for (var i = 0; i < level.length; i++) {
    var p = level[i]
    var block = Block(game, p)
    blocks.push(block)
  }
  return blocks
}
