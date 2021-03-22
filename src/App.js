import './App.css'
import Menu from './components/menu'
import React, { useEffect } from 'react'
import NavBar from './components/navbar'
import Inicio from './components/inicio'
import Acerca from './components/acerca'
import Proyectos from './components/proyectos'
import Contactame from './components/contactame'

export default function App() {

  useEffect(() => {

    let links = document.getElementsByClassName('Link');
    let links_menu = document.getElementsByClassName('links-menu');
    let items = document.getElementsByClassName('items-menu');
    let btn_cerrar = document.getElementsByClassName('btn-cerrar');
    
    elementoAparece[0].style.opacity = 1;

    document.getElementsByClassName('btn-menu')[0].addEventListener('click', function() { 
      document.getElementById('menu').classList.toggle("activado");
      document.getElementById('menu').classList.remove("desactivado");
      items[0].style.opacity = 1;
      items[0].style.pointerEvents = "";
      document.getElementsByTagName("BODY")[0].classList.add('no_scroll');
    }); 

    for(let i = 0; i <  btn_cerrar.length; i++)
    {
      btn_cerrar[i].addEventListener('click', function() { 
        document.getElementById('menu').classList.toggle("desactivado");
        document.getElementById('menu').classList.remove("activado");
        items[0].style.opacity = 0;
        items[0].style.pointerEvents = "none";
        document.getElementsByTagName("BODY")[0].classList.remove('no_scroll');
      });
    }

    for(let i = 0; i <  links_menu.length; i++)
    {
      links_menu[i].addEventListener('click', function() { 
        links[i].click();
      });
    }
  });
  
  let html = document.getElementsByTagName('html')[0];
  let navBar = document.getElementsByClassName('navbar');
  let elementoAparece = document.getElementsByClassName('aparece');
  let links_menu = document.getElementsByClassName('links-menu'); 

  window.addEventListener('scroll', (event) => {
    let topVent = html.scrollTop;
    for(let i = 0; i < elementoAparece.length; i++){
      let topelemAparece = elementoAparece[i].offsetTop;
      if(topVent > topelemAparece - 200){
        elementoAparece[i].style.opacity = 1;
        links_menu[i].classList.add('bg-links')
        for(let j = 0; j < elementoAparece.length; j++){
          if(j !== i)
          {
            links_menu[j].classList.remove('bg-links')
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
