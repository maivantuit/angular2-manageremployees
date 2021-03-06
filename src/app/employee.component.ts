import { Component, OnInit } from "@angular/core";
import { EmployeeService } from './service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'employee-list',
    templateUrl: 'employee.component.html'
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public pages: number[];
    public currentPage: number;
    public keyword: string;

    constructor(private _employeeService: EmployeeService, private router: Router, private activatedRouter: ActivatedRoute) {

    }
    ngOnInit() {
        this.activatedRouter.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'] || 1;
            console.log(this.currentPage);
            console.log(params['filter']);
        });
        this.LoadData();
        this.pages = [1, 2, 3, 4, 5];
    }
    Search() {
        this._employeeService.Search(this.keyword).subscribe((response: any) => {
            this.employees = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    Delete(id: number) {
        let confirmResult = confirm("Are you sure to delete employee?");
        if (confirmResult) {
            this._employeeService.Delete(id).subscribe(response => {
                if (response) {
                    alert('Delete ok');
                    this.LoadData();
                }
            })
        }
    }
    LoadData() {
        this._employeeService.getList().subscribe((response: any) => {
            this.employees = response;
        }, error => {
            console.log("System error API");
        });
    }
}