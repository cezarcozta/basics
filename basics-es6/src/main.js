/*class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = "Cesar";
    }

    mostraUser(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}
MinhaLista.mostraUser();*/
/*
class TodoList {
    constructor() {
        this.todos = [];
    }

    static addTodo() {
        this.todos.push('novo todo');
        console.log(this.todos);
    }
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(2,2));
*/

/*Modolo 1 Exercicio 1
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        if(this.admin === true){
            return true;
        }else{
            return false;
        }
    }
}
class Admin extends Usuario {
    constructor(){
        super();
        this.admin = true;
    }

}
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
*/
/*Modolo 1 Exercicio 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   
const nArr = usuarios.map(function(item){
    return item.idade;
});
console.log(nArr);

const nArr2 = usuarios.filter(function(item){
    return item.idade > 18 && item.empresa === 'Rocketseat';
});
console.log(nArr2);

const nArr3 = usuarios.find(function(item){
    return item.empresa === 'Google';
});
console.log(nArr3);

const nArr4 = usuarios.map(function(usuario){
    return { ...usuario, idade: usuario.idade * 2 };
}).filter(function(usuario){
    return usuario.idade <= 50;
});

console.log(nArr4);*/

/*Modolo 1 Exercicio 3 
const arr = [1, 2, 3, 4, 5];
//normal
const newArr = arr.map(function(item) {
    return item + 10;
});
console.log(newArr);
//arrow
const newArr2 = arr.map(item => item + 10);
console.log(newArr2);
//normal
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
console.log(mostraIdade(usuario));
//arrow
const mostraIdade2 = () => usuario.idade;
console.log(mostraIdade2(usuario));

const nome = "Diego";
const idade = 23;
//normal
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
//arrow
const mostraUsuario2 = () => usuario;
console.log(mostraUsuario2());
//normal
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}
//arrow
const promise2 = () => new Promise((resolve, reject) => resolve());
*/
/*Modolo 1 Exercicio 4 
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome, endereco: {cidade, estado}} = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

function mostraInfo2({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo2({ nome: 'Diego', idade: 23 }));
*/

/*Modolo 1 Exercicio 5
const arr = [1, 2, 3, 4, 5, 6];

const [x,...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params){
    return params.reduce((total,prox) => total + prox);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, nome: 'Lontras'};
console.log(usuario2);
console.log(usuario3);
*/
/*Modolo 1 Exercicio 6
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
//template literals
console.log(`O usuário ${usuario} possui ${idade} anos`);
*/
/*Modolo 1 Exercicio 7

const nome = 'Diego';
const idade = 23;

const usuario = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};

const usuario = {
    nome,
    idade,
    empresa: 'rocket',
};

import { soma } from './funcoes';
console.log(soma(2,2));*/

/*Modolo 2 Exercicio 1
import ClasseUsuario from './funcoes';
ClasseUsuario.info();

import { idade }  from './funcoes';
console.log(idade);

import Usuario, {idade as idadeUsuario} from './funcoes';*/
/*
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK')}, 2000);
});

async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();

const executaPromiseArrow = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromiseArrow();

import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (error) {
            console.warn('Erro na API');
        }
        
    }
}

Api.getUserInfo('cezarcozta');*/
import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]')
        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('CARREGANDO'));
            loadingEl.setAttribute('id', 'loading');
            
            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0) {
            return;
        }

        this.setLoading(true);
        try {
            const response = await api.get(`/repos/${repoInput}`);
            const {name, description, html_url, owner: {avatar_url}} = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });

            this.inputEl.value = '';

            this.render();
        } catch (error) {
            alert('O Repositório não existe');
        }
        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        });
    }
}

new App();