export const formatDateTime = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return ''; // Trả về chuỗi rỗng nếu date không hợp lệ
    }
    // Định dạng ngày theo chuẩn của Mỹ
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Sử dụng định dạng 24 giờ
    };
    return date ? date.toLocaleDateString('en-US', options) : '';
};