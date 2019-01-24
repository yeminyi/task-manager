import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  priorities=[
    {
      label:'Urgent',
      value:1
    },
    {
      label:'Important',
      value:2
    },
    {
      label:'Normal',
      value:3
    }
  ];
  dialogTitle='';
  constructor(@Inject(MAT_DIALOG_DATA) private data) { }
  ngOnInit() {
    this.dialogTitle=this.data.title;
    console.log(JSON.stringify(this.data.task));
    
  }

}
