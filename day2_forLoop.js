var dem = 0;
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 7; j++) {
        dem = dem + 1
        if(dem == 33)
            break
        if (i % 2 == 0)
        document.write("<div class='square' onclick = 'showAlert()'>"+dem+"</div>");
        else
        document.write("<div class='square red' onclick = 'showAlert()'>"+dem+"</div>");
    }
    document.write("<div class='clear'></div>"); // Clear dòng sau mỗi hàng
}

const showAlert = () => {
    var items = document.getElementsByClassName("square");
    Array.from(items).forEach(item => {
        item.onclick = () =>{
            alert("Đây là số:" + item.innerHTML);
        }
    });
}