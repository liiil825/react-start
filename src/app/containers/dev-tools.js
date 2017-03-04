/* eslint-disable */
import React from 'react'
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import DevtoolsInspector from 'redux-devtools-inspector'

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    defaultPosition='bottom'
    defaultSize={0.25}
  >
    <DevtoolsInspector theme='inspector'
      shouldPersistState
      invertTheme={true}
      supportImmutable={false}
    />
  </DockMonitor>
)
/* eslint-enable */
