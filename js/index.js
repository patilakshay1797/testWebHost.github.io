let activeNavOption = "Home.html";

async function onLaunch() {
  const mainContainer = document.querySelector("main");
  mainContainer.style.display = "none";

  const homeResponse = await fetch(`./html/${activeNavOption}`);
  const homeHtml = await homeResponse.text();

  document.querySelector("main").innerHTML = homeHtml;
  addEventListenerOnHomeCarasoualButtons();
  const headerResponse = await fetch("./html/HeaderDesktop.html");
  const headerHtml = await headerResponse.text();
  document.querySelector("header").innerHTML = headerHtml;

  const footerResponse = await fetch("./html/FooterDesktop.html");
  const footerHtml = await footerResponse.text();
  document.querySelector("footer").innerHTML = footerHtml;

  // var script = document.createElement("script"); // create a script DOM node
  // script.src = "../js/home.js";
  // document.head.appendChild(script);
  ObserverFunc();

  hideLoadingScreen();
}

// import { homeObserverFunc } from "./home.js";
// import { aboutUsObserverFunc } from "./aboutUs.js";

function removeOpenMobileMenuClass() {
  document
    .querySelector(".mobileMenuContainer")
    .classList.remove("openMobileMenu");

  document
    .querySelector(".mobileMenuContainer")
    .classList.add("closeMobileMenu");
  document
    .querySelector(".appContainer")
    .classList.remove("hideHomeContainerScroll");
  document.querySelector(".burgerIconBtn").classList.remove("crossBurgerBar");
}

async function handleNavBarOptionClick(e) {
  console.log("Nav Bar Click ===> ", e);
  showLoadingScreen();
  if (
    e.target.classList.contains("aboutUsNavButton") ||
    e.target.classList.contains("mobileMenuAboutUs")
  ) {
    const aboutUsResponse = await fetch("./html/AboutUs.html");
    const aboutUsHtml = await aboutUsResponse.text();
    document.querySelector("main").innerHTML = aboutUsHtml;
    addEventListnerOnViewAllProjectsButton();
    activeNavOption = "AboutUs.html";
    // var script = document.createElement("script"); // create a script DOM node
    // script.src = "../js/aboutUs.js";
    // document.head.appendChild(script);
  } else if (
    e.target.classList.contains("homeNavButton") ||
    e.target.classList.contains("mobileMenuHome")
  ) {
    const homeResponse = await fetch("./html/Home.html");
    const homeHtml = await homeResponse.text();
    document.querySelector("main").innerHTML = homeHtml;
    addEventListnerOnViewAllProjectsButton();
    addEventListenerOnHomeCarasoualButtons();
    activeNavOption = "Home.html";
    // loadPageIfNotLoaded("home");
  } else if (
    e.target.classList.contains("projectsNavButton") ||
    e.target.classList.contains("mobileMenuProjects")
  ) {
    const projectsResponse = await fetch("./html/Projects.html");
    const projectsHtml = await projectsResponse.text();
    document.querySelector("main").innerHTML = projectsHtml;
    loadProjects();
    addEventListnerOnViewAllProjectsButton();
    activeNavOption = "Projects.html";
  } else if (
    e.target.classList.contains("contactUsNavButton") ||
    e.target.classList.contains("mobileMenuContactUs")
  ) {
    const contactUsResponse = await fetch("./html/ContactUs.html");
    const contactUsHtml = await contactUsResponse.text();
    document.querySelector("main").innerHTML = contactUsHtml;
    activeNavOption = "ContactUs.html";
  }
  if (e.target.classList.contains("mobileMenuOption")) {
    removeOpenMobileMenuClass();
  }
  scrollToTop();

  ObserverFunc();

  hideLoadingScreen();
}

