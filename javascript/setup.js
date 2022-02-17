$('.owl-carousel').owlCarousel({ // o cifrão referencia o jQuery
  loop:true, // fica passando as imagens sem acabar.
  margin:10, // espaço entre as imagens
  nav:false, // botãozinho pequenos que n gostei. Desabilitado
  responsive:{  // responsividade
      0:{     // quando a tela estiver com 0px mostrará 1 item
          items:1
      },
      600:{  // quando a tela estiver com 600px mostrará 3 items
          items:3
      },
      1000:{ // quando a tela estiver com 1000px mostrará 5 items
          items:4
      }
  }
})