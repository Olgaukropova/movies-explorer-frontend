import React from 'react';
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import film1 from '../../images/film1.jpg';
import film2 from '../../images/film2.jpg';
import film3 from '../../images/film3.jpg';
import film4 from '../../images/film4.jpg';
import film5 from '../../images/film5.jpg';
import film6 from '../../images/film6.jpg';
import film7 from '../../images/film7.jpg';
import { useLocation } from 'react-router-dom';



function MoviesCardList() {

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section className='movies'>
      <MoviesCard 
      name='33 слова о дизайне'
      time='1ч 42м'
      film={film1}/>
      <MoviesCard 
      name='Киноальманах «100 лет дизайна»'
      time='1ч 42м'
      film={film2}/>
      <MoviesCard 
      name='В погоне за Бенкси'
      time='1ч 42м'
      film={film3}/>      
      <MoviesCard 
      name='Баския: Взрыв реальности'
      time='1ч 42м'
      film={film4}/>      
      <MoviesCard 
      name='Бег это свобода'
      time='1ч 42м'
      film={film5}/>
      <MoviesCard 
      name='Книготорговцы'
      time='1ч 42м'
      film={film6}/>
      <MoviesCard 
      name='Когда я думаю о Германии ночью'
      time='1ч 42м'
      film={film7}/>
      {pathname === "/movies" && <button className="list__button">Ещё</button>}
      
    </section>
  )

};

export default MoviesCardList;