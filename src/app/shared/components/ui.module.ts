import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, } from '@angular/material/card';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { HttpClientModule} from '@angular/common/http';

import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
  CardComponent,
  ],
  exports: [
    CardComponent
  ]
})
export class UiModule { }
