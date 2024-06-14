import React from 'react';

export default function ProjectCard(props) {
  return (
    <li className="project__card">
      <a
        className="project__card-img"
        href="https://essential-items.vercel.app/">
        <img src={props.imgUrl} alt="Essential items" />
      </a>
      <div className="project__card-links">
        {props.hosting && (
          <a
            href={props.hosting}
            target="_blank"
            rel="noreferrer"
            className="btn-link">
            Перейти на хостинг
          </a>
        )}
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="btn-link">
          Перейти на GitHub
        </a>
      </div>
      <div className="project__card-info">
        <h3 className="project__card-title">{props.title}</h3>
        <p>Стек технологий:</p>
        <ul className="custom__list">
          {props.stack && props.stack.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </li>
  );
}
