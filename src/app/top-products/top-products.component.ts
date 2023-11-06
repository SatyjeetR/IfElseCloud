import { Component } from '@angular/core';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['Men', 'Electronic', 'Women'],
          datasets: [
              {
                  data: [200, 50, 100,60,70,30],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--blue-300'), documentStyle.getPropertyValue('--blue-100')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--blue-400')]
              }
          ]
      };


      this.options = {
          cutout: '85%',
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          }
      };
  }
}
