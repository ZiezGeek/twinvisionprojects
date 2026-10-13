/* ===== EDIT THIS BLOCK ===== */
var SITE={
  whatsapp:"",   /* e.g. "27821234567" (country code, no + or spaces) */
  phone:"",      /* e.g. "082 123 4567" */
  email:"",      /* e.g. "info@yourdomain.co.za" */
  area:""        /* e.g. "Evander, Mpumalanga" */
};
/* Photos: put files in an "images" folder, then write the file name, e.g. hero1:"house1.jpg" */
var PHOTOS={hero1:"",hero2:"",about:"",g1:"",g2:"",g3:"",g4:"",g5:"",g6:"",ceo:"",ceo2:""};
/* ============================ */
document.querySelectorAll(".ph[data-k]").forEach(function(el){var f=PHOTOS[el.dataset.k];if(f){var i=new Image();i.src="images/"+f;i.alt="Twin Vision Projects project photo";i.onload=function(){el.textContent="";el.appendChild(i);el.classList.add("has")}}});
function set(id,v){if(v)document.getElementById(id).textContent=v}
set("iph",SITE.phone);set("iem",SITE.email);set("iar",SITE.area);
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
