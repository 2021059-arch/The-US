document.addEventListener('DOMContentLoaded', () => {
    const ads = [
        'AD: [합중국 전쟁채권] 당신의 크레딧이 전선을 유지합니다. (수익률 0.5% 보장)',
        'AD: [모병광고] 통제 구역 4번의 시민이여, 합중국 보병대에 지원하십시오. 식량 배급량 2배.',
        'AD: [연방 정보부] 의심스러운 행동을 목격했습니까? 즉시 국선 번호 99로 신고하십시오.'
    ];
    let currentAdIndex = 0;
    function rotateAds() {
        const adElements = document.querySelectorAll('.ad-banner-text');
        adElements.forEach(el => { el.textContent = ads[currentAdIndex]; });
        currentAdIndex = (currentAdIndex + 1) % ads.length;
    }
    setInterval(rotateAds, 10000);
    rotateAds();
});
