const express = require("express");
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
let resArray = [];
let texto='';

for (var i=1;i<=50;i++){
    if (i % 2===0){
        texto='Soy Par!';
    }else{
        texto='Soy Impar!';
    }
    resArray.push(texto);
}

app.get('/', (req, res) => {

    let $tagValue='';

    for (var j=0;j<resArray.length;j++){
        $tagValue+=`<p>${j+1} ${resArray[j]}</p>`
    }

     res.send(`<ul>${$tagValue}</ul>`);

});

app.listen(3000, () => console.log('Listening on port 3000!'));