import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { getDate } from "date-fns";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  today ="day";
  constructor() { }
  @Output() navClick= new EventEmitter<void>();
  ngOnInit() {
    this.today= `day${getDate(new Date())}`;
  }
  onNavClick()
  {
    this.navClick.emit();
  }
}
