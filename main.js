const url = "http://localhost:5500/api"

function getUser(){

    axios.get(url)
    .then(response => {
        renderAPIData.textContent = JSON.stringify(response.data)
    })
    
    .catch(error => console.log(error))

    }

    getUser();