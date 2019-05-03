

var filePath='/sdcard/autojs教学.txt'
// if(files.exists(filePath)){
//   log('文件存在')
// }else{
//   log('文件不存在')
//   files.createWithDirs(filePath);
//   log('文件已创建')
// }
// log('文件中的内容=')
// log(files.read(filePath));

// files.write(filePath,'111')
// files.append(filePath,'\n222')
// files.append(filePath,'\n333')
// files.append(filePath,'\n444')
// files.append(filePath,'\n555')

// log('文件中的内容第二次打印=')
// log(files.read(filePath));


var path = filePath
var lineNum = 0
deletedLine(path, lineNum)
log(files.read(filePath));
function deletedLine(path, lineNum) {
  var file, result;
  file = open(path, "r")
  result = file.readlines()
  file.close();
  var tempArr = Array.prototype.slice.call(result);
  var line = tempArr.splice(lineNum, 1);
  file = open(path, "w")
  result = file.writelines(tempArr)
  file.flush();
  file.close();
  return line;
}
