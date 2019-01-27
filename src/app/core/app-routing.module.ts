import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


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
