import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeeOverviewComponent } from './employee-overview.component'
import { EmployeeProjectsComponent } from './employee-projects.component'
import { LoginComponent } from './login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeeAddComponent } from './employee-add.component'; 

const routing: Routes = [
    { path: '', component: HomeComponent }
    ,
    { path: 'employees', component: EmployeeListComponent, canActivate: [CheckLoginGuard]  }//, canActivate: [CheckLoginGuard] 
    ,
    { path: 'login', component: LoginComponent }
    ,
    { path: 'employee-detail/:id', component: EmployeeDetailComponent }
    ,
    { path: 'employee-edit/:id', component: EmployeeEditComponent }
    ,
    { path: 'employee-add', component: EmployeeAddComponent }    
    ,
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent,canDeactivate:[CheckSaveFormGuard],//, canDeactivate:[CheckSaveFormGuard]
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectsComponent }
        ]
    }
    ,
    { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);