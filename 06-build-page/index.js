const fs = require('fs')
const folderName = '/project-dist'
try {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
  }
} catch (err) {
  console.error(err)
}