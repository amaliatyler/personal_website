import React from 'react';

export default function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="#about">Обо мне</a>
          </li>
          <li className="nav__list-item _active">
            <a href="#projects">Мои проекты</a>
          </li>
          <li className="nav__list-item">
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
