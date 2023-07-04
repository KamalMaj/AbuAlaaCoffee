window.onload = () => {
  let categoryWrapper = document.querySelector(".category-wrapper");
  let tabSliderContent = document.getElementById("v-pills-tabContent");
  // let tabSliderContentMob = document.getElementById("v-pills-tabContent-mob");
  let categoryCards = [
    {
      id: "hot-drinks",
      name: "Hot Drinks",
      image: "hot-drinks.png",
      active: "active",
      show: "fade show",
      translation: "hotDrinks",
      items: [
        {
          id: 1,
          name: "Coffee",
          price: "0.50",
          image: "test.png",
          translation: "coffee",
        },
        {
          id: 2,
          name: "Nescafe",
          price: "0.75",
          image: "test.png",
          translation: "nescafe",
        },
        {
          id: 3,
          name: "hot Chocklate",
          price: "0.75",
          image: "test.png",
          translation: "hotChocklate",
        },
        {
          id: 4,
          name: "cappuccino",
          price: "0.75",
          image: "test.png",
          translation: "cappuccino",
        },
        {
          id: 5,
          name: "karak tea",
          price: "0.50",
          image: "test.png",
          translation: "karakTea",
        },
        {
          id: 6,
          name: "Tea",
          price: "0.25",
          image: "test.png",
          translation: "tea",
        },
        {
          id: 7,
          name: "Milk Tea",
          price: "0.35",
          image: "test.png",
          translation: "milkTea",
        },
        {
          id: 8,
          name: "sahlab",
          price: "1.00",
          image: "test.png",
          translation: "sahlab",
        },
        {
          id: 9,
          name: "herbs",
          price: "0.25",
          image: "test.png",
          translation: "herbs",
        },
        {
          id: 10,
          name: "Espresso shot",
          price: "1.00",
          image: "test.png",
          translation: "espressoShot",
        },
        {
          id: 11,
          name: "Espresso doubble shot",
          price: "1.50",
          image: "test.png",
          translation: "espressoDoubbleShot",
        },
        {
          id: 12,
          name: "Ginger, lemon and honey",
          price: "1.00",
          image: "test.png",
          translation: "gingerLemonhoney",
        },
        {
          id: 13,
          name: "hot nutella",
          price: "1.00",
          image: "test.png",
          translation: "hotNutella",
        },
        {
          id: 14,
          name: "hot oreo",
          price: "1.00",
          image: "test.png",
          translation: "hotOreo",
        },
        {
          id: 15,
          name: "hot kinder",
          price: "1.00",
          image: "test.png",
          translation: "hotKinder",
        },
        {
          id: 16,
          name: "hot arabic ice cream",
          price: "1.00",
          image: "test.png",
          translation: "hotArabicIceCream",
        },
        {
          id: 17,
          name: "hot Ferrero Roche",
          price: "1.00",
          image: "test.png",
          translation: "hotFerreroRoche",
        },
      ],
    },
    {
      id: "cocktails",
      name: "cocktails",
      image: "cocktails.png",
      active: "non-active",
      show: "fade",
      translation: "cocktails",
      items: [
        {
          id: 1,
          name: "Abu Alaa natural cocktail",
          price: "1.50",
          image: "test.png",
          translation: "naturalCocktail",
        },
        {
          id: 2,
          name: "Cocktail with cream and nuts",
          price: "3.00",
          image: "test.png",
          translation: "cocktailCream",
        },
        {
          id: 3,
          name: "pieces Cocktail",
          price: "2.00",
          image: "test.png",
          translation: "cocktailPieces",
        },
        {
          id: 4,
          name: "AbuAlaa cocktail Pieces",
          price: "2.50",
          image: "test.png",
          translation: "cocktailPiecesAbuAlaa",
        },
        {
          id: 5,
          name: "Tropical cocktail Pieces",
          price: "2.50",
          image: "test.png",
          translation: "tropicalcocktailPieces",
        },
        {
          id: 6,
          name: "tropical Cocktail",
          price: "1.50",
          image: "test.png",
          translation: "tropicalCocktail",
        },
        {
          id: 7,
          name: "shami Cocktail",
          price: "1.50",
          image: "test.png",
          translation: "shamiCocktail",
        },
        {
          id: 8,
          name: "Signature Layers",
          price: "2.50",
          image: "test.png",
          translation: "signatureLayers",
        },
        {
          id: 9,
          name: "fakhfakhina",
          price: "2.50",
          image: "test.png",
          translation: "fakhfakhina",
        },
        {
          id: 10,
          name: "emprator",
          price: "2.50",
          image: "test.png",
          translation: "emprator",
        },
        {
          id: 11,
          name: "owar Al Galb",
          price: "2.50",
          image: "test.png",
          translation: "owarGalb",
        },
        {
          id: 12,
          name: "Alkayef",
          price: "2.50",
          image: "test.png",
          translation: "alkayef",
        },
      ],
    },
    {
      id: "milk-shake",
      name: "milkshake",
      image: "milk-shake.png",
      active: "non-active",
      show: "fade",
      translation: "milkShake",
      items: [
        {
          id: 1,
          name: "lotus",
          price: "1.50",
          image: "test.png",
          translation: "lotus",
        },
        {
          id: 2,
          name: "kinder",
          price: "1.50",
          image: "test.png",
          translation: "kinder",
        },
        {
          id: 3,
          name: "Nutella",
          price: "1.50",
          image: "test.png",
          translation: "nutella",
        },
        {
          id: 4,
          name: "Ferrero Roche",
          price: "1.50",
          image: "test.png",
          translation: "ferreroRoche",
        },
        {
          id: 5,
          name: "Arabic Ice cream",
          price: "1.50",
          image: "test.png",
          translation: "ArabicIceCream",
        },
        {
          id: 6,
          name: "Cerelac",
          price: "1.50",
          image: "test.png",
          translation: "cerelac",
        },
        {
          id: 7,
          name: "Einstein",
          price: "1.50",
          image: "test.png",
          translation: "einstein",
        },
        {
          id: 8,
          name: "girls hair",
          price: "1.50",
          image: "test.png",
          translation: "girlsHair",
        },
        {
          id: 9,
          name: "cheese cake",
          price: "1.50",
          image: "test.png",
          translation: "cheeseCake",
        },
        {
          id: 10,
          name: "Oreo",
          price: "1.50",
          image: "test.png",
          translation: "oreo",
        },
      ],
    },
    {
      id: "avocado",
      name: "avocado",
      image: "avocado.png",
      active: "non-active",
      show: "fade",
      translation: "avocado",
      items: [
        {
          id: 1,
          name: "Avocado",
          price: "2.00",
          image: "test.png",
          translation: "ordinaryAvocado",
        },
        {
          id: 2,
          name: "Avocado with cream and nuts",
          price: "2.50",
          image: "test.png",
          translation: "avocadoCream",
        },
        {
          id: 3,
          name: "Avocado and mango",
          price: "2.50",
          image: "test.png",
          translation: "avocadoMango",
        },
        {
          id: 4,
          name: "Avocado and passion fruit",
          price: "2.50",
          image: "test.png",
          translation: "avocadoPassionFruit",
        },
        {
          id: 5,
          name: "Avocado and shami berries",
          price: "2.50",
          image: "test.png",
          translation: "avocadoShamiBerries",
        },
        {
          id: 6,
          name: "Avocado and raspberry",
          price: "2.50",
          image: "test.png",
          translation: "avocadoRaspberry",
        },
        {
          id: 7,
          name: "Avocado, dates, ginger and nuts",
          price: "2.50",
          image: "test.png",
          translation: "avocadoDatesGingerNuts",
        },



        
      ],
    },

    {
      id: "mixed-drinks",
      name: "mixed drinks",
      image: "mixed-redbull.png",
      active: "non-active",
      show: "fade",
      translation: "coldDrinks",
      items: [
        {
          id: 1,
          name: "mix redbull",
          price: "2.50",
          image: "test.png",
          translation: "mixRedBull",
        },
        {
          id: 2,
          name: "mix Bom Bom",
          price: "2.00",
          image: "test.png",
          translation: "mixBomBom",
        },
        {
          id: 3,
          name: "mix 7up",
          price: "1.50",
          image: "test.png",
          translation: "mix7up",
        },
      ],
    },
    {
      id: "fresh-juices",
      name: "fresh juices",
      image: "fresh-juices.png",
      active: "non-active",
      show: "fade",
      translation: "freshJuices",
      items: [
        {
          id: 1,
          name: "Banana and milk",
          price: "1.00",
          image: "test.png",
          translation: "BananaMilk",
        },
        {
          id: 2,
          name: "Banana ,dates and milk",
          price: "1.50",
          image: "test.png",
          translation: "BananaDatesMilk",
        },
        {
          id: 3,
          name: "Banana ,Mango and Orange",
          price: "1.00",
          image: "test.png",
          translation: "BananaMangoOrange",
        },
        {
          id: 4,
          name: "Banana ,strawberry and milk",
          price: "1.00",
          image: "test.png",
          translation: "BananaStrawberryMilk",
        },
        {
          id: 5,
          name: "Banana ,nutella and milk",
          price: "1.50",
          image: "test.png",
          translation: "BananaNutellaMilk",
        },
        {
          id: 6,
          name: "strawberry",
          price: "1.00",
          image: "test.png",
          translation: "strawberry",
        },
        {
          id: 7,
          name: "strawberry and milk",
          price: "1.50",
          image: "test.png",
          translation: "strawberryMilk",
        },
        {
          id: 8,
          name: "strawberry and kiwi",
          price: "1.25",
          image: "test.png",
          translation: "strawberryKiwi",
        },
        {
          id: 9,
          name: "blueberry shami",
          price: "1.50",
          image: "test.png",
          translation: "blueberryShami",
        },
        {
          id: 10,
          name: "Shami berries, strawberry and pomegranate",
          price: "1.50",
          image: "test.png",
          translation: "berryStrawberryPome",
        },
        {
          id: 11,
          name: "Shami berries, banana and orange",
          price: "1.50",
          image: "test.png",
          translation: "berryBananaOrange",
        },
        {
          id: 12,
          name: "Shami berries and pomegranate",
          price: "1.50",
          image: "test.png",
          translation: "berryPomegranate",
        },
        {
          id: 13,
          name: "Shami berries and mango",
          price: "1.50",
          image: "test.png",
          translation: "berryMango",
        },
        {
          id: 14,
          name: "Apple",
          price: "1.00",
          image: "test.png",
          translation: "apple",
        },
        {
          id: 15,
          name: "Apple and Milk",
          price: "1.00",
          image: "test.png",
          translation: "appleMilk",
        },
        {
          id: 16,
          name: "Apple, orange and lemon",
          price: "1.00",
          image: "test.png",
          translation: "appleOrangeLemon",
        },
        {
          id: 17,
          name: "Apple and banana",
          price: "1.00",
          image: "test.png",
          translation: "appleBanana",
        },
        {
          id: 18,
          name: "pineapple",
          price: "1.50",
          image: "test.png",
          translation: "pineapple",
        },
        {
          id: 19,
          name: "Pineapple and orange",
          price: "1.50",
          image: "test.png",
          translation: "pineappleOrange",
        },
        {
          id: 20,
          name: "Pineapple and kiwi",
          price: "1.50",
          image: "test.png",
          translation: "pineappleKiwi",
        },
        {
          id: 21,
          name: "pinacolada (Pineapple and coconut)",
          price: "1.50",
          image: "test.png",
          translation: "pinacolada",
        },
        {
          id: 22,
          name: "Pineapple, mango and kiwi",
          price: "1.50",
          image: "test.png",
          translation: "pineappleMangoKiwi",
        },
        {
          id: 23,
          name: "grapefruit",
          price: "1.50",
          image: "test.png",
          translation: "grapefruit",
        },
        {
          id: 24,
          name: "kiwi",
          price: "1.50",
          image: "test.png",
          translation: "kiwi",
        },
        {
          id: 25,
          name: "kiwi and lemon",
          price: "1.25",
          image: "test.png",
          translation: "kiwiLemon",
        },
        {
          id: 26,
          name: "Vitamin C (lemon, orange, kiwi)",
          price: "1.25",
          image: "test.png",
          translation: "vitaminC",
        },
        {
          id: 27,
          name: "lemon",
          price: "1.25",
          image: "test.png",
          translation: "lemon",
        },
        {
          id: 28,
          name: "Lemon and mint",
          price: "1.25",
          image: "test.png",
          translation: "lemonMint",
        },
        {
          id: 29,
          name: "Lemon, orange and basil",
          price: "1.25",
          image: "test.png",
          translation: "lemonOrangeBasil",
        },
        {
          id: 30,
          name: "Lemon, kiwi and mint",
          price: "1.25",
          image: "test.png",
          translation: "lemonKiwiMint",
        },
        {
          id: 31,
          name: "Lemon, ginger and honey",
          price: "1.50",
          image: "test.png",
          translation: "lemonGingerHoney",
        },
        {
          id: 32,
          name: "mango",
          price: "1.00",
          image: "test.png",
          translation: "mango",
        },
        {
          id: 33,
          name: "Mango Farghali",
          price: "1.50",
          image: "test.png",
          translation: "mangoFarghali",
        },
        {
          id: 34,
          name: "Mango and passion fruit",
          price: "1.50",
          image: "test.png",
          translation: "mangoPassionFruit",
        },
        {
          id: 35,
          name: "Mango, strawberry and kiwi",
          price: "1.25",
          image: "test.png",
          translation: "mangoStrawberryKiwi",
        },
        {
          id: 36,
          name: "cranberry",
          price: "1.50",
          image: "test.png",
          translation: "cranberry",
        },
        {
          id: 37,
          name: "Cranberry, strawberry and milk",
          price: "1.50",
          image: "test.png",
          translation: "cranberryStrawberryMilk",
        },
        {
          id: 38,
          name: "Cranberry and banana",
          price: "1.50",
          image: "test.png",
          translation: "cranberryBanana",
        },
        {
          id: 39,
          name: "Cranberry, orange and pineapple",
          price: "1.50",
          image: "test.png",
          translation: "cranberryOrangePineapple",
        },
        {
          id: 40,
          name: "Mix berry (raspberry and raspberry with pomegranate and strawberry)",
          price: "1.50",
          image: "test.png",
          translation: "mixBerry",
        },
        {
          id: 41,
          name: "carrot",
          price: "1.25",
          image: "test.png",
          translation: "carrot",
        },
        {
          id: 42,
          name: "Carrot and beetroot",
          price: "1.25",
          image: "test.png",
          translation: "carrotBeetroot",
        },
        {
          id: 43,
          name: "Carrot, orange and apple",
          price: "1.25",
          image: "test.png",
          translation: "carrotOrangeApple",
        },
        {
          id: 44,
          name: "Orange",
          price: "1.25",
          image: "test.png",
          translation: "orange",
        },
        {
          id: 45,
          name: "Orange and beetroot",
          price: "1.25",
          image: "test.png",
          translation: "orangeBeetroot",
        },
        {
          id: 46,
          name: "Orange and passion fruit ",
          price: "1.50",
          image: "test.png",
          translation: "orangePassionFruit",
        },
        {
          id: 47,
          name: "pomegranate",
          price: "1.50",
          image: "test.png",
          translation: "pomegranate",
        },
        {
          id: 48,
          name: "Pomegranate, strawberry and lemon",
          price: "1.50",
          image: "test.png",
          translation: "pomegranateStrawberryLemon",
        },
        {
          id: 49,
          name: "Pomegranate, pineapple and kiwi",
          price: "1.50",
          image: "test.png",
          translation: "pomegranatepineappleKiwi",
        },
        {
          id: 50,
          name: "Pomegranate and guava",
          price: "1.50",
          image: "test.png",
          translation: "pomegranateGuava",
        },
        {
          id: 51,
          name: "guava",
          price: "1.00",
          image: "test.png",
          translation: "guava",
        },
        {
          id: 52,
          name: "Guava with milk",
          price: "1.00",
          image: "test.png",
          translation: "guavaMilk",
        },
        {
          id: 52,
          name: "Guava, mango and kiwi",
          price: "1.25",
          image: "test.png",
          translation: "guavaMangoKiwi",
        },
        {
          id: 53,
          name: "watermelon",
          price: "1.00",
          image: "test.png",
          translation: "watermelon",
        },
        {
          id: 54,
          name: "Watermelon and mint",
          price: "1.00",
          image: "test.png",
          translation: "watermelonMint",
        },
        {
          id: 55,
          name: "Watermelon and lemon",
          price: "1.00",
          image: "test.png",
          translation: "watermelonLemon",
        },
        {
          id: 56,
          name: "Watermelon and orange",
          price: "1.00",
          image: "test.png",
          translation: "watermelonOrange",
        },
        {
          id: 57,
          name: "melon",
          price: "1.00",
          image: "test.png",
          translation: "melon",
        },
        {
          id: 58,
          name: "melon and milk",
          price: "1.00",
          image: "test.png",
          translation: "melonMilk",
        },
        {
          id: 59,
          name: "Peach",
          price: "1.50",
          image: "test.png",
          translation: "peach",
        },
        {
          id: 60,
          name: "Peach, orange and kiwi",
          price: "1.50",
          image: "test.png",
          translation: "peachOrangeKiwi",
        },
        {
          id: 61,
          name: "Cherry, loquat and peach",
          price: "1.50",
          image: "test.png",
          translation: "cherryLoquatPeach",
        },
      ],
    },
    {
      id: "fresh-salads",
      name: "fresh Salads",
      image: "fresh-salad.jpg",
      active: "non-active",
      show: "fade",
      translation: "freshSalads",
      items: [
        {
          id: 1,
          name: "Abu Ala'a fruit salad",
          price: "3.50",
          image: "test.png",
          translation: "fruitSalad",
        },
        {
          id: 2,
          name: "tropical fruit Salad",
          price: "3.50",
          image: "test.png",
          translation: "tropicalSalad",
        },
        {
          id: 3,
          name: "avocado Salad",
          price: "3.50",
          image: "test.png",
          translation: "avocadoSalad",
        },
        {
          id: 4,
          name: "nutella Salad",
          price: "3.50",
          image: "test.png",
          translation: "nutellaSalad",
        },
        {
          id: 5,
          name: "family Fruit Salad",
          price: "7.00",
          image: "test.png",
          translation: "familyFruitSalad",
        },
      ],
    },
  ];
  categoryCards.map((cat) => {
    let categoryCard = ` <div class="col-lg-6 col-md-10 col-7 mt-3">
          <div
            class="nav-link category-link ${cat.active}"
            id="${cat.id}-tab"
            data-bs-toggle="pill"
            data-bs-target="#${cat.id}"
            type="button"
            role="tab"
            aria-controls="${cat.id}"
            aria-selected="true"
            onclick="getCategoryName('${cat.id}','${cat.name}');"
          >
            <div class="category-img-div">
              <img
                src="./assets/images/${cat.image}"
                width="270"
                height="124"
                title="${cat.name}"
                alt="${cat.name}"
              />
            </div>
            <div class="category-name">
              <h2 data-translation="${cat.translation}">${cat.name}</h2>
            </div>
          </div>
        </div>`;
    let tabSlider = ` <div
      class="tab-pane ${cat.show} ${cat.active}"
      id="${cat.id}"
      role="tabpanel"
      aria-labelledby="${cat.id}-tab"
    >
      <div class="row">
        ${
          cat.items
            ? cat.items
                .map(
                  (item) => `<div class="col-lg-6 col-12 mt-3">
          <div class="category-card">
            <div class="category-card-img-div">
              <img
                src="./assets/images/items/${item.image}"
                width="282"
                height="159"
                title=""
                alt=""
              />
            </div>
            <div class="category-card-info">
              <span class="item-title" data-translation ="${item.translation}" >${item.name}</span>
              <span class="item-price">${item.price} JD</span>
            </div>
          </div>
        </div>`
                )
                .join("")
            : ""
        }
      </div>
    </div>`;
    categoryWrapper.insertAdjacentHTML("beforeend", categoryCard);
    tabSliderContent.insertAdjacentHTML("beforeend", tabSlider);
  });
};

