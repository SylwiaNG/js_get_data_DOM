document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".population"),e=0,n=0;t.forEach(function(t){var o=parseInt(t.textContent.trim().replace(/,/g,""),10);!isNaN(o)&&(e+=o,n++)});var o=0!==n?e/n:0,r=d(e),a=d(o),u=document.querySelector(".average-population"),c=document.querySelector(".total-population");function d(t){return t.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,",")}u.textContent=a,c.textContent=r});
//# sourceMappingURL=index.96f9e80e.js.map