  const links = document.querySelectorAll('.links');
  const currentPath = window.location.pathname.split("/").pop(); 

  links.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });