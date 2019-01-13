import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../../../core/navigation/navigation.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() image: string = '../../../assets/1.jpg';
@Input() imageTitle: string = '../../../assets/2.png';
@Input() send: boolean = true;
@Input() contact: boolean = true;
  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit() {}

  toMessage() {
    this.navigationService.toMessage();
  }
}
