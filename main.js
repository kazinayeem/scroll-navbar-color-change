window.onscroll = () => {
  const isScroll = window.scrollY;
  if (isScroll >= 500) {
    document.querySelector("button").classList.add("show")
    document.getElementById("nav").classList.add('addcls');
  } else {
    document.querySelector("button").classList.remove("show")
    document.getElementById("nav").classList.remove('addcls');
  }
};
