var info = 'this is myModule'
log(info)
String.prototype.format = function () {
  return 'yourMessage: ' + this
}

// function trace() {
//   console.trace('this is myModule trace')
// }
// for(var i=0;i<10;i++){
//   sleep(1000)
//   log('this is myModule')
// }

// module.exports = 'trace'
