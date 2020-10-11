import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {setTitle, setDescription} from "../actions/actions.js";
import {tr} from "../localization.js";

class AboutPage extends Component {
  constructor(props)
  {
      super(props);
  }
  componentDidMount()
  {
    setTitle(tr("about-title",this.props.lang));
    setDescription(tr("main-description",this.props.lang));
  }
  render() {
    let {lang} = this.props;
    if(lang=="ru")
    {
      return <div className='aboutContainer pageContainer'>
        <div className="aboutHeader">
          Not great, not terrible. Just fine
        </div>
        <div className="aboutContent">
          <div className="aboutText">Привет!</div>
          <div className="aboutText">
            Меня зовут <span className="aboutSpoiler">Михаил</span>. Я интересуюсь IT и компьютерной графикой.
          </div>

          <div className="aboutSection">Основные интересы</div>
          <hr className="aboutSeparator"/>
          <p className="aboutParagraph">IT</p>
          <p className="aboutParagraph">Компьютерная графика</p>
          <p className="aboutParagraph">Разработка игр</p>
          <p className="aboutParagraph">Численные методы(оптимизация, диф. уравнения и т.д.)</p>
          <p className="aboutParagraph">Формальные языки в программировании и физ. моделировании</p>

          <div className="aboutSection">Образование</div>
          <hr className="aboutSeparator"/>
          <div className="aboutEntry">
              <div className="aboutEntry-lcol-border">
                  2018
              </div>
              <div className="aboutEntry-rcol">
                  <p className="aboutParagraph aboutParagraphHeader">
                    Диплом бакалавра<br/>
                    <a target="_blank" className="aboutLink" href = "https://nstu.ru/">Новосибирский Государственный Технический Университет</a>
                  </p>
                  <p className="aboutParagraph">Направление: Информатика и вычислительная техника</p>
                  <p className="aboutParagraph">"Разработка виртуального лабораторного стенда для сравнительного анализа алгоритмов численного интегрирования"</p>
              </div>
          </div>
          <div className="aboutEntry">
              <div className="aboutEntry-lcol-border">
                  2020
              </div>
              <div className="aboutEntry-rcol">
                  <p className="aboutParagraph aboutParagraphHeader">
                    Диплом магистра<br/>
                    <a target="_blank" className="aboutLink" href = "https://nstu.ru/">Новосибирский Государственный Технический Университет</a>
                  </p>
                  <p className="aboutParagraph">Направление: Информатика и вычислительная техника</p>
                  <p className="aboutParagraph">Профиль: Компьютерное моделирование</p>
                  <p className="aboutParagraph">"Моделирование переходных процессов в электроэнергетических системах"</p>
              </div>
          </div>

          <div className="aboutSection">Навыки</div>
          <hr className="aboutSeparator"/>
          <div className="aboutEntry">
              <div className="aboutEntry-lcol">Основные языки:</div>
              <div className="aboutEntry-rcol">C++, JavaScript, C#, Java</div>
          </div>
          <div className="aboutEntry">
              <div className="aboutEntry-lcol">Некоторый опыт:</div> 
              <div className="aboutEntry-rcol">GLSL, TypeScript, Python</div>
          </div>
          <div className="aboutEntry">
              <div className="aboutEntry-lcol">Фреймворки:</div> 
              <div className="aboutEntry-rcol">ReactJS, Spring</div>
          </div>
          <div className="aboutEntry">
              <div className="aboutEntry-lcol">Инструменты:</div>
              <div className="aboutEntry-rcol">QT, Visual Studio, GIT, ANTLR</div>
          </div>

          <div className="aboutSection">Языки</div>
          <hr className="aboutSeparator"/>
          <div className="aboutEntry">
              <div className="aboutEntry-lcol">Русский:</div>
              <div className="aboutEntry-rcol">Родной</div>
          </div>
          <div className="aboutEntry">
              <div className="aboutEntry-lcol">Английский:</div>
              <div className="aboutEntry-rcol">Upper Intermediate</div>
          </div>

          <div className="aboutSection">Персональные проекты</div>
          <hr className="aboutSeparator"/>
          <p className="aboutParagraph">
            <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/Musseffect.github.io">Этот</a> SPA на GitHub Pages - React/JS
          </p>
          <p className="aboutParagraph">
            <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/electrical-power-systems">Power system simulator</a> - проект для магистерской диссертации - C#/WPF/ANTLR
          </p>
          <p className="aboutParagraph">
            <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/hybrid-systems-js">HybridSystemsJS</a> - решатели ОДУ и гибридных динамических систем, <a className="aboutLink" target="_blank" href="https://musseffect.github.io/hybrid-systems-js/">GitHub Pages</a>  - JS/ANTLR/TypeScript
          </p>
          <p className="aboutParagraph">
            <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/nonlinear-least-squares">Нелинейный метод наименьших квадратов</a> - <a className="aboutLink" target="_blank" href="https://musseffect.github.io/nonlinear-least-squares/">GitHub Pages</a> - JS/ANTLR/TypeScript
          </p>
          <p className="aboutParagraph">
            <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/3D-container-packing">Упаковка контейнеров в 3D</a> с использованием жадных эвристик и генетического алгоритма - C++/QT
          </p>
          <p className="aboutParagraph">
            <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/SolversHost">SolversHost</a> - проект для бакалавриата, <a className="aboutLink" target="_blank" href="https://musseffect.github.io/SolversHost/">GitHub Pages</a> - React/JS
          </p>

          <div className="aboutSection">Дополнительные интересы</div>
          <hr className="aboutSeparator"/>
          <p className="aboutParagraph">Плёночная фотография</p>
          <p className="aboutParagraph">Sound synthesis</p>
          <p className="aboutParagraph">Generative art</p>
          <p className="aboutParagraph">Компьютерные игры</p>
          <p className="aboutParagraph">Фракталы</p>
        </div>
      </div>;
    }else{
      return (
        <div className='aboutContainer pageContainer'>
          <div className="aboutHeader">
          Not great, not terrible. Just fine
          </div>
          <div className="aboutContent">
            <div className="aboutText">Hi there!</div>
            <div className="aboutText">
              My name is <span className="aboutSpoiler">Mikhail</span>
            . I am a programmer and i have a special interest in computer graphics.
            </div>
            <div className="aboutSection">Main areas of interest</div>
            <hr className="aboutSeparator"/>
            <p className="aboutParagraph">IT</p>
            <p className="aboutParagraph">Computer graphics</p>
            <p className="aboutParagraph">Gamedev</p>
            <p className="aboutParagraph">Numerical methods(Optimization, ODE, DAE and other problems)</p>
            <p className="aboutParagraph">Formal languages in programming and modeling</p>
          
            <div className="aboutSection">Education</div>
            <hr className="aboutSeparator"/>
            <div className="aboutEntry">
                <div className="aboutEntry-lcol-border">
                    2018
                </div>
                <div className="aboutEntry-rcol">
                    <p className="aboutParagraph aboutParagraphHeader">
                      Bachelor of Science<br/>
                      <a target="_blank" className="aboutLink" href="https://en.nstu.ru/">
                      Novosibirsk State Technical University
                      </a>
                    </p>
                    <p>Informatics and computer engineering</p>
                    <p>Thesis: "Developement of virtual laboratory for comparison of numerical methods for ODE systems"</p>
                </div>
            </div>
            <div className="aboutEntry">
                <div className="aboutEntry-lcol-border">
                    2020
                </div>
                <div className="aboutEntry-rcol">
                    <p className="aboutParagraph aboutParagraphHeader">
                      Master of Science<br/>
                      <a target="_blank" className="aboutLink" href="https://en.nstu.ru/">Novosibirsk State Technical University</a>
                    </p>
                    <p className="aboutParagraph">Informatics and computer engineering</p>
                    <p className="aboutParagraph">Profile: Computer modelling</p>
                    <p className="aboutParagraph">Thesis: "Modeling of transients in electrical power systems"</p>
                </div>
            </div>

            <div className="aboutSection">Skills</div>
            <hr className="aboutSeparator"/>
            <div className="aboutEntry">
                <div className="aboutEntry-lcol">Main languages:</div>
                <div className="aboutEntry-rcol">C++, JavaScript, C#, Java</div>
            </div>
            <div className="aboutEntry">
                <div className="aboutEntry-lcol">Have experience:</div>
                <div className="aboutEntry-rcol">GLSL, TypeScript, Python</div>
            </div>
          <div className="aboutEntry">
              <div className="aboutEntry-lcol">Frameworks:</div> 
              <div className="aboutEntry-rcol">ReactJS, Spring</div>
          </div>
            <div className="aboutEntry">
                <div className="aboutEntry-lcol">Tools:</div>
                <div className="aboutEntry-rcol">QT, Visual Studio, GIT, ANTLR</div>
            </div>

            <div className="aboutSection">Languages</div>
            <hr className="aboutSeparator"/>
            <div className="aboutEntry">
                <div className="aboutEntry-lcol">Russian:</div>
                <div className="aboutEntry-rcol">Native</div>
            </div>
            <div className="aboutEntry">
                <div className="aboutEntry-lcol">English:</div>
                <div className="aboutEntry-rcol">Upper Intermediate</div>
            </div>
            
            <div className="aboutSection">Personal projects</div>
            <hr className="aboutSeparator"/>
            <p className="aboutParagraph">
              <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/Musseffect.github.io">This</a> SPA, hosted on GitHub Pages - React/JS
            </p>
            <p className="aboutParagraph">
              <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/electrical-power-systems">Power system simulator</a> - master's degree project - C#/WPF/ANTLR
            </p>
            <p className="aboutParagraph">
              <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/hybrid-systems-js">HybridSystemsJS</a> - numerical solution of ODE and hybrid systems, <a target="_blank" className="aboutLink" href="https://musseffect.github.io/hybrid-systems-js/">hosted on GitHub Pages</a>  - JS/ANTLR/TypeScript
            </p>
            <p className="aboutParagraph">
              <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/nonlinear-least-squares">Nonlinear least squares</a> - <a target="_blank" className="aboutLink" href="https://musseffect.github.io/nonlinear-least-squares/">hosted on GitHub Pages</a> - JS/ANTLR/TypeScript
            </p>
            <p className="aboutParagraph">
              <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/3D-container-packing">Container packing in 3D</a> with genetic algorithm - C++/QT
            </p>
            <p className="aboutParagraph">
              <a target="_blank" className="aboutLink" href="https://github.com/Musseffect/SolversHost">SolversHost</a> - bachelor's degree project, <a target="_blank" className="aboutLink" href="https://musseffect.github.io/SolversHost/">hosted on GitHub Pages</a> - React/JS
            </p>

            <div className="aboutSection">Hobbies</div>
            <hr className="aboutSeparator"/>
            <div className="aboutEntry">
                <p className="aboutParagraph">Film photography</p>
                <p className="aboutParagraph">Sound synthesis</p>
                <p className="aboutParagraph">Generative art</p>
                <p className="aboutParagraph">Сomputer games</p>
                <p className="aboutParagraph">FRACTALS</p>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default withRouter(AboutPage);