const links = [
  { file: 'index.html', en: 'Home', ta: 'முகப்பு' },
  { file: 'about.html', en: 'About us', ta: 'எங்களைப் பற்றி' },
  { file: 'services.html', en: 'Services', ta: 'சேவைகள்' },
  { file: 'courses.html', en: 'Courses', ta: 'பாடப்பிரிவுகள்' },
  { file: 'colleges.html', en: 'Colleges', ta: 'கல்லூரிகள்' },
  { file: 'contact.html', en: 'Contact', ta: 'தொடர்பு' },
]

const currentFile = location.pathname.split('/').pop() || 'index.html'
const savedLanguage = localStorage.getItem('kalam-language')
const initialLanguage = savedLanguage === 'ta' ? 'ta' : 'en'

const navLink = ({ file, en, ta }) => `<a href="/${file}" class="${currentFile === file ? 'active' : ''}" ${currentFile === file ? 'aria-current="page"' : ''}><span data-lang="en">${en}</span><span data-lang="ta">${ta}</span></a>`

document.documentElement.classList.add(`lang-${initialLanguage}`)

const header = document.querySelector('[data-site-header]')
if (header) {
  header.innerHTML = `
    <div class="wrap nav-shell">
      <a class="brand" href="/index.html" aria-label="Dr. Kalam Educational Consultancy home">
        <img src="/kalam-emblem.jpg" alt="">
        <span>Dr. Kalam<small><span data-lang="en">Educational Consultancy</span><span data-lang="ta">கல்வி ஆலோசனை மையம்</span></small></span>
      </a>
      <div class="nav-right">
        <nav class="nav-links" id="primary-navigation" aria-label="Primary navigation">${links.map(navLink).join('')}</nav>
        <div class="lang-toggle" role="group" aria-label="Choose language">
          <button type="button" data-language="en" aria-pressed="${initialLanguage === 'en'}">EN</button>
          <button type="button" data-language="ta" aria-pressed="${initialLanguage === 'ta'}">தமிழ்</button>
        </div>
        <button class="menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded="false" aria-label="Open menu">☰</button>
      </div>
    </div>`
}

const footer = document.querySelector('[data-site-footer]')
if (footer) {
  footer.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <a href="/index.html" class="footer-brand"><img src="/kalam-emblem.jpg" alt="">Dr. Kalam</a>
          <p data-lang="en">Honest, personalised education guidance for students and families in Aranthangi and beyond.</p>
          <p data-lang="ta">அரந்தாங்கி மற்றும் சுற்றுப்புற மாணவர்கள், குடும்பங்களுக்கான நேர்மையான, தனிப்பட்ட கல்வி வழிகாட்டல்.</p>
          <p><a href="tel:+919976916786">+91 99769 16786</a><br><a href="mailto:thasleemsrt.05@gmail.com">thasleemsrt.05@gmail.com</a></p>
        </div>
        <div><h3 data-lang="en">Explore</h3><h3 data-lang="ta">பார்க்க</h3><div class="footer-links">${links.slice(1).map(navLink).join('')}<a href="https://www.instagram.com/kalam_educational_aranthangi/" target="_blank" rel="noopener noreferrer"><span data-lang="en">Instagram ↗</span><span data-lang="ta">Instagram ↗</span></a></div></div>
        <div><h3 data-lang="en">Our guidance</h3><h3 data-lang="ta">எங்கள் வழிகாட்டல்</h3><div class="footer-links"><a href="/services.html"><span data-lang="en">Career counselling</span><span data-lang="ta">தொழில் ஆலோசனை</span></a><a href="/services.html"><span data-lang="en">Admission guidance</span><span data-lang="ta">சேர்க்கை வழிகாட்டல்</span></a><a href="/courses.html"><span data-lang="en">Course selection</span><span data-lang="ta">பாடப்பிரிவு தேர்வு</span></a></div></div>
        <div><h3 data-lang="en">Visit / call</h3><h3 data-lang="ta">வருக / அழைக்க</h3><p data-lang="en">Raja Street, Vagaimaram, Aranthangi, Pudukkottai District, Tamil Nadu 614616<br>Call or WhatsApp for appointment details.</p><p data-lang="ta">ராஜா தெரு, வகைமரம், அறந்தாங்கி, புதுக்கோட்டை மாவட்டம், தமிழ்நாடு 614616<br>சந்திப்பு விவரங்களுக்கு அழைக்கவும் அல்லது WhatsApp செய்யவும்.</p><a class="btn" href="/contact.html"><span data-lang="en">Talk to our team</span><span data-lang="ta">எங்கள் குழுவைத் தொடர்புகொள்ளுங்கள்</span></a></div>
      </div>
      <div class="footer-bottom"><span data-lang="en">© 2026 Dr. Kalam Educational Consultancy, Aranthangi.</span><span data-lang="ta">© 2026 டாக்டர் கலாம் கல்வி ஆலோசனை மையம், அரந்தாங்கி.</span><span data-lang="en">Independent guidance. Admission decisions rest with institutions.</span><span data-lang="ta">சுயாதீன வழிகாட்டல். சேர்க்கை முடிவுகள் கல்வி நிறுவனங்களால் எடுக்கப்படுகின்றன.</span></div>
    </div>`
}

const setLanguage = (language) => {
  const safeLanguage = language === 'ta' ? 'ta' : 'en'
  document.documentElement.classList.remove('lang-en', 'lang-ta')
  document.documentElement.classList.add(`lang-${safeLanguage}`)
  document.documentElement.lang = safeLanguage === 'ta' ? 'ta' : 'en'
  localStorage.setItem('kalam-language', safeLanguage)
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === safeLanguage))
  })
  const title = document.querySelector('title')
  if (title) document.title = safeLanguage === 'ta' ? (title.dataset.titleTa || title.textContent.trim()) : title.textContent.trim()
  const whatsappMessages = {
    en: 'Hello, I would like guidance about courses and college admissions from Dr. Kalam Educational Consultancy, Aranthangi.',
    ta: 'வணக்கம், டாக்டர் கலாம் கல்வி ஆலோசனை மையம், அரந்தாங்கியில் பாடப்பிரிவுகள் மற்றும் கல்லூரி சேர்க்கை வழிகாட்டல் பற்றி பேச விரும்புகிறேன்.',
  }
  document.querySelectorAll('.float-wa').forEach((link) => {
    link.href = `https://wa.me/919976916786?text=${encodeURIComponent(whatsappMessages[safeLanguage])}`
  })
}

