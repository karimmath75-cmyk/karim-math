/* kmx-vec: أسهم الأشعة + دروس مفصّلة للمقطعين 4 و5 (4AM) + مثال الأشجار في PGCD */
(function(){
 const st=document.createElement('style');st.textContent='.kmv{position:relative;display:inline-block;direction:ltr;unicode-bidi:isolate;padding-top:.15em}.kmv::before{content:"→";position:absolute;top:-.55em;left:0;right:0;text-align:center;font-size:.8em;line-height:1}.kmd{border:1.5px solid #f59e0b;border-radius:14px}.kmd h4{margin:.6rem 0 .2rem;color:#d97706}.kmd .ex{background:rgba(245,158,11,.1);border-radius:10px;padding:.4rem .7rem;margin:.3rem 0}.kmtree{font-size:1.05rem;line-height:1.9}';document.head.appendChild(st);
 /* 1) تحويل vec(AB) والسهم المركّب إلى شعاع بسهم فوقه */
 const RE=/vec\(([^()]{1,6})\)|([A-Z][A-Z]?[′']?|[a-z])⃗/g;
 function fix(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const L=[];let n;while(n=w.nextNode()){if(RE.test(n.nodeValue))L.push(n);RE.lastIndex=0}
  L.forEach(n=>{const f=document.createDocumentFragment(),s=n.nodeValue;let i=0,m;RE.lastIndex=0;while(m=RE.exec(s)){f.appendChild(document.createTextNode(s.slice(i,m.index)));const sp=document.createElement('span');sp.className='kmv';sp.textContent=m[1]||m[2];f.appendChild(sp);i=m.index+m[0].length}f.appendChild(document.createTextNode(s.slice(i)));n.parentNode.replaceChild(f,n)})}
 window.kmVecFix=fix;
 let q=0;new MutationObserver(()=>{cancelAnimationFrame(q);q=requestAnimationFrame(()=>['pgbox','khbox','dbody','econt2','scont','ccont'].forEach(id=>fix(document.getElementById(id))))}).observe(document.body,{childList:true,subtree:true});
 /* 2) نصوص درسي الأشعة بالأسهم */
 try{const ch=PROG['4AM'].ch,g=id=>ch.find(c=>c.id===id);
  const a=g('4b4');if(a){a.s='مركبتا الشعاع vec(AB) هما (xB − xA ; yB − yA).\nمنتصف [AB] هو I((xA + xB)/2 ; (yA + yB)/2).\nالمسافة AB = √((xB − xA)² + (yB − yA)²) في معلم متعامد ومتجانس.\nمثال: A(1 ; 2) و B(5 ; 5) ⇒ vec(AB)(4 ; 3) و AB = 5 و I(3 ; 3,5).';
   a.q[0][0]='A(1 ; 2) و B(4 ; 6): مركبتا vec(AB) هما';a.q[3][0]='مركبتا vec(AB) هما (2 ; −1) و A(1 ; 1): إحداثيا B هما'}
  const b=g('4b5');if(b){b.s='علاقة شال: vec(AB) + vec(BC) = vec(AC).\nمركبتا المجموع هما مجموع المركبات: vec(u)(a ; b) + vec(v)(c ; d) = (a + c ; b + d).\nيتساوى شعاعان إذا كان لهما المركبتان نفسهما (نفس الاتجاه والمنحى والطول).\nالمساواة vec(AB) = vec(DC) تعني أن ABCD متوازي أضلاع.\nمثال: vec(AB)(2 ; 3) و vec(BC)(4 ; −1) ⇒ vec(AC)(6 ; 2).\nالانسحاب الذي شعاعه vec(u) يحوّل M إلى M′ حيث vec(MM′) = vec(u).';
   b.q[0][0]='vec(u)(2 ; 3) و vec(v)(−1 ; 4): مركبتا vec(u) + vec(v) هما';b.q[1][0]='حسب علاقة شال: vec(AB) + vec(BC) =';b.q[1][1]=['vec(AC)','vec(CA)','vec(AB)','vec(BA)'];
   b.q[2][1]=['vec(AB) = vec(DC)','vec(AB) = vec(CD)','vec(AB) = vec(BC)','vec(AB) = vec(AD)']}
 }catch(e){}
 /* 3) دروس مفصّلة: المقطع 4 (المعادلات والمتراجحات) والمقطع 5 (الدوال الخطية والتآلفية) */
 const M=t=>String(t).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])).replace(/\{\{([\s\S]*?)\}\}/g,'<span dir="ltr" style="unicode-bidi:isolate;display:inline-block">$1</span>');
 const D=[
 ['المقطع 4','المعادلات من الدرجة الأولى بمجهول واحد',
  'نحلّ المعادلة بنقل الحدود ذات المجهول إلى طرف والأعداد إلى الطرف الآخر، ثم نقسم على معامل المجهول.',
  ['خاصية 1: نضيف أو نطرح نفس العدد من الطرفين فنحصل على معادلة مكافئة.','خاصية 2: نضرب أو نقسم الطرفين على نفس العدد غير المعدوم.'],
  ['حلّ {{5x − 3 = 2x + 9}}: {{5x − 2x = 9 + 3}} ⇒ {{3x = 12}} ⇒ {{x = 4}}. التحقق: {{5×4 − 3 = 17}} و {{2×4 + 9 = 17}} ✓','حلّ {{3(x − 2) = x + 4}}: {{3x − 6 = x + 4}} ⇒ {{2x = 10}} ⇒ {{x = 5}}.']],
 ['المقطع 4','معادلة الجداء المعدوم والمعادلة x² = a',
  'إذا كان {{A × B = 0}} فإن {{A = 0}} أو {{B = 0}}. نحلّل أولاً حتى نحصل على جداء يساوي صفراً.',
  ['المعادلة {{x² = a}}: إذا كان {{a > 0}} فلها حلان {{√a}} و {{−√a}}، وإذا كان {{a = 0}} فالحل {{0}}، وإذا كان {{a < 0}} فلا حل لها.','نقل كل الحدود إلى طرف واحد قبل التحليل: {{x² = 5x}} ⇒ {{x² − 5x = 0}} ⇒ {{x(x − 5) = 0}}.'],
  ['حلّ {{(2x − 1)(x + 3) = 0}}: {{2x − 1 = 0}} أو {{x + 3 = 0}} ⇒ {{x = 1/2}} أو {{x = −3}}.','حلّ {{4x² − 9 = 0}}: {{(2x − 3)(2x + 3) = 0}} ⇒ {{x = 3/2}} أو {{x = −3/2}}.','حلّ {{x² = 49}}: {{x = 7}} أو {{x = −7}} ؛ و {{x² = −4}} لا حل لها.']],
 ['المقطع 4','المتراجحات من الدرجة الأولى وتمثيل حلولها',
  'نحلّ المتراجحة كالمعادلة، لكن عند الضرب أو القسمة على عدد سالب نغيّر اتجاه المتراجحة.',
  ['التمثيل على مستقيم مدرّج: نشطب الجزء المرفوض، والقوس مغلق عند ≤ و ≥ ومفتوح عند < و >.','كلمات تُترجم إلى متراجحة: «على الأكثر» ⇐ ≤ ، «على الأقل» ⇐ ≥ ، «يتجاوز» ⇐ >.'],
  ['حلّ {{2x + 5 ≤ 11}}: {{2x ≤ 6}} ⇒ {{x ≤ 3}} (القوس مغلق عند 3).','حلّ {{−3x + 1 > 7}}: {{−3x > 6}} ⇒ {{x < −2}} (انعكس الاتجاه لأننا قسمنا على −3).','مسألة: «ثمن قلم 35 DA، ومعي 300 DA. كم قلماً على الأكثر؟» {{35x ≤ 300}} ⇒ {{x ≤ 8,57}} ⇒ 8 أقلام.']],
 ['المقطع 4','جملة معادلتين من الدرجة الأولى بمجهولين',
  'نحلّ الجملة بالتعويض أو بالجمع (الحذف)، ثم نتحقق من الحل في المعادلتين.',
  ['التعويض: نعبّر عن مجهول بدلالة الآخر من إحدى المعادلتين ونعوّضه في الأخرى.','الجمع: نضرب المعادلتين في عددين مناسبين ثم نجمع أو نطرح لحذف أحد المجهولين.','في المسألة: نسمّي المجهولين، نكتب الجملة، نحلها، ثم نجيب بجملة مع الوحدة.'],
  ['{{x + y = 10}} و {{x − y = 4}}: بالجمع {{2x = 14}} ⇒ {{x = 7}} ثم {{y = 3}}.','«3 كتب ودفتران بـ 1150 DA، وكتاب و4 دفاتر بـ 750 DA»: {{3x + 2y = 1150}} و {{x + 4y = 750}} ⇒ {{x = 310}} و {{y = 110}}.']],
 ['المقطع 5','الدالة الخطية',
  'الدالة الخطية تكتب {{f(x) = ax}}، و{{a}} هو معامل الدالة. وهي تمثل وضعية تناسبية.',
  ['صورة العدد {{x}} هي {{f(x)}}، والسابقة هي العدد الذي صورته معلومة.','حساب المعامل من صورة واحدة: {{a = f(x) / x}}.','التمثيل البياني: مستقيم يشمل مبدأ المعلم.','النسب المئوية: زيادة {{t%}} ⇐ {{f(x) = (1 + t/100)x}} ، تخفيض {{t%}} ⇐ {{f(x) = (1 − t/100)x}}.'],
  ['{{f(x) = 3x}}: صورة 4 هي {{f(4) = 12}}، وسابقة 18 هي {{x = 18 ÷ 3 = 6}}.','f دالة خطية و {{f(5) = 20}} ⇒ {{a = 20 ÷ 5 = 4}} ⇒ {{f(x) = 4x}}.','تخفيض 20%: {{f(x) = 0,8x}} ، ثمن 2500 DA يصبح {{f(2500) = 2000 DA}}.']],
 ['المقطع 5','الدالة التآلفية',
  'الدالة التآلفية تكتب {{g(x) = ax + b}}. تمثيلها مستقيم يقطع محور التراتيب في النقطة {{(0 ; b)}}.',
  ['{{a}} معامل التوجيه و{{b}} الترتيب إلى المبدأ ({{b = g(0)}}).','تعيين الدالة من نقطتين: {{a = (g(x₂) − g(x₁)) / (x₂ − x₁)}} ثم نحسب {{b}} بالتعويض.','الدالة الخطية حالة خاصة من التآلفية ({{b = 0}}).'],
  ['g تآلفية و {{g(1) = 5}} و {{g(3) = 9}}: {{a = (9 − 5) ÷ (3 − 1) = 2}} ، ثم {{5 = 2×1 + b}} ⇒ {{b = 3}} ⇒ {{g(x) = 2x + 3}}.','سابقة 11 بالدالة g: {{2x + 3 = 11}} ⇒ {{x = 4}}.']],
 ['المقطع 5','التمثيل البياني وتطبيقاته (مقارنة عرضين)',
  'نرسم المستقيمين في نفس المعلم، ونقطة تقاطعهما تمثل حل المعادلة {{f(x) = g(x)}}.',
  ['يكفي حساب نقطتين لرسم مستقيم، وثالثة للتحقق.','نختار سلماً مناسباً على كل محور ونكتبه.','قراءة بيانية: نرسم خطوط إسقاط متقطعة لقراءة صورة أو سابقة.','العرض الأفضل هو الذي يكون مستقيمه أسفل الآخر (الثمن الأقل).'],
  ['عرض 1: {{f(x) = 200x}} ، عرض 2: {{g(x) = 100x + 1500}}. التقاطع: {{200x = 100x + 1500}} ⇒ {{x = 15}}. قبل 15 حصة العرض الأول أفضل، وبعدها العرض الثاني.']]
 ];
 const card=d=>`<div class="card kmd"><span class="tag">4AM · ${d[0]}</span><h3>${M(d[1])}</h3><div class="kh1">⚡ ${M(d[2])}</div><h4>الخواص والطريقة</h4><ul>${d[3].map(x=>'<li>'+M(x)+'</li>').join('')}</ul><h4>أمثلة محلولة</h4>${d[4].map(x=>'<div class="ex">'+M(x)+'</div>').join('')}</div>`;
 const rk=window.renderKh;
 if(rk&&!rk.__kmd){window.renderKh=function(){rk.apply(this,arguments);try{const lb=document.querySelector('[data-khl].p'),sb=document.querySelector('[data-khs].p');if(!lb||lb.dataset.khl!=='4AM')return;const ks=sb?+sb.dataset.khs:0;if(ks&&ks!==2)return;const box=document.getElementById('khbox');if(!box||box.querySelector('.kmd'))return;
   box.insertAdjacentHTML('afterbegin','<h3>📘 دروس مفصّلة: المقطع 4 (المعادلات والمتراجحات) والمقطع 5 (الدوال الخطية والتآلفية)</h3>'+D.map(card).join(''))}catch(e){}};window.renderKh.__kmd=1}
 /* 4) مثال الأشجار في أداة PGCD */
 const ga=document.getElementById('ga'),gb=document.getElementById('gb'),og=document.getElementById('oG');
 if(ga&&gb&&og&&!document.getElementById('kmTree')){
  og.insertAdjacentHTML('afterend','<div id="kmTree" class="kmtree" style="margin-top:.6rem"></div>');
  const tr=()=>{const a=Math.max(1,parseInt(ga.value)||1),b=Math.max(1,parseInt(gb.value)||1);let x=a,y=b;while(y){[x,y]=[y,x%y]}const g=x,P=2*(a+b),n=P/g,na=a/g,nb=b/g;
   let svg='';if(n<=80){const s=Math.min(260/a,150/b),W=a*s,H=b*s,ox=20,oy=20;svg=`<svg viewBox="0 0 ${W+70} ${H+40}" style="width:${Math.min(340,(W+70)*1.6)}px;max-width:100%;display:block;margin:.4rem auto;direction:ltr"><rect x="${ox}" y="${oy}" width="${W}" height="${H}" fill="#bbf7d0" fill-opacity=".35" stroke="#15803d" stroke-width="2"/>`;
    const pts=[];for(let i=0;i<na;i++)pts.push([ox+i*g*s,oy]);for(let j=0;j<nb;j++)pts.push([ox+W,oy+j*g*s]);for(let i=0;i<na;i++)pts.push([ox+W-i*g*s,oy+H]);for(let j=0;j<nb;j++)pts.push([ox,oy+H-j*g*s]);
    const fs=Math.max(9,Math.min(18,g*s*.8));pts.forEach(p=>svg+=`<text x="${p[0]}" y="${p[1]+fs*.35}" font-size="${fs}" text-anchor="middle">🌲</text>`);svg+=`<text x="${ox+W/2}" y="${oy-6}" font-size="11" text-anchor="middle" fill="currentColor">${a} m</text><text x="${ox+W+6}" y="${oy+H/2}" font-size="11" fill="currentColor">${b} m</text></svg>`}
   document.getElementById('kmTree').innerHTML=`<b>🌲 تطبيق: غرس أشجار حول قطعة أرض</b><div>نريد غرس أشجار على محيط أرض مستطيلة بعداها <b style="direction:ltr;unicode-bidi:isolate;display:inline-block">${a} m</b> و <b style="direction:ltr;unicode-bidi:isolate;display:inline-block">${b} m</b>، المسافة بين كل شجرتين متتاليتين ثابتة وأكبر ما يمكن، مع شجرة 🌲 في كل ركن.</div>
   <div>1) المسافة يجب أن تقسم الطول والعرض معاً (حتى تقع شجرة في كل ركن) ⇐ أكبر مسافة = <b style="direction:ltr;unicode-bidi:isolate;display:inline-block">PGCD(${a} ; ${b}) = ${g} m</b></div>
   <div>2) المحيط = <b style="direction:ltr;unicode-bidi:isolate;display:inline-block">2 × (${a} + ${b}) = ${P} m</b></div>
   <div>3) على محيط مغلق، عدد الأشجار = عدد المسافات: <b style="direction:ltr;unicode-bidi:isolate;display:inline-block">${P} ÷ ${g} = ${n}</b> شجرة.</div>
   <div class="mute">تحقق بالأضلاع: على كل طول ${na} مسافة، وعلى كل عرض ${nb} مسافة ⇐ <span style="direction:ltr;unicode-bidi:isolate;display:inline-block">2×${na} + 2×${nb} = ${n}</span>. الأركان الأربعة لا تُحسب مرتين. (لو كان الخط مفتوحاً كصفّ على طريق لكان العدد = عدد المسافات + 1.)</div>${svg}`};
  ga.addEventListener('input',tr);gb.addEventListener('input',tr);tr()}
})();

