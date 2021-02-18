function showRandomHello() {
	let name = document.getElementById("div-name");
	let content = document.getElementById("div-content");
	
	let num_entries = Object.keys(hello_worlds).length;
	let found_valid = false;
	while (!found_valid) {
		let rand_index = Math.floor(Math.random() * num_entries);
		var selected = Object.keys(hello_worlds)[rand_index];
	
		if (name.innerText !== selected) {
			found_valid = true;
		}
	}
	
	name.innerHTML = selected;
	content.innerHTML = hello_worlds[selected];
}

window.addEventListener("load", showRandomHello);
document.getElementById("btn-rand").addEventListener("click", showRandomHello);
