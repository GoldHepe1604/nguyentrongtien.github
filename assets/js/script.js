// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

const reset_color = () => {
  const aboutbtn = document.getElementById("about");
  aboutbtn.style.color = "#C1C1C1";
  const resumebtn = document.getElementById("resume");
  resumebtn.style.color = "#C1C1C1";
  const portfoliobtn = document.getElementById("portfolio");
  portfoliobtn.style.color = "#C1C1C1";
  const aibtn = document.getElementById("ai");
  aibtn.style.color = "#C1C1C1";
  const todaybtn = document.getElementById("today");
  todaybtn.style.color = "#C1C1C1";
  const contactbtn = document.getElementById("contact");
  contactbtn.style.color = "#C1C1C1";
};

import { About } from "./component/about.js";
import { Resume } from "./component/resume.js";
import { Portfolio } from "./component/portfolio.js";
import { AI } from "./component/ai.js";
import { Contact } from "./component/contact.js";
import { Privacy } from "./component/privacy.js";

const aboutbtn = document.getElementById("about");
const Aboutcontent = new About();
Aboutcontent.render();

aboutbtn.addEventListener("click", () => {
  reset_color();
  Aboutcontent.render();
  aboutbtn.style.color = "#FFDB70";
});

const resumebtn = document.getElementById("resume");
const Resumecontent = new Resume();

resumebtn.addEventListener("click", () => {
  reset_color();
  Resumecontent.render();
  resumebtn.style.color = "#FFDB70";
});

const portfoliobtn = document.getElementById("portfolio");
const Portfoliocontent = new Portfolio();

portfoliobtn.addEventListener("click", () => {
  reset_color();
  Portfoliocontent.render();
  portfoliobtn.style.color = "#FFDB70";
});

const aibtn = document.getElementById("ai");
const aicontent = new AI();

aibtn.addEventListener("click", () => {
  reset_color();
  aicontent.render();
  aibtn.style.color = "#FFDB70";
});

const contactbtn = document.getElementById("contact");
const contactcontent = new Contact();

contactbtn.addEventListener("click", () => {
  reset_color();
  contactcontent.render();
  contactbtn.style.color = "#FFDB70";
});

const privacycontent = new Privacy();

var isTPressed = false;
var isGPressed = false;

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 84) {
    isTPressed = true;
  } else if (event.keyCode === 71) {
    isGPressed = true;
  }

  if (isTPressed && isGPressed) {
    privacycontent.render();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 84) {
    isTPressed = false;
  } else if (event.keyCode === 71) {
    isGPressed = false;
  }
});
