import EventEmitter from 'events'
import h from 'react-hyperscript'
import { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import {closeWelcomeScreen} from './actions'
import Mascot from './components/mascot'
import { INITIALIZE_CREATE_PASSWORD_ROUTE } from './routes'

class WelcomeScreen extends Component {
  static propTypes = {
    closeWelcomeScreen: PropTypes.func.isRequired,
    welcomeScreenSeen: PropTypes.bool,
    history: PropTypes.object,
  }

  constructor (props) {
    super(props)
    this.animationEventEmitter = new EventEmitter()
  }

  componentWillMount () {
    const { history, welcomeScreenSeen } = this.props

    if (welcomeScreenSeen) {
      history.push(INITIALIZE_CREATE_PASSWORD_ROUTE)
    }
  }

  initiateAccountCreation = () => {
    this.props.closeWelcomeScreen()
    this.props.history.push(INITIALIZE_CREATE_PASSWORD_ROUTE)
  }

  render () {
    return h('div.welcome-screen', [

        h('div.welcome-screen__info', [

          h('div.welcome-screen__info__header', 'Welcome to CurveMask'),

          h('div.welcome-screen__info__copy', 'CurveMask is a secure identity vault for Wanchain.'),

          h('div.welcome-screen__info__copy', `It allows you to hold WAN & tokens,
            and serves as your bridge to decentralized applications.`),

          h('button.welcome-screen__button', {
            onClick: this.initiateAccountCreation,
          }, 'Continue'),

        ]),

    ])
  }
}

const mapStateToProps = ({ metamask: { welcomeScreenSeen } }) => {
  return {
    welcomeScreenSeen,
  }
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    dispatch => ({
      closeWelcomeScreen: () => dispatch(closeWelcomeScreen()),
    })
  )
)(WelcomeScreen)
