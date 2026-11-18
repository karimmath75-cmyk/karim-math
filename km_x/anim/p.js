// ===== data for all presentations =====
const F=(a,b)=>`<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const SV=(inner,vb='0 0 320 220')=>`<svg class="sv" viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
const T=(x,y,t,c='#f1f5f9',s=14,a='middle')=>`<text direction="${/[\u0600-\u06FF]/.test(t)?'rtl':'ltr'}" x="${x}" y="${y}" fill="${c}" font-size="${s}" text-anchor="${a}" font-family="Cairo,sans-serif" font-weight="700">${t}</text>`;
const Y='#f5c34f',O='#fb923c',G='#4ade80',B='#60a5fa',R='#f87171',W='#e2e8f0',M='#64748b';
const BOX=t=>`<div class="box">${t}</div>`;const BL=t=>`<div class="box" dir="ltr">${t}</div>`;const MI=t=>`<bdi dir="ltr">${t}</bdi>`;
const P={};

// ---------- 1AM: محيط الدائرة ----------
(function(){
 const base=`<line x1="10" y1="170" x2="310" y2="170" stroke="${M}" stroke-width="2"/>`;
 const wheel=(cx,anim)=>`<g>${anim||''}<circle cx="${cx}" cy="145" r="25" fill="#1e3a52" stroke="${Y}" stroke-width="3"/><line x1="${cx}" y1="145" x2="${cx}" y2="170" stroke="${R}" stroke-width="3"/><circle cx="${cx}" cy="170" r="4" fill="${R}"/></g>`;
 const roll=`<g><animateTransform attributeName="transform" type="translate" from="0 0" to="157 0" dur="3s" fill="freeze"/><g><animateTransform attributeName="transform" type="rotate" from="0 40 145" to="360 40 145" dur="3s" fill="freeze"/><circle cx="40" cy="145" r="25" fill="#1e3a52" stroke="${Y}" stroke-width="3"/><line x1="40" y1="145" x2="40" y2="170" stroke="${R}" stroke-width="3"/><circle cx="40" cy="170" r="4" fill="${R}"/></g></g>`;
 const trail=`<line x1="40" y1="170" x2="197" y2="170" stroke="${R}" stroke-width="4" stroke-dasharray="157" stroke-dashoffset="157"><animate attributeName="stroke-dashoffset" from="157" to="0" dur="3s" fill="freeze"/></line>`;
 const ds=[0,1,2].map(k=>`<g class="fd" style="animation-delay:${k*.5}s"><line x1="${40+k*50}" y1="190" x2="${90+k*50}" y2="190" stroke="${[B,G,O][k]}" stroke-width="5"/>${T(65+k*50,210,'d',[B,G,O][k],13)}</g>`).join('')+`<g class="fd" style="animation-delay:1.6s"><line x1="190" y1="190" x2="197" y2="190" stroke="${Y}" stroke-width="5"/>${T(230,210,'+ 0,14 d',Y,13)}</g>`;
 P.circle={lv:1,icon:'⭕',name:'محيط الدائرة والعدد π',sub:'الأولى متوسط · المقطع الهندسي',S:[
  {tag:'الوضعية',title:'عجلة الدراجة',vis:[SV(base+wheel(160)+`<line x1="135" y1="145" x2="185" y2="145" stroke="${B}" stroke-width="2" stroke-dasharray="4 3"/>`+T(160,108,'d = 50 cm',B,13))],lines:['قطر عجلة دراجة 50 cm. ما المسافة التي تقطعها العجلة في دورة واحدة؟','لنكتشف ذلك بـ«فرد» محيط العجلة على الأرض.']},
  {tag:'التجربة',title:'ندحرج العجلة دورة كاملة',vis:[SV(base+trail+roll),SV(base+`<line x1="40" y1="170" x2="197" y2="170" stroke="${R}" stroke-width="4"/>`+wheel(197)+ds)],lines:['النقطة الحمراء تلمس الأرض في البداية، ثم تعود إليها بعد دورة كاملة.','المسافة المقطوعة = محيط العجلة. نقارنها بالقطر: تحتوي على القطر <b>3 مرات وقليلًا</b>.']},
  {tag:'القاعدة',title:'العدد π',vis:[BOX('محيط الدائرة ÷ القطر '+MI('= <b>π ≈ 3,14</b>')),BL('<b>P = π × d = 2 × π × r</b>')],lines:['مهما كانت الدائرة، حاصل قسمة محيطها على قطرها ثابت نرمز له بـ π ويساوي تقريبًا 3,14.','إذن: محيط الدائرة = π × القطر = 2 × π × نصف القطر.']},
  {tag:'التطبيق',title:'المسافة في دورة',vis:[BL('P ≈ 3,14 × 50 = <b>157 cm</b>'),BL('100 × 157 = 15700 cm = <b>157 m</b>')],lines:['في دورة واحدة تقطع العجلة 157 cm تقريبًا.','وفي 100 دورة تقطع 157 m.'],locked:true}
 ]};
})();

