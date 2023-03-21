const blackjack = () => {
   console.log(`Boas vindas ao jogo de BlackJack!`)

   let confirmacaoUsuario = confirm(`Quer iniciar uma nova rodada?`)

   if (confirmacaoUsuario) {
      let cartaUsuarioUm = comprarCarta()
      let cartaUsuarioDois = comprarCarta()
      let cartaUm = comprarCarta()
      let cartaDois = comprarCarta()

      let somaDuasCartasUsuario = cartaUsuarioUm.valor + cartaUsuarioDois.valor
      let somaDuasCartas = cartaUm.valor + cartaDois.valor

      console.log(`Usuário - Cartas: ${cartaUsuarioUm.texto} ${cartaUsuarioDois.texto} - ${somaDuasCartasUsuario}`)
      console.log(`Computador - Cartas: ${cartaUm.texto} ${cartaDois.texto} - ${somaDuasCartas}`)

      if (somaDuasCartasUsuario > somaDuasCartas) {
         console.log(`O usuário ganhou!`)
      } else if (somaDuasCartasUsuario < somaDuasCartas) {
         console.log(`O computador ganhou`)
      } else if (somaDuasCartasUsuario === somaDuasCartas) {
         console.log(`Empate!`)
      }
   } else {
      console.log(`Fim de jogo!`)
   }
   return blackjack
}
blackjack()