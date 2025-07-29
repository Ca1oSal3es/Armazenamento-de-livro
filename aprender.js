let livro = parseInt(prompt(' Quantos livros você quer armazenar? '))
let armg
let gurd = []
let guard = []
let armazenar


function mostrar (texto) {

    document.write(texto + "<br>");
} 
   
for (let x = 1; x <= livro; x++) {
let lvr = prompt('Digite o livro ' + x);
gurd.push(lvr)
console.log(gurd)

for (let y= 1; y <= 1; y++ ){
let pag = parseInt(prompt('quantas paginas tem  o livro ' + lvr));
guard.push(pag)
    
}
}

let adicionar = prompt('Você quer adicionar um livro? (sim/não)');

while (adicionar.toLowerCase() === 'sim') {

    let nome = prompt('Qual o nome do livro?');
    gurd.push(nome)
    console.log(gurd)

    adicionar = prompt('Você quer adicionar mais um livro? (sim/não)');
    
    }

for (let v = 0;  v < gurd.length; v++) {
    
mostrar (' o livro ' + gurd[v] + ' tem ' + guard[v] + ' paginas ');

}


