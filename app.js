// BÀI 1 : viết hàm cho ng dùng nhập 2 số . tính tổng 2 số đó

// function tinhTongHaiSo() {
//     var so_a = parseFloat(prompt("Nhập số thứ nhất: "));
//     var so_b = parseFloat(prompt("Nhập số thứ hai: "));

//     var tong = so_a + so_b;
//     console.log("Tổng hai số: " + tong);
// }
// tinhTongHaiSo();



// BÀI 2 : viết 1 hàm nhận một chuỗi làm đối số và trả về độ dài của chuỗi
 
function doDaiChuoi(chuoi) {
    return chuoi.length;
}
var chuoiNhapVao = prompt("Nhập một chuỗi: ");
var doDai = doDaiChuoi(chuoiNhapVao);
console.log("Độ dài của chuỗi là: " + doDai);