/* km-fb: أزرار تواصل دائرية عائمة أسفل الشاشة (واتساب + ماسنجر) */
(function(){
 var WA='https://wa.me/213675720586?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B3%D8%AA%D9%81%D8%B3%D8%B1%20%D8%B9%D9%86%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%20Karim%20Math',MS='https://m.me/ProfKarimMath140';
 function go(u,e){try{if(window.Android&&Android.openUrl){e.preventDefault();Android.openUrl(u);return}}catch(_){}
  try{e.preventDefault();var w=window.open(u,'_blank');if(!w)location.href=u}catch(_){location.href=u}}
 var IC={wa:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 20.5l1.3-4A8.5 8.5 0 1 1 8 19.6z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a5 5 0 0 1-2.8-2.8l.8-1-1-2z"/></svg>',
 ms:'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.3S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/></svg>'};
 function b(u,bg,ic,lab){var a=document.createElement('a');a.href=u;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',lab);a.title=lab;a.innerHTML=ic;
  a.style.cssText='width:54px;height:54px;border-radius:50%;background:'+bg+';display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.35)';
  a.addEventListener('click',function(e){go(u,e)});return a}
 function run(){
  var old=document.querySelector('.km-contact');if(old)old.remove();
  var f=document.getElementById('km-float');
  if(!f){f=document.createElement('div');f.id='km-float';
   f.style.cssText='position:fixed;left:14px;bottom:18px;z-index:9990;display:flex;flex-direction:column;gap:12px';
   f.appendChild(b(MS,'linear-gradient(135deg,#0084ff,#a033ff)',IC.ms,'ماسنجر'));
   f.appendChild(b(WA,'#16a34a',IC.wa,'واتساب'));document.body.appendChild(f)}
  var ov=document.getElementById('kmxOv');var open=!!(ov&&ov.classList.contains('on'));
  f.style.display=open?'none':'flex';
 }
 if(document.readyState!='loading')run();else document.addEventListener('DOMContentLoaded',run);
 setInterval(run,1000);
})();

