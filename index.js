//calculating squares from devloper.mozilla
const results = document.querySelector("#results");

function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult}\n`;
    }
    results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#Calculate");
const clearBtn = document.querySelector("#Clear");

//calculateBtn.addEventListener("click", calculate);
//clearBtn.addEventListener("click", () => (results.textContent = ""));

//using for of loop
const cats = ["Leopards", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
}

const catss = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

for (let i = 0; i < catss.length; i++) {
    if (i === catss.length - 1) {
        //end of the array
        myFavoriteCats += `and ${catss[i]}.`;
    } else {
        myFavoriteCats += `${catss[i]}, `;
    }
}
//for (const cat1 of catss) {
//    myFavoriteCats += `${cat1}, `;
//}

console.log(myFavoriteCats)


const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975"
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]},`;
            break;
        }
    }
    if (para.textContent === "") {
        para.textContent = "Contact not found.";
    }
});