// src/mockData.js

// 画像から読み取ったメンター情報のダミーデータ
export const mentors = [
    {
        id: 1,
        name: "髙宮 駿",
        affiliation: "関西学院大学 バーチャルリアリティ研究室",
        tags: ["バーチャルリアリティ", "機械学習", "制御工学"],
        achievements: 2,
        interested: 20,
        // ダミー画像URL (適宜変更してください)
        imageUrl: "/assets/TakamiyaShun.png",
        introduction: "VR/AR技術を用いた新しいヒューマン・コンピュータ・インタラクションを研究しています。特に触覚フィードバックに興味があります。一緒に未来を作りましょう！",
        achievementsList: [
            `〇〇ハッカソン 優勝（${2}人と）`, // achievements の 2 を反映
            "△△研究発表 採択",
            "国際学会 XXX 登壇"
        ]
    },
    {
        id: 2,
        name: "河原 未知",
        affiliation: "近畿大学 行動経済学ゼミ",
        tags: ["経済", "統計", "臨床心理学"],
        achievements: 6,
        interested: 37,
        imageUrl: "/assets/KawaharaMiwa.png",
        introduction: "人はなぜ不合理な選択をしてしまうのか？行動経済学の観点から、人々の意思決定プロセスを研究しています。統計分析が得意です。",
        achievementsList: [
            "××論文 コンペティション入賞",
            "データ分析コンテスト 3位"
        ]
    },
    {
        id: 3,
        name: "藤原 奈津",
        affiliation: "関西学院大学 微分幾何学研究室",
        tags: ["ルベーク積分", "ベクトル解析"],
        achievements: 20,
        interested: 5,
        imageUrl: "/assets/FuziwaraNatsu.png",
        introduction: "純粋数学の美しさを探求しています。一見複雑に見える世界も、数学の言葉で記述すると驚くほどシンプルになります。",
        achievementsList: [
            "修士論文 優秀賞",
            "日本数学会 発表"
        ]
    },
    {
        id: 4,
        name: "川口 純平",
        affiliation: "同志社大学 政策ゼミ",
        tags: ["統計"],
        achievements: 1,
        interested: 10,
        imageUrl: "/assets/FuziwaraNatsu.png",
        introduction: "純粋数学の美しさを探求しています。一見複雑に見える世界も、数学の言葉で記述すると驚くほどシンプルになります。",
        achievementsList: [
            "修士論文 優秀賞",
            "日本数学会 発表"
        ]
    },
];

// ヘッダー部分のタグのダミーデータ
export const searchTags = [
    "バーチャルリアリティ",
    "機械学習",
    "プログラミング",
    "統計",
    "ベクトル解析",
];