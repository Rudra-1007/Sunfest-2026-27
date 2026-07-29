const nav=document.getElementById("nav"),menu=document.getElementById("menuBtn"),links=document.getElementById("navLinks");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>20));
menu.addEventListener("click",()=>{links.classList.toggle("open");menu.setAttribute("aria-expanded",links.classList.contains("open"))});
links.querySelectorAll("a").forEach(a=>a.onclick=()=>links.classList.remove("open"));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

const glow=document.getElementById("cursorGlow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

const timeline=document.querySelector(".timeline"),fill=document.getElementById("lineFill");
function updateLine(){if(!timeline)return;const r=timeline.getBoundingClientRect(),vh=innerHeight;let p=(vh*.65-r.top)/(r.height*.9);p=Math.max(0,Math.min(1,p));fill.style.height=(p*100)+"%"}
addEventListener("scroll",updateLine,{passive:true});updateLine();

document.querySelectorAll(".card,.component,.sdg-card").forEach(card=>{
 card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect();card.style.background=`radial-gradient(circle at ${e.clientX-r.left}px ${e.clientY-r.top}px, rgba(0,229,255,.08), transparent 35%),linear-gradient(145deg,#0c131f,#080d15)`});
 card.addEventListener("pointerleave",()=>card.style.background="");
});