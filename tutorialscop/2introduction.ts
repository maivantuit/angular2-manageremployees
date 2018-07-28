/**
// 1. Giới thiệu angular 2:
    // + Là 1 framework UI để build app trên destop và mobile.
    // + Được build trên JS.

// 2. Cấu trúc thư mục và các file important:

    // + src/app/app.component(.ts, .html, .css, spec.ts): 
        // - Định nghĩa AppComponent cùng với mẫu HTML, CSS và một Unit Test.
        // - Là một component gốc, của 1 cây của các component lồng nhau (nested components)
    // + src/app/app.module.ts: định nghĩa AppModule.
    // + src/assets/*: là nơi bạn có thể đặt hình ảnh, bất kỳ thứ khác.
    // + src/environments/*: là thư mục chứa một tệp cho mỗi môi trường đích của bạn, mỗi tệp xuất các biến cấu hình đơn giản.
    // + src/browserslist: là một tệp cấu hình để chia sẻ các trình duyệt đích giữa công cụ front-end khác nhau.
    // + src/favicon.ico: icon trên title.
    // + src/index.html: 
    // + src/karma.conf.js:Cấu hình unit test for Karma, khi chạy ng test.
    // + src/main.ts: 
    // + src/polyfills.ts: Các trình duyệt khác nhau có các mức hỗ trợ khác nhau của các tiêu chuẩn web. Polyfills giúp bình thường hóa những khác biệt đó.
    // + src/styles.css: 
    // + test.ts:
    // + tsconfig.{app|spec}.json:
    // + tslint.json:

    // + e2e/:
    // + node_modules/: Node.js tạo thư mục này và đặt tất cả các mô-đun bên thứ ba được liệt kê trong package.json bên trong nó.
    // + .editorconfig:
    // + .gitignore: git.
    // + angular.json: Configuration for Angular CLI
    // + package.json: Cấu hình npm liệt kê các gói của bên thứ ba mà dự án của bạn sử dụng
    // + protractor.conf.js: Cấu hình kiểm tra đầu cuối cho Protractor, được use khi chạy ng e2e.
    // + README.md:Tài liệu cơ bản cho dự án của bạn, điền sẵn thông tin lệnh CLI
    // + tsconfig.json:Cấu hình trình biên dịch TypeScript cho IDE của bạn để nhận và cung cấp cho bạn công cụ hữu ích.
    // + tslint.json: Linting cấu hình cho TSLint cùng với Codelyzer, được sử dụng khi chạy ng lint

// 3. Các tính năng trong angular 2:
    // 1. Tow-way data binding: Dữ liệu được binding một cách tự động và nhanh chóng, những thay đổi trong view sẽ được tự động cập nhật vào trong các component class.
    // 2. Powerful routing support: Angular 2 hỗ trợ mạnh mẽ các routing thông qua cách tải trang không đồng bộ trên cùng 1 trang cho phép chúng ta tạo ra 1 single page application.
    // 3. Expressive HTML: Cho phép dùng cấu trúc lập trình để render và kiểm soát các trang HTML.
    // 4. Modular by design: Thiết kế theo hướng module hóa để tổ chức và quản lý code 1 cách tốt hơn.
    // 5. Built in backend support: Hổ trợ việc giao tiếp với back-end servers và thực thi bất kỳ bussines logic hoặc get data.
    // 6. Active community: Có cộng đồng support lớn và sup bởi google. 

// 4. Sự khác biệt chính giữa angular 1 và 2.
    // 1. Hổ trợ ES6: Angular2 được viết bằng Typesciprt. Điều đó đồng nghĩa là nó hổ trợ cho ES6 Module, class framework,...
    // 2. Components là 1 controller mới:
        // + Trong angular1 có controller, trong angular2  được thay thế bởi components.
        // EX: Controller và view in angular1:
            // View:
            <body ng-app="myApp" ng-controller="myCtrl">
                <h1>{{messege}}</h1>
            </body>
            // Controller:
            <script>
                var app = angular.module('myApp',[]);
                app.controller('myCtrl',function($scope){
                    $scope.message ="Hello Cọp";
                });
            </script>
        // EX: Controller và view in angular2
            export class AppComponent{
                messege:srting ='Hello Cọp';
            }

            import { Component } from '@angular/core';
            @Component({
                selector:'app',
                template:'<h1>{{message}}</h1>'
            })
        // Trong angular2, 1 component đại diện cho 1 phần tử UI. Có thể có nhiều component trong 1 single web page.
        // Các component là độc lập với nhau và quản lý 1 vùng của trang.
        // Các component có thể có cha and con.
    // 3. Directives:
        // Angular 1 có rất nhiều directives, được use nhiều nhất là ng-repeat and ng-if.
        // Trong angular 2 ng-style, ng-src , ng-href đã biến mất và chúng được thay thế bởi property binding.
        // EX:In angular1:
        <ul>
            <li ng-repeat='item in customes'>
                {{item.name}}
            </li>
        </ul>
        <div ng-if="isVIP">        
            <h3>VIP CUSTOMERS</h3>
        </div>
        // EX: In angular2: 
        @Directive({
            selector:'[MyDirective]'
        })
        class MyDirective{
            
        }
    // 4. Data bindings:
        // + Interpolation:
            //Angular 1
            <h3> {{customer.Name}}</h3> 
            
            //Angular 2
            <h3> {{customer.Name}}</h3>
        // + One way Binding:
            //Angular 1
            <h3>ng-bind="customers.name"</h3>
            //Angular 2    
            <h3>[innerText]="customers.name"</h3>
            //Trong angular 2, chúng ta có thể bind đến bất cứ thuộc tính nào của phần tử html
        // + Event Binding:
            //Angular 1:
            <button ng-click="save()">Save</button>
            //Angular 2:
            <button (click)="save()"></button>
        // + Two-way binding:
            //Angular 1:
            <input ng-model="customers.name"/>
            //Angular 2:
            <input [(ng-model)="customer.name"]/>
        // + Filters được đổi tên thành Pipes:
            //Angular 1:
            <td>{{cusotmers.name | uppercase}}</td>
            //Angular 2:
            <td>{{cusotmers.name | uppercase}}</td>
        // + Platform specific Bootstrap:
            //Angular 1:
            <body ng-app="myApp">
            //Angular 2:
            import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
            import {AppModule } from './app.module';
            platformBrowserDynamic().bootstrapModule(AppModule);
        // + Service:
            //Angular 1: Có Services, Factories, Providers, Constans và Values và chúng ta đưa vào trong controller để có thể dùng.
            //Angular 2: Tất cả mọi thứ trên đều được gộp vào Service.Class.
 */