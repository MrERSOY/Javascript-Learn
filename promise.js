console.log("Ilk console");

function getUser() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({ username: "mehmet" });
        }, 2000);
    }); 
}

function getUserAdresses(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(''))
            //resolve(["ankara", "mugla", "eskisehir"]);
        }, 1000);
    });
}

function getRestaurants(adresses) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["A restaurant", "B restaurant", "C restaurant"]);
        }, 1000);
    });
}

getUser()
    .then((user) => getUserAdresses(user.username))
    .then((adresses) => getRestaurants(adresses))
    .then((openRestaurant) =>
        document.body.append("Acik restoranlar: ", openRestaurant.toString())
    )
    .catch((error) => {
        console.log(error);
    });

const user = getUser();
const adresses = getUserAdresses(user.username);
const openRestaurant = getRestaurants(adresses);
document.body.append("Acik restoranlar: ", openRestaurant.toString())

console.log("Son console");