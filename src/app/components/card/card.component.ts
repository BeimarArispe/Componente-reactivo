import { Component, Input } from '@angular/core';
import { CardConfig } from '../../type/types';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!: string;
  @Input() imageSrc!: string;

  cardConfig!: CardConfig;

  ngOnInit() {
    this.cardConfig = {
      title: this.title,
      imageSrc: this.imageSrc
    };
  }
}
