class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form')

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = (event) => this.addRepository(event)
    }

    addRepository(event){
        event.preventDefault();

        this.repositories.push({
            name: '',
            description: "http://wilian.com.br",
            avatar_url: "www.con.br"
        })
        this.render()
    }

    render(){
        this.listEl.innerHtml = ''

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)
        })
    }
}

new App()
