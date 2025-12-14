const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

function enviar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const whats = `19995937457`
   

    if (nome === '' || email === '' || mensagem === '' || data === '' || hora === '') {
        alert('Preencha todos os campos');
        return;
    }

    let mensagemFormatada = `Olá, Bom dia! Eu gostaria de marcar um horário com você.
    Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}\nData: ${data}\nHora: ${hora}`;
    window.open(`https://wa.me/${whats}?text=${encodeURIComponent(mensagemFormatada)}`);
}

const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav ul');

menuIcon.addEventListener('mousedown', () => {
    nav.classList.toggle('active');
});
