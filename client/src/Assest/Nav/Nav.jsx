import React, { useState, useEffect, useRef } from "react";
import style from "./nav.module.scss";
import { NavHashLink as NavLink } from "react-router-hash-link";
export default function Nav(props) {
  const [links] = useState([
    { name: "Home", NavHashLink: "/#home" },
    { name: "About", NavHashLink: "/#about" },
    { name: "Skills", NavHashLink: "/#skill" },
    { name: "Projects", NavHashLink: "/#portfolio" },
    { name: "Contact", NavHashLink: "/#contact" },
  ]);
  const [isToogler, setToogler] = useState(false);
  const [color, setcolor] = useState(false);
  const ref = useRef();

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const parentElementHeight = ref.current.parentElement.offsetHeight;
    if (scrollTop >= parentElementHeight) {
      return setcolor("#d82c2e");
    } else {
      return setcolor("");
    }
  };
  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };
  const tooglerHandler = () => {
    setToogler((pre) => !pre);
  };
  useEffect(() => {
    listenToScrollEvent();
  });
  return (
    <>
      <nav
        className={`${style.Nav} ${style.sticky} `}
        style={{ backgroundColor: color }}
        ref={ref}>
        <div className={`text-center ${style.links}`}>
          {links.map((link, i) => {
            return (
              <NavLink smooth key={i} to={link.NavHashLink}>
                {link.name}
              </NavLink>
            );
          })}
          <div className={` ${style.icon}`}>
            <a
              href='https://www.facebook.com/bbek2059'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fa fa-facebook-square p-1 '></i>
            </a>
            <a
              href='https://www.instagram.com/bbkshrestha/'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fa fa-instagram p-1'></i>
            </a>
            <a
              href='https://github.com/bibekshrestha02'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fa fa-github p-1'></i>
            </a>
          </div>
        </div>

        <div className={`${style.toogler} `}>
          <div className='row '>
            <div className='col'>
              <span
                style={{ color: "white", fontWeight: "600", fontSize: "16px" }}>
                Menu
              </span>
            </div>
            <div className='col'>
              <div className={` ${style.icon}`}>
                <a
                  href='https://www.facebook.com/bbek2059'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fa fa-facebook-square p-1 '></i>
                </a>
                <a
                  href='https://www.instagram.com/bbkshrestha/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fa fa-instagram p-1'></i>
                </a>
                <a
                  href='https://github.com/bibekshrestha02'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fa fa-github p-1'></i>
                </a>
              </div>
            </div>
            <div className='col '>
              <div className={`${style.menu} mr-6`} onClick={tooglerHandler}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${isToogler ? style.toogleMenu : style.closeMenu}`}>
          {links.map((link, i) => {
            return (
              <NavLink
                smooth
                key={i}
                to={link.NavHashLink}
                onClick={tooglerHandler}>
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
}
