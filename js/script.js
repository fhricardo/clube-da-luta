const foto = document.getElementById('fotoGrande')
const titulo = document.getElementById('nome')
const Desc = document.getElementById('desc')
const nome = [
    'Tyler Durden',
    'Narrador',
    'Angel Face',
    'Marla Singer'
]
const desc = [
    'É apresentado como um alter ego do protagonista do filme, personagem de Edward Norton, que permanece sem nome durante toda a história',
    'O Narrador é um personagem fictício que aparece como protagonista e antagonista do romance Clube da Luta',
    'Angel Face, um homem que se junta ao Fight Club. É um homem muito leal ao Projeto Mayhem, uma espécie de grupo de vândalos que ele e outros causaram.',
    'É uma mulher misteriosa que aparece em todas as reuniões, fumando no fundo da sala.'
]
const arquivo = [
    'tyler-durden.webp',
    'narrator.webp',
    'angel-face.webp',
    'marla-singer.webp'
]
console.log(arquivo)

function mostraFoto(index) {
    foto.src = 'assets/' + arquivo[index]
    console.log(foto.src = 'assets/' + arquivo[index])
    titulo.innerHTML = nome[index]
    Desc.innerHTML = desc[index]
}