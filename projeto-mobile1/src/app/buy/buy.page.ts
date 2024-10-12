import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage {
  selectedSession: string = '';
  selectedState: string = '';
  selectedSeatType: string = '';
  selectedTicketType: string = '';

  seats = {
    premium: [
      { label: 'A1', class: 'seat premium' },
      { label: 'A2', class: 'seat premium' },
      { label: 'A3', class: 'seat premium' },
      { label: 'A4', class: 'seat premium' },
      { label: 'A5', class: 'seat premium' },
      { label: 'B1', class: 'seat premium' },
      { label: 'B2', class: 'seat premium' },
      { label: 'B3', class: 'seat premium' },
      { label: 'B4', class: 'seat premium' },
      { label: 'B5', class: 'seat premium' },
    ],
    normal: [
      { label: 'C1', class: 'seat normal' },
      { label: 'C2', class: 'seat normal' },
      { label: 'C3', class: 'seat normal' },
      { label: 'C4', class: 'seat normal' },
      { label: 'C5', class: 'seat normal' },
      { label: 'D1', class: 'seat normal' },
      { label: 'D2', class: 'seat normal' },
      { label: 'D3', class: 'seat normal' },
      { label: 'D4', class: 'seat normal' },
      { label: 'D5', class: 'seat normal' },
    ],
  };

  constructor(private navCtrl: NavController) {}

  toggleSeat(seatLabel: string) {
    const seat = this.seats.premium.find(s => s.label === seatLabel) || this.seats.normal.find(s => s.label === seatLabel);
    if (seat) {
      seat.class = seat.class.includes('selected') ? seat.class.replace('selected', '').trim() : `${seat.class} selected`;
    }
  }

  onSubmit() {
    const selectedSeats = [
      ...this.seats.premium.filter(seat => seat.class.includes('selected')).map(seat => seat.label),
      ...this.seats.normal.filter(seat => seat.class.includes('selected')).map(seat => seat.label),
    ];

    if (selectedSeats.length > 0) {
      alert(`Ingressos comprados para os assentos: ${selectedSeats.join(', ')}`);
    } else {
      alert('Por favor, escolha ao menos um assento.');
    }
  }

  showFinalizar(){
    this.navCtrl.navigateForward('finalizar')
  }
}



