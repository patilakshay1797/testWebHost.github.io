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

loadProjects();

function aboutUsObserverFunc() {
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

// aboutUsObserverFunc();