// ---------- 1AM: القسمة الإقليدية ----------
(function(){
 const boxes=(n,lab)=>{let h='';for(let k=0;k<12;k++){const x=12+(k%6)*50,y=20+Math.floor(k/6)*70;h+=`<rect x="${x}" y="${y}" width="44" height="56" rx="8" fill="#1e3a52" stroke="#2b5878"/>${T(x+22,y+18,'ق'+(k+1),M,11)}`;if(n)h+=`<g class="fd" style="animation-delay:${k*.12}s">${T(x+22,y+44,n,Y,18)}</g>`}return h};
 const rest=`<g class="fd" style="animation-delay:1.6s">${[0,1,2,3,4].map(k=>`<circle cx="${110+k*25}" cy="185" r="9" fill="${R}"/>`).join('')}${T(250,190,'الباقي 5',R,14)}</g>`;
 P.div={lv:1,icon:'📚',name:'القسمة الإقليدية: توزيع الكراريس',sub:'الأولى متوسط · الأعداد والحساب',S:[
  {tag:'الوضعية',title:'245 كراسًا على 12 قسمًا',vis:[SV(boxes(0))],lines:['نريد توزيع 245 كراسًا بالتساوي على 12 قسمًا.','كم يأخذ كل قسم؟ وكم يبقى؟']},
  {tag:'التوزيع',title:'كل قسم يأخذ 20',vis:[SV(boxes(20)),SV(boxes(20)+rest)],lines:['نجرّب 20 لكل قسم: 12 × 20 = 240.','يبقى 245 − 240 = 5 كراريس، و 5 &lt; 12 فلا يمكن إعطاء كراس آخر لكل قسم.']},
  {tag:'القاعدة',title:'المساواة الإقليدية',vis:[BL('245 = 12 × <b>20</b> + <b style="color:#f87171">5</b>'),BOX('المقسوم = القاسم × الحاصل + الباقي &nbsp;&nbsp; و الباقي &lt; القاسم')],lines:['الحاصل 20 والباقي 5.','شرط مهم: الباقي أصغر من القاسم دائمًا.']},
  {tag:'التطبيق',title:'لكي يأخذ كل قسم 21',vis:[BL('12 × 21 = 252'),BL('252 − 245 = <b>7</b>')],lines:['نحتاج 252 كراسًا.','ينقص 7 كراريس.'],locked:true}
 ]};
})();

// ---------- 1AM: التناظر المحوري ----------
(function(){
 const ax=`<line x1="160" y1="10" x2="160" y2="210" stroke="${Y}" stroke-width="2.5" stroke-dasharray="8 5"/>${T(168,22,'(d)',Y,13,'start')}`;
 const tri='60,50 120,90 80,170', img='260,50 200,90 240,170';
 const t0=`<polygon points="${tri}" fill="rgba(96,165,250,.35)" stroke="${B}" stroke-width="2.5"/>`+T(52,45,'A',W)+T(126,88,'B',W,14,'start')+T(72,186,'C',W);
 const perp=`<line x1="60" y1="50" x2="260" y2="50" stroke="${G}" stroke-width="2" stroke-dasharray="5 4" class="dr"/><path d="M160 50 v8 h-8" fill="none" stroke="${G}"/>`+T(110,44,'||',G,14)+T(210,44,'||',G,14);
 const fold=`<polygon points="${tri}" fill="rgba(74,222,128,.35)" stroke="${G}" stroke-width="2.5"><animate attributeName="points" from="${tri}" to="${img}" dur="1.8s" fill="freeze"/></polygon>`;
 const lab=`<g class="fd" style="animation-delay:1.8s">`+T(268,45,"A'",G)+T(194,88,"B'",G,14,'end')+T(248,186,"C'",G)+`</g>`;
 P.sym={lv:1,icon:'🦋',name:'التناظر المحوري: الطيّ',sub:'الأولى متوسط · التحويلات',S:[
  {tag:'الوضعية',title:'نظير مثلث',vis:[SV(ax+t0)],lines:['نريد إنشاء نظير المثلث ABC بالنسبة إلى المستقيم (d).','تخيّل أننا نطوي الورقة على (d).']},
  {tag:'نقطة',title:'نظيرة النقطة A',vis:[SV(ax+t0+perp+`<circle cx="260" cy="50" r="5" fill="${G}"/>`+T(268,45,"A'",G))],lines:['نرسم من A عمودًا على (d)، ونأخذ عليه A\' حيث المسافتان متساويتان.','إذن (d) هو <b>محور القطعة [AA\']</b>.']},
  {tag:'الطيّ',title:'نطوي الورقة',vis:[SV(ax+t0+fold+lab)],lines:['كل نقطة تنطبق على نظيرتها عند الطيّ.','المثلث A\'B\'C\' هو نظير ABC.']},
  {tag:'الخواص',title:'ماذا يحفظ التناظر؟',vis:[BL("A'B' = AB &nbsp; B'C' = BC &nbsp; A'C' = AC"),BOX('الأطوال، أقياس الزوايا، المساحات… محفوظة')],lines:['التناظر المحوري يحفظ الأطوال وأقياس الزوايا.','الشكل ونظيره متقايسان (ينطبقان).'],locked:true}
 ]};
})();

