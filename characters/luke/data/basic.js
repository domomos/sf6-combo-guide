window.CHARACTER_DATA.entries.push(
{
  "id": "luke-basic-01",
  "section": "basic",
  "categories": [
    "basic"
  ],
  "title": "小技確認・中央",
  "subtitle": "最も基本的な弱攻撃始動",
  "open": true,
  "tags": [
    {
      "text": "中央"
    },
    {
      "text": "ノーゲージ",
      "tone": "good"
    }
  ],
  "followups": [
    {
      "label": "セットプレイ",
      "text": "前ステ → 膝"
    },
    {
      "label": "起き攻め",
      "text": "投げ または 2弱P → 2中P"
    }
  ],
  "notes": [
    "弱フラ後は前ステから起き攻めへ。距離とヒット数でつながり方が変わるため、実戦では2発確認が安定です。"
  ],
  "routes": [
    {
      "label": null,
      "steps": [
        "2弱P×2〜3",
        "弱フラ"
      ]
    }
  ]
}
);

window.CHARACTER_DATA.entries.push(
{
  "id": "luke-basic-02",
  "section": "basic",
  "categories": [
    "basic",
    "corner"
  ],
  "title": "小技確認・画面端",
  "subtitle": "現行版で重要な端ルート",
  "tags": [
    {
      "text": "画面端"
    },
    {
      "text": "ノーゲージ",
      "tone": "good"
    }
  ],
  "followups": [
    {
      "label": "セットプレイ",
      "text": "中足"
    },
    {
      "label": "起き攻め",
      "text": "投げ または 2中P または シミー"
    }
  ],
  "notes": [
    "弱フラ止めよりダメージ・ドライブゲージ回収が増え、そのまま端起き攻めに移れます。"
  ],
  "routes": [
    {
      "label": null,
      "steps": [
        "2弱P×2〜3",
        "弱フラ",
        "弱ライジングアッパー"
      ]
    }
  ]
}
);

window.CHARACTER_DATA.entries.push(
{
  "id": "luke-basic-03",
  "section": "basic",
  "categories": [
    "basic"
  ],
  "title": "2中P確認・ノーゲージ",
  "subtitle": "近めで当たったときの安定択",
  "tags": [
    {
      "text": "中央"
    },
    {
      "text": "ノーゲージ",
      "tone": "good"
    }
  ],
  "followups": [
    {
      "label": "セットプレイ",
      "text": "前ステ → 膝"
    },
    {
      "label": "起き攻め",
      "text": "投げ または 2弱P → 2中P"
    }
  ],
  "notes": [
    "画面端なら弱ライジングアッパーまで追加できます。"
  ],
  "routes": [
    {
      "label": null,
      "steps": [
        "2中P",
        "2弱P",
        "弱フラ"
      ]
    }
  ]
}
);

window.CHARACTER_DATA.entries.push(
{
  "id": "luke-basic-04",
  "section": "basic",
  "categories": [
    "basic"
  ],
  "title": "中足・2中Pラッシュ基本",
  "subtitle": "ルークの代表的な中央コンボ",
  "open": true,
  "tags": [
    {
      "text": "中央"
    },
    {
      "text": "3ゲージ",
      "tone": "warn"
    },
    {
      "text": "運び"
    }
  ],
  "followups": [
    {
      "label": "セットプレイ",
      "text": "前ステ → 歩き投げ または 膝"
    },
    {
      "label": "起き攻め",
      "text": "投げ または 2弱P → 2中P"
    },
    {
      "label": "メモ1",
      "tone": "warn",
      "text": "中フラが最大溜めになってもJST弱フラはつながります。弱フラまで最大溜めになったら、強フラではなく中フラ締めに切り替えます。"
    },
    {
      "label": "メモ2",
      "tone": "warn",
      "text": "理想は「2中K または 2中P → CR 2中P」の「2中P」まででヒット確認を頑張る。ガードされていたらコンボをせずに投げや打撃（2中P）をしたい。"
    }
  ],
  "routes": [
    {
      "label": null,
      "steps": [
        "2中K または 2中P",
        "CR 2中P",
        "2強P",
        "JST中フラ",
        "JST弱フラ",
        "強フラ"
      ]
    },
    {
      "label": "失敗時の切り替え",
      "steps": [
        "2強P",
        "最大溜め中フラ",
        "JST弱フラ",
        "中フラ"
      ]
    }
  ]
}
);

