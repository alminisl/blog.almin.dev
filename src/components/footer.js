import React from 'react'
import PropTypes from 'prop-types'

const currentYear = () => {
  const date = new Date()
  return date.getFullYear()
}

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          © {currentYear()} Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
        <span className="footerCopyrights">
          Blog written by <a href="https://www.almin.dev">Almin</a>
        </span>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
