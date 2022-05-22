import React from 'react'

const Loading = () => {
  return (
    <React.Fragment>
      <progress className="w-3/4 progress progress-info" />
      <progress className="w-3/4 progress progress-info" />
      <progress className="w-3/4 progress progress-info" />
    </React.Fragment>
  )
}

export default Loading
