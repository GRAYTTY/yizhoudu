// 等待DOM加载完成后再执行所有脚本
document.addEventListener('DOMContentLoaded', function() {
    // 日记保存功能
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
    
    // 迷你小亭语录库
    const xiaotingQuotes = [
        "今天也是元气满满的小亭！",
        "记得按时吃饭饭！",
        "给你一口小熊饼干！",
        "唔……偷偷亲一下你",
        "小亭今天也要加油写日记哦！",
        "在和小海鸥聊天ing...诶呀被发现了！",
        "摸一会儿鱼嘿嘿（晃脚脚）",
        "好想喝奶茶呀！你也要喝吗？",
        "你今天的心情是什么颜色？是...香蕉颜色吗？！",
        "（在玩熊熊ing）嗯？你也要摸摸吗？（举起来）给你！"
        "记得多喝水哦！（叉腰）",
        "给田田和邱邱一点爱！",
        "小海鸥今天也在努力吗？我也要加油！ヾ(◍°∇°◍)ﾉﾞ",
        "小亭永远是最棒的～"
    ];
    
    // 弹窗状态变量
    let isPopupFirstOpen = true;
    
    // 弹窗核心逻辑
    function togglePopup() {
        const popup = document.getElementById('xiaoting-popup');
        const text = document.getElementById('xiaoting-text');
        
        if (popup.style.display === 'none' || popup.style.display === '') {
            popup.style.display = 'block';
            if (isPopupFirstOpen) {
                text.textContent = "你好，我是迷你小亭哦！";
                isPopupFirstOpen = false;
            } else {
                text.textContent = getRandomQuote();
            }
        } else {
            text.textContent = getRandomQuote();
        }
    }
    
    // 关闭弹窗逻辑
    function closePopup() {
        const popup = document.getElementById('xiaoting-popup');
        popup.style.display = 'none';
        isPopupFirstOpen = true;
    }
    
    // 随机获取语录
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * xiaotingQuotes.length);
        return xiaotingQuotes[randomIndex];
    }
    
    // 获取元素并绑定事件
    const xiaotingButton = document.getElementById('xiaoting-button');
    const xiaotingCloseBtn = document.getElementById('xiaoting-close');
    
    // 绑定点击事件
    if (xiaotingButton) {
        xiaotingButton.addEventListener('click', togglePopup);
    }
    
    if (xiaotingCloseBtn) {
        xiaotingCloseBtn.addEventListener('click', closePopup);
    }
    
    // 暴露saveEntry函数到全局，供HTML中的onclick调用
    window.saveEntry = saveEntry;
});
    