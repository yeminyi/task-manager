import { Component, OnInit, HostBinding } from '@angular/core';
import {MatDialog} from '@angular/material';
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from "../../anims/router.anim";
import { listAnimation} from '../../anims/list.anim';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations:[slideToRight,listAnimation]
})
export class ProjectListComponent implements OnInit {
projects=[
  {
    "id":123,
    "name":"project1",
    "desc":"this is a project 1",
    "coverImg":"assets/img/covers/0.jpg"
  },
  {
    "id":1233,
    "name":"project2",
    "desc":"this is a project 2",
    "coverImg":"assets/img/covers/1.jpg"
  },
];
  @HostBinding('@routeAnim') state;
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
    
  }
  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title:'New Project'}});
    dialogRef.afterClosed().subscribe(val => {
    console.log(val);
    this.projects=[...this.projects,{id:3,name:'a new project',desc:'this is a new project',coverImg:'assets/img/covers/4.jpg'}];
    });
  }
  launchInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent);
  }
  launchEditDialog(){
    const dialogRef=this.dialog.open(NewProjectComponent,{data:{title:'Edit Project'}});
  }
  launchDeleteDialog(project){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title:'Delete the Project?',content:'Do you confirm to delete it?'}});
    dialogRef.afterClosed().subscribe(val => {
    console.log(val);
    this.projects=this.projects.filter(p=>p.id!==project.id);
    });
  }
}
