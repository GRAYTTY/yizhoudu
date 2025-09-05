function saveEntry() {
    const date = document.getElementById("date").value;
    const mood = document.getElementById("mood").value;
    const diary = document.getElementById("diary").value;

    if (!date || !diary) {
        document.getElementById("status").textContent = "请填写日期和日记内容";
        return;
    }

    const entry = { mood, diary };
    localStorage.setItem("entry-" + date, JSON.stringify(entry));
    document.getElementById("status").textContent = "✅ 已保存！";
}


// 迷你小亭语录弹窗逻辑
const xiaotingQuotes = [
  "今天也是元气满满的小亭！",
  "记得按时吃饭饭！",
  "给你一口小熊饼干！",
  "唔……偷偷亲一下你",
  "小亭今天也要加油写日记哦！",
  "在和小海鸥聊天ing...诶呀被发现了！",
  "摸一会儿鱼嘿嘿（晃脚脚）",
  "好想喝奶茶呀！你也要喝吗？",
  "你今天的心情是什么颜色？",
  "记得多喝水哦！（叉腰）",
  "给田田和邱邱一点爱！",
  "小海鸥今天也在努力吗？我也要加油！ヾ(◍°∇°◍)ﾉﾞ",
  "杜杜永远是最棒的～"
];


// ✅ 记录是否首次点击（true 表示还没打开过）
let firstClick = true;

// ✅ 控制弹窗逻辑
function togglePopup() {
  const popup = document.getElementById('xiaoting-popup');
  const text = document.getElementById('xiaoting-text');

  // 第一次点击 → 显示默认话术
  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'block';
    if (firstClick) {
      text.textContent = "你好，我是迷你小亭！";
      firstClick = false;
    } else {
      // 后续点击 → 随机语录
      const randomIndex = Math.floor(Math.random() * xiaotingQuotes.length);
      text.textContent = xiaotingQuotes[randomIndex];
    }
  } else {
    // 如果弹窗已显示，再点小熊 → 刷新语录
    const randomIndex = Math.floor(Math.random() * xiaotingQuotes.length);
    text.textContent = xiaotingQuotes[randomIndex];
  }
}

// ✅ 关闭弹窗
function closePopup() {
  document.getElementById('xiaoting-popup').style.display = 'none';
}