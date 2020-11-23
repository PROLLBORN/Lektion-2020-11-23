
let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

let rectangles2 = [
    {
        "x": 10,
        "y": 10,
        "color": "green",
        "width": 200,
        "height": 100
    },
    {
        "x": 20,
        "y": 20,
        "color": "blue",
        "width": 100,
        "height": 100
    },
    {
        "x": 30,
        "y": 30,
        "color": "yellow",
        "width": 50,
        "height": 100
    },
    {
        "x": 40,
        "y": 40,
        "color": "red",
        "width": 75,
        "height": 100
    },
    {
        "x": 50,
        "y": 50,
        "color": "orange",
        "width": 50,
        "height": 50
    }
];




function createRectanglesList(antal){
    
    let lista = [];
    let xled=10;
    let yled=10;

    for(let i=0;i<antal;i++){

       let item = {
        "x": xled,
        "y": yled,
        "color": "green",
        "width": 100,
        "height": 100
       }

       lista.push(item);
       
       xled=xled+10;
       yled+=10;

    }
    
    return lista;
}


let rectangles= createRectanglesList(20);




rectangles.forEach(rectangle => {
    //ctx.fillRect(rectangle.x, rectangle.y, 200, 100);
    drawRect(rectangle);
})


/*
for(let i=0;i<rectangles.length;i++){
    drawRect(rectangles[i]);
}
*/

/*
let knappTryckt = true;

while (kalle){
    drawRect(rectangles[i]);
    i=i+2;
}
*/

/*
let j= 0;

do {
     console.log('do while hej '+j);
     j++;
} while (j<5);

console.log(j);

*/

/*
const person = {
    name: "patrik",
    age: 52,
    length: 180
}

for (let key in person){

    console.log(`${key} : ${person[key]}`);
}




for (let rectangle of rectangles) {
    drawRect(rectangle);
}


rectangles.forEach(rectangle => {
    drawRect(rectangle);
})

*/



function drawRect(rec) {
    ctx.beginPath();
    ctx.lineWidth = "6";
    //ctx.strokeStyle = rec.color;

    let R=255; // 0-255
    let G=100;
    let B=0;
    let r_a = Math.random();

    //let colorCode = "rgb("+R+","+G+","+B+")";
    let colorCode = `rgba(${R},${G},${B},${r_a})`

    //console.log(Math.random());
    //ctx.strokeStyle = "rgb(25, 0, 25)";
    ctx.strokeStyle = colorCode;

    //ctx.strokeStyle = `rgba(32, 45, 21, 0.1)`;

    ctx.rect(rec.x, rec.y, rec.width, rec.height);
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


let index =Math.floor(Math.random()*5);

console.log(`index = ${index}`);

//let colorList=["val1","val2","val3","val4","val5","val6"];

console.log(rectangles2 [index].color);