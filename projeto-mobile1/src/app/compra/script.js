document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const ticketType = document.getElementById('ticket-type');
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');
    const radioButtons = document.querySelectorAll('ion-radio');
    let selectedSeat = null;
    let selectedPrice = 100; // Preço padrão da primeira opção
    let seatPrice = 0;

    // Função para atualizar o preço total
    function updateTotalPrice() {
      const quantity = parseInt(quantityInput.value) || 1;
      let priceModifier = 1;

      // Aplicar modificador baseado no tipo de ingresso
      switch (ticketType.value) {
        case 'meia':
          priceModifier = 0.5;
          break;
        case 'gratuidade':
          priceModifier = 0;
          break;
        default:
          priceModifier = 1;
      }

      const totalPrice = (selectedPrice + seatPrice) * quantity * priceModifier;
      totalPriceElement.textContent = `Preço Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
    }

    // Evento para quando um assento for clicado
    seats.forEach(seat => {
      seat.addEventListener('click', () => {
        if (selectedSeat) {
          selectedSeat.classList.remove('selected');
        }

        selectedSeat = seat;
        selectedSeat.classList.add('selected');

        seatPrice = parseFloat(seat.getAttribute('data-price'));
        updateTotalPrice();
      });
    });

    // Evento para quando o tipo de ingresso ou quantidade mudar
    ticketType.addEventListener('ionChange', () => {
      updateTotalPrice();
    });

    quantityInput.addEventListener('ionInput', () => {
      updateTotalPrice();
    });

    // Evento para quando um tipo de ingresso é selecionado
    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('ionSelect', (event) => {
        selectedPrice = parseFloat(event.target.value);
        updateTotalPrice();
      });
    });
  });