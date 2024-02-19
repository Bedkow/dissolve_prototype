const menuTrigger: HTMLElement = document.querySelector("#menu__trigger")!;
const mobileNav: HTMLElement = document.querySelector("#menu__nav--mobile")!;
const CTAs: NodeListOf<Element> = document.querySelectorAll(".CTA");
const navLinksMobile: NodeListOf<Element> =
	document.querySelectorAll(".nav-link--mobile");

mobileNav.classList.add("hidden");
mobileNav.style.visibility = "hidden";
mobileNav.setAttribute("aria-hidden", "true");

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

	if (mobileNav.classList.contains("hidden")) {
		mobileNav.style.visibility = "visible";
		mobileNav.classList.remove("hidden");
		mobileNav.setAttribute("aria-hidden", "false");
	} else {
		mobileNav.classList.add("hidden");
		// prevent clicking on hamburger during animation
		menuTrigger.style.pointerEvents = "none";
		setTimeout(() => {
			mobileNav.style.visibility = "hidden";
			mobileNav.setAttribute("aria-hidden", "true");
			//allow clicking on hamburger
			menuTrigger.style.pointerEvents = "auto";
		}, 500);
	}
};

menuTrigger?.addEventListener("click", () => {
	return toggleMobileMenu();
});

menuTrigger?.addEventListener("keypress", (e: KeyboardEvent) => {
	return e.key === "Enter" ? toggleMobileMenu() : null;
});
