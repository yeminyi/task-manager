import { Component, OnInit,Inject,ChangeDetectionStrategy } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProjectComponent implements OnInit {
  dialogTitle='';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NewProjectComponent>) {

}

  ngOnInit() {
    this.dialogTitle=this.data.title;
    console.log(JSON.stringify(this.data));
    
  }
  onClick(){
    this.dialogRef.close('I got your msg');
  }
}
