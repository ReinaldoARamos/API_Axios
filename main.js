const url = "http://localhost:5500/api"

function getUsers(){

    axios.get(url)
    .then(response => {
        renderAPIData.textContent = JSON.stringify(response.data)
    })
    
    .catch(error => console.log(error))

    }


    function addNewUser(){
        axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    function  getUser() {
        axios.get(`${url}/9`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name
        })
        .catch(error => console.log(error))
    }

    function  deleteUser() {
        axios.delete(`${url}/10`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name
        })
        .catch(error => console.log(error))
    }


    
    const newUser = {
        name: "Reinaldo Ramos",
        avatar: "https://picsum.photos/200/300",
        city: "Rio de Janeiro"
    }

    //getUser();
    getUsers();
    //addNewUser(newUser);
    deleteUser();