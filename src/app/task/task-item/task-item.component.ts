import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
@Input() item;
@Input() avatar;
@Output() itemClick=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.avatar=this.item.owner ? this.item.owner.avatar:'unassigned';
  }
  onItemClick(){
    this.itemClick.emit();
  }
  onCheckboxClick(ev:Event){
    ev.stopPropagation();
  }
}
