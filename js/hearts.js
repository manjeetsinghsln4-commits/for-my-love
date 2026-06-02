// Floating hearts
setInterval(()=>{const h=document.createElement('div');h.innerHTML=['❤️','💕','💗','💖','💘'][Math.floor(Math.random()*5)];
h.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:-30px;font-size:${14+Math.random()*18}px;pointer-events:none;z-index:1;opacity:${.4+Math.random()*.4}`;
document.body.appendChild(h);let y=-30;const t=setInterval(()=>{y+=1.2;h.style.top=y+'px';if(y>window.innerHeight){clearInterval(t);h.remove();}},25);},600);

// Rose petals, tulips & cherry blossoms
setInterval(()=>{const p=document.createElement('div');p.className='petal';p.innerHTML=['🌸','🌹','💐','✨','🌷','🌸','🌷','🌸'][Math.floor(Math.random()*8)];
p.style.left=Math.random()*100+'vw';p.style.animationDuration=(4+Math.random()*4)+'s';
p.style.fontSize=(16+Math.random()*14)+'px';
document.body.appendChild(p);setTimeout(()=>p.remove(),8000);},500);

// Sparkles
for(let i=0;i<15;i++){const s=document.createElement('div');s.className='sparkle';
s.style.left=Math.random()*100+'vw';s.style.top=Math.random()*100+'vh';
s.style.animationDelay=Math.random()*3+'s';document.body.appendChild(s);}
