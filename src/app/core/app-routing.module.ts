import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
<<<<<<< HEAD
import {AuthGuardService} from '../services';
import {PageNotFoundComponent} from './containers/page-not-found';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    loadChildren: 'app/project#ProjectModule',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'tasklists/:id',
    loadChildren: 'app/task#TaskModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'mycal/:view',
    loadChildren: 'app/my-calendar#MyCalendarModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
=======


const routes: Routes = [
    { 
        path: '',
        redirectTo:'/login',
        pathMatch:'full' ,
        
    },
    { 
        path: 'project',
        redirectTo:'/project',
        pathMatch:'full' ,
        data: {animation: 'project'} 
    },
    { 
        path: 'tasklist',
        redirectTo:'/tasklists',
        pathMatch:'full' ,
        data: {animation: 'tasklists'} 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
>>>>>>> master
