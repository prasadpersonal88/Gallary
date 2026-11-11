// Add your own image files inside images/ and list them here.
const PHOTOS = [
  { src: "neha1.jpeg", caption: "A favourite moment" },
  { src: "neha2.jpeg", caption: "Another memory" },
  { src: "neha3.jpeg", caption: "One more moment" },
  { src: "neha4.jpeg", caption: "One more moment" },
  { src: "neha5.jpeg", caption: "Another memory" },
  { src: "neha6.jpeg", caption: "One more moment" },
  { src: "neha7.jpeg", caption: "One more moment" },
  { src: "neha8.jpeg", caption: "Another memory" },
  { src: "neha9.jpeg", caption: "One more moment" }
];
const img=document.getElementById("photo"), caption=document.getElementById("caption");
const current=document.getElementById("current"), total=document.getElementById("total");
const progress=document.getElementById("progress-bar"), dots=document.getElementById("dots");
const hint=document.getElementById("hint"), stage=document.getElementById("stage");
let index=0,startX=0,startY=0,timer;
function renderDots(){dots.replaceChildren();PHOTOS.forEach((p,i)=>{const b=document.createElement("button");b.className="dot"+(i===index?" active":"");b.setAttribute("aria-label",`Show photo ${i+1}`);b.onclick=()=>show(i);dots.appendChild(b);});}
function show(n){if(!PHOTOS.length)return;index=(n+PHOTOS.length)%PHOTOS.length;const p=PHOTOS[index];img.classList.add("loading");img.onload=()=>img.classList.remove("loading");img.onerror=()=>{img.classList.remove("loading");caption.textContent="Image not found — check script.js";};img.src=p.src;img.alt=p.caption||`Photo ${index+1}`;caption.textContent=p.caption||"";current.textContent=index+1;total.textContent=PHOTOS.length;progress.style.width=((index+1)/PHOTOS.length*100)+"%";renderDots();hint.classList.add("hidden");clearTimeout(timer);}
function next(){show(index+1)}function prev(){show(index-1)}
document.getElementById("next").onclick=next;document.getElementById("prev").onclick=prev;
// Vertical gestures only: swipe up = next, swipe down = previous.
stage.addEventListener("touchstart",e=>{if(e.touches.length){startX=e.touches[0].clientX;startY=e.touches[0].clientY;}},{passive:true});
stage.addEventListener("touchend",e=>{if(!e.changedTouches.length)return;const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dy)>45&&Math.abs(dy)>Math.abs(dx)*1.15){dy<0?next():prev();}},{passive:true});
document.addEventListener("keydown",e=>{if(e.key==="ArrowDown"||e.key==="ArrowRight")next();if(e.key==="ArrowUp"||e.key==="ArrowLeft")prev();});
if(PHOTOS.length){show(0);timer=setTimeout(()=>hint.classList.add("hidden"),3500);}else{stage.textContent="Add photo paths to PHOTOS in script.js";}