// ---------- 2AM: مجموع زوايا المثلث ----------
(function(){
 const t=`<polygon points="160,40 60,170 270,170" fill="#13304a" stroke="${W}" stroke-width="2.5"/>`+T(160,30,'A',W)+T(48,182,'B',W)+T(282,182,'C',W);
 const wB=`<path d="M60,170 L90,170 A30,30 0 0 0 78.3,146.2 Z" fill="${O}" class="fd"/>`;
 const wC=`<path d="M270,170 L240,170 A30,30 0 0 1 250.6,147.1 Z" fill="${G}" class="fd"/>`;
 const wA=`<path d="M160,40 L141.7,63.8 A30,30 0 0 0 179.4,62.9 Z" fill="${B}" class="fd"/>`;
 const par=`<line x1="20" y1="40" x2="300" y2="40" stroke="${Y}" stroke-width="2.5" class="dr"/>`+T(296,32,'(d) // (BC)',Y,12,'end');
 const cB=`<path d="M160,40 L130,40 A30,30 0 0 0 141.7,63.8 Z" fill="${O}" class="fd" style="animation-delay:.6s"/>`;
 const cC=`<path d="M160,40 L179.4,62.9 A30,30 0 0 0 190,40 Z" fill="${G}" class="fd" style="animation-delay:.6s"/>`;
 P.tri={lv:2,icon:'🔺',name:'مجموع أقياس زوايا المثلث = 180°',sub:'الثانية متوسط · الزوايا والمتوازيات',S:[
  {tag:'السؤال',title:'كم مجموع زوايا مثلث؟',vis:[SV(t+wA+wB+wC)],lines:['لون كل زاوية من زوايا المثلث ABC بلون.','هل مجموعها ثابت مهما كان المثلث؟']},
  {tag:'الإنشاء',title:'نرسم موازيًا لـ (BC) يمر بـ A',vis:[SV(t+wA+wB+wC+par)],lines:['نرسم المستقيم (d) المار بـ A والموازي لـ (BC).']},
  {tag:'المتبادلتان',title:'نقل الزاويتين B و C إلى A',vis:[SV(t+wA+wB+wC+par+cB),SV(t+wA+wB+wC+par+cB+cC)],lines:['الزاوية البرتقالية عند A تبادل داخليًا الزاوية B بالنسبة إلى القاطع (AB) ⇐ متقايستان.','وكذلك الزاوية الخضراء عند A تقايس الزاوية C (القاطع (AC)).']},
  {tag:'النتيجة',title:'زاوية مستقيمة',vis:[SV(t+wA+wB+wC+par+cB+cC+T(160,15,'180°',Y,16)),BL('∠A + ∠B + ∠C = <b>180°</b>')],lines:['الزوايا الثلاث عند A متجاورة وتشكل زاوية مستقيمة قيسها 180°.','<b>مجموع أقياس زوايا أي مثلث = 180°</b>.'],locked:true}
 ]};
})();

