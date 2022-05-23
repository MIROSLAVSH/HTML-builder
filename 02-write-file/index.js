const fs = require("fs");
 
fs.writeFile("hello.txt", "Hello World!", function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("text.txt", "utf8");
    console.log(data);  // выводим считанные данные
});