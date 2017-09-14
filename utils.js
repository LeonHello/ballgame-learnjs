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
  //考虑球 b 和砖块 a 相撞
  //球的y大于砖块的y && 球的y小于砖块的高+砖块的y
  if (b.y > a.y && b.y < a.image.height + a.y) {
    //球的x大于砖块的x && 球的x小于砖块的宽+砖块的x
    if (b.x > a.x && b.x < a.image.width + a.x) {
      // log('ball && block 相撞')
      return true
    }
  }
  //球 b 的右下角和砖块 a 的左上角碰撞
  if (b.y + b.image.height > a.y && b.y + b.image.height < a.y + a.image.height) {
    if (b.x + b.image.width > a.x && b.x + b.image.width < a.x + a.image.width) {
      return true
    }
  }

  //球 b 的右上角和砖块 a 的左下角碰撞
  if (b.y > a.y && b.y < a.y + a.image.height) {
    if (b.x + b.image.width > a.x && b.x + b.image.width < a.x + a.image.width) {
      return true
    }
  }

  //球 b 的左下角和砖块 a 的右上角碰撞
  // if (b.y + b.iamge.height > a.y && b.y + b.iamge.height < a.y + a.image.height) {
  //   if (b.x > a.x && b.x < a.x + a.image.width) {
  //     return true
  //   }
  // }

  return false
}
