import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../../type/types';


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

  buttonConfig!: ButtonConfig;

  ngOnInit() {
    this.buttonConfig = {
      title: this.title,
      imageSrc: this.imageSrc
    };
  }
}
