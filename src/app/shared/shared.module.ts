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
         MatTooltipModule,
         MatDatepickerModule,
         MatRadioModule,
         MatNativeDateModule,
         MatSelectModule,
        } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DirectiveModule } from "../directive/directive.module";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { ImgListSelectComponent } from './img-list-select/img-list-select.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
    DirectiveModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
    DirectiveModule,
    ImgListSelectComponent
  ],
  entryComponents: [ConfirmDialogComponent],
  declarations: [ConfirmDialogComponent, ImgListSelectComponent]
})
export class SharedModule { }
