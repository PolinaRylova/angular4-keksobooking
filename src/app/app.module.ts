import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { NoticeComponent } from './notice/notice.component';
import { AppMainComponent } from './app-main/app-main.component';
import { TokyoFiltersComponent } from './tokyo-filters/tokyo-filters.component';
import { HouseTypeComponent } from './house-type/house-type.component';
import { HousePriceComponent } from './house-price/house-price.component';
import { HouseRoomsComponent } from './house-rooms/house-rooms.component';
import { HouseGuestsComponent } from './house-guests/house-guests.component';
import { HouseWifiComponent } from './house-wifi/house-wifi.component';
import { HouseDishwasherComponent } from './house-dishwasher/house-dishwasher.component';
import { HouseParkingComponent } from './house-parking/house-parking.component';
import { HouseWasherComponent } from './house-washer/house-washer.component';
import { HouseElevatorComponent } from './house-elevator/house-elevator.component';
import { HouseConditionerComponent } from './house-conditioner/house-conditioner.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    TokyoComponent,
    NoticeComponent,
    AppMainComponent,
    TokyoFiltersComponent,
    HouseTypeComponent,
    HousePriceComponent,
    HouseRoomsComponent,
    HouseGuestsComponent,
    HouseWifiComponent,
    HouseDishwasherComponent,
    HouseParkingComponent,
    HouseWasherComponent,
    HouseElevatorComponent,
    HouseConditionerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
