window.CHARACTER_DATA = {
  "meta": {
    "game": "Street Fighter 6",
    "id": "luke",
    "name": "ルーク",
    "romanName": "LUKE",
    "title": "コンボ・セットプレイ集"
  },
  "filters": [
    {
      "id": "all",
      "label": "すべて"
    },
    {
      "id": "notation",
      "label": "表記"
    },
    {
      "id": "basic",
      "label": "基本"
    },
    {
      "id": "corner",
      "label": "画面端"
    },
    {
      "id": "super",
      "label": "SA"
    },
    {
      "id": "setplay",
      "label": "セットプレイ"
    },
    {
      "id": "modern",
      "label": "モダン"
    }
  ],
  "notation": [
    [
      "2弱P",
      "しゃがみ弱P"
    ],
    [
      "5強P",
      "立ち強P"
    ],
    [
      "6中P",
      "前中P・中段"
    ],
    [
      "4強P",
      "サプレッサー"
    ],
    [
      "CR",
      "キャンセルラッシュ"
    ],
    [
      "DR",
      "パリィからの生ラッシュ"
    ],
    [
      "JST",
      "ジャスト版フラッシュナックル"
    ],
    [
      "最大溜め",
      "ジャストを過ぎて最大まで溜める"
    ]
  ],
  "sections": [
    {
      "id": "basic",
      "title": "実戦コンボ",
      "caption": "始動別の主力"
    },
    {
      "id": "corner",
      "title": "画面端コンボ",
      "caption": "ループと起き攻め"
    },
    {
      "id": "super",
      "title": "SAコンボ",
      "caption": "ゲージ別リーサル"
    },
    {
      "id": "setplay",
      "title": "起き攻め・セットプレイ",
      "caption": "締め技ごとの選択肢"
    },
    {
      "id": "modern",
      "title": "モダン操作の注意",
      "caption": "差が出るポイント"
    }
  ],
  "decision": {
    "title": "画面位置で選ぶ",
    "caption": "判断を単純化する表",
    "rows": [
      [
        "中央・端が遠い",
        "JST中フラ → JST弱フラ → 強フラ"
      ],
      [
        "中央・1ゲージ使える",
        "JST中フラ → DR強P → JST強フラ"
      ],
      [
        "端が近い",
        "JST弱フラ始動へ切り替える"
      ],
      [
        "完全な画面端",
        "JST弱フラ → 中サンド → 強昇竜"
      ],
      [
        "端でシミー重視",
        "JST弱フラ → J中P → 最大溜め空中フラ"
      ],
      [
        "強Pパニカン",
        "JST中フラ → ODフラ → DDT"
      ]
    ],
    "note": "中フラは端が近いと壁バウンドや位置入れ替えが起きやすいため、『端が近づいたら弱フラルートへ』が判断の中心です。"
  },
  "sources": [
    {
      "label": "公式アップデート情報",
      "href": "https://www.streetfighter.com/6/buckler/ja-jp/information/detail/update20260702"
    },
    {
      "label": "公式フレームデータ：ルーク",
      "href": "https://www.streetfighter.com/6/ja-jp/character/luke/frame"
    }
  ],
  "entries": []
};
