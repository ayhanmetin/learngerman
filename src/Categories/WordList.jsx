import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import wordData from '../wordData';
import './wordList.css';
import Footer2 from '../components/Footer2';

const WordList = () => {
  const navigate = useNavigate();

  const handleWordClick = word => {
    navigate(`/word/${encodeURIComponent(word)}`);
  };

  return (
    <>
      <div className='d-flex p-1 align-items-center justify-content-center mb-5 word-list'>
        <div className='text-center mt-3'>
          {wordData.map((word, index) => (
            <React.Fragment key={index}>
              <span
                className='wordList'
                style={{ cursor: 'pointer' }}
                onClick={() => handleWordClick(word.word)}
              >
                {word.article ? `${word.article} ` : ''}
                {word.word}
              </span>
              {index < wordData.length - 1 && <span>, </span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default WordList;
