var currentProcess='0';
var mp,musicDuration,musicDuration;

var musicControl=floaty.window(
  <vertical margin='10 10' w='600px' h='600px'>
    <horizontal>
      <button id='play' h='300px' w='300px' >play</button>
      <button id='stop' h='300px' w='300px' >stop</button>
    </horizontal>
    <vertical h='300' w='300' padding='10 10'>
      <seekbar id="musicSeekbar" bg='#00eeee' margin='10 10' h='100px' w='500px'/>
      <text id='currentProcess' textSize='20sp' bg='#00eeee' text='当前播放进度={{currentProcess}}' ></text>
    </vertical>
  </vertical>
)

musicControl.musicSeekbar.setOnSeekBarChangeListener({
  onProgressChanged: function(seekBar, progress, fromUser) {
    musicControl.currentProcess.setText('当前播放进度='+String(progress));
    if(fromUser && mp && musicDuration>0){
      var 毫秒进度=musicDuration/100*progress
      mp.seekTo(毫秒进度)
    }
  }
});

musicControl.play.on('click', function () {
  mp = new android.media.MediaPlayer();
  mp.setDataSource(context, android.media.RingtoneManager.getDefaultUri(android.media.RingtoneManager.TYPE_RINGTONE));
  mp.prepare();
  mp.start();
  musicDuration = mp.getDuration()
  var id=setInterval(
    function(){
      if(mp && mp.isPlaying()){
        ui.run(
          function(){
            musicControl.musicSeekbar.setProgress(mp.getCurrentPosition()/musicDuration*100);
          }
        )
      }
      if(mp && mp.isPlaying()){

      }else{
        clearInterval(id)
      }
    },100
  )




})

musicControl.stop.on('click', function () {
  if (mp && mp.isPlaying()) {
    mp.stop()
  }
})

setInterval(
  () => {
  }, 1000
)
