const registerInterestBtn: HTMLElement = document.querySelector(
	"#register-interest-btn"
)!;
const closeModalBtn: HTMLElement = document.querySelector("#close-modal")!;
const modalBlur: HTMLElement = document.querySelector("#modal-blur")!;
const modal: any = document.querySelector("#modal")!;
const header: HTMLElement = document.querySelector("header")!;
const main: HTMLElement = document.querySelector("main")!;
const nameInput: HTMLElement = document.querySelector("#name-input")!;
const nameContainer: HTMLElement = document.querySelector(
	"#modal-header__name-container"
)!;

registerInterestBtn.addEventListener("click", () => {
	header.classList.toggle("blurred");
	main.classList.toggle("blurred");
	modalBlur.classList.toggle("modal-active");
	modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
	header.classList.toggle("blurred");
	main.classList.toggle("blurred");
	modalBlur.classList.toggle("modal-active");
	modal.close();
});

nameInput.addEventListener("input", (e: any) => {
	nameContainer.textContent = e.target.value;
});
