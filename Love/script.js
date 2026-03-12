const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];
let targets = [];
let phase = 0; // 0 = form text, 1 = form heart

function createTextTargets(){
    let temp = document.createElement("canvas");
    let tctx = temp.getContext("2d");

    temp.width = canvas.width;
    temp.height = canvas.height;

    tctx.fillStyle = "white";
    tctx.font = "bold 120px Arial";
    tctx.textAlign = "center";
    tctx.fillText("Te Amo Grace", canvas.width/2, canvas.height/2);

    let data = tctx.getImageData(0,0,temp.width,temp.height).data;

    targets = [];

    for(let y=0;y<temp.height;y+=6){
        for(let x=0;x<temp.width;x+=6){
            let index = (y*temp.width + x)*4;
            if(data[index+3] > 128){
                targets.push({x,y});
            }
        }
    }
}

function heartShapeTargets(){
    targets = [];
    for(let t=0;t<Math.PI*2;t+=0.03){
        let x = 16*Math.pow(Math.sin(t),3);
        let y = -(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));

        targets.push({
            x: canvas.width/2 + x*20,
            y: canvas.height/2 + y*20
        });
    }
}

function createParticles(){
    particles = [];
    for(let i=0;i<targets.length;i++){
        let side = Math.random() < 0.5 ? -100 : canvas.width+100;
        particles.push({
            x: side,
            y: Math.random()*canvas.height,
            tx: targets[i].x,
            ty: targets[i].y,
            size: 3
        });
    }
}

function drawMiniHeart(x,y,s){
    ctx.fillStyle="pink";
    ctx.beginPath();
    ctx.arc(x-s/2,y-s/2,s/2,0,Math.PI*2);
    ctx.arc(x+s/2,y-s/2,s/2,0,Math.PI*2);
    ctx.lineTo(x,y+s);
    ctx.fill();
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        p.x += (p.tx - p.x)*0.05;
        p.y += (p.ty - p.y)*0.05;
        drawMiniHeart(p.x,p.y,p.size);
    });

    requestAnimationFrame(animate);
}

createTextTargets();
createParticles();

setTimeout(()=>{
    phase = 1;
    heartShapeTargets();
    createParticles();
},4000);

animate();