window.onload = () => {
  let collectionWrapper = document.getElementById("collection-wrapper");
  // let tabGalleryContent = document.getElementById("v-pills-tabContent");
  let collectionCards = [
    {
      id: "collection-1",
      text: "Collection 1",
      image: "hot-drinks.png",
      active: "active",
      show: "fade show",
    },
    {
      id: "collection-2",
      text: "Collection 2",
      image: "hot-drinks.png",
      active: "non-active",
      show: "fade",
    },
    {
      id: "collection-3",
      text: "Collection 3",
      image: "hot-drinks.png",
      active: "non-active",
      show: "fade",
    },
  ];
  collectionCards.map((card) => {
    let sliderCard = `
    <div class="col-md-6 mt-3">
    <div
    class="nav-link category-link ${card.active}"
    id="${card.id}-tab"
    data-bs-toggle="pill"
    data-bs-target="#${card.id}"
    type="button"
    role="tab"
    aria-controls="${card.id}"
    aria-selected="true"
    onclick="getCategoryName('${card.id}','${card.text}');"
  >
    <div class="category-img-div">
      <img
        src="./assets/images/${card.image}"
        width="270"
        height="124"
        title="${card.text}"
        alt="${card.text}"
      />
    </div>
    <div class="category-name">
      <h2>${card.text}</h2>
    </div>
  </div>
</div>
    </div>`;

  //   let tabSlider = ` <div
  //   class="tab-pane ${card.show} ${card.active}"
  //   id="${card.id}"
  //   role="tabpanel"
  //   aria-labelledby="${card.id}-tab"
  // >
  //   <div class="row">
  //        <div class="col-md-6 mt-3">
  //       <div class="category-card">
  //         <div class="category-card-img-div">
  //           <img
  //             src="./assets/images/slider/test.png"
  //             width="282"
  //             height="159"
  //             title=""
  //             alt=""
  //           />
  //         </div>
  //       </div>
  //   </div>
  //   </div>`;

    collectionWrapper.insertAdjacentHTML("beforeend", sliderCard);
    // tabGalleryContent.insertAdjacentHTML("beforeend", tabSlider);
  });
};

function getCategoryName(id, name) {
  let categoryTitle = document.getElementById("collection-title");
  let categoryLinks = Array.from(
    document.getElementsByClassName("category-link")
  );
  categoryLinks.map((link) => {
    link.classList.remove("active");

    if (link.id === `${id}-tab`) {
      link.classList.remove("non-active");
      link.classList.add("active");
    }
  });
  categoryTitle.textContent = name;
}

/*******************************************************/

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    slideShowWrapper.style.display = "none";
  }
});


  function fullScreenSlides(){
    const docElement = document.documentElement;
    if (docElement.requestFullscreen) {
      docElement.requestFullscreen();
    } else if (docElement.mozRequestFullScreen) {
      docElement.mozRequestFullScreen();
    } else if (docElement.webkitRequestFullscreen) {
      docElement.webkitRequestFullscreen();
    } else if (docElement.msRequestFullscreen) {
      docElement.msRequestFullscreen();
    }
  }


 let slideIndex = 1;
let autoPlayTimer;
let slideShowWrapper = document.querySelector('.slideShow-wrapper');
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(autoPlayTimer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(autoPlayTimer);
  showSlides(slideIndex = n);
  slideShowWrapper.style.display = "block";
  fullScreenSlides();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  autoPlayTimer = setTimeout(() => {
    showSlides(slideIndex += 1);
  }, 8000);
}















/**************/

function loadLanguageFile(lang) {
  return fetch(lang + '.json')
    .then(response => response.json())
    .then(data => translateContent(data));
}

function translateContent(data) {
  const elements = document.getElementsByClassName('translate');
  Array.from(elements).forEach(element => {
    const key = element.getAttribute('data-key');
    if (data.hasOwnProperty(key)) {
      element.textContent = data[key];
    }
  });
}

function toggleLanguage() {
  const lang = getLanguagePreference();
  const newLang = lang === 'en' ? 'ar' : 'en';
  loadLanguageFile(newLang);
  setLanguagePreference(newLang);
}

function setLanguagePreference(lang) {
  document.cookie = `lang=${lang}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function getLanguagePreference() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'lang') {
      return value;
    }
  }
  return null;
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLanguagePreference() || 'en';
  loadLanguageFile(lang);

  document.getElementById('toggle-lang').addEventListener('click', toggleLanguage);
});