(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const yt={center:[0,0,0],axis:[.62,-.5,.6],length:100,radius:44,maxAt:.28,tMin:-.16,apRatio:.84,rvBulge:.17,rvBulgeAngle:-72,rvBulgeWidth:55,antIVGroove:12,postIVGroove:192,avGrooveT:.03,systoleFraction:.38,systolicRadialScale:.91,systolicAxialScale:.95},Hn={rootAnterior:9,rootRadius:14,ascendingRadius:15,archRadius:12.5,descendingRadius:11,ostiumHeight:11,guideParkHeight:34},gt={radial:[[-212,-292,62],[-210,-240,52],[-206,-170,38],[-201,-100,24]],brachial:[[-201,-100,24],[-196,-40,16],[-186,30,8],[-168,88,0]],axillary:[[-168,88,0],[-140,118,-6],[-108,136,-10]],subclavian:[[-108,136,-10],[-84,150,-13],[-63,155,-15],[-52,151,-16]],radii:{radial:1.35,brachial:2.1,axillary:3,subclavian:4,brachiocephalic:5.5}},Qe={surfaceGap:.2,lmDiameter:4.4,lmBifurcation:{t:0,theta:42},lad:{path:[[0,42],[.06,26],[.16,16],[.32,12],[.5,11],[.7,10],[.88,8],[.99,2]],ref:[[0,3.6],[24,3.3],[27,3.15],[42,2.95],[58,2.8],[61,2.6],[95,2.1],[140,1.5]]},d1:{at:25,path:[[.4,52],[.58,64],[.74,72]],ref:[[0,2.3],[60,1.3]]},d2:{at:60,path:[[.62,40],[.78,50],[.9,56]],ref:[[0,2],[45,1.2]]},lcx:{path:[[0,42],[0,70],[.02,100],[.06,132],[.14,160],[.24,178]],ref:[[0,3.2],[90,2]]},rca:{path:[[0,-30],[.01,-70],[.03,-110],[.06,-150],[.1,-185],[.22,-200],[.4,-205]],ref:[[0,3.6],[150,2.2]]},ds:.5},Ps={vessel:"LAD",center:42,length:14,stenosis:.9,plateau:3},Be={frameRate:15,sourceToIso:760,fieldOfView:210,muContrast:.55,muVesselWall:.004,muHeart:.0048,muSpine:.0085,muRib:.03,muDiaphragm:.004,muSoftTissue:.0012,muBone:.02,muGuide:.35,muWireBody:.28,muWireTip:1.6,muMarker:1.6,muStent:.22,noise:.07,cineNoise:.035,blur:.9,collimation:.86,imageShift:.07,background:.9,presets:[{name:"RAO 30° CRA 30°",lao:-30,cra:30},{name:"AP CRA 35°",lao:0,cra:35},{name:"LAO 45° CRA 30°",lao:45,cra:30},{name:"LAO 45° CAU 30° (spider)",lao:45,cra:-30},{name:"RAO 30° CAU 25°",lao:-30,cra:-25},{name:"AP",lao:0,cra:0}],fineStepDeg:2},dn={selectiveMl:8,aorticMl:20,bolusSelective:2.6,bolusAortic:1.8,aorticCoronaryIntensity:.5,refluxIntensity:.06,refluxLength:45,minCine:3,maxCine:9,safeTotalMl:120},Yt={coronaryVelocity:150,aorticVelocity:600,stenosisOnset:.6,stenosisOcclusion:.98,dissectionPenalty:.45,timi3:.8,timi2:.25,timi1:.02,sealCoverage:.9},mn={outerDiameter:2,speed:60,fineSpeed:14,rotateSpeed:70,fineRotateSpeed:18,engageTolerance:25,popOutTorque:40,gentleSpeed:22,seatPush:3,seatDepth:2,initialOffset:105},vt={diameter:.36,speed:15,fineSpeed:4,rotateSpeed:110,fineRotateSpeed:30,safeLesionSpeed:8,torqueBonus:1.5,buckleProgress:.35,riskPerMm:.035,maxRisk:.85,branchCapture:50,endWarning:4,hintDistance:14,distalPark:22,radiopaqueTip:30,initialRotation:200,minPos:-20},Ns={diameters:[2,2.5,3,3.5],lengths:[12,15,20],defaultSize:{d:2.5,l:15},nominal:8,rbp:14,ruptureMargin:4,compliance:.015,unfoldPressure:2,profile:.9,inflateRate:3,fineInflateRate:.7,deflateRate:7,speed:15,fineSpeed:3,tipLength:3,loadPos:-25,recoil:.3,occludePressure:.6},ci={diameters:[2.5,2.75,3,3.5,4],lengths:[12,15,18,23,28],defaultSize:{d:3,l:18},nominal:10,rbp:16,ruptureMargin:4,compliance:.012,unfoldPressure:2,profile:1.1,deployPressure:6,recoil:.03,crimpedRadius:.6,inflateRate:3,fineInflateRate:.7,deflateRate:7,speed:15,fineSpeed:3,tipLength:3,loadPos:-25,occludePressure:.6},Wn={taper:1.2,dissectionRatio:1.2,edgeDissectionLength:6,ruptureDissectionChance:.5,goodMargin:1.5},je={baseHR:68,ischaemiaHR:22,unstableHR:14,baseSys:132,baseDia:76,spo2:98,ischaemiaRise:20,recoveryTau:8,poorFlowIschaemia:.45,poorFlowThreshold:.25,maxSTmm:4,painThreshold:.3,hypotensionAfter:40,unstableAfter:60,hypotensionDrop:28,unstableDrop:30,pvcChance:.22,actBaseline:128,actHeparin:285,actTau:9},cn={residualOk:.1,residualWarn:.3,stentRatioOk:[.95,1.15],stentRatioWarn:[.85,1.25],inflationOk:30,inflationWarn:60,contrastOk:120,contrastWarn:200,fluoroOk:600,fluoroWarn:1200},Mt=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Xn=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],bt=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],et=(n,e,t)=>[n[0]+e[0]*t,n[1]+e[1]*t,n[2]+e[2]*t],Fs=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],hs=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],lu=n=>Math.hypot(n[0],n[1],n[2]),rs=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),rn=n=>{const e=lu(n);return e>1e-12?[n[0]/e,n[1]/e,n[2]/e]:[0,0,0]},Li=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t],qn=(n,e)=>rn(et(n,e,-Fs(n,e))),us=(n,e,t)=>n<e?e:n>t?t:n,En=(n,e,t)=>{const i=us((t-n)/(e-n),0,1);return i*i*(3-2*i)},hi=Math.PI/180,Rt=n=>{let e=((n+180)%360+360)%360-180;return e===-180&&(e=180),e},Yn=(n,e)=>Math.abs(Rt(n-e));function Yc(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){const[i,s]=n[t-1],[r,a]=n[t];return s+(a-s)*(e-i)/(r-i)}return n[n.length-1][1]}function cu(n=12345){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function hu(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function Br(n,e){return[n[0]*e[0]+n[4]*e[1]+n[8]*e[2]+n[12],n[1]*e[0]+n[5]*e[1]+n[9]*e[2]+n[13],n[2]*e[0]+n[6]*e[1]+n[10]*e[2]+n[14]]}function uu(n,e,t,i,s){const o=0+Math.pow(Math.max(rs(n,e),1e-6),.5),l=o+Math.pow(Math.max(rs(e,t),1e-6),.5),c=l+Math.pow(Math.max(rs(t,i),1e-6),.5),h=o+(l-o)*s,d=Mt(bt(n,(o-h)/(o-0)),bt(e,(h-0)/(o-0))),f=Mt(bt(e,(l-h)/(l-o)),bt(t,(h-o)/(l-o))),p=Mt(bt(t,(c-h)/(c-l)),bt(i,(h-l)/(c-l))),g=Mt(bt(d,(l-h)/(l-0)),bt(f,(h-0)/(l-0))),_=Mt(bt(f,(c-h)/(c-o)),bt(p,(h-o)/(c-o)));return Mt(bt(g,(l-h)/(l-o)),bt(_,(h-o)/(l-o)))}function li(n,e=24){if(n.length<2)return n.slice();const t=[],i=n.length,s=Xn(bt(n[0],2),n[1]),r=Xn(bt(n[i-1],2),n[i-2]);for(let a=0;a<i-1;a++){const o=a===0?s:n[a-1],l=a+2<i?n[a+2]:r;for(let c=0;c<e;c++)t.push(uu(o,n[a],n[a+1],l,c/e))}return t.push(n[i-1]),t}function du(n,e){const t=[0];for(let l=1;l<n.length;l++)t.push(t[l-1]+rs(n[l-1],n[l]));const i=t[t.length-1],s=Math.max(1,Math.round(i/e)),r=i/s,a=[];let o=0;for(let l=0;l<=s;l++){const c=l*r;for(;o<t.length-2&&t[o+1]<c;)o++;const h=t[o+1]-t[o],d=h>1e-9?(c-t[o])/h:0;a.push(Li(n[o],n[o+1],Math.min(1,Math.max(0,d))))}return{pts:a,tangents:$c(a),ds:r,length:i}}function $c(n){const e=n.length;return n.map((t,i)=>rn(Xn(n[Math.min(e-1,i+1)],n[Math.max(0,i-1)])))}function aa(n,e){return du(li(n),e)}function fu(){const n=rn(yt.axis),e=qn([0,0,1],n),t=rn(hs(e,n)),i=et(yt.center,n,-100*.42),s=et(i,n,yt.length);return{center:yt.center,axis:n,ant:e,lat:t,base:i,apex:s,length:yt.length}}function pu(n){const e=yt.maxAt;if(n>=e){const i=Math.min(1,(n-e)/(1-e));return Math.pow(Math.max(0,1-i*i),.72)}const t=Math.min(1,(e-n)/(e-yt.tMin));return Math.pow(Math.max(0,1-t*t),.5)}function mu(n,e){const t=yt.radius*pu(n),i=Rt(e-yt.rvBulgeAngle)/yt.rvBulgeWidth,s=1+yt.rvBulge*Math.exp(-i*i)*En(-.05,.12,n)*(1-En(.6,.9,n));return{rAnt:t*yt.apRatio*s,rLat:t*s}}function zr(n,e,t,i=0){const s=Qi(n,e,t);return i===0?s:et(s,jc(n,e,t),i)}function Qi(n,e,t){const{rAnt:i,rLat:s}=mu(e,t),r=t*hi,a=et(n.base,n.axis,e*n.length);return Mt(a,Mt(et([0,0,0],n.ant,Math.cos(r)*i),et([0,0,0],n.lat,Math.sin(r)*s)))}function jc(n,e,t){const s=Xn(Qi(n,Math.min(1,e+.004),t),Qi(n,Math.max(yt.tMin,e-.004),t)),r=Xn(Qi(n,e,t+.5),Qi(n,e,t-.5));let a=rn(hs(r,s));const o=et(n.base,n.axis,e*n.length),l=Xn(Qi(n,e,t),o);return a[0]*l[0]+a[1]*l[1]+a[2]*l[2]<0&&(a=[-a[0],-a[1],-a[2]]),isFinite(a[0])||(a=rn(l)),a}function gu(n,e){const t=Math.exp(-Math.pow((n-yt.avGrooveT)/.07,2)),i=Rt(e-yt.antIVGroove)/14,s=Rt(e-yt.postIVGroove)/16,r=(Math.exp(-i*i)+Math.exp(-s*s))*(1-En(.75,1,n)*.6),a=n<0?.2:0;return Math.min(1,t+r*.85+a)}function _u(n){const e=yt.systoleFraction,t=e*.62;return n<t?En(0,t,n):n<e?1-En(t,e,n)*.85:.15*(1-En(e,e+.12,n))}function vu(n,e,t){const i=1-(1-yt.systolicRadialScale)*e,s=1-(1-yt.systolicAxialScale)*e,r=[n.ant,n.axis,n.lat],a=[i,s,i],o=[[0,0,0],[0,0,0],[0,0,0]];for(let d=0;d<3;d++)for(let f=0;f<3;f++){let p=0;for(let g=0;g<3;g++)p+=r[g][d]*a[g]*r[g][f];o[d][f]=p}const l=t[0]-(o[0][0]*t[0]+o[0][1]*t[1]+o[0][2]*t[2]),c=t[1]-(o[1][0]*t[0]+o[1][1]*t[1]+o[1][2]*t[2]),h=t[2]-(o[2][0]*t[0]+o[2][1]*t[1]+o[2][2]*t[2]);return[o[0][0],o[1][0],o[2][0],0,o[0][1],o[1][1],o[2][1],0,o[0][2],o[1][2],o[2][2],0,l,c,h,1]}function xu(n,e=Ps){const t=e.length/2,i=Math.abs(n-e.center);if(i>=t)return 0;const s=e.plateau/2;if(i<=s)return e.stenosis;const r=t-s,a=(i-s)/r;return e.stenosis*.5*(1+Math.cos(Math.PI*a))}function Mu(n=Ps){return[n.center-n.length/2,n.center+n.length/2]}function yu(n,e,t){return n.map((i,s)=>t?i*(1-xu(s*e,t)):i)}function Su(n,e,t,i=Wn.taper){if(n>=e&&n<=t)return 1;const s=n<e?e-n:n-t;return s>=i?0:.5*(1+Math.cos(Math.PI*s/i))}function Kc(n,e,t){const i=n.slice();for(const s of t){const r=Math.max(0,Math.floor((s.s0-Wn.taper)/e)),a=Math.min(i.length-1,Math.ceil((s.s1+Wn.taper)/e));for(let o=r;o<=a;o++){const l=Su(o*e,s.s0,s.s1);if(l<=0)continue;const c=i[o]+(Math.max(i[o],s.diameter)-i[o])*l;c>i[o]&&(i[o]=c)}}return i}function bu(n,e,t,i,s){const r=Math.max(0,Math.floor(i/t)),a=Math.min(n.length-1,Math.ceil(s/t));let o=r;for(let _=r;_<=a;_++)n[_]<n[o]&&(o=_);const l=e[o],c=n[o],h=Math.max(0,1-c/l);let d=o,f=o;const p=_=>n[_]<e[_]*.99;if(p(o)){for(;d>r&&p(d-1);)d--;for(;f<a&&p(f+1);)f++}const g=p(o)?(f-d+1)*t:0;return{referenceD:l,mld:c,ds:h,lesionLength:g,mldAt:o*t}}function Eu(n,e,t,i=0,s=1/0){let r=0;const a=Math.max(0,Math.floor(i/t)),o=Math.min(n.length-1,Math.ceil(s/t));for(let l=a;l<=o;l++)r=Math.max(r,1-n[l]/e[l]);return Math.max(0,r)}function wu(n,e){const t=e[0]-n[0],i=n[1]-e[1];return{prox:t,dist:i,covered:t>=0&&i>=0}}const Tu=["LM","LAD","D1","D2","LCX","RCA"];function Au(n,e,t){const i=[];for(let s=0;s<e;s++)i.push(Yc(n,s*t));return i}function Ru(n,e,t){const i=[0];for(let h=1;h<n.length;h++)i.push(i[h-1]+rs(n[h-1],n[h]));const s=i[i.length-1],r=Math.max(1,Math.round(s/t)),a=s/r,o=[],l=[];let c=0;for(let h=0;h<=r;h++){const d=h*a;for(;c<i.length-2&&i[c+1]<d;)c++;const f=i[c+1]-i[c],p=f>1e-9?Math.min(1,Math.max(0,(d-i[c])/f)):0;o.push(Li(n[c],n[c+1],p)),l.push([e[c][0]+(e[c+1][0]-e[c][0])*p,e[c][1]+(e[c+1][1]-e[c][1])*p])}return{pts:o,tangents:$c(o),ds:a,length:s,params:l}}function Cu(n,e,t,i=[]){const s=e.map(([l,c])=>[l,c,0]),r=li(s,40).map(l=>[l[0],l[1]]),a=r.map(([l,c])=>zr(n,l,c,t)),o=r.slice();if(i.length){const l=li([...i,a[0],a[Math.min(a.length-1,30)]],16),c=l.length-17,h=l.slice(0,c);a.unshift(...h),o.unshift(...h.map(()=>r[0]))}return Ru(a,o,Qe.ds)}function Du(n,e,t){const i=qn(e,n),s=rn(hs(n,i));return Math.atan2(Fs(t,s),Fs(t,i))/hi}function Zc(n,e){const t=qn(n.ant,e);return t[0]===0&&t[1]===0&&t[2]===0?qn(n.lat,e):t}function Pu(){const n=fu(),e=Mt(Mt(et(n.base,n.axis,-14),bt(n.ant,Hn.rootAnterior)),[-4,0,0]),t=[e,Mt(e,[-3,26,7]),Mt(e,[-5,55,9]),Mt(e,[2,80,2]),Mt(e,[20,93,-16]),Mt(e,[43,88,-34]),Mt(e,[58,62,-40]),Mt(e,[62,0,-40]),Mt(e,[61,-150,-36])],i=aa(t,2),s=i.pts.map((se,qe)=>{const de=qe*i.ds;return 2*Yc([[0,Hn.rootRadius],[25,Hn.rootRadius+1],[55,Hn.ascendingRadius],[110,Hn.archRadius],[190,Hn.descendingRadius]],de)}),r=i.tangents[0],a=et(e,r,Hn.ostiumHeight),o=qn(n.ant,r),l=rn(hs(r,o)),c=se=>Math.atan2(Fs(se,l),Fs(se,o))/hi,h=se=>rn(Mt(bt(o,Math.cos(se*hi)),bt(l,Math.sin(se*hi)))),d=Qe.lmDiameter/2+Qe.surfaceGap,f=zr(n,Qe.lmBifurcation.t,Qe.lmBifurcation.theta,d),p=c(qn(Xn(f,a),r)),g=zr(n,Qe.rca.path[0][0],Qe.rca.path[0][1],2),_=c(qn(Xn(g,a),r)),m=Rt(p+Rt(_-p)/2+180),u=Hn.rootRadius,E=et(a,h(p),u),S=et(a,h(_),u),x=h(p),R=[et(E,x,-2.5),et(E,x,2),Li(et(E,x,5),f,.45),f],T=aa(R,Qe.ds),A=T.pts.map(()=>Qe.lmDiameter),L=(se,qe,de,Pe,lt=[],ct,w)=>{const v=Pe[0][1]/2+Qe.surfaceGap,O=Cu(n,de,v,lt),X=Au(Pe,O.pts.length,O.ds);return{id:se,name:qe,kind:"coronary",...O,refD:X,baseD:X.slice(),parent:ct,parentS:w}},y=L("LAD","Left anterior descending (LAD)",Qe.lad.path,Qe.lad.ref,[],"LM",T.length),b={...Ps};y.baseD=yu(y.refD,y.ds,b);const P=se=>y.params[Math.min(y.params.length-1,Math.round(se/y.ds))],k=L("D1","First diagonal (D1)",[P(Qe.d1.at),...Qe.d1.path],Qe.d1.ref,[],"LAD",Qe.d1.at),H=L("D2","Second diagonal (D2)",[P(Qe.d2.at),...Qe.d2.path],Qe.d2.ref,[],"LAD",Qe.d2.at),q=L("LCX","Left circumflex (LCx)",Qe.lcx.path,Qe.lcx.ref,[],"LM",T.length),V=h(_),Y=L("RCA","Right coronary artery (RCA)",Qe.rca.path,Qe.rca.ref,[et(S,V,-2.5),et(S,V,2.5)]),Z=(se,qe,de,Pe)=>{const lt=aa(de,2),ct=lt.pts.map(()=>Pe*2);return{id:se,name:qe,kind:"access",...lt,refD:ct,baseD:ct.slice()}},G=Z("radial","Right radial artery",gt.radial,gt.radii.radial),oe=Z("brachial","Brachial artery",gt.brachial,gt.radii.brachial),fe=Z("axillary","Axillary artery",gt.axillary,gt.radii.axillary),Me=Z("subclavian","Right subclavian artery",gt.subclavian,gt.radii.subclavian),Oe=gt.subclavian[gt.subclavian.length-1];let Ze=0,rt=1/0;for(let se=0;se<i.pts.length;se++){const qe=se*i.ds;if(qe<50||qe>140)continue;const de=rs(i.pts[se],Oe);de<rt&&(rt=de,Ze=se)}const Ye=i.pts[Ze],j=[Ye,Li(Ye,Oe,.4),et(Li(Ye,Oe,.75),[-1,0,0],3),Oe],J=Z("brachiocephalic","Brachiocephalic trunk",j,gt.radii.brachiocephalic);J.parent="aorta",J.parentS=Ze*i.ds;const me={id:"aorta",name:"Aorta",kind:"aorta",...i,refD:s,baseD:s.slice()},we={id:"LM",name:"Left main (LM)",kind:"coronary",...T,refD:A,baseD:A.slice(),params:T.pts.map(()=>[Qe.lmBifurcation.t,Qe.lmBifurcation.theta])},ye={radial:G,brachial:oe,axillary:fe,subclavian:Me,brachiocephalic:J,aorta:me,LM:we,LAD:y,D1:k,D2:H,LCX:q,RCA:Y},We=se=>rn(Xn(se.pts[Math.min(se.pts.length-1,Math.round(5/se.ds))],se.pts[0])),xt=(se,qe,de)=>{const Pe=Math.min(se.pts.length-1,Math.round(qe/se.ds)),lt=se.tangents[Pe];return Du(lt,Zc(n,lt),We(de))},C=[{parent:"LM",s:we.length,child:"LAD",angle:xt(we,we.length,y),side:!1},{parent:"LM",s:we.length,child:"LCX",angle:xt(we,we.length,q),side:!1},{parent:"LAD",s:Qe.d1.at,child:"D1",angle:xt(y,Qe.d1.at,k),side:!0},{parent:"LAD",s:Qe.d2.at,child:"D2",angle:xt(y,Qe.d2.at,H),side:!0}];Yn(C[0].angle,C[1].angle)<90&&(C[1].angle=C[0].angle+180);const[ot,Ue]=Mu(b),Re=[{id:"root",text:"Aortic root",vessel:"aorta",s:8,description:"Aortic root with the three sinuses (cusps) of Valsalva. The coronary ostia arise from the left and right sinuses."},{id:"asc",text:"Ascending aorta",vessel:"aorta",s:50,description:"The guide catheter is advanced down the ascending aorta to the root."},{id:"arch",text:"Aortic arch",vessel:"aorta",s:110,description:"From the right radial approach the catheter enters the aorta via the brachiocephalic trunk at the arch."},{id:"desc",text:"Descending aorta",vessel:"aorta",s:220,description:"Descending thoracic aorta, lying left of the spine."},{id:"bct",text:"Brachiocephalic trunk",vessel:"brachiocephalic",s:J.length*.5,description:"First branch of the arch; the right subclavian and right common carotid arise from it."},{id:"sub",text:"R. subclavian",vessel:"subclavian",s:Me.length*.5,description:"Right subclavian artery - tortuosity here is a common cause of difficult radial access."},{id:"axi",text:"Axillary",vessel:"axillary",s:fe.length*.5,description:"Axillary artery (continuation of the subclavian beyond the first rib)."},{id:"bra",text:"Brachial",vessel:"brachial",s:oe.length*.5,description:"Brachial artery in the upper arm, bifurcating at the elbow into radial and ulnar arteries."},{id:"rad",text:"Radial (access)",vessel:"radial",s:6,description:"Right radial artery at the wrist: the access site. Radial access lowers bleeding risk compared with femoral access."},{id:"lm",text:"LM",vessel:"LM",s:we.length*.5,description:"Left main stem: arises from the left coronary cusp and divides into the LAD and circumflex."},{id:"lad",text:"LAD",vessel:"LAD",s:95,description:"Left anterior descending artery, running in the anterior interventricular groove; supplies the anterior wall and septum."},{id:"d1",text:"D1",vessel:"D1",s:22,description:"First diagonal branch - proximal to the lesion."},{id:"d2",text:"D2",vessel:"D2",s:18,description:"Second diagonal branch - distal to the lesion, so its flow depends on the lesion too."},{id:"lcx",text:"LCx",vessel:"LCX",s:40,description:"Left circumflex artery in the left atrioventricular groove; supplies the lateral wall."},{id:"rca",text:"RCA",vessel:"RCA",s:60,description:"Right coronary artery from the right cusp, in the right AV groove. Not the target vessel today."},{id:"lesion",text:"90% lesion",vessel:"LAD",s:Ps.center,description:"Target: 14 mm, 90% diameter stenosis in the mid LAD between D1 and D2."}];return{frame:n,vessels:ye,root:{valve:e,axis:r,ref:o,side:l,radius:u,leftCusp:p,rightCusp:_,nonCusp:m,ostiumL:E,ostiumR:S,ostiumCenter:a},branches:C,bcOriginS:Ze*i.ds,lesion:{vessel:"LAD",s0:ot,s1:Ue,center:Ps.center},labels:Re,beatPivot:et(n.base,n.axis,-4)}}function Lu(n,e){return rn(Mt(bt(n.ref,Math.cos(e*hi)),bt(n.side,Math.sin(e*hi))))}function Os(n,e){return Math.min(n.pts.length-1,Math.max(0,Math.round(e/n.ds)))}function Jc(n){const e=[];let t=0;for(const i of n)e.push(t),t+=Math.abs(i.to-i.from);return{segs:n,starts:e,length:t}}function Ii(n,e){const t=Math.max(0,Math.min(n.length,e));let i=n.segs.length-1;for(let a=0;a<n.segs.length;a++)if(t<=n.starts[a]+Math.abs(n.segs[a].to-n.segs[a].from)+1e-9){i=a;break}const s=n.segs[i],r=s.to>=s.from?1:-1;return{vessel:s.vessel,s:s.from+r*(t-n.starts[i]),seg:i,dir:r}}function ks(n,e,t){const i=n.vessels[e],s=i.pts.length-1,r=Math.max(0,Math.min(s,t/i.ds)),a=Math.min(s-1,Math.floor(r)),o=r-a;return{p:Li(i.pts[a],i.pts[a+1],o),t:rn(Li(i.tangents[a],i.tangents[a+1],o))}}function oa(n,e,t){const i=Ii(e,t),{p:s,t:r}=ks(n,i.vessel,i.s),a=n.vessels[i.vessel].kind==="coronary"?1:0;return{p:s,t:i.dir>0?r:bt(r,-1),vessel:i.vessel,local:i.s,beats:a}}function Qc(n,e,t,i){const s=Math.min(e,t),r=Math.max(e,t);for(let a=0;a<n.segs.length;a++){const o=n.segs[a];if(o.vessel!==i)continue;const l=n.starts[a],c=l+Math.abs(o.to-o.from),h=Math.max(s,l),d=Math.min(r,c);if(d<=h)continue;const f=o.to>=o.from?1:-1,p=o.from+f*(h-l),g=o.from+f*(d-l);return[Math.min(p,g),Math.max(p,g)]}return null}function Ks(n,e,t){const i=[];for(const s of n.segs){const r=Qc(n,e,t,s.vessel);r&&!i.some(a=>a.vessel===s.vessel)&&i.push({vessel:s.vessel,s0:r[0],s1:r[1]})}return i}function Iu(n,e){const t=n.vessels;return Jc([{vessel:"radial",from:0,to:t.radial.length},{vessel:"brachial",from:0,to:t.brachial.length},{vessel:"axillary",from:0,to:t.axillary.length},{vessel:"subclavian",from:0,to:t.subclavian.length},{vessel:"brachiocephalic",from:t.brachiocephalic.length,to:0},{vessel:"aorta",from:n.bcOriginS,to:e}])}function Uu(n,e){const t=[];for(let i=0;i<e.length;i++){const s=n.vessels[e[i]],r=e[i+1],a=r?n.vessels[r].parentS??s.length:s.length;t.push({vessel:s.id,from:0,to:Math.min(a,s.length)})}return Jc(t)}function Nu(n){return{s:0,rot:Rt(n.leftCusp+mn.initialOffset),engaged:!1,engagedRot:0,push:0,speed:0,popOuts:0}}const Fu=(n,e)=>n.s>=e-.01,eh=(n,e)=>Yn(n.rot,e.leftCusp)<=mn.engageTolerance,th=(n,e)=>Yn(n.rot,e.rightCusp)<=mn.engageTolerance;function Ou(n,e,t){const i={...n},s=[];let r=!1,a=!1;if(t.wireOut&&(e.delta!==0||e.dRot!==0))return s.push({level:"warn",text:"Retract the wire into the guide before moving the guide.",key:"guide-wire-out"}),i.speed*=.8,{guide:i,msgs:s};e.dRot!==0&&(i.rot=Rt(i.rot+e.dRot),i.engaged&&Yn(i.rot,i.engagedRot)>mn.popOutTorque&&(i.engaged=!1,i.push=0,i.popOuts++,a=!0,s.push({level:"warn",text:"Too much torque - the guide popped out of the left main. Re-align and re-engage gently.",key:"popout"})));const o=Math.abs(e.delta)/Math.max(t.dt,1e-4);if(i.speed=i.speed+(o-i.speed)*Math.min(1,t.dt/.15),e.delta!==0)if(i.engaged)e.delta>0?s.push({level:"info",text:"Guide is seated in the LM - pushing further risks deep intubation.",key:"seated"}):(i.engaged=!1,i.push=0,s.push({level:"info",text:"Guide disengaged from the left main.",key:"disengaged"}));else{const l=t.routeLength,c=i.s+e.delta;if(e.delta>0&&c>=l){const h=c-l;i.s=l,eh(i,t.root)?o<=mn.gentleSpeed?(i.push+=h,i.push>=mn.seatPush&&(i.engaged=!0,i.engagedRot=i.rot,i.push=0,r=!0,s.push({level:"ok",text:"Guide engaged in the left main ostium. Check pressure trace & take an angiogram.",key:"engaged"}))):(i.push=0,s.push({level:"warn",text:"Too fast to seat the guide - advance gently (hold Shift).",key:"seat-fast"})):h<.1?i.push=0:th(i,t.root)?(i.push=0,s.push({level:"info",text:"The tip faces the RIGHT coronary cusp (RCA ostium). Today's target is the LAD - rotate toward the left cusp.",key:"right-cusp"})):(i.push=0,s.push({level:"info",text:"At the aortic root, but the tip is not facing a coronary ostium - rotate (A/D) toward the left cusp.",key:"no-cusp"}))}else i.s=Math.max(0,Math.min(l,c)),e.delta<0&&(i.push=0)}return{guide:i,msgs:s,engagedNow:r,poppedOut:a}}function ku(){return{pos:vt.minPos,rot:vt.initialRotation,chain:["LM"],crossed:!1,everCrossed:!1,risk:0,maxRisk:0,buckle:0,resistance:0,speed:0,forcedTime:0,sinceRotate:99,wrongBranchEntries:0}}const kt=(n,e)=>Uu(n,e.chain);function Bu(n,e,t,i){const s=n.branches.filter(a=>a.parent===e&&Math.abs(a.s-t)<1e-6);if(!s.length)return null;if(s.every(a=>!a.side)){let a=s[0];for(const o of s)Yn(i,o.angle)<Yn(i,a.angle)&&(a=o);return a.child}const r=s.find(a=>Yn(i,a.angle)<=vt.branchCapture);return r?r.child:null}function as(n,e){const t=kt(n,e),i=t.segs.length-1,s=e.chain[i],r=e.pos-t.starts[i],a=n.branches.filter(l=>l.parent===s&&l.s>r+1e-6).sort((l,c)=>l.s-c.s);if(!a.length)return null;const o=a[0];return{b:o,dist:o.s-r,choice:Bu(n,s,o.s,e.rot)}}function zu(n,e,t){const i={...n,chain:n.chain.slice()},s={msgs:[]},{anat:r}=t,a=r.lesion;e.dRot!==0?(i.rot=Rt(i.rot+e.dRot),i.sinceRotate=0):i.sinceRotate+=t.dt;let o=e.delta;o<0&&t.cathOut&&(s.msgs.push({level:"warn",text:"Cannot retract the wire while a balloon/stent catheter is on it - withdraw the catheter first.",key:"wire-retract-blocked"}),o=0),o>0&&!t.guideEngaged&&i.pos+o>0&&(s.msgs.push({level:"warn",text:"Engage the guide in the left main before advancing the wire out.",key:"wire-no-guide"}),o=Math.max(0,-i.pos));const l=Math.abs(o)/Math.max(t.dt,1e-4);let c=kt(r,i);const h=u=>{if(u<=0)return!1;const E=Ii(c,u);return E.vessel===a.vessel&&E.s>=a.s0-.5&&E.s<=a.s1};let d=!1;if(o>0&&!i.crossed&&h(i.pos+.01)){const u=vt.safeLesionSpeed*(i.sinceRotate<.35?vt.torqueBonus:1);if(i.resistance=Math.min(1,i.resistance+t.dt*2*Math.max(.3,l/u)),l>u){d=!0;const E=o*vt.buckleProgress;i.risk=Math.min(vt.maxRisk,i.risk+vt.riskPerMm*E*(l/u)),i.maxRisk=Math.max(i.maxRisk,i.risk),i.forcedTime+=t.dt,o=E,s.msgs.push({level:"warn",text:"Wire is buckling against the lesion - slow down (Shift) and torque gently.",key:"buckle"})}}else i.resistance=Math.max(0,i.resistance-t.dt*1.5);i.buckle=d?Math.min(1,i.buckle+t.dt*4):Math.max(0,i.buckle-t.dt*2);let f=o,p=0;for(;Math.abs(f)>1e-9&&p++<10;)if(c=kt(r,i),f>0){const u=as(r,i),E=u?u.dist:1/0,S=u?1/0:c.length-.5-i.pos,x=Math.min(f,E,Math.max(0,S));if(i.pos+=x,f-=x,u&&Math.abs(u.dist-x)<1e-9&&f>=0){if(u.choice){i.chain.push(u.choice),s.enteredBranch=u.choice;const R=r.vessels[u.choice].name,T=u.choice==="LAD";T||i.wrongBranchEntries++,s.msgs.push({level:T?"ok":"warn",text:T?`Wire entered the ${R}.`:`Wire entered the ${R} - not the target. Pull back and rotate.`,key:"branch-"+u.choice})}f<=1e-9&&(i.pos+=1e-6);continue}(x<f||S<=0)&&(f=0,s.msgs.push({level:"danger",text:"Wire tip at the end of the vessel - stop! Perforation risk.",key:"wire-end"}))}else for(i.pos=Math.max(vt.minPos,i.pos+f),f=0;;){const u=kt(r,i);if(i.chain.length>1&&i.pos<u.starts[u.starts.length-1]-1e-9)i.chain.pop();else break}c=kt(r,i),i.speed=i.speed+(Math.abs(o)/Math.max(t.dt,1e-4)-i.speed)*Math.min(1,t.dt/.2),i.pos>0&&!as(r,i)&&c.length-i.pos<vt.endWarning&&e.delta>0&&s.msgs.push({level:"warn",text:"Wire tip near the end of the vessel - perforation risk. Do not push further.",key:"wire-near-end"});const g=i.pos>0?Ii(c,i.pos):null,_=!!g&&g.vessel===a.vessel&&g.s>a.s1,m=!!g&&g.vessel===a.vessel&&g.s<a.s0;return _&&!i.crossed?(i.crossed=!0,i.everCrossed=!0,s.crossedNow=!0,i.risk>0&&t.rng()<i.risk?(s.dissection=!0,s.msgs.push({level:"danger",text:"The lesion was crossed with force - a DISSECTION has formed.",key:"wire-dissection"})):s.msgs.push({level:"ok",text:"Lesion crossed. Park the wire tip in the distal LAD.",key:"crossed"}),i.risk=0,i.resistance=0):i.crossed&&(m||!g||g.vessel!==a.vessel)&&(!g||g.vessel!=="D2")&&(i.crossed=!1),{wire:i,ev:s}}function Hu(n,e){if(e.pos<=0)return{location:"Inside the guide catheter"};const t=kt(n,e),i=Ii(t,e.pos);let s=n.vessels[i.vessel].name;if(i.vessel==="LAD"){const o=n.lesion;s=i.s<o.s0?"Proximal LAD (before the lesion)":i.s<=o.s1?"In the LAD lesion":i.s<75?"Mid LAD (beyond the lesion)":"Distal LAD"}const r=as(n,e);if(!r||r.dist>vt.hintDistance)return{location:s};const a=n.branches.filter(o=>o.parent===r.b.parent&&Math.abs(o.s-r.b.s)<1e-6);if(!r.b.side){const o=a.find(l=>l.child==="LAD")??r.b;return{location:s,next:{name:"LM bifurcation (LAD / LCx)",dist:r.dist,enter:r.choice==="LAD",angleOff:Rt(o.angle-e.rot),side:!1}}}return{location:s,next:{name:n.vessels[r.b.child].name,dist:r.dist,enter:r.choice===r.b.child,angleOff:Rt(r.b.angle-e.rot),side:!0}}}const di=n=>n==="balloon"?Ns:ci;function nh(n,e,t){if(e<=0)return t.profile;const i=s=>n*(1+t.compliance*(s-t.nominal));if(e<t.unfoldPressure){const s=i(t.unfoldPressure);return t.profile+(s-t.profile)*(e/t.unfoldPressure)}return i(e)}function Al(n){const e=di(n);return{kind:n,d:e.defaultSize.d,l:e.defaultSize.l,pos:e.loadPos,pressure:0,deflating:!1,ruptured:!1,inflStart:null,inflMaxP:0,inflMaxD:0,deployed:!1,used:0,everOut:!1,speed:0}}const $n=n=>n.pos>0,Hr=n=>n.pressure>di(n.kind).occludePressure,Zs=n=>nh(n.d,n.pressure,di(n.kind));function _i(n){const e=di(n.kind),t=n.pos-e.tipLength;return[t-n.l,t]}function Vu(n){return n.pos>0?"Sizes can only be changed while the catheter is inside the guide.":n.pressure>0?"Deflate first.":null}function Gu(n,e,t){const i=Vu(n);if(i)return{cath:n,msg:{level:"warn",text:i,key:"resize"}};const s=di(n.kind);return!s.diameters.includes(e)||!s.lengths.includes(t)?{cath:n,msg:{level:"warn",text:"Size not available.",key:"size-na"}}:{cath:{...n,d:e,l:t,ruptured:!1}}}function Wu(n,e,t){const i=di(n.kind),s={...n},r={msgs:[]},a=s.kind==="balloon"?"balloon":"stent";e.inflate&&!s.ruptured?s.pos<=0?r.msgs.push({level:"warn",text:`The ${a} is still inside the guide - advance it to the lesion first.`,key:"infl-in-guide"}):(s.deflating=!1,s.pressure+=(e.fine?i.fineInflateRate:i.inflateRate)*t.dt):e.inflate&&s.ruptured&&r.msgs.push({level:"warn",text:"Ruptured balloon - withdraw it into the guide to replace it.",key:"ruptured"}),s.deflating&&(s.pressure=Math.max(0,s.pressure-i.deflateRate*t.dt),s.pressure===0&&(s.deflating=!1)),s.pressure>i.rbp&&!s.ruptured&&r.msgs.push({level:"danger",text:`Above rated burst pressure (${i.rbp} atm)! Rupture risk - stop inflating.`,key:"rbp"}),s.pressure>=i.rbp+i.ruptureMargin&&!s.ruptured&&(s.ruptured=!0,r.ruptured=!0,r.msgs.push({level:"danger",text:`${s.kind==="balloon"?"Balloon":"Stent balloon"} RUPTURED at ${s.pressure.toFixed(1)} atm.`,key:"rupture"}),s.inflMaxP=Math.max(s.inflMaxP,s.pressure),s.pressure=0,s.deflating=!1);const o=nh(s.d,s.pressure,i);s.pressure>i.occludePressure?(s.inflStart===null&&(s.inflStart=t.t,s.inflMaxP=0,s.inflMaxD=0),s.inflMaxP=Math.max(s.inflMaxP,s.pressure),s.inflMaxD=Math.max(s.inflMaxD,o),s.kind==="stent"&&!s.deployed&&s.pressure>=ci.deployPressure&&(s.deployed=!0,r.deployedNow=!0)):s.inflStart!==null&&(r.record={kind:s.kind,d:s.d,l:s.l,start:s.inflStart,duration:t.t-s.inflStart,maxPressure:s.inflMaxP,maxDiameter:s.inflMaxD,range:_i(s),ruptured:!!r.ruptured||s.ruptured},s.inflStart=null);let l=e.delta;l!==0&&s.pressure>.05&&(r.msgs.push({level:"warn",text:`Deflate the ${a} (Q) before moving it.`,key:"move-inflated"}),l=0),l>0&&s.pos+l>0&&!t.wireOut&&(r.msgs.push({level:"warn",text:"The wire must be out in the coronary before a balloon can follow it.",key:"no-wire"}),l=Math.max(0,-s.pos)),l>0&&t.otherOut&&s.pos+l>0&&(r.msgs.push({level:"warn",text:"Only one balloon catheter at a time - withdraw the other one first.",key:"one-at-a-time"}),l=Math.max(0,-s.pos));let c=s.pos+l;const h=t.wireTip-1;l>0&&c>h&&(c=Math.max(s.pos,h),r.msgs.push({level:"warn",text:`The ${a} must stay behind the wire tip - advance the wire further first.`,key:"behind-wire"})),c=Math.max(i.loadPos,c);const d=c-s.pos;return s.speed=s.speed+(Math.abs(d)/Math.max(t.dt,1e-4)-s.speed)*Math.min(1,t.dt/.2),s.pos=c,s.pos>0&&(s.everOut=!0),s.pos<=0&&d<0&&s.everOut&&(s.deployed||s.ruptured)&&(s.deployed=!1,s.ruptured=!1,s.everOut=!1,s.used+=1,r.reloaded=!0,r.msgs.push({level:"info",text:s.kind==="stent"?"Delivery balloon withdrawn - a fresh stent is loaded (available for bailout).":"Ruptured balloon removed - a fresh balloon is loaded.",key:"reload-"+s.kind})),{cath:s,ev:r}}function Rl(n){return n.pressure>0?{...n,deflating:!0}:n}function Xu(n){if(n<=Yt.stenosisOnset)return 1;if(n>=Yt.stenosisOcclusion)return 0;const e=(n-Yt.stenosisOnset)/(Yt.stenosisOcclusion-Yt.stenosisOnset);return 1-e*e}function ih(n){return n>=Yt.timi3?3:n>=Yt.timi2?2:n>Yt.timi1?1:0}function sh(n,e,t=[],i=[]){const s={};for(const r of n){const a=r.lumen.length,o=new Array(a),l=new Array(a);let c=1,h=0;if(r.parent&&s[r.parent]){const u=n.find(S=>S.id===r.parent),E=Math.min(s[r.parent].factor.length-1,Math.round((r.parentS??0)/u.ds));c=s[r.parent].factor[E],h=s[r.parent].arrival[E]}const d=t.filter(u=>u.vessel===r.id).map(u=>u.s),f=d.length?Math.min(...d):1/0,p=i.filter(u=>u.vessel===r.id&&!u.sealed).map(u=>u.s0);let g=1,_=1;const m=new Set;for(let u=0;u<a;u++){const E=u*r.ds,S=Math.max(0,1-r.lumen[u]/r.ref[u]);g=Math.min(g,Xu(S)),p.forEach((R,T)=>{!m.has(T)&&E>=R&&(m.add(T),_*=Yt.dissectionPenalty)});const x=E>=f?0:Math.min(c,g*_);o[u]=x,u===0?l[u]=x>0?h:1/0:l[u]=x>0&&isFinite(l[u-1])?l[u-1]+r.ds/(e*x):1/0}s[r.id]={factor:o,arrival:l}}return s}function Bs(n,e){const t=n[e]?.factor;return t&&t.length?t[t.length-1]:0}function qu(n,e,t,i){if(!isFinite(n)||e<n)return 0;const s=En(n,n+.15,e),r=Math.max(.15,Math.min(1,i)),a=n+t*(1+(1-r)*1.6),o=.7/r;return s*(1-En(a,a+o,e))}function Yu(n,e,t){let i=0;for(const a of n)isFinite(a)&&(i=Math.max(i,a));const s=Math.max(.15,Math.min(1,t)),r=i+e*(1+(1-s)*1.6)+.7/s+.4;return Math.max(dn.minCine,Math.min(dn.maxCine,r))}function $u(){return{ischaemia:0,occlusion:0,maxOcclusion:0,hr:je.baseHR,sys:je.baseSys,dia:je.baseDia,spo2:je.spo2,st:0,act:je.actBaseline,heparinAt:null,pain:!1,hypotension:!1,unstable:!1,everUnstable:!1,beatStart:0,beatRR:60/je.baseHR,beatPVC:!1,nextPVC:!1,beats:0,pvcs:0}}function ju(n,e){return e===null||n<e?je.actBaseline:je.actBaseline+(je.actHeparin-je.actBaseline)*(1-Math.exp(-(n-e)/je.actTau))}function Ku(n,e,t){const i={...n},s=[],{dt:r,t:a}=e;if(e.occluded)i.occlusion+=r,i.ischaemia=Math.min(1,i.ischaemia+r/je.ischaemiaRise);else{i.occlusion=0;const g=e.flow<je.poorFlowThreshold?je.poorFlowIschaemia*(1-e.flow/je.poorFlowThreshold):0;i.ischaemia>g?i.ischaemia+=(g-i.ischaemia)*Math.min(1,r/je.recoveryTau):i.ischaemia=Math.min(g,i.ischaemia+r/(je.ischaemiaRise*2))}i.maxOcclusion=Math.max(i.maxOcclusion,i.occlusion),i.st=je.maxSTmm*i.ischaemia;const o=i.ischaemia>je.painThreshold;o&&!i.pain&&s.push({level:"warn",text:`Patient: "I'm getting the chest pain again..." - anterior ST elevation on V2.`,key:"pain"}),i.pain=o;const l=i.occlusion>je.hypotensionAfter;l&&!i.hypotension&&s.push({level:"warn",text:"Occlusion > 40 s: blood pressure falling, ventricular ectopics.",key:"hypo"}),i.hypotension=l;const c=i.occlusion>je.unstableAfter;c&&!i.unstable&&s.push({level:"danger",text:"Haemodynamically UNSTABLE - DEFLATE NOW!",key:"unstable"}),i.unstable=c,c&&(i.everUnstable=!0);const h=je.baseHR+je.ischaemiaHR*i.ischaemia+(c?je.unstableHR:0);i.hr+=(h-i.hr)*Math.min(1,r/2.5);const d=(l?je.hypotensionDrop:0)+(c?je.unstableDrop:0)+6*i.ischaemia,f=Math.min(1,r/(je.baseSys-d<i.sys?3:7));i.sys+=(je.baseSys-d-i.sys)*f,i.dia+=(je.baseDia-d*.55-i.dia)*f,i.spo2+=((c?je.spo2-4:je.spo2)-i.spo2)*Math.min(1,r/4),i.act=ju(a,i.heparinAt);let p=!1;if(a>=i.beatStart+i.beatRR){p=!0,i.beats++,i.beatStart=a;const g=60/i.hr;i.nextPVC?(i.beatPVC=!0,i.pvcs++,i.nextPVC=!1,i.beatRR=g*1.4):(i.beatPVC=!1,l&&t()<je.pvcChance?(i.nextPVC=!0,i.beatRR=g*.62):i.beatRR=g)}return{phys:i,msgs:s,beat:p}}const Vr=[{id:"guide",key:"1",label:"Guide 6F",short:"Guide",selectable:!0,cursor:"grab",rules:"W/S advance-retract (Shift = fine), A/D rotate the pre-shaped tip. Stops at the aortic root; face the LEFT cusp and advance gently to engage. Cannot move while the wire is out."},{id:"wire",key:"2",label:'Wire .014"',short:"Wire",selectable:!0,cursor:"crosshair",rules:"Exits the guide into the LM. A/D rotates the shaped tip, which picks the branch at each bifurcation. Cross the lesion slowly (Shift), park the tip distally. Cannot be retracted while a balloon is on it."},{id:"balloon",key:"3",label:"Balloon",short:"Balloon",selectable:!0,cursor:"cell",rules:"Pre-dilation balloon over the wire. Choose a size while it is in the guide. Hold E to inflate (Shift = fine), Q to deflate. Cannot move while inflated. Nominal 8 atm, RBP 14 atm."},{id:"stent",key:"4",label:"Stent (DES)",short:"Stent",selectable:!0,cursor:"cell",rules:"Drug-eluting stent on its delivery balloon. Size it in the guide, cover the whole lesion with margins, deploy at >= 6 atm (nominal 10, RBP 16). Deployment is permanent."},{id:"contrast",key:"5",label:"Contrast",short:"Dye",selectable:!1,cursor:"pointer",rules:"Inject contrast (C or 5). Selective (8 ml) when the guide is engaged, otherwise an aortic root flush (20 ml). Records a cine run."},{id:"fluoro",key:"6",label:"Fluoro",short:"Fluoro",selectable:!1,cursor:"pointer",rules:"Hold Space (or 6 / this button) to step on the fluoroscopy pedal. Every second counts towards fluoro time - use short taps."},{id:"measure",key:"7",label:"Measure",short:"QCA",selectable:!0,cursor:"help",rules:"Quantitative coronary angiography (QCA): reference diameter, MLD, % stenosis, lesion length. Hover a vessel in 3D for its local diameter."}],Zu=n=>Vr.find(e=>e.id===n);function Va(n,e){switch(n){case"guide":return null;case"wire":return e.guideEngaged?e.diagAngio?e.heparin?null:"Give heparin first (G) - never put a wire in a coronary without anticoagulation.":"Take a diagnostic angiogram first (C) - you need a road map.":"Engage the left main with the guide first.";case"balloon":return e.wireDistal?e.stentOut?"Only one balloon catheter at a time - withdraw the stent catheter first.":null:"Cross the lesion and park the wire in the distal LAD first.";case"stent":return e.predilated?e.balloonOut?"Withdraw the pre-dilation balloon out of the patient first.":e.wireDistal?null:"The wire must stay parked in the distal LAD.":"Pre-dilate the lesion with a balloon first.";case"contrast":return e.guideInAorta?null:"Advance the guide into the aorta first - there is nothing to inject through.";case"fluoro":return null;case"measure":return e.diagAngio?null:"Take a diagnostic angiogram first - QCA needs an image."}}const Ju={guide:[mn.speed,mn.fineSpeed,mn.rotateSpeed,mn.fineRotateSpeed],wire:[vt.speed,vt.fineSpeed,vt.rotateSpeed,vt.fineRotateSpeed],balloon:[Ns.speed,Ns.fineSpeed,0,0],stent:[ci.speed,ci.fineSpeed,0,0]},ar=(n,e,t)=>Math.max(e,Math.min(t,n));function Qu(n,e,t,i){const s=Ju[n];if(!s)return{delta:0,dRot:0,wheelLeft:0};const r=e.fine?s[1]:s[0],a=ar(t,-r*i,r*i),o=ar(ar(e.advance,-1,1)*r*i+a,-r*i,r*i),l=ar(e.rotate,-1,1)*(e.fine?s[3]:s[2])*i;return{delta:o,dRot:l,wheelLeft:t-a}}function Cl(n,e){if(!$n(e))return null;const t=kt(n.anat,n.wire),[i,s]=_i(e),r=Qc(t,i,s,n.anat.lesion.vessel);if(!r)return null;const a=wu(r,[n.anat.lesion.s0,n.anat.lesion.s1]);return{prox:a.prox,dist:a.dist}}function Ga(n){const{guide:e,wire:t,anat:i}=n,s=i.lesion,r=kt(i,t),a=t.pos>0?Ii(r,t.pos):null,o=Cl(n,n.balloon),l=Cl(n,n.stent),c=Bs(n.flow,"LAD"),h=n.flags.finalViews;let d=!1;for(let p=0;p<h.length&&!d;p++)for(let g=p+1;g<h.length;g++)if(Math.hypot(Rt(h[p].lao-h[g].lao),h[p].cra-h[g].cra)>=20){d=!0;break}const f=(()=>{const p=[];for(const g of h)p.some(_=>Math.hypot(Rt(_.lao-g.lao),_.cra-g.cra)<20)||p.push(g);return p.length})();return{t:n.t,stage:n.stages.current,tool:n.tool,guideS:e.s,guideInserted:e.s>0,guidePastElbow:e.s>n.landmarks.elbowS,guideInChest:e.s>n.landmarks.chestS,guideInAorta:e.s>n.landmarks.aortaEntryS,guideAtRoot:Fu(e,n.routeLength),guideFacingLeft:eh(e,i.root),guideFacingRight:th(e,i.root),guideEngaged:e.engaged,guideCuspOffset:Rt(e.rot-i.root.leftCusp),xrayActive:n.xray.active,lookedOnFluoro:n.flags.lookedOnFluoro,diagAngio:n.flags.diagAngio,injections:n.contrast.injections.length,contrastMl:n.contrast.totalMl,fluoroTime:n.xray.fluoroTime,heparin:n.heparinGiven,act:n.phys.act,wireOut:t.pos>0,wirePos:t.pos,wireVessel:a?a.vessel:null,wireLocal:a?a.s:0,wireInLAD:t.chain.includes("LAD"),wireInLCX:t.chain.includes("LCX"),wireInDiag:t.chain.includes("D1")||t.chain.includes("D2"),wireInLesion:!!a&&a.vessel===s.vessel&&a.s>=s.s0&&a.s<=s.s1,wireCrossed:t.crossed,wireDistal:!!a&&a.vessel==="LAD"&&a.s>=s.s1+vt.distalPark,wireBuckling:t.buckle>.2,wireRisk:t.maxRisk,balloonOut:$n(n.balloon),balloonInflated:Hr(n.balloon),balloonPressure:n.balloon.pressure,balloonMargins:o,balloonAcross:!!o&&o.prox>=-(s.s1-s.s0)/2&&o.dist>=-(s.s1-s.s0)/2,predilInflated:n.flags.predilInflated,predilated:n.flags.predilated,qcaUsed:n.flags.qcaUsed,qcaAfterPredil:n.flags.qcaAfterPredil,stentLoaded:n.flags.stentLoaded,stentOut:$n(n.stent),stentInflated:Hr(n.stent),stentPressure:n.stent.pressure,stentMargins:l,stentCovers:!!l&&l.prox>=0&&l.dist>=0,stentCovered:n.flags.stentCovered,stentsDeployed:n.stents.length,deployedAndDeflated:n.flags.deployedAndDeflated,finalViews:f,finalDistinct:d,occluded:n.occluded,ladFlow:c,timi:ih(c),ischaemia:n.phys.ischaemia,occlusionTime:n.phys.occlusion,unstable:n.phys.unstable,dissections:n.dissections.length,dissectionUnsealed:n.dissections.some(p=>!p.sealed)}}const nn=[{id:1,title:"Advance guide to aortic root",goal:"Take the 6F guide catheter from the right radial artery up the arm and down into the aortic root.",why:'Radial access has fewer bleeding complications than femoral access. The guide is the "highway" every other device travels through, and it must reach the aortic root before it can engage a coronary. Short fluoro taps confirm position without wasting radiation.',tasks:[{id:"elbow",label:"Advance past the elbow",done:n=>n.guidePastElbow},{id:"aorta",label:"Enter the aorta",done:n=>n.guideInAorta},{id:"look",label:"Check position on fluoro",done:n=>n.lookedOnFluoro},{id:"root",label:"Reach the aortic root",done:n=>n.guideAtRoot||n.guideEngaged}]},{id:2,title:"Engage left main",goal:"Rotate the pre-shaped tip to face the left coronary cusp and seat it gently in the left main ostium, then take a diagnostic angiogram.",why:"Coaxial engagement gives backup support for pushing devices and lets you inject selectively. The diagnostic angiogram is your road map: it confirms the lesion, its length, the side branches and the baseline flow.",tasks:[{id:"face",label:"Face the left coronary cusp",done:n=>n.guideAtRoot&&n.guideFacingLeft||n.guideEngaged},{id:"seat",label:"Seat the guide in the LM",done:n=>n.guideEngaged},{id:"angio",label:"Diagnostic angiogram",done:n=>n.diagAngio}]},{id:3,title:"Cross the LAD lesion",goal:'Give heparin, advance the 0.014" wire into the LAD (not the circumflex or diagonals), cross the lesion gently and park the tip distally.',why:"A coronary wire without anticoagulation risks thrombus on the wire. The wire is the rail for every balloon and stent, so it must be in the true lumen of the target vessel and parked far enough distal to give support - but not jammed into the tip of the vessel.",tasks:[{id:"heparin",label:"Heparin given (ACT up)",done:n=>n.heparin},{id:"wireout",label:"Wire out of the guide",done:n=>n.wireOut},{id:"lad",label:"Into the LAD (not LCx)",done:n=>n.wireInLAD},{id:"cross",label:"Cross the lesion gently",done:n=>n.wireCrossed},{id:"park",label:"Park the tip distally",done:n=>n.wireDistal}]},{id:4,title:"Pre-dilate",goal:"Position an undersized balloon (about 0.8-0.9x the reference diameter) across the lesion using its markers, inflate to at least 6 atm, then deflate.",why:'Pre-dilation "prepares" the lesion so the stent can cross and expand fully. An undersized balloon cracks the plaque with a low risk of dissection. Watch the ECG: the vessel is occluded while the balloon is up.',tasks:[{id:"markers",label:"Balloon markers across the lesion",done:n=>n.balloonAcross},{id:"inflate",label:"Inflate ≥ 6 atm over the lesion",done:n=>n.predilInflated},{id:"deflate",label:"Deflate",done:n=>n.predilated}]},{id:5,title:"Deploy stent",goal:"Measure the lesion (QCA), choose a stent ~1:1 with the reference diameter and long enough to cover the lesion with margins, deploy it and deflate.",why:'Drug-eluting stents scaffold the vessel and prevent recoil and restenosis. Undersizing risks malapposition and thrombosis, oversizing risks edge dissection. Leaving diseased segment uncovered ("geographic miss") is a common cause of restenosis.',tasks:[{id:"qca",label:"Measure the lesion (QCA)",done:n=>n.qcaAfterPredil},{id:"load",label:"Load a stent",done:n=>n.stentLoaded},{id:"cover",label:"Cover the whole lesion",done:n=>n.stentCovered},{id:"deploy",label:"Deploy and deflate",done:n=>n.deployedAndDeflated}]},{id:6,title:"Final angiogram",goal:"Withdraw the delivery balloon and inject contrast after stenting, in at least two distinct projections.",why:"A single view can hide residual stenosis, edge dissection or a compromised side branch. Two orthogonal-ish views confirm TIMI 3 flow and a good angiographic result before you finish.",tasks:[{id:"inject",label:"Inject after the stent",done:n=>n.finalViews>=1},{id:"second",label:"Second, distinct projection",done:n=>n.finalDistinct}]}];function ed(){return{current:0,done:{},completedAt:nn.map(()=>null),startedAt:nn.map((n,e)=>e===0?0:null)}}const Gr=(n,e)=>`${n}:${e}`;function td(n,e,t){let i=n;const s=[],r=[];let a=0;for(;i.current<nn.length&&a++<nn.length;){const o=nn[i.current];let l=!1;const c={...i.done};for(const p of o.tasks){const g=Gr(o.id,p.id);!c[g]&&p.done(e)&&(c[g]=!0,l=!0)}if(l&&(i={...i,done:c}),!o.tasks.every(p=>i.done[Gr(o.id,p.id)]))break;const d=i.completedAt.slice();d[i.current]=t;const f=i.startedAt.slice();i.current+1<nn.length&&(f[i.current+1]=t),r.push(i.current),s.push({level:"ok",text:`Stage ${o.id} complete: ${o.title}.`,key:"stage-"+o.id}),i={...i,current:i.current+1,completedAt:d,startedAt:f}}return{progress:i,msgs:s,completed:r}}function Wa(n,e){const t=nn[e];if(!t)return 100;const i=t.tasks.filter(s=>n.done[Gr(t.id,s.id)]).length;return Math.round(i/t.tasks.length*100)}function nd(n){if(n.unstable)return"The patient is unstable - deflate now (Q) and let the myocardium recover before anything else.";if(n.occlusionTime>30)return"The vessel has been occluded for a while - consider deflating soon. ST elevation should resolve after reperfusion.";if(n.dissectionUnsealed)return"There is an unsealed dissection. Stay calm: keep the wire in place - a stent that covers the flap will seal it and restore flow.";switch(n.stage){case 0:return n.tool!=="guide"?"Select the guide catheter (1).":n.guideInserted?n.guidePastElbow?n.guideInChest?n.lookedOnFluoro?n.guideInAorta?"Advance down the ascending aorta until the guide stops at the aortic root.":"Through the subclavian and brachiocephalic trunk into the aortic arch.":"Tap the fluoro pedal (hold Space briefly) to check the catheter position - short taps save radiation.":"Continue up the brachial and axillary arteries towards the shoulder.":"Keep advancing up the forearm. The radial artery is small - smooth, steady advancement.":"Hold W (or scroll) to advance the guide catheter from the wrist.";case 1:return!n.guideAtRoot&&!n.guideEngaged?"Bring the guide back down to the aortic root.":!n.guideEngaged&&!n.guideFacingLeft?n.guideFacingRight?"The tip faces the right cusp (RCA). Rotate with A/D toward the left cusp - watch the dial.":`Rotate the tip (A/D) until the dial shows it facing the LEFT cusp (currently ${Math.round(Math.abs(n.guideCuspOffset))}° off).`:n.guideEngaged?"Engaged. Inject contrast (C) for the diagnostic angiogram - try an RAO cranial view (V) to open up the LAD.":"Facing the left cusp. Now advance gently (Shift + W) to seat the tip in the LM ostium.";case 2:return n.heparin?n.tool!=="wire"?"Select the coronary wire (2).":n.wireOut?n.wireInLCX?"The wire went into the circumflex. Pull back (S) into the LM, rotate the tip toward the LAD and re-advance.":n.wireInDiag?"The wire is in a diagonal. Pull back and rotate the tip away from the side branch.":n.wireInLAD?n.wireBuckling?"The wire is buckling. Slow down (hold Shift) and add a little torque - let the tip find the channel.":n.wireInLesion?"In the lesion: advance slowly (Shift) with gentle rotation.":n.wireCrossed?"Lesion crossed. Keep advancing into the distal LAD to park the tip - stop before the vessel end.":"Approach the lesion; slow down (Shift) before you reach it.":"Before the LM bifurcation, rotate the tip (A/D) toward the LAD - the device panel shows which branch it will take.":"Advance the wire out of the guide into the left main.":"Give heparin (G) before any wire goes into the coronary.";case 3:return n.tool!=="balloon"?"Select the balloon (3). A 2.5 mm balloon is about 0.85x the 2.95 mm reference.":n.balloonOut?n.balloonAcross?n.predilInflated?"Deflate (Q) - aim for an inflation of 10-20 s.":"Hold E to inflate to 8-10 atm. Watch the ECG and pain - the LAD is occluded while the balloon is up.":"Position the balloon so its two markers straddle the lesion (see the margins in the device panel).":"Choose a size while the balloon is in the guide, then advance it over the wire.";case 4:return n.balloonOut?"Withdraw the balloon (S) back into the guide.":n.qcaAfterPredil?n.tool!=="stent"?"Select the stent (4). Diameter ~1:1 with the reference, length = lesion + ~2 mm each side.":n.stentOut?!n.stentCovers&&n.stentsDeployed===0?n.stentMargins&&(n.stentMargins.prox<0||n.stentMargins.dist<0)?"The stent does not yet cover the whole lesion - adjust so both margins are positive (ideally ≥ 1.5 mm).":"Advance the stent until it is centred on the lesion.":n.stentsDeployed===0?"Good position. Hold E to deploy at nominal pressure (~10-12 atm).":"Deployed. Deflate (Q).":"Check the stent size, then advance it over the wire to the lesion.":"Select Measure (7) to read the QCA: reference diameter and lesion length guide your stent choice.";case 5:return n.stentOut?"Withdraw the delivery balloon into the guide (S) before the final shots.":n.finalViews===0?"Inject contrast (C) to see the result.":"Change projection (V) by at least 20° and inject again.";default:return"All stages complete - open the debrief with End case, or keep exploring."}}const zs=()=>({advance:0,rotate:0,fine:!1,inflate:!1}),Xa=["radial","brachial","axillary","subclavian","brachiocephalic","aorta","LM","LAD","D1","D2","LCX","RCA"],Wr=["LM","LAD","LCX","D1","D2"];function Dl(n=20240917){const e=Pu(),t=Iu(e,Hn.guideParkHeight),i=e.vessels,s={};for(const a of Xa)s[a]=i[a].baseD.slice();const r={t:0,anat:e,access:t,routeLength:t.length,landmarks:{elbowS:i.radial.length+4,chestS:i.radial.length+i.brachial.length+i.axillary.length,aortaEntryS:t.starts[5]},guide:Nu(e.root),wire:ku(),balloon:Al("balloon"),stent:Al("stent"),tool:"guide",balloonTx:[],stents:[],dissections:[],lumen:s,live:Object.fromEntries(Xa.map(a=>[a,s[a].slice()])),lumenVersion:0,flow:{},occluded:!1,phys:$u(),contrast:{totalMl:0,injections:[],current:null},xray:{pedal:!1,cineUntil:-1,fluoroTime:0,active:!1,everImaged:!1,mode:"off"},carm:{lao:Be.presets[5].lao,cra:Be.presets[5].cra,preset:5},heparinGiven:!1,flags:{lookedOnFluoro:!1,diagAngio:!1,qcaUsed:!1,qcaAfterPredil:!1,predilInflated:!1,predilated:!1,stentLoaded:!1,stentCovered:!1,deployedAndDeflated:!1,finalViews:[],ruptures:0,inflDissected:!1},inflations:[],stages:ed(),outbox:[],log:[],rng:cu(n),wheel:0,ended:!1,needFlow:!0,nextId:1,snapshot:void 0,beatCount:0};return r.flow=rh(r,r.lumen,[]),r.snapshot=Ga(r),r}const Pl=new WeakMap;function Lt(n,e,t=!0){if(n.outbox.push(e),!t||e.level==="info"&&e.key)return;let i=Pl.get(n);i||Pl.set(n,i=new Map);const s=e.key??e.text,r=i.get(s);i.set(s,n.t),!(r!==void 0&&n.t-r<5)&&n.log.push({t:n.t,text:e.text,level:e.level})}function id(n,e,t="info"){n.log.push({t:n.t,text:e,level:t})}function sd(n,e){const t=n.anat.vessels;return[...Wr,"RCA"].map(i=>({id:i,parent:t[i].parent,parentS:t[i].parentS,ds:t[i].ds,lumen:e[i],ref:t[i].refD}))}function rh(n,e,t){return sh(sd(n,e),Yt.coronaryVelocity,t,n.dissections.map(i=>({vessel:i.vessel,s0:i.s0,sealed:i.sealed})))}function Bo(n){const e=n.anat.vessels;for(const t of Tu){const i=[...n.balloonTx.filter(s=>s.vessel===t).map(s=>({s0:s.s0,s1:s.s1,diameter:s.diameter})),...n.stents.filter(s=>s.vessel===t).map(s=>({s0:s.s0,s1:s.s1,diameter:s.expandedD*(1-ci.recoil)}))];n.lumen[t]=Kc(e[t].baseD,e[t].ds,i)}ah(n),n.needFlow=!0}function ah(n){for(const e of n.dissections){const t=e.s1-e.s0;let i=0;const s=40;for(let a=0;a<s;a++){const o=e.s0+(a+.5)/s*t;n.stents.some(l=>l.vessel===e.vessel&&o>=l.s0&&o<=l.s1)&&i++}const r=e.sealed;e.sealed=i/s>=Yt.sealCoverage,e.sealed&&!r&&Lt(n,{level:"ok",text:"The dissection is now covered by a stent (sealed).",key:"sealed-"+e.id})}}function rd(n){return[n.balloon,n.stent]}function ad(n){const e=kt(n.anat,n.wire),t={};for(const s of Xa)t[s]=n.lumen[s];const i=[];for(const s of rd(n)){if(!$n(s)||s.pressure<=0)continue;const r=Zs(s),[a,o]=_i(s);for(const l of Ks(e,a,o)){const c=n.anat.vessels[l.vessel];t[l.vessel]=Kc(t[l.vessel],c.ds,[{s0:l.s0,s1:l.s1,diameter:r}]),Hr(s)&&i.push({vessel:l.vessel,s:l.s0})}}n.live=t,n.flow=rh(n,t,i),n.occluded=i.some(s=>Wr.includes(s.vessel)),n.lumenVersion++}function Xr(n,e,t,i,s){const r=n.anat.vessels[e],a={id:n.nextId++,vessel:e,s0:us(t,0,r.length),s1:us(i,0,r.length),cause:s,at:n.t,sealed:!1,stain:.4};a.s1-a.s0<1&&(a.s1=Math.min(r.length,a.s0+3)),n.dissections.push(a),ah(n),n.needFlow=!0;const o=e==="LAD"?"LAD":n.anat.vessels[e].name;Lt(n,{level:"danger",text:`Coronary DISSECTION in the ${o} from ${s==="wire"?"wire forcing":s==="stent-edge"?"stent oversizing (edge dissection)":s==="rupture"?"balloon rupture":"balloon oversizing"}.${a.sealed?"":" Flow is reduced until a stent covers it."}`,key:"dissection-"+a.id})}function Ll(n,e){if(!$n(e)||!Hr(e))return;const t=kt(n.anat,n.wire),[i,s]=_i(e),r=Zs(e);for(const a of Ks(t,i,s)){for(const c of n.stents){if(c.vessel!==a.vessel)continue;Math.min(c.s1,a.s1)-Math.max(c.s0,a.s0)>1&&r>c.expandedD&&(c.expandedD=r,c.maxPressure=Math.max(c.maxPressure,e.pressure))}const o=n.anat.vessels[a.vessel],l=o.refD[Os(o,(a.s0+a.s1)/2)];!n.flags.inflDissected&&o.kind==="coronary"&&r>Wn.dissectionRatio*l&&(n.flags.inflDissected=!0,e.kind==="stent"?Xr(n,a.vessel,a.s1+.3,a.s1+.3+Wn.edgeDissectionLength,"stent-edge"):Xr(n,a.vessel,a.s0,a.s1,"balloon"))}Bo(n)}function od(n,e){const t=kt(n.anat,n.wire),[i,s]=_i(e),r=Ks(t,i,s);for(const a of r)n.stents.push({id:n.nextId++,vessel:a.vessel,s0:a.s0,s1:a.s1,d:e.d,l:e.l,expandedD:Zs(e),maxPressure:e.pressure,at:n.t});Bo(n),Lt(n,{level:"ok",text:`Stent ${e.d.toFixed(2)} x ${e.l} mm deployed (permanent). Hold to nominal pressure, then deflate.`,key:"deployed-"+n.stents.length})}function ld(n,e){if(n.inflations.push(e),n.flags.inflDissected=!1,id(n,`${e.kind==="balloon"?"Balloon":"Stent balloon"} ${e.d}x${e.l}: ${e.maxPressure.toFixed(1)} atm max, Ø ${e.maxDiameter.toFixed(2)} mm, ${e.duration.toFixed(0)} s`),e.kind==="balloon"){const t=kt(n.anat,n.wire);for(const i of Ks(t,e.range[0],e.range[1]))n.balloonTx.push({vessel:i.vessel,s0:i.s0,s1:i.s1,diameter:e.maxDiameter*(1-Ns.recoil)});Bo(n)}e.duration>45&&Lt(n,{level:"warn",text:`That inflation lasted ${e.duration.toFixed(0)} s - keep inflations short to limit ischaemia.`,key:"long-infl"})}function es(n,e){const t=Va(e,n.snapshot);if(t)return Lt(n,{level:"warn",text:t,key:"lock-"+e},!1),!1;const i=Vr.find(s=>s.id===e);return e==="contrast"?(Ls(n),!0):(i.selectable&&(n.tool=e,e==="measure"&&(n.flags.qcaUsed=!0,n.flags.predilated&&(n.flags.qcaAfterPredil=!0)),e==="stent"&&(n.flags.stentLoaded=!0)),!0)}function zo(n){if(n.heparinGiven){Lt(n,{level:"info",text:`Heparin already given - ACT ${Math.round(n.phys.act)} s.`,key:"heparin-again"},!1);return}n.heparinGiven=!0,n.phys={...n.phys,heparinAt:n.t},Lt(n,{level:"ok",text:"Unfractionated heparin 70-100 IU/kg IV given. ACT will rise to ~285 s.",key:"heparin"})}function At(n,e){n.xray.pedal=e}function Ho(n,e,t,i=-1){n.carm.lao=us(e,-90,90),n.carm.cra=us(t,-45,45),n.carm.preset=i}function oh(n){const e=(n.carm.preset+1+Be.presets.length)%Be.presets.length,t=Be.presets[e];Ho(n,t.lao,t.cra,e)}function or(n,e,t){Ho(n,n.carm.lao+e,n.carm.cra+t,-1)}function qr(n,e,t,i){const s=e==="balloon"?n.balloon:n.stent,r=Gu(s,t,i);r.msg&&Lt(n,r.msg,!1),e==="balloon"?n.balloon=r.cath:n.stent=r.cath}function Hs(n){const e=n.tool==="balloon"?[n.balloon]:n.tool==="stent"?[n.stent]:[n.balloon,n.stent];for(const t of e)t.pressure>0&&(t.kind==="balloon"?n.balloon=Rl(t):n.stent=Rl(t))}function cd(n,e){n.wheel=us(n.wheel+e,-30,30)}function Ls(n){const e=n.guide;if(e.s<n.landmarks.aortaEntryS){Lt(n,{level:"warn",text:"Advance the guide into the aorta first - nothing to inject through yet.",key:"inject-no-guide"},!1);return}const t=e.engaged,i=t?"selective":"aortic",s=t?dn.selectiveMl:dn.aorticMl;n.contrast.totalMl+=s;const r=t?dn.bolusSelective:dn.bolusAortic,a=n.anat.vessels,o={},l={},c={},h=t?0:.08,d=t?Wr:[...Wr,"RCA"];let f=1;const p=[];for(const S of d){const x=n.flow[S];x&&(o[S]=x.arrival.map(R=>R+h),l[S]=x.factor.slice(),c[S]=t?1:dn.aorticCoronaryIntensity,p.push(...o[S]),(S==="LAD"||S==="LCX")&&(f=Math.min(f,Math.max(.15,Bs(n.flow,S)||.15))))}const g=a.aorta;o.aorta=g.pts.map((S,x)=>t?.05:x*g.ds/Yt.aorticVelocity),l.aorta=g.pts.map(()=>1),c.aorta=t?dn.refluxIntensity:1;const _=Yu(p,r,f),m=n.stents.length>0&&n.flags.deployedAndDeflated,u={t0:n.t,kind:i,bolus:r,duration:_,arrival:o,factor:l,intensity:c,aortaLimit:t?dn.refluxLength:1/0,lao:n.carm.lao,cra:n.carm.cra,afterStent:m};n.contrast.injections.push(u),n.contrast.current=u,n.xray.cineUntil=n.t+_;for(const S of n.dissections){const x=o[S.vessel];x&&isFinite(x[Os(a[S.vessel],S.s0)])&&(S.stain=Math.min(1.6,S.stain+.7))}t&&(n.flags.diagAngio=!0),m&&t&&n.flags.finalViews.push({lao:n.carm.lao,cra:n.carm.cra});const E=lh(n.carm.lao,n.carm.cra);Lt(n,{level:"info",text:`${t?"Selective left coronary injection":"Aortic root flush"} (${s} ml) - cine ${_.toFixed(1)} s in ${E}.`,key:"inject-"+n.contrast.injections.length}),n.contrast.totalMl>dn.safeTotalMl&&n.contrast.totalMl-s<=dn.safeTotalMl&&Lt(n,{level:"warn",text:`Contrast total above ${dn.safeTotalMl} ml - think of the kidneys.`,key:"contrast-high"})}function lh(n,e){const t=Math.round(n),i=Math.round(e),s=t===0?"AP":t>0?`LAO ${t}°`:`RAO ${-t}°`,r=i===0?"":i>0?` CRA ${i}°`:` CAU ${-i}°`;return s+r}function hd(n,e,t){const i=n.tool,s=Qu(i,e,n.wheel,t);n.wheel=s.wheelLeft;const{delta:r,dRot:a}=s,o=n.wire.pos>0,l=$n(n.balloon)||$n(n.stent);if(i==="guide"){const c=Ou(n.guide,{delta:r,dRot:a},{dt:t,routeLength:n.routeLength,root:n.anat.root,wireOut:o});n.guide=c.guide,c.msgs.forEach(h=>Lt(n,h))}else n.guide={...n.guide,speed:n.guide.speed*Math.max(0,1-t*6)};if(i==="wire"){const c=zu(n.wire,{delta:r,dRot:a,fine:e.fine},{dt:t,anat:n.anat,cathOut:l,guideEngaged:n.guide.engaged,rng:n.rng});n.wire=c.wire,c.ev.msgs.forEach(h=>Lt(n,h)),c.ev.dissection&&Xr(n,"LAD",n.anat.lesion.s0,n.anat.lesion.s1+2,"wire")}else{const c=n.wire;(c.buckle>0||c.resistance>0||c.speed>0)&&(n.wire={...c,buckle:Math.max(0,c.buckle-t*2),resistance:Math.max(0,c.resistance-t*1.5),speed:c.speed*Math.max(0,1-t*6),sinceRotate:c.sinceRotate+t})}for(const c of["balloon","stent"]){const h=c==="balloon"?n.balloon:n.stent,d=c==="balloon"?n.stent:n.balloon,f=i===c,p=Wu(h,{delta:f?r:0,inflate:f&&e.inflate,fine:e.fine},{t:n.t,dt:t,wireTip:n.wire.pos,wireOut:n.wire.pos>0,otherOut:$n(d)});if(c==="balloon"?n.balloon=p.cath:n.stent=p.cath,p.ev.msgs.forEach(g=>Lt(n,g)),p.ev.deployedNow&&od(n,p.cath),p.ev.ruptured&&(n.flags.ruptures++,n.rng()<Wn.ruptureDissectionChance)){const g=kt(n.anat,n.wire),[_,m]=_i(p.cath),u=Ks(g,_,m).find(E=>n.anat.vessels[E.vessel].kind==="coronary");u&&Xr(n,u.vessel,u.s0,u.s1,"rupture")}p.ev.record&&ld(n,p.ev.record)}}function Lr(n,e,t){if(n.ended)return;n.t+=t;const i=n.balloon.pressure>0||n.stent.pressure>0;hd(n,e,t);const s=n.balloon.pressure>0||n.stent.pressure>0;s&&(Ll(n,n.balloon),Ll(n,n.stent)),(s||i||n.needFlow)&&(ad(n),n.needFlow=!1);const r=Math.min(Bs(n.flow,"LAD"),Bs(n.flow,"LCX")),a=Ku(n.phys,{t:n.t,dt:t,occluded:n.occluded||r<=Yt.timi1,flow:r},n.rng);n.phys=a.phys,a.msgs.forEach(h=>Lt(n,h)),a.beat&&n.beatCount++;const o=n.t<n.xray.cineUntil;n.xray.active=n.xray.pedal||o,n.xray.mode=o?"cine":n.xray.pedal?"fluoro":"off",n.xray.active&&(n.xray.fluoroTime+=t,n.xray.everImaged=!0);for(const h of n.dissections)h.stain=Math.max(.15,h.stain-t/40);const l=Ga(n);n.xray.active&&n.guide.s>n.landmarks.chestS&&(n.flags.lookedOnFluoro=!0),l.balloonAcross&&n.balloon.pressure>=6&&(n.flags.predilInflated=!0),n.flags.predilInflated&&!n.flags.predilated&&n.balloon.pressure===0&&(n.flags.predilated=!0,Lt(n,{level:"ok",text:"Pre-dilation done. Withdraw the balloon, measure (QCA) and choose a stent.",key:"predilated"})),l.stentCovers&&!n.stent.deployed&&$n(n.stent)&&(n.flags.stentCovered=!0),n.stents.length>0&&n.stent.pressure===0&&!n.flags.deployedAndDeflated&&(n.flags.deployedAndDeflated=!0,Lt(n,{level:"ok",text:"Stent balloon deflated. Withdraw it and take final angiograms in two projections.",key:"deployed-deflated"})),n.snapshot=Ga(n);const c=td(n.stages,n.snapshot,n.t);n.stages=c.progress;for(const h of c.msgs)Lt(n,h)}function ud(n){const e=n.anat.vessels.LAD,t=n.anat.lesion;return bu(n.lumen.LAD,e.refD,e.ds,t.s0-6,t.s1+6)}class dd{sim;ui={started:!1,paused:!1,view:"3d",demo:null,mentorOpen:window.innerWidth>760,labels:!0,sound:!0,follow:!1,help:!1,debrief:!1,debriefShownForCompletion:!1,hover:null,fineLatch:!1};subs=new Map;constructor(){this.sim=Dl(Math.floor(Math.random()*1e9))}subscribe(e,t){return this.subs.has(e)||this.subs.set(e,new Set),this.subs.get(e).add(t),()=>this.subs.get(e).delete(t)}emit(e){this.subs.get(e)?.forEach(t=>t())}newCase(e=Math.floor(Math.random()*1e9)){this.sim=Dl(e),this.ui.debrief=!1,this.ui.debriefShownForCompletion=!1,this.ui.demo=null,this.ui.paused=!1,this.ui.hover=null,this.emit("case")}}const la=(n,e)=>{const t=Be.presets[e];Ho(n,t.lao,t.cra,e)},Il=(n,e,t=3)=>At(n,e%t<.5);function lr(n,e,t){const i=Rt(e-n);return t.rotate=Math.abs(i)<1.5?0:Math.sign(i),t.fine=Math.abs(i)<12,Math.abs(i)}function qa(n,e){const t=e==="balloon"?n.balloon:n.stent;if(t.pos<=0)return null;const[i,s]=_i(t),r=Ii(kt(n.anat,n.wire),(i+s)/2);return r.vessel==="LAD"?r.s:null}function Ul(n,e,t){const i=n.anat.lesion.center,s=qa(n,e);if(s===null)return t.advance=1,t.fine=!1,!1;const r=i-s;return Math.abs(r)<.15?(t.advance=0,!0):(t.fine=Math.abs(r)<6,t.advance=Math.sign(r)*(Math.abs(r)<.6?.4:1),!1)}function Nl(n,e,t,i,s,r){const a=e==="balloon"?n.balloon:n.stent;return a.pressure<t-.05?(s.inflate=!0,s.fine=a.pressure>t-1.5,!1):(s.inflate=!1,a.inflStart!==null&&n.t-a.inflStart>=i)}function fd(){let n=0;const e=[{say:"Demo: we start at the right radial artery. Select the 6F guide catheter (1).",run:(t,i,s)=>s<.3?!1:(es(t,"guide"),s>1.6)},{say:"Advance the guide up the forearm past the elbow, with brief fluoro taps to check position.",run:(t,i,s)=>(i.advance=1,Il(t,s,3.5),t.snapshot.guidePastElbow)},{say:"Up the brachial and axillary arteries, through the subclavian and brachiocephalic trunk into the aorta.",run:(t,i,s)=>(i.advance=1,Il(t,s,3.5),t.snapshot.guideInAorta&&t.flags.lookedOnFluoro?(At(t,!1),!0):(t.snapshot.guideInChest&&At(t,s%3.5<.8),!1))},{say:"Down the ascending aorta until the guide reaches the aortic root.",run:(t,i)=>{const s=t.routeLength-t.guide.s;return i.advance=1,i.fine=s<15,t.snapshot.guideAtRoot?(i.advance=0,At(t,!1),!0):(At(t,s<25),!1)}},{say:"Rotate the pre-shaped tip (A/D) until it faces the LEFT coronary cusp - watch the dial.",run:(t,i)=>(i.advance=0,lr(t.guide.rot,t.anat.root.leftCusp,i)<3?(i.rotate=0,!0):!1)},{say:"Facing the left cusp: advance gently (Shift) to seat the tip in the left main ostium.",run:(t,i)=>(i.rotate=0,i.fine=!0,i.advance=1,At(t,!0),t.guide.engaged?(i.advance=0,At(t,!1),!0):!1)},{view:"xray",say:"Engaged. Switch to RAO 30° CRA 30° and inject contrast for the diagnostic angiogram: note the tight mid-LAD lesion and slow (TIMI 2) distal filling.",run:(t,i,s)=>(i.fine=!1,s<.6?!1:(t.flags.diagAngio||(la(t,0),Ls(t),n=t.contrast.current.duration),s>n+1))},{view:"3d",say:"Give heparin (G) before wiring. ACT rises from ~128 s to ~285 s.",run:(t,i,s)=>(t.heparinGiven||zo(t),s>2)},{say:'Select the 0.014" wire and advance it into the left main. The tip currently points toward the circumflex...',run:(t,i,s)=>{if(t.tool!=="wire"&&es(t,"wire"),s<.5)return!1;const r=as(t.anat,t.wire);return i.advance=1,i.fine=!1,r&&r.dist<8?(i.advance=0,!0):!1}},{say:"...so rotate the tip toward the LAD before the bifurcation, then advance. Steer away from the diagonals.",run:(t,i)=>{const s=t.anat.branches.find(r=>r.child==="LAD");if(!t.wire.chain.includes("LAD")){const r=lr(t.wire.rot,s.angle,i);return i.advance=r<10?1:0,i.fine=!0,!1}return i.rotate=0,i.advance=0,!0}},{say:"Advance down the proximal LAD, keeping the tip away from D1. Slow down (Shift) before the lesion.",run:(t,i)=>{const s=as(t.anat,t.wire);if(s&&s.b.side&&s.dist<12){const a=s.b.angle+180;if(Yn(t.wire.rot,s.b.angle)<vt.branchCapture+25)return lr(t.wire.rot,a,i),i.advance=0,!1}i.rotate=0;const r=t.snapshot.wireVessel==="LAD"?t.snapshot.wireLocal:0;return i.fine=r>t.anat.lesion.s0-6,i.advance=1,r>=t.anat.lesion.s0-1}},{say:"Cross the lesion slowly with gentle torque - no buckling, no forcing.",run:(t,i,s)=>(i.fine=!0,i.advance=1,i.rotate=Math.sin(s*3)>0?.3:-.3,t.wire.crossed?(i.rotate=0,!0):!1)},{say:"Lesion crossed. Park the wire tip in the distal LAD for support (stay clear of D2 and the vessel end).",run:(t,i)=>{const s=as(t.anat,t.wire);return s&&s.b.side&&s.dist<12&&Yn(t.wire.rot,s.b.angle)<vt.branchCapture+25?(lr(t.wire.rot,s.b.angle+180,i),i.advance=0,!1):(i.rotate=0,i.fine=!1,i.advance=1,(t.snapshot.wireVessel==="LAD"?t.snapshot.wireLocal:0)>=t.anat.lesion.s1+vt.distalPark+12?(i.advance=0,!0):!1)}},{say:"Select a 2.5 x 15 mm balloon (about 0.85x the reference) and advance it over the wire.",run:(t,i,s)=>(i.advance=0,t.tool!=="balloon"&&(es(t,"balloon"),qr(t,"balloon",2.5,15)),s>1.2)},{view:"xray",say:"Centre the balloon markers on the lesion (fine positioning near the target), confirming on fluoro.",run:(t,i,s)=>{const r=Ul(t,"balloon",i);return At(t,qa(t,"balloon")!==null&&s%2<.6),r&&At(t,!1),r}},{view:"3d",say:"Inflate to 10 atm and hold ~12 s. Watch the ST segment rise and the patient report chest pain - expected during occlusion.",run:(t,i)=>(i.advance=0,Nl(t,"balloon",10,12,i))},{say:"Deflate (Q). Flow returns and the ST segment settles.",run:(t,i)=>(i.inflate=!1,i.fine=!1,t.balloon.pressure>0&&Hs(t),t.balloon.pressure===0&&t.flags.predilated)},{say:"Withdraw the balloon back into the guide.",run:(t,i)=>(i.advance=-1,t.balloon.pos<=-5?(i.advance=0,!0):!1)},{say:"Measure (QCA): reference ~2.95 mm, lesion ~13-14 mm long. Choose a 3.0 x 18 mm stent - 1:1 sizing and ≥ 2 mm margins.",run:(t,i,s)=>(t.tool!=="measure"&&es(t,"measure"),s>3.5)},{say:"Load the 3.0 x 18 mm drug-eluting stent and advance it to the lesion.",run:(t,i,s)=>(t.tool!=="stent"&&(es(t,"stent"),qr(t,"stent",3,18)),i.advance=0,s>1.2)},{view:"xray",say:"Centre the stent on the lesion so both margins are about 2 mm.",run:(t,i,s)=>{const r=Ul(t,"stent",i);return At(t,qa(t,"stent")!==null&&s%2<.6),r&&At(t,!1),r}},{view:"3d",say:"Deploy at 12 atm (Ø ≈ 3.07 mm) and hold ~12 s.",run:(t,i)=>(i.advance=0,Nl(t,"stent",12,12,i))},{say:"Deflate the delivery balloon - the stent stays, holding the lumen open.",run:(t,i)=>(i.inflate=!1,i.fine=!1,t.stent.pressure>0&&Hs(t),t.stent.pressure===0&&t.flags.deployedAndDeflated)},{say:"Withdraw the delivery balloon into the guide.",run:(t,i)=>(i.advance=-1,t.stent.pos<=-5?(i.advance=0,!0):!1)},{view:"xray",say:"Final angiogram in RAO 30° CRA 30°: brisk TIMI 3 flow, no residual stenosis.",run:(t,i,s)=>s<.5?!1:(t.flags.finalViews.length===0&&(la(t,0),Ls(t),n=t.contrast.current.duration),s>n+.8)},{say:"Second, orthogonal view: LAO 45° CRA 30°. No edge dissection - case complete.",run:(t,i,s)=>s<.5?!1:(t.flags.finalViews.length===1&&(la(t,2),Ls(t),n=t.contrast.current.duration),s>n+.8)}];return{steps:e,index:0,stepTime:0,input:zs(),done:!1,narration:e[0].say}}function ch(n,e,t){if(n.done)return;const i=n.steps[n.index],s=n.input,r=i.run(e,s,n.stepTime);n.stepTime+=t,r&&(n.index++,n.stepTime=0,n.input=zs(),n.index>=n.steps.length?(n.done=!0,At(e,!1),n.narration="Demo complete. Press any key to take over, or start a new case."):n.narration=n.steps[n.index].say)}const pd=n=>`${Math.round(n*100)}%`;function md(n){const e=[],t=(l,c,h,d,f,p)=>e.push({id:l,label:c,value:h,status:d,penalty:d==="ok"?0:f,teaching:p});{const l=n.residualStenosis,c=l<=cn.residualOk?"ok":l<=cn.residualWarn?"warn":"bad";t("residual","Residual stenosis",pd(l),c,c==="warn"?8:20,c==="ok"?"Optimal angiographic result: less than 10% residual narrowing in the treated segment.":"A residual narrowing remains. Post-dilate inside the stent with a non-compliant balloon, or cover any untreated diseased segment.")}{const l=n.timi>=3?"ok":"bad";t("timi","Final TIMI flow",`TIMI ${n.timi}`,l,n.timi===2?15:22,l==="ok"?"TIMI 3: brisk, complete filling and washout of the distal vessel.":"Reduced flow at the end of a case is a warning sign (dissection, residual lesion, no-reflow). Find and fix the cause before leaving the lab.")}if(n.stentRatio===null)t("sizing","Stent diameter vs reference","no stent","bad",0,"No stent was deployed over the lesion.");else{const l=n.stentRatio,c=l>=cn.stentRatioOk[0]&&l<=cn.stentRatioOk[1]?"ok":l>=cn.stentRatioWarn[0]&&l<=cn.stentRatioWarn[1]?"warn":"bad";t("sizing","Stent diameter vs reference",`${l.toFixed(2)} x`,c,c==="warn"?5:10,c==="ok"?"Well sized: the expanded stent matches the reference diameter (0.95-1.15x).":l<1?"Undersized: risk of malapposition and stent thrombosis. Post-dilate to the reference diameter.":`Oversized: more than ${Wn.dissectionRatio}x the reference risks edge dissection or perforation.`)}if(!n.margins||n.geographicMiss)t("coverage","Lesion coverage",n.margins?`prox ${n.margins.prox.toFixed(1)} / dist ${n.margins.dist.toFixed(1)} mm`:"not covered","bad",15,"Geographic miss: part of the diseased segment is not covered by stent. Choose a length = lesion + ~2 mm each side and centre it with the markers.");else{const l=n.margins.prox>=Wn.goodMargin&&n.margins.dist>=Wn.goodMargin;t("coverage","Lesion coverage",`prox ${n.margins.prox.toFixed(1)} / dist ${n.margins.dist.toFixed(1)} mm`,l?"ok":"warn",4,l?"Whole lesion covered with healthy margins at both ends.":"Covered, but with thin margins. Edges landing in plaque are prone to edge restenosis - aim for ≥ 1.5 mm.")}{const l=Math.max(0,n.stentCount-1);t("extra","Extra stents",String(l),l===0?"ok":"warn",Math.min(10,l*5),l===0?"One stent for one lesion - economical and fewer metal layers.":"Additional stents add cost and long-term risk. Accurate sizing first time usually avoids them (bailout stenting is still right when needed).")}if(t("heparin","Heparin before wiring",n.heparin?"given":"not given",n.heparin?"ok":"bad",15,n.heparin?"Anticoagulation before the wire enters the coronary prevents thrombus on devices.":"Always give heparin (target ACT > 250 s) before wiring a coronary."),t("predil","Pre-dilation",n.predilated?"done":"not done",n.predilated?"ok":"warn",5,n.predilated?"Lesion preparation helps the stent cross and expand fully.":"Pre-dilating a tight lesion helps stent delivery and expansion."),t("qca","QCA used",n.qcaUsed?"yes":"no",n.qcaUsed?"ok":"warn",4,n.qcaUsed?"Measuring rather than eyeballing reduces sizing errors.":"Visual estimation is notoriously inaccurate - measure the reference diameter and lesion length."),!n.dissections.length)t("dissection","Dissection","none","ok",0,"No vessel injury.");else{const l=n.dissections.filter(c=>!c.sealed).length;t("dissection","Dissection",`${n.dissections.length} (${l?l+" unsealed":"sealed"})`,l?"bad":"warn",l?20:5,l?"An uncovered dissection can propagate and close the vessel. Cover it with a stent while the wire is still across.":"Dissection occurred but was sealed by a stent. Avoid oversizing and forcing to prevent it.")}t("forcing","Wire forcing",n.wireForcing>.05?"forced":"gentle",n.wireForcing>.05?"warn":"ok",4,n.wireForcing>.05?"Pushing hard against resistance makes the wire buckle and enter the vessel wall. Slow down and torque gently.":"The lesion was crossed gently - the wire stayed in the true lumen."),t("rupture","Balloon rupture",String(n.balloonRuptures),n.balloonRuptures?"bad":"ok",10,n.balloonRuptures?"Never exceed the rated burst pressure: ruptures can dissect or perforate the vessel.":"Pressures stayed within the rated burst pressure.");{const l=n.longestInflation,c=l<=cn.inflationOk?"ok":l<=cn.inflationWarn?"warn":"bad";t("inflation","Longest inflation",`${l.toFixed(0)} s`,c,c==="warn"?5:10,c==="ok"?"Short inflations limit ischaemia.":"Long occlusions cause ischaemia, arrhythmias and hypotension. Deflate and let the heart recover between inflations.")}{const l=n.contrastMl,c=l<=cn.contrastOk?"ok":l<=cn.contrastWarn?"warn":"bad";t("contrast","Contrast volume",`${l} ml`,c,c==="warn"?5:10,c==="ok"?"Economical contrast use protects the kidneys.":"High contrast volume raises the risk of contrast-induced nephropathy. Use selective injections and plan each shot.")}{const l=n.fluoroSec,c=l<=cn.fluoroOk?"ok":l<=cn.fluoroWarn?"warn":"bad";t("fluoro","Fluoroscopy time",`${Math.floor(l/60)}:${String(Math.round(l%60)).padStart(2,"0")} min`,c,c==="warn"?5:10,c==="ok"?"ALARA: radiation kept as low as reasonably achievable.":"Long fluoro times increase radiation to the patient and the team. Use short taps and last-image-hold.")}t("views","Final views",String(n.finalViews),n.finalViews>=2?"ok":n.finalViews===1?"warn":"bad",n.finalViews===1?5:8,n.finalViews>=2?"Two distinct projections confirm the result.":"One view can hide an edge dissection or residual stenosis - always check in at least two projections.");const i=e.reduce((l,c)=>l+c.penalty,0),s=Math.max(0,Math.min(100,Math.round(100-i)));let r;n.stentDeployed?s>=90?r="Excellent":s>=75?r="Good":s>=60?r="Acceptable":r="Needs work":r="Incomplete";const a=e.filter(l=>l.status==="bad"),o=r==="Incomplete"?`Case ended after ${n.stagesCompleted} of ${nn.length} stages - no stent was deployed.`:r==="Excellent"?"Excellent result: well-sized stent, full coverage, TIMI 3 flow and an economical procedure.":r==="Good"?"Good result with a few points to refine.":r==="Acceptable"?"Acceptable, but several aspects need attention.":`Needs work: ${a.map(l=>l.label.toLowerCase()).slice(0,3).join(", ")}.`;return{score:s,grade:r,headline:o,items:e}}function gd(n){const e=n.anat.vessels,t=n.anat.lesion,i=e.LAD,s=Eu(n.lumen.LAD,i.refD,i.ds,t.s0-2,t.s1+2),r=["LM","LAD","LCX","D1","D2"].map(p=>({id:p,parent:e[p].parent,parentS:e[p].parentS,ds:e[p].ds,lumen:n.lumen[p],ref:e[p].refD})),a=sh(r,Yt.coronaryVelocity,[],n.dissections.map(p=>({vessel:p.vessel,s0:p.s0,sealed:p.sealed}))),o=ih(Bs(a,"LAD")),l=n.stents.filter(p=>p.vessel==="LAD"&&p.s1>t.s0&&p.s0<t.s1);let c=null,h=null,d=!0;if(l.length){const p=i.refD[Os(i,t.center)];c=Math.max(...l.map(u=>u.expandedD))/p;const g=l.map(u=>[u.s0,u.s1]).sort((u,E)=>u[0]-E[0]),_=[];for(const u of g){const E=_[_.length-1];E&&u[0]<=E[1]+.2?E[1]=Math.max(E[1],u[1]):_.push(u.slice())}const m=_.find(u=>u[0]<=t.s0&&u[1]>=t.s1);if(m)d=!1,h={prox:t.s0-m[0],dist:m[1]-t.s1};else{const u=_.reduce((E,S)=>S[1]-S[0]>E[1]-E[0]?S:E);h={prox:t.s0-u[0],dist:u[1]-t.s1}}}const f=Math.max(0,...n.inflations.map(p=>p.duration),...[n.balloon,n.stent].filter(p=>p.inflStart!==null).map(p=>n.t-p.inflStart));return{stagesCompleted:n.stages.current,stentDeployed:n.stents.length>0,residualStenosis:s,timi:o,stentRatio:c,margins:h,geographicMiss:d,stentCount:n.stents.length,heparin:n.heparinGiven,predilated:n.flags.predilated,qcaUsed:n.flags.qcaUsed,dissections:n.dissections.map(p=>({sealed:p.sealed,cause:p.cause})),wireForcing:n.wire.maxRisk,balloonRuptures:n.flags.ruptures,longestInflation:f,contrastMl:n.contrast.totalMl,fluoroSec:n.xray.fluoroTime,finalViews:n.snapshot.finalViews}}const Vo="180",os={ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_d=0,Fl=1,vd=2,hh=1,xd=2,Vn=3,Kn=0,jt=1,$t=2,ui=0,ls=1,Ol=2,kl=3,Bl=4,uh=5,ri=100,Md=101,yd=102,Sd=103,bd=104,dh=200,Ed=201,wd=202,Td=203,Ya=204,$a=205,Ad=206,Rd=207,fh=208,Cd=209,Dd=210,Pd=211,Ld=212,Id=213,Ud=214,ja=0,Ka=1,Za=2,ds=3,Ja=4,Qa=5,eo=6,to=7,ph=0,Nd=1,Fd=2,Dn=0,Od=1,kd=2,Bd=3,no=4,zd=5,Hd=6,Vd=7,mh=300,fs=301,ps=302,io=303,so=304,Zr=306,Vs=1e3,Ci=1001,ro=1002,wn=1003,Gd=1004,cr=1005,Rn=1006,ca=1007,Di=1008,Pn=1009,gh=1010,_h=1011,Gs=1012,Go=1013,Ui=1014,Gn=1015,vs=1016,Wo=1017,Xo=1018,Ws=1020,vh=35902,xh=35899,Mh=1021,yh=1022,bn=1023,Xs=1026,qs=1027,Sh=1028,qo=1029,bh=1030,Yo=1031,$o=1033,Ir=33776,Ur=33777,Nr=33778,Fr=33779,ao=35840,oo=35841,lo=35842,co=35843,ho=36196,uo=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,vo=37812,xo=37813,Mo=37814,yo=37815,So=37816,bo=37817,Eo=37818,wo=37819,To=37820,Ao=37821,Ro=36492,Co=36494,Do=36495,Po=36283,Lo=36284,Io=36285,Uo=36286,Wd=3200,Xd=3201,Eh=0,qd=1,ai="",tn="srgb",ms="srgb-linear",Yr="linear",nt="srgb",Oi=7680,zl=519,Yd=512,$d=513,jd=514,wh=515,Kd=516,Zd=517,Jd=518,Qd=519,Hl=35044,ki=35048,Vl="300 es",Cn=2e3,$r=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const Is=Math.PI/180,Ys=180/Math.PI;function xs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function jo(n,e){return(n%e+e)%e}function ef(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function tf(n,e,t){return n!==e?(t-n)/(e-n):0}function Us(n,e,t){return(1-t)*n+t*e}function nf(n,e,t,i){return Us(n,e,1-Math.exp(-t*i))}function sf(n,e=1){return e-Math.abs(jo(n,e*2)-e)}function rf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function af(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function of(n,e){return n+Math.floor(Math.random()*(e-n+1))}function lf(n,e){return n+Math.random()*(e-n)}function cf(n){return n*(.5-Math.random())}function hf(n){n!==void 0&&(Gl=n);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uf(n){return n*Is}function df(n){return n*Ys}function ff(n){return(n&n-1)===0&&n!==0}function pf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gf(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),f=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ts(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gs={DEG2RAD:Is,RAD2DEG:Ys,generateUUID:xs,clamp:Ge,euclideanModulo:jo,mapLinear:ef,inverseLerp:tf,lerp:Us,damp:nf,pingpong:sf,smoothstep:rf,smootherstep:af,randInt:of,randFloat:lf,randFloatSpread:cf,seededRandom:hf,degToRad:uf,radToDeg:df,isPowerOfTwo:ff,ceilPowerOfTwo:pf,floorPowerOfTwo:mf,setQuaternionFromProperEuler:gf,normalize:zt,denormalize:ts};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-o;const u=l*f+c*p+h*g+d*_,E=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const R=Math.sqrt(S),T=Math.atan2(R,u*E);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const x=o*E;if(l=l*m+f*x,c=c*m+p*x,h=h*m+g*x,d=d*m+_*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-o*p,e[t+2]=c*g+h*p+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new U,Wl=new fi;class He{constructor(e,t,i,s,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],u=s[6],E=s[1],S=s[4],x=s[7],R=s[2],T=s[5],A=s[8];return r[0]=a*_+o*E+l*R,r[3]=a*m+o*S+l*T,r[6]=a*u+o*x+l*A,r[1]=c*_+h*E+d*R,r[4]=c*m+h*S+d*T,r[7]=c*u+h*x+d*A,r[2]=f*_+p*E+g*R,r[5]=f*m+p*S+g*T,r[8]=f*u+p*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new He;function Th(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _f(){const n=jr("canvas");return n.style.display="block",n}const Xl={};function $s(n){n in Xl||(Xl[n]=!0,console.warn(n))}function vf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ql=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){const n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:e,whitePoint:i,transfer:Yr,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:ql,fromXYZ:Yl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}const Ke=xf();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class Mf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bi===void 0&&(Bi=jr("canvas")),Bi.width=e.width,Bi.height=e.height;const s=Bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Bi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jn(t[i]/255)*255):t[i]=jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yf=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(da(s[a].image)):r.push(da(s[a]))}else r=da(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;const fa=new U;class Gt extends Ni{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Ci,s=Ci,r=Rn,a=Di,o=bn,l=Pn,c=Gt.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=xs(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=mh;Gt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(p+1)/2,R=(u+1)/2,T=(h+f)/4,A=(d+_)/4,L=(g+m)/4;return S>x&&S>R?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=A/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=L/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=L/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bf extends Ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Gt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends bf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ah extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ef extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hr.copy(i.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),ur.subVectors(this.max,bs),zi.subVectors(e.a,bs),Hi.subVectors(e.b,bs),Vi.subVectors(e.c,bs),Zn.subVectors(Hi,zi),Jn.subVectors(Vi,Hi),Mi.subVectors(zi,Vi);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-Mi.z,Mi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,Mi.z,0,-Mi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-Mi.y,Mi.x,0];return!pa(t,zi,Hi,Vi,ur)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,zi,Hi,Vi,ur))?!1:(dr.crossVectors(Zn,Jn),t=[dr.x,dr.y,dr.z],pa(t,zi,Hi,Vi,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new U,new U,new U,new U,new U,new U,new U,new U],vn=new U,hr=new Js,zi=new U,Hi=new U,Vi=new U,Zn=new U,Jn=new U,Mi=new U,bs=new U,ur=new U,dr=new U,yi=new U;function pa(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){yi.fromArray(n,r);const o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),h=i.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wf=new Js,Es=new U,ma=new U;class Jr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Es,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(ma)),this.expandByPoint(Es.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Nn=new U,ga=new U,fr=new U,Qn=new U,_a=new U,pr=new U,va=new U;class Zo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ga.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(ga);const r=e.distanceTo(t)*.5,a=-this.direction.dot(fr),o=Qn.dot(this.direction),l=-Qn.dot(fr),c=Qn.lengthSq(),h=Math.abs(1-a*a);let d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ga).addScaledVector(fr,f),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,s,r){_a.subVectors(t,e),pr.subVectors(i,e),va.crossVectors(_a,pr);let a=this.direction.dot(va),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(pr.crossVectors(Qn,pr));if(l<0)return null;const c=o*this.direction.dot(_a.cross(Qn));if(c<0||l+c>a)return null;const h=-o*Qn.dot(va);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,s,r,a,o,l,c,h,d,f,p,g,_,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,f,p,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,d,f,p,g,_,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tf,e,Af)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ei.crossVectors(i,Jt),ei.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ei.crossVectors(i,Jt)),ei.normalize(),mr.crossVectors(Jt,ei),s[0]=ei.x,s[4]=mr.x,s[8]=Jt.x,s[1]=ei.y,s[5]=mr.y,s[9]=Jt.y,s[2]=ei.z,s[6]=mr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],u=i[14],E=i[3],S=i[7],x=i[11],R=i[15],T=s[0],A=s[4],L=s[8],y=s[12],b=s[1],P=s[5],k=s[9],H=s[13],q=s[2],V=s[6],Y=s[10],Z=s[14],G=s[3],oe=s[7],fe=s[11],Me=s[15];return r[0]=a*T+o*b+l*q+c*G,r[4]=a*A+o*P+l*V+c*oe,r[8]=a*L+o*k+l*Y+c*fe,r[12]=a*y+o*H+l*Z+c*Me,r[1]=h*T+d*b+f*q+p*G,r[5]=h*A+d*P+f*V+p*oe,r[9]=h*L+d*k+f*Y+p*fe,r[13]=h*y+d*H+f*Z+p*Me,r[2]=g*T+_*b+m*q+u*G,r[6]=g*A+_*P+m*V+u*oe,r[10]=g*L+_*k+m*Y+u*fe,r[14]=g*y+_*H+m*Z+u*Me,r[3]=E*T+S*b+x*q+R*G,r[7]=E*A+S*P+x*V+R*oe,r[11]=E*L+S*k+x*Y+R*fe,r[15]=E*y+S*H+x*Z+R*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*p-i*l*p)+_*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+i*a*p+r*o*h-i*c*h)+u*(-s*o*h-t*l*d+t*o*f+s*a*d-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],E=d*m*c-_*f*c+_*l*p-o*m*p-d*l*u+o*f*u,S=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,x=h*_*c-g*d*c+g*o*p-a*_*p-h*o*u+a*d*u,R=g*d*l-h*_*l-g*o*f+a*_*f+h*o*m-a*d*m,T=t*E+i*S+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=E*A,e[1]=(_*f*r-d*m*r-_*s*p+i*m*p+d*s*u-i*f*u)*A,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*u+i*l*u)*A,e[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*p-i*l*p)*A,e[4]=S*A,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*u+t*f*u)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*u-t*l*u)*A,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*A,e[8]=x*A,e[9]=(g*d*r-h*_*r-g*i*p+t*_*p+h*i*u-t*d*u)*A,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*u+t*o*u)*A,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*p-t*o*p)*A,e[12]=R*A,e[13]=(h*_*s-g*d*s+g*i*f-t*_*f-h*i*m+t*d*m)*A,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*A,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,_=a*h,m=a*d,u=o*d,E=l*c,S=l*h,x=l*d,R=i.x,T=i.y,A=i.z;return s[0]=(1-(_+u))*R,s[1]=(p+x)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(f+u))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+S)*A,s[9]=(m-E)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const a=Gi.set(s[4],s[5],s[6]).length(),o=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);const c=1/r,h=1/a,d=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,t.setFromRotationMatrix(xn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Cn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===$r)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Cn,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Cn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===$r)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new U,xn=new ft,Tf=new U(0,0,0),Af=new U(1,1,1),ei=new U,mr=new U,Jt=new U,$l=new ft,jl=new fi;class Ln{constructor(e=0,t=0,i=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rf=0;const Kl=new U,Wi=new fi,Fn=new ft,gr=new U,ws=new U,Cf=new U,Df=new fi,Zl=new U(1,0,0),Jl=new U(0,1,0),Ql=new U(0,0,1),ec={type:"added"},Pf={type:"removed"},Xi={type:"childadded",child:null},xa={type:"childremoved",child:null};class Ut extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new U,t=new Ln,i=new fi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new He}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gr.copy(e):gr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ws,gr,this.up):Fn.lookAt(gr,ws,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ec),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ec),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new U(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new U,On=new U,Ma=new U,kn=new U,qi=new U,Yi=new U,tc=new U,ya=new U,Sa=new U,ba=new U,Ea=new st,wa=new st,Ta=new st;class Sn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mn.subVectors(s,t),On.subVectors(i,t),Ma.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(On),l=Mn.dot(Ma),c=On.dot(On),h=On.dot(Ma),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ea.setScalar(0),wa.setScalar(0),Ta.setScalar(0),Ea.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ea,r.x),a.addScaledVector(wa,r.y),a.addScaledVector(Ta,r.z),a}static isFrontFacing(e,t,i,s){return Mn.subVectors(i,t),On.subVectors(e,t),Mn.cross(On).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),Mn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;qi.subVectors(s,i),Yi.subVectors(r,i),ya.subVectors(e,i);const l=qi.dot(ya),c=Yi.dot(ya);if(l<=0&&c<=0)return t.copy(i);Sa.subVectors(e,s);const h=qi.dot(Sa),d=Yi.dot(Sa);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(qi,a);ba.subVectors(e,r);const p=qi.dot(ba),g=Yi.dot(ba);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Yi,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return tc.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(tc,o);const u=1/(m+_+f);return a=_*u,o=f*u,t.copy(i).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Aa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=jo(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Aa(a,r,e+1/3),this.g=Aa(a,r,e),this.b=Aa(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const i=Rh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Ke.workingToColorSpace(Ft.copy(this),e),Math.round(Ge(Ft.r*255,0,255))*65536+Math.round(Ge(Ft.g*255,0,255))*256+Math.round(Ge(Ft.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ft.copy(this),t);const i=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=tn){Ke.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,s=Ft.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(_r);const i=Us(ti.h,_r.h,t),s=Us(ti.s,_r.s,t),r=Us(ti.l,_r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Fe;Fe.NAMES=Rh;let Lf=0;class Qs extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=ls,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=$a,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ya&&(i.blendSrc=this.blendSrc),this.blendDst!==$a&&(i.blendDst=this.blendDst),this.blendEquation!==ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qr extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new U,vr=new Ie;let If=0;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:If++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ts(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hl&&(e.usage=this.usage),e}}class Ch extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dh extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Uf=0;const hn=new ft,Ra=new Ut,$i=new U,Qt=new Js,Ts=new Js,Pt=new U;class an extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?Dh:Ch)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Qt.min,Ts.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,Ts.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(Ts.min),Qt.expandByPoint(Ts.max))}Qt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),Pt.add($i)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new U,l[L]=new U;const c=new U,h=new U,d=new U,f=new Ie,p=new Ie,g=new Ie,_=new U,m=new U;function u(L,y,b){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,b),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[y].add(_),o[b].add(_),l[L].add(m),l[y].add(m),l[b].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,y=E.length;L<y;++L){const b=E[L],P=b.start,k=b.count;for(let H=P,q=P+k;H<q;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new U,x=new U,R=new U,T=new U;function A(L){R.fromBufferAttribute(s,L),T.copy(R);const y=o[L];S.copy(y),S.sub(R.multiplyScalar(R.dot(y))).normalize(),x.crossVectors(T,y);const P=x.dot(l[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,P)}for(let L=0,y=E.length;L<y;++L){const b=E[L],P=b.start,k=b.count;for(let H=P,q=P+k;H<q;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new Ot(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new ft,Si=new Zo,xr=new Jr,ic=new U,Mr=new U,yr=new U,Sr=new U,Ca=new U,br=new U,sc=new U,Er=new U;class dt extends Ut{constructor(e=new an,t=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ca.fromBufferAttribute(d,e),a?br.addScaledVector(Ca,h):br.addScaledVector(Ca.sub(t),h))}t.add(br)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(xr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(xr,ic)===null||Si.origin.distanceToSquared(ic)>(e.far-e.near)**2))&&(nc.copy(r).invert(),Si.copy(e.ray).applyMatrix4(nc),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,R=S;x<R;x+=3){const T=o.getX(x),A=o.getX(x+1),L=o.getX(x+2);s=wr(this,u,e,i,c,h,d,T,A,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const E=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);s=wr(this,a,e,i,c,h,d,E,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,R=S;x<R;x+=3){const T=x,A=x+1,L=x+2;s=wr(this,u,e,i,c,h,d,T,A,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const E=m,S=m+1,x=m+2;s=wr(this,a,e,i,c,h,d,E,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Nf(n,e,t,i,s,r,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Kn,o),l===null)return null;Er.copy(o),Er.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:n}}function wr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Mr),n.getVertexPosition(l,yr),n.getVertexPosition(c,Sr);const h=Nf(n,e,t,i,Mr,yr,Sr,sc);if(h){const d=new U;Sn.getBarycoord(sc,Mr,yr,Sr,d),s&&(h.uv=Sn.getInterpolatedAttribute(s,o,l,c,d,new Ie)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,o,l,c,d,new Ie)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};Sn.getNormal(Mr,yr,Sr,f.normal),h.face=f,h.barycoord=d}return h}class Ms extends an{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function g(_,m,u,E,S,x,R,T,A,L,y){const b=x/A,P=R/L,k=x/2,H=R/2,q=T/2,V=A+1,Y=L+1;let Z=0,G=0;const oe=new U;for(let fe=0;fe<Y;fe++){const Me=fe*P-H;for(let Oe=0;Oe<V;Oe++){const Ze=Oe*b-k;oe[_]=Ze*E,oe[m]=Me*S,oe[u]=q,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[u]=T>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(Oe/A),d.push(1-fe/L),Z+=1}}for(let fe=0;fe<L;fe++)for(let Me=0;Me<A;Me++){const Oe=f+Me+V*fe,Ze=f+Me+V*(fe+1),rt=f+(Me+1)+V*(fe+1),Ye=f+(Me+1)+V*fe;l.push(Oe,Ze,Ye),l.push(Ze,rt,Ye),G+=6}o.addGroup(p,G,y),p+=G,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const s in i)e[s]=i[s]}return e}function Ff(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ph(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Of={clone:_s,merge:Ht};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lh extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new U,rc=new Ie,ac=new Ie;class qt extends Lh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,rc,ac),t.subVectors(ac,rc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ki=1;class zf extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(ji,Ki,e,t);s.layers=this.layers,this.add(s);const r=new qt(ji,Ki,e,t);r.layers=this.layers,this.add(r);const a=new qt(ji,Ki,e,t);a.layers=this.layers,this.add(a);const o=new qt(ji,Ki,e,t);o.layers=this.layers,this.add(o);const l=new qt(ji,Ki,e,t);l.layers=this.layers,this.add(l);const c=new qt(ji,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ih extends Gt{constructor(e=[],t=fs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hf extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ih(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ms(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:ui});r.uniforms.tEquirect.value=t;const a=new dt(s,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Rn),new zf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class sn extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vf={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new Qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class No extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pa=new U,Gf=new U,Wf=new He;class si{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Pa.subVectors(i,t).cross(Gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wf.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Jr,Xf=new Ie(.5,.5),Tr=new U;class el{constructor(e=new si,t=new si,i=new si,s=new si,r=new si,a=new si){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],u=r[11],E=r[12],S=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-a,p-h,u-g,R-E).normalize(),s[1].setComponents(c+a,p+h,u+g,R+E).normalize(),s[2].setComponents(c+o,p+d,u+_,R+S).normalize(),s[3].setComponents(c-o,p-d,u-_,R-S).normalize(),i)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,p-f,u-m,R-x).normalize();else if(s[4].setComponents(c-l,p-f,u-m,R-x).normalize(),t===Cn)s[5].setComponents(c+l,p+f,u+m,R+x).normalize();else if(t===$r)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=Xf.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Tr.x=s.normal.x>0?e.max.x:e.min.x,Tr.y=s.normal.y>0?e.max.y:e.min.y,Tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qf extends Gt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uh extends Gt{constructor(e,t,i=Ui,s,r,a,o=wn,l=wn,c,h=Xs,d=1){if(h!==Xs&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nh extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class er extends an{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const _=[],m=i/2;let u=0;E(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(p,2));function E(){const x=new U,R=new U;let T=0;const A=(t-e)/i;for(let L=0;L<=r;L++){const y=[],b=L/r,P=b*(t-e)+e;for(let k=0;k<=s;k++){const H=k/s,q=H*l+o,V=Math.sin(q),Y=Math.cos(q);R.x=P*V,R.y=-b*i+m,R.z=P*Y,d.push(R.x,R.y,R.z),x.set(V,A,Y).normalize(),f.push(x.x,x.y,x.z),p.push(H,1-b),y.push(g++)}_.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const b=_[y][L],P=_[y+1][L],k=_[y+1][L+1],H=_[y][L+1];(e>0||y!==0)&&(h.push(b,P,H),T+=3),(t>0||y!==r-1)&&(h.push(P,k,H),T+=3)}c.addGroup(u,T,0),u+=T}function S(x){const R=g,T=new Ie,A=new U;let L=0;const y=x===!0?e:t,b=x===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;const P=g;for(let k=0;k<=s;k++){const q=k/s*l+o,V=Math.cos(q),Y=Math.sin(q);A.x=y*Y,A.y=m*b,A.z=y*V,d.push(A.x,A.y,A.z),f.push(0,b,0),T.x=V*.5+.5,T.y=Y*.5*b+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){const H=R+k,q=P+k;x===!0?h.push(q,q+1,H):h.push(q+1,q,H),L+=3}c.addGroup(u,L,x===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tl extends er{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new tl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tr extends an{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const E=u*f-a;for(let S=0;S<c;S++){const x=S*d-r;g.push(x,-E,0),_.push(0,0,1),m.push(S/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){const S=E+c*u,x=E+c*(u+1),R=E+1+c*(u+1),T=E+1+c*u;p.push(S,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class nl extends an{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new U,f=new U,p=[],g=[],_=[],m=[];for(let u=0;u<=i;u++){const E=[],S=u/i;let x=0;u===0&&a===0?x=.5/t:u===i&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const T=R/t;d.x=-e*Math.cos(s+T*r)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(s+T*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(T+x,1-S),E.push(c++)}h.push(E)}for(let u=0;u<i;u++)for(let E=0;E<t;E++){const S=h[u][E+1],x=h[u][E],R=h[u+1][E],T=h[u+1][E+1];(u!==0||a>0)&&p.push(S,x,T),(u!==i-1||l<Math.PI)&&p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(_,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class il extends an{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new U,d=new U,f=new U;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,E=(s+1)*p+g;a.push(_,m,E),a.push(m,u,E)}this.setIndex(a),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class en extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yf extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $f extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sl extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jf extends sl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const La=new ft,oc=new U,lc=new U;class Fh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(oc),lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lc),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cc=new ft,As=new U,Ia=new U;class Kf extends Fh{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),As.setFromMatrixPosition(e.matrixWorld),i.position.copy(As),Ia.copy(i.position),Ia.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ia),i.updateMatrixWorld(),s.makeTranslation(-As.x,-As.y,-As.z),cc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc,i.coordinateSystem,i.reversedDepth)}}class Zf extends sl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rl extends Lh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jf extends Fh{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hc extends sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Jf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qf extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const uc=new ft;class Oh{constructor(e,t,i=0,s=1/0){this.ray=new Zo(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uc),this}intersectObject(e,t=!0,i=[]){return Fo(e,this,i,t),i.sort(dc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Fo(e[s],this,i,t);return i.sort(dc),i}}function dc(n,e){return n.distance-e.distance}function Fo(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Fo(r[a],e,t,!0)}}class fc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ep extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function pc(n,e,t,i){const s=tp(i);switch(t){case Mh:return n*e;case Sh:return n*e/s.components*s.byteLength;case qo:return n*e/s.components*s.byteLength;case bh:return n*e*2/s.components*s.byteLength;case Yo:return n*e*2/s.components*s.byteLength;case yh:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case $o:return n*e*4/s.components*s.byteLength;case Ir:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nr:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(n,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(n,8)*Math.max(e,8)/2;case ho:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Co:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Po:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Io:case Uo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tp(n){switch(n){case Pn:case gh:return{byteLength:1,components:1};case Gs:case _h:case vs:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case Ui:case Go:case Gn:return{byteLength:4,components:1};case vh:case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function kh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function np(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ag=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:ip,alphahash_pars_fragment:sp,alphamap_fragment:rp,alphamap_pars_fragment:ap,alphatest_fragment:op,alphatest_pars_fragment:lp,aomap_fragment:cp,aomap_pars_fragment:hp,batching_pars_vertex:up,batching_vertex:dp,begin_vertex:fp,beginnormal_vertex:pp,bsdfs:mp,iridescence_fragment:gp,bumpmap_pars_fragment:_p,clipping_planes_fragment:vp,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:yp,color_fragment:Sp,color_pars_fragment:bp,color_pars_vertex:Ep,color_vertex:wp,common:Tp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Cp,displacementmap_vertex:Dp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Up,envmap_fragment:Np,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Op,envmap_pars_vertex:kp,envmap_physical_pars_fragment:jp,envmap_vertex:Bp,fog_vertex:zp,fog_pars_vertex:Hp,fog_fragment:Vp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:$p,lights_toon_fragment:Kp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:em,lights_physical_pars_fragment:tm,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:lm,map_fragment:cm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:pm,morphinstance_vertex:mm,morphcolor_vertex:gm,morphnormal_vertex:_m,morphtarget_pars_vertex:vm,morphtarget_vertex:xm,normal_fragment_begin:Mm,normal_fragment_maps:ym,normal_pars_fragment:Sm,normal_pars_vertex:bm,normal_vertex:Em,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Cm,opaque_fragment:Dm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Im,dithering_fragment:Um,dithering_pars_fragment:Nm,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:Hm,skinbase_vertex:Vm,skinning_pars_vertex:Gm,skinning_vertex:Wm,skinnormal_vertex:Xm,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:$m,tonemapping_pars_fragment:jm,transmission_fragment:Km,transmission_pars_fragment:Zm,uv_pars_fragment:Jm,uv_pars_vertex:Qm,uv_vertex:eg,worldpos_vertex:tg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:lg,depth_frag:cg,distanceRGBA_vert:hg,distanceRGBA_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:_g,meshlambert_vert:vg,meshlambert_frag:xg,meshmatcap_vert:Mg,meshmatcap_frag:yg,meshnormal_vert:Sg,meshnormal_frag:bg,meshphong_vert:Eg,meshphong_frag:wg,meshphysical_vert:Tg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Cg,points_vert:Dg,points_frag:Pg,shadow_vert:Lg,shadow_frag:Ig,sprite_vert:Ug,sprite_frag:Ng},le={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},An={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};An.physical={uniforms:Ht([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ar={r:0,b:0,g:0},Ei=new Ln,Fg=new ft;function Og(n,e,t,i,s,r,a){const o=new Fe(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1;const R=g(S);R===null?u(o,l):R&&R.isColor&&(u(R,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Zr)?(h===void 0&&(h=new dt(new Ms(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:_s(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(x.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(Ei)),h.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,(d!==R||f!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=R,f=R.version,p=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new dt(new tr(2,2),new _n({name:"BackgroundMaterial",uniforms:_s(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(R.colorSpace)!==nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,x){S.getRGB(Ar,Ph(n)),i.buffers.color.setClear(Ar.r,Ar.g,Ar.b,x,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(o,l)},render:_,addToRenderList:m,dispose:E}}function kg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(b,P,k,H,q){let V=!1;const Y=d(H,k,P);r!==Y&&(r=Y,c(r.object)),V=p(b,H,k,q),V&&g(b,H,k,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(b,P,k,H),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,P,k){const H=k.wireframe===!0;let q=i[b.id];q===void 0&&(q={},i[b.id]=q);let V=q[P.id];V===void 0&&(V={},q[P.id]=V);let Y=V[H];return Y===void 0&&(Y=f(l()),V[H]=Y),Y}function f(b){const P=[],k=[],H=[];for(let q=0;q<t;q++)P[q]=0,k[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:H,object:b,attributes:{},index:null}}function p(b,P,k,H){const q=r.attributes,V=P.attributes;let Y=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){const fe=q[G];let Me=V[G];if(Me===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),fe===void 0||fe.attribute!==Me||Me&&fe.data!==Me.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(b,P,k,H){const q={},V=P.attributes;let Y=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){let fe=V[G];fe===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor));const Me={};Me.attribute=fe,fe&&fe.data&&(Me.data=fe.data),q[G]=Me,Y++}r.attributes=q,r.attributesNum=Y,r.index=H}function _(){const b=r.newAttributes;for(let P=0,k=b.length;P<k;P++)b[P]=0}function m(b){u(b,0)}function u(b,P){const k=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;k[b]=1,H[b]===0&&(n.enableVertexAttribArray(b),H[b]=1),q[b]!==P&&(n.vertexAttribDivisor(b,P),q[b]=P)}function E(){const b=r.newAttributes,P=r.enabledAttributes;for(let k=0,H=P.length;k<H;k++)P[k]!==b[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function S(b,P,k,H,q,V,Y){Y===!0?n.vertexAttribIPointer(b,P,k,q,V):n.vertexAttribPointer(b,P,k,H,q,V)}function x(b,P,k,H){_();const q=H.attributes,V=k.getAttributes(),Y=P.defaultAttributeValues;for(const Z in V){const G=V[Z];if(G.location>=0){let oe=q[Z];if(oe===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){const fe=oe.normalized,Me=oe.itemSize,Oe=e.get(oe);if(Oe===void 0)continue;const Ze=Oe.buffer,rt=Oe.type,Ye=Oe.bytesPerElement,j=rt===n.INT||rt===n.UNSIGNED_INT||oe.gpuType===Go;if(oe.isInterleavedBufferAttribute){const J=oe.data,me=J.stride,we=oe.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<G.locationSize;ye++)u(G.location+ye,J.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<G.locationSize;ye++)m(G.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ye=0;ye<G.locationSize;ye++)S(G.location+ye,Me/G.locationSize,rt,fe,me*Ye,(we+Me/G.locationSize*ye)*Ye,j)}else{if(oe.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)u(G.location+J,oe.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let J=0;J<G.locationSize;J++)S(G.location+J,Me/G.locationSize,rt,fe,Me*Ye,Me/G.locationSize*J*Ye,j)}}else if(Y!==void 0){const fe=Y[Z];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(G.location,fe);break;case 3:n.vertexAttrib3fv(G.location,fe);break;case 4:n.vertexAttrib4fv(G.location,fe);break;default:n.vertexAttrib1fv(G.location,fe)}}}}E()}function R(){L();for(const b in i){const P=i[b];for(const k in P){const H=P[k];for(const q in H)h(H[q].object),delete H[q];delete P[k]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const k in P){const H=P[k];for(const q in H)h(H[q].object),delete H[q];delete P[k]}delete i[b.id]}function A(b){for(const P in i){const k=i[P];if(k[b.id]===void 0)continue;const H=k[b.id];for(const q in H)h(H[q].object),delete H[q];delete k[b.id]}}function L(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Bg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function Hg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new si,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:i,S=E*4;let x=u.clippingState||null;l.value=x,x=h(g,f,S,p);for(let R=0;R!==S;++R)x[R]=t[R];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,x=p;S!==_;++S,x+=4)a.copy(d[S]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Vg(n){let e=new WeakMap;function t(a,o){return o===io?a.mapping=fs:o===so&&(a.mapping=ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===io||o===so)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ss=4,mc=[.125,.215,.35,.446,.526,.582],Ri=20,Ua=new rl,gc=new Fe;let Na=null,Fa=0,Oa=0,ka=!1;const Ai=(1+Math.sqrt(5))/2,Zi=1/Ai,_c=[new U(-Ai,Zi,0),new U(Ai,Zi,0),new U(-Zi,0,Ai),new U(Zi,0,Ai),new U(0,Ai,-Zi),new U(0,Ai,Zi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Gg=new U;class vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Gg}=r;Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=ka,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:vs,format:bn,colorSpace:ms,depthBuffer:!1},s=xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=Xg(r,e,t)}return s}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,s,r){const l=new qt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(gc),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new Qr({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new dt(new Ms,_);let u=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,u=!0):(_.color.copy(gc),u=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const R=this._cubeSize;Rr(s,x*R,S>2?R:0,R,R),d.setRenderTarget(s),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fs||e.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_c[(s-r-1)%_c.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new dt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const u=[];let E=0;for(let A=0;A<Ri;++A){const L=A/_,y=Math.exp(-L*L/2);u.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<u.length;A++)u[A]=u[A]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const x=this._sizeLods[s],R=3*x*(s>S-ss?s-S+ss:0),T=4*(this._cubeSize-x);Rr(t,R,T,3*x,2*x),l.setRenderTarget(t),l.render(d,Ua)}}function Wg(n){const e=[],t=[],i=[];let s=n;const r=n-ss+1+mc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ss?l=mc[a-n+ss-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,E=new Float32Array(_*g*p),S=new Float32Array(m*g*p),x=new Float32Array(u*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,L=T>2?0:-1,y=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];E.set(y,_*g*T),S.set(f,m*g*T);const b=[T,T,T,T,T,T];x.set(b,u*g*T)}const R=new an;R.setAttribute("position",new Ot(E,_)),R.setAttribute("uv",new Ot(S,m)),R.setAttribute("faceIndex",new Ot(x,u)),e.push(R),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xc(n,e,t){const i=new pi(n,e,t);return i.texture.mapping=Zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Xg(n,e,t){const i=new Float32Array(Ri),s=new U(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Mc(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function yc(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===io||l===so,h=l===fs||l===ps;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new vc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new vc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Yg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&$s("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $g(n,e,t,i){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let S=0,x=E.length;S<x;S+=3){const R=E[S+0],T=E[S+1],A=E[S+2];f.push(R,T,T,A,A,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,x=E.length/3-1;S<x;S+=3){const R=S+0,T=S+1,A=S+2;f.push(R,T,T,A,A,R)}}else return;const m=new(Th(f)?Dh:Ch)(f,1);m.version=_;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function jg(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*a,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let u=0;for(let E=0;E<g;E++)u+=p[E]*_[E];t.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Kg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Zg(n,e,t){const i=new WeakMap,s=new st;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let b=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=o.attributes.position.count*x,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*T*4*d),L=new Ah(A,R,T,d);L.type=Gn,L.needsUpdate=!0;const y=x*4;for(let P=0;P<d;P++){const k=u[P],H=E[P],q=S[P],V=R*T*4*P;for(let Y=0;Y<k.count;Y++){const Z=Y*y;g===!0&&(s.fromBufferAttribute(k,Y),A[V+Z+0]=s.x,A[V+Z+1]=s.y,A[V+Z+2]=s.z,A[V+Z+3]=0),_===!0&&(s.fromBufferAttribute(H,Y),A[V+Z+4]=s.x,A[V+Z+5]=s.y,A[V+Z+6]=s.z,A[V+Z+7]=0),m===!0&&(s.fromBufferAttribute(q,Y),A[V+Z+8]=s.x,A[V+Z+9]=s.y,A[V+Z+10]=s.z,A[V+Z+11]=q.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Ie(R,T)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Jg(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Bh=new Gt,Sc=new Uh(1,1),zh=new Ah,Hh=new Ef,Vh=new Ih,bc=[],Ec=[],wc=new Float32Array(16),Tc=new Float32Array(9),Ac=new Float32Array(4);function ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=bc[s];if(r===void 0&&(r=new Float32Array(s),bc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function i0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Ct(t,i))return;Ac.set(i),n.uniformMatrix2fv(this.addr,!1,Ac),Dt(t,i)}}function s0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Ct(t,i))return;Tc.set(i),n.uniformMatrix3fv(this.addr,!1,Tc),Dt(t,i)}}function r0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Ct(t,i))return;wc.set(i),n.uniformMatrix4fv(this.addr,!1,wc),Dt(t,i)}}function a0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function l0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function h0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function p0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Sc.compareFunction=wh,r=Sc):r=Bh,t.setTexture2D(e||r,s)}function m0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hh,s)}function g0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vh,s)}function _0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zh,s)}function v0(n){switch(n){case 5126:return Qg;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function x0(n,e){n.uniform1fv(this.addr,e)}function M0(n,e){const t=ys(e,this.size,2);n.uniform2fv(this.addr,t)}function y0(n,e){const t=ys(e,this.size,3);n.uniform3fv(this.addr,t)}function S0(n,e){const t=ys(e,this.size,4);n.uniform4fv(this.addr,t)}function b0(n,e){const t=ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function E0(n,e){const t=ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function w0(n,e){const t=ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T0(n,e){n.uniform1iv(this.addr,e)}function A0(n,e){n.uniform2iv(this.addr,e)}function R0(n,e){n.uniform3iv(this.addr,e)}function C0(n,e){n.uniform4iv(this.addr,e)}function D0(n,e){n.uniform1uiv(this.addr,e)}function P0(n,e){n.uniform2uiv(this.addr,e)}function L0(n,e){n.uniform3uiv(this.addr,e)}function I0(n,e){n.uniform4uiv(this.addr,e)}function U0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Bh,r[a])}function N0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hh,r[a])}function F0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vh,r[a])}function O0(n,e,t){const i=this.cache,s=e.length,r=ea(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zh,r[a])}function k0(n){switch(n){case 5126:return x0;case 35664:return M0;case 35665:return y0;case 35666:return S0;case 35674:return b0;case 35675:return E0;case 35676:return w0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return D0;case 36294:return P0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return O0}}class B0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=v0(t.type)}}class z0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k0(t.type)}}class H0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Rc(n,e){n.seq.push(e),n.map[e.id]=e}function V0(n,e,t){const i=n.name,s=i.length;for(Ba.lastIndex=0;;){const r=Ba.exec(i),a=Ba.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rc(t,c===void 0?new B0(o,n,e):new z0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new H0(o),Rc(t,d)),t=d}}}class Or{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);V0(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Cc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const G0=37297;let W0=0;function X0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Dc=new He;function q0(n){Ke._getMatrix(Dc,Ke.workingColorSpace,n);const e=`mat3( ${Dc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Yr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+X0(n.getShaderSource(e),o)}else return r}function Y0(n,e){const t=q0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $0(n,e){let t;switch(e){case Od:t="Linear";break;case kd:t="Reinhard";break;case Bd:t="Cineon";break;case no:t="ACESFilmic";break;case Hd:t="AgX";break;case Vd:t="Neutral";break;case zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new U;function j0(){Ke.getLuminanceCoefficients(Cr);const n=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function Z0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function J0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Cs(n){return n!==""}function Lc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(n){return n.replace(Q0,t_)}const e_=new Map;function t_(n,e){let t=Ve[e];if(t===void 0){const i=e_.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(n){return n.replace(n_,i_)}function i_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function r_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fs:case ps:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ps&&(e="ENVMAP_MODE_REFRACTION"),e}function o_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ph:e="ENVMAP_BLENDING_MULTIPLY";break;case Nd:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function l_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function c_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=s_(t),c=r_(t),h=a_(t),d=o_(t),f=l_(t),p=K0(t),g=Z0(r),_=s.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),u.length>0&&(u+=`
`)):(m=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),u=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Dn?$0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),j0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Oo(a),a=Lc(a,t),a=Ic(a,t),o=Oo(o),o=Lc(o,t),o=Ic(o,t),a=Uc(a),o=Uc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=E+m+a,x=E+u+o,R=Cc(s,s.VERTEX_SHADER,S),T=Cc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(T)||"",V=k.trim(),Y=H.trim(),Z=q.trim();let G=!0,oe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,T);else{const fe=Pc(s,R,"vertex"),Me=Pc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+fe+`
`+Me)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(Y===""||Z==="")&&(oe=!1);oe&&(P.diagnostics={runnable:G,programLog:V,vertexShader:{log:Y,prefix:m},fragmentShader:{log:Z,prefix:u}})}s.deleteShader(R),s.deleteShader(T),L=new Or(s,_),y=J0(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,G0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let h_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new d_(e),t.set(e,i)),i}}class d_{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}}function f_(n,e,t,i,s,r,a){const o=new Jo,l=new u_,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,P,k,H){const q=k.fog,V=H.geometry,Y=y.isMeshStandardMaterial?k.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),G=Z&&Z.mapping===Zr?Z.image.height:null,oe=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Me=fe!==void 0?fe.length:0;let Oe=0;V.morphAttributes.position!==void 0&&(Oe=1),V.morphAttributes.normal!==void 0&&(Oe=2),V.morphAttributes.color!==void 0&&(Oe=3);let Ze,rt,Ye,j;if(oe){const Je=An[oe];Ze=Je.vertexShader,rt=Je.fragmentShader}else Ze=y.vertexShader,rt=y.fragmentShader,l.update(y),Ye=l.getVertexShaderID(y),j=l.getFragmentShaderID(y);const J=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),we=H.isInstancedMesh===!0,ye=H.isBatchedMesh===!0,We=!!y.map,xt=!!y.matcap,C=!!Z,ot=!!y.aoMap,Ue=!!y.lightMap,Re=!!y.bumpMap,se=!!y.normalMap,qe=!!y.displacementMap,de=!!y.emissiveMap,Pe=!!y.metalnessMap,lt=!!y.roughnessMap,ct=y.anisotropy>0,w=y.clearcoat>0,v=y.dispersion>0,O=y.iridescence>0,X=y.sheen>0,Q=y.transmission>0,W=ct&&!!y.anisotropyMap,Ee=w&&!!y.clearcoatMap,re=w&&!!y.clearcoatNormalMap,xe=w&&!!y.clearcoatRoughnessMap,Se=O&&!!y.iridescenceMap,ne=O&&!!y.iridescenceThicknessMap,ue=X&&!!y.sheenColorMap,De=X&&!!y.sheenRoughnessMap,be=!!y.specularMap,ce=!!y.specularColorMap,ze=!!y.specularIntensityMap,I=Q&&!!y.transmissionMap,ie=Q&&!!y.thicknessMap,ae=!!y.gradientMap,ge=!!y.alphaMap,ee=y.alphaTest>0,K=!!y.alphaHash,ve=!!y.extensions;let Ne=Dn;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const ht={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:rt,defines:y.defines,customVertexShaderID:Ye,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ye,batchingColor:ye&&H._colorsTexture!==null,instancing:we,instancingColor:we&&H.instanceColor!==null,instancingMorph:we&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ms,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:xt,envMap:C,envMapMode:C&&Z.mapping,envMapCubeUVHeight:G,aoMap:ot,lightMap:Ue,bumpMap:Re,normalMap:se,displacementMap:f&&qe,emissiveMap:de,normalMapObjectSpace:se&&y.normalMapType===qd,normalMapTangentSpace:se&&y.normalMapType===Eh,metalnessMap:Pe,roughnessMap:lt,anisotropy:ct,anisotropyMap:W,clearcoat:w,clearcoatMap:Ee,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,dispersion:v,iridescence:O,iridescenceMap:Se,iridescenceThicknessMap:ne,sheen:X,sheenColorMap:ue,sheenRoughnessMap:De,specularMap:be,specularColorMap:ce,specularIntensityMap:ze,transmission:Q,transmissionMap:I,thicknessMap:ie,gradientMap:ae,opaque:y.transparent===!1&&y.blending===ls&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:ee,alphaHash:K,combine:y.combine,mapUv:We&&_(y.map.channel),aoMapUv:ot&&_(y.aoMap.channel),lightMapUv:Ue&&_(y.lightMap.channel),bumpMapUv:Re&&_(y.bumpMap.channel),normalMapUv:se&&_(y.normalMap.channel),displacementMapUv:qe&&_(y.displacementMap.channel),emissiveMapUv:de&&_(y.emissiveMap.channel),metalnessMapUv:Pe&&_(y.metalnessMap.channel),roughnessMapUv:lt&&_(y.roughnessMap.channel),anisotropyMapUv:W&&_(y.anisotropyMap.channel),clearcoatMapUv:Ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(y.sheenRoughnessMap.channel),specularMapUv:be&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:ze&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:ie&&_(y.thicknessMap.channel),alphaMapUv:ge&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(se||ct),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(We||ge),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:de&&y.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$t,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function u(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(E(b,y),S(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function E(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const b=g[y.type];let P;if(b){const k=An[b];P=Of.clone(k.uniforms)}else P=y.uniforms;return P}function R(y,b){let P;for(let k=0,H=h.length;k<H;k++){const q=h[k];if(q.cacheKey===b){P=q,++P.usedTimes;break}}return P===void 0&&(P=new c_(n,b,y,r),h.push(P)),P}function T(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:L}}function p_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function m_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,f,p,g,_,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function o(d,f,p,g,_,m){const u=a(d,f,p,g,_,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(d,f,p,g,_,m){const u=a(d,f,p,g,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||m_),i.length>1&&i.sort(f||Fc),s.length>1&&s.sort(f||Fc)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function g_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Oc,n.set(i,[a])):s>=r.length?(a=new Oc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function __(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function v_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let x_=0;function M_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function y_(n){const e=new __,t=v_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new ft,a=new ft;function o(c){let h=0,d=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,E=0,S=0,x=0,R=0,T=0,A=0;c.sort(M_);for(let y=0,b=c.length;y<b;y++){const P=c[y],k=P.color,H=P.intensity,q=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*H,d+=k.g*H,f+=k.b*H;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],H);A++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=P.shadow.matrix,E++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(k).multiplyScalar(H),Y.distance=q,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[_]=Y;const Z=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,Z.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=Z.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=V,x++}_++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(k).multiplyScalar(H),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(H),Y.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[u]=Y,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==E||L.numPointShadows!==S||L.numSpotShadows!==x||L.numSpotMaps!==R||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=E,L.numPointShadows=S,L.numSpotShadows=x,L.numSpotMaps=R,L.numLightProbes=A,i.version=x_++)}function l(c,h){let d=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){const S=c[u];if(S.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function kc(n){const e=new y_(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function S_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new kc(n),e.set(s,[o])):r>=a.length?(o=new kc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w_(n,e,t){let i=new el;const s=new Ie,r=new Ie,a=new st,o=new Yf({depthPacking:Xd}),l=new $f,c={},h=t.maxTextureSize,d={[Kn]:jt,[jt]:Kn,[$t]:$t},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:b_,fragmentShader:E_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let u=this.type;this.render=function(T,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ui),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=u!==Vn&&this.type===Vn,q=u===Vn&&this.type!==Vn;for(let V=0,Y=T.length;V<Y;V++){const Z=T[V],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const oe=G.getFrameExtents();if(s.multiply(oe),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,G.mapSize.y=r.y)),G.map===null||H===!0||q===!0){const Me=this.type!==Vn?{minFilter:wn,magFilter:wn}:{};G.map!==null&&G.map.dispose(),G.map=new pi(s.x,s.y,Me),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const fe=G.getViewportCount();for(let Me=0;Me<fe;Me++){const Oe=G.getViewport(Me);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),k.viewport(a),G.updateMatrices(Z,Me),i=G.getFrustum(),x(A,L,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Vn&&E(G,L),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(y,b,P)};function E(T,A){const L=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,L,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,L,p,_,null)}function S(T,A,L,y){let b=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=L.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=b.uuid,H=A.uuid;let q=c[k];q===void 0&&(q={},c[k]=q);let V=q[H];V===void 0&&(V=b.clone(),q[H]=V,A.addEventListener("dispose",R)),b=V}if(b.visible=A.visible,b.wireframe=A.wireframe,y===Vn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=n.properties.get(b);k.light=L}return b}function x(T,A,L,y,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Vn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const H=e.update(T),q=T.material;if(Array.isArray(q)){const V=H.groups;for(let Y=0,Z=V.length;Y<Z;Y++){const G=V[Y],oe=q[G.materialIndex];if(oe&&oe.visible){const fe=S(T,oe,y,b);T.onBeforeShadow(n,T,A,L,H,fe,G),n.renderBufferDirect(L,null,H,fe,T,G),T.onAfterShadow(n,T,A,L,H,fe,G)}}}else if(q.visible){const V=S(T,q,y,b);T.onBeforeShadow(n,T,A,L,H,V,null),n.renderBufferDirect(L,null,H,V,T,null),T.onAfterShadow(n,T,A,L,H,V,null)}}const k=T.children;for(let H=0,q=k.length;H<q;H++)x(k[H],A,L,y,b)}function R(T){T.target.removeEventListener("dispose",R);for(const L in c){const y=c[L],b=T.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const T_={[ja]:Ka,[Za]:eo,[Ja]:to,[ds]:Qa,[Ka]:ja,[eo]:Za,[to]:Ja,[Qa]:ds};function A_(n,e){function t(){let I=!1;const ie=new st;let ae=null;const ge=new st(0,0,0,0);return{setMask:function(ee){ae!==ee&&!I&&(n.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){I=ee},setClear:function(ee,K,ve,Ne,ht){ht===!0&&(ee*=Ne,K*=Ne,ve*=Ne),ie.set(ee,K,ve,Ne),ge.equals(ie)===!1&&(n.clearColor(ee,K,ve,Ne),ge.copy(ie))},reset:function(){I=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,ae=null,ge=null,ee=null;return{setReversed:function(K){if(ie!==K){const ve=e.get("EXT_clip_control");K?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ie=K;const Ne=ee;ee=null,this.setClear(Ne)}},getReversed:function(){return ie},setTest:function(K){K?J(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(K){ae!==K&&!I&&(n.depthMask(K),ae=K)},setFunc:function(K){if(ie&&(K=T_[K]),ge!==K){switch(K){case ja:n.depthFunc(n.NEVER);break;case Ka:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case Ja:n.depthFunc(n.EQUAL);break;case Qa:n.depthFunc(n.GEQUAL);break;case eo:n.depthFunc(n.GREATER);break;case to:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=K}},setLocked:function(K){I=K},setClear:function(K){ee!==K&&(ie&&(K=1-K),n.clearDepth(K),ee=K)},reset:function(){I=!1,ae=null,ge=null,ee=null,ie=!1}}}function s(){let I=!1,ie=null,ae=null,ge=null,ee=null,K=null,ve=null,Ne=null,ht=null;return{setTest:function(Je){I||(Je?J(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(Je){ie!==Je&&!I&&(n.stencilMask(Je),ie=Je)},setFunc:function(Je,In,Tn){(ae!==Je||ge!==In||ee!==Tn)&&(n.stencilFunc(Je,In,Tn),ae=Je,ge=In,ee=Tn)},setOp:function(Je,In,Tn){(K!==Je||ve!==In||Ne!==Tn)&&(n.stencilOp(Je,In,Tn),K=Je,ve=In,Ne=Tn)},setLocked:function(Je){I=Je},setClear:function(Je){ht!==Je&&(n.clearStencil(Je),ht=Je)},reset:function(){I=!1,ie=null,ae=null,ge=null,ee=null,K=null,ve=null,Ne=null,ht=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,E=null,S=null,x=null,R=null,T=null,A=new Fe(0,0,0),L=0,y=!1,b=null,P=null,k=null,H=null,q=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=Z>=2);let oe=null,fe={};const Me=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Ze=new st().fromArray(Me),rt=new st().fromArray(Oe);function Ye(I,ie,ae,ge){const ee=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<ae;ve++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(ie+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return K}const j={};j[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(ds),Re(!1),se(Fl),J(n.CULL_FACE),ot(ui);function J(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function me(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function we(I,ie){return d[I]!==ie?(n.bindFramebuffer(I,ie),d[I]=ie,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function ye(I,ie){let ae=p,ge=!1;if(I){ae=f.get(ie),ae===void 0&&(ae=[],f.set(ie,ae));const ee=I.textures;if(ae.length!==ee.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ve=ee.length;K<ve;K++)ae[K]=n.COLOR_ATTACHMENT0+K;ae.length=ee.length,ge=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ae)}function We(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const xt={[ri]:n.FUNC_ADD,[Md]:n.FUNC_SUBTRACT,[yd]:n.FUNC_REVERSE_SUBTRACT};xt[Sd]=n.MIN,xt[bd]=n.MAX;const C={[dh]:n.ZERO,[Ed]:n.ONE,[wd]:n.SRC_COLOR,[Ya]:n.SRC_ALPHA,[Dd]:n.SRC_ALPHA_SATURATE,[fh]:n.DST_COLOR,[Ad]:n.DST_ALPHA,[Td]:n.ONE_MINUS_SRC_COLOR,[$a]:n.ONE_MINUS_SRC_ALPHA,[Cd]:n.ONE_MINUS_DST_COLOR,[Rd]:n.ONE_MINUS_DST_ALPHA,[Pd]:n.CONSTANT_COLOR,[Ld]:n.ONE_MINUS_CONSTANT_COLOR,[Id]:n.CONSTANT_ALPHA,[Ud]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(I,ie,ae,ge,ee,K,ve,Ne,ht,Je){if(I===ui){_===!0&&(me(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),I!==uh){if(I!==m||Je!==y){if((u!==ri||x!==ri)&&(n.blendEquation(n.FUNC_ADD),u=ri,x=ri),Je)switch(I){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFunc(n.ONE,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ol:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,S=null,R=null,T=null,A.set(0,0,0),L=0,m=I,y=Je}return}ee=ee||ie,K=K||ae,ve=ve||ge,(ie!==u||ee!==x)&&(n.blendEquationSeparate(xt[ie],xt[ee]),u=ie,x=ee),(ae!==E||ge!==S||K!==R||ve!==T)&&(n.blendFuncSeparate(C[ae],C[ge],C[K],C[ve]),E=ae,S=ge,R=K,T=ve),(Ne.equals(A)===!1||ht!==L)&&(n.blendColor(Ne.r,Ne.g,Ne.b,ht),A.copy(Ne),L=ht),m=I,y=!1}function Ue(I,ie){I.side===$t?me(n.CULL_FACE):J(n.CULL_FACE);let ae=I.side===jt;ie&&(ae=!ae),Re(ae),I.blending===ls&&I.transparent===!1?ot(ui):ot(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),de(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){b!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),b=I)}function se(I){I!==_d?(J(n.CULL_FACE),I!==P&&(I===Fl?n.cullFace(n.BACK):I===vd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),P=I}function qe(I){I!==k&&(Y&&n.lineWidth(I),k=I)}function de(I,ie,ae){I?(J(n.POLYGON_OFFSET_FILL),(H!==ie||q!==ae)&&(n.polygonOffset(ie,ae),H=ie,q=ae)):me(n.POLYGON_OFFSET_FILL)}function Pe(I){I?J(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function lt(I){I===void 0&&(I=n.TEXTURE0+V-1),oe!==I&&(n.activeTexture(I),oe=I)}function ct(I,ie,ae){ae===void 0&&(oe===null?ae=n.TEXTURE0+V-1:ae=oe);let ge=fe[ae];ge===void 0&&(ge={type:void 0,texture:void 0},fe[ae]=ge),(ge.type!==I||ge.texture!==ie)&&(oe!==ae&&(n.activeTexture(ae),oe=ae),n.bindTexture(I,ie||j[I]),ge.type=I,ge.texture=ie)}function w(){const I=fe[oe];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){Ze.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function De(I){rt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),rt.copy(I))}function be(I,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let ge=ae.get(I);ge===void 0&&(ge=n.getUniformBlockIndex(ie,I.name),ae.set(I,ge))}function ce(I,ie){const ge=c.get(ie).get(I);l.get(ie)!==ge&&(n.uniformBlockBinding(ie,ge,I.__bindingPointIndex),l.set(ie,ge))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,fe={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,E=null,S=null,x=null,R=null,T=null,A=new Fe(0,0,0),L=0,y=!1,b=null,P=null,k=null,H=null,q=null,Ze.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:me,bindFramebuffer:we,drawBuffers:ye,useProgram:We,setBlending:ot,setMaterial:Ue,setFlipSided:Re,setCullFace:se,setLineWidth:qe,setPolygonOffset:de,setScissorTest:Pe,activeTexture:lt,bindTexture:ct,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Se,texImage3D:ne,updateUBOMapping:be,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:xe,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:Ee,scissor:ue,viewport:De,reset:ze}}function R_(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):jr("canvas")}function _(w,v,O){let X=1;const Q=ct(w);if((Q.width>O||Q.height>O)&&(X=O/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(X*Q.width),Ee=Math.floor(X*Q.height);d===void 0&&(d=g(W,Ee));const re=v?g(W,Ee):d;return re.width=W,re.height=Ee,re.getContext("2d").drawImage(w,0,0,W,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Ee+")."),re}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(w,v,O,X,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=v;if(v===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),v===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),v===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),v===n.RGBA){const Ee=Q?Yr:Ke.getTransfer(X);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=Ee===nt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(w,v){let O;return w?v===null||v===Ui||v===Ws?O=n.DEPTH24_STENCIL8:v===Gn?O=n.DEPTH32F_STENCIL8:v===Gs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ui||v===Ws?O=n.DEPTH_COMPONENT24:v===Gn?O=n.DEPTH_COMPONENT32F:v===Gs&&(O=n.DEPTH_COMPONENT16),O}function R(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==wn&&w.minFilter!==Rn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){const v=w.target;v.removeEventListener("dispose",T),L(v),v.isVideoTexture&&h.delete(v)}function A(w){const v=w.target;v.removeEventListener("dispose",A),b(v)}function L(w){const v=i.get(w);if(v.__webglInit===void 0)return;const O=w.source,X=f.get(O);if(X){const Q=X[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(w),Object.keys(X).length===0&&f.delete(O)}i.remove(w)}function y(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const O=w.source,X=f.get(O);delete X[v.__cacheKey],a.memory.textures--}function b(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let Q=0;Q<v.__webglFramebuffer[X].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[X][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)n.deleteFramebuffer(v.__webglFramebuffer[X]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=w.textures;for(let X=0,Q=O.length;X<Q;X++){const W=i.get(O[X]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(O[X])}i.remove(w)}let P=0;function k(){P=0}function H(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function q(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function V(w,v){const O=i.get(w);if(w.isVideoTexture&&Pe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,w,v);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function Y(w,v){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function Z(w,v){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function G(w,v){const O=i.get(w);if(w.version>0&&O.__version!==w.version){J(O,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const oe={[Vs]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[ro]:n.MIRRORED_REPEAT},fe={[wn]:n.NEAREST,[Gd]:n.NEAREST_MIPMAP_NEAREST,[cr]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[ca]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},Me={[Yd]:n.NEVER,[Qd]:n.ALWAYS,[$d]:n.LESS,[wh]:n.LEQUAL,[jd]:n.EQUAL,[Jd]:n.GEQUAL,[Kd]:n.GREATER,[Zd]:n.NOTEQUAL};function Oe(w,v){if(v.type===Gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Rn||v.magFilter===ca||v.magFilter===cr||v.magFilter===Di||v.minFilter===Rn||v.minFilter===ca||v.minFilter===cr||v.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,oe[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,oe[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,oe[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,fe[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wn||v.minFilter!==cr&&v.minFilter!==Di||v.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));const X=v.source;let Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));const W=q(v);if(W!==w.__cacheKey){Q[W]===void 0&&(Q[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[W].usedTimes++;const Ee=Q[w.__cacheKey];Ee!==void 0&&(Q[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(v)),w.__cacheKey=W,w.__webglTexture=Q[W].texture}return O}function rt(w,v,O){return Math.floor(Math.floor(w/O)/v)}function Ye(w,v,O,X){const W=w.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,X,v.data);else{W.sort((ne,ue)=>ne.start-ue.start);let Ee=0;for(let ne=1;ne<W.length;ne++){const ue=W[Ee],De=W[ne],be=ue.start+ue.count,ce=rt(De.start,v.width,4),ze=rt(ue.start,v.width,4);De.start<=be+1&&ce===ze&&rt(De.start+De.count-1,v.width,4)===ce?ue.count=Math.max(ue.count,De.start+De.count-ue.start):(++Ee,W[Ee]=De)}W.length=Ee+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),Se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ne=0,ue=W.length;ne<ue;ne++){const De=W[ne],be=Math.floor(De.start/4),ce=Math.ceil(De.count/4),ze=be%v.width,I=Math.floor(be/v.width),ie=ce,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,ze,I,ie,ae,O,X,v.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function j(w,v,O){let X=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=n.TEXTURE_3D);const Q=Ze(w,v),W=v.source;t.bindTexture(X,w.__webglTexture,n.TEXTURE0+O);const Ee=i.get(W);if(W.version!==Ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const re=Ke.getPrimaries(Ke.workingColorSpace),xe=v.colorSpace===ai?null:Ke.getPrimaries(v.colorSpace),Se=v.colorSpace===ai||re===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ne=_(v.image,!1,s.maxTextureSize);ne=lt(v,ne);const ue=r.convert(v.format,v.colorSpace),De=r.convert(v.type);let be=S(v.internalFormat,ue,De,v.colorSpace,v.isVideoTexture);Oe(X,v);let ce;const ze=v.mipmaps,I=v.isVideoTexture!==!0,ie=Ee.__version===void 0||Q===!0,ae=W.dataReady,ge=R(v,ne);if(v.isDepthTexture)be=x(v.format===qs,v.type),ie&&(I?t.texStorage2D(n.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,be,ne.width,ne.height,0,ue,De,null));else if(v.isDataTexture)if(ze.length>0){I&&ie&&t.texStorage2D(n.TEXTURE_2D,ge,be,ze[0].width,ze[0].height);for(let ee=0,K=ze.length;ee<K;ee++)ce=ze[ee],I?ae&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,De,ce.data):t.texImage2D(n.TEXTURE_2D,ee,be,ce.width,ce.height,0,ue,De,ce.data);v.generateMipmaps=!1}else I?(ie&&t.texStorage2D(n.TEXTURE_2D,ge,be,ne.width,ne.height),ae&&Ye(v,ne,ue,De)):t.texImage2D(n.TEXTURE_2D,0,be,ne.width,ne.height,0,ue,De,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,be,ze[0].width,ze[0].height,ne.depth);for(let ee=0,K=ze.length;ee<K;ee++)if(ce=ze[ee],v.format!==bn)if(ue!==null)if(I){if(ae)if(v.layerUpdates.size>0){const ve=pc(ce.width,ce.height,v.format,v.type);for(const Ne of v.layerUpdates){const ht=ce.data.subarray(Ne*ve/ce.data.BYTES_PER_ELEMENT,(Ne+1)*ve/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Ne,ce.width,ce.height,1,ue,ht)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,ue,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,be,ce.width,ce.height,ne.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,ue,De,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,be,ce.width,ce.height,ne.depth,0,ue,De,ce.data)}else{I&&ie&&t.texStorage2D(n.TEXTURE_2D,ge,be,ze[0].width,ze[0].height);for(let ee=0,K=ze.length;ee<K;ee++)ce=ze[ee],v.format!==bn?ue!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,De,ce.data):t.texImage2D(n.TEXTURE_2D,ee,be,ce.width,ce.height,0,ue,De,ce.data)}else if(v.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,be,ne.width,ne.height,ne.depth),ae)if(v.layerUpdates.size>0){const ee=pc(ne.width,ne.height,v.format,v.type);for(const K of v.layerUpdates){const ve=ne.data.subarray(K*ee/ne.data.BYTES_PER_ELEMENT,(K+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,ue,De,ve)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,De,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,ue,De,ne.data);else if(v.isData3DTexture)I?(ie&&t.texStorage3D(n.TEXTURE_3D,ge,be,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,De,ne.data)):t.texImage3D(n.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,ue,De,ne.data);else if(v.isFramebufferTexture){if(ie)if(I)t.texStorage2D(n.TEXTURE_2D,ge,be,ne.width,ne.height);else{let ee=ne.width,K=ne.height;for(let ve=0;ve<ge;ve++)t.texImage2D(n.TEXTURE_2D,ve,be,ee,K,0,ue,De,null),ee>>=1,K>>=1}}else if(ze.length>0){if(I&&ie){const ee=ct(ze[0]);t.texStorage2D(n.TEXTURE_2D,ge,be,ee.width,ee.height)}for(let ee=0,K=ze.length;ee<K;ee++)ce=ze[ee],I?ae&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue,De,ce):t.texImage2D(n.TEXTURE_2D,ee,be,ue,De,ce);v.generateMipmaps=!1}else if(I){if(ie){const ee=ct(ne);t.texStorage2D(n.TEXTURE_2D,ge,be,ee.width,ee.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,De,ne)}else t.texImage2D(n.TEXTURE_2D,0,be,ue,De,ne);m(v)&&u(X),Ee.__version=W.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function J(w,v,O){if(v.image.length!==6)return;const X=Ze(w,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const W=i.get(Q);if(Q.version!==W.__version||X===!0){t.activeTexture(n.TEXTURE0+O);const Ee=Ke.getPrimaries(Ke.workingColorSpace),re=v.colorSpace===ai?null:Ke.getPrimaries(v.colorSpace),xe=v.colorSpace===ai||Ee===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!Se&&!ne?ue[K]=_(v.image[K],!0,s.maxCubemapSize):ue[K]=ne?v.image[K].image:v.image[K],ue[K]=lt(v,ue[K]);const De=ue[0],be=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),ze=S(v.internalFormat,be,ce,v.colorSpace),I=v.isVideoTexture!==!0,ie=W.__version===void 0||X===!0,ae=Q.dataReady;let ge=R(v,De);Oe(n.TEXTURE_CUBE_MAP,v);let ee;if(Se){I&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ze,De.width,De.height);for(let K=0;K<6;K++){ee=ue[K].mipmaps;for(let ve=0;ve<ee.length;ve++){const Ne=ee[ve];v.format!==bn?be!==null?I?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Ne.width,Ne.height,be,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,ze,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Ne.width,Ne.height,be,ce,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,ze,Ne.width,Ne.height,0,be,ce,Ne.data)}}}else{if(ee=v.mipmaps,I&&ie){ee.length>0&&ge++;const K=ct(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ze,K.width,K.height)}for(let K=0;K<6;K++)if(ne){I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,be,ce,ue[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,ue[K].width,ue[K].height,0,be,ce,ue[K].data);for(let ve=0;ve<ee.length;ve++){const ht=ee[ve].image[K].image;I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,ht.width,ht.height,be,ce,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,ze,ht.width,ht.height,0,be,ce,ht.data)}}else{I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,ce,ue[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,be,ce,ue[K]);for(let ve=0;ve<ee.length;ve++){const Ne=ee[ve];I?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,be,ce,Ne.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,ze,be,ce,Ne.image[K])}}}m(v)&&u(n.TEXTURE_CUBE_MAP),W.__version=Q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function me(w,v,O,X,Q,W){const Ee=r.convert(O.format,O.colorSpace),re=r.convert(O.type),xe=S(O.internalFormat,Ee,re,O.colorSpace),Se=i.get(v),ne=i.get(O);if(ne.__renderTarget=v,!Se.__hasExternalTextures){const ue=Math.max(1,v.width>>W),De=Math.max(1,v.height>>W);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,W,xe,ue,De,v.depth,0,Ee,re,null):t.texImage2D(Q,W,xe,ue,De,0,Ee,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),de(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Q,ne.__webglTexture,0,qe(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Q,ne.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(w,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const X=v.depthTexture,Q=X&&X.isDepthTexture?X.type:null,W=x(v.stencilBuffer,Q),Ee=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=qe(v);de(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,W,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,w)}else{const X=v.textures;for(let Q=0;Q<X.length;Q++){const W=X[Q],Ee=r.convert(W.format,W.colorSpace),re=r.convert(W.type),xe=S(W.internalFormat,Ee,re,W.colorSpace),Se=qe(v);O&&de(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,xe,v.width,v.height):de(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,xe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,xe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const Q=X.__webglTexture,W=qe(v);if(v.depthTexture.format===Xs)de(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===qs)de(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function We(w){const v=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=X}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=w.texture.mipmaps;X&&X.length>0?ye(v.__webglFramebuffer[0],w):ye(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=n.createRenderbuffer(),we(v.__webglDepthbuffer[X],w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,W)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),we(v.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(w,v,O){const X=i.get(w);v!==void 0&&me(X.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&We(w)}function C(w){const v=w.texture,O=i.get(w),X=i.get(v);w.addEventListener("dispose",A);const Q=w.textures,W=w.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=v.version,a.memory.textures++),W){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let xe=0;xe<v.mipmaps.length;xe++)O.__webglFramebuffer[re][xe]=n.createFramebuffer()}else O.__webglFramebuffer[re]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)O.__webglFramebuffer[re]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let re=0,xe=Q.length;re<xe;re++){const Se=i.get(Q[re]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&de(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){const xe=Q[re];O.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const Se=r.convert(xe.format,xe.colorSpace),ne=r.convert(xe.type),ue=S(xe.internalFormat,Se,ne,xe.colorSpace,w.isXRRenderTarget===!0),De=qe(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ue,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,O.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),we(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)me(O.__webglFramebuffer[re][xe],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe);else me(O.__webglFramebuffer[re],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let re=0,xe=Q.length;re<xe;re++){const Se=Q[re],ne=i.get(Se);let ue=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),Oe(ue,Se),me(O.__webglFramebuffer,w,Se,n.COLOR_ATTACHMENT0+re,ue,0),m(Se)&&u(ue)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(re=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,X.__webglTexture),Oe(re,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)me(O.__webglFramebuffer[xe],w,v,n.COLOR_ATTACHMENT0,re,xe);else me(O.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,re,0);m(v)&&u(re),t.unbindTexture()}w.depthBuffer&&We(w)}function ot(w){const v=w.textures;for(let O=0,X=v.length;O<X;O++){const Q=v[O];if(m(Q)){const W=E(w),Ee=i.get(Q).__webglTexture;t.bindTexture(W,Ee),u(W),t.unbindTexture()}}}const Ue=[],Re=[];function se(w){if(w.samples>0){if(de(w)===!1){const v=w.textures,O=w.width,X=w.height;let Q=n.COLOR_BUFFER_BIT;const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(w),re=v.length>1;if(re)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const xe=w.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const ne=i.get(v[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,O,X,0,0,O,X,Q,n.NEAREST),l===!0&&(Ue.length=0,Re.length=0,Ue.push(n.COLOR_ATTACHMENT0+Se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ue.push(W),Re.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);const ne=i.get(v[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function qe(w){return Math.min(s.maxSamples,w.samples)}function de(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pe(w){const v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function lt(w,v){const O=w.colorSpace,X=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==ms&&O!==ai&&(Ke.getTransfer(O)===nt?(X!==bn||Q!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=xt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=me,this.useMultisampledRTT=de}function C_(n,e){function t(i,s=ai){let r;const a=Ke.getTransfer(s);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Wo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return n.BYTE;if(i===_h)return n.SHORT;if(i===Gs)return n.UNSIGNED_SHORT;if(i===Go)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===vs)return n.HALF_FLOAT;if(i===Mh)return n.ALPHA;if(i===yh)return n.RGB;if(i===bn)return n.RGBA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===Sh)return n.RED;if(i===qo)return n.RED_INTEGER;if(i===bh)return n.RG;if(i===Yo)return n.RG_INTEGER;if(i===$o)return n.RGBA_INTEGER;if(i===Ir||i===Ur||i===Nr||i===Fr)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ao||i===oo||i===lo||i===co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ho||i===uo||i===fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ho||i===uo)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===Mo||i===yo||i===So||i===bo||i===Eo||i===wo||i===To||i===Ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===po)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===go)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_o)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===So)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===To)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ao)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ro||i===Co||i===Do)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ro)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Do)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Po||i===Lo||i===Io||i===Uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new _n({vertexShader:D_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I_ extends Ni{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new L_,u={},E=t.getContextAttributes();let S=null,x=null;const R=[],T=[],A=new Ie;let L=null;const y=new qt;y.viewport=new st;const b=new qt;b.viewport=new st;const P=[y,b],k=new Qf;let H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=R[j];return J===void 0&&(J=new Da,R[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=R[j];return J===void 0&&(J=new Da,R[j]=J),J.getGripSpace()},this.getHand=function(j){let J=R[j];return J===void 0&&(J=new Da,R[j]=J),J.getHandSpace()};function V(j){const J=T.indexOf(j.inputSource);if(J===-1)return;const me=R[J];me!==void 0&&(me.update(j.inputSource,j.frame,c||a),me.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<R.length;j++){const J=T[j];J!==null&&(T[j]=null,R[j].disconnect(J))}H=null,q=null,m.reset();for(const j in u)delete u[j];e.setRenderTarget(S),p=null,f=null,d=null,s=null,x=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),E.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,we=null,ye=null;E.depth&&(ye=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=E.stencil?qs:Xs,we=E.stencil?Ws:Ui);const We={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(We),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new pi(f.textureWidth,f.textureHeight,{format:bn,type:Pn,depthTexture:new Uh(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const me={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new pi(p.framebufferWidth,p.framebufferHeight,{format:bn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(j){for(let J=0;J<j.removed.length;J++){const me=j.removed[J],we=T.indexOf(me);we>=0&&(T[we]=null,R[we].disconnect(me))}for(let J=0;J<j.added.length;J++){const me=j.added[J];let we=T.indexOf(me);if(we===-1){for(let We=0;We<R.length;We++)if(We>=T.length){T.push(me),we=We;break}else if(T[We]===null){T[We]=me,we=We;break}if(we===-1)break}const ye=R[we];ye&&ye.connect(me)}}const G=new U,oe=new U;function fe(j,J,me){G.setFromMatrixPosition(J.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);const we=G.distanceTo(oe),ye=J.projectionMatrix.elements,We=me.projectionMatrix.elements,xt=ye[14]/(ye[10]-1),C=ye[14]/(ye[10]+1),ot=(ye[9]+1)/ye[5],Ue=(ye[9]-1)/ye[5],Re=(ye[8]-1)/ye[0],se=(We[8]+1)/We[0],qe=xt*Re,de=xt*se,Pe=we/(-Re+se),lt=Pe*-Re;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(lt),j.translateZ(Pe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ct=xt+Pe,w=C+Pe,v=qe-lt,O=de+(we-lt),X=ot*C/w*ct,Q=Ue*C/w*ct;j.projectionMatrix.makePerspective(v,O,X,Q,ct,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Me(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let J=j.near,me=j.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(me=m.depthFar)),k.near=b.near=y.near=J,k.far=b.far=y.far=me,(H!==k.near||q!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,q=k.far),k.layers.mask=j.layers.mask|6,y.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const we=j.parent,ye=k.cameras;Me(k,we);for(let We=0;We<ye.length;We++)Me(ye[We],we);ye.length===2?fe(k,y,b):k.projectionMatrix.copy(y.projectionMatrix),Oe(j,k,we)};function Oe(j,J,me){me===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ys*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(j){return u[j]};let Ze=null;function rt(j,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const me=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let we=!1;me.length!==k.cameras.length&&(k.cameras.length=0,we=!0);for(let C=0;C<me.length;C++){const ot=me[C];let Ue=null;if(p!==null)Ue=p.getViewport(ot);else{const se=d.getViewSubImage(f,ot);Ue=se.viewport,C===0&&(e.setRenderTargetTextures(x,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(x))}let Re=P[C];Re===void 0&&(Re=new qt,Re.layers.enable(C),Re.viewport=new st,P[C]=Re),Re.matrix.fromArray(ot.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ot.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),C===0&&(k.matrix.copy(Re.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),we===!0&&k.cameras.push(Re)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const C=d.getDepthInformation(me[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let C=0;C<me.length;C++){const ot=me[C].camera;if(ot){let Ue=u[ot];Ue||(Ue=new Nh,u[ot]=Ue);const Re=d.getCameraImage(ot);Ue.sourceTexture=Re}}}}for(let me=0;me<R.length;me++){const we=T[me],ye=R[me];we!==null&&ye!==void 0&&ye.update(we,J,c||a)}Ze&&Ze(j,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ye=new kh;Ye.setAnimationLoop(rt),this.setAnimationLoop=function(j){Ze=j},this.dispose=function(){}}}const wi=new Ln,U_=new ft;function N_(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Ph(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,S,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,E,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===jt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===jt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u),S=E.envMap,x=E.envMapRotation;S&&(m.envMap.value=S,wi.copy(x),wi.x*=-1,wi.y*=-1,wi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(wi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,E,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=S*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===jt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function F_(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const x=S.program;i.uniformBlockBinding(E,x)}function c(E,S){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",m));const R=S.program;i.updateUBOMapping(E,R);const T=e.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){const S=d();E.__bindingPointIndex=S;const x=n.createBuffer(),R=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=s[E.id],x=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,A=x.length;T<A;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,b=L.length;y<b;y++){const P=L[y];if(p(P,T,y,R)===!0){const k=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let V=0;V<H.length;V++){const Y=H[V],Z=_(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,k+q,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,S,x,R){const T=E.value,A=S+"_"+x;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const L=R[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(E){const S=E.uniforms;let x=0;const R=16;for(let A=0,L=S.length;A<L;A++){const y=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,P=y.length;b<P;b++){const k=y[b],H=Array.isArray(k.value)?k.value:[k.value];for(let q=0,V=H.length;q<V;q++){const Y=H[q],Z=_(Y),G=x%R,oe=G%Z.boundary,fe=G+oe;x+=oe,fe!==0&&R-fe<Z.storage&&(x+=R-fe),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Z.storage}}}const T=x%R;return T>0&&(x+=R-T),E.__size=x,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class O_{constructor(e={}){const{canvas:t=_f(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=tn;let T=0,A=0,L=null,y=-1,b=null;const P=new st,k=new st;let H=null;const q=new Fe(0);let V=0,Y=t.width,Z=t.height,G=1,oe=null,fe=null;const Me=new st(0,0,Y,Z),Oe=new st(0,0,Y,Z);let Ze=!1;const rt=new el;let Ye=!1,j=!1;const J=new ft,me=new U,we=new st,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function xt(){return L===null?G:1}let C=i;function ot(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ee,!1),C===null){const N="webgl2";if(C=ot(N,M),C===null)throw ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,Re,se,qe,de,Pe,lt,ct,w,v,O,X,Q,W,Ee,re,xe,Se,ne,ue,De,be,ce,ze;function I(){Ue=new Yg(C),Ue.init(),be=new C_(C,Ue),Re=new zg(C,Ue,e,be),se=new A_(C,Ue),Re.reversedDepthBuffer&&f&&se.buffers.depth.setReversed(!0),qe=new Kg(C),de=new p_,Pe=new R_(C,Ue,se,de,Re,be,qe),lt=new Vg(x),ct=new qg(x),w=new np(C),ce=new kg(C,w),v=new $g(C,w,qe,ce),O=new Jg(C,v,w,qe),ne=new Zg(C,Re,Pe),re=new Hg(de),X=new f_(x,lt,ct,Ue,Re,ce,re),Q=new N_(x,de),W=new g_,Ee=new S_(Ue),Se=new Og(x,lt,ct,se,O,p,l),xe=new w_(x,O,Re),ze=new F_(C,qe,Re,se),ue=new Bg(C,Ue,qe),De=new jg(C,Ue,qe),qe.programs=X.programs,x.capabilities=Re,x.extensions=Ue,x.properties=de,x.renderLists=W,x.shadowMap=xe,x.state=se,x.info=qe}I();const ie=new I_(x,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(Y,Z,!1))},this.getSize=function(M){return M.set(Y,Z)},this.setSize=function(M,N,B=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,Z=N,t.width=Math.floor(M*G),t.height=Math.floor(N*G),B===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Y*G,Z*G).floor()},this.setDrawingBufferSize=function(M,N,B){Y=M,Z=N,G=B,t.width=Math.floor(M*B),t.height=Math.floor(N*B),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,N,B,z){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,N,B,z),se.viewport(P.copy(Me).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Oe)},this.setScissor=function(M,N,B,z){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,N,B,z),se.scissor(k.copy(Oe).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(M){se.setScissorTest(Ze=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,B=!0){let z=0;if(M){let F=!1;if(L!==null){const te=L.texture.format;F=te===$o||te===Yo||te===qo}if(F){const te=L.texture.type,he=te===Pn||te===Ui||te===Gs||te===Ws||te===Wo||te===Xo,_e=Se.getClearColor(),pe=Se.getClearAlpha(),Ce=_e.r,Le=_e.g,Te=_e.b;he?(g[0]=Ce,g[1]=Le,g[2]=Te,g[3]=pe,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Ce,_[1]=Le,_[2]=Te,_[3]=pe,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}N&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Se.dispose(),W.dispose(),Ee.dispose(),de.dispose(),lt.dispose(),ct.dispose(),O.dispose(),ce.dispose(),ze.dispose(),X.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Tn),ie.removeEventListener("sessionend",yl),vi.stop()};function ae(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=qe.autoReset,N=xe.enabled,B=xe.autoUpdate,z=xe.needsUpdate,F=xe.type;I(),qe.autoReset=M,xe.enabled=N,xe.autoUpdate=B,xe.needsUpdate=z,xe.type=F}function ee(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){const N=M.target;N.removeEventListener("dispose",K),ve(N)}function ve(M){Ne(M),de.remove(M)}function Ne(M){const N=de.get(M).programs;N!==void 0&&(N.forEach(function(B){X.releaseProgram(B)}),M.isShaderMaterial&&X.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,B,z,F,te){N===null&&(N=ye);const he=F.isMesh&&F.matrixWorld.determinant()<0,_e=nu(M,N,B,z,F);se.setMaterial(z,he);let pe=B.index,Ce=1;if(z.wireframe===!0){if(pe=v.getWireframeAttribute(B),pe===void 0)return;Ce=2}const Le=B.drawRange,Te=B.attributes.position;let Xe=Le.start*Ce,tt=(Le.start+Le.count)*Ce;te!==null&&(Xe=Math.max(Xe,te.start*Ce),tt=Math.min(tt,(te.start+te.count)*Ce)),pe!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,pe.count)):Te!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,Te.count));const _t=tt-Xe;if(_t<0||_t===1/0)return;ce.setup(F,z,_e,B,pe);let ut,at=ue;if(pe!==null&&(ut=w.get(pe),at=De,at.setIndex(ut)),F.isMesh)z.wireframe===!0?(se.setLineWidth(z.wireframeLinewidth*xt()),at.setMode(C.LINES)):at.setMode(C.TRIANGLES);else if(F.isLine){let Ae=z.linewidth;Ae===void 0&&(Ae=1),se.setLineWidth(Ae*xt()),F.isLineSegments?at.setMode(C.LINES):F.isLineLoop?at.setMode(C.LINE_LOOP):at.setMode(C.LINE_STRIP)}else F.isPoints?at.setMode(C.POINTS):F.isSprite&&at.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,pt=F._multiDrawCounts,$e=F._multiDrawCount,Kt=pe?w.get(pe).bytesPerElement:1,Fi=de.get(z).currentProgram.getUniforms();for(let Zt=0;Zt<$e;Zt++)Fi.setValue(C,"_gl_DrawID",Zt),at.render(Ae[Zt]/Kt,pt[Zt])}else if(F.isInstancedMesh)at.renderInstances(Xe,_t,F.count);else if(B.isInstancedBufferGeometry){const Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,pt=Math.min(B.instanceCount,Ae);at.renderInstances(Xe,_t,pt)}else at.render(Xe,_t)};function ht(M,N,B){M.transparent===!0&&M.side===$t&&M.forceSinglePass===!1?(M.side=jt,M.needsUpdate=!0,rr(M,N,B),M.side=Kn,M.needsUpdate=!0,rr(M,N,B),M.side=$t):rr(M,N,B)}this.compile=function(M,N,B=null){B===null&&(B=M),u=Ee.get(B),u.init(N),S.push(u),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),M!==B&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const z=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const _e=te[he];ht(_e,B,F),z.add(_e)}else ht(te,B,F),z.add(te)}),u=S.pop(),z},this.compileAsync=function(M,N,B=null){const z=this.compile(M,N,B);return new Promise(F=>{function te(){if(z.forEach(function(he){de.get(he).currentProgram.isReady()&&z.delete(he)}),z.size===0){F(M);return}setTimeout(te,10)}Ue.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Je=null;function In(M){Je&&Je(M)}function Tn(){vi.stop()}function yl(){vi.start()}const vi=new kh;vi.setAnimationLoop(In),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(M){Je=M,ie.setAnimationLoop(M),M===null?vi.stop():vi.start()},ie.addEventListener("sessionstart",Tn),ie.addEventListener("sessionend",yl),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,L),u=Ee.get(M,S.length),u.init(N),S.push(u),J.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),rt.setFromProjectionMatrix(J,Cn,N.reversedDepth),j=this.localClippingEnabled,Ye=re.init(this.clippingPlanes,j),m=W.get(M,E.length),m.init(),E.push(m),ie.enabled===!0&&ie.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&sa(te,N,-1/0,x.sortObjects)}sa(M,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(oe,fe),We=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,We&&Se.addToRenderList(m,M),this.info.render.frame++,Ye===!0&&re.beginShadows();const B=u.state.shadowsArray;xe.render(B,M,N),Ye===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(u.setupLights(),N.isArrayCamera){const te=N.cameras;if(F.length>0)for(let he=0,_e=te.length;he<_e;he++){const pe=te[he];bl(z,F,M,pe)}We&&Se.render(M);for(let he=0,_e=te.length;he<_e;he++){const pe=te[he];Sl(m,M,pe,pe.viewport)}}else F.length>0&&bl(z,F,M,N),We&&Se.render(M),Sl(m,M,N);L!==null&&A===0&&(Pe.updateMultisampleRenderTarget(L),Pe.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(x,M,N),ce.resetDefaultState(),y=-1,b=null,S.pop(),S.length>0?(u=S[S.length-1],Ye===!0&&re.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function sa(M,N,B,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||rt.intersectsSprite(M)){z&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(J);const he=O.update(M),_e=M.material;_e.visible&&m.push(M,he,_e,B,we.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||rt.intersectsObject(M))){const he=O.update(M),_e=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),we.copy(he.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(J)),Array.isArray(_e)){const pe=he.groups;for(let Ce=0,Le=pe.length;Ce<Le;Ce++){const Te=pe[Ce],Xe=_e[Te.materialIndex];Xe&&Xe.visible&&m.push(M,he,Xe,B,we.z,Te)}}else _e.visible&&m.push(M,he,_e,B,we.z,null)}}const te=M.children;for(let he=0,_e=te.length;he<_e;he++)sa(te[he],N,B,z)}function Sl(M,N,B,z){const F=M.opaque,te=M.transmissive,he=M.transparent;u.setupLightsView(B),Ye===!0&&re.setGlobalState(x.clippingPlanes,B),z&&se.viewport(P.copy(z)),F.length>0&&sr(F,N,B),te.length>0&&sr(te,N,B),he.length>0&&sr(he,N,B),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function bl(M,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new pi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?vs:Pn,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const te=u.state.transmissionRenderTarget[z.id],he=z.viewport||P;te.setSize(he.z*x.transmissionResolutionScale,he.w*x.transmissionResolutionScale);const _e=x.getRenderTarget(),pe=x.getActiveCubeFace(),Ce=x.getActiveMipmapLevel();x.setRenderTarget(te),x.getClearColor(q),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),We&&Se.render(B);const Le=x.toneMapping;x.toneMapping=Dn;const Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),Ye===!0&&re.setGlobalState(x.clippingPlanes,z),sr(M,B,z),Pe.updateMultisampleRenderTarget(te),Pe.updateRenderTargetMipmap(te),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let tt=0,_t=N.length;tt<_t;tt++){const ut=N[tt],at=ut.object,Ae=ut.geometry,pt=ut.material,$e=ut.group;if(pt.side===$t&&at.layers.test(z.layers)){const Kt=pt.side;pt.side=jt,pt.needsUpdate=!0,El(at,B,z,Ae,pt,$e),pt.side=Kt,pt.needsUpdate=!0,Xe=!0}}Xe===!0&&(Pe.updateMultisampleRenderTarget(te),Pe.updateRenderTargetMipmap(te))}x.setRenderTarget(_e,pe,Ce),x.setClearColor(q,V),Te!==void 0&&(z.viewport=Te),x.toneMapping=Le}function sr(M,N,B){const z=N.isScene===!0?N.overrideMaterial:null;for(let F=0,te=M.length;F<te;F++){const he=M[F],_e=he.object,pe=he.geometry,Ce=he.group;let Le=he.material;Le.allowOverride===!0&&z!==null&&(Le=z),_e.layers.test(B.layers)&&El(_e,N,B,pe,Le,Ce)}}function El(M,N,B,z,F,te){M.onBeforeRender(x,N,B,z,F,te),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,N,B,z,M,te),F.transparent===!0&&F.side===$t&&F.forceSinglePass===!1?(F.side=jt,F.needsUpdate=!0,x.renderBufferDirect(B,N,z,F,M,te),F.side=Kn,F.needsUpdate=!0,x.renderBufferDirect(B,N,z,F,M,te),F.side=$t):x.renderBufferDirect(B,N,z,F,M,te),M.onAfterRender(x,N,B,z,F,te)}function rr(M,N,B){N.isScene!==!0&&(N=ye);const z=de.get(M),F=u.state.lights,te=u.state.shadowsArray,he=F.state.version,_e=X.getParameters(M,F.state,te,N,B),pe=X.getProgramCacheKey(_e);let Ce=z.programs;z.environment=M.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(M.isMeshStandardMaterial?ct:lt).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",K),Ce=new Map,z.programs=Ce);let Le=Ce.get(pe);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===he)return Tl(M,_e),Le}else _e.uniforms=X.getUniforms(M),M.onBeforeCompile(_e,x),Le=X.acquireProgram(_e,pe),Ce.set(pe,Le),z.uniforms=_e.uniforms;const Te=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=re.uniform),Tl(M,_e),z.needsLights=su(M),z.lightsStateVersion=he,z.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Le,z.uniformsList=null,Le}function wl(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Or.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Tl(M,N){const B=de.get(M);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function nu(M,N,B,z,F){N.isScene!==!0&&(N=ye),Pe.resetTextureUnits();const te=N.fog,he=z.isMeshStandardMaterial?N.environment:null,_e=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ms,pe=(z.isMeshStandardMaterial?ct:lt).get(z.envMap||he),Ce=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,tt=!!B.morphAttributes.color;let _t=Dn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_t=x.toneMapping);const ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=ut!==void 0?ut.length:0,Ae=de.get(z),pt=u.state.lights;if(Ye===!0&&(j===!0||M!==b)){const Bt=M===b&&z.id===y;re.setState(z,M,Bt)}let $e=!1;z.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==pt.state.version||Ae.outputColorSpace!==_e||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==pe||z.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==re.numPlanes||Ae.numIntersection!==re.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Le||Ae.morphTargets!==Te||Ae.morphNormals!==Xe||Ae.morphColors!==tt||Ae.toneMapping!==_t||Ae.morphTargetsCount!==at)&&($e=!0):($e=!0,Ae.__version=z.version);let Kt=Ae.currentProgram;$e===!0&&(Kt=rr(z,N,F));let Fi=!1,Zt=!1,Ss=!1;const mt=Kt.getUniforms(),on=Ae.uniforms;if(se.useProgram(Kt.program)&&(Fi=!0,Zt=!0,Ss=!0),z.id!==y&&(y=z.id,Zt=!0),Fi||b!==M){se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(C,"projectionMatrix",M.projectionMatrix),mt.setValue(C,"viewMatrix",M.matrixWorldInverse);const Wt=mt.map.cameraPosition;Wt!==void 0&&Wt.setValue(C,me.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&mt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&mt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Zt=!0,Ss=!0)}if(F.isSkinnedMesh){mt.setOptional(C,F,"bindMatrix"),mt.setOptional(C,F,"bindMatrixInverse");const Bt=F.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),mt.setValue(C,"boneTexture",Bt.boneTexture,Pe))}F.isBatchedMesh&&(mt.setOptional(C,F,"batchingTexture"),mt.setValue(C,"batchingTexture",F._matricesTexture,Pe),mt.setOptional(C,F,"batchingIdTexture"),mt.setValue(C,"batchingIdTexture",F._indirectTexture,Pe),mt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&mt.setValue(C,"batchingColorTexture",F._colorsTexture,Pe));const ln=B.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ne.update(F,B,Kt),(Zt||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,mt.setValue(C,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(on.envMap.value=pe,on.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(on.envMapIntensity.value=N.environmentIntensity),Zt&&(mt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ae.needsLights&&iu(on,Ss),te&&z.fog===!0&&Q.refreshFogUniforms(on,te),Q.refreshMaterialUniforms(on,z,G,Z,u.state.transmissionRenderTarget[M.id]),Or.upload(C,wl(Ae),on,Pe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Or.upload(C,wl(Ae),on,Pe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&mt.setValue(C,"center",F.center),mt.setValue(C,"modelViewMatrix",F.modelViewMatrix),mt.setValue(C,"normalMatrix",F.normalMatrix),mt.setValue(C,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Bt=z.uniformsGroups;for(let Wt=0,ra=Bt.length;Wt<ra;Wt++){const xi=Bt[Wt];ze.update(xi,Kt),ze.bind(xi,Kt)}}return Kt}function iu(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function su(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,N,B){const z=de.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),de.get(M.texture).__webglTexture=N,de.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const B=de.get(M);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const ru=C.createFramebuffer();this.setRenderTarget=function(M,N=0,B=0){L=M,T=N,A=B;let z=!0,F=null,te=!1,he=!1;if(M){const pe=de.get(M);if(pe.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(pe.__webglFramebuffer===void 0)Pe.setupRenderTarget(M);else if(pe.__hasExternalTextures)Pe.rebindTextures(M,de.get(M.texture).__webglTexture,de.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(pe.__boundDepthTexture!==Te){if(Te!==null&&de.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);const Le=de.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?F=Le[N][B]:F=Le[N],te=!0):M.samples>0&&Pe.useMultisampledRTT(M)===!1?F=de.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[B]:F=Le,P.copy(M.viewport),k.copy(M.scissor),H=M.scissorTest}else P.copy(Me).multiplyScalar(G).floor(),k.copy(Oe).multiplyScalar(G).floor(),H=Ze;if(B!==0&&(F=ru),se.bindFramebuffer(C.FRAMEBUFFER,F)&&z&&se.drawBuffers(M,F),se.viewport(P),se.scissor(k),se.setScissorTest(H),te){const pe=de.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe.__webglTexture,B)}else if(he){const pe=N;for(let Ce=0;Ce<M.textures.length;Ce++){const Le=de.get(M.textures[Ce]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,B,pe)}}else if(M!==null&&B!==0){const pe=de.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,pe.__webglTexture,B)}y=-1},this.readRenderTargetPixels=function(M,N,B,z,F,te,he,_e=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=de.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){se.bindFramebuffer(C.FRAMEBUFFER,pe);try{const Ce=M.textures[_e],Le=Ce.format,Te=Ce.type;if(!Re.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&B>=0&&B<=M.height-F&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e),C.readPixels(N,B,z,F,be.convert(Le),be.convert(Te),te))}finally{const Ce=L!==null?de.get(L).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,N,B,z,F,te,he,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=de.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(N>=0&&N<=M.width-z&&B>=0&&B<=M.height-F){se.bindFramebuffer(C.FRAMEBUFFER,pe);const Ce=M.textures[_e],Le=Ce.format,Te=Ce.type;if(!Re.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.bufferData(C.PIXEL_PACK_BUFFER,te.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e),C.readPixels(N,B,z,F,be.convert(Le),be.convert(Te),0);const tt=L!==null?de.get(L).__webglFramebuffer:null;se.bindFramebuffer(C.FRAMEBUFFER,tt);const _t=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await vf(C,_t,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,te),C.deleteBuffer(Xe),C.deleteSync(_t),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,B=0){const z=Math.pow(2,-B),F=Math.floor(M.image.width*z),te=Math.floor(M.image.height*z),he=N!==null?N.x:0,_e=N!==null?N.y:0;Pe.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,he,_e,F,te),se.unbindTexture()};const au=C.createFramebuffer(),ou=C.createFramebuffer();this.copyTextureToTexture=function(M,N,B=null,z=null,F=0,te=null){te===null&&(F!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let he,_e,pe,Ce,Le,Te,Xe,tt,_t;const ut=M.isCompressedTexture?M.mipmaps[te]:M.image;if(B!==null)he=B.max.x-B.min.x,_e=B.max.y-B.min.y,pe=B.isBox3?B.max.z-B.min.z:1,Ce=B.min.x,Le=B.min.y,Te=B.isBox3?B.min.z:0;else{const ln=Math.pow(2,-F);he=Math.floor(ut.width*ln),_e=Math.floor(ut.height*ln),M.isDataArrayTexture?pe=ut.depth:M.isData3DTexture?pe=Math.floor(ut.depth*ln):pe=1,Ce=0,Le=0,Te=0}z!==null?(Xe=z.x,tt=z.y,_t=z.z):(Xe=0,tt=0,_t=0);const at=be.convert(N.format),Ae=be.convert(N.type);let pt;N.isData3DTexture?(Pe.setTexture3D(N,0),pt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Pe.setTexture2DArray(N,0),pt=C.TEXTURE_2D_ARRAY):(Pe.setTexture2D(N,0),pt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const $e=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Fi=C.getParameter(C.UNPACK_SKIP_PIXELS),Zt=C.getParameter(C.UNPACK_SKIP_ROWS),Ss=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ut.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ut.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,Le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Te);const mt=M.isDataArrayTexture||M.isData3DTexture,on=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const ln=de.get(M),Bt=de.get(N),Wt=de.get(ln.__renderTarget),ra=de.get(Bt.__renderTarget);se.bindFramebuffer(C.READ_FRAMEBUFFER,Wt.__webglFramebuffer),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,ra.__webglFramebuffer);for(let xi=0;xi<pe;xi++)mt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,de.get(M).__webglTexture,F,Te+xi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,de.get(N).__webglTexture,te,_t+xi)),C.blitFramebuffer(Ce,Le,he,_e,Xe,tt,he,_e,C.DEPTH_BUFFER_BIT,C.NEAREST);se.bindFramebuffer(C.READ_FRAMEBUFFER,null),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||de.has(M)){const ln=de.get(M),Bt=de.get(N);se.bindFramebuffer(C.READ_FRAMEBUFFER,au),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,ou);for(let Wt=0;Wt<pe;Wt++)mt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ln.__webglTexture,F,Te+Wt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ln.__webglTexture,F),on?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,te,_t+Wt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,te),F!==0?C.blitFramebuffer(Ce,Le,he,_e,Xe,tt,he,_e,C.COLOR_BUFFER_BIT,C.NEAREST):on?C.copyTexSubImage3D(pt,te,Xe,tt,_t+Wt,Ce,Le,he,_e):C.copyTexSubImage2D(pt,te,Xe,tt,Ce,Le,he,_e);se.bindFramebuffer(C.READ_FRAMEBUFFER,null),se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(pt,te,Xe,tt,_t,he,_e,pe,at,Ae,ut.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(pt,te,Xe,tt,_t,he,_e,pe,at,ut.data):C.texSubImage3D(pt,te,Xe,tt,_t,he,_e,pe,at,Ae,ut):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,te,Xe,tt,he,_e,at,Ae,ut.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,te,Xe,tt,ut.width,ut.height,at,ut.data):C.texSubImage2D(C.TEXTURE_2D,te,Xe,tt,he,_e,at,Ae,ut);C.pixelStorei(C.UNPACK_ROW_LENGTH,$e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ss),te===0&&N.generateMipmaps&&C.generateMipmap(pt),se.unbindTexture()},this.initRenderTarget=function(M){de.get(M).__webglFramebuffer===void 0&&Pe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Pe.setTextureCube(M,0):M.isData3DTexture?Pe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Pe.setTexture2DArray(M,0):Pe.setTexture2D(M,0),se.unbindTexture()},this.resetState=function(){T=0,A=0,L=null,se.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Ti=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]];function k_(){const n=[],e=[];for(let o=190;o>-260;o-=31)n.push({center:[0,o,-100],radius:20,height:23}),e.push({center:[0,o-3,-126],radii:[16,10,10]});const t=[];for(let o=0;o<11;o++){const l=172-o*25,c=70+Math.min(o,6)*12,h=92+Math.min(o,5)*4,d=o<7?150:120-(o-7)*10;for(const f of[-1,1]){const p=[];for(let g=8;g<=d;g+=6){const _=g*Math.PI/180,m=l+6*Math.sin(_*1.2)-48*Math.pow(g/150,1.6);p.push([f*Math.sin(_)*c,m,-20-Math.cos(_)*h])}t.push(p)}}const i=[-1,1].map(o=>li([[o*18,170,45],[o*70,182,30],[o*140,184,0]],12)),s=li([...gt.radial,...gt.brachial.slice(1),...gt.axillary.slice(1)].reverse(),8),r=li([Ti(gt.axillary[1],[-14,0,-12]),Ti(gt.brachial[2],[-10,0,-14]),Ti(gt.brachial[0],[-10,5,-10])],10),a=li([Ti(gt.radial[3],[-6,-5,-6]),Ti(gt.radial[1],[-4,0,-8]),Ti(gt.radial[0],[-3,0,-8])],10);return{chest:{center:[0,-10,-15],radii:[158,250,118]},mediastinum:{center:[0,40,-40],radii:[42,150,45]},diaphragm:[{center:[-55,-178,-20],radii:[115,128,112]},{center:[60,-192,-20],radii:[112,128,110]}],vertebrae:n,posteriorElements:e,ribs:t,clavicles:i,arm:{line:s,radii:s.map((o,l)=>46-l/s.length*14)},humerus:r,radius:a,ulna:a.map(o=>Ti(o,[-16,0,-10]))}}class ta{geometry=new an;maxRings;radial;pos;nor;uv;contrast;rad;colors;rings=0;centers=[];normals=[];binormals=[];constructor(e,t=12,i=!1){this.maxRings=Math.max(2,e),this.radial=t;const s=this.maxRings*(t+1);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3),this.uv=new Float32Array(s*2),this.contrast=new Float32Array(s),this.rad=new Float32Array(s),this.colors=i?new Float32Array(s*3):null;const r=[];for(let o=0;o<this.maxRings-1;o++)for(let l=0;l<t;l++){const c=o*(t+1)+l,h=c+t+1;r.push(c,h,c+1,h,h+1,c+1)}const a=this.geometry;a.setIndex(r),a.setAttribute("position",new Ot(this.pos,3).setUsage(ki)),a.setAttribute("normal",new Ot(this.nor,3).setUsage(ki)),a.setAttribute("uv",new Ot(this.uv,2).setUsage(ki)),a.setAttribute("aContrast",new Ot(this.contrast,1).setUsage(ki)),a.setAttribute("aRadius",new Ot(this.rad,1).setUsage(ki)),this.colors&&a.setAttribute("color",new Ot(this.colors,3).setUsage(ki)),a.setDrawRange(0,0),a.boundingSphere=new Jr(new U,1e5)}update(e,t,i=0,s){const r=Math.min(e.length,this.maxRings);if(this.rings=r,r<2){this.geometry.setDrawRange(0,0);return}const a=[];for(let S=0;S<r;S++){const x=e[Math.max(0,S-1)],R=e[Math.min(r-1,S+1)];let T=R[0]-x[0],A=R[1]-x[1],L=R[2]-x[2];const y=Math.hypot(T,A,L)||1;T/=y,A/=y,L/=y,a.push([T,A,L])}const o=[],l=[];let c,h,d;const f=a[0];let p=s??(Math.abs(f[1])<.9?[0,1,0]:[1,0,0]),g=p[0]*f[0]+p[1]*f[1]+p[2]*f[2];c=p[0]-g*f[0],h=p[1]-g*f[1],d=p[2]-g*f[2];let _=Math.hypot(c,h,d);_<1e-6&&(p=Math.abs(f[1])<.9?[0,1,0]:[1,0,0],g=p[0]*f[0]+p[1]*f[1]+p[2]*f[2],c=p[0]-g*f[0],h=p[1]-g*f[1],d=p[2]-g*f[2],_=Math.hypot(c,h,d)),c/=_,h/=_,d/=_;for(let S=0;S<r;S++){const x=a[S];g=c*x[0]+h*x[1]+d*x[2];let R=c-g*x[0],T=h-g*x[1],A=d-g*x[2];if(_=Math.hypot(R,T,A),_<1e-6){const L=Math.abs(x[1])<.9?[0,1,0]:[1,0,0];g=L[0]*x[0]+L[1]*x[1]+L[2]*x[2],R=L[0]-g*x[0],T=L[1]-g*x[1],A=L[2]-g*x[2],_=Math.hypot(R,T,A)}c=R/_,h=T/_,d=A/_,o.push([c,h,d]),l.push([x[1]*d-x[2]*h,x[2]*c-x[0]*d,x[0]*h-x[1]*c])}this.centers=e.slice(0,r),this.normals=o,this.binormals=l;const m=this.radial;let u=0;for(let S=0;S<r;S++){if(S>0){const L=e[S-1],y=e[S];u+=Math.hypot(y[0]-L[0],y[1]-L[1],y[2]-L[2])}const x=typeof t=="number"?t:t[S],R=e[S],T=o[S],A=l[S];for(let L=0;L<=m;L++){const y=L/m*Math.PI*2,b=Math.cos(y),P=Math.sin(y),k=T[0]*b+A[0]*P,H=T[1]*b+A[1]*P,q=T[2]*b+A[2]*P,V=S*(m+1)+L;this.pos[V*3]=R[0]+k*x,this.pos[V*3+1]=R[1]+H*x,this.pos[V*3+2]=R[2]+q*x,this.nor[V*3]=k,this.nor[V*3+1]=H,this.nor[V*3+2]=q,this.uv[V*2]=i>0?u/i:S/(r-1),this.uv[V*2+1]=L/m,this.rad[V]=x}}const E=this.geometry;E.setDrawRange(0,(r-1)*m*6),E.getAttribute("position").needsUpdate=!0,E.getAttribute("normal").needsUpdate=!0,E.getAttribute("uv").needsUpdate=!0,E.getAttribute("aRadius").needsUpdate=!0}setContrast(e){const t=this.radial+1;for(let i=0;i<this.rings;i++){const s=typeof e=="number"?e:e[i]??0;for(let r=0;r<t;r++)this.contrast[i*t+r]=s}this.geometry.getAttribute("aContrast").needsUpdate=!0}setColors(e){if(!this.colors)return;const t=this.radial+1;for(let i=0;i<this.rings;i++){const[s,r,a]=e(i);for(let o=0;o<t;o++){const l=(i*t+o)*3;this.colors[l]=s,this.colors[l+1]=r,this.colors[l+2]=a}}this.geometry.getAttribute("color").needsUpdate=!0}ringOfFace(e){return Math.floor(e/(this.radial*2))}}function ol(n){return n.transparent=!0,n.depthTest=!1,n.depthWrite=!1,n.blending=uh,n.blendEquation=ri,n.blendSrc=fh,n.blendDst=dh,n.side=Kn,n}function pn(n){return ol(new _n({uniforms:{uMuContrast:{value:n.muContrast??0},uMuWall:{value:n.muWall??0},uGain:{value:1},uExtra:{value:n.extra??0}},vertexShader:`
        attribute float aContrast;
        attribute float aRadius;
        uniform float uExtra;
        varying float vC;
        varying float vR;
        varying float vNV;
        void main() {
          // uExtra widens very thin devices so they survive the detector blur
          vec4 mv = modelViewMatrix * vec4(position + normal * uExtra, 1.0);
          vec3 n = normalize(normalMatrix * normal);
          vec3 v = normalize(-mv.xyz);
          vNV = abs(dot(n, v));
          vC = aContrast;
          vR = aRadius + uExtra;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uMuContrast;
        uniform float uMuWall;
        uniform float uGain;
        varying float vC;
        varying float vR;
        varying float vNV;
        void main() {
          float chord = 2.0 * vR * clamp(vNV, 0.0, 1.0);
          float mu = (uMuContrast * vC + uMuWall) * uGain;
          float T = exp(-mu * chord);
          gl_FragColor = vec4(vec3(T), 1.0);
        }`}))}function B_(n){return ol(new _n({uniforms:{uMu:{value:n}},vertexShader:`
        varying float vNV;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vec3 n = normalize(normalMatrix * normal);
          vNV = abs(dot(n, normalize(-mv.xyz)));
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uMu;
        varying float vNV;
        void main() {
          float T = exp(-uMu / max(vNV, 0.12));
          gl_FragColor = vec4(vec3(T), 1.0);
        }`}))}function ns(n,e,t=1){return ol(new _n({uniforms:{uMu:{value:n},uR:{value:e},uPow:{value:t}},vertexShader:`
        varying float vNV;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vec3 n = normalize(normalMatrix * normal);
          vNV = abs(dot(n, normalize(-mv.xyz)));
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uMu;
        uniform float uR;
        uniform float uPow;
        varying float vNV;
        void main() {
          float chord = 2.0 * uR * pow(clamp(vNV, 0.0, 1.0), uPow);
          gl_FragColor = vec4(vec3(exp(-uMu * chord)), 1.0);
        }`}))}function z_(n,e=56,t=72){const i=n.frame,s=[],r=[],a=[],o=[],l=new Fe(.58,.13,.11),c=new Fe(.86,.72,.38),h=new Fe;for(let f=0;f<=e;f++){const p=yt.tMin+(1-yt.tMin)*f/e;for(let g=0;g<=t;g++){const _=360*g/t,m=zr(i,p,_),u=f===0?i.axis.map(x=>-x):f===e?i.axis:jc(i,p,_);s.push(...m),r.push(...u);const E=gu(p,_),S=.94+.06*Math.sin(_*.37+p*23)*Math.cos(p*41-_*.11);h.copy(l).lerp(c,E).multiplyScalar(S),a.push(h.r,h.g,h.b)}}for(let f=0;f<e;f++)for(let p=0;p<t;p++){const g=f*(t+1)+p,_=g+t+1;o.push(g,g+1,_,_,g+1,_+1)}const d=new an;return d.setIndex(o),d.setAttribute("position",new Et(s,3)),d.setAttribute("normal",new Et(r,3)),d.setAttribute("color",new Et(a,3)),d.computeBoundingSphere(),d}const H_={coronary:[.78,.16,.14],aorta:[.72,.18,.16],access:[.75,.2,.18]};function V_(n){const e=[];for(const t of Object.values(n.vessels)){const i=t.kind==="aorta"?28:t.kind==="coronary"?14:10,s=new ta(t.pts.length,i,!0);s.update(t.pts,t.baseD.map(c=>c/2));const r=new Fe(...H_[t.kind]);s.setColors(()=>[r.r,r.g,r.b]);const a=new en({vertexColors:!0,roughness:.45,metalness:.05,transparent:!0,opacity:t.kind==="aorta"?.32:t.kind==="coronary"?.62:.5,depthWrite:t.kind==="coronary",side:$t}),o=new dt(s.geometry,a);o.renderOrder=t.kind==="aorta"?3:2,o.userData.vessel=t.id;const l=new dt(s.geometry,pn({muContrast:Be.muContrast,muWall:t.kind==="aorta"?4e-4:t.kind==="coronary"?Be.muVesselWall:.002}));l.frustumCulled=!1,o.frustumCulled=!1,e.push({id:t.id,tube:s,mesh3d:o,meshXray:l,version:-1,baseColor:r})}return e}function Ds(n,e,t,i=40){const s=new dt(new nl(1,i,Math.round(i*.75)),t);return s.position.set(...n),s.scale.set(...e),s.frustumCulled=!1,s}function Ji(n,e,t,i=10){const s=new ta(n.length,i);s.update(n,e),s.setContrast(1);const r=new dt(s.geometry,t);return r.frustumCulled=!1,r}function G_(){const n=k_(),e=new sn;e.add(Ds(n.chest.center,n.chest.radii,ns(Be.muSoftTissue,n.chest.radii[2],.6))),e.add(Ds(n.mediastinum.center,n.mediastinum.radii,ns(Be.muSoftTissue*1.6,40,.8)));for(const a of n.diaphragm)e.add(Ds(a.center,a.radii,ns(Be.muDiaphragm,a.radii[2],.45)));const t=ns(Be.muSpine,20,.7),i=ns(Be.muSpine*.8,9,.7);for(const a of n.vertebrae){const o=new dt(new er(a.radius-1,a.radius+1,a.height,24),t);o.position.set(...a.center),o.frustumCulled=!1,e.add(o)}for(const a of n.posteriorElements)e.add(Ds(a.center,a.radii,i,16));const s=pn({muContrast:Be.muRib});for(const a of n.ribs)e.add(Ji(a,4.2,s,8));const r=pn({muContrast:Be.muBone});for(const a of n.clavicles)e.add(Ji(a,6.5,r,10));return e.add(Ji(n.arm.line,n.arm.radii,pn({muContrast:Be.muSoftTissue*1.2}),16)),e.add(Ji(n.humerus,9,r,10)),e.add(Ji(n.radius,5.5,r,8)),e.add(Ji(n.ulna,5,r,8)),e}function W_(){const n=new sn,e=new en({color:14263690,transparent:!0,opacity:.07,depthWrite:!1,roughness:.9,side:$t});n.add(Ds([0,-30,-15],[160,265,120],e,48));const t=li([...gt.radial,...gt.brachial.slice(1),...gt.axillary.slice(1)],8),i=new ta(t.length,20);i.update(t,t.map((r,a)=>26+a/t.length*16));const s=new dt(i.geometry,e);return s.frustumCulled=!1,n.add(s),n}function X_(){const t=document.createElement("canvas");t.width=128,t.height=256;const i=t.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,128,256),i.strokeStyle="#fff",i.lineWidth=7,i.lineJoin="round";const s=8;for(const a of[.25,.75]){i.beginPath();for(let o=0;o<=s*2;o++){const l=o/(s*2)*256,c=(a+(o%2?.17:-.17))*128;o===0?i.moveTo(c,l):i.lineTo(c,l)}i.stroke()}i.lineWidth=5;for(let a=0;a<s;a+=2){const o=(2*a+1)/(s*2)*256;i.beginPath(),i.moveTo(.42*128,o),i.lineTo(.58*128,o),i.stroke(),i.beginPath(),i.moveTo(.92*128,o+256/s),i.lineTo(1.08*128,o+256/s),i.stroke(),i.beginPath(),i.moveTo(-.08*128,o+256/s),i.lineTo(.08*128,o+256/s),i.stroke()}const r=new qf(t);return r.wrapS=Vs,r.wrapT=Vs,r.anisotropy=4,r}function un(n,e,t,i,s,r){const a=new ta(n,e),o=new dt(a.geometry,t);o.frustumCulled=!1,s.add(o);const l=new dt(a.geometry,i??t);return l.frustumCulled=!1,i&&r.add(l),{tube:a,m3:o,mx:l}}function yn(n){n.tube.update([],0),n.m3.visible=!1,n.mx.visible=!1}function Bn(n){n.m3.visible=!0,n.mx.visible=!0}class q_{constructor(e,t,i){this.beat3d=e,this.beatX=t,this.vessels=i;const s=new en({color:9422568,roughness:.35,metalness:.1}),r=pn({muContrast:Be.muGuide});this.guide=un(170,12,s,r,this.group3d,this.groupX),this.guideTip=un(26,12,s,r,this.group3d,this.groupX);const a=new en({color:13686492,roughness:.25,metalness:.85}),o=new en({color:14726220,roughness:.3,metalness:.8,emissive:2759168});this.wireBody=un(140,6,a,pn({muContrast:Be.muWireBody,extra:.22}),this.group3d,this.groupX),this.wireTip=un(70,6,o,pn({muContrast:Be.muWireTip,extra:.3}),this.group3d,this.groupX);const l=X_();this.stentMat3=new en({color:13226457,metalness:.9,roughness:.25,alphaMap:l,alphaTest:.5,side:$t,transparent:!1}),this.stentMatX=B_(Be.muStent);const c=()=>{const h=new en({color:15265522,roughness:.4}),d=new en({color:16054008,roughness:.2,transparent:!0,opacity:.55,depthWrite:!1}),f=pn({muContrast:Be.muContrast*.85,muWall:.02}),p=new en({color:10134443,metalness:.95,roughness:.2}),g=pn({muContrast:Be.muMarker,extra:.25});return{shaft:un(80,8,h,pn({muContrast:.12}),this.group3d,this.groupX),balloon:un(60,16,d,f,this.group3d,this.groupX),tip:un(10,8,h,pn({muContrast:.05}),this.group3d,this.groupX),mk1:un(4,10,p,g,this.group3d,this.groupX),mk2:un(4,10,p,g,this.group3d,this.groupX),stent:null,balloonMat:d,balloonX:f}};this.caths={balloon:c(),stent:c()},this.caths.stent.stent=un(70,24,this.stentMat3,this.stentMatX,this.group3d,this.groupX)}beat3d;beatX;vessels;group3d=new sn;groupX=new sn;guide;guideTip;wireBody;wireTip;caths;stents=new Map;dissections=new Map;stentMat3;stentMatX;tips={};samplePath(e,t,i,s,r,a,o){const l=[];for(let c=0;c<r;c++){const h=i+(s-i)*c/Math.max(1,r-1),d=oa(e.anat,t,h);let f=d.p;o&&(f=o(h,f)),l.push(d.beats?Br(a,f):f)}return l}update(e,t){this.updateGuide(e,t),this.updateWire(e,t),this.updateCath(e,e.balloon,this.caths.balloon,t),this.updateCath(e,e.stent,this.caths.stent,t),this.updateStents(e),this.updateDissections(e)}updateGuide(e,t){const i=e.guide;if(i.s<=.5){yn(this.guide),yn(this.guideTip),delete this.tips.guide;return}Bn(this.guide);const s=mn.outerDiameter/2,r=Math.max(0,i.s-700),a=this.samplePath(e,e.access,r,i.s,170,t);this.guide.tube.update(a,s),this.guide.tube.setContrast(1);const o=En(e.landmarks.aortaEntryS+5,e.landmarks.aortaEntryS+60,i.s),l=oa(e.anat,e.access,i.s);let c=l.p;if(o>.02){Bn(this.guideTip);const h=l.t,d=e.anat.root,f=qn(Lu(d,i.rot),h);let p=f;if(i.engaged){const E=ks(e.anat,"LM",2.5+mn.seatDepth);c=Br(t,E.p),p=E.t}else c=Mt(et(l.p,h,23*o),[0,0,0]),c=et(c,f,12.5*o);const g=l.p,_=et(l.p,h,11*o),m=et(c,p,-7*o),u=[];for(let E=0;E<24;E++){const S=E/23,x=(1-S)**3,R=3*(1-S)**2*S,T=3*(1-S)*S*S,A=S**3;u.push([g[0]*x+_[0]*R+m[0]*T+c[0]*A,g[1]*x+_[1]*R+m[1]*T+c[1]*A,g[2]*x+_[2]*R+m[2]*T+c[2]*A])}this.guideTip.tube.update(u,u.map((E,S)=>S>20?s*.9:s)),this.guideTip.tube.setContrast(1)}else yn(this.guideTip);this.tips.guide=new U(...c)}updateWire(e,t){const i=e.wire;if(i.pos<=.2){yn(this.wireBody),yn(this.wireTip),delete this.tips.wire;return}const s=kt(e.anat,i),a=oa(e.anat,s,i.pos).t,o=Zc(e.anat.frame,a),l=rn(hs(a,o)),c=i.rot*hi,h=[o[0]*Math.cos(c)+l[0]*Math.sin(c),o[1]*Math.cos(c)+l[1]*Math.sin(c),o[2]*Math.cos(c)+l[2]*Math.sin(c)],d=qn(hs(a,h),a),f=(m,u)=>{let E=u;const S=i.pos-m;if(S<3){const x=1-S/3;E=et(E,h,1.1*x*x)}if(i.buckle>.01&&S>2&&S<20){const x=(S-2)/18;E=et(E,d,i.buckle*2.4*Math.sin(Math.PI*x))}return E},p=Math.max(0,i.pos-vt.radiopaqueTip),g=vt.diameter/2;p>.3?(Bn(this.wireBody),this.wireBody.tube.update(this.samplePath(e,s,0,p,140,t,f),g),this.wireBody.tube.setContrast(1)):yn(this.wireBody),Bn(this.wireTip);const _=this.samplePath(e,s,p,i.pos,70,t,f);this.wireTip.tube.update(_,_.map((m,u)=>u>66?g*.85:g)),this.wireTip.tube.setContrast(1),this.tips.wire=new U(..._[_.length-1])}updateCath(e,t,i,s){const r=[i.shaft,i.balloon,i.tip,i.mk1,i.mk2,...i.stent?[i.stent]:[]];if(t.pos<=.2){r.forEach(yn),delete this.tips[t.kind];return}const a=kt(e.anat,e.wire),[o,l]=_i(t),c=1,h=.42,d=Math.max(0,o-c);d>.3?(Bn(i.shaft),i.shaft.tube.update(this.samplePath(e,a,0,d,80,s),h)):yn(i.shaft);const f=t.pressure>.05,p=f?Zs(t)/2:(t.kind==="balloon"?Ns.profile:ci.profile)/2,g=Math.max(0,o-c),_=l+c;if(_-g>.3){Bn(i.balloon);const u=60,E=this.samplePath(e,a,g,_,u,s),S=E.map((R,T)=>{const A=g+(_-g)*T/(u-1),L=A<o?En(o-c,o,A):A>l?1-En(l,l+c,A):1;return h+(p-h)*L});i.balloon.tube.update(E,S),i.balloon.tube.setContrast(f?Math.min(1,t.pressure/2):0);const x=f?new Fe(15913520):new Fe(16054008);i.balloonMat.color.copy(x),i.balloonMat.opacity=f?.75:.5,t.ruptured&&i.balloonMat.color.set(9071962)}else yn(i.balloon);Bn(i.tip),i.tip.tube.update(this.samplePath(e,a,_,t.pos,10,s),[.42,.4,.38,.36,.34,.32,.3,.28,.25,.2]);for(const[u,E]of[[i.mk1,o+.5],[i.mk2,l-.5]]){if(E<=.2){yn(u);continue}Bn(u),u.tube.update(this.samplePath(e,a,E-.45,E+.45,4,s),.5),u.tube.setContrast(1)}if(i.stent)if(t.kind==="stent"&&!t.deployed&&l>.3){Bn(i.stent);const u=Math.max(.05,o),E=this.samplePath(e,a,u,l,70,s);i.stent.tube.update(E,Math.max(ci.crimpedRadius,p+.03),2.6)}else yn(i.stent);const m=this.samplePath(e,a,t.pos,t.pos,1,s)[0];this.tips[t.kind]=new U(...m)}updateStents(e){for(const t of e.stents){let i=this.stents.get(t.id);if(!i){const s=e.anat.vessels[t.vessel],r=Math.max(2,Math.round((t.s1-t.s0)/s.ds)+1);i={pair:un(r+1,24,this.stentMat3,this.stentMatX,this.beat3d,this.beatX),d:-1},this.stents.set(t.id,i)}i.d!==t.expandedD&&(i.d=t.expandedD,this.buildStentGeometry(e,t,i.pair))}}buildStentGeometry(e,t,i){e.anat.vessels[t.vessel];const s=i.tube.maxRings,r=[];for(let a=0;a<s;a++)r.push(ks(e.anat,t.vessel,t.s0+(t.s1-t.s0)*a/(s-1)).p);i.tube.update(r,t.expandedD*(1-ci.recoil)/2+.05,2.6)}updateDissections(e){for(const t of e.dissections){let i=this.dissections.get(t.id);i||(i=this.buildDissection(e,t),this.dissections.set(t.id,i)),i.stain.tube.setContrast(Math.min(1.3,t.stain))}}buildDissection(e,t){const i=this.vessels.find(u=>u.id===t.vessel),s=e.anat.vessels[t.vessel],r=Os(s,t.s0),a=Math.max(r+2,Os(s,t.s1)),o=i.tube.normals,l=i.tube.binormals,c=[],h=[],d=[],f=[];for(let u=r;u<=a;u++){const E=s.pts[u],S=s.refD[u]/2,x=(u-r)/(a-r),R=Math.sin(x*Math.PI*3)*.15*S,T=et(et(E,o[u],.2*S+R),l[u],0);if(c.push(...et(T,l[u],.6*S),...et(T,l[u],-.6*S)),u>r){const A=(u-r)*2;h.push(A-2,A-1,A,A-1,A+1,A)}d.push(et(E,o[u],S*1.3)),f.push(S*.8*Math.sin(Math.PI*(.1+.8*x)))}const p=new an;p.setIndex(h),p.setAttribute("position",new Et(c,3)),p.computeVertexNormals();const g=new dt(p,new en({color:3804424,roughness:.8,side:$t}));g.frustumCulled=!1,this.beat3d.add(g);const _=pn({muContrast:Be.muContrast*1.1}),m=un(d.length,10,new Qr({visible:!1}),_,new sn,this.beatX);return m.tube.update(d,f),{flap:g,stain:m,stainX:_}}dispose(){const e=t=>{t.parent?.remove(t),t.geometry&&t.geometry.dispose()};this.stents.forEach(t=>{e(t.pair.m3),e(t.pair.mx)}),this.dissections.forEach(t=>{e(t.flap),e(t.stain.mx)}),this.group3d.parent?.remove(this.group3d),this.groupX.parent?.remove(this.groupX)}}const Bc={type:"change"},ll={type:"start"},Gh={type:"end"},Dr=new Zo,zc=new si,Y_=Math.cos(70*gs.DEG2RAD),wt=new U,Xt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},za=1e-6;class $_ extends ep{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new fi,this._lastTargetPosition=new U,this._quat=new fi().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fc,this._sphericalDelta=new fc,this._scale=1,this._panOffset=new U,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new U,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K_.bind(this),this._onPointerDown=j_.bind(this),this._onPointerUp=Z_.bind(this),this._onContextMenu=sv.bind(this),this._onMouseWheel=ev.bind(this),this._onKeyDown=tv.bind(this),this._onTouchStart=nv.bind(this),this._onTouchMove=iv.bind(this),this._onMouseDown=J_.bind(this),this._onMouseMove=Q_.bind(this),this._interceptControlDown=rv.bind(this),this._interceptControlUp=av.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bc),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xt:i>Math.PI&&(i-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=wt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Dr.origin.copy(this.object.position),Dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dr.direction))<Y_?this.object.lookAt(this.target):(zc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dr.intersectPlane(zc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>za||this._lastTargetPosition.distanceToSquared(this.target)>za?(this.dispatchEvent(Bc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;wt.copy(s).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function j_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function K_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Z_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gh),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function J_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=it.DOLLY;break;case os.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}break;case os.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(ll)}function Q_(n){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ev(n){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(n.preventDefault(),this.dispatchEvent(ll),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Gh))}function tv(n){this.enabled!==!1&&this._handleKeyDown(n)}function nv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=it.TOUCH_ROTATE;break;case is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=it.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(ll)}function iv(n){switch(this._trackPointer(n),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=it.NONE}}function sv(n){this.enabled!==!1&&n.preventDefault()}function rv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function av(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wh(n,e){const t=gs.degToRad(n),i=gs.degToRad(e);return new U(Math.sin(t)*Math.cos(i),Math.sin(i),Math.cos(t)*Math.cos(i)).normalize()}function Hc(n,e,t,i,s){const r=Wh(t,i),a=Be.sourceToIso;n.position.copy(e).addScaledVector(r,a),n.up.set(0,1,0),Math.abs(r.y)>.98&&n.up.set(0,0,-1),n.lookAt(e);const o=Be.fieldOfView/Be.collimation,l=s>=1?o:o/s;n.fov=gs.radToDeg(2*Math.atan(l/2/a)),n.aspect=s,n.near=100,n.far=a+800;const c=1e3,h=Math.round(c/s);n.setViewOffset(c,h,0,Math.round(h*Be.imageShift),c,h),n.updateProjectionMatrix()}class ov{constructor(e,t){this.camera=e,this.controls=new $_(e,t),this.controls.enableZoom=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.rotateSpeed=.7,this.controls.screenSpacePanning=!0}camera;controls;goalTarget=null;goalDist=null;tweenT=0;get distance(){return this.camera.position.distanceTo(this.controls.target)}setDistance(e){const t=this.camera.position.clone().sub(this.controls.target).normalize();this.camera.position.copy(this.controls.target).addScaledVector(t,gs.clamp(e,25,2200))}zoom(e){this.goalDist=null,this.setDistance(this.distance*e)}focus(e,t){this.goalTarget=e.clone(),this.goalDist=t??null,this.tweenT=0}follow(e,t){const i=Math.min(1,t*6),s=e.clone().sub(this.controls.target).multiplyScalar(i);this.controls.target.add(s),this.camera.position.add(s)}update(e){if(this.goalTarget){this.tweenT+=e;const t=Math.min(1,e*4.5),i=this.goalTarget.clone().sub(this.controls.target).multiplyScalar(t);this.controls.target.add(i),this.camera.position.add(i),this.goalDist!==null&&this.setDistance(gs.lerp(this.distance,this.goalDist,t)),this.tweenT>1.6&&(this.goalTarget=null,this.goalDist=null)}this.controls.update()}}class lv{group=new sn;rig=new sn;constructor(){const e=new en({color:13159634,metalness:.5,roughness:.45,transparent:!0,opacity:.16,depthWrite:!1}),t=new en({color:9083566,metalness:.3,roughness:.6,transparent:!0,opacity:.14,depthWrite:!1}),i=520,s=new dt(new il(i,24,12,64,Math.PI),e);s.rotation.y=Math.PI/2,s.rotation.x=Math.PI/2,this.rig.add(s);const r=new dt(new Ms(300,300,70),t);r.position.z=i-60,this.rig.add(r);const a=new dt(new er(70,90,140,24),t);a.rotation.x=Math.PI/2,a.position.z=-i+60,this.rig.add(a);const o=new dt(new tl(130,2*i-150,4,1,!0),new Qr({color:6728447,transparent:!0,opacity:.035,depthWrite:!1,side:$t}));o.rotation.x=-Math.PI/2,o.rotation.y=Math.PI/4,this.rig.add(o),this.group.add(this.rig)}set(e,t,i,s){this.group.position.copy(e);const r=Wh(t,i),a=new fi().setFromUnitVectors(new U(0,0,1),r);this.rig.quaternion.copy(a);const o=this.rig.children[3];o.material.opacity=s?.09:.02}}class cv{rt;scene=new No;cam=new rl(-1,1,1,-1,0,1);mat;hasImage=!1;lastFrame=-1;constructor(){this.rt=new pi(16,16,{type:vs}),this.mat=new _n({uniforms:{tImage:{value:this.rt.texture},uRes:{value:new Ie(16,16)},uSeed:{value:0},uNoise:{value:Be.noise},uBlur:{value:Be.blur},uColl:{value:Be.collimation},uHas:{value:0},uAspect:{value:1},uShift:{value:Be.imageShift}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
        uniform sampler2D tImage;
        uniform vec2 uRes;
        uniform float uSeed, uNoise, uBlur, uColl, uHas, uAspect, uShift;
        varying vec2 vUv;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uSeed * 0.731) * 43758.5453); }
        void main() {
          vec2 px = uBlur / uRes;
          float I = texture2D(tImage, vUv).r * 0.36
            + (texture2D(tImage, vUv + vec2(px.x, 0.0)).r + texture2D(tImage, vUv - vec2(px.x, 0.0)).r
            +  texture2D(tImage, vUv + vec2(0.0, px.y)).r + texture2D(tImage, vUv - vec2(0.0, px.y)).r) * 0.12
            + (texture2D(tImage, vUv + px).r + texture2D(tImage, vUv - px).r
            +  texture2D(tImage, vUv + vec2(px.x, -px.y)).r + texture2D(tImage, vUv + vec2(-px.x, px.y)).r) * 0.04;
          float g = pow(clamp(I, 0.0, 1.0), 0.75);
          vec2 q = floor(vUv * uRes / 1.6);
          float n = (hash(q) + hash(q + 17.31) + hash(q + 3.17) - 1.5) * 1.15;
          g += n * uNoise * sqrt(max(g, 0.03));
          vec2 p = (vUv - vec2(0.5, 0.5 + uShift)) * vec2(uAspect, 1.0);
          float hw = 0.5 * uColl * min(uAspect, 1.0);
          float inside = step(abs(p.x), hw) * step(abs(p.y), hw);
          float r = length(p) / hw;
          g *= 1.0 - 0.38 * smoothstep(0.55, 1.42, r);
          vec3 col = vec3(g) * vec3(0.97, 1.0, 1.03);
          col = mix(vec3(0.015), col, inside * uHas);
          gl_FragColor = vec4(col, 1.0);
        }`,depthTest:!1,depthWrite:!1});const e=new dt(new tr(2,2),this.mat);e.frustumCulled=!1,this.scene.add(e)}setSize(e,t){this.rt.setSize(e,t),this.mat.uniforms.uRes.value.set(e,t),this.mat.uniforms.uAspect.value=e/t}acquire(e,t,i,s,r,a=!1){if(!a&&s-this.lastFrame<1/Be.frameRate)return!1;this.lastFrame=s;const o=e.getRenderTarget(),l=new Fe;e.getClearColor(l);const c=e.getClearAlpha();return e.setRenderTarget(this.rt),e.setClearColor(new Fe(Be.background,Be.background,Be.background),1),e.clear(!0,!0,!0),e.render(t,i),e.setRenderTarget(o),e.setClearColor(l,c),this.hasImage=!0,this.mat.uniforms.uSeed.value=(this.mat.uniforms.uSeed.value+1.618)%1e3,this.mat.uniforms.uNoise.value=r?Be.cineNoise:Be.noise,!0}composite(e){this.mat.uniforms.uHas.value=this.hasImage?1:0,e.setRenderTarget(null),e.render(this.scene,this.cam)}reset(){this.hasImage=!1,this.lastFrame=-1}}class hv{constructor(e,t){this.anat=t,this.root=document.createElement("div"),this.root.className="labels",e.appendChild(this.root);for(const i of t.labels){const s=document.createElement("div");s.className="label"+(i.id==="lesion"?" lesion":""),s.textContent=i.text,s.dataset.tip=i.description,s.setAttribute("aria-label",`${i.text}: ${i.description}`),this.root.appendChild(s),this.items.push({el:s,vessel:i.vessel,s:i.s,beats:t.vessels[i.vessel].kind==="coronary",behind:!1})}}anat;root;items=[];ray=new Oh;frame=0;visible=!0;update(e,t,i,s,r,a){if(this.root.style.display=a&&this.visible?"":"none",!a||!this.visible)return;this.frame++;const o=new U;for(const l of this.items){const c=ks(this.anat,l.vessel,l.s).p,h=l.beats?Br(t,c):c;o.set(h[0],h[1],h[2]);const d=o.clone();if(o.project(e),o.z>1||o.z<-1||Math.abs(o.x)>1.1||Math.abs(o.y)>1.1){l.el.style.display="none";continue}l.el.style.display="";const f=(o.x*.5+.5)*s,p=(-o.y*.5+.5)*r;if(l.el.style.transform=`translate(${f.toFixed(1)}px, ${p.toFixed(1)}px)`,this.frame%6===0){const g=d.clone().sub(e.position),_=g.length();this.ray.set(e.position,g.normalize()),this.ray.far=_-3,l.behind=this.ray.intersectObjects(i,!1).length>0,l.el.classList.toggle("dim",l.behind)}}}}class uv{renderer;scene3d=new No;sceneX=new No;cam3d;camX=new qt(16,1,100,2e3);rig;beat3d=new sn;beatX=new sn;vessels;heart3d;heartX;devices;carm=new lv;post=new cv;labels;isoX=new U(0,10,0);lumenVersion=-1;contrastActive=new Set;beat=hu();view="3d";follow=!1;showLabels=!0;w=1;h=1;constructor(e,t,i){this.renderer=new O_({canvas:e,antialias:!0,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=tn,this.renderer.toneMapping=no,this.renderer.toneMappingExposure=1.05,this.cam3d=new qt(38,1,2,6e3),this.rig=new ov(this.cam3d,e),this.scene3d.background=new Fe(857632),this.scene3d.fog=new Qo(857632,1600,4200),this.scene3d.add(new jf(14674431,2758672,.85));const s=new hc(16777215,1.6);s.position.set(-300,500,700),this.scene3d.add(s);const r=new hc(8956671,.6);r.position.set(400,-200,-500),this.scene3d.add(r);const a=new Zf(16777215,.6,0,0);this.cam3d.add(a),this.scene3d.add(this.cam3d);const o=i.anat;this.beat3d.matrixAutoUpdate=!1,this.beatX.matrixAutoUpdate=!1,this.scene3d.add(this.beat3d),this.sceneX.add(this.beatX);const l=z_(o);this.heart3d=new dt(l,new en({vertexColors:!0,roughness:.62,metalness:.02})),this.beat3d.add(this.heart3d),this.heartX=new dt(l,ns(Be.muHeart,40,.7)),this.heartX.frustumCulled=!1,this.beatX.add(this.heartX),this.vessels=V_(o);for(const c of this.vessels){const h=o.vessels[c.id].kind==="coronary";(h?this.beat3d:this.scene3d).add(c.mesh3d),(h?this.beatX:this.sceneX).add(c.meshXray)}this.scene3d.add(W_()),this.sceneX.add(G_()),this.scene3d.add(this.carm.group),this.labels=new hv(t,o),this.resetCase(i),this.overview(!0)}resetCase(e){this.devices&&this.devices.dispose(),this.devices=new q_(this.beat3d,this.beatX,this.vessels),this.scene3d.add(this.devices.group3d),this.sceneX.add(this.devices.groupX),this.lumenVersion=-1,this.post.reset(),this.contrastActive.clear();for(const t of this.vessels)t.tube.setContrast(0),t.tube.setColors(()=>[t.baseColor.r,t.baseColor.g,t.baseColor.b])}resize(e,t){this.w=e,this.h=t,this.renderer.setSize(e,t,!1),this.cam3d.aspect=e/t,this.cam3d.updateProjectionMatrix();const i=this.renderer.getPixelRatio();this.post.setSize(Math.round(e*i),Math.round(t*i))}lesionPoint(e){const t=ks(e.anat,"LAD",e.anat.lesion.center).p;return new U(...t)}overview(e=!1){const t=new U(-75,-105,0),i=new U(-.28,.22,.93).normalize();e?(this.rig.controls.target.copy(t),this.cam3d.position.copy(t).addScaledVector(i,980),this.rig.controls.update()):this.rig.focus(t,980)}focusHeart(e,t=150){this.rig.focus(this.lesionPoint(e),t)}focusGuide(){const e=this.devices.tips.guide;e&&this.rig.focus(e.clone(),380)}activeTip(e){const t=this.devices.tips;switch(e.tool){case"guide":return t.guide;case"wire":return t.wire??t.guide;case"balloon":return t.balloon??t.wire;case"stent":return t.stent??t.wire;default:return t.wire??t.guide}}update(e,t){const i=e.phys,s=Math.min(1,Math.max(0,(e.t-i.beatStart)/i.beatRR)),r=_u(s)*(i.beatPVC?.6:1);this.beat=vu(e.anat.frame,r,e.anat.beatPivot);const a=new ft().fromArray(this.beat);if(this.beat3d.matrix.copy(a),this.beatX.matrix.copy(a),this.beat3d.matrixWorldNeedsUpdate=!0,this.beatX.matrixWorldNeedsUpdate=!0,e.lumenVersion!==this.lumenVersion){this.lumenVersion=e.lumenVersion;for(const c of this.vessels){const h=e.anat.vessels[c.id];h.kind==="coronary"&&(c.tube.update(h.pts,e.live[c.id].map(d=>d/2)),c.version=e.lumenVersion)}}this.updateContrast(e),this.devices.update(e,this.beat);let o=new U(0,12,0);const l=this.devices.tips.guide;if(l&&e.tool==="guide"&&!e.snapshot.guideInAorta&&e.guide.s>1&&(o=l.clone()),e.xray.active&&this.isoX.lerp(o,Math.min(1,t*3)),this.carm.set(this.isoX,e.carm.lao,e.carm.cra,e.xray.active),this.follow){const c=this.activeTip(e);c&&this.rig.follow(c,t)}this.rig.update(t)}updateContrast(e){const t=e.contrast.current,i=t?e.t-t.t0:1/0,s=t&&i<t.duration+6,r=new Fe(.2,.18,.55);for(const a of this.vessels){const o=s?t.arrival[a.id]:void 0;if(!o){this.contrastActive.has(a.id)&&(a.tube.setContrast(0),a.tube.setColors(()=>[a.baseColor.r,a.baseColor.g,a.baseColor.b]),this.contrastActive.delete(a.id));continue}this.contrastActive.add(a.id);const l=t.factor[a.id],c=t.intensity[a.id]??1,h=e.anat.vessels[a.id].ds,d=new Float32Array(o.length);for(let p=0;p<o.length;p++)p*h>t.aortaLimit&&a.id==="aorta"||(d[p]=qu(o[p],i,t.bolus,l[p])*c);a.tube.setContrast(d);const f=a.baseColor;a.tube.setColors(p=>{const g=Math.min(1,d[p]*1.2);return[f.r+(r.r-f.r)*g,f.g+(r.g-f.g)*g,f.b+(r.b-f.b)*g]})}}render(e){this.view==="3d"?(this.renderer.setRenderTarget(null),this.renderer.toneMapping=no,this.renderer.render(this.scene3d,this.cam3d),this.labels.update(this.cam3d,this.beat,[this.heart3d],this.w,this.h,this.showLabels)):(this.labels.update(this.cam3d,this.beat,[],this.w,this.h,!1),this.renderer.toneMapping=Dn,Hc(this.camX,this.isoX,e.carm.lao,e.carm.cra,this.w/this.h),e.xray.active&&this.post.acquire(this.renderer,this.sceneX,this.camX,performance.now()/1e3,e.xray.mode==="cine"),this.post.composite(this.renderer))}backgroundAcquire(e){if(this.view==="3d"&&e.xray.active){Hc(this.camX,this.isoX,e.carm.lao,e.carm.cra,this.w/this.h);const t=this.renderer.toneMapping;this.renderer.toneMapping=Dn,this.post.acquire(this.renderer,this.sceneX,this.camX,performance.now()/1e3,e.xray.mode==="cine"),this.renderer.toneMapping=t}}worldOf(e,t){const i=t?Br(this.beat,e):e;return new U(i[0],i[1],i[2])}}class dv{ray=new Oh;ndc=new Ie;pick(e,t,i,s,r,a){this.ndc.set((s-a.left)/a.width*2-1,-((r-a.top)/a.height)*2+1),this.ray.setFromCamera(this.ndc,t);const o=i.filter(g=>e.anat.vessels[g.id].kind==="coronary").map(g=>g.mesh3d),l=this.ray.intersectObjects(o,!1)[0];if(!l||l.faceIndex==null)return null;const c=i.find(g=>g.mesh3d===l.object),h=Math.min(c.tube.rings-1,c.tube.ringOfFace(l.faceIndex)),d=e.anat.vessels[c.id],f=e.live[c.id][h],p=d.refD[h];return{vessel:c.id,name:d.name,s:h*d.ds,diameter:f,reference:p,stenosis:Math.max(0,1-f/p),x:s-a.left,y:r-a.top}}}function D(n,e={},...t){const i=document.createElement(n);for(const[s,r]of Object.entries(e))r===void 0||r===!1||(s.startsWith("on")&&typeof r=="function"?i.addEventListener(s.slice(2).toLowerCase(),r):s==="class"?i.className=String(r):s==="html"?i.innerHTML=String(r):r===!0?i.setAttribute(s,""):i.setAttribute(s,String(r)));for(const s of t)s!=null&&s!==!1&&i.append(s);return i}const na=(n,e=document)=>e.querySelector(n);function ia(n){const e=Math.max(0,Math.floor(n));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function ke(n,e){n.textContent!==e&&(n.textContent=e)}function fv(n,e=12,t=12,i="crosshair"){return`url("data:image/svg+xml;utf8,${encodeURIComponent(n)}") ${e} ${t}, ${i}`}const zn=n=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n}</svg>`,pv={guide:zn('<path d="M3 21 C 9 15, 10 9, 14 6 C 17 4, 20 5, 20 8 C 20 10, 18 11, 16 10"/>'),wire:zn('<path d="M3 21 L 15 9 C 17 7, 19 6, 20 4"/><circle cx="20" cy="4" r="1" fill="currentColor"/>'),balloon:zn('<path d="M2 12 H5"/><rect x="5" y="8" width="13" height="8" rx="4"/><path d="M18 12 H22"/><path d="M7.5 8 V16 M15.5 8 V16"/>'),stent:zn('<path d="M2 12 H4 M20 12 H22"/><path d="M4 8 L7 16 L10 8 L13 16 L16 8 L19 16 M4 16 L7 8 L10 16 L13 8 L16 16 L19 8"/>'),contrast:zn('<path d="M12 3 C 8 9, 6 12, 6 15 a6 6 0 0 0 12 0 c0 -3 -2 -6 -6 -12z"/><path d="M9 15 a3 3 0 0 0 3 3"/>'),fluoro:zn('<path d="M12 2 L12 6 M4.5 6.5 L7 9 M19.5 6.5 L17 9"/><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M9 16 h6"/>'),measure:zn('<path d="M3 17 L17 3 L21 7 L7 21 Z"/><path d="M7 13 l2 2 M10 10 l2 2 M13 7 l2 2"/>'),play:zn('<path d="M7 4 L19 12 L7 20 Z"/>'),pause:zn('<path d="M8 4 V20 M16 4 V20"/>')},Rs=(n,e="#7fe0ff")=>`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="${e}" stroke-width="2" stroke-linecap="round"><g filter="drop-shadow(0 0 1px #000)">${n}</g></svg>`,Vc={guide:Rs('<circle cx="14" cy="14" r="5"/><path d="M14 2 V8 M14 20 V26 M2 14 H8 M20 14 H26"/>'),wire:Rs('<path d="M4 24 L16 12 C 19 9, 22 8, 24 5"/><circle cx="24" cy="5" r="1.5" fill="#ffd36b" stroke="#ffd36b"/>'),balloon:Rs('<rect x="6" y="10" width="16" height="8" rx="4" stroke="#ffd94a"/><path d="M14 4 V24" stroke-dasharray="2 2"/>'),stent:Rs('<path d="M5 10 L8 18 L11 10 L14 18 L17 10 L20 18 L23 10" stroke="#d8e2ea"/><path d="M14 4 V24" stroke-dasharray="2 2"/>'),measure:Rs('<path d="M14 3 V11 M14 17 V25 M3 14 H11 M17 14 H25"/><circle cx="14" cy="14" r="2"/>',"#9dffb0")};function mv(n,e){const t=[["1-7","Select tool: guide, wire, balloon, stent, contrast, fluoro, measure"],["W / S, wheel","Advance / retract the active device (hold Shift = fine)"],["A / D","Rotate the guide or wire tip"],["E (hold) / Q","Inflate / deflate balloon or stent"],["G","Give heparin"],["C or 5","Inject contrast"],["Space or 6 (hold)","Fluoroscopy pedal"],["Tab","Switch 3D view / X-ray"],["V, arrows","C-arm projection presets / fine-tune"],["F, L","Camera follow tip, anatomy labels"],["H, M, N, Esc","Help, mentor, sound, pause"],["Drag, Ctrl+wheel","Orbit / zoom the 3D view"]];return D("div",{class:"start",role:"dialog","aria-modal":"true","aria-labelledby":"start-title"},D("div",{class:"start-card"},D("div",{class:"start-kicker"},"Cath lab simulator · educational"),D("h1",{id:"start-title"},"Stenting a mid-LAD stenosis"),D("p",{class:"start-sub"},"Percutaneous coronary intervention via right radial access"),D("div",{class:"disclaimer",role:"note"},D("strong",{},"For education and demonstration only. "),"This is a simplified teaching model for medical students. It is not clinical training, not a validated simulator and not medical advice. Anatomy, device behaviour and physiology are approximations."),D("div",{class:"start-grid"},D("section",{},D("h2",{},"The case"),D("p",{},"A 68-year-old man (80 kg) has exertional angina despite optimal medical therapy. Stress testing shows anterior ischaemia. Coronary angiography found a ",D("strong",{},"90% stenosis in the mid left anterior descending artery (LAD)"),", between the first and second diagonal branches. The heart team recommends PCI."),D("h2",{},"You will"),D("ol",{class:"you-will"},D("li",{},"Advance a 6F guide catheter from the wrist to the aortic root"),D("li",{},"Engage the left main and take a diagnostic angiogram"),D("li",{},'Give heparin and cross the lesion with a 0.014" wire'),D("li",{},"Pre-dilate with a balloon"),D("li",{},"Size, position and deploy a drug-eluting stent"),D("li",{},"Confirm the result in two projections - then read your debrief"))),D("section",{},D("h2",{},"Controls"),D("dl",{class:"keys"},...t.flatMap(([i,s])=>[D("dt",{},i),D("dd",{},s)])),D("p",{class:"small"},"On touch screens use the toolbar and the on-screen hold buttons in the device panel."))),D("div",{class:"start-actions"},D("button",{class:"btn primary",id:"btn-start",onclick:()=>n()},"Enter the cath lab"),D("button",{class:"btn",id:"btn-demo",onclick:()=>e()},"Watch a demo first"))))}class gv{constructor(e,t){this.store=e,this.viewBtn=D("button",{class:"hud-btn view",title:"Switch 3D / X-ray (Tab)",onclick:()=>t.toggleView()},"3D"),this.xray=D("span",{class:"xray-lamp",title:"X-ray beam"},"X-RAY OFF"),this.fluoro=D("span",{class:"hud-num"},"0:00"),this.contrast=D("span",{class:"hud-num"},"0 ml"),this.demo=D("button",{class:"demo-badge",title:"Demo running - press any key to take control",onclick:()=>t.stopDemo()},"DEMO"),this.el=D("header",{class:"hud"},D("div",{class:"brand"},D("span",{class:"brand-mark"},"♥"),D("span",{class:"brand-text"},"PCI Sim"),D("span",{class:"edu"},"EDU")),this.demo,D("div",{class:"hud-group"},this.viewBtn,this.xray),D("div",{class:"hud-group stats"},D("span",{class:"hud-label"},"Fluoro"),this.fluoro,D("span",{class:"hud-label"},"Contrast"),this.contrast),D("div",{class:"hud-group right"},D("button",{class:"hud-btn",title:"Keys & help (H)",onclick:()=>t.help()},"?"),D("button",{class:"hud-btn",title:"Pause (Esc)",onclick:()=>t.pause()},"II"),D("button",{class:"hud-btn end",title:"End the case and open the debrief",onclick:()=>t.endCase()},"End case")))}store;el;viewBtn;xray;fluoro;contrast;demo;update(){const{sim:e,ui:t}=this.store;ke(this.viewBtn,t.view==="3d"?"3D view":"X-ray"),this.viewBtn.classList.toggle("xr",t.view==="xray");const i=e.xray.mode;ke(this.xray,i==="off"?"X-RAY OFF":i==="cine"?"CINE":"FLUORO"),this.xray.classList.toggle("on",i!=="off"),ke(this.fluoro,ia(e.xray.fluoroTime)),ke(this.contrast,`${e.contrast.totalMl} ml`),this.contrast.classList.toggle("warn",e.contrast.totalMl>120),this.demo.style.display=t.demo&&!t.demo.done?"":"none"}}class _v{constructor(e,t){this.store=e,this.tip=D("div",{class:"tool-tip",role:"tooltip"}),this.el=D("nav",{class:"toolbar","aria-label":"Tools"});for(const i of Vr){const s=D("button",{class:"tool","data-tool":i.id,"aria-label":`${i.label} (${i.key})`},D("span",{class:"tool-key"},i.key),D("span",{class:"tool-icon",html:pv[i.id]}),D("span",{class:"tool-label"},D("span",{class:"long"},i.label),D("span",{class:"short"},i.short)),D("span",{class:"tool-lock","aria-hidden":"true"},"🔒"));if(i.id==="fluoro"){const r=o=>{o.preventDefault(),t.pedal(!0),s.classList.add("held")},a=()=>{t.pedal(!1),s.classList.remove("held")};s.addEventListener("pointerdown",r),s.addEventListener("pointerup",a),s.addEventListener("pointerleave",a),s.addEventListener("pointercancel",a)}else s.addEventListener("click",()=>t.select(i.id));s.addEventListener("pointerenter",()=>this.showTip(i.id,s)),s.addEventListener("pointerleave",()=>this.tip.classList.remove("show")),s.addEventListener("focus",()=>this.showTip(i.id,s)),s.addEventListener("blur",()=>this.tip.classList.remove("show")),this.btns.set(i.id,s),this.el.appendChild(s)}this.el.appendChild(this.tip)}store;el;btns=new Map;tip;showTip(e,t){const i=Vr.find(l=>l.id===e),s=Va(e,this.store.sim.snapshot);this.tip.innerHTML="",this.tip.append(D("strong",{},`${i.key} · ${i.label}`),D("p",{},i.rules)),s&&this.tip.append(D("p",{class:"lock-reason"},"🔒 "+s));const r=t.getBoundingClientRect(),a=this.el.getBoundingClientRect(),o=Math.min(Math.max(8,r.left-a.left+r.width/2-140),a.width-288);this.tip.style.left=`${o}px`,this.tip.classList.add("show")}update(){const{sim:e}=this.store;for(const[t,i]of this.btns){const s=Va(t,e.snapshot);i.classList.toggle("locked",!!s),i.classList.toggle("active",e.tool===t),t==="fluoro"&&i.classList.toggle("beam",e.xray.active),i.setAttribute("aria-disabled",s?"true":"false")}}}class vv{constructor(e){this.store=e;const t=D("ol",{class:"stages"});nn.forEach((i,s)=>{const r=D("span",{class:"stage-time"},""),a=D("span",{class:"stage-bar"}),o=D("li",{class:"stage",title:i.goal},D("span",{class:"stage-num"},String(i.id)),D("span",{class:"stage-title"},i.title),r,D("span",{class:"stage-track"},a));this.rows.push({li:o,time:r,bar:a}),t.appendChild(o)}),this.el=D("aside",{class:"checklist panel","aria-label":"Procedure checklist"},D("h2",{class:"panel-title"},"Procedure"),t)}store;el;rows=[];lastCurrent=0;update(){const e=this.store.sim.stages;if(this.rows.forEach((t,i)=>{const s=e.completedAt[i]!==null;t.li.classList.toggle("done",s),t.li.classList.toggle("current",i===e.current),ke(t.time,s?ia(e.completedAt[i]):i===e.current?`${Wa(e,i)}%`:""),t.bar.style.width=`${s?100:i===e.current?Wa(e,i):0}%`}),e.current>this.lastCurrent){const t=this.rows[e.current-1]?.li;t&&(t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}this.lastCurrent=e.current}reset(){this.lastCurrent=0}}class xv{constructor(e,t){this.store=e,this.title=D("h3",{class:"mentor-title"}),this.goal=D("p",{class:"mentor-goal"}),this.tasks=D("ul",{class:"mentor-tasks"}),this.prog=D("span",{class:"mentor-prog-bar"}),this.progText=D("span",{class:"mentor-prog-text"}),this.hint=D("p",{class:"mentor-hint","aria-live":"polite"}),this.whyText=D("p",{}),this.why=D("details",{class:"mentor-why"},D("summary",{},"Why this step?"),this.whyText),this.badge=D("span",{class:"demo-chip"},"DEMO"),this.el=D("section",{class:"mentor panel","aria-label":"Mentor"},D("button",{class:"panel-title mentor-toggle","aria-expanded":"true",onclick:()=>t()},D("span",{},"Mentor"),this.badge,D("span",{class:"chev"},"▾")),D("div",{class:"mentor-body"},this.title,this.goal,this.tasks,D("div",{class:"mentor-prog"},D("span",{class:"mentor-prog-track"},this.prog),this.progText),this.hint,this.why))}store;el;title;goal;tasks;prog;progText;hint;why;whyText;badge;stageShown=-1;update(){const{sim:e,ui:t}=this.store;this.el.classList.toggle("collapsed",!t.mentorOpen),this.el.querySelector(".mentor-toggle").setAttribute("aria-expanded",String(t.mentorOpen));const i=!!t.demo&&!t.demo.done;this.badge.style.display=t.demo?"":"none";const s=e.stages,r=Math.min(s.current,nn.length-1),a=nn[r],o=s.current>=nn.length;if(this.stageShown!==s.current){this.stageShown=s.current,ke(this.title,o?"Case complete":`Stage ${a.id} of ${nn.length}: ${a.title}`),ke(this.goal,o?"All six stages done. Review the result, then open the debrief (End case).":a.goal),ke(this.whyText,a.why),this.tasks.innerHTML="";for(const h of a.tasks)this.tasks.appendChild(D("li",{"data-task":h.id},D("span",{class:"box","aria-hidden":"true"}),D("span",{},h.label)))}for(const h of[...this.tasks.children])h.classList.toggle("done",!!s.done[Gr(a.id,h.dataset.task)]);const l=o?100:Wa(s,r);this.prog.style.width=`${l}%`,ke(this.progText,`${l}%`);const c=i||t.demo&&t.demo.done?t.demo.narration:nd(e.snapshot);ke(this.hint,c),this.hint.classList.toggle("demo",!!t.demo),this.hint.classList.toggle("alert",e.snapshot.unstable||e.snapshot.dissectionUnsealed)}reset(){this.stageShown=-1}}const ii=(n,e,t,i)=>i*Math.exp(-((n-e)*(n-e))/(2*t*t)),Gc=(n,e,t)=>{const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function Mv(n,e,t,i){if(n<0)return 0;if(i)return ii(n,.08,.035,13)+ii(n,.16,.04,-7)+ii(n,.36,.08,-4.5);const s=Math.min(1,Math.max(.7,e/.9)),r=ii(n,.06,.022,1.2),a=ii(n,.155,.008,-.6),o=ii(n,.172,.011,5.5),l=ii(n,.198,.013,-11),c=t*Gc(.215,.245,n)*(1-Gc(.37*s+.06,.5*s+.08,n)),h=ii(n,.38*s+.05,.055*s,3.6+t*.6);return r+a+o+l+c+h}class yv{constructor(e,t){this.store=e,this.cv=D("canvas",{class:"ecg","aria-label":"ECG lead V2 and arterial pressure"}),this.ctx=this.cv.getContext("2d"),this.hr=D("span",{class:"v-num hr"},"--"),this.bp=D("span",{class:"v-num bp"},"--"),this.spo2=D("span",{class:"v-num spo2"},"--"),this.st=D("span",{class:"v-num st"},"--"),this.act=D("span",{class:"v-num act"},"--"),this.alarm=D("div",{class:"alarm-banner",role:"alert"},""),this.hepBtn=D("button",{class:"v-btn",title:"Give heparin (G)",onclick:()=>t.heparin()},"Heparin (G)"),this.sndBtn=D("button",{class:"v-btn",title:"Monitor sound (N)",onclick:()=>t.sound()},"Sound (N)");const i=(s,r,a,o)=>{const l=D("span",{class:"v-unit"},a);return o==="bp"&&(this.bpUnit=l),D("div",{class:"v-cell "+o},D("span",{class:"v-label"},s),r,l)};this.el=D("section",{class:"vitals panel","aria-label":"Patient monitor"},D("div",{class:"v-trace"},D("span",{class:"v-lead"},"V2"),D("span",{class:"v-lead art"},"ART"),this.cv),D("div",{class:"v-nums"},i("HR",this.hr,"bpm","hr"),i("ART",this.bp,"mmHg","bp"),i("SpO₂",this.spo2,"%","spo2"),i("ST V2",this.st,"mm","st"),i("ACT",this.act,"s","act")),D("div",{class:"v-actions"},this.hepBtn,this.sndBtn),this.alarm)}store;el;cv;ctx;beats=[];lastBeatCount=-1;x=0;lastT=0;prevE=null;prevP=null;hr;bp;bpUnit;spo2;st;act;hepBtn;sndBtn;alarm;w=300;hgt=120;resize(){const e=this.cv.getBoundingClientRect(),t=Math.min(2,window.devicePixelRatio||1),i=Math.max(100,Math.round(e.width*t)),s=Math.max(60,Math.round(e.height*t));(i!==this.cv.width||s!==this.cv.height)&&(this.cv.width=i,this.cv.height=s,this.w=i,this.hgt=s,this.ctx.fillStyle="#020806",this.ctx.fillRect(0,0,i,s),this.x=0,this.prevE=this.prevP=null)}reset(){this.beats=[],this.lastBeatCount=-1,this.lastT=0,this.x=0,this.prevE=this.prevP=null,this.ctx.fillStyle="#020806",this.ctx.fillRect(0,0,this.cv.width,this.cv.height)}valueAt(e){let t;for(let l=this.beats.length-1;l>=0;l--)if(this.beats[l].t<=e){t=this.beats[l];break}if(!t)return{e:0,p:80};const i=e-t.t,s=Mv(i,t.rr,t.st,t.pvc),r=t.pvc?.55:1,a=i-.17;let o;if(a<0)o=t.dia+(t.sys-t.dia)*.08*Math.exp(a*6);else{const l=1-Math.exp(-a/.035),c=Math.exp(-Math.max(0,a-.08)/.32),h=-.1*Math.exp(-Math.pow((a-.3)/.025,2));o=t.dia+(t.sys-t.dia)*r*(l*(.25+.75*c)+h)}return{e:s,p:o}}update(e){const{sim:t}=this.store,i=t.phys;this.resize(),t.beatCount!==this.lastBeatCount&&(this.lastBeatCount=t.beatCount,this.beats.push({t:i.beatStart,rr:i.beatRR,pvc:i.beatPVC,st:i.st,sys:i.sys,dia:i.dia}),this.beats.length>12&&this.beats.shift());const s=this.w/4,r=t.t,a=Math.min(this.lastT,r),o=r-a,l=Math.min(this.w,Math.round(o*s)),c=this.ctx,h=this.hgt,d=_=>h*.36-_*(h*.022),f=_=>h*.97-(_-40)/120*h*.34;for(let _=1;_<=l;_++){const m=a+o*_/l,u=(this.x+1)%this.w;u<this.x&&(this.prevE=this.prevP=null),c.fillStyle="#020806",c.fillRect(u,0,Math.max(6,Math.round(this.w*.025)),h);const E=this.valueAt(m),S=d(E.e),x=f(E.p);c.lineWidth=Math.max(1.5,h/70),c.strokeStyle="#43f08a",c.beginPath(),c.moveTo(u-1,this.prevE??S),c.lineTo(u,S),c.stroke(),c.strokeStyle="#ff5a5a",c.beginPath(),c.moveTo(u-1,this.prevP??x),c.lineTo(u,x),c.stroke(),this.prevE=S,this.prevP=x,this.x=u}this.lastT=r,ke(this.hr,String(Math.round(i.hr)));const p=Math.round(i.dia+(i.sys-i.dia)/3);ke(this.bp,`${Math.round(i.sys)}/${Math.round(i.dia)}`),ke(this.bpUnit,`(${p}) mmHg`),ke(this.spo2,String(Math.round(i.spo2))),ke(this.st,`${i.st>=.05?"+":""}${i.st.toFixed(1)}`),ke(this.act,String(Math.round(i.act))),this.st.parentElement.classList.toggle("alarm",i.st>1),this.bp.parentElement.classList.toggle("alarm",i.hypotension),this.act.parentElement.classList.toggle("ok",i.act>=250),this.hepBtn.classList.toggle("given",t.heparinGiven),ke(this.hepBtn,t.heparinGiven?"Heparin given":"Heparin (G)"),ke(this.sndBtn,this.store.ui.sound?"Sound on (N)":"Sound off (N)"),this.sndBtn.classList.toggle("off",!this.store.ui.sound);const g=i.unstable?"UNSTABLE - DEFLATE NOW":i.hypotension?"HYPOTENSION · PVCs":i.pain?"Chest pain · ST elevation":"";ke(this.alarm,g),this.alarm.className="alarm-banner"+(i.unstable?" danger":g?" warn":""),this.el.classList.toggle("unstable",i.unstable)}}const Sv="http://www.w3.org/2000/svg",Tt=(n,e)=>{const t=document.createElementNS(Sv,n);for(const[i,s]of Object.entries(e))t.setAttribute(i,String(s));return t},fn=(n,e,t,i)=>[n+t*Math.sin(i*Math.PI/180),e-t*Math.cos(i*Math.PI/180)];function bv(n,e,t,i,s){const[r,a]=fn(n,e,t,i),[o,l]=fn(n,e,t,s),c=Math.abs(s-i)>180?1:0;return`M${n},${e} L${r},${a} A${t},${t} 0 ${c} 1 ${o},${l} Z`}function Ev(n){const e=n.guide;if(e.s<=0)return"Not inserted (at the wrist sheath)";if(e.engaged)return"Seated in the left main ostium";if(n.snapshot.guideAtRoot)return"Aortic root";const t=Ii(n.access,e.s);return`${n.anat.vessels[t.vessel].name}`}class wv{constructor(e,t,i){this.store=e,this.hold=t,this.actions=i,this.title=D("span",{},"Device"),this.body=D("div",{class:"dp-body"}),this.controls=this.buildControls(),this.el=D("section",{class:"device-panel panel","aria-label":"Device panel"},D("button",{class:"panel-title dp-toggle",onclick:()=>{this.collapsed=!this.collapsed,this.el.classList.toggle("collapsed",this.collapsed)}},this.title,D("span",{class:"chev"},"▾")),D("div",{class:"dp-content"},this.body,this.controls))}store;hold;actions;el;body;title;shownTool=null;refs={};controls;collapsed=!1;holdBtn(e,t,i,s,r=""){const a=D("button",{class:"hold "+r,"aria-label":t,title:t},e),o=c=>{c.preventDefault(),a.classList.add("held"),i()},l=()=>{a.classList.remove("held"),s()};return a.addEventListener("pointerdown",o),a.addEventListener("pointerup",l),a.addEventListener("pointerleave",l),a.addEventListener("pointercancel",l),a.addEventListener("contextmenu",c=>c.preventDefault()),a}buildControls(){const e=this.hold,t=D("button",{class:"hold fine",title:"Fine control (Shift)","aria-pressed":"false",onclick:()=>this.actions.fineToggle()},"Fine");this.refs.fine=t;const i=D("div",{class:"ctl-group rot"},this.holdBtn("⟲","Rotate counter-clockwise (A)",()=>e.rotate=-1,()=>e.rotate=0),this.holdBtn("⟳","Rotate clockwise (D)",()=>e.rotate=1,()=>e.rotate=0)),s=D("div",{class:"ctl-group infl"},this.holdBtn("Inflate","Hold to inflate (E)",()=>e.inflate=!0,()=>e.inflate=!1,"inflate"),D("button",{class:"hold deflate",title:"Deflate (Q)",onclick:()=>this.actions.deflate()},"Deflate"));return this.refs.rotGroup=i,this.refs.inflGroup=s,D("div",{class:"dp-controls"},D("div",{class:"ctl-group move"},this.holdBtn("▲","Advance (W)",()=>e.advance=1,()=>e.advance=0),this.holdBtn("▼","Retract (S)",()=>e.advance=-1,()=>e.advance=0)),i,s,t)}build(e){this.refs={fine:this.refs.fine,rotGroup:this.refs.rotGroup,inflGroup:this.refs.inflGroup},this.body.innerHTML="",ke(this.title,Zu(e).label);const t=e==="guide"||e==="wire",i=e==="balloon"||e==="stent";this.refs.rotGroup.style.display=t?"":"none",this.refs.inflGroup.style.display=i?"":"none",this.controls.style.display=e==="measure"?"none":"",e==="guide"||e==="wire"?this.buildDial(e):e==="balloon"||e==="stent"?this.buildCath(e):e==="measure"&&this.buildQCA()}buildDial(e){const t=Tt("svg",{viewBox:"0 0 120 120",class:"dial",role:"img","aria-label":"Tip rotation dial"});t.appendChild(Tt("circle",{cx:60,cy:60,r:52,class:"dial-face"}));for(let c=0;c<360;c+=30){const[h,d]=fn(60,60,48,c),[f,p]=fn(60,60,52,c);t.appendChild(Tt("line",{x1:h,y1:d,x2:f,y2:p,class:"dial-tick"}))}const i=Tt("g",{});t.appendChild(i);const s=Tt("g",{class:"dial-arrow"});s.appendChild(Tt("line",{x1:60,y1:60,x2:60,y2:16,"stroke-width":3.5})),s.appendChild(Tt("path",{d:"M60 9 L66 20 L54 20 Z"})),t.appendChild(s),t.appendChild(Tt("circle",{cx:60,cy:60,r:4,class:"dial-hub"})),this.refs.dialG=i,this.refs.arrow=s;const r=D("div",{class:"dp-loc"}),a=D("div",{class:"dp-status"}),o=D("div",{class:"dp-hint"});this.refs.loc=r,this.refs.status=a,this.refs.hint=o;const l=D("div",{class:"dp-side"},r,a,o);if(e==="wire"){const c=D("span",{class:"meter-bar"});this.refs.meter=c,l.appendChild(D("div",{class:"meter",title:"Lesion resistance"},D("span",{class:"meter-label"},"Resistance"),D("span",{class:"meter-track"},c)))}this.body.append(D("div",{class:"dp-dialrow"},t,l))}buildCath(e){const t=di(e),i=(g,_)=>D("div",{class:"chips",role:"group","aria-label":_==="d"?"Diameter":"Length"},D("span",{class:"chips-label"},_==="d"?"Ø":"L"),...g.map(m=>D("button",{class:"chip","data-v":m,"data-k":_,onclick:()=>{const u=this.store.sim,E=e==="balloon"?u.balloon:u.stent;qr(u,e,_==="d"?m:E.d,_==="l"?m:E.l)}},_==="d"?m.toFixed(m%1&&m*100%10?2:1):`${m}`)),D("span",{class:"chips-unit"},"mm")),s=i(t.diameters,"d"),r=i(t.lengths,"l");this.refs.dChips=s,this.refs.lChips=r;const a=t.rbp+t.ruptureMargin,o=Tt("svg",{viewBox:"0 0 140 84",class:"gauge",role:"img","aria-label":"Pressure gauge"}),l=(g,_,m)=>{const u=fn(70,74,m,-90+g/a*180),E=fn(70,74,m,-90+_/a*180);return`M${u[0]},${u[1]} A${m},${m} 0 0 1 ${E[0]},${E[1]}`};o.appendChild(Tt("path",{d:l(0,a,60),class:"g-track"})),o.appendChild(Tt("path",{d:l(t.rbp,a,60),class:"g-danger"}));for(let g=0;g<=a;g+=2){const[_,m]=fn(70,74,54,-90+g/a*180),[u,E]=fn(70,74,60,-90+g/a*180);o.appendChild(Tt("line",{x1:_,y1:m,x2:u,y2:E,class:"g-tick"}))}const c=(g,_,m)=>{const[u,E]=fn(70,74,46,-90+g/a*180),[S,x]=fn(70,74,66,-90+g/a*180);o.appendChild(Tt("line",{x1:u,y1:E,x2:S,y2:x,class:_}));const[R,T]=fn(70,74,38,-90+g/a*180),A=Tt("text",{x:R,y:T+3,class:_+"-t","text-anchor":"middle"});A.textContent=m,o.appendChild(A)};c(t.nominal,"g-nom","NOM"),c(t.rbp,"g-rbp","RBP");const h=Tt("line",{x1:70,y1:74,x2:70,y2:20,class:"g-needle"});o.appendChild(h),o.appendChild(Tt("circle",{cx:70,cy:74,r:4,class:"dial-hub"})),this.refs.needle=h;const d=(g,_,m)=>{const u=D("span",{class:"dp-val"},"--");return this.refs[g]=u,D("div",{class:"dp-kv"},D("span",{class:"dp-k"},_),u,D("span",{class:"dp-u"},m))},f=D("div",{class:"dp-status"}),p=D("div",{class:"dp-margins"});this.refs.status=f,this.refs.margins=p,this.body.append(s,r,D("div",{class:"dp-gaugerow"},o,D("div",{class:"dp-kvs"},d("press","Pressure","atm"),d("diam","Achieved Ø","mm"),d("timer","Inflation","s"))),p,f)}buildQCA(){const e=(i,s,r)=>{const a=D("span",{class:"dp-val"},"--");return this.refs[i]=a,D("div",{class:"dp-kv"},D("span",{class:"dp-k"},s),a,D("span",{class:"dp-u"},r))},t=D("div",{class:"dp-hint"});this.refs.hint=t,this.body.append(D("div",{class:"qca-title"},"QCA · mid LAD"),D("div",{class:"qca-grid"},e("ref","Reference Ø","mm"),e("mld","MLD","mm"),e("ds","Diameter stenosis","%"),e("len","Lesion length","mm")),t)}update(){const{sim:e,ui:t}=this.store;switch(this.shownTool!==e.tool&&(this.shownTool=e.tool,this.build(e.tool)),this.refs.fine.classList.toggle("on",t.fineLatch),this.refs.fine.setAttribute("aria-pressed",String(t.fineLatch)),e.tool){case"guide":return this.updateGuide(e);case"wire":return this.updateWire(e);case"balloon":case"stent":return this.updateCath(e,e.tool);case"measure":return this.updateQCA(e)}}setMarkers(e){const t=this.refs.dialG,i=e.map(s=>`${s.label}${Math.round(s.deg)}${s.cls}`).join("|");if(t.dataset.key!==i){t.dataset.key=i,t.innerHTML="";for(const s of e){s.wedge&&t.appendChild(Tt("path",{d:bv(60,60,50,s.deg-s.wedge,s.deg+s.wedge),class:"dial-wedge "+s.cls}));const[r,a]=fn(60,60,40,s.deg);t.appendChild(Tt("circle",{cx:r,cy:a,r:7.5,class:"dial-mark "+s.cls}));const o=Tt("text",{x:r,y:a+3.2,"text-anchor":"middle",class:"dial-mark-t"});o.textContent=s.label,t.appendChild(o)}}}updateGuide(e){const t=e.guide,i=e.anat.root,s=o=>Rt(o-i.leftCusp);this.setMarkers([{deg:0,label:"L",cls:"left",wedge:25},{deg:s(i.rightCusp),label:"R",cls:"right"},{deg:s(i.nonCusp),label:"N",cls:"non"}]),this.refs.arrow.setAttribute("transform",`rotate(${s(t.rot).toFixed(1)} 60 60)`);const r=e.snapshot;ke(this.refs.loc,`${Ev(e)}${t.s>0&&!r.guideAtRoot?` · ${Math.round(t.s)} mm`:""}`);const a=t.engaged?"Engaged in the LM ✓":r.guideAtRoot?r.guideFacingLeft?"Facing the LEFT cusp - advance gently":r.guideFacingRight?"Facing the RIGHT cusp (RCA)":`Tip ${Math.round(Math.abs(r.guideCuspOffset))}° from the left cusp`:t.s>0?"Advancing":"Ready";ke(this.refs.status,a),this.refs.status.className="dp-status"+(t.engaged||r.guideAtRoot&&r.guideFacingLeft?" ok":""),ke(this.refs.hint,r.guideAtRoot||t.engaged?"Dial: L/R/N = left, right, non-coronary cusps. The arrow is the tip direction.":"Rotation matters only at the aortic root.")}updateWire(e){const t=e.wire,i=Hu(e.anat,t),s=[],r=t.chain[t.chain.length-1],a=e.anat.branches.filter(d=>d.parent===r);if(i.next)if(i.next.side){const d=a.find(f=>f.side&&e.anat.vessels[f.child].name===i.next.name);d&&s.push({deg:Rt(d.angle),label:d.child,cls:"right",wedge:vt.branchCapture})}else for(const d of a.filter(f=>!f.side))s.push({deg:Rt(d.angle),label:d.child==="LAD"?"LAD":"Cx",cls:d.child==="LAD"?"left":"right"});this.setMarkers(s),this.refs.arrow.setAttribute("transform",`rotate(${Rt(t.rot).toFixed(1)} 60 60)`);const o=t.pos>0?` · ${t.pos.toFixed(0)} mm`:"";ke(this.refs.loc,i.location+o);let l="",c="dp-status";if(i.next){const d=i.next;d.side?(l=`${d.name.replace(/ \(.*\)/,"")} in ${d.dist.toFixed(0)} mm → ${d.enter?"tip will ENTER it ✗":"stays in the LAD ✓"}`,c+=d.enter?" warn":" ok"):(l=`LM bifurcation in ${d.dist.toFixed(0)} mm → tip will go to the ${d.enter?"LAD ✓":"circumflex ✗"}`,c+=d.enter?" ok":" warn")}else e.snapshot.wireDistal?(l="Parked in the distal LAD ✓",c+=" ok"):t.buckle>.2&&(l="Buckling! Slow down",c+=" warn");ke(this.refs.status,l),this.refs.status.className=c,ke(this.refs.hint,i.next&&!i.next.side&&!i.next.enter?`Rotate ${Math.round(Math.abs(i.next.angleOff))}° ${i.next.angleOff>0?"clockwise (D)":"counter-clockwise (A)"}`:"");const h=this.refs.meter;h&&(h.style.width=`${Math.round(Math.max(t.resistance*70,t.buckle*100))}%`,h.classList.toggle("high",t.buckle>.2))}updateCath(e,t){const i=t==="balloon"?e.balloon:e.stent,s=di(t),r=i.pos>0;for(const[f,p]of[["d",this.refs.dChips],["l",this.refs.lChips]])for(const g of[...p.querySelectorAll(".chip")]){const _=Number(g.dataset.v);g.classList.toggle("sel",(f==="d"?i.d:i.l)===_),g.disabled=r||i.pressure>0}const a=s.rbp+s.ruptureMargin,o=-90+Math.min(a,i.pressure)/a*180;this.refs.needle.setAttribute("transform",`rotate(${(o+90-90).toFixed(1)} 70 74)`),this.refs.needle.classList.toggle("over",i.pressure>s.rbp),ke(this.refs.press,i.pressure.toFixed(1)),ke(this.refs.diam,i.pressure>0?Zs(i).toFixed(2):"-");const l=i.inflStart!==null?e.t-i.inflStart:0;ke(this.refs.timer,i.inflStart!==null?l.toFixed(0):"-"),this.refs.timer.classList.toggle("warn",l>30);const c=t==="balloon"?e.snapshot.balloonMargins:e.snapshot.stentMargins,h=this.refs.margins;if(!r)ke(h,`In the guide · ${i.d.toFixed(2)} × ${i.l} mm${t==="stent"?" DES":""} - choose the size now`);else if(!c)ke(h,"Not over the lesion yet");else{const f=g=>`${g>=0?"+":""}${g.toFixed(1)} mm`;h.innerHTML="";const p=g=>g>=1.5?"good":g>=0?"thin":"miss";h.append(D("span",{class:"m-label"},"Margins"),D("span",{class:"m "+p(c.prox)},`prox ${f(c.prox)}`),D("span",{class:"m "+p(c.dist)},`dist ${f(c.dist)}`))}let d="";i.ruptured?d="RUPTURED - withdraw to replace":t==="stent"&&i.deployed?d=i.pressure>0?"Stent deployed - deflate (Q)":"Stent deployed · withdraw the delivery balloon":i.pressure>s.rbp?d=`Above RBP (${s.rbp} atm)!`:i.pressure>0?d=i.deflating?"Deflating…":"Inflated - flow stopped beyond the balloon":r?d=`Over the wire · tip at ${i.pos.toFixed(0)} mm`:d=`Nominal ${s.nominal} atm · RBP ${s.rbp} atm`,ke(this.refs.status,d),this.refs.status.className="dp-status"+(i.ruptured||i.pressure>s.rbp?" danger":i.pressure>0?" warn":"")}updateQCA(e){const t=ud(e);ke(this.refs.ref,t.referenceD.toFixed(2)),ke(this.refs.mld,t.mld.toFixed(2)),ke(this.refs.ds,String(Math.round(t.ds*100))),ke(this.refs.len,t.lesionLength>0?t.lesionLength.toFixed(1):"-");const i=this.store.ui.hover;ke(this.refs.hint,i?`${i.name}: Ø ${i.diameter.toFixed(2)} mm (ref ${i.reference.toFixed(2)}, ${Math.round(i.stenosis*100)}% DS)`:this.store.ui.view==="3d"?"Hover a coronary in the 3D view for its local diameter.":"Switch to the 3D view (Tab) to hover vessels.")}reset(){this.shownTool=null}}class Tv{el=D("div",{class:"messages","aria-live":"polite",role:"status"});last=new Map;push(e,t=performance.now()){const i=e.key??e.text,s=this.last.get(i),r=e.level==="danger"?3e3:6e3;if(s!==void 0&&t-s<r){this.last.set(i,t);const o=[...this.el.children].find(l=>l.dataset.key===i);o&&(o.dataset.until=String(t+4e3));return}this.last.set(i,t);const a=D("div",{class:`msg ${e.level}`,"data-key":i,"data-until":String(t+(e.level==="danger"?6e3:4200))},e.text);for(this.el.appendChild(a);this.el.children.length>3;)this.el.firstElementChild.remove()}tick(e=performance.now()){for(const t of[...this.el.children]){const i=Number(t.dataset.until);e>i&&!t.classList.contains("out")&&(t.classList.add("out"),setTimeout(()=>t.remove(),400))}}clear(){this.el.innerHTML="",this.last.clear()}}function Av(n,e,t,i){const s=n.grade.toLowerCase().replace(/\s+/g,"-"),r=46,a=2*Math.PI*r,o=`<svg viewBox="0 0 120 120" class="score-ring" aria-hidden="true"><circle cx="60" cy="60" r="${r}" class="sr-track"/><circle cx="60" cy="60" r="${r}" class="sr-val" stroke-dasharray="${(a*n.score/100).toFixed(1)} ${a.toFixed(1)}" transform="rotate(-90 60 60)"/></svg>`,l={ok:"✓",warn:"!",bad:"✗"},c=D("ul",{class:"db-items"},...n.items.map(d=>D("li",{class:"db-item "+d.status},D("span",{class:"db-icon","aria-label":d.status},l[d.status]),D("div",{class:"db-main"},D("div",{class:"db-row"},D("span",{class:"db-label"},d.label),D("span",{class:"db-value"},d.value)),D("p",{class:"db-teach"},d.teaching))))),h=D("details",{class:"db-log"},D("summary",{},`Case log (${e.length} events)`),D("ol",{},...e.slice(-80).map(d=>D("li",{class:d.level},D("span",{class:"t"},ia(d.t))," ",d.text))));return D("div",{class:"modal-backdrop",role:"dialog","aria-modal":"true","aria-labelledby":"db-title"},D("div",{class:"modal debrief "+s},D("div",{class:"db-head"},D("div",{class:"db-score",html:o+`<span class="sr-num">${n.score}</span>`}),D("div",{},D("div",{class:"db-kicker"},"Debrief"),D("h2",{id:"db-title",class:"db-grade"},n.grade),D("p",{class:"db-headline"},n.headline))),c,h,D("p",{class:"small disclaimer-inline"},"Scores reflect this teaching model only - not clinical competence."),D("div",{class:"modal-actions"},D("button",{class:"btn",onclick:()=>t()},"Keep exploring"),D("button",{class:"btn primary",onclick:()=>i()},"New case"))))}function Rv(n,e,t){return D("div",{class:"modal-backdrop pause",role:"dialog","aria-modal":"true","aria-label":"Paused"},D("div",{class:"modal small-modal"},D("h2",{},"Paused"),D("p",{},"The simulation is frozen. Take your time."),D("div",{class:"modal-actions"},D("button",{class:"btn primary",onclick:()=>n()},"Resume (Esc)"),D("button",{class:"btn",onclick:()=>e()},"Keys & help"),D("button",{class:"btn",onclick:()=>t()},"End case"))))}function Cv(n){const e=[["1 - 7","Tools: guide, wire, balloon, stent, contrast, fluoro, measure"],["W / S · mouse wheel","Advance / retract the active device"],["Shift (hold)","Fine control: slower movement, rotation and inflation"],["A / D","Rotate guide or wire tip (counter-clockwise / clockwise)"],["E (hold) · Q","Inflate · deflate the balloon or stent"],["G","Heparin bolus"],["C or 5","Inject contrast (cine run)"],["Space or 6 (hold)","Fluoroscopy pedal"],["Tab","Toggle 3D view / X-ray monitor"],["V · arrow keys","Cycle C-arm presets · fine-tune LAO/RAO and CRA/CAU"],["F","Camera follows the device tip"],["L","Anatomy labels"],["M","Mentor panel"],["N","Monitor sound"],["H","This help"],["Esc","Pause"],["Drag · right-drag · Ctrl+wheel","Orbit · pan · zoom the 3D view"]];return D("div",{class:"modal-backdrop",role:"dialog","aria-modal":"true","aria-label":"Help",onclick:t=>t.target===t.currentTarget&&n()},D("div",{class:"modal"},D("h2",{},"Controls"),D("dl",{class:"keys"},...e.flatMap(([t,i])=>[D("dt",{},t),D("dd",{},i)])),D("p",{class:"small"},"Workflow: guide to the aortic root → face the left cusp and engage → angiogram → heparin → wire into the distal LAD → pre-dilate → QCA → stent → final shots in two projections. ",D("strong",{},"Educational model only - not medical advice.")),D("div",{class:"modal-actions"},D("button",{class:"btn primary",onclick:()=>n()},"Close (H)"))))}class Dv{constructor(e){this.store=e,this.proj=D("div",{class:"fo-proj"}),this.mode=D("div",{class:"fo-mode"}),this.fps=D("div",{class:"fo-fps"},`${Be.frameRate} fps`),this.time=D("div",{class:"fo-time"}),this.dose=D("div",{class:"fo-dose"}),this.empty=D("div",{class:"fo-empty"},"No image yet - hold Space (fluoro) or inject contrast (C)"),this.el=D("div",{class:"fluoro-overlay","aria-hidden":"true"},D("div",{class:"fo-tl"},D("div",{class:"fo-name"},"PCI SIM · EDU · LAD"),this.proj,this.time,this.dose),D("div",{class:"fo-tr"},this.mode,this.fps),D("div",{class:"fo-br"},"R"),this.empty)}store;el;proj;mode;fps;time;empty;dose;update(e){const{sim:t,ui:i}=this.store;if(this.el.style.display=i.view==="xray"?"":"none",i.view!=="xray")return;ke(this.proj,lh(t.carm.lao,t.carm.cra)+(t.carm.preset>=0?"":" (custom)"));const s=t.xray.mode==="cine"?"CINE":t.xray.mode==="fluoro"?"FLUORO":e?"LIH":"STANDBY";ke(this.mode,s),this.mode.className="fo-mode "+s.toLowerCase(),ke(this.time,`Fluoro ${ia(t.xray.fluoroTime)}`),ke(this.dose,`Contrast ${t.contrast.totalMl} ml`),this.empty.style.display=e?"none":""}}class Pv{constructor(e){this.store=e}store;el=D("div",{class:"hover-readout",role:"status"});update(){const e=this.store.ui.hover,t=!!e&&this.store.sim.tool==="measure"&&this.store.ui.view==="3d";this.el.style.display=t?"":"none",!(!t||!e)&&(ke(this.el,`${e.name.replace(/ \(.*\)/,"")} · ${e.s.toFixed(0)} mm · Ø ${e.diameter.toFixed(2)} mm · ref ${e.reference.toFixed(2)} · ${Math.round(e.stenosis*100)}% DS`),this.el.style.transform=`translate(${e.x+16}px, ${e.y+12}px)`)}}class Lv{ctx=null;master=null;enabled=!0;alarmOn=!1;nextAlarm=0;unlock(){if(this.ctx){this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.18,this.master.connect(this.ctx.destination))}tone(e,t,i,s=1,r="sine"){if(!this.ctx||!this.master)return;const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=r,a.frequency.value=e,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(s,t+.005),o.gain.setValueAtTime(s,t+i-.02),o.gain.linearRampToValueAtTime(0,t+i),a.connect(o).connect(this.master),a.start(t),a.stop(t+i+.02)}beep(e){if(!this.enabled||!this.ctx)return;const t=880-(100-e)*22;this.tone(t,this.ctx.currentTime+.01,.07,.6)}setAlarm(e){this.alarmOn=e}tick(){if(!this.ctx||!this.enabled||!this.alarmOn)return;const e=this.ctx.currentTime;if(e>=this.nextAlarm){for(let t=0;t<2;t++)this.tone(988,e+t*.5,.22,.55,"square"),this.tone(784,e+t*.5+.25,.22,.55,"square");this.nextAlarm=e+2.2}}}const $=new dd,mi=na("#app"),gi=na("#view"),Xh=na("#overlay");let It;try{It=new uv(gi,Xh,$.sim)}catch(n){throw mi.innerHTML="",mi.append(D("div",{class:"fatal"},D("h1",{},"WebGL is not available"),D("p",{},"This simulator needs a browser with WebGL enabled."),D("pre",{},String(n)))),n}const Iv=new dv,Pi=new Lv,kr={advance:0,rotate:0,inflate:!1},Vt=new Set;function cl(n){const e=$.sim;if(n==="fluoro")return;const t=e.tool,i=es(e,n);i&&n==="contrast"&&hl(),i&&e.tool!==t&&nr()}function nr(){const n=$.sim.tool;gi.style.cursor=Vc[n]?fv(Vc[n],14,14,"crosshair"):"",$.ui.follow||(n==="wire"||n==="balloon"||n==="stent"||n==="measure"?It.focusHeart($.sim,n==="measure"?120:150):n==="guide"&&It.overview()),$.emit("tool")}function hl(){$.ui.view==="3d"&&$.sim.contrast.current&&$.sim.t-$.sim.contrast.current.t0<.1&&(ir("xray"),gn.push({level:"info",text:"Switched to the X-ray monitor to watch the angiogram (Tab for 3D).",key:"auto-xray"}))}function ul(){const n=$.sim.contrast.injections.length;Ls($.sim),$.sim.contrast.injections.length>n&&hl()}function ir(n){$.ui.view=n,It.view=n,mi.classList.toggle("xray-view",n==="xray"),$.emit("view")}function qh(){ir($.ui.view==="3d"?"xray":"3d")}function Kr(n){!$.ui.started||$.ui.debrief||($.ui.paused=n??!$.ui.paused,vl.style.display=$.ui.paused?"":"none",$.ui.paused&&(Vt.clear(),At($.sim,!1)))}function js(n){$.ui.help=n??!$.ui.help,xl.style.display=$.ui.help?"":"none"}function dl(n=!1){if(!$.ui.demo)return;const e=!$.ui.demo.done;$.ui.demo=null,At($.sim,!1),e&&!n&&gn.push({level:"info",text:"Demo stopped - you have control. Carry on from here.",key:"demo-stop"}),$.emit("demo")}let oi=null;function fl(){if(oi)return;dl(!0);const n=md(gd($.sim));At($.sim,!1),$.ui.debrief=!0,oi=Av(n,$.sim.log,()=>{ko()},()=>{ko(),Yh(!1)}),mi.appendChild(oi),oi.querySelector(".btn.primary")?.focus({preventScroll:!0});const e=oi.querySelector(".modal");e&&(e.scrollTop=0)}function ko(){oi?.remove(),oi=null,$.ui.debrief=!1}function Yh(n){$.newCase(),It.resetCase($.sim),gn.clear(),pl.reset(),ml.reset(),gl.reset(),_l.reset(),ir("3d"),It.follow=$.ui.follow=!1,It.overview(),nr(),n&&($.ui.demo=fd(),$.emit("demo"))}const gn=new Tv,$h=new gv($,{toggleView:qh,help:()=>js(),pause:()=>Kr(),endCase:()=>fl(),stopDemo:()=>dl()}),jh=new _v($,{select:n=>cl(n),pedal:n=>At($.sim,n)}),pl=new vv($),ml=new xv($,()=>{$.ui.mentorOpen=!$.ui.mentorOpen}),gl=new yv($,{heparin:()=>zo($.sim),sound:()=>Jh()}),_l=new wv($,kr,{deflate:()=>Hs($.sim),fineToggle:()=>$.ui.fineLatch=!$.ui.fineLatch,inject:()=>ul()}),Kh=new Dv($),Zh=new Pv($),vl=Rv(()=>Kr(!1),()=>js(!0),()=>{Kr(!1),fl()});vl.style.display="none";const xl=Cv(()=>js(!1));xl.style.display="none";function Jh(){$.ui.sound=!$.ui.sound,Pi.enabled=$.ui.sound}Xh.append(Kh.el,Zh.el);mi.append($h.el,pl.el,D("div",{class:"right-col"},gl.el,ml.el),D("div",{class:"bottom"},gn.el,D("div",{class:"bottom-row"},_l.el,jh.el)),vl,xl);const Qh=mv(()=>Wc(!1),()=>Wc(!0));mi.appendChild(Qh);na("#btn-start").focus();function Wc(n){Pi.unlock(),Pi.enabled=$.ui.sound,Qh.remove(),$.ui.started=!0,Yh(n),gn.push(n?{level:"info",text:"Demo running - press any key, click or scroll to take over at any time.",key:"demo-start"}:{level:"info",text:"Select the guide catheter (1) and advance it with W or the mouse wheel.",key:"welcome"})}function Uv(){const n=zs();return n.advance=(Vt.has("KeyW")?1:0)-(Vt.has("KeyS")?1:0)+kr.advance,n.rotate=(Vt.has("KeyD")?1:0)-(Vt.has("KeyA")?1:0)+kr.rotate,n.fine=Vt.has("ShiftLeft")||Vt.has("ShiftRight")||$.ui.fineLatch,n.inflate=Vt.has("KeyE")||kr.inflate,n}function Ml(){return $.ui.demo&&!$.ui.demo.done?(dl(),!0):!1}window.addEventListener("keydown",n=>{if(!$.ui.started)return;const e=n.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))return;if(oi){n.code==="Escape"&&ko();return}if(Ml()){n.preventDefault();return}if(n.code==="Escape"){$.ui.help?js(!1):Kr(),n.preventDefault();return}if($.ui.paused)return;if(n.code==="Tab"){n.preventDefault(),qh();return}if(n.code==="Space"||n.code==="Digit6"||n.code==="Numpad6"){n.preventDefault(),At($.sim,!0),Vt.add(n.code);return}if(n.repeat&&!["KeyW","KeyS","KeyA","KeyD","KeyE","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.code))return;Vt.add(n.code);const t={Digit1:"guide",Digit2:"wire",Digit3:"balloon",Digit4:"stent",Digit5:"contrast",Digit7:"measure"},i={Numpad1:"guide",Numpad2:"wire",Numpad3:"balloon",Numpad4:"stent",Numpad5:"contrast",Numpad7:"measure"},s=t[n.code]??i[n.code];if(s){cl(s);return}const r=n.shiftKey?.5:1;switch(n.code){case"KeyC":ul();break;case"KeyG":zo($.sim);break;case"KeyQ":Hs($.sim);break;case"KeyV":oh($.sim),gn.push({level:"info",text:`C-arm: ${Be.presets[$.sim.carm.preset].name}`,key:"carm"});break;case"ArrowLeft":or($.sim,-2*r,0),n.preventDefault();break;case"ArrowRight":or($.sim,Be.fineStepDeg*r,0),n.preventDefault();break;case"ArrowUp":or($.sim,0,Be.fineStepDeg*r),n.preventDefault();break;case"ArrowDown":or($.sim,0,-2*r),n.preventDefault();break;case"KeyF":It.follow=$.ui.follow=!$.ui.follow,gn.push({level:"info",text:`Camera follow ${$.ui.follow?"on":"off"}.`,key:"follow"});break;case"KeyL":$.ui.labels=!$.ui.labels,It.showLabels=$.ui.labels;break;case"KeyH":js();break;case"KeyM":$.ui.mentorOpen=!$.ui.mentorOpen;break;case"KeyN":Jh(),gn.push({level:"info",text:`Monitor sound ${$.ui.sound?"on":"off"}.`,key:"sound"});break}});window.addEventListener("keyup",n=>{Vt.delete(n.code),(n.code==="Space"||n.code==="Digit6"||n.code==="Numpad6")&&!Vt.has("Space")&&!Vt.has("Digit6")&&!Vt.has("Numpad6")&&At($.sim,!1)});window.addEventListener("blur",()=>{Vt.clear(),$.ui.started&&At($.sim,!1)});gi.addEventListener("wheel",n=>{if(!$.ui.started||(n.preventDefault(),Ml())||$.ui.paused)return;if(n.ctrlKey||n.metaKey){$.ui.view==="3d"&&It.rig.zoom(Math.exp(n.deltaY*.0015));return}const e=Math.sign(-n.deltaY)*(n.shiftKey?1:3);cd($.sim,e)},{passive:!1});mi.addEventListener("pointerdown",n=>{if(!$.ui.started)return;const e=n.target;e.closest(".demo-badge")||e.closest(".modal-backdrop")||Ml()},!0);gi.addEventListener("pointermove",n=>{if($.sim.tool!=="measure"||$.ui.view!=="3d"){$.ui.hover=null;return}$.ui.hover=Iv.pick($.sim,It.cam3d,It.vessels,n.clientX,n.clientY,gi.getBoundingClientRect())});gi.addEventListener("pointerleave",()=>$.ui.hover=null);function eu(){const n=gi.clientWidth||window.innerWidth,e=gi.clientHeight||window.innerHeight;It.resize(n,e)}window.addEventListener("resize",eu);eu();nr();let Xc=performance.now(),Ha=0,qc=0,Pr=null;function tu(n){const e=Math.min(.05,(n-Xc)/1e3);Xc=n;const t=$.sim,i=$.ui.started&&!$.ui.paused&&!$.ui.debrief;if(i){let s=e;for(;s>1e-6;){const r=Math.min(.016666666666666666,s);s-=r;const a=$.ui.demo;let o;if(a&&!a.done){const l=a.index,c=t.tool,h=t.contrast.injections.length;if(ch(a,t,r),o=a.input,t.tool!==c&&nr(),t.contrast.injections.length>h&&hl(),a.index!==l&&!a.done){const d=a.steps[a.index].view;d&&d!==$.ui.view&&ir(d)}}else o=Uv();Lr(t,o,r)}for(const r of t.outbox)gn.push(r);t.outbox.length=0,t.beatCount!==qc&&(qc=t.beatCount,Pi.beep(t.phys.spo2)),Pi.setAlarm(t.phys.unstable),Pi.tick(),t.stages.current>=6&&!$.ui.debriefShownForCompletion&&((Pr===null||t.xray.mode==="cine")&&(Pr=n),n-Pr>1500&&($.ui.debriefShownForCompletion=!0,Pr=null,fl()))}else Pi.setAlarm(!1);It.update(t,i?e:0),It.backgroundAcquire(t),It.render(t),gl.update(e),gn.tick(),Zh.update(),Kh.update(It.post.hasImage),Ha+=e,Ha>.09&&(Ha=0,$h.update(),jh.update(),pl.update(),ml.update(),_l.update(),mi.classList.toggle("demo-on",!!$.ui.demo&&!$.ui.demo.done)),requestAnimationFrame(tu)}requestAnimationFrame(tu);window.pci={store:$,scene:It,fastForward(n){const e=$.sim,t=1/60;for(let i=0;i<n;i+=t){const s=$.ui.demo;if(s&&!s.done){const r=e.tool;ch(s,e,t),e.tool!==r&&nr(),Lr(e,s.input,t)}else Lr(e,zs(),t)}for(const i of e.outbox)gn.push(i);e.outbox.length=0},setView:ir,run(n,e,t){const i=$.sim;for(let s=0;s<n&&!(t&&t(i));s+=1/60)Lr(i,{...zs(),...e},1/60);for(const s of i.outbox)gn.push(s);i.outbox.length=0},act:{select:cl,setCathSize:(n,e,t)=>qr($.sim,n,e,t),inject:ul,deflate:()=>Hs($.sim),cyclePreset:()=>oh($.sim)}};
