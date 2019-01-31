import { Component, OnInit, Input,Output,EventEmitter,ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHeaderComponent implements OnInit {
  @Input() header="";
  @Output() newTask=new EventEmitter<void>();
  @Output() copyTask=new EventEmitter<void>();
  @Output() deleteTask=new EventEmitter<void>();
  @Output() changeListName=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  addNewTask(){
    this.newTask.emit();
  }
  onMoveAllTasks(){
    this.copyTask.emit();
  }
  onDeleteList(){
    this.deleteTask.emit();
  }
  onChangeListName(){
    this.changeListName.emit();
  }
}
