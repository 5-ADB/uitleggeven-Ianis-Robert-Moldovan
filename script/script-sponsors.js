const sponsorlijst = [
  { id: 1, 
    type: "big", 
    info: { 
      img: "hubo.png", 
      url: "https://www.hubo.be" },
    visible: false,
},

  {
    id: 2,
    type: "big",
    info: {
      img: "vandamme.png",
      url: "https://www.vandamme-aanhangwagens.be/"},
    visible: true,
  },
  {
    id: 3,
    type: "big",
    info: { img: "logoIchtegem.png", url: "https://www.ichtegem.be"},
    visible: true,
  },
  {
    id: 3,
    type: "big",
    info: { img: "Lisalyn.png", url: "https://lisalyn.be/" },
    visible: true,
  },
  {
    id: 4,
    type: "middle",
    info: { img: "psychio.png", url: "https://www.google.be" },
    visible: true,
  },
  {
    id: 5,
    type: "middle",
    info: { img: "youreal.png", url: "https://www.google.be" },
    visible: true,
  },
  {
    id: 6,
    type: "middle",
    info: { img: "KristofDeJaegher-Defaeye.png", url: "https://www.google.be" },
    visible: true,
  },
  {
    id: 7,
    type: "small",
    info: { img: "wit.png", url: "https://www.google.be" },
    visible: true,
  },
  {
    id: 8,
    type: "small",
    info: { img: "SBB.png", url: "https://www.google.be" },
    visible: true,
  },
  {
    id: 9,
    type: "small",
    info: { img: "okay.png", url: "https://www.google.be" },
    visible: true,
  },
  {
    id: 10,
    type: "small",
    info: { img: "logge.jpg", url: "https://www.google.be" },
    visible: true,
  },
];

sponsorlijst[0].visible = false;

const big = document.querySelector("#big");
const middle = document.querySelector("#middle");
const small = document.querySelector("#small");

function sponsorToevoegen(sponsor, section) {
  if (sponsor.visible) {
    const divNieuweSponsor = document.createElement("div")
    divNieuweSponsor.style.backgroundImage = `url('.figuren/sponsors/samsung.png')`
    section.appendChild(divNieuweSponsor)
    divNieuweSponsor.addEventListener("click", () => {
      openInNewTab(sponsor.info.url)
    })
  }
}

sponsorlijst
  .filter((item) => item.type == "big")
  .forEach((sponsor) => {
    const dv = document.createElement("div");
    dv.style.backgroundImage = `url('./figuren/sponsors/${sponsor.info.img}')`;
    big.appendChild(dv);
    dv.addEventListener("click", () => {
      openInNewTab(sponsor.info.url);
    });
  });

sponsorlijst
  .filter((item) => item.type == "middle")
  .forEach((sponsor) => {
    const dv = document.createElement("div");
    dv.style.backgroundImage = `url('./figuren/sponsors/${sponsor.info.img}')`;
    middle.appendChild(dv);
    dv.addEventListener("click", () => {
      openInNewTab(sponsor.info.url);
    });
  });

sponsorlijst
  .filter((item) => item.type == "small")
  .forEach((sponsor) => {
    const dv = document.createElement("div");
    dv.style.backgroundImage = `url('./figuren/sponsors/${sponsor.info.img}')`;
    small.appendChild(dv);
    dv.addEventListener("click", () => {
      openInNewTab(sponsor.info.url);
    });
  });

function openInNewTab(url) {
  window.open(url, "_blank").focus();
}
