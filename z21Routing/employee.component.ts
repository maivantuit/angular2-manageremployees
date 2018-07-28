// import { Component,OnInit } from "@angular/core";
// import { EmployeeService } from './service/employee.service';
// @Component({
//     selector:'employee-list',
//     templateUrl:'employee.component.html'
// })
// export class EmployeeListComponent implements OnInit{
//     public employees : any[];
    
//     constructor(private _employeeService: EmployeeService){

//     }
//     ngOnInit(){
//         this._employeeService.getList().subscribe((response: any)=>{
//             this.employees = response;        
//         },error=>{
//             console.log("System error API");
//         });
//     }
// }