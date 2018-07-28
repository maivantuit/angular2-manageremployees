// Flow process: Để run project và hiểu các thành phần của nó:

// Step 1. User request.

// Step 2. Run index.html.
    // + Là khung hiển thị của website.
    // + Trong file này nhúng: Component chính và các thành phần hiển thị liên quan 1 website bình thường: icon,title,meta,...etc.

// Step 3. Tiếp theo main.ts run.
    // + Trong file này đang import về browser web, environment,.. đặc biêt là AppModule từ ./app/app.module
    // + Run module.
// Step 4. Trong module app.module.ts.
    // + Đang import component: AppComponent từ ./app.component
    // + Export một cái AppModule mà Step 3 đã import.
// Step 5. Trong component app.component.ts.
    // + Đang import componnent của thư việc angularcore.
    // + Định nghĩa 1 
        // - selector: component name.
        // - tempalte: hiển thị phần website của component này.
        // - style: css cho component này.
    // + Đang export một AppComponent để bên Step 4 import.