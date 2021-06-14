 //Validando Data ---------------------
export const validadata = () => {
   var data = document.getElementById("nascimento").value; // pega o valor do input
 
   var ref = new Date();
   var nasc = new Date(data);
   var idade = ref.getFullYear() - nasc.getFullYear();
   var mes = ref.getMonth() - nasc.getMonth();
   var dia = ref.getDate() - nasc.getDate()
 
   if (mes < 0 || (mes === 0 && dia < 0)) {
     idade--;
 
 
     if (idade >= 0 && idade <= 130) {
       //alert("Pode se cadastrar.");
       document.getElementById("dataTxt").innerHTML = "<font color='green'>Data válida";
       return true;
 
     } else {
       document.getElementById("dataTxt").innerHTML =
         "<font color='coral'>Data inválida. Digite uma idade entre 0 e 130 anos.</font>";
 
       return false;
     }
     return false;
     return idade
 
   }
 
 }
 
 //validando E-mail ----------------------------------------
export const validacaoEmail=(field)=> {
   let usuario = field.value.substring(0, field.value.indexOf("@")); //antes do @
   let dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length); // depois do @
   if ((usuario.length >= 1) &&
     (dominio.length >= 3) &&
     (usuario.search("@") == -1) && //usuario / dominio não pode conter @
     (dominio.search("@") == -1) &&
     (usuario.search(" ") == -1) && //usuario / dominio sem espaço em branco
     (dominio.search(" ") == -1) &&
     (dominio.search(".") != -1) && //tem que ter ponto no dominio
     (dominio.indexOf(".") >= 1) &&
     // posição do 1° ponto tem que ser maior ou igual a 1 espaço, pois posição 0> deve ser ocupada por um caracter
     // tedm que ter caracter depois do ultimo ponto
     (dominio.lastIndexOf(".") < dominio.length - 1)) {
     document.getElementById("msgemail").innerHTML = "<font color='green'>E-mail válido";
     //Informações do usuário
     document.getElementById("usertxt").value = usuario;
 
   } else {
     document.getElementById("msgemail").innerHTML =
       "<font color='red'>Email inválido. Exemplo válido: joao@email.com</font>";
 
   }
 }
 
//  // Esconde Pronome Personalizado
//  $(document).ready(function () {
 
//    var pessoa = (document).getElementById("gender").value;
 
//    if (pessoa === "") {
//      $("#divPersonalizada").hide()
//    }
//  });
 
 
//  //Pronome Personalizado
//  function verificarPronome() {
//    var pessoa = (document).getElementById("gender").value;
 
 
//    if (pessoa === "Personalizado") {
//      $("#divPersonalizada").show()
//    } else {
//      $("#divPersonalizada").hide()
 
//    }
 
 
//  };
 
//  //validando Senha----------------------------------------
//  var myInput = document.getElementById("senha");
//  var letter = document.getElementById("letter");
//  var capital = document.getElementById("capital");
//  var number = document.getElementById("number");
//  var length = document.getElementById("length");
 
//  // When the user clicks on the password field, show the message box
//  myInput.onfocus = function () {
//    document.getElementById("message").style.display = "block";
//    //Informações do usuário
 
//  }
 
//  // When the user clicks outside of the password field, hide the message box
//  myInput.onblur = function () {
//    document.getElementById("message").style.display = "none";
//    document.getElementById("senhaTxt").value = myInput.value;
//  }
 
//  // When the user starts to type something inside the password field
//  myInput.onkeyup = function () {
//    // Validate lowercase letters
//    var lowerCaseLetters = /[a-z]/g;
//    if (myInput.value.match(lowerCaseLetters)) {
//      letter.classList.remove("invalid");
//      letter.classList.add("valid");
//    } else {
//      letter.classList.remove("valid");
//      letter.classList.add("invalid");
//    }
 
//    // Validate capital letters
//    var upperCaseLetters = /[A-Z]/g;
//    if (myInput.value.match(upperCaseLetters)) {
//      capital.classList.remove("invalid");
//      capital.classList.add("valid");
//    } else {
//      capital.classList.remove("valid");
//      capital.classList.add("invalid");
//    }
 
//    // Validate numbers
//    var numbers = /[0-9]/g;
//    if (myInput.value.match(numbers)) {
//      number.classList.remove("invalid");
//      number.classList.add("valid");
//    } else {
//      number.classList.remove("valid");
//      number.classList.add("invalid");
//    }
 
//    // Validate length
//    if (myInput.value.length >= 8) {
//      length.classList.remove("invalid");
//      length.classList.add("valid");
//    } else {
//      length.classList.remove("valid");
//      length.classList.add("invalid");
//    }
//  }