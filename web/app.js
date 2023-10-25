import anime from "animejs";

function returnToOrigin() {
// Função para retornar a posição original.
  anime({
    targets: "#logo",
    translateY: 0,
    rotate: 0,
    duration: 1500,
    easing: "easeInElastic",
  });
}

// Configuração da animação pular e girar.
anime({
  targets: "#logo",
  translateY: -100,
  rotate: "1turn",
  duration: 1000,
  easing: "easeInElastic",
  complete: returnToOrigin, // Chama a função de retorno quando a animação inicial estiver concluída.
});
