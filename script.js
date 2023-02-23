"use strict";

// Code animation
const codeBox = document.querySelector("#code-box");
const brackets = codeBox.querySelectorAll(".bracket");
const keys = codeBox.querySelectorAll(".key");
const values = codeBox.querySelectorAll(".value");
const rubButton = document.querySelector(".btn--run");

rubButton.addEventListener("click", () => {
  brackets.forEach((bracket) => {
    bracket.classList.add("font-white");
  });
  const offset = 100;
  keys.forEach((key, index) => {
    setTimeout(() => {
      key.classList.add("font-white");
      values[index].classList.add("color-value");
    }, offset + index * 300);
  });

  rubButton.classList.remove("btn--run--animation");
});

const skills = [
  { name: "Python", percentage: "90%" },
  { name: "CSS", percentage: "90%" },
  { name: "JavaScript", percentage: "70%" },
  { name: "HTML", percentage: "70%" },
  { name: "UI/UX", percentage: "70%" },
  { name: "Salesforce Development", percentage: "60%" },
];

const skillCodeContainer = document.querySelector(".skill-code");
const skillContainers = document.querySelectorAll(".skill");
const statusUpdateComponent = skillCodeContainer.querySelector(".status");
statusUpdateComponent.textContent = "";
const skillRunButton = document.querySelector(".btn-skill-run");
const wires = document.querySelectorAll(".wire");
const routers = document.querySelectorAll(".routers");
const skillSection = document.querySelector(".grid--skill");

function loadSkillPercentage(isActualLoad) {
  if (isActualLoad) {
    statusUpdateComponent.textContent = "SUCCESS";
    skillSection.classList.remove("hide");
    skillRunButton.classList.add("btn--run--animation");
  }
  setTimeout(() => {
    skillContainers.forEach((container, index) => {
      const skillNameComponent = container.querySelector(".skill__name");
      const skillPercentageComponent =
        container.querySelector(".skill__percentage");
      const scaleInnerComponent = container.querySelector(
        ".scale__inner-container"
      );
      if (isActualLoad) {
        skillPercentageComponent.textContent = skills[index].percentage;
        scaleInnerComponent.style.width = skills[index].percentage;
        skillNameComponent.textContent = skills[index].name;
      } else {
        skillPercentageComponent.textContent = "0%";
        scaleInnerComponent.style.width = 0;
        skillNameComponent.textContent = "Null";
      }
    });
  }, 500);
}

loadSkillPercentage(false);

function resetWiresRouters() {
  wires.forEach((wire, index) => {
    const classToTest = `wire--${index + 1}`;
    if (wire.classList.contains(classToTest))
      wire.classList.remove(classToTest);
    if (!routers[index].classList.contains("hide"))
      routers[index].classList.add("hide");
  });
}

skillRunButton.addEventListener("click", () => {
  skillRunButton.classList.remove("btn--run--animation");
  loadSkillPercentage(false);
  resetWiresRouters();
  statusUpdateComponent.textContent = "";
  wires.forEach((wire, index) => {
    const offset = 500;
    setTimeout(() => {
      const classToBeAdded = `wire--${index + 1}`;
      wire.classList.add(classToBeAdded);
    }, offset + index * 4.5 * offset);
  });

  routers.forEach((router, index) => {
    const offset = 500;
    setTimeout(() => {
      router.classList.remove("hide");
    }, offset + index * 5 * offset);
  });
  setTimeout(() => {
    loadSkillPercentage(true);
  }, 4500);
});

// navigation menu animation

// const navLinks = document.querySelectorAll(".navigation__list__link");

// navLinks.forEach((menuItem) => {
//   menuItem.addEventListener("mouseover", (e) => {
//     e.target.classList.add("font-gradient");
//     if (e.target.classList.contains("font-menu-item"))
//       e.target.classList.remove("font-menu-item");
//   });

//   menuItem.addEventListener("mouseout", (e) => {
//     if (e.target.classList.contains("font-gradient"))
//       e.target.classList.remove("font-gradient");
//     e.target.classList.add("font-menu-item");
//   });
// });

//
