import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCardsData(): Observable<any> {
    return this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/top_cards');
  }
  getNewUserData(): Observable<any> {
    return this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/new_users');
  }
  getRecentOrders(): Observable<any> {
    return this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/recent_orders');
  }
}