window.CHARACTER_DATA.entries.push(
{
  "id": "luke-basic-04-2",
  "section": "basic",
  "categories": [
    "basic"
  ],
  "title": "中足・2中Pラッシュ基本2",
  "subtitle": "ノーチェイサー締めの安定ルート",
  "tags": [
    {
      "text": "中央"
    },
    {
      "text": "3ゲージ",
      "tone": "warn"
    },
    {
      "text": "安定"
    }
  ],
  "followups": [
    {
      "label": "セットプレイ",
      "text": "前ステ → 膝"
    },
    {
      "label": "起き攻め",
      "text": "投げ または 2弱P → 2中P"
    },
    {
      "label": "メモ1",
      "tone": "warn",
      "text": "中足・2中Pラッシュ基本が難しい場合はこっち。"
    }
  ],
  "routes": [
    {
      "label": null,
      "steps": [
        "2中K または 2中P",
        "CR 2中P",
        "2強P",
        "JST中フラ",
        "ノーチェイサー"
      ]
    }
  ]
}
);

window.CHARACTER_DATA.entries.push(
{
  "id": "luke-basic-05",
  "section": "basic",
  "categories": [
    "basic",
    "setplay"
  ],
  "title": "中央・1ゲージ運び＋強起き攻め",
  "subtitle": "火力と起き攻めを両立",
  "tags": [
    {
      "text": "中央"
    },
    {
      "text": "1ゲージ",
      "tone": "warn"
    },
    {
      "text": "起き攻め"
    }
  ],
  "notes": [
    "強フラ後に、膝持続・詐欺飛び・密着起き攻めを選択できます。"
  ],
  "routes": [
    {
      "label": null,
      "steps": [
        "各種始動",
        "2強P",
        "JST中フラ",
        "DR 5強P",
        "JST強フラ"
      ]
    }
  ]
}
);

window.CHARACTER_DATA.entries.push(
{
  "id": "luke-basic-06",
  "section": "basic",
  "categories": [
    "basic"
  ],
  "title": "飛び込み・大きな確定反撃",
  "subtitle": "中央付近で飛びが通ったとき",
  "tags": [
    {
      "text": "中央"
    },
    {
      "text": "高火力"
    }
  ],
  "followups": [
    {
      "label": "セットプレイ",
      "text": "前ステ → 歩き投げ または 膝"
    },
    {
      "label": "起き攻め",
      "text": "投げ または 2弱P → 2中P"
    },
    {
      "label": "メモ1",
      "tone": "warn",
      "text": "ジャンプ強K → 強Pまででヒット確認をして、ガードされていたら中弾でも撃っときましょう。"
    }
  ],
  "routes": [
    {
      "label": null,
      "steps": [
        "ジャンプ強K",
        "強P",
        "JST弱フラ",
        "強フラ"
      ]
    }
  ]
}
);

window.CHARACTER_DATA.entries.push(
{
  "id": "luke-basic-07",
  "section": "basic",
  "categories": [
    "basic"
  ],
  "title": "強Pパニカン・シミー",
  "subtitle": "OD無敵ガード後や投げ抜け狩り",
  "open": true,
  "tags": [
    {
      "text": "高火力"
    },
    {
      "text": "OD使用",
      "tone": "warn"
    }
  ],
  "notes": [
    "画面端では中フラを省略し、5強P PC → ODフラ → DDTでも十分な火力です。"
  ],
  "routes": [
    {
      "label": null,
      "steps": [
        "5強P［パニッシュカウンター］",
        "JST中フラ",
        "ODフラ",
        "DDT"
      ]
    }
  ]
}
);

window.CHARACTER_DATA.entries.push(
{
  "id": "luke-basic-08",
  "section": "basic",
  "categories": [
    "basic"
  ],
  "title": "ラッシュ中段始動",
  "subtitle": "崩しからの実戦ルート",
  "tags": [
    {
      "text": "中段"
    },
    {
      "text": "OD使用",
      "tone": "warn"
    }
  ],
  "notes": [
    "ゲージ温存なら、DR 6中P → 2中P → 弱フラ。距離が合えば中昇竜締めも可能です。"
  ],
  "routes": [
    {
      "label": null,
      "steps": [
        "DR 6中P",
        "2中P",
        "ODフラ",
        "微歩き中ライジングアッパー"
      ]
    }
  ]
}
);
