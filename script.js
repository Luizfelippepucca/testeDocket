function Images(){ // conectar á api.
fetch('https://picsum.photos/v2/list')
 .then(function(response){
     return response.json();
 })

 .then(function(data){//trazer imagens da api.
        
    for(let i in data){

           
        let imagemExibida = document.getElementById('carousel');
        let img = document.createElement('img');
        img.setAttribute('src',data[i].download_url);
        imagemExibida.appendChild(img)

    };
       
       
    
})
};

window.addEventListener('load', Images);//carregar imagens

let btnNext = document.querySelector('div.nextImage');
let btnPreview = document.querySelector('div.previewImage')

let imagemIndex = 0;

function nextImage (){//passar imagem
    let  carrosel = document.querySelectorAll('#carousel img');
    
    imagemIndex++;
    carrosel[imagemIndex].classList.add('passarImg'); 
    console.log(imagemIndex);
};

btnNext.addEventListener('click',nextImage);

function voltarImage(){//voltar imagem
   let carrosel = document.querySelectorAll('#carousel img');
  
    imagemIndex--;
    carrosel[imagemIndex].classList.remove('passarImg');
    console.log(imagemIndex);
   
}
btnPreview.addEventListener('click',voltarImage);

//selecionando campos
let nome = document.getElementById('name'),
email = document.getElementById('mail'),
tel1 = document.getElementById('phone'),
tel2 = document.getElementById('phone2');


//campos que recebem dados.
let campoName = document.getElementById('recebeName'),
campoMail = document.getElementById('recebeMail'),
campoTel1 = document.getElementById('recebePhone'),
campoTel2 = document.getElementById('nodata'),
btn2 = document.getElementById('btn');




function validar(){
let recebeName = nome.value;
let recebeMail = email.value;
let recebeTel1 = tel1.value;
let recebeTel2 = tel2.value;


 
let exibirName = campoName.innerHTML= recebeName;
let exibirMail = campoMail.innerHTML= recebeMail;
let exibirTel1 = campoTel1.innerHTML= recebeTel1;
let exibirTel2 = campoTel2.innerHTML= recebeTel2;

let arroba = recebeMail.indexOf('@');

let com = recebeMail.indexOf('.com');



if( recebeName ===''|| recebeMail ===''|| recebeTel1 === ''){

    let feedback = document.querySelectorAll('small');
     feedback.forEach(function(valor,index){
        valor.setAttribute( 'class' , 'mostrarAviso');
          if(valor.classList.contains('mostrarAviso')=== false){
              valor.classList.remove('esconderAviso');
              valor.classList.add('mostrarAviso');
          };
            
          console.log(valor);
     });

    exibirName = campoName.innerHTML= 'Nome do usuario';
    exibirMail = campoMail.innerHTML= 'email do usuario';
    exibirTel1 = campoTel1.innerHTML= 'telefone do usuario';
    exibirTel2 = campoTel2.innerHTML= 'telefone do usuario';
     
       
    }else if(recebeName.length >=10 && arroba !== -1  && recebeMail.length >=10 && com !== -1 && recebeTel1.length >= 11){
   
    console.log(recebeName.length);
    exibirMail = campoMail.innerHTML= recebeMail;
    exibirName = campoName.innerHTML= recebeName;
    exibirTel1 = campoTel1.innerHTML= recebeTel1;

    feedback = document.querySelectorAll('small');
     feedback.forEach(function(valor,index){
        valor.setAttribute( 'class' , 'mostrarAviso');
          if(valor.classList.contains('mostrarAviso')=== true){
              valor.classList.add('esconderAviso');
              valor.classList.remove('mostrarAviso');
          };
            
          console.log(valor);
     });
   

          if(recebeTel2 === ''){
            exibirTel2 = campoTel2.innerHTML= 'Não informado';
          }else{
            exibirTel2 = campoTel2.innerHTML= recebeTel2;
          };

          if(btn2.classList.contains('enviar')===true){
              btn2.classList.remove('enviar');
              btn2.classList.add('sucesso');
              console.log(btn2);
          };

      
     
    }else{
        console.log(arroba);
        console.log('dados inseridos invalidos');
        exibirName = campoName.innerHTML= 'Preencha corretamente';
        exibirTel1 = campoTel1.innerHTML= 'Preencha corretamente';
        exibirTel2 = campoTel2.innerHTML= 'Preencha corretamente';
        exibirMail = campoMail.innerHTML= 'Preencha corretamente';
        nome.value = '';
        email.value= '';
        tel1.value = '';
        tel2.value = 'Não infomado';
    };
    
    
};


btn2.addEventListener('click',validar);





   