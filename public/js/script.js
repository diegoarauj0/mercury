const formElement = document.querySelector("form");

if (formElement !== null) {
	const submitButtonElement = document.querySelector('button[type="submit"]');
	let disabled = true;

	function validateForm() {
		disabled = !formElement.checkValidity();
		submitButtonElement.disabled = disabled;
		if (disabled) {
			return submitButtonElement.classList.remove("valid");
		}

		submitButtonElement.classList.add("valid");
	}
	validateForm();
	setInterval(() => {
		validateForm();
	}, 100);
} else {
	Toastify({
		text: "URL encurtado com sucesso",
		duration: 3000,
		newWindow: true,
		close: true,
		gravity: "top",
		position: "right",
		avatar: "/public/images/success.png",
		stopOnFocus: true,
		style: {
			background: "#051B11",
			color: "#75B798",
		},
	}).showToast();
	
	const copyButtonElement = document.querySelector("button.copy");
	const copyInputElement = document.querySelector("input.copy");

	copyButtonElement.addEventListener("click", () => {
		navigator.clipboard.writeText(copyInputElement.value);
	});
}
