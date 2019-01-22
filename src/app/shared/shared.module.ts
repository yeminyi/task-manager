import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule,
         MatIconModule,
         MatInputModule,
         MatButtonModule,
         MatCardModule,
         MatListModule,
         MatSlideToggleModule,
         MatGridListModule,
         MatAutocompleteModule,
         MatMenuModule,
         MatCheckboxModule,
         MatTooltipModule
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
    MatSlideToggleModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
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
    MatSlideToggleModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  declarations: []
})
export class SharedModule { }
