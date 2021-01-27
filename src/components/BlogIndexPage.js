import React from 'react'
import { Link } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Bio from './Bio'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.css'
import CookieConsent from "react-cookie-consent";
import './card.css'

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </h1>
        <Bio />
      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.url.href} className={styles.card}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <CookieConsent
                location="bottom"
                buttonText="Accept and Close"
                cookieName="consentCookie"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
                expires={150}
                onAccept={() => {
                  window.location.reload(false);
                }}
                enableDeclineButton
                onDecline={() => {
                  console.log("Cookies disabled!")
                }}
        >
          This blog uses anonymus analytics cookie to keep track on most visited blogposts to give me some insights. If you don't want to participate feel free to decline! :)
        </CookieConsent>
      <footer className={styles.footer}>
        <div>
          <a href="/rss.xml" target="_blank" style={{ float: 'right' }}>
            RSS
          </a>
          <Link href="/about">About</Link> &bull; <Link href="/tags">Tags</Link>{' '}
          &bull;{' '}
          <a href="https://github.com/frontarm/create-react-blog">Source</a>
        </div>
      </footer>
    </div>
  )
}

export default BlogIndexPage
