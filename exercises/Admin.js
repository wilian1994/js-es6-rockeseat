class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha, true)
        this.admin = true
    }

}