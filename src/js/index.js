import '../scss/main.scss';



fetch('https://api.github.com/repos/izabelazmujdzin/business-card')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const {name, description, homepage, html_url} = repo;
        const repositoryList = document.querySelector('.list--js');
        const myTemplate = `<li>
            ${name} </li>; <li> ${description}</li>; <li> <a href="${homepage}" title="link do strony">see here<\a></li>
            <li> <a href="${html_url}" title="link do repozytorium na githubie">code<\a></li>`;
        repositoryList.innerHTML += myTemplate;
    }
})

.catch(error => {
    console.log('error');
})