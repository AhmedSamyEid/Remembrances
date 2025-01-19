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

fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let evening = "";
    for (let i = 0; i < data[ "أذكار المساء"].length; i++) {
      evening += `
        <li><span>${data[ "أذكار المساء"][i].content}</span></li>

      `;
    }
    document.getElementById("evening-List").innerHTML = evening;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let remembrance = "";
    for (let i = 0; i < data[ "أذكار بعد السلام من الصلاة المفروضة"].length; i++) {
      remembrance += `
        <li><span>${data[ "أذكار بعد السلام من الصلاة المفروضة"][i].content}</span></li>

      `;
    }
    document.getElementById("remembrance-List").innerHTML = remembrance;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let rosaries = "";
    for (let i = 0; i < data[ "تسابيح"].length; i++) {
      rosaries += `
        <li><span>${data["تسابيح"][i].content}</span></li>

      `;
    }
    document.getElementById("rosaries-List").innerHTML = rosaries;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let sleeping = "";
    for (let i = 0; i < data["أذكار النوم"].length; i++) {
      sleeping += `
        <li><span>${data[ "أذكار النوم"][i].content}</span></li>

      `;
    }
    document.getElementById("sleeping-List").innerHTML = sleeping;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let Wake = "";
    for (let i = 0; i < data[ "أذكار الاستيقاظ"].length; i++) {
      Wake += `
        <li><span>${data[ "أذكار الاستيقاظ"][i].content}</span></li>

      `;
    }
    document.getElementById("Wake-up supplications").innerHTML = Wake;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let quranic = "";
    for (let i = 0; i < data[ "أدعية قرآنية"].length; i++) {
      quranic += `
        <li><span>${data[ "أدعية قرآنية"][i].content}</span></li>

      `;
    }
    document.getElementById("quranic-List").innerHTML = quranic;
  });

  fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((res) => res.json())
  .then((data) => {
    let prophets = "";
    for (let i = 0; i < data[  "أدعية الأنبياء"].length; i++) {
      prophets += `
        <li><span>${data[  "أدعية الأنبياء"][i].content}</span></li>

      `;
    }
    document.getElementById("prophets-List").innerHTML = prophets;
  });
