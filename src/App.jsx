// src/App.jsx

import React, { useState } from 'react'; // useState をインポート
import './App.css';
import MentorCard from './MentorCard.jsx';
import { mentors, searchTags } from './mockData.js';

import { Routes, Route } from 'react-router-dom';
import MentorDetailPage from './MentorDetailPage.jsx';
import './MentorDetailPage.css'; 

// 4. リスト表示する部分の新しいコンポーネント
const MentorListPage = () => {
  const [activeTags, setActiveTags] = useState([]);
  
  // --- 変更点 (ここから) ---
  // 1. 入力中の検索キーワードを管理
  const [searchTerm, setSearchTerm] = useState("");
  // 2. 検索ボタンが押された時のキーワードを管理
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");

  // 3. 検索ボタンがクリックされたときの処理
  const handleSearchSubmit = () => {
    setSubmittedSearchTerm(searchTerm);
  };
  // --- 変更点 (ここまで) ---

  const handleTagClick = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  // 4. メンターを絞り込むロジック
  const filteredMentors = mentors.filter(mentor => {
    // 4-1. タグでの絞り込み
    const tagMatch = activeTags.length === 0 
      ? true 
      : activeTags.every(activeTag => mentor.tags.includes(activeTag));

    // --- 変更点 (ここから) ---
    // 4-2. 検索キーワードでの絞り込み
    const searchTermLower = submittedSearchTerm.toLowerCase().trim();
    
    // 検索語が空なら、常に true (絞り込まない)
    if (searchTermLower === "") {
      return tagMatch; // タグの絞り込み結果だけを返す
    }

    // 検索語がある場合、名前・所属・タグのいずれかに含まれるかチェック
    const searchMatch = 
      mentor.name.toLowerCase().includes(searchTermLower) ||
      mentor.affiliation.toLowerCase().includes(searchTermLower) ||
      mentor.tags.some(tag => tag.toLowerCase().includes(searchTermLower));

    // 両方に一致する必要がある
    return tagMatch && searchMatch;
    // --- 変更点 (ここまで) ---
  });

  return (
    <>
      <header className="app-header">
        {/* --- 変更点: 検索バーを <input> と <button> に変更 --- */}
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="名前やキーワードで検索"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // Enterキーでも検索できるように
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearchSubmit();
            }}
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            検索
          </button>
        </div>
        {/* --- 変更点 (ここまで) --- */}
        
        <div className="tag-cloud">
          <span 
            className={activeTags.length === 0 ? 'search-tag active' : 'search-tag'}
            onClick={() => setActiveTags([])}
          >
            すべて
          </span>
          {searchTags.map(tag => (
            <span 
              key={tag}
              className={activeTags.includes(tag) ? 'search-tag active' : 'search-tag'}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <main className="mentor-list">
        {filteredMentors.length > 0 ? (
          filteredMentors.map(mentor => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))
        ) : (
          <p className="no-mentors-message">
            該当するメンターが見つかりませんでした。
          </p>
        )}
      </main>
    </>
  );
}


function App() {
  // ... (Appコンポーネントの残りは変更なし)
  return (
    <div className="app-background">
      <div className="smartphone-container">
        <div className="screen">
          <Routes>
            <Route path="/" element={<MentorListPage />} />
            <Route path="/mentor/:id" element={<MentorDetailPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;