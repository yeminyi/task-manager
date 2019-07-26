import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
<<<<<<< HEAD
import {TaskHomeComponent} from './containers/task-home';

const routes: Routes = [
  {
    path: '',
=======
import { TaskHomeComponent } from './task-home/task-home.component';

const routes: Routes = [
  {
    path: 'tasklists',
>>>>>>> master
    component: TaskHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
