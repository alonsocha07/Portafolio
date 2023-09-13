const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content')
const marmatdiv = document.getElementById('project-marmat');
const colitasdiv = document.getElementById('project-colitas');

const alerta = document.createElement("p");
alerta.classList.add('subtitle');
alerta.innerText = `I don't have credits in my Azure account, so this project is not hosted right now, I'm working on fixing it.`;
alerta.id = 'alerta'


marmatdiv.addEventListener('click', () => {

    modal.classList.remove('hidden')
    modal.classList.add('visible')

    const title = document.createElement("h4");
    title.classList.add('subtitle');
    title.innerText = 'Marmat';
    
    const img1 = document.createElement("img");
    img1.src = `../Assets/projects/marmat/landing_page.jpg`;
    img1.alt = `Landing page`;
    const p1 = document.createElement("p");
    p1.innerText = `Landing Page`;
    

    const img2 = document.createElement("img");
    img2.src = `../Assets/projects/marmat/Catalogo.jpg`;
    img2.alt = `Catalog`;
    const p2 = document.createElement("p");
    p2.innerText = `Catalog`;


    const img3 = document.createElement("img");
    img3.src = `../Assets/projects/marmat/especifico.jpg`;
    img3.alt = `Specific`;
    const p3 = document.createElement("p");
    p3.innerText = `Specific Condominium`;


    const img4 = document.createElement("img");
    img4.src = `../Assets/projects/marmat/Dashboard.jpg`;
    img4.alt = `Dashboard`;
    const p4 = document.createElement("p");
    p4.innerText = `Dashboard`;


    const img5 = document.createElement("img");
    img5.src = `../Assets/projects/marmat/Mantenimiento_Condominio.jpg`;
    img5.alt = `CRUD`;
    const p5 = document.createElement("p");
    p5.innerText = `CRUD`;




    modalContent.appendChild(alerta);
    modalContent.appendChild(title);
    modalContent.appendChild(p1);
    modalContent.appendChild(img1);
    modalContent.appendChild(p2);
    modalContent.appendChild(img2);
    modalContent.appendChild(p3);
    modalContent.appendChild(img3);
    modalContent.appendChild(p4);
    modalContent.appendChild(img4);
    modalContent.appendChild(p5);
    modalContent.appendChild(img5);

})




colitasdiv.addEventListener('click', () => {

    modal.classList.remove('hidden')
    modal.classList.add('visible')

    const title = document.createElement("h4");
    title.classList.add('subtitle');
    title.innerText = 'Colitas';
    
    const img1 = document.createElement("img");
    img1.src = `../Assets/projects/colitas/landing_page.jpg`;
    img1.alt = `Landing page`;
    const p1 = document.createElement("p");
    p1.innerText = `Landing Page`;
    

    const img2 = document.createElement("img");
    img2.src = `../Assets/projects/colitas/Mascotas.jpg`;
    img2.alt = `Mascotas`;
    const p2 = document.createElement("p");
    p2.innerText = `Pets`;


    const img3 = document.createElement("img");
    img3.src = `../Assets/projects/colitas/MascotaEspecifica.jpg`;
    img3.alt = `Specific`;
    const p3 = document.createElement("p");
    p3.innerText = `Specific Pet`;


    const img4 = document.createElement("img");
    img4.src = `../Assets/projects/colitas/Dashboard.jpg`;
    img4.alt = `Dashboard`;
    const p4 = document.createElement("p");
    p4.innerText = `Dashboard`;


    const img5 = document.createElement("img");
    img5.src = `../Assets/projects/colitas/login.jpg`;
    img5.alt = `login`;
    const p5 = document.createElement("p");
    p5.innerText = `Login`;


    const img6 = document.createElement("img");
    img5.src = `../Assets/projects/colitas/MantenimientoMascota.jpg`;
    img5.alt = `CRUD`;
    const p6 = document.createElement("p");
    p5.innerText = `Pet CRUD`;


    const img7 = document.createElement("img");
    img5.src = `../Assets/projects/colitas/historialCorreo.jpg`;
    img5.alt = `Email history`;
    const p7 = document.createElement("p");
    p5.innerText = `Email history`;


    const img8 = document.createElement("img");
    img5.src = `../Assets/projects/colitas/administrarUsuarios.jpg`;
    img5.alt = `User CRUD`;
    const p8 = document.createElement("p");
    p5.innerText = `User CRUD`;




    modalContent.appendChild(alerta);
    modalContent.appendChild(title);
    modalContent.appendChild(p1);
    modalContent.appendChild(img1);
    modalContent.appendChild(p2);
    modalContent.appendChild(img2);
    modalContent.appendChild(p3);
    modalContent.appendChild(img3);
    modalContent.appendChild(p4);
    modalContent.appendChild(img4);
    modalContent.appendChild(p5);
    modalContent.appendChild(img5);
    modalContent.appendChild(p6);
    modalContent.appendChild(img6);
    modalContent.appendChild(p7);
    modalContent.appendChild(img7);
    modalContent.appendChild(p8);
    modalContent.appendChild(img8);

})




modal.addEventListener('click', function (event) {
    if (event.target == modal) {
        console.log('activoooooo');
        modal.classList.remove('visible')
        modal.classList.add('hidden')
        modalContent.innerHTML="";
    }

})