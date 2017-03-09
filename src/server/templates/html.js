import React, { PropTypes } from 'react'
import DocumentMeta from 'react-document-meta'

const hasWindow = typeof window !== 'undefined'

export default function Html({
  initialState,
  content,
  scripts,
  stylesheets,
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {hasWindow ? null : DocumentMeta.renderAsReact()}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        {stylesheets.map(stylesheet => <link href={stylesheet} rel="stylesheet" key={stylesheet} />)}
      </head>
      <body>
        <script
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}`,
          }}
        />
        <div
          id="root"
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {scripts.map(script => <script src={script} key={script} />)}
      </body>
    </html>
  )
}
Html.propTypes = {
  initialState: PropTypes.object,
  content: PropTypes.node,
  scripts: PropTypes.array,
  stylesheets: PropTypes.array,
}

