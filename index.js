/* empty css                      */import{i as c,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="48286639-c5b13cd121e9f124dcf0b461d",y=`https://pixabay.com/api/?key=${g}`;let n;function h(){document.getElementById("loaderOverlay").classList.add("active"),document.getElementById("loader").classList.remove("loader-hidden")}function L(){document.getElementById("loaderOverlay").classList.remove("active"),document.getElementById("loader").classList.add("loader-hidden")}document.querySelector(".searchForm").addEventListener("submit",s=>{s.preventDefault(),h();let r=document.querySelector(".gallery");r.innerHTML="";let o=document.querySelector(".search-input").value,a=new URLSearchParams({q:o,orientation:"horizontal",safesearch:!0,image_type:"photo",per_page:40});fetch(`${y}&${a}`).then(e=>{if(!e.ok)throw new Error("Ağ Hatası: "+e.statusText);return e.json()}).then(e=>{if(e.hits.length===0){c.warning({message:"Üzgünüz, aramanızla eşleşen görsel bulunamadı. Lütfen farklı bir terimle tekrar deneyin!",position:"topRight"});return}r.innerHTML=e.hits.map(({webformatURL:t,largeImageURL:i,tags:l,likes:m,views:d,comments:u,downloads:p})=>`<li class="gallery-item">
              <a class="gallery-link" href="${i}">
                <img
                  class="gallery-image"
                  src="${t}"
                  alt="${l}"
                  title="${l}"
                />
                <ul class="img-information">
                  <li>
                    <span class="img-information-title">Beğeni</span>
                    <span class="img-information-content">${m}</span>
                  </li>
                  <li>
                    <span class="img-information-title">Görüntülenme</span>
                    <span class="img-information-content">${d}</span>
                  </li>
                  <li>
                    <span class="img-information-title">Yorum</span>
                    <span class="img-information-content">${u}</span>
                  </li>
                  <li>
                    <span class="img-information-title">İndirme</span>
                    <span class="img-information-content">${p}</span>
                  </li>
                </ul>
              </a>
            </li>`).join(""),n&&n.destroy(),n=new f(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250,closeText:"×",navText:["&larr;","&rarr;"],overlayOpacity:.9,spinner:!0,alertError:!1}),n.refresh()}).catch(e=>{c.error({title:"Hata",message:`Görseller yüklenirken bir hata oluştu: ${e.message}`,position:"topRight"}),console.error("Hata oluştu:",e)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
