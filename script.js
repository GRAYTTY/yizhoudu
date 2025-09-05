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
let isPopupFirstOpen = true;

// 弹窗核心逻辑（不变）
function togglePopup() {
  const popup = document.getElementById('xiaoting-popup');
  const text = document.getElementById('xiaoting-text');
  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'block';
    if (isPopupFirstOpen) {
      text.textContent = "你好，我是迷你小亭哦！"; // 同步 HTML 中的默认文本
      isPopupFirstOpen = false;
    } else {
      text.textContent = getRandomQuote();
    }
  } else {
    text.textContent = getRandomQuote();
  }
}

// 关闭弹窗逻辑（不变）
function closePopup() {
  const popup = document.getElementById('xiaoting-popup');
  popup.style.display = 'none';
  isPopupFirstOpen = true;
}

// 抽取随机语录函数（不变）
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * xiaotingQuotes.length);
  return xiaotingQuotes[randomIndex];
}

// ---------------------- 关键补充：绑定点击事件 ----------------------
// 获取小熊按钮和关闭按钮
const xiaotingButton = document.getElementById('xiaoting-button');
const xiaotingCloseBtn = document.getElementById('xiaoting-close');

// 给小熊按钮绑定「打开/刷新弹窗」事件
xiaotingButton.addEventListener('click', togglePopup);

// 给「知道啦」按钮绑定「关闭弹窗」事件
xiaotingCloseBtn.addEventListener('click', closePopup);
