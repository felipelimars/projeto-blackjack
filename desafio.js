/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
function blackjack() {
   let inicioDeJogo = confirm(`Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?`)
   let usuario = []
   let computador = []

   if (inicioDeJogo) {
      let confirmacao = false

      while (!confirmacao) {
         usuario.push(comprarCarta())
         usuario.push(comprarCarta())
         computador.push(comprarCarta())
         computador.push(comprarCarta())

         if ((usuario[0].valor === 11 && usuario[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor)) {
            usuario = []
            computador = []
         } else {
            confirmacao = true
         }
      }
      let textoUsuario = `Jogador: `
      let textoComputador = `Computador: `
      let pontuacaoUsuario = 0
      let pontuacaoComputador = 0

      for (let i = 0; i < usuario.length; i++) {
         textoUsuario += usuario[i].texto + ` `
         pontuacaoUsuario += usuario[i].valor
      }
      for (let i = 0; i < computador.length; i++) {
         textoComputador += computador[i].texto + ` `
         pontuacaoComputador += computador[i].valor
      }
      let comprarCarta2 = true

      while (comprarCarta2) {
         if (pontuacaoUsuario > 21) {
            break
         }
         let confirmCompra = confirm(`${textoUsuario}\nA carta revelada do computador é ${computador[0].texto}.\nDeseja comprar mais uma carta?
          `)
         if (confirmCompra) {
            let cartaNova = comprarCarta()
            usuario.push(cartaNova)
            pontuacaoUsuario += cartaNova.valor
            textoUsuario += `${cartaNova.texto}`
         } else {
            comprarCarta2 = false
         }
      }
      while (pontuacaoComputador <= pontuacaoUsuario && pontuacaoUsuario <= 21) {
         let cartaNova = comprarCarta()
         computador.push(cartaNova)
         pontuacaoComputador += cartaNova.valor
         textoComputador += `${cartaNova.texto}`
      }
      let pontuacaoFinal = ``
      if (pontuacaoUsuario > 21) {
         pontuacaoFinal = `O computador ganhou!`
      } else if (pontuacaoComputador > 21) {
         pontuacaoFinal = `O usuário ganhou!`
      } else if (pontuacaoUsuario > pontuacaoComputador) {
         pontuacaoFinal = `O usuário ganhou!`
      } else if (pontuacaoComputador > pontuacaoUsuario) {
         pontuacaoFinal = `O computador ganhou!`
      } else {
         pontuacaoFinal = `O jogo empatou!`
      }
      alert(`${textoUsuario}\nPontuação do jogador: ${pontuacaoUsuario}\n${textoComputador}\nPontuação do computador: ${pontuacaoComputador}\n${pontuacaoFinal}`)
   } else {
      alert(`O jogo acabou!`)
   }
}
blackjack()