// ---------- 2AM: جمع الأعداد النسبية ----------
(function(){
 const X=n=>160+14*n;
 let ax=`<line x1="12" y1="120" x2="308" y2="120" stroke="${W}" stroke-width="2"/>`;
 for(let n=-10;n<=10;n++)ax+=`<line x1="${X(n)}" y1="${n%5?115:111}" x2="${X(n)}" y2="${n%5?125:129}" stroke="${M}" stroke-width="${n?1.5:3}"/>`+(n%5===0?T(X(n),146,n>0?'+'+n:String(n).replace('-','−'),n?W:Y,12):'');
 const arc=(a,b,c,d=0)=>{const x1=X(a),x2=X(b),h=Math.abs(x2-x1)/2+10,up=c===G;return `<path d="M${x1} 120 Q ${(x1+x2)/2} ${up?120-h:120-h} ${x2} 120" fill="none" stroke="${c}" stroke-width="3.5" class="dr" style="animation-delay:${d}s"/><circle cx="${x2}" cy="120" r="5" fill="${c}" class="fd" style="animation-delay:${d+.9}s"/>`};
 P.rel={lv:2,icon:'↔️',name:'جمع الأعداد النسبية على المستقيم المدرّج',sub:'الثانية متوسط · الأعداد النسبية',S:[
  {tag:'الفكرة',title:'العدد = تنقّل',vis:[SV(ax)],lines:['العدد الموجب: تنقّل نحو اليمين. العدد السالب: تنقّل نحو اليسار.','ننطلق دائمًا من الصفر.']},
  {tag:'مثال 1',title:'(+3) + (−7)',vis:[SV(ax+arc(0,3,G)),SV(ax+arc(0,3,G)+arc(3,-4,R,.2)+T(X(-4),100,'−4',R,15))],lines:['نتقدّم 3 خطوات نحو اليمين.','ثم نرجع 7 خطوات نحو اليسار فنصل إلى −4: (+3) + (−7) = −4.']},
  {tag:'مثال 2',title:'(−2) + (−5)',vis:[SV(ax+arc(0,-2,R)+arc(-2,-7,R,.9)+T(X(-7),100,'−7',R,15))],lines:['نتنقّل خطوتين نحو اليسار ثم 5 أخرى نحو اليسار: النتيجة −7.']},
  {tag:'القاعدة',title:'كيف نجمع بسرعة؟',vis:[BOX('نفس الإشارة: نجمع المسافتين ونحتفظ بالإشارة'),BOX('إشارتان مختلفتان: نطرح ونأخذ إشارة الأبعد عن الصفر')],lines:['(−2) + (−5) = −(2 + 5) = −7','(+3) + (−7) = −(7 − 3) = −4'],locked:true}
 ]};
})();

// ---------- 2AM: حجم الموشور ----------
(function(){
 const base=(dy,c,o)=>`<polygon points="70,${180-dy} 190,${180-dy} 110,${150-dy}" fill="${c}" fill-opacity="${o}" stroke="${W}" stroke-width="1.5"/>`;
 let lay='';for(let k=0;k<15;k++)lay+=`<g class="fd" style="animation-delay:${k*.15}s">${base(k*9,k%2?'#60a5fa':'#3b82f6',.8)}</g>`;
 const h=`<line x1="210" y1="180" x2="210" y2="45" stroke="${Y}" stroke-width="2" class="fd" style="animation-delay:2.3s"/>`+`<g class="fd" style="animation-delay:2.3s">${T(240,115,'h = 15',Y,14)}</g>`;
 P.prism={lv:2,icon:'📦',name:'حجم الموشور القائم: طبقات فوق القاعدة',sub:'الثانية متوسط · الحجوم',S:[
  {tag:'الوضعية',title:'علبة موشورية',vis:[SV(base(0,'#3b82f6',.9)+T(130,205,'مساحة القاعدة = 24 cm²',Y,14))],lines:['قاعدة العلبة مثلث قائم ضلعاه 6 cm و 8 cm، وارتفاعها 15 cm.','مساحة القاعدة = 6 × 8 ÷ 2 = 24 cm².']},
  {tag:'التكديس',title:'نكدّس طبقات سمكها 1 cm',vis:[SV(lay+h)],lines:['كل طبقة سمكها 1 cm حجمها 24 cm³.','نحتاج 15 طبقة حتى نصل إلى الارتفاع 15 cm.']},
  {tag:'القاعدة',title:'حجم الموشور',vis:[BOX('<b>الحجم = مساحة القاعدة × الارتفاع</b>'),BL('V = 24 × 15 = <b>360 cm³</b>')],lines:['الحجم = عدد الطبقات × حجم الطبقة = مساحة القاعدة × الارتفاع.','نفس القاعدة للأسطوانة: V = π r² × h.'],locked:true}
 ]};
})();

