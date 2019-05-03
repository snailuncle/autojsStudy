var button=floaty.rawWindow(
  <button id='button' >button</button>
)
button.setPosition(100, 300)
button.setTouchable(true)
button.button.on('click', function () {
  log('button click')
  setInterval(
    () => {
      button.setPosition(button.getX() + 11, button.getY())
    }, 300
  )
})
var exitButton=floaty.rawWindow(
  <button id='exit' >exit</button>
)
exitButton.setPosition(100, 1500)
exitButton.setTouchable(true)
exitButton.exit.on('click', function () {
  exit()
})
var text=floaty.rawWindow(
  <text id='text' textSize='60sp' >text</text>
)
text.setPosition(600, 300)
text.setTouchable(false)
var props=floaty.rawWindow(
  <vertical>
    <text id='buttonProp' textSize='20sp' bg='#eeeeee'>buttonProp</text>
    <text id='textProp' textSize='20sp' bg='#ee66ee'>textProp</text>
  </vertical>
)
props.setPosition(100, 600)
setInterval(
  function () {
    var buttonProp = getViewProp(button)
    var textProp = getViewProp(text)
    ui.run(
      function () {
        props.buttonProp.setText('buttonProp' + '\n' + buttonProp)
        props.textProp.setText('textProp' + '\n' + textProp)
      }
    )
  }, 300
)

function getViewProp(view) {
  var info = {}
  info.x = view.getX()
  info.y = view.getY()
  info.w = view.getWidth()
  info.h = view.getHeight()
  info = JSON.stringify(info)
  // log(info)
  return info
}
// // window.setPosition(600,600)
// // window.getX()
// // window.getY()
// // window.setSize(width, height)
// // window.getWidht()
// // window.getHeight()
// // window.setTouchable(touchable)


setInterval(() => {}, 1000)
