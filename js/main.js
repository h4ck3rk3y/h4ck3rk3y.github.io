/**
 * gyani.net — Main JavaScript
 * Futuristic blog interactions
 */

(function() {
  'use strict';

  // ============================================================
  // Navbar: scroll behavior + mobile toggle
  // ============================================================
  function initNavbar() {
    var navbar   = document.querySelector('.navbar-custom');
    var toggle   = document.querySelector('.navbar-toggle');
    var collapse = document.querySelector('.navbar-collapse');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    if (toggle && collapse) {
      toggle.addEventListener('click', function() {
        toggle.classList.toggle('open');
        collapse.classList.toggle('open');
      });

      collapse.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          toggle.classList.remove('open');
          collapse.classList.remove('open');
        });
      });
    }
  }

  // ============================================================
  // Big image hero rotator
  // ============================================================
  function initImgs() {
    var imgEl = document.getElementById('header-big-imgs');
    if (!imgEl) return;

    var numImgs = parseInt(imgEl.getAttribute('data-num-img'), 10);
    if (isNaN(numImgs) || numImgs < 1) return;

    var imgs = [];
    for (var i = 1; i <= numImgs; i++) {
      var src  = imgEl.getAttribute('data-img-src-'  + i);
      var desc = imgEl.getAttribute('data-img-desc-' + i) || '';
      if (src) imgs.push({ src: src, desc: desc });
    }
    if (!imgs.length) return;

    // Shuffle
    for (var j = imgs.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var tmp = imgs[j]; imgs[j] = imgs[k]; imgs[k] = tmp;
    }

    var headerBig  = document.querySelector('.intro-header.big-img');
    var transition = document.querySelector('.big-img-transition');
    var imgDesc    = document.querySelector('.img-desc');
    var curIdx = 0;

    if (!headerBig) return;

    function setImage(idx) {
      headerBig.style.backgroundImage = 'url("' + imgs[idx].src + '")';
      if (imgDesc) imgDesc.textContent = imgs[idx].desc;
    }

    function preloadAndRotate(nextIdx) {
      var img = new Image();
      img.src = imgs[nextIdx].src;
      function doSwap() {
        if (transition) {
          transition.style.backgroundImage = 'url("' + imgs[nextIdx].src + '")';
          transition.style.opacity = '1';
          setTimeout(function() {
            setImage(nextIdx);
            transition.style.opacity = '0';
            curIdx = nextIdx;
            scheduleNext();
          }, 1500);
        } else {
          setImage(nextIdx);
          curIdx = nextIdx;
          scheduleNext();
        }
      }
      img.onload  = doSwap;
      img.onerror = doSwap;
    }

    function scheduleNext() {
      setTimeout(function() {
        preloadAndRotate((curIdx + 1) % imgs.length);
      }, 7000);
    }

    setImage(0);
    if (imgs.length > 1) scheduleNext();
  }

  // ============================================================
  // Reading progress bar
  // ============================================================
  function initReadingProgress() {
    if (!document.querySelector('.blog-post')) return;

    var bar = document.createElement('div');
    bar.id = 'reading-progress';
    bar.style.cssText = [
      'position:fixed',
      'top:64px',
      'left:0',
      'height:2px',
      'width:0%',
      'background:linear-gradient(90deg,#00d4ff,#00ff88)',
      'z-index:999',
      'transition:width 0.1s linear',
      'box-shadow:0 0 8px rgba(0,212,255,0.6)',
      'pointer-events:none'
    ].join(';');
    document.body.appendChild(bar);

    window.addEventListener('scroll', function() {
      var scrollTop  = window.scrollY || document.documentElement.scrollTop;
      var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = Math.min(pct, 100) + '%';
    });
  }

  // ============================================================
  // Fade-in post previews on scroll
  // ============================================================
  function initFadeIn() {
    var items = document.querySelectorAll('.post-preview');
    if (!items.length) return;

    items.forEach(function(el) {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    function check() {
      var viewBottom = window.scrollY + window.innerHeight;
      items.forEach(function(el) {
        if (el.style.opacity === '1') return;
        var top = el.getBoundingClientRect().top + window.scrollY;
        if (top < viewBottom - 60) {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    }

    window.addEventListener('scroll', check);
    check();
  }

  // ============================================================
  // Copy button on code blocks
  // ============================================================
  function initCodeCopy() {
    document.querySelectorAll('pre code').forEach(function(codeEl) {
      var pre = codeEl.closest('pre');
      if (!pre) return;

      pre.style.position = 'relative';

      var btn = document.createElement('button');
      btn.textContent  = 'copy';
      btn.style.cssText = [
        'position:absolute',
        'top:0.75rem',
        'right:0.75rem',
        'font-family:"Space Mono",monospace',
        'font-size:0.65rem',
        'font-weight:700',
        'text-transform:uppercase',
        'letter-spacing:0.08em',
        'color:var(--text-muted)',
        'background:var(--bg-elevated)',
        'border:1px solid var(--border-color)',
        'border-radius:3px',
        'padding:0.2rem 0.5rem',
        'cursor:pointer',
        'opacity:0',
        'transition:opacity 0.2s,color 0.2s',
        'z-index:10'
      ].join(';');

      pre.addEventListener('mouseenter', function() { btn.style.opacity = '1'; });
      pre.addEventListener('mouseleave', function() { btn.style.opacity = '0'; });

      btn.addEventListener('click', function() {
        var text = codeEl.textContent;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text);
        }
        btn.textContent  = 'copied!';
        btn.style.color  = 'var(--neon-green)';
        setTimeout(function() {
          btn.textContent = 'copy';
          btn.style.color = 'var(--text-muted)';
        }, 2000);
      });

      pre.appendChild(btn);
    });
  }

  // ============================================================
  // URL message display (form redirects)
  // ============================================================
  function initUrlMsg() {
    var search = window.location.search;
    if (!search) return;
    var match = search.match(/[?&]message=([^&]+)/);
    if (!match) return;
    var msg = decodeURIComponent(match[1].replace(/\+/g, ' '));
    var container = document.querySelector('.container');
    if (!container) return;
    var el = document.createElement('div');
    el.textContent = msg;
    el.style.cssText = [
      'background:rgba(0,255,136,0.1)',
      'border:1px solid rgba(0,255,136,0.3)',
      'border-radius:6px',
      'padding:0.75rem 1rem',
      'font-family:"Space Mono",monospace',
      'font-size:0.85rem',
      'color:var(--neon-green)',
      'margin-bottom:1.5rem'
    ].join(';');
    container.insertBefore(el, container.firstChild);
  }

  // ============================================================
  // Boot
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initImgs();
    initReadingProgress();
    initFadeIn();
    initCodeCopy();
    initUrlMsg();
  });

})();
