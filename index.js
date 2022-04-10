const url = 'https://api.github.com/users/birobirobiro'
const button = document.querySelector('.btn')

fetch(url).then(
    response => response.json()
).then(
    data =>{
        writeData(data)
    }
).catch(
    error => console.error(error)
)

function writeData (dados){
    document.querySelector('.user').textContent = dados.login;
    document.querySelector('.seguidores').textContent = dados.followers;
    document.querySelector('.seguindo').textContent = dados.following
    document.querySelector('.repositorios').textContent = dados.public_repos
    document.querySelector('.company').textContent = dados.company
    document.querySelector('.localizacao').textContent = dados.location
}


