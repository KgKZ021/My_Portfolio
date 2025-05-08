$(document).ready(function () {
  function applyTheme(isDark) {
    $('body').toggleClass('dark-theme light-theme');
    $('.navbar')
      .toggleClass('navbar-dark bg-dark')
      .toggleClass('navbar-light bg-light');
    $('.svg-icon').css('color', isDark ? '#0dcaf0' : '#0a58ca');
    $('label[for="themeToggle"]').text(isDark ? '☀️' : '🌙');
    $('.nav-link').toggleClass('text-dark text-light');
    $('.section').each(function () {
      $(this)
        .toggleClass('bg-light text-light')
        .toggleClass('dark-theme');
    });
  }

  $('#themeToggle').on('change', function () {
    applyTheme($(this).is(':checked'));
  });

  $('.home-content').hide().fadeIn(2000);

  $('#scrollDown').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 800);
  });

  const texts = [
    "A Creative Coder",
    "A Game Development Enthusiaste",
    "A Unity & C# Explorer",
    "A Curious Problem Solver",
    "A Code-Loving Student",
    "A Creative Technologist"
  ];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    $(".intro-subtitle").html(letter + '<span class="typing-cursor">|</span>');
    if (letter.length === currentText.length) {
      setTimeout(erase, 1500);
    } else {
      setTimeout(type, 100);
    }
  }

  function erase() {
    letter = currentText.slice(0, --index);
    $(".intro-subtitle").html(letter + '<span class="typing-cursor">|</span>');
    if (letter.length === 0) {
      count++;
      setTimeout(type, 200);
    } else {
      setTimeout(erase, 50);
    }
  }

  type();

  function setupObserver(selector, animationClass, threshold = 0.2) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).addClass(animationClass);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold });

    $(selector).each(function () {
      observer.observe(this);
    });
  }

  setupObserver(".about-section", "animate__animated animate__fadeInUp");
  setupObserver(".project-card", "animate__fadeInUp");
  setupObserver(".timeline-item", "animate__fadeInLeft");

  $('[data-bs-toggle="tooltip"]').tooltip();

  // Back to Top Button
  $('#backToTop').on('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Set dynamic year in footer
  $('#footer-year').text(new Date().getFullYear());
});