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

        console.log(this.repositories)
    }
}

new App()