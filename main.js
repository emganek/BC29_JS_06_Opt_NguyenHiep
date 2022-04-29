
// BÀI TẬP 03----------------------------
// - Đầu vào:
//     + Số n
// - Xử lý:
//     + Tính n giai thừa bằng dòng lặp for
// - Đầu ra:
//     + kết quả n gia thừa

function isSoNguyenTo(n) {
    var ex03_count = 0;
    for (var i = 1; i<= n; i++){
        if (n % i == 0){
            ex03_count++;
        }
    }   
    if(ex03_count ==2){
        return true;
    }
    else{
        return false;
    }
}

document.getElementById("exBtn03").onclick = function () {
    var ex03_n = parseInt(document.getElementById("ex03_n").value);
    var ex03_content = "";

    for (var i=1; i <= ex03_n; i++){
        if(isSoNguyenTo(i)){
            ex03_content += i + " ";
        }
    }
    document.getElementById("ex03_result").innerHTML = ex03_content;
}
