
// autojs版本名称
// log(app.versionName)
var appName='QQ'
var packageName="com.tencent.mobileqq"
// 启动QQ  app名字
// launchApp(appName);
// 启动QQ  app包名
// launch(packageName);
// 获取QQ包名
// var name = getPackageName(appName);
// log(name)
// 获取QQ应用名
// var name = getAppName(packageName);
// log(name)
// 打开应用的详情页(设置页)
// app.openAppSetting(packageName)
// 卸载app
// app.uninstall(packageName);

var qq号='234224'
var qq群号='284029554'
// 打开qq群名片(qq群号)
// 打开qq名片(qq号)
// qq聊天(qq号)

function 打开qq群名片(qq群号){
  app.startActivity({
     action: "android.intent.action.VIEW",
     data:"mqqapi://card/show_pslcard?card_type=group&uin="+qq群号,
     packageName: "com.tencent.mobileqq",
  });//打开qq群名片
}

function 打开qq名片(qq号){
  app.startActivity({
     action: "android.intent.action.VIEW",
     data:"mqqapi://card/show_pslcard?uin="+qq号,
     packageName: "com.tencent.mobileqq",
  });//打开qq名片
}

function qq聊天(qq号){
  app.startActivity({
     action: "android.intent.action.VIEW",
     data:"mqq://im/chat?chat_type=wpa&version=1&src_type=web&uin="+qq号,
     packageName: "com.tencent.mobileqq",
  });//qq聊天
}













// var appInfoList=获取所有app信息()
// log(appInfoList)

function 获取所有app信息(){
  var pm = context.getPackageManager()
  var appList=pm.getInstalledApplications(0)
  var appInfoList=[]
  for(let i=0;i<appList.size();i++){
    var app=appList.get(i)
    var appInfo={
      appName:app.loadLabel(pm),
      packageName:app.packageName,
      isSystemApp:app.isSystemApp(),
      firstInstallTime:pm.getPackageInfo(app.packageName,0).firstInstallTime
    }
    appInfoList.push(appInfo)
  }
  return appInfoList
}

// 启动最新安装的app()
function 启动最新安装的app(){
  var appInfoList=获取所有app信息()
  appInfoList.sort((a,b)=>{
    return b.firstInstallTime-a.firstInstallTime
  })
  log('最新安装的app是=%j',appInfoList[0])
  var packageName=appInfoList[0].packageName
  launch(packageName)
  return appInfoList[0].appName
}

var appImgPath=获取app图标('Auto.js')
log('appImgPath=',appImgPath)
app.viewFile(appImgPath)

function 获取app图标(appName){
  importClass(java.io.File);
  importClass(java.io.FileOutputStream);
  importClass(android.graphics.Bitmap);
  var pm = context.getPackageManager();
  importClass(android.util.DisplayMetrics)
  var name = appName
  var packageName = app.getPackageName(name);
  var appInfo = pm.getApplicationInfo(packageName, 0);
  var bmp = appInfo.loadIcon(pm).getBitmap();
  var imgPath="/sdcard/"+name+".jpg"
  files.create(imgPath);
  var f = new File(imgPath);
  var fOut = new FileOutputStream(f);
  bmp.compress(Bitmap.CompressFormat.JPEG, 100, fOut);
  fOut.flush();
  fOut.close();
  // var img=images.read("sdcard/"+name+".jpg")
  return imgPath
}

























// 以下命令需要手机root权限
function 停止app(appName) {
  var packageName=getPackageName(appName);
  shell('am force-stop ' + packageName,true);

}
function 卸载app(appName) {
  var packageName=getPackageName(appName);
  shell("pm uninstall "+packageName,true)
}

function 清除app数据(appName) {
  var packageName=getPackageName(appName);
  shell('pm clear ' + packageName,true);
}
