# felicette_server

npm install
npm install nodemon --save-dev

# run server  --> node server.js OR node server
# nodemon co the chay nhu sau: npm run startServer

# branch: 
#         - master -> source completed for release
#         - develop -> source merged from other branches

# quy định code trong dự án 
#         - Luôn luôn dùng dấu chấm phẩy (;)
#         - let nên dùng camelCase
#         - const thì quy theo upper case
#             + nếu đứng ở vị trí đầu file: MY_CONST
#             + còn nếu không xuất hiện ở đầu thì đặt theo camelCase
#         - 
#         - Không nên   ->  let fullName = firstName + " " + lastName;
#         - Nên         ->  let fullName = `${firstName} ${lastName}`;
#         - 
#         - 
# nếu bảng roles, users, user_role chưa có thì có thể uncomment ở dòng 27->30 trong file server.js
# nếu trình duyệt chặng cors thì cần cài extension CORS Unblock cho browser