import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {setTitle} from "../actions/actions.js";
import {tr} from "../localization.js";

const mapStateToProps=function(state)
{
  return {lang:state.options.language};
};

const mapDispatchToProps=function(dispatch)
{
  return ({
    setTitle:function(title){dispatch(setTitle(title));}
  });
};

class AboutPage extends Component {
  constructor(props)
  {
      super(props);
  }
  componentDidMount()
  {
    this.props.setTitle(tr("aboutTitle",this.props.lang));
  }
  render() {
    let {lang} = this.props;
    if(lang=="ru")
    {
      return <div className='aboutContainer pageContainer'>
        <div className="about-header">
          Not great, not terrible. Just fine
        </div>
        <div className="about-content">
          <div className="about-text">Привет!</div>
          <div className="about-text">
            Меня зовут <span className="about-spoiler">Михаил</span>
            . Я погромист и очень интересуюсь компьютерной графикой.
          </div>

          <div className="about-section">Основные интересы</div>
          <hr className="about-separator"/>
          <p className="about-paragraph">Программирование</p>
          <p className="about-paragraph">Компьютерная графика</p>
          <p className="about-paragraph">Разработка игр</p>
          <p className="about-paragraph">Численные методы(оптимизация, диф. уравнения и т.д.)</p>
          <p className="about-paragraph">Формальные языки в программировании и физ. моделировании</p>

          <div className="about-section">Образование</div>
          <hr className="about-separator"/>
          <div className="about-entry">
              <div className="about-entry-lcol-border">
                  2018
              </div>
              <div className="about-entry-rcol">
                  <p className="about-paragraph about-paragraph-header">
                    Диплом бакалавра<br/>
                    Новосибирский Государственный Технический Университет
                  </p>
                  <p className="about-paragraph">Направление: Информатика и вычислительная техника</p>
                  <p className="about-paragraph">"Разработка виртуального лабораторного стенда для сравнительного анализа алгоритмов численного интегрирования"</p>
              </div>
          </div>
          <div className="about-entry">
              <div className="about-entry-lcol-border">
                  2020
              </div>
              <div className="about-entry-rcol">
                  <p className="about-paragraph about-paragraph-header">
                    Диплом магистра<br/>
                    Новосибирский Государственный Технический Университет
                  </p>
                  <p className="about-paragraph">Направление: Информатика и вычислительная техника</p>
                  <p className="about-paragraph">Профиль: Компьютерное моделирование</p>
                  <p className="about-paragraph">"Моделирование переходных процессов в электроэнергетических системах"</p>
              </div>
          </div>

          <div className="about-section">Навыки</div>
          <hr className="about-separator"/>
          <div className="about-entry">
              <div className="about-entry-lcol">Основные языки:</div>
              <div className="about-entry-rcol">C++, JavaScript, GLSL</div>
          </div>
          <div className="about-entry">
              <div className="about-entry-lcol">Некоторый опыт:</div> 
              <div className="about-entry-rcol">C#, Java, Python, ReactJS</div>
          </div>
          <div className="about-entry">
              <div className="about-entry-lcol">Инструменты:</div>
              <div className="about-entry-rcol">QT, Visual Studio, GIT, ANTLR</div>
          </div>

          <div className="about-section">Языки</div>
          <hr className="about-separator"/>
          <div className="about-entry">
              <div className="about-entry-lcol">Русский:</div>
              <div className="about-entry-rcol">родной</div>
          </div>
          <div className="about-entry">
              <div className="about-entry-lcol">Английский:</div>
          </div>

          <div className="about-section">Персональные проекты</div>
          <hr className="about-separator"/>
          <p className="about-paragraph">
              <a className="about-link" href="/">This</a> SPA, hosted on github
          </p>
          <p className="about-paragraph">
              Power systems
          </p>
          <p className="about-paragraph">
              Solvers
          </p>
          <p className="about-paragraph">
              Nonlinear least squares
          </p>
          <p className="about-paragraph">
              SolversHost
          </p>

          <div className="about-section">Дополнительные интересы</div>
          <hr className="about-separator"/>
          <p className="about-paragraph">Плёночная фотография</p>
          <p className="about-paragraph">Sound synthesis</p>
          <p className="about-paragraph">Generative art</p>
          <p className="about-paragraph">Компьютерные игры</p>
          <p className="about-paragraph">Фракталы</p>
        </div>
      </div>;
    }else{
      return (
        <div className='aboutContainer pageContainer'>
          <div className="about-header">
          Not great, not terrible. Just fine
          </div>
          <div className="about-content">
            <div className="about-text">Hi there!</div>
            <div className="about-text">
              My name is <span className="about-spoiler">Mikhail</span>
            . I am a programmer and i have a special interest in computer graphics.
            </div>
            <div className="about-section">Main areas of interest</div>
            <hr className="about-separator"/>
            <p className="about-paragraph">General-purpose programming</p>
            <p className="about-paragraph">Computer graphics</p>
            <p className="about-paragraph">Gamedev</p>
            <p className="about-paragraph">Numerical methods(Optimization, ODE, DAE and other problems)</p>
            <p className="about-paragraph">Formal languages in programming and modeling</p>
          
            <div className="about-section">Education</div>
            <hr className="about-separator"/>
            <div className="about-entry">
                <div className="about-entry-lcol-border">
                    2018
                </div>
                <div className="about-entry-rcol">
                    <p className="about-paragraph about-paragraph-header">
                      Bachelor of Science<br/>
                      <a className="about-link" href="https://en.nstu.ru/">
                      Novosibirsk State Technical University
                      </a>
                    </p>
                    <p>Informatics and computer engineering</p>
                    <p>Thesis: "Developement of virtual laboratory for comparison of numerical methods for ODE systems"</p>
                </div>
            </div>
            <div className="about-entry">
                <div className="about-entry-lcol-border">
                    2020
                </div>
                <div className="about-entry-rcol">
                    <p className="about-paragraph about-paragraph-header">
                      Master of Science<br/>
                      <a className="about-link" href="https://en.nstu.ru/">Novosibirsk State Technical University</a>
                    </p>
                    <p className="about-paragraph">Informatics and computer engineering</p>
                    <p className="about-paragraph">Profile: Computer modelling</p>
                    <p className="about-paragraph">Thesis: "Modeling of transients in electrical power systems"</p>
                </div>
            </div>

            <div className="about-section">Skills</div>
            <hr className="about-separator"/>
            <div className="about-entry">
                <div className="about-entry-lcol">Main languages:</div>
                <div className="about-entry-rcol">C++, JavaScript, GLSL</div>
            </div>
            <div className="about-entry">
                <div className="about-entry-lcol">Have experiense:</div>
                <div className="about-entry-rcol">C#, Java, Python, ReactJS</div>
            </div>
            <div className="about-entry">
                <div className="about-entry-lcol">Tools:</div>
                <div className="about-entry-rcol">QT, Visual Studio, GIT, ANTLR</div>
            </div>

            <div className="about-section">Languages</div>
            <hr className="about-separator"/>
            <div className="about-entry">
                <div className="about-entry-lcol">Russian:</div>
                <div className="about-entry-rcol">Native</div>
            </div>
            <div className="about-entry">
                <div className="about-entry-lcol">English:</div>
                <div className="about-entry-rcol">Advanced</div>
            </div>

            <div className="about-section">Personal projects</div>
            <hr className="about-separator"/>
            <p className="about-paragraph">
              <a className="about-link" href="/">This</a> SPA, hosted on github
            </p>
            <p className="about-paragraph">Power systems</p>
            <p className="about-paragraph">Solvers</p>
            <p className="about-paragraph">SolversHost</p>
            <p className="about-paragraph">Nonlinear least squares</p>

            <div className="about-section">Hobbies</div>
            <hr className="about-separator"/>
            <div className="about-entry">
                <p className="about-paragraph">Film photography</p>
                <p className="about-paragraph">Sound synthesis</p>
                <p className="about-paragraph">Generative art</p>
                <p className="about-paragraph">Сomputer games</p>
                <p className="about-paragraph">FRACTALS</p>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AboutPage));