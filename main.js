const url = "http://localhost:5500/api"

function getUser(){

    axios.get(url)
    .then(response => {
        renderAPIData.textContent = JSON.stringify(response.data)
    })
    
    .catch(error => console.log(error))

    }

    function addNewUser(){
        axios.post(url, newUser)
        .then(responde => {
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    const newUser = {
        name: "Reinaldo Ramos",
        avatar: "https://picsum.photos/200/300",
        city: "Rio de Janeiro"
    }

    getUser();
    addNewUser(newUser);