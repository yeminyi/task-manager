import { Component, OnInit } from '@angular/core';

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
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-11'
                },
              dueDate: new Date(),
              },
              {
                id:3,
                desc:'Task 3:to fix a bug888',
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-11'
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
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-11'
                },
              dueDate: new Date(),
              },
              {
                id:3,
                desc:'Task 6:to fix a bug888',
                owner: {
                  id:1,
                  name:'jack',
                  avatar:'avatars:svg-11'
                },
              dueDate: new Date(),
              }

      ]
  }
];
  constructor() { }

  ngOnInit() {
  
    
  }

}