document.addEventListener('click', (event) => {
  const languageButton = event.target.closest('[data-language]')
  if (languageButton) setLanguage(languageButton.dataset.language)

  const menuButton = event.target.closest('.menu-toggle')
  if (menuButton) {
    const navigation = document.querySelector('#primary-navigation')
    const open = menuButton.getAttribute('aria-expanded') !== 'true'
    menuButton.setAttribute('aria-expanded', String(open))
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    menuButton.textContent = open ? '×' : '☰'
    navigation?.classList.toggle('open', open)
  }
})

setLanguage(initialLanguage)

const search = document.querySelector('[data-college-search]')
if (search) {
  search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase()
    let visible = 0
    document.querySelectorAll('[data-college-card]').forEach((card) => {
      const match = card.textContent.toLocaleLowerCase().includes(query)
      card.hidden = !match
      if (match) visible += 1
    })
    const empty = document.querySelector('[data-empty-state]')
    if (empty) empty.style.display = visible ? 'none' : 'block'
  })
}

const enquiryForm = document.querySelector('[data-whatsapp-form]')
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!enquiryForm.reportValidity()) return
    const fields = new FormData(enquiryForm)
    const tamil = document.documentElement.classList.contains('lang-ta')
    const label = (en, ta) => tamil ? ta : en
    const message = [
      label('Enquiry for Dr. Kalam Educational Consultancy', 'டாக்டர் கலாம் கல்வி ஆலோசனை மையத்திற்கான விசாரணை'),
      `${label('Name', 'பெயர்')}: ${fields.get('name')}`,
      `${label('Phone', 'தொலைபேசி')}: ${fields.get('phone')}`,
      `${label('Course of interest', 'விருப்பமான பாடப்பிரிவு')}: ${fields.get('course')}`,
      `${label('Current location', 'தற்போதைய இருப்பிடம்')}: ${fields.get('location') || label('Not provided', 'வழங்கப்படவில்லை')}`,
      `${label('Message', 'செய்தி')}: ${fields.get('message') || label('Not provided', 'வழங்கப்படவில்லை')}`,
    ].join('\n')
    location.href = `https://wa.me/919976916786?text=${encodeURIComponent(message)}`
  })
}
