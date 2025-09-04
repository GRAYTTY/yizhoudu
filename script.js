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