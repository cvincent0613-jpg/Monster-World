// 異寵世界・多人模式設定
// 1. 去 Firebase 主控台建立專案，加入「網頁應用程式」，複製 firebaseConfig。
// 2. 將下面嘅 null 換成你複製嘅設定（保留 window.FIREBASE_CONFIG = 開頭）。
// 3. 將呢個檔案同 index.html 一齊放喺 GitHub repo 最外層。
// 冇設定（保持 null）時，遊戲會自動以單人模式運行。

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBy2T-pozJCCjY7MJLjI6KsGSv6hF-8eAk",
  authDomain: "monster-world-66a4c.firebaseapp.com",
  databaseURL: "https://monster-world-66a4c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monster-world-66a4c",
  storageBucket: "monster-world-66a4c.firebasestorage.app",
  messagingSenderId: "62653376956",
  appId: "1:62653376956:web:d98bcba2e2e5811298e3b9"
};

/* 例子（要換成你自己嘅數值）：
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "你的專案.firebaseapp.com",
  databaseURL: "https://你的專案-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "你的專案",
  appId: "1:1234567890:web:abcdef"
};
*/
