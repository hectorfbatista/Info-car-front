import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-vehicle',
  templateUrl: './card-vehicle.component.html',
  styleUrls: ['./card-vehicle.component.scss']
})
export class CardVehicleComponent {
  @Input('card-img') cardImg: string | undefined;
  @Input('card-modelo') cardModelo: string | undefined;
  @Input('card-marca') cardMarca: string | undefined;
  @Input('card-ano') cardAno: string | undefined;
  @Input('card-placa') cardPlaca: string | undefined;
}
