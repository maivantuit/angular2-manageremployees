import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeService } from './service/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview.component'
import { EmployeeProjectsComponent } from './employee-projects.component'
import { LoginComponent } from './login.component'
import { LoginService } from './service/login.service';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';
import { EmployeeEditComponent } from './employee-edit.component'
import { EmployeeAddComponent } from './employee-add.component'
@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, appRoutes
  ],
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeProjectsComponent,
    LoginComponent,
    EmployeeEditComponent,
    EmployeeAddComponent
  ],
  providers: [EmployeeService, LoginService, CheckLoginGuard, CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
