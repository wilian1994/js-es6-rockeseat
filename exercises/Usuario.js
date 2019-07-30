class Usuario {
    constructor(email, senha, admin){
        this.email = email;
        this.senha = senha;
        this.admin = admin;
    }

    isAdmin(){
        return this.admin
    }
}