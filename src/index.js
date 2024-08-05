import "./styles/index.scss"


import styles from './styles/module-styles.css';

const h2 = document.querySelector("h2");
h2.classList.add(styles.heading);


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