// ---------- 3AM: فيثاغورس ----------
(function(){
 const grid=(x,y,n,u,c)=>{let h=`<rect x="${x}" y="${y}" width="${n*u}" height="${n*u}" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>`;for(let k=1;k<n;k++)h+=`<path d="M${x+k*u} ${y}v${n*u}M${x} ${y+k*u}h${n*u}" stroke="${c}" stroke-opacity=".6"/>`;return h};
 const tri=`<polygon points="120,150 192,150 120,96" fill="#13304a" stroke="${W}" stroke-width="2.5"/><path d="M120 140h10v10" fill="none" stroke="${W}"/>`+T(112,165,'C',W)+T(200,165,'A',W)+T(110,92,'B',W);
 const sa=`<g class="fd">${grid(66,96,3,18,O)}${T(93,130,'9',W,18)}</g>`;
 const sb=`<g class="fd">${grid(120,150,4,18,G)}${T(156,192,'16',W,18)}</g>`;
 let hc='';for(let k=1;k<5;k++){const t=k/5;hc+=`<path d="M${120+72*t} ${96+54*t} l54 -72 M${120+54*t} ${96-72*t} l72 54" stroke="${B}" stroke-opacity=".6"/>`}
 const sc=`<g class="fd"><polygon points="120,96 192,150 246,78 174,24" fill="${B}" fill-opacity=".35" stroke="${B}" stroke-width="2"/>${hc}${T(183,92,'25',W,18)}</g>`;
 P.pyth={lv:3,icon:'📐',name:'خاصية فيثاغورس بالمربعات',sub:'الثالثة متوسط · المثلث القائم',S:[
  {tag:'الوضعية',title:'مثلث قائم أضلاعه 3 و 4 و 5',vis:[SV(tri+T(100,128,'3',O,14)+T(156,168,'4',G,14)+T(162,115,'5',B,14))],lines:['ABC مثلث قائم في C حيث BC = 3 و AC = 4 و AB = 5.','نبني مربعًا على كل ضلع ونعدّ الوحدات.']},
  {tag:'المربعات',title:'نعدّ المربعات الصغيرة',vis:[SV(tri+sa),SV(tri+sa+sb),SV(tri+sa+sb+sc)],lines:['المربع على BC يحتوي 3 × 3 = 9 وحدات.','المربع على AC يحتوي 4 × 4 = 16 وحدة.','المربع على الوتر AB يحتوي 5 × 5 = 25 وحدة!']},
  {tag:'الاكتشاف',title:'9 + 16 = 25',vis:[BL('BC² + AC² = AB²'),BOX('<b>مربع الوتر = مجموع مربعي الضلعين القائمين</b>')],lines:['في كل مثلث قائم: مربع طول الوتر يساوي مجموع مربعي طولي الضلعين الآخرين.','والعكس: إذا تحققت المساواة فالمثلث قائم.']},
  {tag:'التطبيق',title:'السلّم والجدار',vis:[BL('h² = 5² − 1,4² = 25 − 1,96 = 23,04'),BL('h = √23,04 = <b>4,8 m</b>')],lines:['سلّم طوله 5 m تبعد قاعدته 1,4 m عن الجدار.','يلامس الجدار على ارتفاع 4,8 m.'],locked:true}
 ]};
})();

// ---------- 3AM: الدائرة المحيطة بمثلث قائم ----------
(function(){
 const cx=160,cy=120,r=80;const pts=[];for(let a=30;a<=150;a+=10)pts.push([cx+r*Math.cos(a*Math.PI/180),cy-r*Math.sin(a*Math.PI/180)]);
 const fw=pts.concat(pts.slice(0,-1).reverse());const vx=fw.map(p=>p[0].toFixed(1)).join(';'),vy=fw.map(p=>p[1].toFixed(1)).join(';');
 const an=a=>`<animate attributeName="${a}" values="${a.startsWith('x')||a==='cx'?vx:vy}" dur="6s" repeatCount="indefinite"/>`;
 const c0=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${M}" stroke-width="2"/><line x1="80" y1="120" x2="240" y2="120" stroke="${W}" stroke-width="2.5"/><circle cx="160" cy="120" r="4" fill="${Y}"/>`+T(160,140,'O',Y)+T(70,125,'B',W)+T(250,125,'C',W);
 const A0=[pts[4][0],pts[4][1]];
 const st=`<line x1="80" y1="120" x2="${A0[0]}" y2="${A0[1]}" stroke="${B}" stroke-width="2.5"/><line x1="240" y1="120" x2="${A0[0]}" y2="${A0[1]}" stroke="${B}" stroke-width="2.5"/><circle cx="${A0[0]}" cy="${A0[1]}" r="5" fill="${B}"/>`+T(A0[0]+4,A0[1]-8,'A',B);
 const med=`<line x1="160" y1="120" x2="${A0[0]}" y2="${A0[1]}" stroke="${G}" stroke-width="3" class="dr"/>`;
 const mv=`<line x1="80" y1="120" x2="0" y2="0" stroke="${B}" stroke-width="2.5">${an('x2')}${an('y2')}</line><line x1="240" y1="120" x2="0" y2="0" stroke="${B}" stroke-width="2.5">${an('x2')}${an('y2')}</line><line x1="160" y1="120" x2="0" y2="0" stroke="${G}" stroke-width="3">${an('x2')}${an('y2')}</line><circle r="6" fill="${B}" cx="0" cy="0">${an('cx')}${an('cy')}</circle>`;
 P.circ={lv:3,icon:'🟡',name:'الدائرة المحيطة بمثلث قائم',sub:'الثالثة متوسط · المثلث القائم والدائرة',S:[
  {tag:'الملاحظة',title:'مثلث قائم ودائرة',vis:[SV(c0+st)],lines:['ABC مثلث قائم في A. أين يقع مركز الدائرة المحيطة به؟']},
  {tag:'الخاصية',title:'المركز = منتصف الوتر',vis:[SV(c0+st+med)],lines:['مركز الدائرة المحيطة بمثلث قائم هو منتصف الوتر [BC].','إذن OA = OB = OC = نصف القطر.']},
  {tag:'الحركة',title:'حرّك A على الدائرة',vis:[SV(c0+mv)],lines:['مهما تحركت A على الدائرة (A ≠ B و A ≠ C) يبقى المثلث قائمًا في A.','والقطعة الخضراء [OA] (المتوسط) طولها ثابت = BC ÷ 2.']},
  {tag:'الخلاصة',title:'المتوسط المتعلق بالوتر',vis:[BOX(MI('ABC')+' قائم في '+MI('A')+' ⟺ '+MI('AO = <span class="fr"><span>BC</span><span>2</span></span>')),BL('BC = 10 cm ⇒ AO = <b>5 cm</b>')],lines:['في مثلث قائم، طول المتوسط المتعلق بالوتر يساوي نصف طول الوتر.','والعكس: إذا كان طول متوسط يساوي نصف الضلع الموافق فالمثلث قائم.'],locked:true}
 ]};
})();

