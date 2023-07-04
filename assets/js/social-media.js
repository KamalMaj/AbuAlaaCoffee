// let socialMediaWrapper = document.getElementById("social-media-wrapper");
// let socialMediaWrapperMob = document.getElementById("social-media-wrapper-mob");
// let socialMedia = "";
// let socialMediaLinks = [
//   {
//     id: "snapchat",
//     icon: "snapchat.svg",
//     href: "https://www.facebook.com/abualaacaffe",
//   },
//   {
//     id: "facebook",
//     icon: "facebook.svg",
//     href: "https://www.facebook.com/abualaacaffe",
//   },
//   {
//     id: "instagram",
//     icon: "instagram.svg",
//     href: "https://www.facebook.com/abualaacaffe",
//   },
// ];
// socialMediaLinks.map((link) => {
//   socialMedia = `<a
//           href="${link.href}"
//           title="${link.id}"
//           class="social-media-link"
//           target="_blank"
//         >
//           <img
//             src="./assets/images/logos/${link.icon}"
//             width="32"
//             height="32"
//             title="${link.id}"
//             alt="${link.id}"
//           />
//         </a>`;
//   socialMediaWrapper.insertAdjacentHTML("beforeend", socialMedia);
//   socialMediaWrapperMob.insertAdjacentHTML("beforeend", socialMedia);
// });


function addSocialMediaLinks() {
  let socialMediaWrapper = document.getElementById("social-media-wrapper");
  let socialMediaWrapperMob = document.getElementById("social-media-wrapper-mob");
  let socialMedia = "";
  let socialMediaLinks = [
    {
      id: "snapchat",
      icon: "snapchat.svg",
      href: "https://www.facebook.com/abualaacaffe",
    },
    {
      id: "facebook",
      icon: "facebook.svg",
      href: "https://www.facebook.com/abualaacaffe",
    },
    {
      id: "instagram",
      icon: "instagram.svg",
      href: "https://www.facebook.com/abualaacaffe",
    },
  ];
  
  if (socialMediaWrapper) {
    socialMediaLinks.forEach((link) => {
      socialMedia = `<a
        href="${link.href}"
        title="${link.id}"
        class="social-media-link"
        target="_blank"
      >
        <img
          src="./assets/images/logos/${link.icon}"
          width="32"
          height="32"
          title="${link.id}"
          alt="${link.id}"
        />
      </a>`;
    
      socialMediaWrapper.insertAdjacentHTML("beforeend", socialMedia);
    });
  }

  if (socialMediaWrapperMob) {
    socialMediaLinks.forEach((link) => {
      socialMedia = `<a
        href="${link.href}"
        title="${link.id}"
        class="social-media-link"
        target="_blank"
      >
        <img
          src="./assets/images/logos/${link.icon}"
          width="32"
          height="32"
          title="${link.id}"
          alt="${link.id}"
        />
      </a>`;
    
      socialMediaWrapperMob.insertAdjacentHTML("beforeend", socialMedia);
    });
  }
}

// Call the function on each page where you want to display the social media links
addSocialMediaLinks();
