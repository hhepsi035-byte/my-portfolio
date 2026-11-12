/* ==========================================================================
   Hepsi Portfolio - Interactive JavaScript Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Scroll Progress Indicator & Navbar Blur
  // ==========================================
  const scrollProgress = document.getElementById('scroll-progress');
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }

    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    highlightNavOnScroll();
  });

  // ==========================================
  // 2. Active Nav Link on Scroll
  // ==========================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ==========================================
  // 3. Mobile Navigation Menu
  // ==========================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // ==========================================
  // 4. Light / Dark Theme Switcher
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

  // Read existing preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  // ==========================================
  // 5. Typewriter Effect for Hero
  // ==========================================
  const typedTextSpan = document.getElementById('typed-text');
  const textArray = [
    'Full Stack Developer',
    'Python & Flask Engineer',
    'PHP & MySQL Specialist',
    'AI & NLP Integration Builder',
    'Fast-Learning Problem Solver'
  ];
  const typingDelay = 90;
  const erasingDelay = 45;
  const newTextDelay = 1800;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (!typedTextSpan) return;
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (!typedTextSpan) return;
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 400);
    }
  }

  if (typedTextSpan) {
    setTimeout(type, 800);
  }

  // ==========================================
  // 6. Skills Category Filter
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // ==========================================
  // 7. Interactive Demo 1: SmartQueue Live Simulator
  // ==========================================
  const btnBookToken = document.getElementById('sim-book-token');
  const simNameInput = document.getElementById('sim-citizen-name');
  const simDeptSelect = document.getElementById('sim-dept-select');
  const simDisplayCard = document.getElementById('sim-queue-display');

  if (btnBookToken && simDisplayCard) {
    btnBookToken.addEventListener('click', () => {
      const name = simNameInput.value.trim() || 'Guest Citizen';
      const dept = simDeptSelect.value;
      const deptCode = dept === 'Revenue' ? 'REV' : dept === 'Certification' ? 'CERT' : 'DOC';
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const tokenRef = `${deptCode}-${new Date().getFullYear()}-${randomNum}`;
      const otp = Math.floor(1000 + Math.random() * 9000);

      simDisplayCard.innerHTML = `
        <div style="animation: fadeIn 0.3s ease;">
          <div class="live-badge" style="margin-bottom: 8px;">✓ Appointment Verified & Active</div>
          <div class="token-highlight">${tokenRef}</div>
          <div style="font-size: 0.85rem; color: var(--text-main); font-weight: 600; margin: 4px 0;">
            Citizen: ${name} • Dept: ${dept}
          </div>
          <div style="font-family: var(--font-code); font-size: 0.82rem; color: #34d399; margin: 4px 0;">
            One-Time Passcode (OTP): <strong>${otp}</strong>
          </div>
          <div class="token-status">
            Arrival Window: Active (10m early buffer enforced) • Queue Position: #2
          </div>
        </div>
      `;

      showToast(`Token generated for ${name}: ${tokenRef}`);
    });
  }

  // ==========================================
  // 8. Interactive Demo 2: DocuTwin AI Similarity Engine
  // ==========================================
  const text1Input = document.getElementById('nlp-text-1');
  const text2Input = document.getElementById('nlp-text-2');
  const sliderThreshold = document.getElementById('nlp-threshold');
  const thresholdValDisplay = document.getElementById('threshold-val');
  const nlpMeterFill = document.getElementById('nlp-meter-fill');
  const nlpScoreDisplay = document.getElementById('nlp-score-text');
  const nlpVerdict = document.getElementById('nlp-verdict');
  const nlpDiff = document.getElementById('nlp-diff');
  const btnComputeNLP = document.getElementById('btn-compute-nlp');

  if (sliderThreshold && thresholdValDisplay) {
    sliderThreshold.addEventListener('input', (e) => {
      thresholdValDisplay.textContent = `${e.target.value}%`;
      runNLPSimulation();
    });
  }

  if (btnComputeNLP) {
    btnComputeNLP.addEventListener('click', runNLPSimulation);
  }

  function runNLPSimulation() {
    if (!text1Input || !text2Input) return;
    const t1 = text1Input.value.toLowerCase().replace(/[^\w\s]/g, '').trim();
    const t2 = text2Input.value.toLowerCase().replace(/[^\w\s]/g, '').trim();

    if (!t1 || !t2) {
      if (nlpScoreDisplay) nlpScoreDisplay.textContent = '0%';
      if (nlpMeterFill) nlpMeterFill.style.width = '0%';
      return;
    }

    const words1 = t1.split(/\s+/);
    const words2 = t2.split(/\s+/);

    const set1 = new Set(words1);
    const set2 = new Set(words2);

    // Compute Jaccard/Cosine token similarity approximation
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    const jaccard = union.size === 0 ? 0 : (intersection.size / union.size);

    // Give a realistic TF-IDF cosine estimate
    const estimatedCosine = Math.min(100, Math.round((jaccard * 1.35) * 100));
    const threshold = parseInt(sliderThreshold ? sliderThreshold.value : 70, 10);

    if (nlpMeterFill) nlpMeterFill.style.width = `${estimatedCosine}%`;
    if (nlpScoreDisplay) nlpScoreDisplay.textContent = `${estimatedCosine}%`;

    const isDuplicate = estimatedCosine >= threshold;

    if (nlpVerdict) {
      if (isDuplicate) {
        nlpVerdict.innerHTML = `<span style="color: #ef4444; font-weight: 700;"><i class="fas fa-exclamation-triangle"></i> Near-Duplicate Alert!</span> (Exceeds ${threshold}% Threshold)`;
      } else {
        nlpVerdict.innerHTML = `<span style="color: #10b981; font-weight: 700;"><i class="fas fa-check-circle"></i> Unique Document</span> (Below ${threshold}% Threshold)`;
      }
    }

    // Missing words diff
    const missingInT1 = [...set2].filter(x => !set1.has(x)).slice(0, 4);
    const missingInT2 = [...set1].filter(x => !set2.has(x)).slice(0, 4);

    if (nlpDiff) {
      nlpDiff.innerHTML = `Unique in Doc 1: [${missingInT2.join(', ') || 'None'}] | Unique in Doc 2: [${missingInT1.join(', ') || 'None'}]`;
    }
  }

  // Run once on initial load
  if (btnComputeNLP) {
    runNLPSimulation();
  }

  // ==========================================
  // 9. Copy to Clipboard Utility with Toast
  // ==========================================
  window.copyToClipboard = function(text, label = 'Copied to clipboard!') {
    navigator.clipboard.writeText(text).then(() => {
      showToast(label);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      showToast(`Copy failed: ${text}`);
    });
  };

  // ==========================================
  // 10. Contact Form Mailto Dispatcher
  // ==========================================
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim() || 'Job Opportunity / Project Inquiry';
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.');
        return;
      }

      // Generate mailto link
      const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
      const bodyContent = `Hi Hepsi,\n\nMy name is ${name} (${email}).\n\n${message}\n\nSent from your portfolio website.`;
      const encodedBody = encodeURIComponent(bodyContent);

      window.location.href = `mailto:hepsi9706@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

      showToast('Opening email client to send message to Hepsi...');
      contactForm.reset();
    });
  }

  // ==========================================
  // 11. Toast System
  // ==========================================
  function showToast(message) {
    let toast = document.getElementById('portfolio-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'portfolio-toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<i class="fas fa-info-circle" style="color: var(--primary-light);"></i> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // ==========================================
  // 12. Back to Top Button
  // ==========================================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
