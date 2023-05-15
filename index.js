console.log("Ilk console");

function getUser() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject("Error in getUser");
            //resolve({ username: "mehmet" });
        }, 2000);
    }); 
}

function getUserAdresses(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["ankara", "mugla", "eskisehir"]);
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

async function displayRestaurants() {
    try {
        const user = await getUser();
        const adresses = await getUserAdresses(user.username);
        const openRestaurant = await getRestaurants(adresses);
        document.body.append("Acik restoranlar: ", openRestaurant.toString())  
    } catch (error) {
        console.log("Error icerisinde: ", error);
    }
}

displayRestaurants();

console.log("Son console");