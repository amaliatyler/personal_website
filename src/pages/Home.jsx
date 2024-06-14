import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';

import data from '../helpers/projects.json';

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <section id="about" className="about">
          <div className="about__img-wrapper _pic">
            <img className="asterisk" src="./asterisk.svg" alt="Астериск" />
            <img src="./banner.JPG" alt="Фотография разработчика" />
          </div>
          <div className="about__descr">
            <h1>
              Привет! Меня зовут Амалия,
              <span className="d-block"> и я разрабатываю сайты</span>
            </h1>
            <div className="about__text">
              <p>
                Более 6 лет я работаю в международном IT-интеграторе, из которых
                последние 2.5 года занимаюсь разработкой пользовательских
                интерфейсов. Основной сферой моей деятельности является работа с
                продуктом 1С:Битрикс, где я занимаюсь адаптацией и улучшением
                существующих компонентов, а также разработкой новых элементов
                интерфейса.
              </p>
              <p>
                В своей работе я фокусируюсь на создании простых, интуитивно
                понятных и доступных пользовательских интерфейсов. Моя цель -
                повысить удобство взаимодействия для клиентов и сотрудников
                компаний, использующих наши решения. Для этого я применяю
                современные подходы к проектированию интерфейсов, включая:
              </p>
              <ul className="custom__list">
                <li>Использование современных технологий и библиотек</li>
                <li>Тестирование и улучшение интерфейсов</li>
                <li>
                  Соблюдение принципов доступности и мобильной адаптивности
                </li>
              </ul>
              <p>
                В работе я использую такие технологии и инструменты как HTML,
                CSS, JavaScript, React, SCSS, npm и git, а также свободно говорю
                по-английски и читаю документацию на английском.
              </p>
            </div>
          </div>
        </section>
        <section id="projects" className="projects">
          <h2 className="section-title">Мои проекты</h2>
          <ul className="projects__list">
            {data &&
              data.map((item) => <ProjectCard key={item.id} {...item} />)}
          </ul>
        </section>
        <section id="contacts" className="contacts">
          <h2 className="section-title">Мои контакты</h2>
          <p>
            Со мной можно связаться по телефону:{' '}
            <a href="tel:+79164422572">8-916-442-25-72</a>
          </p>
          <p>
            По почте:{' '}
            <a href="mailto:amaliatyler@gmail.com">amaliatyler@gmail.com</a>
          </p>
          <p>Или же написав мне в телеграм: @amaliatyler</p>
        </section>
      </div>
    </main>
  );
}
