import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent {
  showAlert(message: string) {
    alert(message);
  }
}
