import { Component, OnInit,HostListener,Output,EventEmitter,ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector: 'app-shortcut-task',
  templateUrl: './shortcut-task.component.html',
  styleUrls: ['./shortcut-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortcutTaskComponent implements OnInit {

  @Output() newTask=  new EventEmitter<string>();
  desc :string;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('keyup.enter')
  sendNewTask(){
    console.log(this.desc);
    
    if (!this.desc || this.desc.length === 0 || !this.desc.trim() || this.desc.length > 20) {
      return;
    }
    this.newTask.emit(this.desc);
    this.desc = '';
  }
}