/* km-rem: تذكير قبل انتهاء الاشتراك */
(function(){
 function d2(a,b){const p=n=>{const s=String(n);return Date.UTC(+s.slice(0,4),+s.slice(4,6)-1,+s.slice(6,8))};return Math.round((p(a)-p(b))/864e5)}
 function run(){try{const k=window.__km20;if(!k)return;const A=k.ACT,t=k.today();const hm=document.querySelector('.hm');if(!hm)return;
  let el=document.getElementById('km-rem');const left=A?d2(A,t):-1;
  if(!(A&&left>=0&&left<=7)){if(el)el.remove();return}
  if(!el){el=document.createElement('div');el.id='km-rem';hm.parentNode.insertBefore(el,hm)}
  el.style.cssText='margin:.6rem 0;padding:.8rem 1rem;border-radius:14px;background:#7c2d12;border:2px solid #fb923c;color:#fff;font-weight:800;display:flex;gap:.6rem;align-items:center;justify-content:space-between;flex-wrap:wrap';
  el.innerHTML='<span>⏰ '+(left===0?'ينتهي اشتراكك اليوم':'ينتهي اشتراكك بعد '+left+(left===1?' يوم':' أيام'))+'. جدّده حتى لا تُقفل الحلول والعروض.</span><button class="btn" onclick="kmAct()" style="background:#f5c34f;color:#0f172a;border:0;font-weight:800">🔑 تجديد الاشتراك</button>';
 }catch(e){}}
 if(document.readyState!='loading')run();else document.addEventListener('DOMContentLoaded',run);
 setInterval(run,5000);
})();

