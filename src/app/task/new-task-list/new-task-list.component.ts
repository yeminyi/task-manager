import { Component, OnInit,Inject,ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material";
@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTaskListComponent implements OnInit {
  dialogTitle='';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef:MatDialogRef<NewTaskListComponent>
  ) { }

  ngOnInit() {
    this.dialogTitle=this.data.title;
  }
  onClick(){
    this.dialogRef.close(this.dialogTitle);
  }
}
