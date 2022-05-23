const fs = require("fs");
fs.readFile("text.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error;
                console.log(data); 
});
