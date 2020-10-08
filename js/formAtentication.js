var buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", function(event){
    event.preventDefault();

    var erros = validaForm(); //for line 14

    if(erros.length>0){
        return;
    }
    location.href = 'sucess.html';
    
});
//function Form validation
function validaForm(){
    var erros = [];
    
    var imputsElements = document.querySelectorAll("input");
    imputsElements.forEach(function(input){
        var email = false;
        
        if(input.value == ''){
            input.classList.add('invalid'); //add class invalid
            var img = takeElementImg(input); //take element img - for line 43
            showBoxAlert(img, input.name, email); // show box alert inner - for line 49
            erros.push('campo vazio');
        }
        else if(input.type == 'email' && input.value.indexOf('@')<0 && input.value != ''){
            email = true;
            img = takeElementImg(input); // for line 43
            showBoxAlert(img, input.name, email); // for line 49
            erros.push('campo inválido');
        }
        else{ //retira as bordas vermelhas e a img de alert
            input.classList.remove('invalid');
            img = input.nextElementSibling;
            img.classList.remove('info-advertDisplay');       
        }
    });
    return erros;
}


function takeElementImg(input){
    var img = input.nextElementSibling; //Taking the element next. In this case the image.
    img.classList.add('info-advertDisplay');
    return img;
}

function showBoxAlert(img, nameInput,email){
    img.addEventListener('mouseover', function(event){
        var boxAlert = event.target.parentNode.firstElementChild;
        boxAlert.classList.add('fade-In');
        if(!email){
            boxAlert.textContent = textAlert(nameInput); // for line 67
        }else{
            boxAlert.textContent = 'Email invalid';
        }
        
    });
    
    img.addEventListener('mouseout', function(event){
        var boxAlert = event.target.parentNode.firstElementChild; //Taking the father's first child (box-input) from img;
        boxAlert.classList.remove('fade-In');
    });
}

function textAlert(name){
    var letter = '';
    for(lt of name){
        letter = lt;
        break;
    }   
    return letter.toUpperCase() + name.slice(1,name.length) + ' is requerid.'; //capitalizing the first letter and adding the rest of the text
}


