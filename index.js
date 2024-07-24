document.querySelectorAll('#abrirMenu, #fecharMenu').forEach(function (element) {
  element.addEventListener('click', function () {
    if (element.id === 'abrirMenu') {
      document.getElementById('menu').style.left = '0';
    } else if (element.id === 'fecharMenu') {
      document.getElementById('menu').style.left = '-340px';
    }
  });
});

const flagButtons = document.querySelectorAll('.destinosbtns');
const slides = document.querySelectorAll('.slides');

flagButtons.forEach((button) => {
  button.addEventListener('click', () => {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });


    let slideId;
    switch (button.id) {
      case 'bandITA':
        slideId = 'slideITA';
        break;
      case 'bandESP':
        slideId = 'slideESP';
        break;
      case 'bandFRA':
        slideId = 'slideFRA';
        break;
      case 'bandAUS':
        slideId = 'slideAUS';
        break;
    }
    document.getElementById(slideId).style.display = 'block';
  });
});

const destinosbtns = document.querySelectorAll(".destinosbtns");
destinosbtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    destinosbtns.forEach(function (btn) {
      btn.classList.remove('selecionado');
    });
    this.classList.add('selecionado');
  })
});

const pacoteSelecionado = document.querySelectorAll(".Pacote");
pacoteSelecionado.forEach(function (btn) {
  btn.addEventListener("click", function () {
    pacoteSelecionado.forEach(function (btn) {
      btn.classList.remove('pctSelecionado');
    });
    this.classList.add('pctSelecionado');
  })
});



document.getElementById("submit").addEventListener("click", function () {
  const pacoteSelecionado = document.querySelector(".Pacote.pctSelecionado");
  const BotaoSelecionado = document.querySelector(".destinosbtns.selecionado");
  if (BotaoSelecionado && pacoteSelecionado) {
    let destino = BotaoSelecionado.value;
    let Pacote = pacoteSelecionado.getAttribute('data-value');
    let valor1 = BotaoSelecionado.getAttribute('data-price');
    let valor2 = pacoteSelecionado.getAttribute('data-price');
    document.getElementById("menu").style.left = "0";
    let valorTotal = parseInt(valor1) + parseInt(valor2);
    let PedidoPacote = `Pacote ${Pacote}`;
    let Pedido = `Viagem: ${destino}`;
    document.querySelector(".RetornoPedido").innerHTML = Pedido;
    document.querySelector(".RetornoPacote").innerHTML = PedidoPacote;
    document.querySelector("#RetornoValor").innerHTML = `Valor: R$${valorTotal}`;
  }
  else {
    alert("Selecione um Destino e um Pacote de Viagem");
  };
});


function clicado() {
  let botao = document.getElementById("submit");
  botao.style.transform = "scale(0.9)";
  let botaoMenu = document.getElementById("abrirMenu");
  botaoMenu.classList.add("shake");
  botaoMenu.addEventListener('animationend', () => {
    botaoMenu.classList.remove("shake");
  });
}

function solto() {
  let botao = document.getElementById("submit");
  botao.style.transform = "scale(1.01)";
}