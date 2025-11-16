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
        imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80",
    },
    {
        id: 2,
        name: "河原 未知",
        affiliation: "近畿大学 行動経済学ゼミ",
        tags: ["経済", "統計", "臨床心理学"],
        achievements: 6,
        interested: 37,
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    },
    {
        id: 3,
        name: "藤原 奈津",
        affiliation: "関西学院大学 微分幾何学研究室",
        tags: ["ルベーク積分", "ベクトル解析"],
        achievements: 20,
        interested: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    },
];

// ヘッダー部分のタグのダミーデータ
export const searchTags = [
    "VR/AR",
    "バーチャルリアリティ",
    "UI",
    "プログラミング",
    "哲学",
    "AI",
];