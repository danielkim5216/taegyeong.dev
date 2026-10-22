import './style.css'; 
// import confetti from 'canvas-confetti';
// import img1 from './assets/sqld-pass1.jpg';
// import img2 from './assets/sqld-pass2.jpg';

// 다크/라이트 테마 제어
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcons(savedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme);
  });

  function updateIcons(theme: string) {
    if (theme === 'light') {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
    } else {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
    }
  }
}

// 스크롤 페이드인 옵저버 (.visible 클래스 부여)
function initIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  // header와 fade-in-section 대상 관찰
  const elements = document.querySelectorAll('.header, .fade-in-section');
  elements.forEach((el) => observer.observe(el));
}

// 폭죽 연출
// function triggerSideConfetti() {
//   const defaults = { origin: { y: 0.7 }, zIndex: 999999 };
//   confetti({ ...defaults, particleCount: 50, spread: 26, startVelocity: 55, angle: 60, origin: { x: 0, y: 0.8 } });
//   confetti({ ...defaults, particleCount: 50, spread: 26, startVelocity: 55, angle: 120, origin: { x: 1, y: 0.8 } });
// }

// // 축하 모달 초기화
// function initCongratsModal() {
//   const modalImg1 = document.getElementById('modal-img-1') as HTMLImageElement;
//   const modalImg2 = document.getElementById('modal-img-2') as HTMLImageElement;

//   if (modalImg1 && modalImg2) {
//     modalImg1.src = img1;
//     modalImg2.src = img2;
//   }

//   const modal = document.getElementById('congrats-modal');
//   const closeBtn = document.getElementById('close-modal-btn');

//   if (!modal || !closeBtn) return;

//   // 새로고침 시 팝업 열기 + 폭죽 발사
//   modal.classList.remove('hidden');
//   triggerSideConfetti();

//   closeBtn.addEventListener('click', () => {
//     modal.classList.add('hidden');
//   });
// }

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initIntersectionObserver();
  //initCongratsModal();
});