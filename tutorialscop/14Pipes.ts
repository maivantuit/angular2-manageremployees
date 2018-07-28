// Một vài pipes thông dụng:
// 1. lowercase: {{value | lowercase}}
// 2. uppercase: {{value | uppercase}}
// 3. datepipe: {{today | date:'fullDate'}}
// 4. percentpipe: {{a | percent}}
// 5. asyncpipe: {{greeting | async}}
// 6. decimalpipe: {{e | number:'3.1-5'}}
// 7. jsonpipe: {{object | json}}: convert value into json string.
// 8. slicepipe:(substring): {{*ngFor = "let i of collection | slice:1:3"}}
// 9. more and more.

// Ngoài ra các bạn có thể tạo ra 1 pipes, và dùng lại nhiều lần.
// exponential-strength.pipe.ts
// import vào app,module.ts
