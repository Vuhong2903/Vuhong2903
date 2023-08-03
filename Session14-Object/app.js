// Object là đối tượng , khái niệm trừu tượng dùng để miêu tả hay biểu diễn một vật hay một đối tượng cụ thể

// ví dụ:con mèo:màu lông : trắng , tiếng kêu meomeo,..

// 2.cú pháp
// <từ khoá khai báo biến >_<tên của đối tượng> ={key1: value1, key2: value2,..}
//  ví dụ

// let student = {
//     name: "Minh Phương",
//     age: 20,
//     arr:[1,2,3,4],
// };
// console.log(student);

// C,R,U,D 

// C - Create

// Cách 2: thêm kiểu ES6-Dynamic
// let myEmail = "Email";
// let valuaEmail = "minhphuong@gmail.com"

// let student = {
//         name: "Minh Phương",
//         age: 20,
//         address: "Hà Nội",
//         [myEmail]: valuaEmail,
//     };

    // Cách 1
    // tên đối tượng (key mới) = giá trị
    // student.phone = "0123456789";

    // console.log(student);

    // // R-Read
    // // Read one
    // console.log(student.address);

    // Read all
    // EX01: 
    // + Dùng vòng lặp for để in ra tất cả value trong Object

    // let keys = Object.keys(student);
    // for (let i = 0; i< key.length; i++) {
    //     let key = keys [i];
    //     let value = student[key];
    //     console.log(value);
    // }
    // +Tìm hiểu và sử dụng vòng lặp for in

    
// for (const key in student) {
// //   console.log(student);
// //   console.log(key);
// console.log(student[key]);
// }

// U - Update

// student.address = "Hồ Chí Minh";
// console.log(student);

// D - Delete

// delete student.age;
// console.log(student);

// EX2: Tạo đối tượng person bao gồm: tên, tuổi, địa chỉ, sđt => in tất cả thông tin
// input: object person: name, age, address, phone
// output: "Thông tin người dùng là:
// // tên: ... - age: ... - địa chỉ: ... - sđt: ...
//  let person = {
//     name: "Vu Hong",
//     age: 25,
//     address: "Tokyo",
//     phone: "08070610397"
//   };
//   console.log(`
//     Thông tin người dùng là:
//     -tên: ${person.name} 
//     - tuổi: ${person.age} 
//     - địa chỉ: ${person.address}
//     - sđt: ${person.phone}
//   `);
//   ==>in dữ liệu theo kiểu table

// EX3: Tạo đối tượng product bao gồm: tên, giá tiền (12000), Danh mục (category)
// input: object product: name, price, category
// output: "Thông tin sản phẩm là:
// Tên sp: ... - giá sp: 12000 VNĐ - Danh mục: ...

// let product = {
//     name: "Sản phẩm ABC",
//     price: 12000,
//     category: "Đồ điện tử",
//   };
  
//   console.log(`
// Thông tin sản phẩm là:
// - tên sp: ${product.name} 
// - giá sp: ${product.price} VNĐ 
// - Danh mục: ${product.category}
// `);
  

// EX4: Tạo đối tượng employee bao gồm: tên, lương (12000), chức vụ
// input: object employee: name, salary, department
// output: "Thông tin nhân viên là:
// Tên NV: ... - Lương NV: 24000 VNĐ - Chức vụ: ...

// let employee = {
//     name: "Vu Hong",
//     salary: 24000,
//     department: "Nhân viên Cty"
//   };

//   employee.salary *=2;
//   console.log(`
//   Thông tin nhân viên là:
//   Tên NV: ${employee.name} 
// - Lương NV: ${employee.salary} VNĐ 
// - Chức vụ: ${employee.department}

// `);
  
 

// EX5: Tạo đối tượng car bao gồm: brand, color, year
// input: object car: brand, color, year,
// output: "Thông tin xe hơi là: 
// Hãng xe là: ..., màu xe: ..., năm sx: ..., Biển số xe: ... 

// let car = {
//     brand: "Mercedes",
//     color: "White",
//     year: 2023,
//     licensePlate: "Kitaku6868"
//   };
  
//   console.log(`
//   Thông tin xe hơi là:
//   Hãng xe là: ${car.brand}, 
//   màu xe: ${car.color}, 
//   năm sx: ${car.year}, 
//   Biển số xe: ${car.licensePlate}
//   `);
  
  
  
