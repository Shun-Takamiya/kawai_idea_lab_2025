// src/MentorDetailPage.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ページ遷移用のフック
import { mentors } from './mockData'; // データは同じものを使う
import './MentorDetailPage.css'; // 詳細ページ専用のCSS（後で作成）

const MentorDetailPage = () => {
const { id } = useParams(); // URLの :id (例: /mentor/1 の "1") を取得
const navigate = useNavigate(); // 「戻る」ボタンで使う

// URLのid (文字列) と一致するメンターを mockData から探す
// mentor.id (数値) と id (文字列) を比較するため、== で比較
const mentor = mentors.find(m => m.id == id);

// メンターが見つからなかった場合の処理
if (!mentor) {
return (
    <div className="detail-page">
    <p>該当するメンターが見つかりませんでした。</p>
    <button onClick={() => navigate(-1)} className="back-button">
        戻る
    </button>
    </div>
);
}

// 大学名と研究室を分離
const affiliationParts = mentor.affiliation.split(' ');
const university = affiliationParts[0];
const lab = affiliationParts.slice(1).join(' ');

return (
<div className="detail-page">
    {/* --- 戻るボタン --- */}
    <button onClick={() => navigate(-1)} className="back-button">
    &lt; 戻る
    </button>

    {/* --- ヘッダー情報 --- */}
    <img src={mentor.imageUrl} alt={mentor.name} className="detail-image" />
    <h1 className="detail-name">{mentor.name}</h1>
    <p className="detail-affiliation">{university}</p>
    <p className="detail-lab">{lab}</p>

    <div className="detail-tags">
    {mentor.tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
    ))}
    </div>

    {/* --- 詳細情報 --- */}
    <div className="detail-section">
    <h2>自己紹介</h2>
    <p>
        （ここにメンターの自己紹介文が入ります）
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    </div>

    <div className="detail-section">
    <h2>実績</h2>
    <ul>
        <li>〇〇ハッカソン 優勝（{mentor.achievements}人と）</li>
        <li>△△研究発表 採択</li>
    </ul>
    </div>

    <button className="contact-button">面談をリクエスト</button>
</div>
);
};

export default MentorDetailPage;