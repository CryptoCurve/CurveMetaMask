import React from 'react'
import PropTypes from 'prop-types'
import Spinner from './spinner'

export default function LoadingScreen({ className = '', loadingMessage }) {
  return (
    <div className={`${className} loading-screen`}>
      <Spinner color="#2ad4dc" />
      <div className="loading-screen__message">{loadingMessage}</div>
    </div>
  )
}

LoadingScreen.propTypes = {
  className: PropTypes.string,
  loadingMessage: PropTypes.string,
}