/* km-deact: إلغاء التفعيل من هذا الجهاز (للتجربة أو قبل تغيير الهاتف) */
(function(){
 function run(){const p=document.getElementById('lockpg');if(!p||document.getElementById('km-deact'))return;
  const k=window.__km20;if(!k||!k.ACT)return;
  const b=document.createElement('button');b.id='km-deact';b.className='btn';b.textContent='🔓 إلغاء التفعيل من هذا الجهاز';
  b.style.cssText='margin-top:.8rem;background:#7f1d1d;color:#fff;border:0;font-weight:800';
  b.onclick=function(){if(b.dataset.ok!=='1'){b.dataset.ok='1';b.textContent='⚠️ اضغط مرة أخرى للتأكيد (يمكنك إعادة التفعيل بنفس الكود)';return}
   try{for(let i=localStorage.length-1;i>=0;i--){const key=localStorage.key(i);if(/km_act/.test(key))localStorage.removeItem(key)}}catch(e){}
   try{for(let i=sessionStorage.length-1;i>=0;i--){const key=sessionStorage.key(i);if(/km_act/.test(key))sessionStorage.removeItem(key)}}catch(e){}
   location.reload()};
  (p.querySelector('.card')||p).appendChild(b)}
 setInterval(run,1500);
})();

/* km-dark-x: زر الإغلاق ظاهر في الوضع النهاري */
(function(){const s=document.createElement('style');s.textContent='#kmxOv .kmxb{background:#0b1222!important;color:#e2e8f0!important}#kmxOv .kmxb .btn,#kmxX{background:#1e293b!important;color:#f8fafc!important;border:1px solid #64748b!important;opacity:1!important;font-weight:800!important}';document.head.appendChild(s)})();