function handleBurgerIconClick() {
  const isMobileMenuCardOpened = document.querySelector(".openMobileMenu");
  if (isMobileMenuCardOpened) {
    if (document.querySelector(".openMobileMenu"))
      document
        .querySelector(".mobileMenuContainer")
        .classList.remove("openMobileMenu");
    document
      .querySelector(".mobileMenuContainer")
      .classList.add("closeMobileMenu");
    document
      .querySelector(".appContainer")
      .classList.remove("hideHomeContainerScroll");
    document.querySelector(".burgerIconBtn").classList.remove("crossBurgerBar");
  } else {
    if (document.querySelector(".closeMobileMenu"))
      document
        .querySelector(".mobileMenuContainer")
        .classList.remove("closeMobileMenu");
    document
      .querySelector(".mobileMenuContainer")
      .classList.add("openMobileMenu");
    document
      .querySelector(".appContainer")
      .classList.add("hideHomeContainerScroll");
    document.querySelector(".burgerIconBtn").classList.add("crossBurgerBar");
  }
}

function updateSize(e) {
  console.log("Update Size ===> ", e);
}

window.addEventListener("resize", updateSize);

window.onload = (event) => {
  console.log("page is fully loaded");
  // handleNavBarOptionClick({ target: { className: "projectsNavButton" } });
};

function sendEmail(e) {
  const name = document.querySelector("#contactUsFormName");
  const email = document.querySelector("#contactUsFormEmail");
  const phoneNumber = document.querySelector("#contactUsFormNumber");
  const subject = document.querySelector("#contactUsFormSubject");
  const message = document.querySelector("#contactUsFormMessage");
  document.querySelector(".contactUsEmailSendSuccessMsg").style.display =
    "none";
  document.querySelector(".contactUsEmailSendErrMsg").style.display = "none";

  let isFormValid = true;
  if (!name.value) {
    const nameErrMsg = document.querySelector(".contactUsNameErrorMsg");
    nameErrMsg.style.display = "block";
    isFormValid = false;
  }
  if (!email.value) {
    const nameErrMsg = document.querySelector(".contactUsEmailErrorMsg");
    nameErrMsg.style.display = "block";
    isFormValid = false;
  }
  if (!phoneNumber.value) {
    const nameErrMsg = document.querySelector(".contactUsNumberErrorMsg");
    nameErrMsg.style.display = "block";
    isFormValid = false;
  }
  if (!message.value) {
    const nameErrMsg = document.querySelector(".contactUsMsgErrorMsg");
    nameErrMsg.style.display = "block";
    isFormValid = false;
  }

  if (isFormValid) {
    const spinnerLoading = document.querySelector(".contactUsSpinner");
    spinnerLoading.style.display = "block";
    emailjs
      .send("test_vastundya_designs", "template_i212dre", {
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        subject: subject.value,
        message: message.value,
      })
      .then((repsponse) => {
        if (repsponse) {
          spinnerLoading.style.display = "none";
          document.querySelector(
            ".contactUsEmailSendSuccessMsg"
          ).style.display = "block";
        }
      })
      .catch((error) => {
        spinnerLoading.style.display = "none";
        document.querySelector(".contactUsEmailSendErrMsg").style.display =
          "block";
      });
  }
}

function validateContactUsInputField(fieldId, fieldErrClass) {
  const fieldElement = document.querySelector(`#${fieldId}`);
  if (fieldElement.value) {
    document.querySelector(`.${fieldErrClass}`).style.display = "none";
  } else {
    document.querySelector(`.${fieldErrClass}`).style.display = "block";
  }
}

function ObserverFunc() {
  const allTheEleAnimLeftRight = document.querySelectorAll(
    ".intersectionAnimationLeftRight"
  );

  let options = {
    // rootMargin: "-20px",
    threshold: 0.2,
  };
  function callback(e) {
    e.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.animation =
          "aboutUsAniLeftToRight 1s ease-in-out forwards";
      }
    });
  }
  const observer = new IntersectionObserver(callback, options);
  allTheEleAnimLeftRight.forEach((ele) => {
    observer.observe(ele);
  });

  const allTheEleAnimRightLeft = document.querySelectorAll(
    ".intersectionAnimationRightLeft"
  );

  function callback2(e) {
    e.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.animation =
          "aboutUsAniRightToLeft 1s ease-in-out forwards";
      }
    });
  }
  const observer2 = new IntersectionObserver(callback2, options);
  allTheEleAnimRightLeft.forEach((ele) => {
    observer2.observe(ele);
  });
}

