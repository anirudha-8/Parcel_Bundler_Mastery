import "./styles/index.scss"

console.log("changed");
console.log("anirudha bele");
console.log("rohit bele");


if (module.hot) {
    module.hot.accept();
}


const obj = {
    name: "Anirudha",
    details: {
        age: 22,
        status: "unmarried"
    }
}
console.log(obj?.details?.age, obj?.wife?.name);