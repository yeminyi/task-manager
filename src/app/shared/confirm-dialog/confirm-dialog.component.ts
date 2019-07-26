import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material";
@Component({
  selector: 'app-confirm-dialog',
  template: `
  <h2 mat-dialog-title>{{title}}</h2>
  <div mat-dialog-content>{{content}}</div>
  <div mat-dialog-actions>
    <button mat-raised-button color="primary" (click)="handleAction(true)">Confirm</button>
    <button mat-raised-button mat-dialog-close type="button" (click)="handleAction(false)">CLose</button>
  </div>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title='';
  content='';
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  ngOnInit() {
    this.title=this.data.title;
    this.content=this.data.content;
    console.log(this.data);
    
  }
  handleAction(result:boolean){
    this.dialogRef.close(result);
  }
}
