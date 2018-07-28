// Thay vì fix cứng data trong employee.component.ts, tiếp tục khi tạo 1 component detail employee,
// chúng ta cũng sử dụng data đó thì phải viết lại bên file detail kia như vậy thì bị double code.
// => Sử dụng 1 service.


// Có 2 loại Service:
// 1. Có sẳn: Angular 2, HttpService: Post,Put,Delete,...
// 2. Tự định nghĩa như employee.service.ts


// Khi ta muốn dùng cho toàn bộ hệ thống thì:
// tại file module.ts:
// import { EmployeeListComponent } from './employee/employee.component';
// providers: [EmployeeService],

// Một dự án có nhiều component, nhiều module và nhiều service.

// NGoài ngOnit thì còn:
// 1. ngOnChanges
// 2. ngOint
// 3. ngDoCheck
// 4. NgOnDestroy