// ---------- 3AM: الانسحاب ----------
(function(){
 let g='';for(let x=20;x<=300;x+=20)g+=`<line x1="${x}" y1="10" x2="${x}" y2="210" stroke="#1e293b"/>`;for(let y=10;y<=210;y+=20)g+=`<line x1="20" y1="${y}" x2="300" y2="${y}" stroke="#1e293b"/>`;
 const tri='40,170 100,170 60,110';
 const t0=`<polygon points="${tri}" fill="rgba(96,165,250,.4)" stroke="${B}" stroke-width="2.5"/>`+T(34,186,'A',W)+T(106,186,'B',W)+T(52,104,'C',W);
 const vec=`<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${Y}"/></marker></defs><line x1="40" y1="170" x2="180" y2="110" stroke="${Y}" stroke-width="3" marker-end="url(#ar)" class="dr"/>`;
 const slide=`<polygon points="${tri}" fill="rgba(74,222,128,.4)" stroke="${G}" stroke-width="2.5"><animateTransform attributeName="transform" type="translate" from="0 0" to="140 -60" dur="2.2s" fill="freeze"/></polygon>`;
 const lab=`<g class="fd" style="animation-delay:2.2s">${T(180,128,"A'",G)}${T(246,128,"B'",G)}${T(196,44,"C'",G)}<line x1="100" y1="170" x2="240" y2="110" stroke="${Y}" stroke-dasharray="5 4" stroke-width="2"/><line x1="60" y1="110" x2="200" y2="50" stroke="${Y}" stroke-dasharray="5 4" stroke-width="2"/></g>`;
 P.trans={lv:3,icon:'➡️',name:'الانسحاب: انزلاق بدون دوران',sub:'الثالثة متوسط · التحويلات',S:[
  {tag:'الوضعية',title:'ننقل المثلث',vis:[SV(g+t0)],lines:['نريد نقل المثلث ABC بحيث تذهب A إلى A\' دون تدويره.']},
  {tag:'الاتجاه والمسافة',title:'السهم يحدد الانسحاب',vis:[SV(g+t0+vec)],lines:['السهم من A إلى A\' يحدد: <b>الاتجاه، المنحى، والطول</b>.','هنا: 7 مربعات نحو اليمين و 3 نحو الأعلى.']},
  {tag:'الانزلاق',title:'كل النقط تتحرك بنفس السهم',vis:[SV(g+t0+vec+slide+lab)],lines:['كل نقطة تنتقل بنفس الاتجاه ونفس المسافة.','AA\'B\'B و AA\'C\'C متوازيا أضلاع.']},
  {tag:'الخواص',title:'ماذا يحفظ الانسحاب؟',vis:[BOX('الأطوال · الزوايا · التوازي · المساحات'),BL("A(1 ; 2) ⟶ A'(1+7 ; 2+3) = A'(8 ; 5)")],lines:['الانسحاب يحفظ الأطوال وأقياس الزوايا والاستقامية والتوازي.','في المعلم: نضيف نفس العددين لإحداثيي كل نقطة.'],locked:true}
 ]};
})();

