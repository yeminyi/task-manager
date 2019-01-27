import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatDialogModule} from '@angular/material';
import { LoginModule } from "./login/login.module";
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";
import { SharedModule } from "./shared/shared.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    MatDialogModule,
    TaskModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
