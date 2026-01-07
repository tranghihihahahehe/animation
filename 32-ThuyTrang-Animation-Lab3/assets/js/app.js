/* BÀI 1: ĐỔI NỀN */
document.getElementById('toggleTheme')
    .addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

/* BÀI 2: MENU ACTIVE KHI CUỘN */
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            menuLinks.forEach(link => link.classList.remove('active'));
            menuLinks[index].classList.add('active');
        }
    });
});

/* BÀI 3: BOX FADE IN */
const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', () => {
    boxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            box.classList.add('show');
        }
    });
});

/* BÀI 4: NÚT NHẢY */
const jumpBtn = document.querySelector('.jump');
jumpBtn.addEventListener('mouseover', () => {
    jumpBtn.classList.add('animate');
    setTimeout(() => {
        jumpBtn.classList.remove('animate');
    }, 400);
});

/* BÀI 5: HÌNH TRÒN THEO CHUỘT */
const circle = document.querySelector('.circle');

document.addEventListener('mousemove', function (e) {
    circle.style.left = e.clientX + 'px';
    circle.style.top = e.clientY + 'px';
});
