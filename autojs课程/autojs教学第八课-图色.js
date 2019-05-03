requestScreenCapture();
var img = captureScreen();
var p = new Paint();
var canvas = new Canvas(img);

p.setStrokeWidth(10)//设置画笔宽度
p.setAntiAlias(true)//设置是否使用抗锯齿功能，如果使用，会导致绘图速度变慢
p.setStyle(Paint.Style.FILL);
p.setTextSize(130)
p.setTextAlign(Paint.Align.CENTER);
p.setARGB(255, 10, 55, 200);
// p.setColor(colors.YELLOW)
var w = canvas.width,
h = canvas.height;
var content='QQ群: 284029554'
canvas.drawText(content,w / 2, h / 3*2, p);
var imgPath='/sdcard/1.png'
images.save(canvas.toImage(), imgPath);
img.recycle();
app.viewFile(imgPath)

