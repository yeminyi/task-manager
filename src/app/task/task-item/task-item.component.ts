import { Component, OnInit ,Input,Output,EventEmitter,HostListener} from '@angular/core';
import { itemAnim } from "../../anims/item.anim";
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[itemAnim]
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() itemClick=new EventEmitter<void>();
  widerPriority="in";
  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'in';
  }
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
