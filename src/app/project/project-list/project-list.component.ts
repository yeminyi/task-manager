import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { NewProjectComponent } from "../new-project/new-project.component";

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
    const dialogRef = this.dialog.open(NewProjectComponent, {data: 'this is test sent'});
    dialogRef.afterClosed().subscribe(val => {
     console.log(val);
     
    });
  }
}
