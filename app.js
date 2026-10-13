/* KOMU redesign concept: static demonstration, not the official university website.
   Source of truth for real records remains https://komu.edu.ng/.
   All curriculum/lecturer data marked illustrative is NOT verified. */
const A='assets/';
const OFFICIAL='https://komu.edu.ng';
const URLS={
  home:'https://komu.edu.ng/',
  admissions:'https://komu.edu.ng/admissions/programs/undergraduate/instructions',
  undergrad:'https://komu.edu.ng/admissions/programs/undergraduate/instructions',
  supplementary:'https://komu.edu.ng/admissions/programs/undergraduate/instructions',
  jupeb:'https://komu.edu.ng/admissions/programs/jupeb/instructions',
  ijmb:'https://komu.edu.ng/admissions/programs/ijmb/instructions',
  admissionList:'https://komu.edu.ng/admissions/programs/undergraduate/admission-list',
  student:'https://komu.edu.ng/students/login',
  staff:'https://komu.edu.ng/staff/dashboard/login',
  elearning:'https://elearning.komu.edu.ng/',
  library:'https://komu.my-library.com.ng/',
  transcript:'https://komu.edu.ng/',
  publications:'https://komu.edu.ng/publications/index',
  contact:'https://komu.edu.ng/contact-us',
  news:'https://komu.edu.ng/news',
};
const ICONS={
 home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h4.5v-6h4v6h4.5V10"/>',
 academics:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.6 2.7 3 6 3s6-1.4 6-3v-4.5"/>',
 admissions:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9z"/><path d="M9 14l2 2 4-4.5"/>',
 portal:'<rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/>',
 news:'<path d="M4 5h13v14H6a2 2 0 0 1-2-2z"/><path d="M17 9h3v8a2 2 0 0 1-2 2"/><path d="M7 9h7M7 12h7M7 15h4"/>',
 research:'<path d="M9 3h6"/><path d="M10 3v6L4.6 18.6A1.6 1.6 0 0 0 6 21h12a1.6 1.6 0 0 0 1.4-2.4L14 9V3"/><path d="M7.6 15h8.8"/>',
 about:'<path d="M3 21h18"/><path d="M5 21V10M9.7 21V10M14.3 21V10M19 21V10"/><path d="M2.5 10 12 4l9.5 6z"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5"/><circle cx="17.5" cy="9" r="2.8"/><path d="M17 14.6c2.8 0 4.5 1.6 4.5 4.4"/>',
 book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16"/><path d="M8.5 7.5H16"/>',
 file:'<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5"/><path d="M9 13h7M9 16.5h7"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><path d="M12 17h.01"/>',
 pen:'<path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19z"/><path d="M14.5 6.5l3 3"/>',
 heart:'<path d="M12 20s-8-4.7-8-10.3A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 8 2.7C20 15.3 12 20 12 20z"/>',
 pulse:'<path d="M3 12h4l2.5-6 4 12 2.5-6H21"/>',
 scale:'<path d="M12 4v16M7 20h10M5 7h14"/><path d="M5 7l-3 6a3.2 3.2 0 0 0 6 0zM19 7l-3 6a3.2 3.2 0 0 0 6 0z"/>',
 cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
 briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2M3 13h18"/>',
 contact:'<rect x="3" y="5" width="18" height="14" rx="2.2"/><path d="m3.5 7.5 8.5 6 8.5-6"/>'
};
const svgIcon=name=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||''}</svg>`;
const nav=[
 {title:'Home',href:'#/',icon:'home',color:'#f2b84b'},
 {title:'Academics',icon:'academics',color:'#0b94cb',links:[['Faculties & Departments','#/faculties','Browse the academic structure']]},
 {title:'Academic Portal',icon:'portal',color:'#f08a3c',links:[['Student Portal',URLS.student,'Official student login'],['Staff Portal',URLS.staff,'Official staff login'],['Digital Learning',URLS.elearning,'KOMU e-Learning'],['University Library',URLS.library,'e-Library and research materials'],['All Resources & Services','#/services','Documents, graduate services and help']]},
 {title:'Media',icon:'news',color:'#e0568a',links:[['Gallery','#/media/gallery','Explore photos and videos'],['News & Events','#/news','News, announcements and upcoming events']]},
 {title:'Research',icon:'research',color:'#8a5cf0',links:[['Research & Projects','#/research','Research and funded initiatives'],['Academic Publications',URLS.publications,'Official publications directory'],['Research Resources','#/services','Library and support']]},
 {title:'About Us',icon:'about',color:'#14b8a6',links:[['Vision and Mission statement','#/about','Learn about KOMU’s establishment, vision, mission and values'],['University Administration','#/administration','Meet university leaders and explore staff profiles']]},
 {title:'Contact',href:'#/contact',icon:'contact',color:'#ef6a5b'}
];
const services=[
 {name:'Admissions Services',symbol:'admissions',desc:'Admissions information, application paths, requirements and admission lists.',link:'#/admissions',prime:true},
 {name:'Staff Portal',symbol:'briefcase',desc:'Sign in through the existing official KOMU Staff Portal.',link:URLS.staff,prime:true},
 {name:'Student Portal',symbol:'user',desc:'Sign in through the existing official KOMU Student Portal.',link:URLS.student,prime:true},
 {name:'Digital Learning',symbol:'portal',desc:'Access KOMU e-Learning and approved online academic resources.',link:URLS.elearning},
 {name:'University Library',symbol:'book',desc:'Access the existing e-Library and research materials.',link:URLS.library},
 {name:'Academic Documents',symbol:'file',desc:'Academic calendars, handbooks and published departmental resources.',link:'#/documents'},
 {name:'Graduate Services',symbol:'academics',desc:'Transcript request guidance and approved graduate resources.',link:'#/graduates'},
 {name:'Help & Support',symbol:'help',desc:'Get directed to the correct university office or service.',link:'#/help'}
];
const slugFor=value=>value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const programmeData=[
 ['Administration & Management','Accounting','Mathematics, Economics and any other Social Science subject.','Five (5) O’Level credits including English Language, Mathematics, Economics and any two relevant subjects.',150],
 ['Science','Animal & Environmental Biology','Biology and any two of Physics, Chemistry and Mathematics.','Five (5) O’Level credits including English Language, Mathematics, Biology and two other Science subjects.',150],
 ['Architecture & Environmental Sciences','Architecture','Physics, Mathematics, and any one of Chemistry, Geography, Art, Biology or Economics.','Five (5) O’Level credits including English Language, Mathematics, Physics, Chemistry and one other relevant subject.',150],
 ['Administration & Management','Banking & Finance','Mathematics, Economics, plus either Government or Geography. The PDF also lists an alternative combination: Mathematics, one Social Science subject and any other subject.','Five (5) O’Level credits including English Language, Mathematics, Economics and two other relevant Social Science/Commercial subjects.',null],
 ['Science','Biochemistry','Biology, Chemistry and Physics or Mathematics.','Five (5) O’Level credits including English Language, Mathematics, Biology, Chemistry and Physics.',150],
 ['Science','Biology','Biology, Chemistry and Physics or Mathematics.','Five (5) O’Level credits including English Language, Mathematics, Biology and Physics/another relevant Science subject.',150],
 ['Administration & Management','Business Administration','Mathematics, Economics and any other Social Science subject.','Five (5) O’Level credits including English Language, Mathematics, Economics and two other relevant subjects.',150],
 ['Administration & Management','Business Management','Mathematics, Economics and one other subject.','Five (5) O’Level credits including English Language, Mathematics, Economics and two other relevant subjects.',null],
 ['Science','Chemistry','Chemistry and two of Physics, Biology and Mathematics.','Five (5) O’Level credits including English Language, Mathematics, Chemistry, Physics and Biology.',150],
 ['Computing','Computer Science','Mathematics, Physics and one of Biology, Chemistry, Agricultural Science, Economics and Geography.','Five (5) O’Level credits including English Language, Mathematics, Physics and two relevant Science subjects.',150],
 ['Computing','Cyber Security','Mathematics, Physics and Chemistry.','Five (5) O’Level credits including English Language, Mathematics, Physics and Chemistry plus one other relevant Science subject.',150],
 ['Social Sciences','Economics','Economics, Mathematics and any one of Government, History, Geography, Literature in English, French or CRS/IRS.','Five (5) O’Level credits including English Language, Mathematics, Economics and two other relevant subjects.',150],
 ['Education','Education & Chemistry','Chemistry and two other subjects chosen from Physics, Biology and Mathematics.','Five (5) O’Level credits including English Language, Mathematics, Chemistry and two relevant Science subjects.',null],
 ['Education','Education & Computer Science','Mathematics, Physics and one of Biology, Chemistry and Geography.','Five (5) O’Level credits including English Language, Mathematics, Physics and two other relevant subjects.',null],
 ['Education','Education & Economics','Economics, Mathematics and one of Geography/Physics, History, Government and Literature in English.','Five (5) O’Level credits including English Language, Mathematics, Economics and two other relevant subjects.',null],
 ['Education','Education & English Language','Literature in English, one Arts subject and any other subject.','Five (5) O’Level credits including English Language, Literature in English and three other relevant subjects.',null],
 ['Education','Education & Mathematics','Mathematics and any two of Physics, Chemistry and Biology.','Five (5) O’Level credits including English Language, Mathematics and three other relevant Science subjects.',null],
 ['Education','Education & Physics','Physics, Mathematics or Chemistry plus one other subject.','Five (5) O’Level credits including English Language, Mathematics, Physics and two other relevant subjects.',null],
 ['Education','Education & Political Science','Government or History plus two other Arts or Social Sciences subjects.','Five (5) O’Level credits including English Language, Mathematics, Government/History and two other relevant Arts/Social Science subjects.',null],
 ['Arts','English & Literary Studies','Literature in English, one other Arts subject and another Arts or Social Science subject.','Five (5) O’Level credits including English Language, Literature in English and three other relevant subjects.',150],
 ['Administration & Management','Entrepreneurship','Economics, Mathematics and one other Social Science or Commercial subject.','Five (5) O’Level credits including English Language, Mathematics, Economics and two other relevant subjects.',150],
 ['Allied Health Sciences','Environmental Health Science','Biology, Physics and Chemistry.','Five (5) O’Level credits including English Language, Mathematics, Biology, Chemistry and Physics.',150],
 ['Architecture & Environmental Sciences','Estate Management','Mathematics, Economics and one other subject.','Five (5) O’Level credits including English Language, Mathematics, Economics and two other relevant subjects.',150],
 ['Arts','History & International Studies','Subjects from the Arts and Social Sciences.','Five (5) O’Level credits including English Language, History/Government and three other relevant Arts/Social Science subjects.',150],
 ['Administration & Management','Industrial Relations & Personnel Management','Mathematics, Economics and one other subject.','Five (5) O’Level credits including English Language, Mathematics, Economics and two other relevant subjects.',150],
 ['Computing','Information Technology','Mathematics, Physics and Chemistry.','Five (5) O’Level credits including English Language, Mathematics, Physics and Chemistry plus one other relevant subject.',150],
 ['Law','Law','Use of English, Literature in English, Government and any other Arts/Social Science subject.','Five (5) O’Level credits including English Language, Mathematics, Literature in English and two other relevant Arts/Social Science subjects.',210],
 ['Arts','Linguistics','Any Language and two other subjects.','Five (5) O’Level credits including English Language and other relevant Arts/Language subjects.',150],
 ['Administration & Management','Marketing','Mathematics, Economics plus one other subject.','Five (5) O’Level credits including English Language, Mathematics and three other relevant subjects.',150],
 ['Science','Mathematics','Mathematics and any two of Physics, Chemistry, Economics or Geography.','Five (5) O’Level credits including English Language, Mathematics, Physics/Chemistry and two other relevant Science/Social Science subjects.',150],
 ['Allied Health Sciences','Medical Laboratory Science','Biology, Physics and Chemistry.','Five (5) O’Level credits including English Language, Mathematics, Biology, Chemistry and Physics.',200],
 ['Basic Medical Sciences','Medicine and Surgery','Biology, Physics and Chemistry.','Five (5) O’Level credits including English Language, Mathematics, Biology, Chemistry and Physics.',220],
 ['Science','Microbiology','Biology, Chemistry and either Physics or Mathematics.','Five (5) O’Level credits including English Language, Mathematics, Biology, Chemistry and Physics.',150],
 ['Allied Health Sciences','Nursing Science','Biology, Physics and Chemistry.','Five (5) O’Level credits including English Language, Mathematics, Biology, Chemistry and Physics.',210],
 ['Arts','Philosophy','Any three subjects.','Five (5) O’Level credits including English Language and four other relevant subjects.',150],
 ['Science','Physics','Physics, Mathematics and Chemistry or Biology.','Five (5) O’Level credits including English Language, Mathematics, Physics, Chemistry and one other Science subject.',150],
 ['Science','Physics Electronics','Physics, Mathematics and Chemistry or Biology.','Five (5) O’Level credits including English Language, Mathematics, Physics, Chemistry and one other Science subject.',null],
 ['Science','Plant Science & Biotechnology','Biology, Chemistry and any other Science subject.','Five (5) O’Level credits including English Language, Mathematics, Biology, Chemistry and one other Science subject.',150],
 ['Social Sciences','Political Science','Government or History plus two other Social Science/Arts subjects.','Five (5) O’Level credits including English Language, Mathematics, Government/History and two other relevant subjects.',150],
 ['Social Sciences','Psychology','Any three subjects from Arts or Social Sciences.','Five (5) O’Level credits including English Language, Mathematics and three other relevant Arts/Social Science subjects.',150],
 ['Social Sciences','Public Administration','Mathematics, Economics and any other Social Science subject.','Five (5) O’Level credits including English Language, Mathematics, Economics and two other relevant Social Science subjects.',null],
 ['Allied Health Sciences','Public Health','Biology, Physics and Chemistry.','Five (5) O’Level credits including English Language, Mathematics, Biology, Chemistry and Physics.',150],
 ['Arts','Religious Studies','CRS/IRS and any other two subjects.','Five (5) O’Level credits including English Language, CRS/IRS and three other relevant subjects.',null],
 ['Social Sciences','Sociology','Three Social Science or Arts subjects.','Five (5) O’Level credits including English Language, Mathematics and three other relevant Arts/Social Science subjects.',150],
 ['Science','Statistics','Mathematics and any two of Physics, Chemistry and Economics.','Five (5) O’Level credits including English Language, Mathematics and three other relevant Science/Social Science subjects.',150]
];
const programmes=programmeData.map(([area,name,subjectCombination,olevelRequirement,minimumJambScore])=>({
 area,name,subjectCombination,olevelRequirement,minimumJambScore,faculty:`Faculty of ${area}`
}));
const faculties=Array.from(new Set(programmes.map(programme=>programme.faculty)));
const departments=programmes.map(programme=>({
 name:programme.name,faculty:programme.faculty,path:`#/programme/${slugFor(programme.name)}`,programme
}));
const news=[
 {id:'vc',title:"KOMU’s 2nd Substantive Vice-Chancellor Assumes Office",date:'26 August 2026',type:'news',tag:'University Leadership',summary:'Professor Frances Ngozi Chukwukere assumed office after a formal handover in Owerri, pledging an inclusive administration and calling on KOMU staff and stakeholders to support the university’s next chapter.',photo:'news-vc-crop.jpg',remote:'https://komu.edu.ng/storage/activities/August2026/01M0YYEGW3WJZPZBS6XR3FTB0V.png',url:'https://komu.edu.ng/news/118/komus-2nd-substantive-vc-prof-chukwukere-assumes-office'},
 {id:'admissions',title:'2026/2027 Post-UTME and Direct Entry Screening',date:'2026/2027 Admissions',type:'announcement',tag:'Admission Update',summary:'The 2026/2027 screening notice explains Post-UTME and Direct Entry eligibility, programme requirements and how eligible applicants can complete their online registration.',photo:'news-admission-crop.jpg',remote:'https://komu.edu.ng/storage/activities/May2026/01KSZCG3NYQ2Z2ZHVYJPVYPME8.png',url:'https://komu.edu.ng/news/116/advertisement-for-the-20262027-komu-post-utme-and-direct-entry-screening-exercise'},
 {id:'supplementary-screening',title:'2026/2027 KOMU Supplementary Post-UTME and Direct Entry Screening Exercise',date:'2026/2027 Admissions',type:'announcement',tag:'Admission Update',summary:'KOMU has announced a supplementary Post-UTME and Direct Entry screening exercise for the 2026/2027 academic session. Applicants can consult the official notice for eligibility, programme details and instructions for taking part.',photo:'news-supplementary-screening.png',url:'https://komu.edu.ng/news/119/20262027-komu-supplementary-post-utme-and-direct-entry-screening-exercise'},
 {id:'futo-vc-appointment',title:'Encomiums Reign as Professor Ikechukwu N. S. Dozie Emerges 9th FUTO Vice-Chancellor',date:'University News',type:'news',tag:'University Leadership',summary:'KOMU congratulates former Vice-Chancellor Professor Ikechukwu N. S. Dozie on his appointment as the 9th Vice-Chancellor of the Federal University of Technology Owerri.',photo:'news-futo-appointment.jpg',url:'https://komu.edu.ng/news/114/encomiums-reign-as-prof-ikechukwu-n-s-dozie-emerges-9th-futo-vice-chancellor'},
 {id:'blended',title:'Expanding the Future of Blended Learning at KOMU',date:'20 January 2026',type:'news',tag:'Academic Development',summary:'The Directorate of General Studies delivered synchronized online classes across the Student Cinema and Senate Chambers, expanding blended learning at KOMU.',photo:'news-learning-crop.jpg',url:'https://komu.edu.ng/news/112/komu-blazes-the-trail-in-blended-learning'},
 {id:'campus',title:'Explore the KOMU Campus',date:'Campus Life',type:'news',tag:'Campus & Community',summary:'Discover the campus spaces and learning environment in Ideato, Imo State.',photo:'administration-building.jpg',url:'#/campus'}
];
const upcomingEvents=[{
 id:'special-citation-obiukwu',
 title:'Special Citation in Honour of Dr. Obiukwu Charles Emeka',
 type:'upcoming',
 tag:'Upcoming Programme Event',
 date:'Wednesday, 21 October 2026',
 time:'12:00 Noon',
 venue:'Senate Chamber, Kingsley Ozumba Mbadiwe University, Ideato, Imo State',
 carouselVenue:'Senate Chamber, KOMU, Ideato',
 honouree:'Dr. Obiukwu Charles Emeka',
 summary:'Kingsley Ozumba Mbadiwe University (KOMU), Ideato, Imo State, is set to host a Special Citation in honour of Dr. Obiukwu Charles Emeka, Professor of Ecotoxicology and Director of Academic Planning at the University.',
 invitation:'The University warmly invites members of Management, academic and non-academic staff, students and the general public to attend. The event celebrates academic excellence, intellectual contributions and dedicated service to higher education.',
 closing:'KOMU remains committed to recognising academic excellence, promoting intellectual engagement and celebrating individuals whose contributions advance knowledge and institutional development.',
 photo:'komu-special-citation-event.png'
}];
const officialPhoto={aerial:'https://komu.edu.ng/storage/activities/May2026/01KSZCG3NYQ2Z2ZHVYJPVYPME8.png',vc:'https://komu.edu.ng/storage/activities/August2026/01M0YYEGW3WJZPZBS6XR3FTB0V.png'};
const demoCurriculum={
 '100L':[
  [['PSY 101','Introduction to Psychology','2','Core','Lecturer A'],['GST 101','Use of English','2','Core','Assigned lecturer'],['SOC 101','Introduction to Sociology','2','Core','Assigned lecturer']],
  [['PSY 102','Foundations of Human Behaviour','2','Core','Lecturer B'],['GST 102','Nigerian Peoples and Culture','2','Core','Assigned lecturer'],['STA 102','Introductory Quantitative Methods','2','Core','Lecturer C']]
 ],
 '200L':[
  [['PSY 201','Experimental Psychology I','3','Core','Lecturer A'],['PSY 203','Social Psychology I','2','Core','Lecturer B'],['PSY 207','Statistics for Behavioural Sciences','2','Core','Lecturer C']],
  [['PSY 202','Experimental Psychology II','3','Core','Lecturer A'],['PSY 204','Social Psychology II','2','Core','Lecturer B'],['PSY 208','Psychological Testing I','2','Core','Lecturer C']]
 ],
 '300L':[
  [['PSY 301','Cognitive Psychology','3','Core','Lecturer A'],['PSY 305','Personality Theories','2','Core','Lecturer B'],['PSY 307','Research Methods in Psychology','3','Core','Lecturer C']],
  [['PSY 302','Abnormal Psychology','3','Core','Lecturer A'],['PSY 304','Industrial / Organisational Psychology','2','Core','Lecturer B'],['PSY 306','Psychological Testing II','2','Core','Lecturer C']]
 ],
 '400L':[
  [['PSY 401','Clinical Psychology','3','Core','Lecturer A'],['PSY 405','Seminar in Psychology','2','Core','Lecturer B'],['PSY 407','Research Project I','3','Core','Assigned supervisor']],
  [['PSY 402','Community Psychology','2','Core','Lecturer A'],['PSY 404','Forensic Psychology','2','Elective','Lecturer B'],['PSY 408','Research Project II','3','Core','Assigned supervisor']]
 ]
};
const $=sel=>document.querySelector(sel);
const $$=sel=>Array.from(document.querySelectorAll(sel));
const esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const isExternal=url=>/^(https?:)?\/\//i.test(url);
const linkAttrs=url=>isExternal(url)?' target="_blank" rel="noopener noreferrer"':'';
const safeImg=(local,remote,alt,cls='',style='')=>`<img class="${cls}" src="${remote||A+local}" alt="${esc(alt)}" loading="eager" ${style?`style="${style}"`:''} ${remote?`onerror="this.onerror=null;this.src='${A+local}'"`:''}>`;
function uniqueNewsItems(items){const seen=new Set();return items.filter(item=>{if(!item||typeof item.id!=='string'||seen.has(item.id))return false;seen.add(item.id);return true;});}
function getFeaturedIds(){try{const parsed=JSON.parse(localStorage.getItem('komu-featured-demo')||'null');if(Array.isArray(parsed))return parsed.filter(id=>news.some(n=>n.id===id));}catch(e){}return ['vc','admissions','blended'];}
function navActive(n,here){return n.href?n.href===here:n.links.some(l=>l[1]===here);}
function siteHeader(){
 const here='#/'+decodeURIComponent(location.hash.replace(/^#\/?/,''));
 const links=n=>n.links.map(l=>`<a class="mega-link" href="${l[1]}" ${linkAttrs(l[1])}><b>${esc(l[0])}${isExternal(l[1])?' ↗':''}</b><small>${esc(l[2])}</small></a>`).join('');
 $('#siteHeader').innerHTML=`<header class="site-header"><div class="container wide header-in"><a class="brand" href="#/" aria-label="KOMU homepage"><img class="brand-logo" src="${A}komu-logo-high-res.png" alt="Kingsley Ozumba Mbadiwe University" onload="this.closest('.brand').classList.add('has-uploaded-logo')" onerror="this.onerror=null;this.src='${A}komu-logo.png'"><span class="brand-word"><strong>Kingsley Ozumba<br>Mbadiwe University</strong><small>Ideato · Imo State · Nigeria</small></span></a>
 <nav class="nav" aria-label="Main navigation">${nav.map((n,i)=>n.href?`<div class="nav-item ${navActive(n,here)?'active':''}"><a class="nav-trigger nav-direct" href="${n.href}"><span class="nav-lab">${esc(n.title)}</span></a></div>`:`<div class="nav-item ${i>=4?'align-right':''} ${navActive(n,here)?'active':''}"><button class="nav-trigger" aria-haspopup="true" aria-expanded="false" type="button" data-nav="${i}"><span class="nav-lab">${esc(n.title)} <i class="caret" aria-hidden="true">⌄</i></span></button><div class="mega"><div class="mega-header">${esc(n.title)}</div><div class="mega-grid">${links(n)}</div></div></div>`).join('')}</nav>
 <div class="header-actions"><a href="#/admissions" class="button button-primary button-sm apply-btn">Apply Now <span>↗</span></a><button class="hamburger" id="mobileToggle" aria-controls="mobileNav" aria-expanded="false" aria-label="Open menu">☰</button></div></div>
 <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">${nav.map(n=>n.href?`<a class="mobile-top" href="${n.href}"><span>${esc(n.title)}</span></a>`:`<details><summary><span>${esc(n.title)}</span></summary>${n.links.map(l=>`<a href="${l[1]}" ${linkAttrs(l[1])}>${esc(l[0])}${isExternal(l[1])?' ↗':''}</a>`).join('')}</details>`).join('')}</nav></header>`;
 $('#mobileToggle').addEventListener('click',()=>{const menu=$('#mobileNav');menu.classList.toggle('open');$('#mobileToggle').setAttribute('aria-expanded',String(menu.classList.contains('open')));$('#mobileToggle').textContent=menu.classList.contains('open')?'✕':'☰';});
 $$('button.nav-trigger').forEach(b=>b.addEventListener('click',()=>{let box=b.closest('.nav-item');let willOpen=!box.classList.contains('open');$$('.nav-item').forEach(x=>x.classList.remove('open'));$$('.nav-trigger').forEach(x=>x.setAttribute('aria-expanded','false'));if(willOpen){box.classList.add('open');b.setAttribute('aria-expanded','true');}}));
 if(!window.__komuNavListener){window.__komuNavListener=true;document.addEventListener('click',e=>{if(!e.target.closest('.nav-item')){$$('.nav-item').forEach(x=>x.classList.remove('open'));$$('.nav-trigger').forEach(x=>x.setAttribute('aria-expanded','false'));}if(e.target.closest('.mobile-nav a')){$('#mobileNav').classList.remove('open');$('#mobileToggle').setAttribute('aria-expanded','false');$('#mobileToggle').textContent='☰';}});}
}
function siteFooter(){
 $('#siteFooter').innerHTML=`<footer class="footer"><div class="container"><div class="footer-grid"><div><div class="footer-brand"><img src="${A}komu-logo-high-res.png" alt="Kingsley Ozumba Mbadiwe University" onload="this.closest('.footer-brand').classList.add('has-uploaded-logo')" onerror="this.onerror=null;this.src='${A}komu-logo.png'"><b>Kingsley Ozumba<br>Mbadiwe University</b></div><p>A redesign prototype for the university website, focused on academic discovery, university services and authentic campus identity.</p><p>Ideato, Imo State, Nigeria</p></div>
 <div><h4>Discover KOMU</h4><a href="#/about">About Us</a><a href="#/campus">Campus Life</a><a href="#/administration">University Administration</a><a href="#/media">Media</a></div>
 <div><h4>Academics</h4><a href="#/faculties">Faculties & Departments</a><a href="#/research">Research & Projects</a></div>
 <div><h4>University Services</h4><a href="#/services">Resources Hub</a><a href="#/admissions">Admissions Services</a><a href="${URLS.staff}" target="_blank" rel="noopener">Staff Portal ↗</a><a href="${URLS.student}" target="_blank" rel="noopener">Student Portal ↗</a><a href="${URLS.news}" target="_blank" rel="noopener">Original KOMU Website ↗</a></div></div>
 <div class="footer-bottom"><span>© 2026 KOMU website redesign concept. Not a live university service.</span><span>Verified destination links · Illustrative course records explicitly labelled</span></div></div></footer>`;
}
function heading(kicker,title,description,action=''){return `<div class="section-head"><div><div class="eyebrow">${kicker}</div><h2>${title}</h2><p>${description}</p></div>${action}</div>`;}
function breadcrumbHref(label){
 const normalised=label.trim().toLowerCase();
 if(['academics','faculties','faculties & departments'].includes(normalised))return '#/faculties';
 if(normalised==='admissions services')return '#/admissions';
 if(normalised==='undergraduate')return '#/undergraduate-admissions';
 if(normalised==='media')return '#/media';
 if(normalised==='news & events')return '#/news';
 if(['gallery','photo gallery'].includes(normalised))return '#/media/gallery';
 if(normalised==='videos')return '#/media/videos';
 if(normalised==='about us')return '#/about';
 if(normalised==='campus')return '#/campus';
 if(normalised==='university administration')return '#/administration';
 if(normalised==='research')return '#/research';
 const faculty=faculties.find(name=>name.toLowerCase()===normalised);
 return faculty?`#/faculty/${slugFor(faculty)}`:null;
}
function breadcrumbTrail(trail,title){
 const labels=(trail||title).split(/\s+\/\s+/).filter(Boolean);
 return ['Home',...labels].map((label,index,array)=>{
  const href=label==='Home'?'#/':breadcrumbHref(label);
  const isCurrent=(href&&href===location.hash)||(!href&&index===array.length-1);
  const content=isCurrent?`<span aria-current="page">${esc(label)}</span>`:href?`<a href="${href}">${esc(label)}</a>`:esc(label);
  return `${index?'<span class="breadcrumb-separator" aria-hidden="true">/</span>':''}${content}`;
 }).join('');
}
function pageHero(kicker,title,desc,trail=''){return `<section class="page-hero"><div class="container"><nav class="breadcrumbs" aria-label="Breadcrumb">${breadcrumbTrail(trail,title)}</nav><div class="eyebrow eyebrow-light" style="margin-top:19px">${kicker}</div><h1>${title}</h1><p>${desc}</p></div></section>`;}
function featureCard(imgSrc,title,description,link,label='Discover More',remote=null){return `<article class="feature-card">${safeImg(imgSrc,remote,title)}<div class="feature-body"><h3>${title}</h3><p>${description}</p><a class="text-link" href="${link}" ${linkAttrs(link)}>${label} &nbsp; →</a></div></article>`;}
function home(){return `
 <section class="hero" id="heroNews" aria-roledescription="carousel" aria-label="KOMU building introduction and featured stories">
  <div class="hero-water" id="heroWater" aria-hidden="true"></div>
  <div id="slideLayer" aria-live="off"></div>
  <div class="slide-bottom"><div class="slide-progress" id="slideProgress" aria-label="Slide progress"></div><div class="slide-buttons"><button class="round-control" id="heroPrev" aria-label="Previous slide">‹</button><button class="round-control" id="heroPause" aria-label="Pause slideshow">Ⅱ</button><button class="round-control" id="heroNext" aria-label="Next slide">›</button></div></div>
 </section>
 <section class="section home-welcome"><div class="container welcome-grid">
  <div class="photo-stack">${safeImg('vice-chancellor-frances-chukwukere.jpeg',null,'Vice-Chancellor Professor Frances Ngozi Chukwukere')}<span class="photo-caption">PROFESSOR FRANCES NGOZI CHUKWUKERE · VICE-CHANCELLOR</span></div>
  <div class="welcome-copy"><div class="eyebrow">About Us</div><h2>Education with purpose. A future with possibility.</h2><p>Kingsley Ozumba Mbadiwe University is a community of teaching, scholarship and innovation in Ideato, Imo State.</p>
   <div class="vision-grid"><div class="vision-card"><span class="vision-line"></span><h3>Our Vision</h3><p>To be a globally competitive University renowned for innovative research and scholarship, world-class education and excellent human resource development.</p></div><div class="vision-card"><span class="vision-line"></span><h3>Our Mission</h3><p>Producing talented men and women with passion and skills to apply knowledge and technology sensibly to solve problems of the nation and global community.</p></div></div>
   <div class="glance"><div class="glance-title"><h3>KOMU at a Glance</h3></div><div class="glance-grid"><div class="metric"><strong>9</strong><small>Faculties on the published university website</small></div><div class="glance-note"><b>More facts about KOMU</b><span>Programme and enrolment totals will be shown when officially confirmed.</span></div></div></div>
   <a href="#/administration" class="administration-shortcut"><span class="icon-box">${svgIcon('about')}</span><span><b>University Administration</b><small>Meet KOMU’s principal officers and explore staff directories.</small></span><strong aria-hidden="true">→</strong></a>
   <a href="#/about" class="button button-outline" style="margin-top:22px">Vision and Mission statement <span>→</span></a>
   </div></div></section>
   <section class="section section-pale home-news"><div class="container">
    ${heading('Stay Informed','University News & Events','Official announcements, major university achievements and upcoming activities.',`<a href="#/news" class="button button-outline">All News & Events →</a>`)}
    ${homeNewsCarousel()}
     </div></section>`;}
function homeNewsCarousel(){
 const featuredIds=getFeaturedIds();
 const stories=uniqueNewsItems(news).filter(item=>!featuredIds.includes(item.id)&&/^https:\/\/komu\.edu\.ng\/news\//.test(item.url));
 const events=upcomingEvents.map(event=>({...event,url:'#/news'}));
 const items=[...stories,...events];
 if(!items.length)return '<div class="news-carousel-empty">More university news will appear here. Stories featured in the hero are not repeated in this section.</div>';
 return `<div class="news-carousel" id="homeNewsCarousel" role="region" aria-roledescription="carousel" aria-label="KOMU news and upcoming events">
  <div class="news-carousel-viewport" id="newsCarouselViewport">${items.map((item,index)=>`<article class="news-carousel-slide${index===0?' is-active':''}" role="group" aria-roledescription="slide" aria-label="${index+1} of ${items.length}: ${esc(item.title)}" aria-hidden="${index!==0}" ${index===0?'':'inert'}>
   <div class="news-carousel-media">${safeImg(item.photo,item.remote||null,`Photograph for ${item.title}`,'news-carousel-photo')}</div>
   <div class="news-carousel-copy"><div class="news-carousel-meta"><span class="pill">${esc(item.tag)}</span><span>${esc(item.date)}</span>${item.time?`<span>${esc(item.time)}</span>`:''}</div><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p>${item.carouselVenue||item.venue?`<p class="news-carousel-venue">${esc(item.carouselVenue||item.venue)}</p>`:''}<a class="news-carousel-story-link" href="${esc(item.url)}" ${linkAttrs(item.url)}>${item.type==='upcoming'?'View Event Details':item.url===URLS.news?'Browse Official News Archive':'Read Full Story'} <span aria-hidden="true">↗</span></a></div>
  </article>`).join('')}</div>
  <button class="back-to-top" id="backToTop" type="button" aria-label="Back to top" title="Back to top"><span aria-hidden="true">↑</span></button>
  </div>`;
}
function servicesPage(){return `${pageHero('Academic resources','Academic Resources & Services','One organised place to find KOMU’s existing portals, digital learning tools and university services.')}
 <section class="page-body"><div class="container"><div class="warning"><strong>Existing portal security is preserved.</strong> Staff Portal and Student Portal are direct external login links. This prototype does not store passwords, academic records or private results.</div>
 <div class="search-row"><input class="field" id="serviceSearch" placeholder="Search university services…" aria-label="Search services"></div><div class="services-grid" id="serviceGrid">${services.map(serviceCard).join('')}</div></div></section>`;}
function serviceCard(s){return `<a class="service-card ${s.prime?'prime':''}" href="${s.link}" ${linkAttrs(s.link)}><span class="icon-box service-card-icon ${s.image?'service-card-icon-image':''}">${s.image?`<img class="service-icon-image" src="${A}${s.image}" alt="" onload="this.nextElementSibling.hidden=true" onerror="this.remove()"><span class="service-icon-fallback">${svgIcon(s.symbol)}</span>`:svgIcon(s.symbol)}</span><h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p><span class="service-action">${isExternal(s.link)?'Open official portal ↗':'Explore service →'}</span></a>`;}
const leadershipStorageKey='komu-leadership-welcome-demo';
function getLeadershipRecords(){
 try{
  const saved=localStorage.getItem(leadershipStorageKey);
  if(!saved)return {};
  const records=JSON.parse(saved);
  if(!records||typeof records!=='object'||Array.isArray(records))throw new Error('Stored leadership data is not an object.');
  return records;
 }catch(error){
  console.error('Could not read the local leadership welcome-message demo data.',error);
  showToast('Saved leadership demo data could not be read. Showing verified-content placeholders.');
  return {};
 }
}
function getLeadershipRecord(key,role){
 const records=getLeadershipRecords(),saved=records[key];
 return {
  fullName:typeof saved?.fullName==='string'?saved.fullName:'',
  designation:typeof saved?.designation==='string'?saved.designation:role,
  photoUrl:typeof saved?.photoUrl==='string'?saved.photoUrl:'',
  welcomeMessage:typeof saved?.welcomeMessage==='string'?saved.welcomeMessage:''
 };
}
function leadershipWelcome(type,key,title,role){
 const record=getLeadershipRecord(key,role);
 const profileLabel=`View ${record.fullName||role} profile`;
 const imageAlt=record.photoUrl?`Official photograph of ${record.fullName||role}`:`Placeholder for ${role} photograph`;
 const pending=!record.fullName||!record.photoUrl||!record.welcomeMessage;
 const message=record.welcomeMessage||`The official ${role.toLowerCase()} welcome message is pending verification by KOMU.`;
 const preview=message.length>360?`${message.slice(0,357).trimEnd()}…`:message;
 const portrait=`<a class="leadership-photo-link" href="#/staff-profile/${type}/${key}" aria-label="${esc(profileLabel)}">${record.photoUrl?`<img src="${esc(record.photoUrl)}" alt="${esc(imageAlt)}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false">`:''}<span class="leadership-photo-placeholder" ${record.photoUrl?'hidden':''}>${svgIcon('user')}<b>Official photo pending</b></span></a>`;
 return `<section class="leadership-welcome" id="leadership-${key}" aria-label="${esc(role)} welcome">
  <div class="leadership-portrait">${portrait}</div>
  <div class="leadership-copy"><div class="eyebrow">${esc(role)}</div><h2>${esc(record.fullName||`${role} name pending verification`)}</h2><p class="leadership-designation">${esc(record.designation||role)}</p>
   ${pending?'<span class="pill pill-ghost leadership-status">Official details pending verification</span>':''}
   <div class="leadership-message"><h3>Welcome Message</h3><p>${esc(preview)}</p>${message.length>360?`<details class="leadership-more"><summary>Click to see more</summary><p>${esc(message.slice(357).trimStart())}</p></details>`:''}</div>
   <a class="leadership-profile-link" href="#/staff-profile/${type}/${key}">${esc(profileLabel)} →</a>
   <button class="button button-outline button-sm leadership-editor-trigger" type="button" data-leadership-editor="${esc(type)}:${esc(key)}">Edit welcome details (Demo)</button>
   <p class="leadership-editor-note">Prototype editor only; changes are saved in this browser and are not access-controlled or published to KOMU.</p>
  </div>
 </section>`;
}
function setupLeadershipEditors(){
 $$('[data-leadership-editor]').forEach(button=>button.addEventListener('click',()=>{
  const [type,key]=button.dataset.leadershipEditor.split(':');
  const item=type==='faculty'?faculties.find(name=>slugFor(name)===key):departments.find(dep=>slugFor(dep.name)===key);
  if(!item)return;
  const title=type==='faculty'?item:`Department of ${item.name}`;
  const role=type==='faculty'?`Dean, ${item}`:`Head of Department, ${item.name}`;
  const current=getLeadershipRecord(key,role);
  openModal(`Welcome Message Editor — ${esc(title)}`,`<div class="warning"><strong>Demo only:</strong> This static prototype has no administrator authentication or CMS connection. Changes are saved only in this browser and are not visible to other visitors. Do not treat this as an authorised publishing system.</div>
   <form id="leadershipEditorForm" class="leadership-editor-form">
    <label>Official full name<input class="field" name="fullName" maxlength="120" value="${esc(current.fullName)}" placeholder="Leave blank until verified"></label>
    <label>Designation<input class="field" name="designation" maxlength="160" value="${esc(current.designation)}"></label>
    <label>Official photo URL (HTTPS)<input class="field" name="photoUrl" type="url" value="${esc(current.photoUrl)}" placeholder="https://…"></label>
    <label>Approved welcome message<textarea class="field" name="welcomeMessage" rows="6" maxlength="5000" placeholder="Enter only the approved welcome message, not a biography.">${esc(current.welcomeMessage)}</textarea></label>
    <p class="label-note">Staff photographs open the local profile page. Add biographies there only after the approved details are supplied.</p>
    <button class="button button-primary" type="submit">Save Demo Changes</button>
   </form>`);
  $('#leadershipEditorForm').addEventListener('submit',event=>{
   event.preventDefault();
   const form=new FormData(event.currentTarget);
   const next={
    fullName:String(form.get('fullName')||'').trim(),
    designation:String(form.get('designation')||'').trim()||role,
    photoUrl:String(form.get('photoUrl')||'').trim(),
    welcomeMessage:String(form.get('welcomeMessage')||'').trim()
   };
   if(next.photoUrl){
    let url;
    try{url=new URL(next.photoUrl);}catch(error){showToast('Photo link must be a valid HTTPS URL.');return;}
    if(url.protocol!=='https:'){showToast('Photo link must use HTTPS.');return;}
   }
   const records=getLeadershipRecords();
   records[key]=next;
   try{localStorage.setItem(leadershipStorageKey,JSON.stringify(records));}
   catch(error){console.error('Could not save leadership welcome-message demo data.',error);showToast('Could not save the demo changes in this browser.');return;}
   $('#dialogRoot').innerHTML='';
   const card=document.getElementById(`leadership-${key}`);
   if(card)card.outerHTML=leadershipWelcome(type,key,title,role);
   setupLeadershipEditors();
   showToast('Demo changes saved in this browser only; they are not published to KOMU.');
  });
 }));
}
function admissionsPage(){return `${pageHero('Become a KOMU student','Admissions Services','Explore university admission pathways, application routes and verified programme requirements.','Admissions Services')}
<section class="page-body"><div class="container"><div class="warning"><strong>Application portals:</strong> Programme eligibility shown in this prototype is transcribed from the supplied KOMU 2026/2027 JAMB/IBASS reference. Always confirm current instructions before applying.</div>
<div class="section-head" style="margin-top:35px"> <div><div class="eyebrow">Find your pathway</div><h2>Start your admission journey</h2><p>Choose your preferred route to access published requirements and application instructions.</p></div></div>
<div class="services-grid">${[
 {name:'Undergraduate / Post-UTME',desc:'Compare Post-UTME and supplementary screening routes, requirements and official application links.',symbol:'admissions',image:'Undergraduate.jpeg',link:'#/undergraduate-admissions',prime:true},
 {name:'JUPEB',desc:'Foundation programme application instructions.',symbol:'book',image:'jupeb-board-logo.png',link:URLS.jupeb},
 {name:'IJMB',desc:'Interim Matriculation programme application instructions.',symbol:'academics',image:'IJMB.jpeg',link:URLS.ijmb},
 {name:'ICEP',desc:'Continuing education: explore published programmes and application information.',symbol:'users',link:URLS.home},
 {name:'Admission Lists',desc:'Find official admission lists for undergraduate, JUPEB and IJMB programmes.',symbol:'file',link:'#/admission-lists'},
 {name:'Explore Requirements',desc:'Browse KOMU programmes and their 2026/2027 UTME and O’Level requirements.',symbol:'portal',link:'#/programmes'}
 ].map(serviceCard).join('')}</div>
<div class="paper-card" style="margin-top:25px"><h3>Find programme-specific entry requirements</h3><p>Each programme page includes the UTME subject combination, O’Level credits and any 2026/2027 minimum JAMB score listed in the supplied reference. Direct Entry criteria are not specified in that document.</p><a href="#/faculties" class="button button-primary" style="margin-top:15px">Browse Faculties & Departments →</a></div></div></section>`;}
function undergraduateAdmissionsPage(){return `${pageHero('Undergraduate Admissions','Choose your application','Select the Post-UTME or supplementary screening information you need.','Admissions Services / Undergraduate')}
<section class="page-body"><div class="container">
 <div class="warning"><strong>2026/2027 admissions reference:</strong> Programme-specific subject combinations, O’Level requirements and score thresholds are available in each programme profile. The application itself continues through the official KOMU portal.</div>
 <div class="section-head" style="margin-top:35px"><div><div class="eyebrow">Application forms</div><h2>Undergraduate screening routes</h2><p>Choose the relevant screening route to read its guidance and continue to the official application instructions.</p></div></div>
 <div class="undergraduate-pathways">
  <article class="undergraduate-pathway"><span class="pathway-number">01</span><span class="icon-box">${svgIcon('admissions')}</span><h3>Post-UTME Screening Form</h3><p>For candidates applying through the regular UTME screening route. Review the programme-specific UTME subjects, O’Level credits and the published 2026/2027 score before applying.</p><a class="text-link" href="#/programmes">Browse programme requirements →</a><a class="button button-primary" href="${URLS.undergrad}" target="_blank" rel="noopener noreferrer">Open Post-UTME Instructions ↗</a></article>
  <article class="undergraduate-pathway"><span class="pathway-number">02</span><span class="icon-box">${svgIcon('file')}</span><h3>Supplementary Screening Form</h3><p>For eligible candidates considering the supplementary Post-UTME and Direct Entry screening exercise. Read the official notice for current eligibility, programmes and submission instructions.</p><a class="text-link" href="https://komu.edu.ng/news/119/20262027-komu-supplementary-post-utme-and-direct-entry-screening-exercise" target="_blank" rel="noopener noreferrer">Read the supplementary screening notice ↗</a><a class="button button-primary" href="https://komu.edu.ng/forms/supplementary-form" target="_blank" rel="noopener noreferrer">Open Supplementary Form ↗</a></article>
 </div>
 <a href="#/admissions" class="text-link" style="display:inline-block;margin-top:25px">← Back to Admissions Services</a>
</div></section>`;}
function admissionListsPage(){return `${pageHero('Admissions Services','Admission Lists','Choose the admission list for your programme. Each link opens the corresponding official KOMU list page.','Admissions Services / Admission Lists')}
<section class="page-body"><div class="container"><div class="warning"><strong>Official admission lists:</strong> The following programme-specific list pages were verified on the KOMU website. Admission status and list availability are maintained by the University.</div>
<div class="section-head" style="margin-top:35px"><div><div class="eyebrow">Find your programme</div><h2>Published Admission Lists</h2><p>Select the programme through which you applied to view its official list.</p></div></div>
<div class="services-grid">${[
 {name:'Undergraduate',desc:'Official undergraduate admission list.',symbol:'admissions',link:URLS.admissionList,prime:true},
 {name:'JUPEB',desc:'Official JUPEB Foundation School admission list.',symbol:'book',link:'https://komu.edu.ng/admissions/programs/jupeb/admission-list'},
 {name:'IJMB',desc:'Official Interim Joint Matriculation Board admission list.',symbol:'academics',link:'https://komu.edu.ng/admissions/programs/ijmb/admission-list'}
].map(serviceCard).join('')}</div>
<div class="paper-card" style="margin-top:25px"><h3>ICEP and other programme lists</h3><p>A separate public ICEP admission-list page could not be verified. For ICEP or another programme not listed here, check the official KOMU website or contact the University’s Admissions Office for the correct list and current status.</p><a href="${URLS.home}" class="button button-outline" target="_blank" rel="noopener noreferrer" style="margin-top:15px">Visit Official KOMU Website ↗</a></div>
<a href="#/admissions" class="text-link" style="display:inline-block;margin-top:24px">← Back to Admissions Services</a></div></section>`;}
function programmesPage(){return `${pageHero('Academics','Programme Requirements','Search KOMU undergraduate programmes and view their 2026/2027 UTME subjects, O’Level requirements and listed JAMB score.','Academics / Faculties & Departments')}
 <section class="page-body"><div class="container"><div class="warning"><strong>Source and scope:</strong> Programme and admission details below are transcribed from the supplied KOMU 2026/2027 JAMB/IBASS reference. Duplicate Biology entries and the two Banking & Finance spellings are consolidated into 45 programme records across 10 academic areas.</div>
 <div class="search-row"><input class="field" id="programmeSearch" type="search" placeholder="Search a programme or faculty — e.g. Psychology" aria-label="Search programmes"><select class="field" id="facultyFilter" aria-label="Filter programmes by faculty"><option value="">All Faculties</option>${faculties.map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('')}</select></div>
 <div class="results-grid" id="programmeResults"></div>
 <p class="label-note" style="margin-top:22px">Where the document says “Not specified in current advert,” no minimum score is shown here. English Language is compulsory in UTME and is additional to the three listed programme subjects when not already named. Direct Entry requirements are not included in this reference.</p></div></section>`;}
function facultyPage(){return `${pageHero('Academic community','Faculties & Departments','Browse the KOMU academic areas and undergraduate programmes listed in the supplied 2026/2027 JAMB/IBASS reference.','Academics')}
<section class="page-body"><div class="container"><div class="warning"><strong>Catalogue source:</strong> Only academic areas and programmes named in the supplied KOMU 2026/2027 reference are included. Dean and Head of Department details remain verification placeholders.</div><div class="cards3" style="margin-top:29px">${faculties.map((faculty,i)=>`<article class="paper-card faculty-directory-card" style="margin:0"><span class="icon-box" aria-hidden="true">${svgIcon(['briefcase','research','about','users','academics','pen','pulse','cpu','scale','heart'][i])}</span><h3 style="margin:19px 0 12px">${esc(faculty)}</h3><p>${departments.filter(department=>department.faculty===faculty).length} listed programmes</p><a class="button button-primary button-sm" style="margin-top:16px" href="#/faculty/${slugFor(faculty)}">View Faculty Page →</a></article>`).join('')}</div>
<div class="paper-card" style="margin-top:28px"><h3>Find a programme</h3><p>Search or filter the complete list of programmes named in the supplied admission reference.</p><a class="button button-outline" style="margin-top:14px" href="#/programmes">Search Programme Requirements →</a></div></div></section>`;}
function facultyDetailPage(slug){
 const faculty=faculties.find(name=>slugFor(name)===slug);
 if(!faculty)return pageHero('Academic community','Faculty not found','Return to the faculty directory to choose a listed faculty.','Academics / Faculties')+`<section class="page-body"><div class="container"><a class="button button-outline" href="#/faculties">Back to Faculties</a></div></section>`;
 const facultyDepartments=departments.filter(department=>department.faculty===faculty);
 return `${pageHero('Faculty of KOMU',faculty,'Explore programmes listed for this academic area and their published admission requirements.','Academics / Faculties / '+faculty)}
 <section class="page-body"><div class="container">${leadershipWelcome('faculty',slugFor(faculty),faculty,`Dean, ${faculty}`)}
 <div class="section-head" style="margin-top:38px"><div><div class="eyebrow">Academic structure</div><h2>Departments & Programmes</h2><p>Each listed programme opens an internal profile with its available requirements and the shared catalogue layout.</p></div></div>
 ${facultyDepartments.length?`<div class="cards3">${facultyDepartments.map(department=>`<article class="paper-card department-directory-card"><h3>${esc(department.name)}</h3><p><span class="pill">${department.programme.minimumJambScore?`Minimum JAMB score: ${department.programme.minimumJambScore}`:'Minimum JAMB score not specified in current advert'}</span></p><a class="button button-primary button-sm" style="margin-top:14px" href="#/programme/${slugFor(department.name)}">View Programme & Requirements →</a></article>`).join('')}</div>`:'<div class="empty">No programme records are available for this academic area.</div>'}
 <a href="#/faculties" class="text-link" style="display:inline-block;margin-top:24px">← Back to Faculties & Departments</a></div></section>`;
}
let activeProgramme=null,programmeTab='overview',programmeLevel='100L',programmeSemester=0;
function psychologyPage(){return programmePage(slugFor('Psychology'));}
function programmePage(slug){
 const department=departments.find(item=>slugFor(item.name)===slug);
 if(!department)return pageHero('Academic community','Programme not found','Return to the faculty directory to choose a listed programme.','Academics / Faculties & Departments')+`<section class="page-body"><div class="container"><a class="button button-outline" href="#/faculties">Back to Faculties & Departments</a></div></section>`;
 activeProgramme=department.programme;programmeTab='overview';programmeLevel='100L';programmeSemester=0;
 const programme=activeProgramme;
 return `${pageHero(esc(programme.faculty),esc(programme.name)+' — Programme Profile','Explore programme information, admission requirements, curriculum, courses, lecturers and resources.','Academics / '+programme.faculty+' / '+programme.name)}
<section class="page-body"><div class="container">${leadershipWelcome('department',slugFor(programme.name),programme.name,`Head of Department, ${programme.name}`)}<div class="warning" style="margin-top:26px"><strong>ADMISSION DATA SOURCE:</strong> The UTME subject combination, O’Level requirements and score (where published) below are transcribed from the supplied 2026/2027 reference. Curriculum, course codes and lecturer assignments were not included in the document.</div>
<div class="page-split" style="margin-top:26px"><div><div class="paper-card"><div class="eyebrow">Programme information</div><h2 style="font-size:2rem;margin:11px 0">${esc(programme.name)} <span class="pill pill-gold">Programme Profile</span></h2><p>This standardised profile organises information for each KOMU academic programme. Use the tabs to explore its overview, admission requirements, curriculum, course details, lecturers and resources.</p><div class="tab-bar" role="tablist" aria-label="${esc(programme.name)} programme information">${[['overview','Overview'],['admission','Admission Requirements'],['curriculum','Curriculum'],['courses','Course Details'],['staff','Lecturers'],['resources','Resources'],['contact','Contact & FAQ']].map(([id,label])=>`<button type="button" class="tab ${programmeTab===id?'active':''}" data-ptab="${id}" role="tab" aria-selected="${programmeTab===id}">${label}</button>`).join('')}</div><div id="programmeContent">${renderProgrammeTab()}</div></div></div>
<aside class="paper-card aside-card"><div class="eyebrow">Programme snapshot</div><h3 style="margin:11px 0 20px">At a Glance</h3><dl><dt>Faculty</dt><dd>${esc(programme.faculty)}</dd><dt>Department</dt><dd>${esc(programme.name)}</dd><dt>Degree / duration</dt><dd>To be verified</dd><dt>Study mode</dt><dd>To be verified</dd><dt>Entry routes</dt><dd>UTME / DE*</dd><dt>Curriculum</dt><dd>${programme.name==='Psychology'?'Illustrative sample only':'Awaiting approved programme curriculum'}</dd><dt>Academic session</dt><dd>2026/2027 reference</dd></dl><a href="#/programmes" class="text-link" style="display:inline-block;margin-top:18px">← Back to Programme Finder</a><p class="label-note" style="margin-top:16px">*Entry routes and requirements should be confirmed with KOMU.</p></aside></div></div></section>`;}
function renderProgrammeTab(){const programme=activeProgramme;if(!programme)return '';switch(programmeTab){
case 'overview':return `<div class="eyebrow">Programme overview</div><h3 style="margin:9px 0">${esc(programme.name)}</h3><p>This programme is listed under ${esc(programme.faculty)} in the supplied KOMU 2026/2027 JAMB/IBASS reference. That document provides admission information, but not a programme description, objectives, degree duration or career information.</p><div class="details-grid" style="margin-top:20px"><div class="small-list"><h3>Academic area</h3><p>${esc(programme.faculty)}</p></div><div class="small-list"><h3>Programme record</h3><p>Undergraduate programme listed for the 2026/2027 reference year.</p></div></div><p class="label-note">The programme title and academic area match the supplied reference; further programme details require official departmental material.</p>`;
case 'admission':return `<div class="eyebrow">Admissions Information</div><h3 style="margin:9px 0 16px">Admission Requirements</h3><div class="details-grid"><div class="small-list"><h3>UTME Subject Combination</h3><p>${esc(programme.subjectCombination)}</p><p class="label-note">English Language is compulsory in UTME and is additional to the three programme subjects if it is not already listed above.</p></div><div class="small-list"><h3>O’Level Requirement</h3><p>${esc(programme.olevelRequirement)}</p></div></div><div class="small-list" style="margin-top:15px"><h3>2026/2027 Minimum JAMB Score</h3><p>${programme.minimumJambScore?`${programme.minimumJambScore} points`:'Not specified in the current advert for this programme.'}</p></div><div class="warning" style="margin-top:15px"><strong>Direct Entry:</strong> The supplied PDF does not state programme-specific Direct Entry qualifications. Confirm current requirements with the University before applying. O’Level and score entries should also be checked against current IBASS/KOMU information before final registration.</div>`;
case 'curriculum':if(programme.name!=='Psychology')return `<div class="eyebrow">Level by level</div><h3 style="margin:9px 0">Curriculum & Course Assignments</h3><div class="empty">The supplied PDF contains admission requirements only. An approved curriculum for ${esc(programme.name)} has not been supplied for this prototype.</div>`;
 return `<div class="eyebrow">Level by level</div><h3 style="margin:9px 0">Curriculum & Lecturer Assignments</h3><div class="warning">Illustrative Psychology curriculum only. Course codes, titles, unit loads, course status and lecturer assignments below are sample records, not official KOMU curriculum data.</div><p style="margin-top:14px">Select an academic level and semester to view the existing Psychology demonstration.</p><div class="curriculum-tools"><div class="level-pills" aria-label="Academic level">${Object.keys(demoCurriculum).map(x=>`<button class="${programmeLevel===x?'active':''}" data-level="${x}">${x}</button>`).join('')}</div><div class="level-pills" aria-label="Semester"><button class="${programmeSemester===0?'active':''}" data-sem="0">First Semester</button><button class="${programmeSemester===1?'active':''}" data-sem="1">Second Semester</button></div></div><div class="table-wrap"><table class="curriculum-table"><thead><tr><th>Code</th><th>Course Title</th><th>Units*</th><th>Type*</th><th>Lecturer*</th><th>More</th></tr></thead><tbody>${demoCurriculum[programmeLevel][programmeSemester].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td><button class="course-link" data-course="${row[0]}">Details ↗</button></td></tr>`).join('')}</tbody></table></div><p class="label-note">Illustrative subset only; not a complete or approved curriculum.</p>`;
case 'courses':if(programme.name!=='Psychology')return `<div class="eyebrow">Course catalogue</div><h3 style="margin:9px 0">Individual Course Details</h3><div class="empty">Course descriptions and course codes for ${esc(programme.name)} were not included in the supplied PDF.</div>`;
 return `<div class="eyebrow">Course catalogue</div><h3 style="margin:9px 0">Individual Course Details</h3><p>The following Psychology entries are part of the existing illustrative demo only; they are not verified course records.</p><div class="cardlist" style="margin-top:19px">${[['PSY 101','Introduction to Psychology'],['PSY 207','Statistics for Behavioural Sciences'],['PSY 301','Cognitive Psychology'],['PSY 401','Clinical Psychology']].map(x=>`<div class="small-list"><span class="pill pill-ghost">DEMO COURSE</span><b style="margin-top:12px">${x[0]} · ${x[1]}</b><p>Illustrative course detail preview; not an official KOMU course record.</p><button class="course-link" data-course="${x[0]}">View Course Details →</button></div>`).join('')}</div>`;
case 'staff':return `<div class="eyebrow">Academic people</div><h3 style="margin:9px 0">Lecturers & Teaching Assignments</h3><p>Lecturers will be connected to specific courses for the relevant academic session. Names shown here are strictly placeholders.</p><div class="profile-grid" style="margin-top:19px">${['Lecturer A','Lecturer B','Lecturer C','Assigned Supervisor'].map((n,i)=>`<div class="profile-card"><span class="avatar">${svgIcon('user')}</span><div><b>${n}</b><small>Role / academic rank: Pending verification</small><small>Academic session: Pending</small><a class="course-link" href="#/staff-profile/${['lecturer-a','lecturer-b','lecturer-c','assigned-supervisor'][i]}" style="display:inline-block;margin-top:10px">View Profile →</a></div></div>`).join('')}</div><p class="label-note">A completed profile can include verified photograph, professional qualifications, research interests, publications and current teaching allocation.</p>`;
case 'resources':return `<div class="eyebrow">Programme documents</div><h3 style="margin:9px 0">Programme Resources</h3><p>The university can upload official, dated and versioned documents from the departmental publishing system.</p><div class="cardlist" style="margin-top:19px">${['Approved Programme Handbook','Official Curriculum PDF','Departmental Academic Regulations','Project & Practical Guidelines'].map(x=>`<div class="small-list"><b>${x}</b><p>Awaiting an approved KOMU file. No download is available in this demonstration.</p><span class="pill pill-ghost">Not yet uploaded</span></div>`).join('')}</div>`;
case 'contact':return `<div class="eyebrow">Get assistance</div><h3 style="margin:9px 0">Departmental Contact & Frequently Asked Questions</h3><p>Verified Head of Department details, office contacts and opening hours will be published following approval.</p><div class="small-list" style="margin-top:17px"><h3>How do I apply?</h3><p>Use the official KOMU admissions instructions and verified programme-specific requirements.</p><a href="#/admissions" class="text-link">Visit Admissions Services →</a></div><div class="small-list" style="margin-top:13px"><h3>Where do I access my academic records?</h3><p>Private student records, registration and results remain in the existing secured Student Portal.</p><a href="${URLS.student}" target="_blank" rel="noopener" class="text-link">Open Student Portal ↗</a></div>`;
 default:return '';
}}
function documentsPage(){return `${pageHero('University records','Academic Documents','A planned central directory for official academic calendars, approved departmental handbooks and published timetables.')}
<section class="page-body"><div class="container"><div class="warning">Documents will not be publicly available here until verified and uploaded by authorised university editors.</div><div class="mini-sections" style="margin-top:25px">${[['Academic Calendars','Session-specific university-approved dates and activities.'],['Departmental Handbooks','Approved student handbooks organised by faculty and session.'],['Timetables & Regulations','Published schedules and official academic guidance.']].map(x=>`<div><h3>${x[0]}</h3><p>${x[1]}</p><span class="pill pill-ghost" style="margin-top:15px">Content pending</span></div>`).join('')}</div></div></section>`;}
function graduatesPage(){return `${pageHero('Graduate services','Graduate Services','A single starting point for transcripts, graduate document guidance and alumni resources.')}
<section class="page-body"><div class="container"><div class="paper-card"><h3>Transcript Applications</h3><p>Transcript requests should continue through the existing official KOMU systems. The exact undergraduate or programme-specific transcript link will be mapped and verified during portal integration.</p><a href="${URLS.home}" class="button button-primary" target="_blank" rel="noopener" style="margin-top:17px">Open Existing KOMU Website ↗</a></div><div class="paper-card"><h3>Alumni Resources</h3><p>Approved university alumni services and graduate announcements can be linked here when available.</p></div></div></section>`;}
function helpPage(){return `${pageHero('University help','Help & Support','Guidance to find the right campus office, help channel and authorised university service.')}
<section class="page-body"><div class="container"><div class="mini-sections">${[['Admission Enquiries','Questions about screening, admissions status and programme requirements.'],['Portal Assistance','Existing Student and Staff Portals manage protected login and account issues.'],['Departmental Enquiries','Academic questions should be directed to the relevant faculty or department.']].map(x=>`<div><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div><div class="paper-card" style="margin-top:25px"><h3>Existing KOMU Contact Details</h3><p>Ideato, Imo State, Nigeria · +234 817 538 8217</p><a href="${URLS.home}" class="text-link" target="_blank" rel="noopener">Visit the official university website ↗</a></div></div></section>`;}
function campusPage(){return `${pageHero('Explore our campus','Campus Life & Facilities','Authentic university images and a consistent way to discover the learning environment.','About Us / Campus')}
<section class="page-body"><div class="container">${heading('A place to discover','KOMU Campus Gallery','The initial preview uses KOMU imagery from the uploaded animation and existing homepage screenshot. Higher-resolution authorised originals should replace low-resolution crops at launch.')}<div class="gallery-grid"><figure>${safeImg('hero-frame-05.jpg',null,'Approved KOMU hero building still')}<figcaption>University Campus — Hero Building</figcaption></figure><figure>${safeImg('administration-building.jpg',null,'Original campus administration block')}<figcaption>Administration Block</figcaption></figure><figure>${safeImg('campus-aerial-crop.jpg',officialPhoto.aerial,'KOMU aerial campus view')}<figcaption>Aerial Campus View</figcaption></figure><figure>${safeImg('hero-frame-45.jpg',null,'University building with K.O.M.U lettering')}<figcaption>Approved Building Animation</figcaption></figure><figure>${safeImg('administration-building.jpg',null,'KOMU campus exterior')}<figcaption>University Environment</figcaption></figure></div>
<div class="paper-card" style="margin-top:27px"><div class="eyebrow">Future enhancement</div><h3 style="margin-top:8px">Campus Map & Virtual Tour</h3><p>A campus map with verified building locations can be added once official geolocation and facilities data have been collected. A 360° virtual tour requires actual authorised tour media; no fabricated tour is included in this build.</p></div></div></section>`;}
function researchPage(){return `${pageHero('Scholarship & discovery','Research & Institutional Projects','Explore KOMU research, publications, collaborations and officially approved funded initiatives.','Research')}
<section class="page-body"><div class="container"><div class="paper-card" style="margin-bottom:22px"><div class="eyebrow">Published academic output</div><h2 style="font-size:2rem;margin:12px 0">Academic Publications</h2><p>Link the redesigned research section to KOMU’s existing publications directory instead of creating inconsistent duplicates.</p><a href="${URLS.publications}" target="_blank" rel="noopener" class="button button-primary" style="margin-top:17px">Open Official Publication Directory ↗</a></div><div class="mini-sections">${[['Research Groups','Verified research teams, laboratories and collaborations.'],['Funded Projects','Officially confirmed TETFund and other sponsored initiatives.'],['Conferences & Innovation','Institutional scholarly programmes, seminars and awards.']].map(x=>`<div><div class="eyebrow">Proposed Directory</div><h3 style="margin-top:11px">${x[0]}</h3><p>${x[1]}</p><span class="pill pill-ghost" style="margin-top:16px">Awaiting verified records</span></div>`).join('')}</div></div></section>`;}
function aboutPage(){return `${pageHero('About Us','ESTABLISHMENT, VISION, MISSION, PHILOSOPHY, CORE VALUES, MANTRA, MOTTO AND LOGO','Learn about Kingsley Ozumba Mbadiwe University, its mandate and objectives, and the principles that guide the University.','About Us')}
<section class="page-body"><div class="container">
<section id="about-establishment" class="about-block"><h2>Establishment</h2><p>Kingsley Ozumba (KO) Mbadiwe University was established on 18th February, 2021 by the enactment of Kingsley Ozumba (KO) Mbadiwe University (Establishment) Law No. 1 of 2021 of Imo State as a multi-Campus University with the main Campus at Ogboko in Ideato South Local Government Area (LGA) of Imo State, Nigeria. This Law repealed the Eastern Palm University (Establishment) Law No. 13 of 2016. The defunct Eastern Palm University was recognized by the National Universities Commission (NUC) as the 42nd State University in Nigeria and 143rd in the Nigerian University System. Statutorily, the erstwhile Eastern Palm University by recent developments has changed to become Kingsley Ozumba (KO) University, Ideato South LGA, Imo State, Nigeria.</p></section>
<section class="about-block"><h2>Mandate</h2><p>The mandate of Kingsley Ozumba Mbadiwe University (KOMU) is, “to encourage the advancement of learning in Imo State in particular and Nigeria in general, to hold out to all persons without the distinction of race, creed or sex and to give them the opportunity of acquiring higher education in various fields of study”.</p></section>
<section class="about-block"><h2>Objectives</h2><p>The specific objectives of the university are to:</p><ol type="a">
<li>Provide a wide range of quality learning opportunities for undergraduate and postgraduate students without distinction of race, creed, sex, religion or political conviction that will enhance their best intellectual, social, economic and personal development;</li>
<li>Provide academic, professional and vocational training of high quality in a way as to enrich and improve the State, National, and International human resource capabilities and assist graduates to contribute to the common good of society;</li>
<li>Foster academic research, which contributes to human knowledge and the vitality of the institution;</li>
<li>Encourage thoughtful and responsible staff and student participation in Local, State, National and International affairs;</li>
<li>Maintain the highest academic standards in respect of University degrees and other awards and preserve and protect their reputation and integrity;</li>
<li>Evolve academic programmes to suit the changing social and economic needs of society through continuous review of curricula and development of new programmes to respond to societal and technological changes in Nigeria and the world in general and Imo State in particular;</li>
<li>Advance human culture and improve human life through the development, refinement and dissemination of knowledge and to prepare competent graduates to meet the development needs of Imo State in particular and Nigeria in general;</li>
<li>Relate its activities to the social, cultural and economic needs of the people of Imo State and Nigeria.</li>
</ol></section>
<section id="about-vision" class="about-block"><h2>Our Vision</h2><p>To be a globally competitive University renowned for innovative research and scholarship, world-class education and excellent human resource development.</p></section>
<section id="about-mission" class="about-block"><h2>Our Mission</h2><p>To make KOMU famous for producing talented men and women with passion and skills to apply knowledge and technology sensibly to solve the problems of the nation and the global community at large.</p><p style="margin-top:14px">At the core of this mission is our firm desire to educate future leaders not just to acquire requisite knowledge and various life survival skills, but leaders with deep passion for humanity in the discharge of their civic responsibilities for the good of society i.e. “developing the complete man – soul, body and divinity”</p></section>
<section class="about-block"><h2>Our Philosophy</h2><p>In KOMU, we are driven by a strong determination to produce scholars who are loaded with the triple capacity for success, global competitiveness and stardom anchored on our core values of integrity, excellence, team work, innovation and collaboration.</p></section>
<section class="about-block"><h2>Our Core Values</h2><p>Our core values to drive our vision and philosophy for the actualization of our mission are anchored on the five [5]-fold spirit of integrity, excellence, team work, innovation and collaboration [IETIC].</p><ul class="core-values">
<li><strong>Integrity:</strong> We shall strive to be honest, respectful, transparent, accountable, fair and equitable in our dealings</li>
<li><strong>Excellence:</strong> We will ensure best practices, adopt meritocracy and apply the highest ethical standards in our activities inclusive of preserving the natural environment</li>
<li><strong>Team work:</strong> We shall work closely and inclusively with each other and one another, communicating openly to achieve common goals</li>
<li><strong>Innovation:</strong> We shall strive to be creative, harnessing our innate transformative energy for the good of the environment and the society in a responsible manner.</li>
<li><strong>Collaboration:</strong> We shall build viable and strong bonds of friendship with similar organizations for mutual benefit.</li>
</ul></section>
<section class="about-block"><h2>Our Mantra</h2><p>Our University working as a Team with One Mission to render Selfless Service to Humanity i.e. KOMU. One Team. One Mission. Selfless Service to Humanity”.</p></section>
<section class="about-block"><h2>Our Motto</h2><p>Selfless Service to Humanity</p></section>
<section class="about-block"><h2>Logo</h2><div class="about-logo">${safeImg('komu-logo-high-res.png',null,'Kingsley Ozumba Mbadiwe University logo')}<div><h3>Photo of the University Logo</h3><p style="margin-top:12px">The Logo is made up of a book, a graduation cap, and the globe with stars dotted around it, all housed by the name of the University. Beneath the name of the University is the Motto. The narrative is that the University as a hub of academic activity uses the book as a tool for learning to produce scholars who become stars around the globe.</p><p style="margin-top:12px">The colours of the University as shown in the Logo are black, blue and golden. Symbolically, the black colour represents the power and authority of Senate as the highest decision-making body to organize and control teaching, promote research as well as admission and discipline of students. The blue colour represents the sky as the limit for our staff and students in their quest for excellence and scholarship. The golden colour represents the wisdom and passion of members of our community in rendering selfless service to humanity.</p></div></div></section>
</div></section>`;}
const staffProfiles=[
 {slug:'vice-chancellor',role:'Vice-Chancellor',name:'Professor Frances Ngozi Chukwukere',photo:'vice-chancellor-frances-chukwukere.jpeg',biographySections:[
  {heading:'Introduction',paragraphs:[
   'Professor Frances Ngozi Chukwukere is the Vice-Chancellor of Kingsley Ozumba Mbadiwe University (KOMU), Ideato, Imo State, Nigeria. She is an accomplished scholar, linguist, author, researcher, administrator, cultural advocate and academic leader whose career spans teaching, research, university administration, mentorship and the preservation and promotion of indigenous language and culture. She is a Professor of Linguistics and Igbo Studies and has distinguished herself nationally and internationally through scholarship and service.'
  ]},
  {heading:'Academic Qualifications',paragraphs:[
   'Professor Chukwukere began her higher education at the University of Nigeria, Nsukka (UNN), where she obtained a Bachelor of Arts degree in Linguistics and Igbo in 1986. She subsequently earned a Postgraduate Diploma in Education in 1989, followed by a Master’s degree in Linguistics and Nigerian Languages, with a focus on Igbo Oral Literature. She later obtained a Doctor of Philosophy (Ph.D.) in Linguistics in 2004, also from the University of Nigeria, Nsukka.',
   'Her multidisciplinary academic development continued at Imo State University, where she earned an M.Sc. in International Affairs and Diplomacy in 2007 and another Ph.D. in History and International Studies in 2021. She has also expanded her research interest into Climate Change Economics, Policy and Innovation at the Institute of Climate Change Studies, University of Nigeria, Nsukka.',
   'She attained the rank of Professor of Linguistics and Igbo in 2010, marking a significant milestone in a distinguished academic career devoted to scholarship, mentorship and institutional development.'
  ]},
  {heading:'Areas of Research Interest and Contributions to Knowledge',paragraphs:[
   'Professor Chukwukere’s research interests span several major areas of linguistics and interdisciplinary scholarship. Her areas of specialization include theoretical linguistics, particularly phonology, morphology, syntax and semantics; and applied and interdisciplinary linguistics, including sociolinguistics, psycholinguistics, historical linguistics and neurolinguistics. Her scholarly interests also extend to discourse analysis, stylistics, translation studies, forensic linguistics and clinical linguistics.',
   'A substantial part of her academic career has been dedicated to Igbo Studies, Igbo Literature, indigenous language preservation, oral literature, culture and identity. Her scholarship has contributed significantly to the teaching, documentation, modernization and preservation of the Igbo language.',
   'She has also made significant contributions to postgraduate training and mentorship. By 2021, records referenced in her citation indicated that she had successfully supervised seventeen Ph.D. graduates, while by 2025 she had produced approximately 45 Ph.D. degree holders in Linguistics and Igbo Studies.',
   'Her scholarly publications include the bilingual poetry collection Nwaanyizie: African Feminist Verses (2006), written in Igbo and English, as well as research in gender, semantics and language. In 2024, she co-authored The National Language Policy and the Demands of Indigenous Language Literacy in Nigeria, addressing indigenous-language literacy, language shift and the preservation of Nigeria’s linguistic heritage.',
   'Professor Chukwukere has equally extended her research interests to the relationship between human wellbeing and the environment. In 2013, she published The Green Pathway to Health and Recovery: Homegrown Options in Third-World Countries, reflecting her advocacy for indigenous approaches to health, environmental sustainability and development.'
  ]},
  {heading:'Professional, Scholarly and International Engagement',paragraphs:[
   'Professor Chukwukere has participated in several national and international academic, linguistic and cultural initiatives. In 2013, she worked with the Igbo community in Canada and contributed to the design of a curriculum for teaching the Igbo language within the Canadian educational system. Her linguistic advocacy has also supported the teaching of Igbo in universities within and outside Nigeria.',
   'In 2015, she participated in an international cultural diplomacy programme in Berlin, where she delivered a lecture titled “Framing the African Dialectics of Health and Environment: Engaging the Youth in Education and Sustainability.”',
   'She is also identified in her citation as a United Nations Certified Translator, reflecting the international dimension of her linguistic and translation expertise.'
  ]},
  {heading:'Administrative Positions and Leadership at the University',paragraphs:[
   'Professor Chukwukere has accumulated extensive administrative and institutional leadership experience throughout her academic career. At Imo State University, she served as:'
  ],list:[
   'Head, Department of Linguistics and Igbo Studies: 2004–2009 and 2015–2020',
   'Director, Centre for Igbo Studies: 2009–2011 and 2021–2025',
   'Director, Joint Universities Preliminary Examinations Board (JUPEB): 2020–2021.'
  ],after:[
   'In 2021, she also took a leave of absence from Imo State University to serve at the National Universities Commission (NUC) as Chief Quality Assurance Officer under the Directorate of the Executive Secretary’s Office.',
   'Professor Chukwukere joined Kingsley Ozumba Mbadiwe University in May 2021 and became the first Dean of the Faculty of Arts, while simultaneously serving as Head of the Department of Linguistics. Under her leadership, the departments within the Faculty of Arts achieved full accreditation within a short period. She also championed the establishment and development of the University’s Department of Philosophy.',
   'She was also one of the three members of the committee that prepared the position paper for the establishment of the State-owned university that became Kingsley Ozumba Mbadiwe University, Ideato.',
   'Professor Frances Ngozi Chukwukere now serves as the Vice-Chancellor of Kingsley Ozumba Mbadiwe University, bringing to the position decades of experience in scholarship, research, academic leadership, administration, mentorship and institutional development.'
  ]},
  {heading:'Academic Honours, Recognitions and Awards',paragraphs:[
   'Professor Chukwukere’s contributions to language, culture, scholarship and environmental advocacy have attracted notable national and international recognition.',
   'Between 2011 and 2015, she received two international awards in Chicago and Miami from the Climate Reality Project, in recognition of her advocacy concerning the relationship between human health and environmental health.',
   'In March 2026, Ohanaeze Ndigbo Worldwide selected her as one of four distinguished professors for its Professorial Endowment Chair Initiative, established to advance scholarship and safeguard the future of the Igbo language.',
   'In June 2026, she represented the President-General of Ohanaeze Ndigbo Worldwide at the 12th Chief Dr. F. C. Ogbalu Memorial Lecture held at Nnamdi Azikiwe University, Awka, further affirming her standing as a leading intellectual voice in Igbo language, culture and identity.',
   'She also holds the prestigious title of Ambassador of Urualla Clan Assembly, conferred on her by her community in 2021.'
  ]},
  {heading:'Community Service and Cultural Development',paragraphs:[
   'Professor Chukwukere’s contributions extend beyond conventional academic scholarship. She founded the Igbo Development Foundation for Peace, Language and Culture (ÌGBÒFỌ), an organisation committed to the promotion and internationalization of the Igbo language and culture. Through the organisation, she has contributed expertise and manpower towards Igbo-language teaching in several universities in Nigeria and beyond.',
   'She also established The Green Pathway Initiative, through which she advocates indigenous lifestyles, environmental responsibility, human wellbeing and sustainable development.',
   'Her longstanding work in the documentation, translation, preservation and promotion of Igbo oral literature and indigenous knowledge has contributed to safeguarding important aspects of Nigeria’s linguistic and cultural heritage for future generations.'
  ]},
  {heading:'Personal and Leadership Profile',paragraphs:[
   'Professor Frances Ngozi Chukwukere is described as a dedicated wife, mother, grandmother and community leader. Professionally, she represents a distinctive combination of educator, researcher, author, mentor, administrator, indigenous scholar, international scholar and custodian of language and culture.'
  ]}
 ]},
 {slug:'deputy-vice-chancellor',role:'Deputy Vice-Chancellor'},
 {slug:'registrar',role:'Registrar'},
 {slug:'university-librarian',role:'University Librarian'},
 {slug:'bursar',role:'Bursar'}
];
const demoLecturerProfiles=['lecturer-a','lecturer-b','lecturer-c','assigned-supervisor'].map((slug,index)=>({slug,role:'Illustrative lecturer profile',name:['Lecturer A','Lecturer B','Lecturer C','Assigned Supervisor'][index],placeholder:true}));
function staffProfilePage(slug,category=''){
 let profile;
 if(category==='faculty'){
  const faculty=faculties.find(name=>slugFor(name)===slug);
  if(faculty){const role=`Dean, ${faculty}`,record=getLeadershipRecord(slug,role);profile={name:record.fullName||`${role} name pending verification`,role:record.designation||role,photoUrl:record.photoUrl,welcomeMessage:record.welcomeMessage};}
 }else if(category==='department'){
  const department=departments.find(item=>slugFor(item.name)===slug);
  if(department){const role=`Head of Department, ${department.name}`,record=getLeadershipRecord(slug,role);profile={name:record.fullName||`${role} name pending verification`,role:record.designation||role,photoUrl:record.photoUrl,welcomeMessage:record.welcomeMessage};}
 }
 if(!profile)profile=staffProfiles.find(item=>item.slug===slug)||demoLecturerProfiles.find(item=>item.slug===slug);
 if(!profile)return pageHero('Staff profile','Profile not found','Choose a staff profile from University Administration.','About Us / University Administration');
 const name=profile.name||profile.role,role=esc(profile.role),safeName=esc(name),photo=profile.photoUrl|| (profile.photo?`${A}${profile.photo}`:''),heading=category==='faculty'?'The Dean':category==='department'?'The Head of Department':profile.role==='Illustrative lecturer profile'?'Academic Staff Profile':`The ${profile.role}`;
 const portrait=photo?`<img src="${esc(photo)}" alt="Photograph of ${safeName}" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="staff-portrait-placeholder" hidden>${svgIcon('user')}<span>Photograph unavailable</span></span>`:`<span class="staff-portrait-placeholder">${svgIcon('user')}<span>Official photograph pending</span></span>`;
 const biography=profile.biographySections?profile.biographySections.map(section=>`<section class="staff-bio-section"><h4>${esc(section.heading)}</h4>${section.paragraphs.map(paragraph=>`<p>${esc(paragraph)}</p>`).join('')}${section.list?`<ul>${section.list.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`:''}${section.after?section.after.map(paragraph=>`<p>${esc(paragraph)}</p>`).join(''):''}</section>`).join(''):typeof profile.biography==='string'&&profile.biography.trim()?profile.biography.trim().split(/\n\s*\n/).map(paragraph=>`<p>${esc(paragraph)}</p>`).join(''):`<p class="staff-bio-pending">${profile.placeholder?'This is an illustrative staff profile. Add the approved staff biography and photograph before publication.':'The approved biography for this staff member will be added here.'}</p>`;
 return `<section class="staff-profile-page"><div class="container"><nav class="breadcrumbs" aria-label="Breadcrumb">${breadcrumbTrail('About Us / University Administration',name)}</nav><h1 class="staff-profile-page-title">${esc(heading)}</h1>
<article class="staff-profile-layout"><figure class="staff-portrait">${portrait}<figcaption><strong>${safeName}</strong><span>${role}</span></figcaption></figure>
<div class="staff-profile-copy"><h2>${safeName}</h2><h3>PROFILE</h3>${biography}${profile.welcomeMessage?`<h3 class="staff-profile-subheading">WELCOME MESSAGE</h3><p>${esc(profile.welcomeMessage)}</p>`:''}<a class="text-link staff-profile-back" href="#/administration">← Back to University Administration</a></div></article></div></section>`;
}
function staffDirectoryPage(category){const academic=category==='academic';const title=academic?'Academic Staff':'Non-Academic Staff';return `${pageHero('University Administration',title,academic?'Meet KOMU lecturers and researchers across the faculties and departments.':'Meet KOMU administrative, technical and support staff.','About Us / University Administration')}
<section class="page-body"><div class="container"><div class="warning"><strong>Staff profiles:</strong> Individual staff names and biographies will be published here when the approved directory information is available.</div><p style="margin-top:20px">Staff profiles will open on this website. This directory does not send visitors to the external university portal to retrieve staff information.</p><a class="text-link" href="#/administration" style="display:inline-block;margin-top:20px">← Back to University Administration</a></div></section>`;}
function administrationPage(){return `${pageHero('Governance & leadership','University Administration','Explore the University’s principal officers and staff profiles.','About Us / University Administration')}
<section class="page-body"><div class="container">${heading('University leadership','Principal Officers','Select an officer to open their profile on this website.')}
<div class="cards3">${staffProfiles.map(profile=>`<a class="paper-card staff-profile-card" href="#/staff-profile/${profile.slug}"><span class="avatar">${svgIcon('user')}</span><h3 style="margin:18px 0 10px">${profile.name||profile.role}</h3><p>${profile.role}</p><span class="text-link" style="display:block;margin-top:18px">View ${profile.role} profile →</span></a>`).join('')}</div>
<div style="margin-top:56px">${heading('Our people','Academic & Non-Academic Staff','Explore local staff directories and select a profile to read a biography.')}<div class="mini-sections two"><a class="paper-card staff-profile-card" href="#/staff/academic"><span class="icon-box">${svgIcon('academics')}</span><h3 style="margin-top:14px">Academic Staff</h3><p>Lecturers and researchers across the faculties and departments.</p><span class="text-link" style="display:block;margin-top:12px">Explore Academic Staff →</span></a><a class="paper-card staff-profile-card" href="#/staff/non-academic"><span class="icon-box">${svgIcon('about')}</span><h3 style="margin-top:14px">Non-Academic Staff</h3><p>Administrative, technical and support staff across the university.</p><span class="text-link" style="display:block;margin-top:12px">Explore Non-Academic Staff →</span></a></div></div>
<div class="paper-card" style="margin-top:30px"><h3>Administrative Units</h3><p>Registry, Bursary, Library, directorates and support units will be listed here once the approved structure is supplied.</p></div></div></section>`;}
function mediaPage(){return `${pageHero('KOMU communications','University Media','University news, announcements, upcoming events, photographs and video stories from the KOMU community.','Media')}
<section class="page-body"><div class="container">
 <div class="section-head"><div><div class="eyebrow">From the University</div><h2>Latest Releases</h2><p>Browse news, announcements and upcoming events, or open Gallery to explore photos and videos.</p></div><a class="button button-outline" href="#/news">All News & Events →</a></div>
 <div class="media-feature-grid">
  ${news.slice(0,3).map(item=>`<article class="media-feature-card">${safeImg(item.photo,item.remote||null,item.title)}<div><span class="pill">${esc(item.tag)}</span><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p><a class="text-link" href="${esc(item.url)}" ${linkAttrs(item.url)} style="display:block;margin-top:14px">Read ${isExternal(item.url)?'official release':'story'} ↗</a></div></article>`).join('')}
 </div>
 <div class="media-quick-links"><a href="#/media/gallery"><span class="icon-box">${svgIcon('about')}</span><span><b>Gallery</b><small>Explore campus photos and university videos</small></span><strong>→</strong></a><a href="#/news"><span class="icon-box">${svgIcon('news')}</span><span><b>News & Events</b><small>News, announcements and upcoming programme events</small></span><strong>→</strong></a></div>
 </div></section>`;}
function renderNewsEntry(item){
 if(item.type==='upcoming')return `<article class="media-release upcoming-event"><div class="upcoming-event-poster">${safeImg(item.photo,null,item.title)}</div><div><span class="pill pill-gold">${esc(item.tag)}</span><p class="media-release-date">${esc(item.date)} · ${esc(item.time)}</p><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p><p class="event-context">The forthcoming event will recognise Dr. Emeka, who also serves as President and Founder of Microife Advocates (MLA), and highlight his contributions to scholarship, academic development and professional service. The Special Citation provides an opportunity for the University community to celebrate academic excellence, intellectual contributions and dedicated service to higher education.</p><dl class="event-facts"><dt>Event</dt><dd>Special Citation</dd><dt>Honouree</dt><dd>${esc(item.honouree)}</dd><dt>Venue</dt><dd>${esc(item.venue)}</dd></dl><details class="event-full-details"><summary>Read full event announcement</summary><div><p>${esc(item.invitation)}</p><p>${esc(item.closing)}</p><p class="event-signoff"><strong>Kingsley Ozumba Mbadiwe University</strong> — Advancing Knowledge, Inspiring Excellence.</p></div></details></div></article>`;
 return `<article class="media-release"><div class="news-item-image">${safeImg(item.photo,item.remote||null,item.title)}</div><div><span class="pill">${esc(item.type==='announcement'?'Announcement':item.tag)}</span><p class="media-release-date">${esc(item.date)}</p><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p>${isExternal(item.url)?`<a href="${esc(item.url)}" ${linkAttrs(item.url)} class="text-link" style="display:block;margin-top:13px">Read official release ↗</a>`:`<a href="${esc(item.url)}" class="text-link" style="display:block;margin-top:13px">Read full story →</a>`}</div></article>`;
}
function renderNewsEntries(filter='all'){
 const entries=[...upcomingEvents,...news.filter(item=>item.type==='news'||item.type==='announcement')];
 const filtered=filter==='all'?entries:entries.filter(item=>item.type===filter);
 return filtered.length?filtered.map(renderNewsEntry).join(''):'<p class="empty">There are no items in this category right now.</p>';
}
function newsPage(){return `${pageHero('KOMU Updates','News & Events','University news, official announcements and upcoming programme events in one place.','Media / News & Events')}
<section class="page-body"><div class="container"><div class="section-head"><div><div class="eyebrow">KOMU updates</div><h2>News, Announcements & Upcoming Events</h2><p>News covers university happenings and past activities. Announcements share official notices, while upcoming events provide advance programme details.</p></div><button class="button button-outline" id="openEditor" type="button">⚙ Featured Editor (Demo)</button></div>
<div class="news-category-filters" role="group" aria-label="Filter news and events">${[['all','All'],['news','News'],['announcement','Announcements'],['upcoming','Upcoming Events']].map(([filter,label])=>`<button type="button" class="news-category-filter ${filter==='all'?'active':''}" data-news-filter="${filter}" aria-pressed="${filter==='all'}">${label}</button>`).join('')}</div>
<div class="media-release-list" id="newsEventList">${renderNewsEntries()}</div></div></section>`;}
const galleryCategories=['All','HM','Programmes','Events','Courtesy Visit'];
const galleryItems=[
 {title:'KOMU Aerial Campus View',category:'HM',image:'campus-aerial-crop.jpg',alt:'Aerial view of the KOMU campus'},
 {title:'KOMU Administration Building',category:'HM',image:'administration-building.jpg',alt:'KOMU administration building'},
 {title:'Vice-Chancellor Professor Frances Chukwukere',category:'HM',image:'news-vc-crop.jpg',alt:'KOMU Vice-Chancellor Professor Frances Chukwukere'},
 {title:'2026/2027 Supplementary Screening',category:'Programmes',image:'news-supplementary-screening.png',alt:'KOMU 2026/2027 supplementary screening announcement',fit:'contain'},
 {title:'2026/2027 Post-UTME Screening',category:'Programmes',image:'news-admission-crop.jpg',alt:'KOMU 2026/2027 Post-UTME screening announcement',fit:'contain'},
 {title:'Special Citation in Honour of Dr. Obiukwu Charles Emeka',category:'Events',image:'komu-special-citation-event.png',alt:'Poster for the Special Citation in honour of Dr. Obiukwu Charles Emeka',fit:'contain'},
 {title:'KOMU Blended Learning',category:'Events',image:'news-learning-crop.jpg',alt:'KOMU blended learning activities'},
 {title:'Professor Ikechukwu N. S. Dozie',category:'HM',image:'news-futo-appointment.jpg',alt:'Professor Ikechukwu N. S. Dozie'},
 {title:'Discover KOMU',category:'HM',video:'approved-komu-hero.mp4',poster:'hero-poster.jpg',alt:'KOMU campus introduction video'}
];
function mediaGalleryPage(){return `${pageHero('KOMU Media','Gallery','Explore KOMU photographs and videos together, organised by the title and category of each university moment.','Media / Gallery')}
<section class="page-body"><div class="container"><div class="gallery-filters" role="group" aria-label="Filter gallery by category">${galleryCategories.map((category,index)=>`<button type="button" class="gallery-filter${index===0?' active':''}" data-gallery-filter="${esc(category)}" aria-pressed="${index===0}">${esc(category)}</button>`).join('')}</div><div class="media-photo-grid gallery-grid" id="galleryGrid">${renderGalleryItems()}</div></div></section>`;}
function renderGalleryItems(category='All'){const items=category==='All'?galleryItems:galleryItems.filter(item=>item.category===category);if(!items.length)return `<p class="gallery-empty">There are no gallery items in ${esc(category)} yet.</p>`;return items.map(item=>`<figure class="gallery-item"><div class="gallery-item-media">${item.video?`<video class="media-photo gallery-video" controls preload="none" poster="${A}${esc(item.poster)}" aria-label="${esc(item.alt)}"><source src="${A}${esc(item.video)}" type="video/mp4">Your browser does not support the video element.</video>`:`<button class="gallery-image-button" type="button" data-gallery-image="${esc(item.image)}" data-gallery-alt="${esc(item.alt)}" aria-label="View ${esc(item.title)}">${safeImg(item.image,null,item.alt,`media-photo${item.fit==='contain'?' gallery-graphic':''}`)}</button>`}</div><figcaption><span class="gallery-item-category">${esc(item.category)}</span><strong>${esc(item.title)}</strong></figcaption></figure>`).join('');}
function setupGallery(){const grid=$('#galleryGrid');if(!grid)return;$$('[data-gallery-filter]').forEach(button=>button.addEventListener('click',()=>{$$('[data-gallery-filter]').forEach(filter=>{const active=filter===button;filter.classList.toggle('active',active);filter.setAttribute('aria-pressed',String(active));});grid.innerHTML=renderGalleryItems(button.dataset.galleryFilter);wireGalleryImages();}));wireGalleryImages();}
function wireGalleryImages(){$$('[data-gallery-image]').forEach(button=>button.addEventListener('click',()=>{const image=button.dataset.galleryImage,alt=button.dataset.galleryAlt;openModal(esc(alt),`<img class="gallery-lightbox-image" src="${A}${esc(image)}" alt="${esc(alt)}">`);}));}
function contactPage(){return `${pageHero('Get in touch','Contact KOMU','Reach the university through its official channels.','Contact')}
<section class="page-body"><div class="container"><div class="warning"><strong>Contact details are taken from the existing KOMU website</strong> and should be confirmed by the university before launch.</div>
<div class="cards3" style="margin-top:28px"><div class="paper-card" style="margin:0"><span class="icon-box" style="--ic:#ef6a5b">${svgIcon('contact')}</span><h3 style="margin:16px 0 8px">Phone</h3><p><a class="text-link" href="tel:+2348175388217">+234 817 538 8217</a></p></div><div class="paper-card" style="margin:0"><span class="icon-box" style="--ic:#14b8a6">${svgIcon('about')}</span><h3 style="margin:16px 0 8px">Address</h3><p>Kingsley Ozumba Mbadiwe University<br>Ideato, Imo State, Nigeria</p></div><div class="paper-card" style="margin:0"><span class="icon-box" style="--ic:#0b94cb">${svgIcon('portal')}</span><h3 style="margin:16px 0 8px">Official contact page</h3><p><a class="text-link" href="${URLS.contact}" target="_blank" rel="noopener">komu.edu.ng/contact-us ↗</a></p></div></div>
<div style="margin-top:44px">${heading('Who to ask','Find the right office','')}<div class="mini-sections">${[['Admission enquiries','Screening, admission status and programme requirements.','#/admissions','Admissions pathways →'],['Portal assistance','Login and account issues are handled in the existing Student and Staff Portals.','#/services','Academic portal →'],['Departmental enquiries','Academic questions go to the relevant faculty or department.','#/faculties','Faculties & departments →']].map(x=>`<div><h3>${x[0]}</h3><p>${x[1]}</p><a class="text-link" style="display:block;margin-top:12px" href="${x[2]}">${x[3]}</a></div>`).join('')}</div></div></div></section>`;}
function route(){const path=decodeURIComponent(location.hash.replace(/^#\/?/,'')||'');
 stopHero();stopNewsCarousel();
 siteHeader(); siteFooter();
 let html='';
 const facultyRoute=path.match(/^faculty\/([a-z0-9-]+)$/);
 const programmeRoute=path.match(/^(?:programme|department)\/([a-z0-9-]+)$/);
 const staffProfileRoute=path.match(/^staff-profile\/(?:(faculty|department)\/)?([a-z0-9-]+)$/);
 const staffDirectoryRoute=path.match(/^staff\/(academic|non-academic)$/);
 if(facultyRoute)html=facultyDetailPage(facultyRoute[1]);
 else if(programmeRoute)html=programmePage(programmeRoute[1]);
 else if(staffProfileRoute)html=staffProfilePage(staffProfileRoute[2],staffProfileRoute[1]);
 else if(staffDirectoryRoute)html=staffDirectoryPage(staffDirectoryRoute[1]);
 else switch(path){case '':case '/':html=home();break;case 'services':html=servicesPage();break;case 'admissions':html=admissionsPage();break;case 'undergraduate-admissions':html=undergraduateAdmissionsPage();break;case 'admission-lists':html=admissionListsPage();break;case 'programmes':html=programmesPage();break;case 'faculties':html=facultyPage();break;case 'campus':html=campusPage();break;case 'research':html=researchPage();break;case 'about':html=aboutPage();break;case 'administration':html=administrationPage();break;case 'media':html=mediaPage();break;case 'media/gallery':case 'media/photos':case 'media/videos':html=mediaGalleryPage();break;case 'news':html=newsPage();break;case 'documents':html=documentsPage();break;case 'graduates':html=graduatesPage();break;case 'help':html=helpPage();break;case 'contact':html=contactPage();break;default:html=pageHero('Page not found','We could not find this page','Choose another page using the university navigation.');}
 document.body.classList.toggle('home-page',!path||path==='/');onScrollHeader();
 $('#main').innerHTML=html;$('#dialogRoot').innerHTML='';window.scrollTo(0,0);
 if(!path||path==='/'){setupHero();setupHomeNewsCarousel();}
 if(path==='services')setupServices();
 if(path==='programmes')setupFinder();
 if(programmeRoute)setupProgramme();
 if(path==='news'){setupNewsEditor();setupNewsCategories();}
 if(path.startsWith('media/gallery')||path==='media/photos'||path==='media/videos')setupGallery();
 setupLeadershipEditors();
 document.title=(path?path.split('/').slice(-1)[0].replace(/-/g,' ')+' | ':'')+'KOMU — University Website Redesign Preview';
}
function setupServices(){const input=$('#serviceSearch');input.addEventListener('input',()=>{$('#serviceGrid').innerHTML=services.filter(s=>(s.name+' '+s.desc).toLowerCase().includes(input.value.toLowerCase())).map(serviceCard).join('')||'<p class="empty">No services match your search.</p>';});}
function setupFinder(){let input=$('#programmeSearch'),select=$('#facultyFilter'),target=$('#programmeResults');function render(){const q=input.value.trim().toLowerCase();const f=select.value;const arr=departments.filter(x=>(x.name.toLowerCase().includes(q)||x.faculty.toLowerCase().includes(q))&&(!f||x.faculty===f));target.innerHTML=arr.map(x=>`<article class="result-card"><div class="tag-row"><span class="tag">${esc(x.faculty)}</span><span class="tag">${x.programme.minimumJambScore?`Minimum JAMB score ${x.programme.minimumJambScore}`:'JAMB score not specified'}</span></div><h3>${esc(x.name)}</h3><p>View the programme profile for its UTME subject combination and O’Level requirements.</p><a class="button button-primary button-sm" href="#/programme/${slugFor(x.name)}">View Programme Requirements →</a></article>`).join('')||'<div class="empty">No programme in the supplied KOMU 2026/2027 reference matches this search.</div>';}
input.addEventListener('input',render);select.addEventListener('change',render);render();}
function setupProgramme(){$$('[data-ptab]').forEach(b=>b.addEventListener('click',()=>{programmeTab=b.dataset.ptab;$$('[data-ptab]').forEach(x=>{x.classList.toggle('active',x.dataset.ptab===programmeTab);x.setAttribute('aria-selected',String(x.dataset.ptab===programmeTab));});$('#programmeContent').innerHTML=renderProgrammeTab();wireProgrammeContent();}));wireProgrammeContent();}
function wireProgrammeContent(){ $$('[data-level]').forEach(b=>b.addEventListener('click',()=>{programmeLevel=b.dataset.level;$('#programmeContent').innerHTML=renderProgrammeTab();wireProgrammeContent();}));$$('[data-sem]').forEach(b=>b.addEventListener('click',()=>{programmeSemester=Number(b.dataset.sem);$('#programmeContent').innerHTML=renderProgrammeTab();wireProgrammeContent();}));$$('[data-course]').forEach(b=>b.addEventListener('click',()=>openCourse(b.dataset.course)));}
function openModal(title,body){const root=$('#dialogRoot');root.innerHTML=`<div class="dialog-backdrop" id="modalBackdrop"><div role="dialog" aria-modal="true" aria-labelledby="modalTitle" class="modal"><div class="modal-header"><h2 id="modalTitle" style="font-size:1.65rem">${title}</h2><button class="modal-close" id="closeModal" aria-label="Close dialog">×</button></div><div style="margin-top:18px">${body}</div></div></div>`;$('#closeModal').focus();$('#closeModal').addEventListener('click',()=>root.innerHTML='');$('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')root.innerHTML='';});}
function openCourse(code){const row=Object.values(demoCurriculum).flat(2).find(x=>x[0]===code);if(!row)return;openModal(`${esc(row[0])} — ${esc(row[1])}`,`<div class="warning">Illustrative course record — not verified by KOMU.</div><div class="tag-row" style="margin:17px 0"><span class="tag">Units: ${row[2]} (sample)</span><span class="tag">${row[3]} (sample)</span><span class="tag">Lecturer: ${row[4]} (placeholder)</span></div><h3>Course Description</h3><p>A verified departmental description will explain the academic scope and expected knowledge for this course.</p><h3 style="margin-top:21px">Learning Outcomes</h3><ul class="lines"><li>Describe the principal concepts and theories.</li><li>Apply appropriate academic and research methods.</li><li>Demonstrate ethical and professional understanding.</li></ul><h3 style="margin-top:19px">Syllabus, Reading & Assessment</h3><p>Official week-by-week topics, reference materials, prerequisite information and published assessment structure will appear following verification.</p>`);}
function showToast(msg){const t=$('#toast');t.textContent=msg;t.style.display='block';clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.style.display='none',2800);}
function setupNewsEditor(){const b=$('#openEditor');if(!b)return;b.addEventListener('click',()=>{const active=getFeaturedIds();const content=`<div class="warning"><strong>Editor demonstration only:</strong> These selections are saved to this browser’s localStorage, not to the actual KOMU website. A production CMS must use authenticated roles and approved editorial workflows.</div><div class="editor-list">${news.map(n=>`<label class="editor-item"><input type="checkbox" value="${n.id}" ${active.includes(n.id)?'checked':''} class="featured-choice"><span><b>${n.title}</b><br><span class="muted">${n.tag} · ${n.date}</span></span></label>`).join('')}</div><button class="button button-primary" id="saveFeatured" style="margin-top:19px">Save Demo Selections</button>`;openModal('Featured Homepage News — Demo',content);$('#saveFeatured').addEventListener('click',()=>{const ids=$$('.featured-choice:checked').map(x=>x.value);localStorage.setItem('komu-featured-demo',JSON.stringify(ids));$('#dialogRoot').innerHTML='';showToast('Saved locally. Return to Home to preview.');});});}
function setupNewsCategories(){$$('[data-news-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.newsFilter;$$('[data-news-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});$('#newsEventList').innerHTML=renderNewsEntries(filter);}));}
const NEWS_ROTATION_MS=3000;
let newsCarouselTimer=null,newsCarouselTransitionTimer=null,newsCarouselObserver=null,newsCarouselMotionPreference=null,newsCarouselMotionHandler=null,newsCarouselDeadline=0,newsCarouselRemaining=NEWS_ROTATION_MS,newsCarouselIndex=0,newsCarouselActive=false,newsCarouselInView=false,newsCarouselBusy=false,newsCarouselHoverPaused=false,newsCarouselFocusPaused=false;
function stopNewsCarouselTimer(preserveTime=false){
 if(newsCarouselTimer&&preserveTime)newsCarouselRemaining=Math.max(0,newsCarouselDeadline-Date.now());
 clearTimeout(newsCarouselTimer);newsCarouselTimer=null;
}
function canRotateNews(){
 return newsCarouselActive&&newsCarouselInView&&!newsCarouselHoverPaused&&!newsCarouselFocusPaused&&!document.hidden&&!reducedMotion()&&$$('.news-carousel-slide').length>1;
}
function syncNewsCarouselTimer(){
 if(!canRotateNews()||newsCarouselBusy){stopNewsCarouselTimer(true);return;}
 if(newsCarouselTimer)return;
 if(newsCarouselRemaining<=0)newsCarouselRemaining=NEWS_ROTATION_MS;
 newsCarouselDeadline=Date.now()+newsCarouselRemaining;
 newsCarouselTimer=setTimeout(()=>{newsCarouselTimer=null;newsCarouselRemaining=NEWS_ROTATION_MS;showNewsCarouselSlide(1);},newsCarouselRemaining);
}
function showNewsCarouselSlide(direction){
 const carousel=$('#homeNewsCarousel'),slides=$$('.news-carousel-slide',carousel||document);
 if(!carousel||slides.length<2||newsCarouselBusy)return;
 stopNewsCarouselTimer();newsCarouselRemaining=NEWS_ROTATION_MS;
 const nextIndex=(newsCarouselIndex+direction+slides.length)%slides.length;
 if(nextIndex===newsCarouselIndex){syncNewsCarouselTimer();return;}
 const outgoing=slides[newsCarouselIndex],incoming=slides[nextIndex];
 newsCarouselBusy=true;
 outgoing.classList.remove('is-active');
 outgoing.classList.add('is-leaving-up');
 outgoing.setAttribute('aria-hidden','true');outgoing.inert=true;
 incoming.classList.add('is-entering-from-bottom');
 incoming.setAttribute('aria-hidden','false');incoming.inert=false;
 newsCarouselIndex=nextIndex;
 void incoming.offsetHeight;
 requestAnimationFrame(()=>{incoming.classList.remove('is-entering-from-bottom');incoming.classList.add('is-active');});
 const finish=()=>{
  if(!newsCarouselBusy)return;
  clearTimeout(newsCarouselTransitionTimer);newsCarouselTransitionTimer=null;
  outgoing.classList.remove('is-leaving-up','is-leaving-down');
  newsCarouselBusy=false;syncNewsCarouselTimer();
 };
 incoming.addEventListener('transitionend',event=>{if(event.target===incoming&&event.propertyName==='transform')finish();},{once:true});
 newsCarouselTransitionTimer=setTimeout(finish,reducedMotion()?80:950);
}
function setupHomeNewsCarousel(){
 const carousel=$('#homeNewsCarousel');
 if(!carousel)return;
 newsCarouselActive=true;newsCarouselInView=false;newsCarouselIndex=0;newsCarouselBusy=false;newsCarouselHoverPaused=false;newsCarouselFocusPaused=false;newsCarouselRemaining=NEWS_ROTATION_MS;
 const slides=$$('.news-carousel-slide',carousel);
 slides.forEach((slide,index)=>{slide.setAttribute('aria-hidden',String(index!==0));slide.inert=index!==0;});
 if(slides.length<2)return;
 const backToTop=$('#backToTop');
 backToTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:reducedMotion()?'auto':'smooth'}));
 carousel.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'||event.pointerType==='pen'){newsCarouselHoverPaused=true;syncNewsCarouselTimer();}});
 carousel.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse'||event.pointerType==='pen'){newsCarouselHoverPaused=false;syncNewsCarouselTimer();}});
 carousel.addEventListener('focusin',event=>{if(event.target.closest('.news-carousel-slide')){newsCarouselFocusPaused=true;syncNewsCarouselTimer();}});
 carousel.addEventListener('focusout',event=>{if(event.target.closest('.news-carousel-slide'))requestAnimationFrame(()=>{newsCarouselFocusPaused=Boolean(carousel.querySelector('.news-carousel-slide.is-active')?.contains(document.activeElement));syncNewsCarouselTimer();});});
 newsCarouselMotionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
 newsCarouselMotionHandler=()=>syncNewsCarouselTimer();
 newsCarouselMotionPreference.addEventListener('change',newsCarouselMotionHandler);
 if('IntersectionObserver'in window){newsCarouselObserver=new IntersectionObserver(entries=>{newsCarouselInView=entries.some(entry=>entry.isIntersecting);syncNewsCarouselTimer();},{threshold:.15});newsCarouselObserver.observe(carousel);}
 else{newsCarouselInView=true;}
 syncNewsCarouselTimer();
}
function stopNewsCarousel(){
 stopNewsCarouselTimer();clearTimeout(newsCarouselTransitionTimer);newsCarouselTransitionTimer=null;if(newsCarouselObserver){newsCarouselObserver.disconnect();newsCarouselObserver=null;}if(newsCarouselMotionPreference&&newsCarouselMotionHandler)newsCarouselMotionPreference.removeEventListener('change',newsCarouselMotionHandler);newsCarouselMotionPreference=null;newsCarouselMotionHandler=null;newsCarouselActive=false;newsCarouselInView=false;newsCarouselBusy=false;
}
const HERO_MS=10000;
let heroTimer=null,heroDeadline=0,heroRemaining=HERO_MS,heroIdx=0,heroPaused=false,heroHidden=false,heroActive=false,heroSlides=[];
const reducedMotion=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function stopHero(){clearTimeout(heroTimer);heroTimer=null;heroActive=false;}
function heroVideoEl(){return document.querySelector('#slideLayer .hero-slide.current video');}
function scheduleNext(ms){clearTimeout(heroTimer);heroTimer=null;if(heroSlides.length<=1)return;heroRemaining=ms;heroDeadline=Date.now()+ms;heroTimer=setTimeout(()=>changeSlide(1),ms);}
function haltTimer(){if(heroTimer){heroRemaining=Math.max(250,heroDeadline-Date.now());}clearTimeout(heroTimer);heroTimer=null;}
function setRunning(){const v=heroVideoEl();const run=!heroPaused&&!heroHidden;const hero=$('#heroNews');if(hero)hero.classList.toggle('paused',!run);if(run){scheduleNext(heroRemaining);if(v&&!reducedMotion()&&!v.ended)v.play().catch(()=>{});}else{haltTimer();if(v)v.pause();}}
function setupHero(){
 /* The campus intro video is slide 1 of the rotation; featured news follows, then the loop returns to the video. */
 heroSlides=[{type:'intro'}].concat(getFeaturedIds().map(id=>news.find(x=>x.id===id)).filter(Boolean));
 heroIdx=0;heroPaused=false;heroHidden=document.hidden;heroActive=true;heroRemaining=HERO_MS;
 $('#heroPrev').addEventListener('click',()=>changeSlide(-1));
 $('#heroNext').addEventListener('click',()=>changeSlide(1));
 $('#heroPause').addEventListener('click',togglePause);
 renderSlide(heroSlides[0],false);setupHeroSwipe();setupHeroWater();setRunning();}
