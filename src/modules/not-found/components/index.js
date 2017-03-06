import React, { PropTypes } from 'react'

export default function NotFound({
  title,
  blurb,
  blurbString,
  options,
}) {
  return (
    <section id="not-found">
      <h2>{title}</h2>
      <p >{blurb}</p>
      <aside >
        <p>{blurbString}</p>
        <ul>
          {options.map(option => (
            <li key={option.toString()}>{option}</li>
          ))}
        </ul>
      </aside>
    </section>
  )
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  blurbString: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

