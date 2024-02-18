const menuTrigger: any = document.querySelector("#menu__trigger");
const mobileNav: any = document.querySelector("#menu__nav--mobile");

mobileNav.classList.add("hidden");

menuTrigger?.addEventListener("click", async (e: any) => {
	console.log("menu trigger clicked");
	e.currentTarget?.classList.toggle("active");
	mobileNav?.classList.toggle("active");

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
