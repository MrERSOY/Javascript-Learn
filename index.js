console.log('Ilk console');

function getUser() {
    console.log("getUser bodysi icerisinde");

setTimeout(() => {
    console.log('setTimeout icerisinde');
    return { username: "mehmet" };
}, 2000);
}

function getUserAdresses(username, callback) {
    setTimeout(() => {
        callback(["ankara", "mugla", "eskisehir"]);
    }, 1000);
}

function getRestaurants(adresses, callback) {
    setTimeout(() => {
        callback(["A restaurant", "B restaurant", "C restaurant"]);
    }, 1000);
}

getUser((user) => {
    getUserAdresses(user.username, (adresses) => {
        getRestaurants(adresses, (openRestaurants) => {
            document.body.append("Acik restauranlar: " , openRestaurants.toString());
        });
    });
});


console.log('Son console');
