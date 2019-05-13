const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Selectors
const nav = document.querySelector('header nav'),
  navItems = document.querySelectorAll('header nav a'),
  ctaText = document.querySelector('.cta .cta-text'),
  ctaHeading = document.querySelector('.cta .cta-text h1'),
  ctaButton = document.querySelector('.cta .cta-text button'),
  ctaImage = document.querySelector('.cta #cta-img'),
  topContentH = document.querySelectorAll(
    '.main-content .top-content .text-content h4'
  ),
  topContentP = document.querySelectorAll(
    '.main-content .top-content .text-content p'
  ),
  middleImg = document.querySelector('.main-content #middle-img'),
  bottomContentH = document.querySelectorAll(
    '.main-content .bottom-content .text-content h4'
  ),
  bottomContentP = document.querySelectorAll(
    '.main-content .bottom-content .text-content p'
  ),
  contactH = document.querySelector('.contact h4'),
  contactP = document.querySelectorAll('.contact p'),
  footer = document.querySelector('footer p');

console.log(footer);

// Update HTML

// Nav
navItems[0].innerHTML = siteContent.nav['nav-item-1'];
navItems[1].innerHTML = siteContent.nav['nav-item-2'];
navItems[2].innerHTML = siteContent.nav['nav-item-3'];
navItems[3].innerHTML = siteContent.nav['nav-item-4'];
navItems[4].innerHTML = siteContent.nav['nav-item-5'];
navItems[5].innerHTML = siteContent.nav['nav-item-6'];

// Cta
ctaHeading.innerHTML = siteContent.cta.h1;
ctaButton.innerHTML = siteContent.cta.button;
ctaImage.setAttribute('src', siteContent.cta['img-src']);

// Main Content
topContentH[0].innerHTML = siteContent['main-content']['features-h4'];
topContentP[0].innerHTML = siteContent['main-content']['features-content'];
topContentH[1].innerHTML = siteContent['main-content']['about-h4'];
topContentP[1].innerHTML = siteContent['main-content']['about-content'];

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

bottomContentH[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentP[0].innerHTML = siteContent['main-content']['services-content'];
bottomContentH[1].innerHTML = siteContent['main-content']['product-h4'];
bottomContentP[1].innerHTML = siteContent['main-content']['product-content'];
bottomContentH[2].innerHTML = siteContent['main-content']['vision-h4'];
bottomContentP[2].innerHTML = siteContent['main-content']['vision-content'];

// Contact
contactH.innerHTML = siteContent.contact['contact-h4'];

contactP[0].innerHTML = siteContent.contact.address;
contactP[1].innerHTML = siteContent.contact.phone;
contactP[2].innerHTML = siteContent.contact.email;

// Footer
footer.innerHTML = siteContent.footer.copyright;

// New Content
navItems.forEach(link => {
  link.style.color = 'green';
});

const portfolio = document.createElement('a');
portfolio.setAttribute('src', '#');
portfolio.textContent = 'Portfolio';
portfolio.style.color = 'green';

nav.prepend(portfolio);

const blog = document.createElement('a');
blog.setAttribute('src', '#');
blog.textContent = 'Blog';
blog.style.color = 'green';

nav.appendChild(blog);

// Stretch
const newButton = document.createElement('button');
newButton.innerHTML = 'Press and Hold!';

ctaText.prepend(newButton);

newButton.addEventListener('mousedown', hideImage);

newButton.addEventListener('mouseup', showImage);

function hideImage() {
  const image = document.getElementById('cta-img');

  image.style.visibility = 'hidden';
}

function showImage() {
  const image = document.getElementById('cta-img');

  image.style.visibility = 'visible';
}