/* km-tease: معاينة جزئية مع سحابة للتمارين ومواضيع الأولمبياد (صور) لغير المشتركين */
(function(){
 let tab='home';
 function wrapGo(){const g=window.go;if(!g||g.__kmt)return;const w=function(t){tab=t;return g.apply(this,arguments)};w.__kmt=1;window.go=w}
 setInterval(wrapGo,800);wrapGo();
 const h=s=>{let x=0;for(let i=0;i<s.length;i++)x=(x*31+s.charCodeAt(i))>>>0;return x};
 const closed=()=>{try{const k=window.__km20;return k.closed()&&(k.cfg.locked||[]).includes('sol')}catch(e){return false}};
 const act=()=>{try{const d=document.getElementById('dlg');if(d&&d.open)d.close()}catch(e){};window.kmAct&&kmAct()};
 function cloud(msg){const c=document.createElement('div');c.className='km-cloud';
  c.style.cssText='margin:-40px 0 10px;position:relative;z-index:2;padding:18px;border:2px dashed #f59e0b;border-radius:16px;text-align:center;background:rgba(15,23,42,.92);color:#f8fafc';
  c.innerHTML='<div style="font-size:42px;line-height:1">☁️🔒</div><div style="font-weight:800;font-size:1.05rem;margin:6px 0">'+msg+'</div><button class="btn p" style="background:#f5c34f!important;color:#1e293b!important;border:0!important;font-weight:800">🔑 تفعيل الاشتراك</button>';
  c.querySelector('button').onclick=act;return c}
 function solBtn(){const b=document.createElement('button');b.className='btn km-cl-sol';b.textContent='🔒 الحلول (للمشتركين)';
  b.style.cssText='display:block;width:100%;margin:8px 0;background:#16a34a!important;color:#fff!important;border:0!important;font-weight:800';b.onclick=act;return b}
 function apply(){
  const body=document.getElementById('dbody');if(!body||!closed())return;
  if(!['practice','cads'].includes(tab))return;
  const imgs=[...body.querySelectorAll('img')].filter(im=>!im.closest('.km-cloud')&&(im.naturalWidth>300||im.width>200||!im.complete));
  if(!imgs.length||body.querySelector('.km-cloud,.km-free'))return;
  const free=!!window.__kmLastFree;
  if(free){const f=document.createElement('div');f.className='km-free';f.style.cssText='margin:6px 0;color:#22c55e;font-weight:800;text-align:center';f.textContent='🆓 نموذج مجاني';body.insertBefore(f,body.firstChild);
   if(tab==='cads')imgs[imgs.length-1].insertAdjacentElement('afterend',solBtn());return}
  imgs.forEach((im,k)=>{im.dataset.kmt='1';
   if(k===0){im.style.webkitMaskImage=im.style.maskImage='linear-gradient(#000 38%,transparent 62%)';im.style.maxHeight='none'}
   else im.style.display='none'});
  imgs[0].insertAdjacentElement('afterend',cloud(tab==='cads'?'بقية الموضوع والحلول للمشتركين':'بقية التمارين والحلول للمشتركين'));
  if(tab==='cads')body.querySelector('.km-cloud').insertAdjacentElement('afterend',solBtn());
 }
 window.addEventListener('click',e=>{const im=e.target&&e.target.closest&&e.target.closest('img[data-kmt="1"]');if(im&&closed()){e.stopImmediatePropagation();e.preventDefault();act()}},true);
 function obs(){const b=document.getElementById('dbody');if(!b||b.__kmo)return;b.__kmo=1;new MutationObserver(()=>setTimeout(apply,30)).observe(b,{childList:true,subtree:true})}
 setInterval(obs,1000);obs();
})();

