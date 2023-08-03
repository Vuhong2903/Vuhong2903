// let userList = [
//   {
//     id: 1,
//     name: "Rikkei",
//     age: 30,
//   },
//   {
//     id: 2,
//     name: "Academy",
//     age: 20,
//   },
// ];

// Cho người dùng nhập vào chữ cái: C/R/U/D

// - C: Cho người dùng nhập vào tên và tuổi, thêm vào danh sách theo dạng obj
// => in ra để kiếm tra dưới dạng table

// - R: In ra toàn bộ phần tử trong obj

// - U: Cho người dùng nhập vào ID muốn update, sau đó tìm kiếm trong mảng"
//     + Nếu có: Cho nhập vào tên và sử dụng lại
//     + Nếu không: In ra không tồn tại

// - D: Tương tự như Update:
// + Nếu có: Xóa user by id
// + Nếu không: in ra user not found

// let userList = [
//   {
//     id: 1,
//     name: "Future",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Academy",
//     age: 20,
//   },
// ];



let userList = [
  {
    id: 1,
    name: "Rikkei",
    age: 30,
  },
  {
    id: 2,
    name: "Academy",
    age: 20,
  },
];
let name = prompt("Nhập yêu cầu");

function printUserList() {
    console.log("Id,Name,Age");
    conssole.log(" ");
    userList.forEach(user => {
        console.log(`
        ${user.id}
        ${user.name}
        ${user.age}
        `);
    });
}

  

