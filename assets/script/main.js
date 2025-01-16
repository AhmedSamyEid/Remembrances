document.getElementById("crescent-moon").onclick = () => {
  if (document.body.classList.contains("crescent-moon")) {
    document.body.classList.remove("crescent-moon");
    document.getElementById("crescent-moon").src =
      "assets/icons/crescent moon.webp";
  } else {
    document.body.classList.add("crescent-moon");
    document.getElementById("crescent-moon").src = "assets/icons/sun.webp";
  }
};

document.getElementById("mnue").onclick = () => {
  if (document.getElementById("nav-bar").classList.contains("opn")) {
    document.getElementById("nav-bar").classList.remove("opn");
  } else {
    document.getElementById("nav-bar").classList.add("opn");
  }
};

fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let morning = "";
    for (let i = 0; i < data["أذكار الصباح"].length; i++) {
      morning += `
        <li><span>${data["أذكار الصباح"][i].content}</span></li>
          
      `;
    }
    document.getElementById("morning-List").innerHTML = morning;
  });


  