function setupHeroSwipe(){
 const hero=$('#heroNews');
 if(!hero)return;
 let start=null,suppressClickUntil=0;
 hero.addEventListener('pointerdown',event=>{
  if(event.pointerType!=='touch'||!event.isPrimary)return;
  start={x:event.clientX,y:event.clientY,target:event.target};
 });
 hero.addEventListener('pointerup',event=>{
  if(!start)return;
  const deltaX=event.clientX-start.x,deltaY=event.clientY-start.y;
  const swiped=Math.abs(deltaX)>=48&&Math.abs(deltaX)>Math.abs(deltaY)*1.25;
  if(swiped){
   if(start.target.closest('a,button'))suppressClickUntil=performance.now()+450;
   changeSlide(deltaX<0?1:-1);
  }
  start=null;
 });
 hero.addEventListener('pointercancel',()=>{start=null;});
 hero.addEventListener('click',event=>{
  if(performance.now()>suppressClickUntil)return;
  event.preventDefault();
  event.stopImmediatePropagation();
  suppressClickUntil=0;
 },true);
}
function setupHeroWater(){
 const hero=$('#heroNews'),layer=$('#heroWater');
 if(!hero||!layer||reducedMotion()||!window.matchMedia('(hover: hover) and (pointer: fine)').matches)return;
 let lastRipple=0;
 hero.addEventListener('pointermove',event=>{
  if(event.pointerType!=='mouse')return;
  const now=performance.now();
  if(now-lastRipple<520)return;
  lastRipple=now;
  const bounds=hero.getBoundingClientRect(),ripple=document.createElement('span');
  ripple.className='water-ripple';
  ripple.style.left=`${event.clientX-bounds.left}px`;
  ripple.style.top=`${event.clientY-bounds.top}px`;
  layer.appendChild(ripple);
  ripple.addEventListener('animationend',()=>ripple.remove(),{once:true});
 });
}
function slideHtml(n){
 if(n.type==='intro')return `<div class="hero-slide hero-slide-video"><video class="slide-video" autoplay muted playsinline preload="auto" ${heroSlides.length<=1?'loop':''} poster="${A}hero-poster.jpg" aria-label="KOMU Senate Building with K.O.M.U lettering descending behind its roofline"><source src="${A}approved-komu-hero.mp4" type="video/mp4"></video></div>`;
 return `<div class="hero-slide"><img class="slide-photo" src="${n.remote||A+n.photo}" alt="${esc(n.title)}" ${n.remote?`onerror="this.onerror=null;this.src='${A+n.photo}'"`:''}><div class="slide-shade"></div><div class="slide-body"><span class="pill tag">${n.tag}</span><h1>${n.title}</h1><p>${n.summary}</p><a class="button button-white" href="${n.url}" ${linkAttrs(n.url)}>${isExternal(n.url)?'Read Official Story':'Explore KOMU'} <span>↗</span></a></div></div>`;}
