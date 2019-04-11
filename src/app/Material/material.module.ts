import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule { }
