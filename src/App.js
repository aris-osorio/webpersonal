import './App.css';
import React, { useEffect } from 'react'
import Menu from './components/menu'
import NavBar from './components/navbar'
import Inicio from './components/inicio'
import Acerca from './components/acerca'
import Proyectos from './components/proyectos'
import Contactame from './components/contactame'

export default function App() {

  useEffect(() => {
    
    elementoAparece[0].style.opacity = 1;

    document.getElementsByClassName('btn-menu')[0].addEventListener('click', function() {
      
      document.getElementById('menu').classList.toggle("activado");
      document.getElementById('menu').classList.remove("desactivado");

    });
    
    document.getElementsByClassName('btn-cerrar')[0].addEventListener('click', function() {
      
      document.getElementById('menu').classList.toggle("desactivado");
      document.getElementById('menu').classList.remove("activado");

    });


  });

  let html = document.getElementsByTagName('html')[0];
  let navBar = document.getElementsByClassName('navbar');
  let elementoAparece = document.getElementsByClassName('aparece');
 

  window.addEventListener('scroll', (event) => {
    let topVent = html.scrollTop;
    for(let i = 0; i < elementoAparece.length; i++){
      let topelemAparece = elementoAparece[i].offsetTop;
      if(topVent > topelemAparece - 400){
        elementoAparece[i].style.opacity = 1;
        for(let j = 0; j < elementoAparece.length; j++){
          if(j !== i)
          {
            elementoAparece[j].style.opacity = 0;
          }
        }
      }
      if(topVent === 0)
      {
        navBar[0].classList.remove("obscuro")
      }
      else
      {
        navBar[0].classList.add("obscuro")
      }
    }
  });
  
  document.title = 'Aris Osorio';
  return (
    <div className="app">
      <Menu />
      <NavBar />
      <Inicio />
      <Acerca />
      <Proyectos />
      <Contactame />
    </div>
  );
}
