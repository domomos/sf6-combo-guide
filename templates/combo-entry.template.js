// 対応するカテゴリーの data/<category>.js の末尾へ追加します。
// セットプレイは section / categories に "setplay" を使用します。
window.CHARACTER_DATA.entries.push({
  id: "luke-basic-unique-name",
  section: "basic",
  categories: ["basic"],
  title: "コンボ名",
  subtitle: "このコンボを使う状況",
  open: false,
  tags: [
    { text: "中央" },
    { text: "ノーゲージ", tone: "good" }
  ],
  routes: [
    {
      label: "基本",
      steps: ["始動技", "つなぎ1", "つなぎ2", "締め技"]
    }
  ],
  notes: ["距離・用途・注意点などの補足。"],
  callouts: [
    { tone: "warn", text: "特に重要な注意点がある場合のみ記載。" }
  ]
});
