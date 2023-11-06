import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent {
  cardsData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCardsData().subscribe((data: any) => {
      this.cardsData = data.top_cards;
    });
  }
}
