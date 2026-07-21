# コンボ項目の追加方法

キャラクター固有の項目は、カテゴリー別のデータファイルに保存します。対応するファイル末尾へ、独立した `entries.push(...)` ブロックを1件追加してください。前後のカンマ調整は不要です。

- 基本コンボ → `characters/<character-id>/data/basic.js`
- 画面端コンボ → `characters/<character-id>/data/corner.js`
- SAコンボ → `characters/<character-id>/data/super.js`
- セットプレイ → `characters/<character-id>/data/setplay.js`
- モダン固有 → `characters/<character-id>/data/modern.js`

## 追加形式

```js
window.CHARACTER_DATA.entries.push({
  id: "重複しないID",
  section: "basic",
  categories: ["basic"],
  title: "コンボ名",
  subtitle: "短い説明",
  tags: [
    { text: "中央" }
  ],
  routes: [
    {
      label: "基本",
      steps: [
        "始動技",
        "つなぎ",
        "締め技"
      ]
    }
  ],
  followups: [
    { label: "セットプレイ", text: "締め後の行動" },
    { label: "起き攻め", text: "主な択" },
    { label: "メモ1", text: "重要な補足" }
  ],
  notes: [
    "補足説明"
  ]
});
```

セットプレイには `section: "setplay"` と `categories: ["setplay"]` を使用します。コンボ手順は必ず `steps` 配列へ分割し、矢印やHTMLを書かないでください。矢印とカード要素は共通描画処理が生成します。

## 主な項目

| 項目 | 必須 | 内容 |
|---|---:|---|
| `id` | 必須 | キャラクター内で重複しない英数字ID |
| `section` | 必須 | 表示する章。`basic`、`corner`、`super`、`setplay`、`modern` |
| `categories` | 任意 | 絞り込みボタンに対応する分類 |
| `title` | 必須 | カード見出し |
| `routes` | 必須 | 1件以上の `steps` を持つコンボルート |
| `followups` | 任意 | セットプレイ・起き攻め・メモなど、見出し付きの補足。メモには `tone: "warn"` を指定するとオレンジ・小さめで表示 |
| `notes` | 任意 | 補足。カード内でオレンジ・小さめの「メモ」として表示 |
| `callouts` | 任意 | 特に強調する注意事項 |

`templates/combo-entry.template.js` を複製して内容を書き換えるのが安全です。
