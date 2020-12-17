import React from "react"
import PropTypes from "prop-types"

export function ShowcaseHeader(props) {
  const { title, label, link, share } = props

  return (
    <header className="showcase-header">
      {link}
      <span className="showcase-label">{label}</span>
      <h1 className="showcase-headline">{title}</h1>
      <div>{share}</div>
    </header>
  )
}
ShowcaseHeader.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  link: PropTypes.element,
  share: PropTypes.element,
}

export function ShowcaseBody(props) {
  const { content, ctaLink } = props

  return (
    <>
      <div className="showcase-content" dangerouslySetInnerHTML={{ __html: content }} />
      {ctaLink && (
        <div className="d-flex mb-5">
          <a className="btn btn-outline-dark m-auto" role="button" href={ctaLink}>
            Read more
          </a>
        </div>
      )}
    </>
  )
}

ShowcaseBody.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  ctaLink: PropTypes.string,
}

ShowcaseBody.defaultProps = {
  ctaLink: undefined,
}