function renderSlide(n,animated=true){const layer=$('#slideLayer');if(!layer)return;const olds=Array.from(layer.querySelectorAll('.hero-slide'));const div=document.createElement('div');div.innerHTML=slideHtml(n);const fresh=div.firstElementChild;layer.appendChild(fresh);
 if(!animated){fresh.classList.add('current');olds.forEach(x=>x.remove());}else{void fresh.offsetWidth;fresh.classList.add('current');olds.forEach(x=>{const v=x.querySelector('video');if(v)v.pause();x.classList.remove('current');x.classList.add('exit');setTimeout(()=>x.remove(),950);});}
 const v=fresh.querySelector('video');if(v&&!reducedMotion()&&!heroPaused&&!heroHidden)v.play().catch(()=>{});
 renderProgress();}
function renderProgress(){const el=$('#slideProgress');if(!el)return;el.innerHTML=heroSlides.map((n,i)=>`<span class="progress-segment ${i<heroIdx?'past':''} ${i===heroIdx?'active':''}" aria-label="${i+1} of ${heroSlides.length}"><i></i></span>`).join('');}
function changeSlide(direction){if(!heroActive||!heroSlides.length)return;heroIdx=(heroIdx+direction+heroSlides.length)%heroSlides.length;renderSlide(heroSlides[heroIdx],true);heroRemaining=HERO_MS;if(!heroPaused&&!heroHidden)scheduleNext(HERO_MS);}
function togglePause(){heroPaused=!heroPaused;$('#heroPause').textContent=heroPaused?'▶':'Ⅱ';$('#heroPause').setAttribute('aria-label',heroPaused?'Resume slideshow':'Pause slideshow');setRunning();}
window.addEventListener('hashchange',route);
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#dialogRoot'))$('#dialogRoot').innerHTML='';});
document.addEventListener('visibilitychange',()=>{if(heroActive){heroHidden=document.hidden;setRunning();}syncNewsCarouselTimer();});
function onScrollHeader(){document.body.classList.toggle('scrolled',window.scrollY>40);document.body.classList.toggle('show-back-to-top',window.scrollY>400);}
window.addEventListener('scroll',onScrollHeader,{passive:true});
route();
