console.log("hah");

const button = document.getElementById("submit")
const img = document.getElementById("result-img")
const result = document.getElementById("result-text");

button.addEventListener("click", function () {


	// Dap an nhan duoc cua 3 cau hoi
	const a1 = document.getElementById("q1").value;
	const a2 = document.getElementById("q2").value;
	const a3 = document.getElementById("q3").value;

     // kiem tra dap an roi in ra cau tra loi phu hop
	if ( a1 == 2 & a2 == 1 & a3 == 2) {

		img.src = "img1.jbeg.webp";
		result.textContent = "Your are an Alien";
	} else {
		if (a1 == 1 & a2 == 2 & a3 == 1) {
			img.src = "img2.jbeg";

			result.textContent = "Your are a bizarre";
		} else {
			img.src = "img3.jbeg";

			result.textContent = "Your are just a normal person";
		}
	}
});