/* km-free: نموذج مجاني واحد لكل مجموعة (فروض/اختبارات/تمارين/أولمبياد/أشبال) + كل مواضيع الشهادة مجانية */
(function(){
 const closed=()=>{try{return window.__km20.closed()}catch(e){return false}};
 function kind(t){if(/تجريبي|نموذج|مقترح/.test(t))return 'tj';if(/شهادة|بيام/.test(t))return 'bem';if(/الفصل الأول|الفصل 1|ف1/.test(t))return 't1';if(/الفصل الثاني|الفصل 2|ف2/.test(t))return 't2';if(/الفصل الثالث|الفصل 3|ف3/.test(t))return 't3';return 'x'}
 function mark(){
  ['exams','practice','cads','sits'].forEach(id=>{const s=document.getElementById(id);if(!s)return;
   const seen=new Map();
   s.querySelectorAll('.card').forEach(c=>{
    if(!c.querySelector('img,.thumbx,.thumbx2'))return;
    const h=(c.querySelector('h3')||c).textContent||'';
    const lv=(c.textContent.match(/[1-4]AM|BEM/)||[''])[0];const k=kind(h);
    if(id==='sits'){return}
    let key=(c.parentElement&&(c.parentElement.id||c.parentElement.className))+'|'+lv+'|'+k;
    let free=false;
    if(id==='exams'&&k==='bem')free=true;
    else if(!seen.has(key)){seen.set(key,1);free=true}
    if(free){if(c.dataset.kmfree!=='1'){c.dataset.kmfree='1';const b=document.createElement('span');b.className='km-fb-badge';b.textContent='🆓 مجاني';b.style.cssText='display:inline-block;margin:0 6px;padding:1px 9px;border-radius:10px;background:#0e7490;color:#fff;font-size:.8rem;font-weight:800';const hh=c.querySelector('h3');if(hh)hh.appendChild(b);
      c.querySelectorAll('[data-kml="1"]').forEach(x=>{x.textContent=x.textContent.replace('🔒 ','');x.dataset.kml=''});
      c.querySelectorAll('.kmpv-th').forEach(x=>x.classList.remove('kmpv-th'))}}
    else if(c.dataset.kmfree==='1'){c.dataset.kmfree='';const b=c.querySelector('.km-fb-badge');if(b)b.remove()}
   });
   s.querySelectorAll('.km-fb-badge').forEach(b=>{b.style.display=closed()?'':'none'});
  });
 }
 setInterval(mark,1500);
 window.addEventListener('pointerdown',e=>{const c=e.target&&e.target.closest&&e.target.closest('.card');window.__kmLastFree=!!(c&&c.dataset.kmfree==='1')},true);
})();
