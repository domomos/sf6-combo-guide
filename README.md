# SF6 Combo Guide

GitHub Pagesでそのまま公開できる、ビルド不要の静的なコンボ・セットプレイ参照サイトです。

## 公開方法

1. このフォルダの中身をGitHubリポジトリのルートへ置く
2. GitHubの `Settings` → `Pages` を開く
3. `Build and deployment` のSourceを `Deploy from a branch` にする
4. Branchを `main`、Folderを `/(root)` に設定して保存

すべて相対パスで参照しているため、GitHub Pagesのプロジェクトサイトとして公開できます。

## ファイル構成

```text
characters/<character-id>/
├─ index.html
└─ data/
   ├─ meta.js       # 共通情報・表記・参照先・空のentries
   ├─ basic.js      # 基本・実戦コンボ
   ├─ corner.js     # 画面端コンボ
   ├─ super.js      # SAコンボ
   ├─ setplay.js    # セットプレイ
   └─ modern.js     # モダン固有
```

共通デザインと描画処理は `assets/` に置き、キャラクター固有情報は上記のカテゴリー別データファイルにのみ保存します。コンボ手順は `steps` 配列で管理し、矢印やカードHTMLは共通描画処理が生成します。PC・スマホともにコンボカードは横長の1列表示です。

## コンボを追加する方法

追加先はカテゴリーごとに異なります。

- 基本コンボ: `data/basic.js`
- 画面端コンボ: `data/corner.js`
- SAコンボ: `data/super.js`
- セットプレイ: `data/setplay.js`
- モダン固有: `data/modern.js`

対応するファイル末尾へ独立した `window.CHARACTER_DATA.entries.push({...});` ブロックを追加してください。詳しくは `ADDING_COMBOS.md` と `templates/combo-entry.template.js` を参照してください。

## 将来のページ分割方針

現在はカテゴリー絞り込みがあるため、1キャラクターにつき1ページ表示を維持します。キャラクター全体で20～30項目を大きく超える、または1カテゴリーが10項目前後を超える場合は、同じデータを流用して `combos/index.html` と `setplay/index.html` のような表示ページ分割を検討します。

## ローカル確認

```bash
python -m http.server 8000
```

- 一覧: `http://localhost:8000/`
- ルーク: `http://localhost:8000/characters/luke/`
