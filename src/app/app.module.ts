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
import { NoticeService } from './shared/notice.service';
import { AppTokyoPinMapComponent } from './app-tokyo-pin-map/app-tokyo-pin-map.component';
import { AppTokyoOfferDialogComponent } from './app-tokyo-offer-dialog/app-tokyo-offer-dialog.component';
import { AppNoticeHeaderComponent } from './app-notice-header/app-notice-header.component';
import { AppNoticeFormComponent } from './app-notice-form/app-notice-form.component';
import { AppNoticeFormLeftPanelComponent } from './app-notice-form-left-panel/app-notice-form-left-panel.component';
import { AppNoticeFormRightPanelComponent } from './app-notice-form-right-panel/app-notice-form-right-panel.component';
import { AppNoticeFormTitleComponent } from './app-notice-form-title/app-notice-form-title.component';
import { AppNoticeFormTypePriceComponent } from './app-notice-form-type-price/app-notice-form-type-price.component';
import { AppNoticeFormRoomsGuestsComponent } from './app-notice-form-rooms-guests/app-notice-form-rooms-guests.component';
import { AppNoticeFormDescriptionComponent } from './app-notice-form-description/app-notice-form-description.component';
import { AppNoticeFormAddressComponent } from './app-notice-form-address/app-notice-form-address.component';
import { AppNoticeFormCheckinCheckoutComponent } from './app-notice-form-checkin-checkout/app-notice-form-checkin-checkout.component';
import { AppNoticeFormFeaturesComponent } from './app-notice-form-features/app-notice-form-features.component';
import { AppNoticeFormPhotosComponent } from './app-notice-form-photos/app-notice-form-photos.component';
import { AppNoticePhotoUploadComponent } from './app-notice-photo-upload/app-notice-photo-upload.component';


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
    AppNoticeFormTypePriceComponent,
    AppNoticeFormRoomsGuestsComponent,
    AppNoticeFormDescriptionComponent,
    AppNoticeFormAddressComponent,
    AppNoticeFormCheckinCheckoutComponent,
    AppNoticeFormFeaturesComponent,
    AppNoticeFormPhotosComponent,
    AppNoticePhotoUploadComponent
  ],
  providers: [NoticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
