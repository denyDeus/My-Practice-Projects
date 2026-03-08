const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.onresize = () =>{
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

const heartPointCount = 200;
const traceCount = 20;

function rand(){
    return Math.random();
}

function heartFunction(t){
    return {
        x: 16 * Math.pow(Math.sin(t),3),
        y: -(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t))
    }
}

let particles = [];

for(let i=0;i<heartPointCount;i++){

    let t = rand()*Math.PI*2;
    let heart = heartFunction(t);

    let x = width/2 + heart.x*20;
    let y = height/2 + heart.y*20;

    particles[i] = {
        vx:0,
        vy:0,
        speed:rand()*2+1,
        trace:[]
    }

    for(let k=0;k<traceCount;k++){
        particles[i].trace[k]={x:x,y:y}
    }
}

function loop(){

    ctx.fillStyle="rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,width,height);

    particles.forEach(p=>{

        let target = heartFunction(rand()*Math.PI*2);

        let tx = width/2 + target.x*20;
        let ty = height/2 + target.y*20;

        p.vx += (tx - p.trace[0].x)*0.0005;
        p.vy += (ty - p.trace[0].y)*0.0005;

        p.vx *= 0.95;
        p.vy *= 0.95;

        p.trace[0].x += p.vx;
        p.trace[0].y += p.vy;

        for(let k=traceCount-1;k>0;k--){
            p.trace[k].x = p.trace[k-1].x;
            p.trace[k].y = p.trace[k-1].y;
        }

        ctx.beginPath();
        for(let k=0;k<traceCount;k++){
            ctx.lineTo(p.trace[k].x,p.trace[k].y);
        }

        ctx.strokeStyle="red";
        ctx.stroke();
    });

    requestAnimationFrame(loop);
}

loop();