export function animateText(ev, interval = 50) {
  function removeMd(md) {
    return md.replace(
      /([_*~`]| {2,}\n|\n\n+)|(?:!\[(.*?)\]\((.*?)\)|\[(.*?)\]\((.*?)\))/g,
      "$2$4",
    );
  }

  if (!ev.target.getAttribute("data-text")) {
    ev.target.setAttribute("data-text", ev.target.innerHTML);
  }
  if (ev.target.getAttribute("data-animate") === "1") {
    return;
  }
  ev.target.setAttribute("data-animate", "1");
  const orig = removeMd(ev.target.getAttribute("data-text")).replace(
    "&amp;",
    "&",
  );
  const steps = orig.length;

  const genRand = (pos = 0, len = null) =>
    orig
      .substring(pos, len)
      .split(" ")
      .map((x) => rand(x.length))
      .join(" ");
  const random = genRand(0, orig.length);

  ev.target.innerHTML = random;

  for (let i = 0; i <= steps; i++) {
    setTimeout(() => {
      ev.target.innerHTML = orig.substring(0, i) + genRand(i, orig.length);
      //console.log(ev.target.innerHTML)

      if (i === steps) {
        ev.target.setAttribute("data-animate", "0");
      }
    }, interval * i);
  }
}

export function animateSection(interval = 50) {
  return (el) => {
    for (const e of el.target.getElementsByClassName("animate-section")) {
      animateText({ target: e }, interval);
    }
  };
}

export default function updateActiveTab() {
  const currentPath = window.location.pathname;
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach((tab) => {
    const tabPath = tab.getAttribute("href");
    if (tabPath === currentPath) {
      tab.classList.add("active-tab");
    } else {
      tab.classList.remove("active-tab");
    }
  });
}

let data;

export async function loadData() {
  if (!data) {
    const response = await fetch("/projects.json");
    data = await response.json();
  }
  return data;
}
