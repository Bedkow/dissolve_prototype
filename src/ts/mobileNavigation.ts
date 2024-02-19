const menuTrigger: HTMLElement = document.querySelector("#menu__trigger")!;
const mobileNav: HTMLElement = document.querySelector("#menu__nav--mobile")!;
const CTAs: NodeListOf<Element> = document.querySelectorAll(".CTA");

mobileNav.classList.add("hidden");

menuTrigger?.addEventListener("click", () => {
	menuTrigger?.classList.toggle("active");
	mobileNav?.classList.toggle("active");
	if (mobileNav?.classList.contains("active")) {
		CTAs.forEach((el: Element) => {
			el.setAttribute("tabindex", "-1");
		});
	} else {
		CTAs.forEach((el: Element) => {
			el.setAttribute("tabindex", "0");
		});
	}

	if (mobileNav.classList.contains("hidden")) {
		mobileNav.classList.remove("hidden");
	} else {
		// prevent clicking on hamburger during animation
		menuTrigger.style.pointerEvents = "none";
		setTimeout(() => {
			mobileNav.classList.add("hidden");
			//allow clicking on hamburger
			menuTrigger.style.pointerEvents = "auto";
		}, 500);
	}
});

menuTrigger?.addEventListener("keypress", (e: any) => {
	menuTrigger?.classList.toggle("active");
	mobileNav?.classList.toggle("active");

	if (mobileNav?.classList.contains("active")) {
		CTAs.forEach((el: Element) => {
			el.setAttribute("tabindex", "-1");
		});
	} else {
		CTAs.forEach((el: Element) => {
			el.setAttribute("tabindex", "0");
		});
	}

	if (mobileNav.classList.contains("hidden")) {
		mobileNav.classList.remove("hidden");
	} else {
		// prevent clicking on hamburger during animation
		menuTrigger.style.pointerEvents = "none";
		setTimeout(() => {
			mobileNav.classList.add("hidden");
			//allow clicking on hamburger
			menuTrigger.style.pointerEvents = "auto";
		}, 500);
	}
});
