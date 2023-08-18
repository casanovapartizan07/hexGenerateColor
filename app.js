const hexes = document.querySelectorAll(".hex"),
	title = document.querySelector(".title"),
	refreshBtn = document.querySelector(".btn-refresh");

function init() {
	hexes.forEach((hex) => {
		const color = generateColor();
		hex.innerText = color;
		hex.style.background = color;
		hex.onclick = () => {
			document.body.style.backgroundColor = color;
			title.innerText = color;
		};
	});
}

function generateColor() {
	return "#" + Math.random().toString(16).substring(2, 8);
}

refreshBtn.onclick = init;

init();

document.addEventListener("mousemove", (e) => {
	const cursor = document.querySelector(".cursor");
	cursor.style.top = e.pageY - 5 + "px";
	cursor.style.left = e.pageX - 5 + "px";
});
