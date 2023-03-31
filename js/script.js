const button = document.querySelector('.header__menu');
const nav = document.querySelector('.header__nav');
const menuOpen = document.querySelector('.ham');
const menuClose = document.querySelector('.close');
const leng = document.querySelector('.header__leng');
const gh = document.querySelector('#github')


button.addEventListener('click',()=>{
    nav.classList.toggle('active');
    menuClose.classList.toggle('open');
    menuOpen.classList.toggle('close');
});
const btnMode = document.getElementById('mode');
let infoMode = document.querySelector(".header__mode-info");
let body= document.querySelector('.body')
btnMode.addEventListener('click', () => {
    let descrip = infoMode.innerText;
    if (descrip == "Ligth"){
        infoMode.innerHTML = `<p class=".header__mode-info">Dark</p>`;
        body.classList.add('dark');
        body.classList.add('actives');
        localStorage.setItem("darkMode", 'true'); //valor 1
    }else{
        infoMode.innerHTML = `<p class=".header__mode-info">Ligth</p>`;
        body.classList.remove('dark');
        body.classList.remove('actives');;
        localStorage.setItem("darkMode", 'false'); //valor 2     
    };
});

const dataOfmodeLS = () =>{
    if(localStorage.getItem('darkMode') === 'true'){
        infoMode.innerHTML = `<p class=".header__mode-info">Dark</p>`;
        body.classList.add('dark');
        body.classList.add('actives');

    }else{
        infoMode.innerHTML = `<p class=".header__mode-info">Ligth</p>`;
        body.classList.remove('dark');
        body.classList.remove('actives');
    }
};
dataOfmodeLS();

leng.addEventListener('click',() => {
    Swal.fire({
        icon: 'warning',
        title: '<h5 class="sweet__title" >Sorry, in this moment the english version not available </h5>',
        html: '<p class="sweet__text">¡Soon will be available!</p>',
        });
});

gh.addEventListener('click',() => {
    Toastify({
        text: "Estoy arreglando mi Github para una mejor visualización, disculpa las molestias",
        duration: 3500,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center",
        stopOnFocus: true,
        style: {
          background: "#37aa3d",
          fontSize: "20px"
        },
        offset: {
            x: '',
            y: '5em'
          },
        onClick: function(){}
      }).showToast();
})
