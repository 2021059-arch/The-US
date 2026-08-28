document.addEventListener("DOMContentLoaded",()=>{
  const ADS=[
    {t:"행정 공지",b:"국방부 고시 제48-12호: 징집 연령이 조정되었습니다. 상세 내용은 인근 징병소에서 확인하십시오."},
    {t:"건강 및 보건",b:"no_kia 1차 처방 후 발생하는 단기 기억 상실은 정상적인 약물 반응입니다. 추가 문의는 지역 보건국으로 제출하십시오."},
    {t:"시스템 알림",b:"StaffNet 연결 안정성: 99.98%. 식별 코드를 유지하십시오."},
    {t:"생산 현황 보고",b:"자동화 공장 제118호 가동률이 100%를 달성했습니다."},
    {t:"징집 안내",b:"당신의 복무가 합중국의 하늘을 지킵니다. 현재 공군 항공기 운용 대수: 524,000기."},
    {t:"보안 주의",b:"지정된 거주 구역 이탈은 법령 제14조에 의거하여 처벌받을 수 있습니다."}
  ];
  let act=0;
  function showAd(){
    if(act>=2)return;
    const ad=ADS[Math.floor(Math.random()*ADS.length)];
    const el=document.createElement('div');
    el.className='ad-popup';
    const W=280,H=120;
    const x=Math.random()*(window.innerWidth-W);
    const y=Math.random()*(window.innerHeight-H);
    el.style.left=x+'px';el.style.top=y+'px';
    el.innerHTML=`<div class="ad-title"><span>${ad.t}</span><button class="ad-close">X</button></div><div>${ad.b}</div>`;
    el.querySelector('.ad-close').onclick=()=>{el.remove();act--;};
    document.body.appendChild(el);
    act++;
    setTimeout(()=>{if(el.parentNode){el.remove();act--;}},10000);
  }
  setInterval(()=>{if(Math.random()>0.5)showAd()},8000);
  setTimeout(showAd,3000);
});
