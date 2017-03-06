import React, { PropTypes } from 'react'

import { LinkHelper } from '../../../app/routes'
import './main.css'

export default function MainLayout({ children }) {
  const navLinkProps = {
    className: 'layout__nav-link',
    activeClassName: 'layout__nav-link--selected',
  }

  return (
    <div className="layout layout--main">
      <nav className="layout__nav">
        <span className="layout__nav-header">React Lego</span>
        <LinkHelper to="homepage" {...navLinkProps} />
        <LinkHelper to="game" {...navLinkProps} />
      </nav>
      <div className="layout__content">
        {children}
      </div>
      <footer className="layout__footer">
        Hosted at <a href="http://github.com/peter-mouland/react-lego">github.com/peter-mouland/react-lego</a>
      </footer>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

