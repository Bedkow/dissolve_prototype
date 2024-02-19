const menuTrigger: HTMLElement = document.querySelector("#menu__trigger")!;
const mobileNav: HTMLElement = document.querySelector("#menu__nav--mobile")!;
const CTAs: NodeListOf<Element> = document.querySelectorAll(".CTA");
const navLinksMobile: NodeListOf<Element> =
	document.querySelectorAll(".nav-link--mobile");

mobileNav.classList.add("hidden");
mobileNav.style.visibility = "hidden";

const toggleMobileMenu = () => {
	menuTrigger?.classList.toggle("active");
	mobileNav?.classList.toggle("active");
	if (mobileNav?.classList.contains("active")) {
		CTAs.forEach((el: Element) => {
			el.setAttribute("tabindex", "-1");
		});
		navLinksMobile.forEach((el: Element) => {
			el.setAttribute("tabindex", "0");
		});
	} else {
		CTAs.forEach((el: Element) => {
			el.setAttribute("tabindex", "0");
		});
		navLinksMobile.forEach((el: Element) => {
			el.setAttribute("tabindex", "-1");
		});
	}

	if ((mobileNav.style.visibility = "hidden")) {
		mobileNav.style.visibility = "visible";
	} else {
		// prevent clicking on hamburger during animation
		menuTrigger.style.pointerEvents = "none";
		setTimeout(() => {
			mobileNav.style.visibility = "hidden";

			//allow clicking on hamburger
			menuTrigger.style.pointerEvents = "auto";
		}, 500);
	}
};

menuTrigger?.addEventListener("click", () => {
	toggleMobileMenu();
});

menuTrigger?.addEventListener("keypress", (e: KeyboardEvent) => {
	e.key === "Enter" ? toggleMobileMenu() : null;
});
