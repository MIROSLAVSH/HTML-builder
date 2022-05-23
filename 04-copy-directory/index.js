let fs = require('fs');
let path = require('path');

function copyDir(source, target) {

    let targetFile = target;

    if (fs.existsSync(target)) {
        if ( fs.lstatSync(target).isDirectory() ) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
    let files = [];

    let targetFolder = path.join(target, path.basename(source));
    if ( !fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    //copy
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach( function (file) {
            let curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyDir(curSource, targetFolder);
            }
        } );
    }
}
