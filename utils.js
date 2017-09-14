var log = console.log.bind(console)

// var e = sel => document.querySelector(sel)
//
// var log = function(s) {
//   e('#id-text-log').value += '\n' + s
// }


var  imageFromPath = function(path) {
  var img = new Image()
  img.src = path
  return img
}

var rectIntersects = function(a, b) {
  var o = a
  var ball = b
  if (ball.y > o.y && ball.y < o.image.height + o.y) {
    if (ball.x > o.x && ball.x < o.image.width + o.x) {
      // log('相撞')
      return true
    }
  }
  return false
}
