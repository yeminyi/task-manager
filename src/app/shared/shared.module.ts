import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule,
         MatIconModule,
         MatInputModule,
         MatButtonModule,
         MatCardModule,
         MatListModule,
         MatSlideToggleModule
        } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule,
    MatListModule,
    MatSlideToggleModule
  ],
  exports:[
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule,
    MatListModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class SharedModule { }
