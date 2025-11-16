// src/App.jsx

import React from 'react';
import './App.css';
import MentorCard from './MentorCard.jsx';
import { mentors, searchTags } from './mockData.js';

// 1. ルーティング用のコンポーネントをインポート
import { Routes, Route } from 'react-router-dom';
// 2. 作成した詳細ページをインポート
import MentorDetailPage from './MentorDetailPage.jsx';
// 3. 詳細ページ用のCSSもインポート
import './MentorDetailPage.css'; 


// 4. リスト表示する部分を新しいコンポーネントとして切り出す
// (Appコンポーネントの中に定義)
const MentorListPage = () => {
  return (
    <>
      {/* 1. ヘッダー（検索バーとタグ） */}
      <header className="app-header">
        <div className="search-bar">
          <span>🔍 検索結果: 機械学習</span>
        </div>
        <div className="tag-cloud">
          {searchTags.map(tag => (
            <span key={tag} className="search-tag">{tag}</span>
          ))}
        </div>
      </header>

      {/* 2. メインコンテンツ (メンターリスト) */}
      <main className="mentor-list">
        {mentors.map(mentor => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </main>
    </>
  );
}


function App() {
  return (
    <div className="app-background">
      <div className="smartphone-container">
        <div className="screen">
          
          {/* --- 変更点: ここから --- */}
          {/*
            URLに応じて、<div className="screen"> の中身を
            <MentorListPage /> と <MentorDetailPage /> で切り替える
          */}
          <Routes>
            {/* パスが "/" (ホームページ) の場合 */}
            <Route path="/" element={<MentorListPage />} />
            
            {/* パスが "/mentor/1" や "/mentor/2" の場合 */}
            <Route path="/mentor/:id" element={<MentorDetailPage />} />
          </Routes>
          {/* --- 変更点: ここまで --- */}

        </div>
      </div>
    </div>
  );
}

export default App;