/**
 * ECOTRENDAILY — Shared HTML Components
 * Inject header, footer, modal, and cookie banner into all pages
 */

function getHeaderHTML(activePage) {
  return `
  <header class="site-header">
    <div class="header-top">
      <div class="container">
        <a href="index.html" class="site-logo">
          <span class="logo-main">Eco<span>TrendDaily</span></span>
          <span class="logo-tagline">Geography · Climate · Science · Earth</span>
        </a>

        <button class="nav-toggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <nav class="header-nav">
      <div class="container">
        <ul class="nav-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="editorial.html">Editorial</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li class="nav-cta"><button class="btn btn--primary" data-modal="contact">Get In Touch</button></li>
        </ul>
      </div>
    </nav>
  </header>`;
}

function getFooterHTML() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="site-logo" style="margin-bottom:16px">
            <span class="logo-main">Eco<span>TrendDaily</span></span>
            <span class="logo-tagline">Geography · Climate · Science · Earth</span>
          </div>
          <p>Independent journalism covering Earth's geography, climate, and natural systems. Based in the United States, serving readers worldwide.</p>
          <div style="margin-top:16px;font-family:var(--sans);font-size:0.75rem;color:var(--gray-dark);line-height:1.7">
            1317 F Street NW, Suite 600<br>
            Washington, DC 20004, USA<br>
            <a href="mailto:info@ecotrenddaily.com" style="color:#D4AF37">info@ecotrenddaily.com</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Coverage</div>
          <div class="footer-links">
            <a href="blog.html">All Articles</a>
            <a href="blog.html">Climate Science</a>
            <a href="blog.html">Oceans & Seas</a>
            <a href="blog.html">Geography</a>
            <a href="blog.html">Weather Events</a>
            <a href="editorial.html">Editorial Insights</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Company</div>
          <div class="footer-links">
            <a href="about.html">About Us</a>
            <a href="editorial.html">Editorial Board</a>
            <a href="contact.html">Contact</a>
            <a href="mailto:help@ecotrenddaily.com" style="color:#D4AF37">Help & Support</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Legal</div>
          <div class="footer-links">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms.html">Terms & Conditions</a>
            <a href="disclaimer.html">Disclaimer</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} EcoTrendDaily. All rights reserved. Washington, DC, USA.</p>
        <div class="footer-legal">
          <a href="privacy-policy.html">Privacy</a>
          <a href="terms.html">Terms</a>
          <a href="disclaimer.html">Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function getModalHTML() {
  return `
  <div class="modal-overlay" id="contactModal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal">
      <div class="modal-header">
        <h3 id="modal-title">Get In Touch</h3>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        <form id="contactForm">
          <div class="form-group">
            <label for="contact-name">Full Name *</label>
            <input type="text" id="contact-name" name="name" required placeholder="Your name">
          </div>
          <div class="form-group">
            <label for="contact-email">Email Address *</label>
            <input type="email" id="contact-email" name="email" required placeholder="you@example.com">
          </div>
          <div class="form-group">
            <label for="contact-subject">Subject *</label>
            <select id="contact-subject" name="subject" required>
              <option value="">Select a subject</option>
              <option>General Inquiry</option>
              <option>Story Tip or Suggestion</option>
              <option>Editorial Feedback</option>
              <option>Partnership or Media</option>
              <option>Technical Support</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="contact-message">Message *</label>
            <textarea id="contact-message" name="message" required placeholder="How can we help you?"></textarea>
          </div>
          <div class="form-check">
            <input type="checkbox" id="agree-policy" name="agree" required>
            <label for="agree-policy">I have read and agree to the <a href="privacy-policy.html" target="_blank">Privacy Policy</a>, <a href="terms.html" target="_blank">Terms & Conditions</a>, and <a href="disclaimer.html" target="_blank">Disclaimer</a>. *</label>
          </div>
          <button type="submit" class="btn btn--primary" style="width:100%;padding:14px;font-size:0.85rem">Send Message</button>
        </form>
        <div class="form-success" id="formSuccess">
          <div class="success-icon">✓</div>
          <h4>Message Received</h4>
          <p>Thank you for reaching out. Our editorial team will respond within 2 business days.</p>
        </div>
      </div>
    </div>
  </div>`;
}

function getCookieBannerHTML() {
  return `
  <div class="cookie-banner" id="cookieBanner" role="alert">
    <div class="cookie-inner">
      <div class="cookie-text">
        We use cookies to enhance your reading experience, analyze site traffic, and support our editorial mission.
        By continuing to use EcoTrendDaily, you accept our <a href="privacy-policy.html">Privacy Policy</a> and 
        <a href="terms.html">Terms of Use</a>.
      </div>
      <div class="cookie-actions">
        <button class="btn--cookie-accept" id="acceptCookies">Accept All</button>
        <button class="btn--cookie-decline" id="declineCookies">Decline</button>
      </div>
    </div>
  </div>`;
}

function injectSharedComponents() {
  // Header
  const headerMount = document.getElementById('header-mount');
  if (headerMount) headerMount.innerHTML = getHeaderHTML();

  // Footer
  const footerMount = document.getElementById('footer-mount');
  if (footerMount) footerMount.innerHTML = getFooterHTML();

  // Modal
  const modalMount = document.getElementById('modal-mount');
  if (modalMount) modalMount.innerHTML = getModalHTML();

  // Cookie banner
  const cookieMount = document.getElementById('cookie-mount');
  if (cookieMount) cookieMount.innerHTML = getCookieBannerHTML();
}

document.addEventListener('DOMContentLoaded', injectSharedComponents);
