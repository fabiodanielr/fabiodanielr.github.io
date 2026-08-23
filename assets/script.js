
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const modal = document.querySelector('.video-modal');
const frame = document.querySelector('#videoFrame');
const closeBtn = document.querySelector('.modal-close');

function getEmbed(value) {
  const [provider, id] = value.split(':');
  if (provider === 'vimeo') {
    return `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`;
  }
  if (provider === 'youtube') {
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }
  return '';
}

document.querySelectorAll('[data-video]').forEach(card => {
  card.querySelector('.film-media')?.addEventListener('click', () => {
    const src = getEmbed(card.dataset.video);
    if (!src) return;
    frame.src = src;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  });
});

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  frame.src = '';
  document.body.classList.remove('modal-open');
}

closeBtn?.addEventListener('click', closeModal);
modal?.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

document.getElementById('year').textContent = new Date().getFullYear();
