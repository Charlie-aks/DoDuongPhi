// Hàm để định dạng số với hai chữ số (vd: 01, 02, ..., 09)
function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Hàm để cập nhật thời gian và hiển thị lên màn hình
function updateClock() {
    const now = new Date();
    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());
    const seconds = formatNumber(now.getSeconds());

    const timeString = hours + ':' + minutes + ':' + seconds;
    console.log(timeString); // Hiển thị thời gian lên console (có thể thay bằng cách khác như hiển thị lên giao diện HTML)
    
    // Cập nhật thời gian sau mỗi giây bằng cách gọi lại hàm updateClock sau 1000ms (1 giây)
    setTimeout(updateClock, 1000);
}

// Bắt đầu cập nhật thời gian
updateClock();
