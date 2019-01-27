import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatDialogModule} from '@angular/material';
import { LoginModule } from "./login/login.module";
import { AppRoutingModule } from "./app-routing.module";
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    CoreModule,
    LoginModule,
    AppRoutingModule,
    ProjectModule,
    MatDialogModule,
    TaskModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
