const works = document.querySelector("#works");

const projects = [
  {
    image: "./media/tonic.png",
    title: "Multi-Post Stories Gain+Glory",
    languages: ["Ruby on Rails", "CSS", "JavScript", "HTML"],
  },

  {
    image: "./media/yoga.png",
    title: "Multi-Post Stories Gain+Glory",
    languages: ["Ruby on Rails", "CSS", "JavScript", "HTML"],
  },

  {
    image: "./media/multipost.png",
    title: "Multi-Post Stories Gain+Glory",
    languages: ["Ruby on Rails", "CSS", "JavScript", "HTML"],
  },

  {
    image: "./media/printing.png",
    title: "Multi-Post Stories Gain+Glory",
    languages: ["Ruby on Rails", "CSS", "JavScript", "HTML"],
  },

  {
    image: "./media/printing.png",
    title: "Multi-Post Stories Gain+Glory",
    languages: ["Ruby on Rails", "CSS", "JavScript", "HTML"],
  },

  {
    image: "./media/printing.png",
    title: "Multi-Post Stories Gain+Glory",
    languages: ["Ruby on Rails", "CSS", "JavScript", "HTML"],
  },
];

const projectsInfo = [
  {
    id: 1,
    image: "./media/5G-Security-in-an-IoT-Architecture.jpg",
    title: "Multi-Post Stories Gain+Glory",
    languages: ["Ruby on Rails", "CSS", "JavScript", "HTML"],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
  },

  {
    id: 2,
    image: "./media/5G-Security-in-an-IoT-Architecture.jpg",
    title: "Multi-Post Stories Gain+Glory",
    languages: [
      "Codekit",
      "Github",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
  },

  {
    id: 3,
    image: "./media/5G-Security-in-an-IoT-Architecture.jpg",
    title: "Multi-Post Stories Gain+Glory",
    languages: ["Ruby on Rails", "CSS", "JavScript", "HTML"],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
  },

  {
    id: 4,
    image: "./media/5G-Security-in-an-IoT-Architecture.jpg",
    title: "Multi-Post Stories Gain+Glory",
    languages: [
      "Codekit",
      "Github",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
  },

  {
    id: 5,
    image: "./media/5G-Security-in-an-IoT-Architecture.jpg",
    title: "Multi-Post Stories Gain+Glory",
    languages: ["Ruby on Rails", "CSS", "JavScript", "HTML"],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
  },

  {
    id: 6,
    image: "./media/5G-Security-in-an-IoT-Architecture.jpg",
    title: "Multi-Post Stories Gain+Glory",
    languages: [
      "Codekit",
      "Github",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
  },
];

projects.forEach((project) => {
  works.innerHTML += `
    <article class="work">
      <div class="work-img-wrap">
        <img
          src="${project.image}"
          alt="first project screenshot"
          class="work-image"
        />
      </div>
      <h3 class="work-title">${project.title}</h3>
      <ul class="language-tags">
        <li class="tag">${project.languages[0]}</li>
        <li class="tag">${project.languages[1]}</li>
        <li class="tag">${project.languages[2]}</li>
        <li class="tag">${project.languages[3]}</li>
      </ul>
      <button class="work-link"> See Project </button>
    </article> `;
});

projectsInfo.forEach((projectInfo) => {
  works.innerHTML += `
    <article class="work-details">
    <span class="details-close-button"><img src="https://img.icons8.com/material-outlined/24/ffffff/delete-sign.png" alt="work details image"/></span>
     <div class='details-content-sm'>
      <div class="work-details-img-wrap">
        <img
          src="${projectInfo.image}"
          alt="first project screenshot"
          class="work-details-image"
        />
      </div>
      <h3 class="work-details-title">${projectInfo.title}</h3>
      <ul class="language-tags">
        <li class="tag">${projectInfo.languages[0]}</li>
        <li class="tag">${projectInfo.languages[1]}</li>
        <li class="tag">${projectInfo.languages[2]}</li>
        <li class="tag">${projectInfo.languages[3]}</li>
      </ul>
      <p class="work-details-info">
        ${projectInfo.details}
      </p>
      <div class="details-links">
        <a href="#" class="details-link"> See Live </a>
        <a href="#" class="details-link"> See Source </a>
      </div>
     </div> 
     <div class="details-content-lg">
       <div class="work-details-img-wrap">
         <img
           src="${projectInfo.image}"
           alt="first project screenshot"
           class="work-details-image"
         />
       </div>
       <div class="details-top">
         <h3 class="work-details-title-lg">${projectInfo.title}</h3>
         <div class="details-links-lg">
          <a href="#" class="details-link-lg"> See Live </a>
          <a href="#" class="details-link-lg"> See Source </a>
         </div>
       </div>
       <ul class="language-tags">
        <li class="tag">${projectInfo.languages[0]}</li>
        <li class="tag">${projectInfo.languages[1]}</li>
        <li class="tag">${projectInfo.languages[2]}</li>
        <li class="tag">${projectInfo.languages[3]}</li>
      </ul>
      <p class="work-details-info">
        ${projectInfo.details}
      </p>
      </div>
    </article>
    `;
});