// ---------- 4AM: PGCD بالمربعات ----------
(function(){
 const R0=`<rect x="34" y="10" width="252" height="180" fill="#1e3a52" stroke="${W}" stroke-width="2"/>`+T(160,210,'84',W,13)+T(20,104,'60',W,13);
 const s1=`<rect x="34" y="10" width="180" height="180" fill="${O}" fill-opacity=".55" stroke="${O}" stroke-width="2" class="fd"/>`+`<g class="fd">${T(124,105,'60 × 60',W,15)}</g>`;
 const s2=[0,1].map(k=>`<rect x="214" y="${10+k*72}" width="72" height="72" fill="${G}" fill-opacity=".55" stroke="${G}" stroke-width="2" class="fd" style="animation-delay:${k*.4}s"/>`).join('')+`<g class="fd" style="animation-delay:.8s">${T(250,50,'24',W,13)}${T(250,122,'24',W,13)}</g>`;
 const s3=[0,1].map(k=>`<rect x="${214+k*36}" y="154" width="36" height="36" fill="${B}" fill-opacity=".75" stroke="${B}" stroke-width="2" class="fd" style="animation-delay:${k*.4}s"/>`).join('')+`<g class="fd" style="animation-delay:.8s">${T(232,177,'12',W,11)}${T(268,177,'12',W,11)}</g>`;
 let gr='';for(let k=1;k<7;k++)gr+=`<line x1="${34+k*36}" y1="10" x2="${34+k*36}" y2="190" stroke="${Y}" class="dr" style="animation-delay:${k*.1}s"/>`;for(let k=1;k<5;k++)gr+=`<line x1="34" y1="${10+k*36}" x2="286" y2="${10+k*36}" stroke="${Y}" class="dr" style="animation-delay:${.7+k*.1}s"/>`;
 P.pgcd={lv:4,icon:'🟧',name:'PGCD بالمربعات: خوارزمية إقليدس مرسومة',sub:'الرابعة متوسط · الأعداد الطبيعية',S:[
  {tag:'الوضعية',title:'أكبر مربع يبلّط المستطيل',vis:[SV(R0)],lines:['نريد تبليط مستطيل 84 × 60 بمربعات متماثلة أكبر ما يمكن.','الفكرة: نقتطع أكبر مربع ممكن، ثم نكرر على الباقي.']},
  {tag:'الخطوة 1',title:'84 = 60 × 1 + 24',vis:[SV(R0+s1)],lines:['نقتطع مربعًا ضلعه 60، فيبقى مستطيل 24 × 60.']},
  {tag:'الخطوة 2',title:'60 = 24 × 2 + 12',vis:[SV(R0+s1+s2)],lines:['في المستطيل 24 × 60 نقتطع مربعين ضلعهما 24، فيبقى 24 × 12.']},
  {tag:'الخطوة 3',title:'24 = 12 × 2 + 0',vis:[SV(R0+s1+s2+s3)],lines:['نقتطع مربعين ضلعهما 12 ولا يبقى شيء: الباقي 0.','آخر باقٍ غير معدوم هو <b>12 = PGCD(84 ; 60)</b>.']},
  {tag:'النتيجة',title:'التبليط بمربعات 12',vis:[SV(R0+gr),BOX(MI('84 ÷ 12 = 7')+' ، '+MI('60 ÷ 12 = 5')+' ⇐ '+MI('7 × 5 = <b>35</b>')+' مربعًا')],lines:['المربع 12 × 12 يبلّط كل المستطيل.','عدد المربعات 35.'],locked:true}
 ]};
})();

