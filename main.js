const url = "http://localhost:5500/api"

function getUser(){

    axios.get(url)
    .then(response => console.log(response))
    .catch(error => console.log(error))

    }

    getUser();