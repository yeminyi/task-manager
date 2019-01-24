import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent} from "../copy-task/copy-task.component";
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
lists=
[
  {
      id:1,
      name:'todo',
      tasks:
      [
              {
                id:1,
                desc:'Task 1:to buy a coffee',
                completed: true,
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-11'
                },
              dueDate: new Date(),
              },
              {
                id:2,
                desc:'Task2:to finish ppt',
                completed: false,
                priority:2,
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-10'
                },
              dueDate: new Date(),
              },
              {
                id:3,
                desc:'Task 3:to fix a bug888', 
                completed: false,
                priority:1,
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-10'
                },
              dueDate: new Date(),
              }

      ]
    },
    {
      id:2,
      name:'working on ',
      tasks:
      [
              {
                id:1,
                desc:'Task 4:to buy a coffee',
                completed: false,
                priority:3,
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-11'
                },
              dueDate: new Date(),
              },
              {
                id:2,
                desc:'Task5:to finish ppt',
                completed: false,
                priority:2,
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-1'
                },
              dueDate: new Date(),
              },
              {
                id:3,
                desc:'Task 6:to fix a bug888',
                completed: false,
                priority:3,
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-12'
                },
              dueDate: new Date(),
              }

      ]
  }
];
  constructor(private dialog: MatDialog) { }

  ngOnInit() { 
  }
  launchNewTaskDialog(){
    const dialogRef=this.dialog.open(NewTaskComponent,{data:{title:'New Task'}});
  }
  launchCopyTaskDialog(){
    const dialogRef=this.dialog.open(CopyTaskComponent,{data:{lists:this.lists}});
  }
  launchItemDialog(task){
    const dialogRef=this.dialog.open(NewTaskComponent,{data:{title:'Edit Task',task:task}});
  }
  launchDeleteTaskDialog(){
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{data:{title:'Delete Task',content:'Do you confirm to delete it ?'}});
    dialogRef.afterClosed().subscribe(val => {
      console.log(val);
  }
}
