const tabs = document.querySelectorAll(".tab");
//console.log(tabs);

const panels = document.querySelectorAll(".panel");

const onTabClick = (e) => {
  //console.log(123);
  // console.log(e.target);

  //Deactivate all tabs
  tabs.forEach((tab) => {
    // console.log(tab.children[0]);
    tab.children[0].classList.remove("border-softRed", "border-b-4");
  });

  //Hide all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  //Activate a new tab & panel based on the target
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  //console.log(classString);
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
};

//Tabs menu event listener
tabs.forEach((tab) => {
  // console.log(tab);
  tab.addEventListener("click", onTabClick);
});