// function loadPageIfNotLoaded(pageFileName) {
//   if (!isPageScriptLoaded("pageFileName")) {
//     var script = document.createElement("script"); // create a script DOM node
//     script.src = `../js/${pageFileName}.js`;
//     document.head.appendChild(script);
//   } else {
//     homeObserverFunc();
//   }
// }

// function isPageScriptLoaded(pageFileName) {
//   const allScripts = document.querySelectorAll("script");
//   let isScriptLoaded = false;
//   allScripts.forEach((script) => {
//     let srcOfScript = script.src;
//     let arrayOfUrl = srcOfScript.split("/");
//     const pageToLoad = arrayOfUrl[arrayOfUrl.length - 1];
//     if (pageToLoad == "home.js") isScriptLoaded = true;
//   });
//   return isScriptLoaded;
// }

function loadProjects() {
  const allProjcetsData = [
    {
      projectType: "Residential Banglow",
      client: "Ar. Atul Urne",
      architect: "Design Ethics",
      project: "At nanded City, Rhythm-I, Pune.",
      area: "2860 Sq.ft.",
      floors: "[Ground + 1]",
      url: "../assets/images/AtulUrne1.PNG",
      descreption:
        "We design minimum column with max span of beam and 3.0m cantilever beam at from side.",
    },
    {
      projectType: "Residential Banglow",
      client: "Mr. Praveen Shinde",
      architect: "Design Ethics",
      project: "At nanded City, Rhythm-I, Pune.",
      area: "3100 Sq.ft.",
      floors: "[Ground + 1]",
      url: "../assets/images/PraveenShindeBunglow.PNG",
      descreption:
        "We provide sectional details at each side of view for better clarity to contractor for the work.",
    },
    {
      projectType: "Residential Banglow",
      client: "Mr. Babasaheb Lokhande",
      architect: "Design Ethics",
      project: "At nanded City, Rhythm-II, Pune.",
      area: "2650 Sq.ft.",
      floors: "[Ground + 1]",
      url: "../assets/images/BabasahebBunglow.PNG",
      descreption:
        "We design sloping slab and inclined concrete wall as per the view.",
    },
    {
      projectType: "Residential Banglow",
      client: "Mr. Kestikar",
      architect: "Ar. Atul Urne",
      project: "At nanded City, Pune.",
      area: "3400 Sq.ft.",
      floors: "[Ground + 2]",
      url: "../assets/images/KestikarBunglow.png",
      descreption:
        "Front elevation details and we design RCC planters box and pergolas.",
    },
    {
      projectType: "Residential Banglow",
      client: "Mr. Suraj Purohit",
      architect: "Ar. Deepak Chavan",
      project: "At New Sangavi, Pune.",
      area: "6500 Sq.ft.",
      floors: "[Parking + 4]",
      url: "../assets/images/SurajPurohit.PNG",
      descreption: "we design floating Column at corner side.",
    },
    {
      projectType: "Residential Banglow",
      client: "Om Sai Developer",
      architect: "Ar. Shubham Kotwal",
      project: "At Shirval, Pune.",
      area: "16800 Sq.ft.",
      floors: "[Parking + 5]",
      url: "../assets/images/OmSaiDevelopers1.PNG",
      descreption: "we design floating column for this building.",
    },
    {
      projectType: "Residential Banglow",
      client: "Shitole Developer",
      architect: "Ar. Deepak Chavan",
      project: "At Mahalunje, Pune.",
      area: "21630 Sq.ft.",
      floors: "[Parking + 5]",
      url: "../assets/images/ShitoleDevelopers1.PNG",
    },
    {
      projectType: "Residential Banglow",
      client: "Patil Developers",
      architect: "Ar. Sneha Khuncha",
      project: "At Bhusawal.",
      area: "29450 Sq.ft.",
      floors: "[Parking + 4]",
      url: "../assets/images/PatilDevelopers1.PNG",
    },
    {
      projectType: "Residential Banglow",
      client: "Patil Developers",
      architect: "Ar. Sneha Khuncha",
      project: "At Bhusawal.",
      area: "27800 Sq.ft.",
      floors: "[Parking + 4]",
      url: "../assets/images/PatilDevelopers2.PNG",
    },
    {
      projectType: "Residential Banglow",
      client: "Mr. Ingawale",
      architect: "Ar. Atul Urne",
      project: "At Nanded City, Pune.",
      area: "6000 Sq.ft.",
      floors: "[Ground + 2]",
      url: "../assets/images/Ingawale1.PNG",
    },
    {
      projectType: "Residential Banglow",
      client: "Khedekar Developer",
      architect: "Ar. Shubham Kotalwar",
      project: "At Kothrud, Pune.",
      area: "16000 Sq.ft.",
      floors: "[Parking + 4]",
      url: "../assets/images/KhedekarDeveloper1.PNG",
    },
    {
      projectType: "Lounging Building",
      client: "Syandri Developer",
      architect: "Ar. Atul Urne",
      project: "At Nagav, Alibag",
      area: "25000 Sq.ft.",
      floors: "[Parking + 3]",
      url: "../assets/images/SyandriDeveloper1.PNG",
    },
    {
      projectType: "Residential Building",
      client: "Mr. Vaibhav",
      architect: "Ar. Vaibhav Dhorgude",
      project: "At Raygad",
      area: "4800 Sq.ft.",
      floors: "[Parking + 3]",
      url: "../assets/images/VaibhavDhorgude1.PNG",
    },
  ];

  const parser = new DOMParser();

  let flexDirectionReverse = false;
  allProjcetsData.forEach((project) => {
    let htmlToAdd = "";
    htmlToAdd += `<div class="pro ${
      flexDirectionReverse ? "reverseFlex" : null
    }">
        <div class="proImg ${
          flexDirectionReverse
            ? "intersectionAnimationRightLeft"
            : "intersectionAnimationLeftRight"
        }"><img src="${project.url}"></div>
        <div class="proInfo ${
          flexDirectionReverse
            ? "intersectionAnimationLeftRight"
            : "intersectionAnimationRightLeft"
        }">
          <div class="proType proSpace"><div><i class="fa-solid fa-bars-progress"></i></div><div><div class="proInfoTitle">Project Type</div><div class="proInfoValue">${
            project.projectType
          }</div></div></div>
          <div class="proClient proSpace"><div><i class="fa-solid fa-user"></i></div><div><div class="proInfoTitle">Client</div><div class="proInfoValue">${
            project.client
          }</div></div></div>
          <div class="proArchitect proSpace"><div><i class="fa-solid fa-building-user"></i></div><div><div class="proInfoTitle">Architect</div><div class="proInfoValue">${
            project.architect
          }</div></div></div>
          <div class="proLocation proSpace"><div><i class="fa-solid fa-location-dot"></i></div><div><div class="proInfoTitle">Location</div><div class="proInfoValue">${
            project.project
          }</div></div></div>
          <div class="proArea proSpace"><div><i class="fa-solid fa-ruler-combined"></i></div><div><div class="proInfoTitle">Project Area</div><div class="proInfoValue">${
            project.area
          }</div></div></div>`;
    if (project?.descreption) {
      htmlToAdd += `<div class="proDescription proSpace"><div><i class="fa-solid fa-rectangle-list"></i></i></div><div><div class="proInfoTitle">Description</div><div class="proInfoValue">${project.descreption}</div></div>`;
    }
    htmlToAdd += "</div></div></div>";
    flexDirectionReverse = !flexDirectionReverse;
    const documentNode = parser.parseFromString(htmlToAdd, "text/html");
    const addToElement = document.querySelector(
      ".projectsContainer .allProjectsContainer .allProjects div"
    );

    addToElement.appendChild(
      documentNode.documentElement.querySelector("body div")
    );
  });
  // htmlToAdd += "</div>";
  // const documentNode = parser.parseFromString(htmlToAdd, "text/html");
  // const addToElement = document.querySelector(
  //   ".projectsContainer .allProjectsContainer .allProjects div"
  // );

  // addToElement.appendChild(
  //   documentNode.documentElement.querySelector("body div")
  // );
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

onLaunch().then(() => {
  const allNavBarButtons = document.querySelectorAll(
    "header .headerContainerDesktop ul li"
  );

  allNavBarButtons.forEach((ele) => {
    ele.addEventListener("click", handleNavBarOptionClick);
  });

  document
    .querySelector(".burgerIconBtn")
    .addEventListener("click", handleBurgerIconClick);

  const allMobileNavBarOptions = document.querySelectorAll(
    ".mobileMenuContainer .mobileMenuList .mobileMenuOption"
  );

  allMobileNavBarOptions.forEach((ele) => {
    ele.addEventListener("click", handleNavBarOptionClick);
  });

  const allFooterNavOptionsClick = document.querySelectorAll(
    ".footerContainer .footerCompanyNav .footerServicesList"
  );
  allFooterNavOptionsClick.forEach((ele) => {
    ele.addEventListener("click", handleNavBarOptionClick);
  });
  addEventListnerOnViewAllProjectsButton();
});

function addEventListnerOnViewAllProjectsButton() {
  const allViewAllProjectsButtons = document.querySelectorAll(
    ".homeViewAllProjectsBtnWrapper"
  );
  allViewAllProjectsButtons.forEach((ele) => {
    ele.addEventListener("click", handleNavBarOptionClick);
  });
}

window.addEventListener("scroll", (e) => console.log(e), { passive: true });

function hideLoadingScreen() {
  setTimeout(() => {
    const loadingContainer = document.querySelector(".loaderContainer");
    loadingContainer.style.display = "none";
    const mainContainer = document.querySelector("main");
    mainContainer.style.display = "block";
  }, 1000);
}

function showLoadingScreen() {
  const loadingContainer = document.querySelector(".loaderContainer");
  loadingContainer.style.display = "flex";
  const mainContainer = document.querySelector("main");
  mainContainer.style.display = "none";
}

function scrolldiv() {
  var element = document.querySelector(".homeSubInfoWrapper");
  element.scrollIntoView();
}

function addEventListenerOnHomeCarasoualButtons() {
  // let carousalButtons = document.querySelectorAll(".fa-solid");
  // const allImagesCount = document.querySelectorAll(
  //   ".slideShow .allProjectsImages .homeProjectsCardWrapper"
  // );

  // const imagesCount = allImagesCount.length;
  // let sliderCount = 1;
  // let slider = document.querySelector(".slideShow .allProjectsImages");
  // carousalButtons.forEach((ele) => {
  //   ele.addEventListener("click", (e) => {
  //     const oneContainerImgWidth = document.querySelector(
  //       ".slideShow .allProjectsImages .threeSlideImgWrapper .homeProjectsCardWrapper"
  //     ).offsetWidth;
  //     if (e.target.classList.contains("fa-arrow-right")) {
  //       if (sliderCount < Math.ceil((imagesCount - 3) / 3)) {
  //         slider.style.transform = `translateX(-${
  //           oneContainerImgWidth * 3 * sliderCount +
  //           (sliderCount === 2 ? 480 : 240)
  //         }px)`;
  //         sliderCount++;
  //       } else {
  //         slider.style.transform = "translateX(0)";
  //         sliderCount = 1;
  //       }
  //       // sliderCount++;
  //       // sliderCount++;
  //     }
  //     if (e.target.classList.contains("fa-arrow-left") && sliderCount > 1) {
  //       const oneContainerImgWidth = document.querySelector(
  //         ".slideShow .allProjectsImages .threeSlideImgWrapper .homeProjectsCardWrapper"
  //       ).offsetWidth;
  //       slider.style.transform = `translateX(-${
  //         (sliderCount - 2) * (oneContainerImgWidth * 3) +
  //         (sliderCount === 3 ? 240 : 0)
  //       }px)`;
  //       sliderCount--;
  //       // sliderCount--;
  //       // sliderCount--;
  //     }
  //   });
  // });
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    autoplay: {
      delay: 30000000,
    },

    breakpoints: {
      // when window width is >= 320px
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });
}
