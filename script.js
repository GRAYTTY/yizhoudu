const xiaotingButton = document.getElementById("xiaoting-button");
const xiaotingDialog = document.getElementById("xiaoting-dialog");
const quoteBox = document.getElementById("xiaoting-quote");

const quotes = [
  "今天可以吃熊熊味布丁吗！", 
  "杜杜亲亲我我就不哭啦~", 
  "小海鸥抢我熊熊了啦呜呜呜~", 
  "我超乖的，真的真的！", 
  "要不要一起画画！我画你你画我~"
];

function randomQuote() {
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  return `小亭说：\n“${pick}”`;
}

xiaotingButton.addEventListener("click", () => {
  xiaotingDialog.style.display = "block";
  quoteBox.innerText = randomQuote();
});
