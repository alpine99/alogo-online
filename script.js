(function(){
 const dict=window.ALOGO_TRANSLATIONS||{};
 const select=document.getElementById('languageSelect');
 const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
 const getLang=()=>localStorage.getItem('alogo_lang')||((navigator.language||'en').slice(0,2));
 function apply(lang){ if(!dict[lang]) lang='en'; localStorage.setItem('alogo_lang',lang); document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr'; if(select) select.value=lang; document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n'); if(dict[lang][k]) el.textContent=dict[lang][k];}); }
 if(select) select.addEventListener('change',e=>apply(e.target.value)); apply(getLang());
})();
