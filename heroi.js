class heroi {
    constructor(nome, idade, tipo ){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        
    }

     atacar(){
        let ataque
        if (this.tipo == "mago"){
            ataque = "magia"
        }else if(this.tipo == "guerreiro"){
            ataque = "espada"
        }else if(this.tipo == "monge"){
            ataque = "artes maciais"
        }else if(this.tipo == "ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} ${this.nome}, atacou usando ${ataque}`)
    }
}

let rei = new heroi("Artur", 25, "guerreiro")
rei.atacar()