import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {
  newUsersData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getNewUserData().subscribe(
      (data: any) => {
        this.newUsersData = data;
        console.log('New Users Data:', this.newUsersData);
      },
      (error: any) => {
        console.error('Error fetching new users data:', error);
      }
    );
  }
}
