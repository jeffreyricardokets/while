let colors = ["yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
    console.log(colors[i])
    i++;
}
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

colors.forEach(e => console.log(e))

//How many lines does my for loop and my while loop take? while = 5 for = 3 foreach = 1
//How many lines does my forEach method take? = 1
//foreach is easier because you see directly what is happing

let dexter = { skinColor: "brown", Eyes: "dark", height: "1,60cm", school: "Fakkel", age: 10 };

for (const property in dexter) {
    console.log(`${property}: ${dexter[property]}`)
}