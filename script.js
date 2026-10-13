/* ===== EDIT THIS BLOCK ===== */
var SITE={
  whatsapp:"27643505343",   /* e.g. "27821234567" (country code, no + or spaces) */
  phone:"064 350 5343 / 083 632 9395",      /* e.g. "082 123 4567" */
  email:"twinvisionprojects@gmail.com",      /* e.g. "info@yourdomain.co.za" */
  area:"01 Impala Drive, Carletonville"        /* e.g. "Evander, Mpumalanga" */
};
/* ============================ */
/* PHOTOS: automatic. Upload a picture into the "images" folder with one of these names
   and it appears by itself (jpg, jpeg, png or webp, all lowercase):
   hero1, hero2, about, project1 to project6, ntomzanele, ntombzodwa
   Only use PHOTOS below if you want a different file name, e.g. hero1:"my-house.jpg" */
var PHOTOS={hero1:"",hero2:"",about:"",g1:"",g2:"",g3:"",g4:"",g5:"",g6:"",ceo:"",ceo2:""};
var NAMES={hero1:["hero1"],hero2:["hero2"],about:["about"],g1:["project1"],g2:["project2"],g3:["project3"],g4:["project4"],g5:["project5"],g6:["project6"],ceo:["ntomzanele","ceo"],ceo2:["ntombzodwa","ceo2"]};
var EXT=["jpg","jpeg","png","webp","JPG","JPEG","PNG"];
function loadPhoto(el,list){
  if(!list.length)return;
  var i=new Image();
  i.onload=function(){el.textContent="";el.appendChild(i);el.classList.add("has")};
  i.onerror=function(){loadPhoto(el,list.slice(1))};
  i.alt="Twin Vision Projects";
  i.src="images/"+list[0];
}
document.querySelectorAll(".ph[data-k]").forEach(function(el){
  var k=el.dataset.k,list=[];
  if(PHOTOS[k])list.push(PHOTOS[k]);
  (NAMES[k]||[]).forEach(function(n){EXT.forEach(function(e){list.push(n+"."+e)})});
  loadPhoto(el,list);
});
function set(id,v){if(v)document.getElementById(id).textContent=v}
set("iph",SITE.phone);set("iem",SITE.email);set("iar",SITE.area);
if(SITE.phone){var p=document.getElementById("iph");p.innerHTML="";SITE.phone.split("/").forEach(function(n,k){var a=document.createElement("a");a.href="tel:+27"+n.replace(/\D/g,"").replace(/^0/,"");a.textContent=n.trim();a.style.textDecoration="none";if(k)p.appendChild(document.createTextNode(" / "));p.appendChild(a)})}
if(SITE.email){var e=document.getElementById("iem");e.innerHTML='<a href="mailto:'+SITE.email+'" style="text-decoration:none">'+SITE.email+'</a>'}
var bg=document.getElementById("bg"),nv=document.getElementById("nv");
bg.onclick=function(){var o=nv.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
nv.addEventListener("click",function(e){if(e.target.tagName==="A"){nv.classList.remove("open");bg.setAttribute("aria-expanded","false")}});
document.getElementById("f").addEventListener("submit",function(e){
  e.preventDefault();var d=new FormData(e.target);
  var t="Hello Twin Vision Projects, my name is "+d.get("n")+". I need: "+d.get("s")+". "+(d.get("m")||"")+" Call me on "+d.get("p")+".";
  var n=document.getElementById("note");
  if(SITE.whatsapp){location.href="https://wa.me/"+SITE.whatsapp+"?text="+encodeURIComponent(t)}
  else if(SITE.email){location.href="mailto:"+SITE.email+"?subject="+encodeURIComponent("Quote request: "+d.get("s"))+"&body="+encodeURIComponent(t)}
  else{n.textContent="Contact details have not been added to the site yet."}
});
