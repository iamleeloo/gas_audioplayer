function audioList() {
  const folderId = 'folderGDriveId'
  
  var fileFolder = DriveApp.getFolderById(folderId);
  var files = fileFolder.getFilesByType('audio/mpeg');
  var fileList = [];
  
  while (files.hasNext()) {
    var file = files.next();
    var fileName = file.getName();
    var fileId = file.getId();
    var fileJson = {
      'id': fileId,
      'name': fileName,
    };
    fileList.push(fileJson);
  }
  
  return fileList;
}

function doGet() {
  return HtmlService
  .createTemplateFromFile('index')
  .evaluate()
  .setTitle('Alpha');
}
