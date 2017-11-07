import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppTokyoComponent } from './app-tokyo/app-tokyo.component';
import { AppNoticeComponent } from './app-notice/app-notice.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppTokyoFiltersComponent } from './app-tokyo-filters/app-tokyo-filters.component';
import { NoticeService } from './app-notice/notice.service';
import { AppTokyoPinMapComponent } from './app-tokyo-pin-map/app-tokyo-pin-map.component';
import { AppTokyoOfferDialogComponent } from './app-tokyo-offer-dialog/app-tokyo-offer-dialog.component';
import { AppNoticeHeaderComponent } from './app-notice-header/app-notice-header.component';
import { AppNoticeFormComponent } from './app-notice-form/app-notice-form.component';
import { FormLeftPanelComponent } from './form-left-panel/form-left-panel.component';
import { FormRightPanelComponent } from './form-right-panel/form-right-panel.component';
import { FormNoticeTitleComponent } from './form-notice-title/form-notice-title.component';
import { FormNoticeTypePriceComponent } from './form-notice-type-price/form-notice-type-price.component';
import { FormNoticeRoomsGuestsComponent } from './form-notice-rooms-guests/form-notice-rooms-guests.component';
import { FormNoticeDescriptionComponent } from './form-notice-description/form-notice-description.component';
import { FormNoticeAddressComponent } from './form-notice-address/form-notice-address.component';
import { FormNoticeCheckinCheckoutComponent } from './form-notice-checkin-checkout/form-notice-checkin-checkout.component';
import { FormNoticeFeaturesComponent } from './form-notice-features/form-notice-features.component';
import { FormNoticePhotosComponent } from './form-notice-photos/form-notice-photos.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppTokyoComponent,
    AppNoticeComponent,
    AppMainComponent,
    AppTokyoFiltersComponent,
    AppTokyoPinMapComponent,
    AppTokyoOfferDialogComponent,
    AppNoticeHeaderComponent,
    AppNoticeFormComponent,
    FormLeftPanelComponent,
    FormRightPanelComponent,
    FormNoticeTitleComponent,
    FormNoticeTypePriceComponent,
    FormNoticeRoomsGuestsComponent,
    FormNoticeDescriptionComponent,
    FormNoticeAddressComponent,
    FormNoticeCheckinCheckoutComponent,
    FormNoticeFeaturesComponent,
    FormNoticePhotosComponent
  ],
  providers: [NoticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
