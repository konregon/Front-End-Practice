const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  let closestSection = sections[0];
  let closestDistance = Math.abs(currentScroll - closestSection.offsetTop);

  sections.forEach((section) => {
    const distance = Math.abs(currentScroll - section.offsetTop);
    if (distance < closestDistance) {
      closestSection = section;
      closestDistance = distance;
    }
  });

  closestSection.scrollIntoView({
    behavior: "smooth",
  });
});