// ---------- 4AM: طالس ----------
(function(){
 const gnd=`<line x1="10" y1="180" x2="310" y2="180" stroke="${M}" stroke-width="2"/>`;
 const pole=`<line x1="81" y1="180" x2="81" y2="152" stroke="${B}" stroke-width="5"/>`+T(92,170,'2 m',B,12,'start');
 const palm=`<line x1="186" y1="180" x2="186" y2="12" stroke="${G}" stroke-width="6"/><path d="M186 12 q-20 -4 -34 10 M186 12 q20 -4 34 10 M186 12 q-14 6 -22 22 M186 12 q14 6 22 22" stroke="${G}" stroke-width="3" fill="none"/>`+T(196,100,'h ؟',G,14,'start');
 const sun=`<circle cx="300" cy="-10" r="0"/>`;
 const ray=`<line x1="60" y1="180" x2="196" y2="-1" stroke="${Y}" stroke-width="2" stroke-dasharray="6 4" class="dr"/>`;
 const sh=`<line x1="60" y1="184" x2="81" y2="184" stroke="${R}" stroke-width="4" class="fd"/><line x1="60" y1="192" x2="186" y2="192" stroke="${O}" stroke-width="4" class="fd" style="animation-delay:.4s"/>`+`<g class="fd" style="animation-delay:.6s">${T(70,208,'1,5',R,11)}${T(140,208,'9 m',O,12)}</g>`;
 P.thales={lv:4,icon:'🌴',name:'خاصية طالس: ظل النخلة',sub:'الرابعة متوسط · خاصية طالس',S:[
  {tag:'الوضعية',title:'كيف نقيس النخلة دون تسلّقها؟',vis:[SV(gnd+pole+palm)],lines:['عمود طوله 2 m ظله 1,5 m، وفي نفس اللحظة ظل النخلة 9 m.']},
  {tag:'الأشعة',title:'أشعة الشمس متوازية',vis:[SV(gnd+pole+palm+ray+sh)],lines:['الشعاع الذي يمر برأس النخلة يمر برأس العمود وينتهي في طرف الظلين.','العمود والنخلة متوازيان (عموديان على الأرض) ⇐ وضعية طالس.']},
  {tag:'طالس',title:'تناسب الأطوال',vis:[BL(`${F('h','2')} = ${F('9','1,5')}`),BL('h = 2 × 6 = <b>12 m</b>')],lines:['حسب خاصية طالس: نسبة الارتفاعين = نسبة الظلين.','<b>طول النخلة 12 m</b>.'],locked:true}
 ]};
})();

// ---------- 4AM: الدالة التآلفية ----------
(function(){
 const X=x=>40+12*x,Yv=y=>180-.16*y;
 let ax=`<line x1="40" y1="180" x2="300" y2="180" stroke="${W}"/><line x1="40" y1="180" x2="40" y2="10" stroke="${W}"/>`;
 for(let x=5;x<=20;x+=5)ax+=`<line x1="${X(x)}" y1="180" x2="${X(x)}" y2="184" stroke="${W}"/>`+T(X(x),198,x,W,11);
 for(let y=200;y<=1000;y+=200)ax+=`<line x1="${X(0)}" y1="${Yv(y)}" x2="300" y2="${Yv(y)}" stroke="#1e293b"/>`+T(34,Yv(y)+4,y,W,10,'end');
 ax+=T(300,212,'x (km)',M,11,'end');
 const pts=[[0,150],[5,350],[10,550],[20,950]];
 const dots=pts.map((p,k)=>`<g class="fd" style="animation-delay:${k*.4}s"><circle cx="${X(p[0])}" cy="${Yv(p[1])}" r="5" fill="${Y}"/>${T(X(p[0])+6,Yv(p[1])-8,p[1],Y,11,'start')}</g>`).join('');
 const line=`<line x1="${X(0)}" y1="${Yv(150)}" x2="${X(21.5)}" y2="${Yv(1010)}" stroke="${G}" stroke-width="3" class="dr"/>`;
 const read=`<line x1="40" y1="${Yv(1000)}" x2="${X(21.25)}" y2="${Yv(1000)}" stroke="${R}" stroke-dasharray="5 4" class="dr"/><line x1="${X(21.25)}" y1="${Yv(1000)}" x2="${X(21.25)}" y2="180" stroke="${R}" stroke-dasharray="5 4" class="dr" style="animation-delay:.6s"/>`;
 P.affine={lv:4,icon:'🚕',name:'الدالة التآلفية: تسعيرة سيارة الأجرة',sub:'الرابعة متوسط · الدوال',S:[
  {tag:'الوضعية',title:'150 DA + 40 DA للكيلومتر',vis:[SV(ax)],lines:['تسعيرة سيارة أجرة: 150 DA عند الانطلاق و 40 DA لكل كيلومتر.','الثمن f(x) لمسافة x km: <b>f(x) = 40x + 150</b>.']},
  {tag:'الجدول',title:'نحسب بعض القيم',vis:[SV(ax+dots)],lines:['f(0) = 150 ، f(5) = 350 ، f(10) = 550 ، f(20) = 950.','نضع النقط في المعلم.']},
  {tag:'التمثيل',title:'النقط على استقامة',vis:[SV(ax+dots+line)],lines:['تمثيل الدالة التآلفية مستقيم.','150 = الترتيب عند المبدأ (b) و 40 = المعامل (a): كل كيلومتر يرفع الثمن 40.']},
  {tag:'القراءة',title:'بـ 1000 DA كم كيلومترًا؟',vis:[SV(ax+dots+line+read),BL('40x + 150 = 1000 ⇒ x = <b>21,25 km</b>')],lines:['بيانيًا: نقرأ فاصلة النقطة التي ترتيبها 1000.','جبريًا: نحل المعادلة f(x) = 1000.'],locked:true}
 ]};
})();
