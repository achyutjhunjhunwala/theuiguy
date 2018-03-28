import React from 'react';
import { TimelineLite, Expo, } from 'gsap';

import { NavLink, } from './../navigation-link/link';

import './navigation.css';

/**
 * Header component for theuiguy app
 *
 * @name Navigation
 * @returns {XML} - Component template
 */
class Navigation extends React.Component {
  constructor() {
    super();
    this.count = 0;
    this.click = true;
  }

  componentDidMount() {
    this.$menu = document.querySelector('.menu');
    this.$wholeMenu = document.querySelector('.menu, .menuTitle');
    this.$menuUl = document.querySelector('.menu ul');
    this.$menuTitle = document.querySelector('.menuTitle');
    this.$circleTitle = document.querySelector('.circleTitle');
    this.$menuContainer = document.querySelector('.menuContainer');
  }

  _onClick(event) {
    this.count++;

    if (this.click) {
      this.click = false;
      this.$menuTitle.style.zIndex = 9;

      const tl = new TimelineLite();

      tl.to(this.$menu, 0.4, { css: {
        left: '28%',
        width: 650,
        height: 150,
        background: '#000',
        borderRadius: 0,
        borderTop: '1px solid #D8D8D8',
      }, ease: Expo.easeInOut, });
      tl.to(this.$menuTitle, 0.25, { x: 0, y: -110, color: '#fff', });

      setTimeout(() => {
        this.$menuUl.style.animation = 'fadein 2s';
      }, 250);
      this.$menuUl.style.display = 'block';
      this.$circleTitle.style.display = 'none';
    } else {
      this.click = true;
      this.$menuTitle.style.zIndex = 11;
      this.$wholeMenu.style.borderRadius = '100%';
      const tl = new TimelineLite();

      tl.to(this.$menu, 0.25, { css: {
        left: '43%',
        width: 200,
        height: 200,
        background: '#FFF',
        borderRadius: '100%',
        borderTop: '1px solid #D8D8D8',
      }, ease: Expo.easeInOut, });
      tl.to(this.$menuTitle, 0.25, { x: 0, y: 0, color: '#fff', });
      this.$menuUl.style.display = 'none';
      this.$circleTitle.style.display = 'block';
    }
  }

  render() {
    return (
      <div className="menuContainer">
        <span className="menuTitle">The UI Guy</span>
        <div className="menu" onClick={() => this._onClick()}>
          <span className="circleTitle">Click Me</span>
          <ul>
            <NavLink item='CV'/>
            <NavLink item='Media'/>
            <NavLink item='Contact'/>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;

