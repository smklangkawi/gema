/* ============================================
   PROGRAM GEMA KEJAYAAN 2026
   script.js
============================================ */

// Loading apabila halaman dibuka
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Daftar Service Worker (PWA)
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js")
        .then(reg => console.log("Service Worker berjaya didaftarkan."))
        .catch(err => console.log("Service Worker gagal:", err));
    });
}

// Animasi Fade In
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card, .info").forEach((el)=>{
    observer.observe(el);
});

// Butang Kembali ke Atas
const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.onscroll = function(){

    if(document.body.scrollTop>250 || document.documentElement.scrollTop>250){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

};

topButton.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Papar Tahun Semasa di Footer
const tahun = new Date().getFullYear();

const footer = document.querySelector("footer");

if(footer){

    footer.innerHTML += `<p>Hak Cipta © ${tahun} SMK Langkawi P. Tuba</p>`;

}

// Papar Tarikh & Masa
function updateClock(){

    const now = new Date();

    const options = {

        weekday:'long',

        day:'numeric',

        month:'long',

        year:'numeric'

    };

    const tarikh = now.toLocaleDateString("ms-MY",options);

    const masa = now.toLocaleTimeString("ms-MY");

    let jam = document.getElementById("masaSemasa");

    if(!jam){

        jam=document.createElement("div");

        jam.id="masaSemasa";

        jam.style.position="fixed";
        jam.style.top="10px";
        jam.style.right="10px";
        jam.style.background="#003366";
        jam.style.color="#fff";
        jam.style.padding="8px 12px";
        jam.style.borderRadius="8px";
        jam.style.fontSize="13px";
        jam.style.zIndex="9999";

        document.body.appendChild(jam);

    }

    jam.innerHTML=`${tarikh}<br>${masa}`;

}

setInterval(updateClock,1000);

// Sambutan ringkas apabila halaman dibuka
setTimeout(()=>{

    console.log("Selamat Datang ke Portal Program Gema Kejayaan.");

},500);

// Efek hover pada kad
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// Fungsi notifikasi ringkas
function showMessage(msg){

    const note=document.createElement("div");

    note.innerHTML=msg;

    note.style.position="fixed";
    note.style.bottom="20px";
    note.style.left="20px";
    note.style.background="#003366";
    note.style.color="white";
    note.style.padding="12px 18px";
    note.style.borderRadius="8px";
    note.style.boxShadow="0 3px 10px rgba(0,0,0,.3)";
    note.style.zIndex="9999";

    document.body.appendChild(note);

    setTimeout(()=>{

        note.remove();

    },3000);

}

// Contoh penggunaan
// showMessage("Selamat Datang ke Portal Program Gema Kejayaan");
