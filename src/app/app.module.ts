import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NewUsersComponent } from './new-users/new-users.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { TopCardsComponent } from './top-cards/top-cards.component';
import { SalesStatisticsComponent } from './sales-statistics/sales-statistics.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { ChartModule } from 'primeng/chart';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    DashboardComponent,
    NewUsersComponent,
    RecentOrdersComponent,
    TopCardsComponent,
    SalesStatisticsComponent,
    BalanceOverviewComponent,
    TopProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