function getCategoryName(id, name) {
  let categoryTitle = document.getElementById("category-title");
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

const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((star, i) => {
      if (i <= index) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });
  });
});




/*****************/


// Get the elements
// const ratingStars = document.querySelectorAll('.star');
// const messageInput = document.querySelector('.textarea-style');
// const sendButton = document.querySelector('.send-btn');

// Add event listener to the send button
// sendButton.addEventListener('click', () => {
//   console.log('Send');
//   let rating = 0;
//   ratingStars.forEach((star, index) => {
//     if (star.classList.contains('selected')) {
//       rating = index + 1;
//     }
//   });

//   // Get the message
//   const message = messageInput.value;




//   console.log('rating', rating);
//   console.log('message', message);


//   // Prepare the email body
//   const emailSubject = 'Feedback on our services';
//   const emailBody = `Rating: ${rating}\nMessage: ${message}`;

//   // Prepare the email link
//   const emailLink = `mailto:kamalmaj98.km@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

//   // Open the email client
//   window.location.href = emailLink;
// });

// // Add event listener to the star ratings
// ratingStars.forEach((star, index) => {
//   star.addEventListener('click', () => {
//     // Remove the 'selected' class from all stars
//     ratingStars.forEach((s, i) => {
//       if (i <= index) {
//         s.classList.add('selected');
//       } else {
//         s.classList.remove('selected');
//       }
//     });
//   });
// });


// function sendFormByEmail() {
//   var emailInput = document.getElementById('email-input').value;
//   var rating = document.querySelectorAll('.star-rating .star.selected').length;
//   var message = document.querySelector('.textarea-style').value;

//   var subject = 'Feedback Form';
//   var body = 'Email: ' + emailInput + '%0A' +
//              'Rating: ' + rating + '%0A' +
//              'Message: ' + message;
//              console.log('Send');

//   window.location.href = 'mailto:kamalmaj98.km@gmail.com?subject=' + subject + '&body=' + body;
// }

// document.querySelector('.send-btn').addEventListener('click', sendFormByEmail);

