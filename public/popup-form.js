// Application Popup Form Modal - Dr. Kalam Educational Consultancy
(() => {
  const modalHTML = `
  <div id="kalam-application-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-4 md:p-6 opacity-0 pointer-events-none transition-opacity duration-300">
    <!-- Backdrop overlay -->
    <div id="kalam-modal-backdrop" class="absolute inset-0 bg-black/65 backdrop-blur-[2px] transition-opacity duration-300"></div>

    <!-- Modal Box (Compact on Mobile, Side-by-Side on Desktop) -->
    <div id="kalam-modal-box" class="relative w-full max-w-[94%] sm:max-w-[480px] md:max-w-[780px] max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row transform scale-95 transition-transform duration-300 z-10">
      
      <!-- Close Button (Always visible on top right) -->
      <button id="kalam-modal-close" type="button" aria-label="Close dialog" class="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-30 w-7 h-7 rounded-full bg-black/55 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Video Section (Compact Banner on Mobile, Full Column on Desktop) -->
      <div id="kalam-video-container" class="relative w-full md:w-[38%] h-[120px] sm:h-[150px] md:h-auto md:min-h-full shrink-0 overflow-hidden bg-black flex items-center justify-center">
        <video 
          id="kalam-popup-video"
          class="w-full h-full object-cover object-center pointer-events-none" 
          autoplay 
          muted 
          loop 
          playsinline
        >
          <source src="/videos/popup-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <!-- Subtle overlay gradient on mobile so close button pops and branding is sleek -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>

        <!-- Audio mute/unmute small toggle button -->
        <button id="kalam-video-sound-toggle" type="button" class="absolute bottom-2 left-2 z-20 px-2 py-0.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-[10px] font-medium flex items-center gap-1 backdrop-blur-xs transition">
          <span id="kalam-sound-icon">🔇</span>
          <span id="kalam-sound-text">Mute</span>
        </button>
      </div>

      <!-- Right Column: Interactive Lead Capture Form (Compact on Mobile) -->
      <div class="relative w-full md:w-[62%] bg-white p-3 sm:p-4 md:p-5 flex flex-col justify-between overflow-y-auto">
        
        <div>
          <!-- Heading -->
          <div class="mb-2 sm:mb-2.5">
            <h3 class="text-sm sm:text-base md:text-lg font-bold text-[#111827] tracking-tight">
              Start Your Application Today
            </h3>
            <p class="text-[10px] sm:text-xs text-gray-500 mt-0.5">
              Fill details to connect with Dr. Kalam admission counsellors
            </p>
          </div>

          <!-- Form Element -->
          <form id="kalam-lead-form" class="space-y-1.5 sm:space-y-2">
            
            <!-- Full Name -->
            <div class="space-y-0.5">
              <label class="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-gray-700">
                <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span>Full Name</span>
              </label>
              <input type="text" id="kalam-lead-name" name="name" required placeholder="e.g. John Doe" class="w-full px-2.5 py-1 sm:py-1.5 text-xs rounded-md border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent transition">
            </div>

            <!-- Phone Number & Email ID (2 columns on mobile too) -->
            <div class="grid grid-cols-2 gap-1.5 sm:gap-2">
              <!-- Phone -->
              <div class="space-y-0.5">
                <label class="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-gray-700">
                  <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>Phone Number</span>
                </label>
                <div class="flex rounded-md border border-gray-200 overflow-hidden focus-within:ring-1.5 focus-within:ring-blue-600 focus-within:border-transparent transition">
                  <span class="bg-[#EEF4FF] text-gray-700 text-[10px] sm:text-[11px] font-bold px-1.5 py-1 sm:py-1.5 flex items-center border-r border-gray-200 select-none">+91</span>
                  <input type="tel" id="kalam-lead-phone" name="phone" required placeholder="9999999999" pattern="[0-9]{10}" maxlength="10" class="w-full px-2 py-1 sm:py-1.5 text-xs text-gray-900 focus:outline-none placeholder:text-gray-400">
                </div>
              </div>

              <!-- Email -->
              <div class="space-y-0.5">
                <label class="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-gray-700">
                  <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>Email ID</span>
                </label>
                <input type="email" id="kalam-lead-email" name="email" required placeholder="e.g. name@gmail.com" class="w-full px-2.5 py-1 sm:py-1.5 text-xs rounded-md border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent transition">
              </div>
            </div>

            <!-- Qualification & State (2 columns) -->
            <div class="grid grid-cols-2 gap-1.5 sm:gap-2">
              <!-- Highest Qualification -->
              <div class="space-y-0.5">
                <label class="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-gray-700">
                  <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"></path>
                  </svg>
                  <span>Qualification*</span>
                </label>
                <div class="relative">
                  <select id="kalam-lead-qualification" name="qualification" required class="w-full appearance-none px-2 py-1 sm:py-1.5 text-xs rounded-md border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent pr-6 transition">
                    <option value="" disabled selected class="text-gray-400">Select qualification</option>
                    <option value="12th / HSC">12th / HSC</option>
                    <option value="Diploma">Diploma / Polytechnic</option>
                    <option value="Undergraduate (UG)">Undergraduate (UG)</option>
                    <option value="Postgraduate (PG)">Postgraduate (PG)</option>
                    <option value="Other">Other</option>
                  </select>
                  <span class="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Your State -->
              <div class="space-y-0.5">
                <label class="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-gray-700">
                  <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Your State*</span>
                </label>
                <div class="relative">
                  <select id="kalam-lead-state" name="state" required class="w-full appearance-none px-2 py-1 sm:py-1.5 text-xs rounded-md border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent pr-6 transition">
                    <option value="" disabled selected class="text-gray-400">Select state</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Pondicherry">Pondicherry</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Other State">Other State</option>
                  </select>
                  <span class="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <!-- Degree & Preferred University (2 columns) -->
            <div class="grid grid-cols-2 gap-1.5 sm:gap-2">
              <!-- Desired Degree -->
              <div class="space-y-0.5">
                <label class="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-gray-700">
                  <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  <span>Interested Course*</span>
                </label>
                <div class="relative">
                  <select id="kalam-lead-degree" name="degree" required class="w-full appearance-none px-2 py-1 sm:py-1.5 text-xs rounded-md border border-gray-200 bg-white text-gray-800 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent pr-6 transition">
                    <option value="" disabled selected class="text-gray-400">Select course</option>
                    <option value="MBBS / BDS / Allied Health">MBBS / BDS / Allied Health</option>
                    <option value="B.Tech / B.E Engineering">B.Tech / B.E Engineering</option>
                    <option value="Arts, Science & Commerce">Arts, Science & Commerce</option>
                    <option value="Nursing / Pharmacy">Nursing / Pharmacy</option>
                    <option value="MBA / Management">MBA / Management</option>
                    <option value="Polytechnic / Diploma">Polytechnic / Diploma</option>
                    <option value="Law / Agriculture">Law / Agriculture</option>
                    <option value="Overseas Education">Overseas Education</option>
                  </select>
                  <span class="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <!-- Preferred College / Location -->
              <div class="space-y-0.5">
                <label class="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-gray-700">
                  <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span>Preferred College</span>
                </label>
                <input type="text" id="kalam-lead-university" name="university" placeholder="e.g. Top Chennai / Trichy College" class="w-full px-2.5 py-1 sm:py-1.5 text-xs rounded-md border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1.5 focus:ring-blue-600 focus:border-transparent transition">
              </div>
            </div>

            <!-- Submit Button (Direct to WhatsApp & Callback) -->
            <div class="pt-1">
              <button type="submit" class="w-full py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-[#1e40af] hover:from-blue-700 hover:to-blue-900 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]">
                <span>Submit &amp; Get Free Counselling</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>

          </form>

          <!-- Success State View (Hidden by default) -->
          <div id="kalam-success-view" class="hidden py-4 text-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl">✓</div>
            <h4 class="text-base font-bold text-gray-900">Application Received!</h4>
            <p class="text-xs text-gray-600 max-w-xs mx-auto">Thank you for contacting Dr. Kalam Educational Consultancy. Our admission counsellor will contact you shortly.</p>
            <a id="kalam-wa-direct-link" href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold text-xs px-4 py-2 rounded-md transition-colors mt-1">
              <span>Chat on WhatsApp Now</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <!-- Social Proof Footer -->
        <div class="flex items-center gap-2 pt-2 mt-1 border-t border-gray-100 justify-center sm:justify-start">
          <div class="flex -space-x-1.5 shrink-0">
            <img src="/images/popup-avatars.png" alt="Students" class="h-4 sm:h-5 w-auto object-contain rounded-full shadow-xs">
          </div>
          <p class="text-[9px] sm:text-[10px] text-gray-600 font-medium">
            <span class="text-[#D97706] font-bold">15+ Years</span> trusted counselling · 2,500+ successful admissions
          </p>
        </div>

      </div>
    </div>
  </div>
  `;

  // Inject modal into document body if not already present
  if (!document.getElementById('kalam-application-modal')) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHTML;
    document.body.appendChild(wrapper);
  }

  const modal = document.getElementById('kalam-application-modal');
  const modalBox = document.getElementById('kalam-modal-box');
  const closeBtn = document.getElementById('kalam-modal-close');
  const backdrop = document.getElementById('kalam-modal-backdrop');
  const form = document.getElementById('kalam-lead-form');
  const successView = document.getElementById('kalam-success-view');
  const waDirectLink = document.getElementById('kalam-wa-direct-link');
  const popupVideo = document.getElementById('kalam-popup-video');
  const soundToggle = document.getElementById('kalam-video-sound-toggle');
  const soundIcon = document.getElementById('kalam-sound-icon');
  const soundText = document.getElementById('kalam-sound-text');

  // Sound toggle
  soundToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!popupVideo) return;
    if (popupVideo.muted) {
      popupVideo.muted = false;
      if (soundIcon) soundIcon.textContent = '🔊';
      if (soundText) soundText.textContent = 'Sound On';
    } else {
      popupVideo.muted = true;
      if (soundIcon) soundIcon.textContent = '🔇';
      if (soundText) soundText.textContent = 'Mute';
    }
  });

  // Open modal helper
  function openModal() {
    if (!modal) return;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    if (modalBox) {
      modalBox.classList.remove('scale-95');
      modalBox.classList.add('scale-100');
    }
    document.body.style.overflow = 'hidden';

    // Play video smoothly when modal opens
    if (popupVideo) {
      popupVideo.play().catch(() => {});
    }
  }

  // Close modal helper
  function closeModal() {
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    if (modalBox) {
      modalBox.classList.add('scale-95');
      modalBox.classList.remove('scale-100');
    }
    document.body.style.overflow = '';

    // Pause video on modal close
    if (popupVideo) {
      popupVideo.pause();
    }
  }

  window.openKalamModal = openModal;
  window.closeKalamModal = closeModal;

  // Event Listeners
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
      closeModal();
    }
  });

  // Bind any button with data-open-modal or class "open-application-modal"
  document.querySelectorAll('[data-open-modal], .open-application-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Auto-open modal after 7 seconds on website open (once per session)
  try {
    const hasShown = sessionStorage.getItem('kalam_popup_shown');
    if (!hasShown) {
      setTimeout(() => {
        openModal();
        sessionStorage.setItem('kalam_popup_shown', 'true');
      }, 7000);
    }
  } catch (err) {
    setTimeout(openModal, 7000);
  }

  // Form submission handling
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('kalam-lead-name')?.value || '';
    const phone = document.getElementById('kalam-lead-phone')?.value || '';
    const email = document.getElementById('kalam-lead-email')?.value || '';
    const qual = document.getElementById('kalam-lead-qualification')?.value || '';
    const state = document.getElementById('kalam-lead-state')?.value || '';
    const degree = document.getElementById('kalam-lead-degree')?.value || '';
    const univ = document.getElementById('kalam-lead-university')?.value || '';

    // Create pre-filled WhatsApp message
    const msg = `*New Admission Application - Dr. Kalam Consultancy*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A*Qualification:* ${encodeURIComponent(qual)}%0A*State:* ${encodeURIComponent(state)}%0A*Degree of Interest:* ${encodeURIComponent(degree)}%0A*Preferred University:* ${encodeURIComponent(univ)}`;

    if (waDirectLink) {
      waDirectLink.href = `https://wa.me/916381905987?text=${msg}`;
    }

    // Hide form, show success view
    form.classList.add('hidden');
    successView?.classList.remove('hidden');

    // Automatically navigate or open WhatsApp after 1.2 seconds
    setTimeout(() => {
      window.open(`https://wa.me/916381905987?text=${msg}`, '_blank');
    }, 1200);
  });
})();
