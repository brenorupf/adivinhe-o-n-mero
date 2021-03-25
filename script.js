
   function teste() {
   var numeroSecreto = parseInt(Math.random() * 100)
   var tentativas = 7
   
   while(tentativas > 0) {
     var chute = parseInt(prompt("Digite um número entre 0 e 100"))
   
     if (numeroSecreto == chute) {
      res.innerHTML = "Acertou!"
       break
     } else if (chute > numeroSecreto) {
       alert("O número secreto é menor")
       tentativas = tentativas - 1
     } else if (chute < numeroSecreto) {
       alert("O número secreto é maior")
       tentativas = tentativas - 1
     }
   }
   
   if (chute != numeroSecreto) {
    res.innerHTML = "Suas tentativas acabaram. O número secreto era " + numeroSecreto + "."
   }
  }   

    /*
    function verificar(){
      var numeroSecreto = parseInt(Math.random() * 10 + 1)
      var chute = document.querySelector('input.chute')
      var n1 = Number(chute.value)
      var res = document.getElementById('res')
      var tentativas = 8
    
      while(tentativas > 0) {
          if (numeroSecreto == n1) {
              res.innerHTML = "Parabéns, você acertou!"
          break
          } else if (n1 > numeroSecreto) {
              res.innerHTML = "O número secreto é menor."
              tentativas = tentativas - 1
          } else if (n1 < numeroSecreto) {
              res.innerHTML = "O número secreto é maior."
              tentativas = tentativas - 1
          }
           
      }
      if (n1 != numeroSecreto) {
              res.innerHTML = `Suas tentativas acabaram. O número secreto era ${numeroSecreto}.`
      }
    }*/