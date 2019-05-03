var 白胡子imgUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556820976664&di=2f6b982cad8f48329f2e88caf458619b&imgtype=0&src=http%3A%2F%2Fp2.qhimgs4.com%2Ft01ab2be7821e2c87c1.jpg'

var imgWindow=floaty.window(
  <img  id='白胡子'   w='300' h='300'/>
)



// setTimeout(
//   function(){
//     ui.run(
//       function(){
//         imgWindow.白胡子.attr('src','https://www.baidu.com/img/bd_logo1.png')
//       }
//     )
//   },1000
// )


var 白胡子图片存储地址='/sdcard/白胡子.jpg'

// http.get(白胡子imgUrl, {}, function(res, err){
//   if(err){
//       console.error(err);
//       return;
//   }
//   log("code = " + res.statusCode);
//   var bytes=res.body.bytes()
//   files.writeBytes(白胡子图片存储地址,bytes)
//   // app.viewFile(白胡子图片存储地址);
//   ui.run(
//     function(){
//       imgWindow.白胡子.attr('src','file://'+白胡子图片存储地址)
//     }
//   )
// });

var res=http.get(白胡子imgUrl)
log("code = " + res.statusCode);
var bytes=res.body.bytes()
files.writeBytes(白胡子图片存储地址,bytes)
app.viewFile(白胡子图片存储地址);
ui.run(
  function(){
    imgWindow.白胡子.attr('src','file://'+白胡子图片存储地址)
  }
)

setInterval(
  ()=>{log(1)},10000
)
