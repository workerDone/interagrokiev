import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { NgxPhoneMaskModule } from 'ngx-phone-mask';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { GeneralRoutingModule } from './general-routing.module';

import { DefaultComponent } from './components/default/default.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { UiModule } from '../../shared/components/ui.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgxPhoneMaskModule,
    UiModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  declarations: [
    DefaultComponent,
    ContactsComponent,
    AboutUsComponent,
    ProductsComponent
    ]
})
export class GeneralModule { }
