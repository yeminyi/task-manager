import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
projects=[
  {
    "name":"project1",
    "desc":"this is a project 1",
    "coverImg":"assets/img/covers/0.jpg"
  },
  {
    "name":"project2",
    "desc":"this is a project 2",
    "coverImg":"assets/img/covers/1.jpg"
  },
];
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title:'New Project'}});
    dialogRef.afterClosed().subscribe(val => {
    console.log(val);
    });
  }
  launchInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent);
  }
  launchEditDialog(){
    const dialogRef=this.dialog.open(NewProjectComponent,{data:{title:'Edit Project'}});
  }
  launchDeleteDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title:'Delete the Project?',content:'Do you confirm to delete it?'}});
    dialogRef.afterClosed().subscribe(val => {
    console.log(val);
    });
  }
}
