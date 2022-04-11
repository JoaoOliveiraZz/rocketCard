const url = 'https://api.github.com/users/birobirobiro';
const button = document.querySelector('.btn');
const colors = ['red', 'green', 'blue', 'purple', 'aquamarine', 'pink', 'gold'];

button.addEventListener('click', () =>{

    var random = Math.floor(Math.random() * 7);
    parseInt(random);

    document.getElementById('card').style.border = `10px solid ${colors[random]}`;

})

fetch(url).then(
    response => response.json()
).then(
    data =>{
        writeData(data);
    }
).catch(
    error => console.error(error)
)

function writeData (dados){
    document.querySelector('.user').textContent = dados.login;
    document.querySelector('.seguidores').textContent = ` ${dados.followers} Seguidores`;
    document.querySelector('.seguindo').textContent = `  ${dados.following} Seguindo`;
    document.querySelector('.repositorios').textContent = `  ${dados.public_repos} repositórios`;
    document.querySelector('.company').textContent = dados.company;
    document.querySelector('.localizacao').textContent = dados.location;
}


