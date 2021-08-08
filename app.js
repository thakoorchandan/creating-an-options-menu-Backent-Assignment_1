const readInput = require("readline");

const input = readInput.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

let books = ["Harry Potter", "Atomic Habits"];

input.setPrompt("Please select an option: 1 - Show all books, 2 - Add a new book, 3 - Quit\n");
input.prompt();

input.on("line", (number) => {
	if (number == 1) {
		console.table(books);
	}
	else if (number == 2) {
		input.question("Please enter the name of book\n", (name) => {
			books.push(name);
			console.log(`Book has been added successfully!`)
			input.prompt();
		});
	} else if (number == 3) {
		input.question("Are you sure, you want to exit? Press Y to quit\n", (sure) => {
			if (sure == "y" || sure == "Y") {
				input.close();
			} else {
				input.prompt();
			}
		});
	} else {
		console.log(`You have selected an invalid entry so please press 1, 2 or 3\n`);
	}
})


input.on("close", () => {
	console.log("Bye Bye!");
})
