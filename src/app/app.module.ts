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
import { AppNoticeFormLeftPanelComponent } from './app-notice-form-left-panel/app-notice-form-left-panel.component';
import { AppNoticeFormRightPanelComponent } from './app-notice-form-right-panel/app-notice-form-right-panel.component';
import { AppNoticeFormTitleComponent } from './app-notice-form-title/app-notice-form-title.component';
import { FormNoticeTypePriceComponent } from './form-notice-type-price/form-notice-type-price.component';
import { FormNoticeRoomsGuestsComponent } from './form-notice-rooms-guests/form-notice-rooms-guests.component';
import { AppNoticeFormDescriptionComponent } from './app-notice-form-description/app-notice-form-description.component';
import { AppNoticeFormAddressComponent } from './app-notice-form-address/app-notice-form-address.component';
import { AppNoticeFormCheckinCheckoutComponent } from './app-notice-form-checkin-checkout/app-notice-form-checkin-checkout.component';
import { AppNoticeFormFeaturesComponent } from './app-notice-form-features/app-notice-form-features.component';
import { AppNoticeFormPhotosComponent } from './app-notice-form-photos/app-notice-form-photos.component';


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
    AppNoticeFormLeftPanelComponent,
    AppNoticeFormRightPanelComponent,
    AppNoticeFormTitleComponent,
    FormNoticeTypePriceComponent,
    FormNoticeRoomsGuestsComponent,
    AppNoticeFormDescriptionComponent,
    AppNoticeFormAddressComponent,
    AppNoticeFormCheckinCheckoutComponent,
    AppNoticeFormFeaturesComponent,
    AppNoticeFormPhotosComponent
  ],
  providers: [NoticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
