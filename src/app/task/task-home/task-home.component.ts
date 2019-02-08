import { Component, OnInit, HostBinding,ChangeDetectionStrategy} from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent} from "../copy-task/copy-task.component";
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from "../../anims/router.anim";
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations:[slideToRight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {
lists=
[
  {
      id:1,
      name:'To Do',
      order:1,
      tasks:
      [
              {
                id:1,
                desc:'Task 1:to buy a coffee',
                completed: true,
                priority:2,
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
      name:'Working On',
      order:2,
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
  @HostBinding('@routeAnim') state;
  constructor(private dialog: MatDialog) { }

  ngOnInit() { 
    console.log(this.state);
    
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
    })
  }
  launchNewTaskListDialog(){
    const dialogRef=this.dialog.open(NewTaskListComponent,{data:{title:'NewTaskList'}});
    dialogRef.afterClosed().subscribe(val => {
    console.log(val);
    })
  }
  launchEditTaskListNameDialog(){
    const dialogRef=this.dialog.open(NewTaskListComponent,{data:{title:'Edit TaskList Name'}});
    dialogRef.afterClosed().subscribe(val => {
    console.log(val);
    })
  }
  
  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item': {
        console.log('item');
        
        break;
      }
      case 'task-list': {
        console.log('list');
        const srcList=srcData.data;
        const tempOrder=srcList.order;
        srcList.order=list.order;
        list.order=tempOrder;
        break;
      }
      default:
        break;
    }
  }
}
