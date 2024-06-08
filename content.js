// content_script.js
// makecode.microbit.org/#editor を子供が読める日本語に変換する

let KANTAN_JA_REPLACE_TEXT = [
  ["基本", "きほん"],
  ["入力", "にゅうりょく"],
  ["音楽", "おんがく"],
  ["LED", "ライト"],
  ["無線", "むせんつうしん"],
  ["論理", "せいぎょ"],
  ["変数", "へんすう"],
  ["計算", "けいさん"],
  ["拡張機能", "ほかのきのう"]
]

function replaceText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    KANTAN_JA_REPLACE_TEXT.forEach((pair) => {
      node.textContent = node.textContent.replace(pair[0], pair[1]);
    });
  } else {
    node.childNodes.forEach(replaceText);
  }
}

const observer = new MutationObserver(records => {
  replaceText(document.body);
})
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
});