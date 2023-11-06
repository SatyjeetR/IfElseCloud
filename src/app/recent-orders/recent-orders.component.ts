import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {
  recentOrdersData: any[] = [];
  counter: number = 1;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRecentOrders().subscribe((data: any) => {
      this.recentOrdersData = data.recent_orders;
    });
  }

  openPopup(order: any) {

    console.log('Open popup for order:', order);
  }
}
