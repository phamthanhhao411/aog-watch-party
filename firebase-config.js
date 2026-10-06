// Cấu hình Firebase – project "aog-watch-party" (Project settings → General → Your apps → aog-web).
// apiKey của Firebase Web là định danh công khai (không phải mật khẩu); quyền truy cập do Security Rules kiểm soát.
window.AOG_FIREBASE = {
  apiKey: "AIzaSyASJWvvRtUMZCNopkR-YNcCm5FLTiFMdmo",
  authDomain: "aog-watch-party.firebaseapp.com",
  databaseURL: "https://aog-watch-party-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aog-watch-party",
  appId: "1:821816586633:web:92737609663bd4efc03158"
};
// (Tùy chọn) Link Google Sheet báo cáo để hiện trong trang Admin → Liên kết thiết bị
window.AOG_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1nRmN6s0gKsKalfLssdGkvtZZhy1IfS5aUKJl29Z2ybw/edit';
// Web App Apps Script dùng để chép ngay kết quả sang Google Sheet sau mỗi lượt (fn=fbsync)
window.AOG_SHEET_SYNC_URL = 'https://script.google.com/macros/s/AKfycby68hb5PWmAFfEerTlkA4jv8Q76UKw2C-Ref4dNfa6O1ADME5kJ3GVBE9k-M7r8o7yP/exec';
