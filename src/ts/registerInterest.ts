const registerInterestBtn: Element = document.querySelector(
	"#register-interest-btn"
)!;
const closeModalBtn: Element = document.querySelector("#close-modal")!;
const modalBlur: Element = document.querySelector("#modal-blur")!;
const body: Element = document.querySelector("body")!;
const header: Element = document.querySelector("header")!;
const main: Element = document.querySelector("main")!;

registerInterestBtn.addEventListener("click", () => {
	header.classList.toggle("blurred");
	main.classList.toggle("blurred");
	modalBlur.classList.toggle("modal-active");
});

closeModalBtn.addEventListener("click", () => {
	header.classList.toggle("blurred");
	main.classList.toggle("blurred");
	modalBlur.classList.toggle("modal-active");
});
