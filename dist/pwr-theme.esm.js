export default()=>{function s(s,e){const i=s.contains("main-slide"),l=s.contains("full-width-slide"),d=s.contains("full-width-compressed-slide"),t=s.contains("compressed-slide");i?e.classList.add("main-slide"):e.classList.remove("main-slide"),l?e.classList.add("full-width-slide"):e.classList.remove("full-width-slide"),d?e.classList.add("full-width-compressed-slide"):e.classList.remove("full-width-compressed-slide"),t||!i&&!l&&!d?e.classList.add("compressed-slide"):e.classList.remove("compressed-slide")}return{id:"pwr-theme",init:e=>{Reveal.on("slidechanged",(e=>{s(e.currentSlide.classList,e.target)})),Reveal.on("ready",(e=>{s(e.currentSlide.classList,e.target)}))}}};
