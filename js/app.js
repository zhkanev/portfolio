const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;

function scrollToTop() {
	rootElement.scrollTo({
	top: 0,
	behavior: "smooth"
	});
}

scrollToTopBtn.addEventListener("click", scrollToTop);
