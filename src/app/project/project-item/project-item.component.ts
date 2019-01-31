import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  OnInit,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import {cardAnim} from '../../anims/card.anim';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[cardAnim],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite =new EventEmitter<void>();
  @Output() onDelete =new EventEmitter<void>();
  @Output() onEdit =new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }
  constructor() { }

  ngOnInit() {
  }
  openInviteDialog(){
    this.onInvite.emit();
  }
  openUpdateDialog(){
    this.onEdit.emit();
  }
  openDeleteDialog(){
    this.onDelete.emit();
  }
}
