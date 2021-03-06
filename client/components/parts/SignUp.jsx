import React, {PureComponent} from 'react'

import SignUpForm from './SignUpForm'

// use when state and lifecycle functions are needed
export default class SignUp extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {
    active: React.PropTypes.bool,
    close: React.PropTypes.func
  }

  static defaultProps = {
    active: false
  }

  render() {

    return (
      <section className="signup">
        <div className={`modal modal-sm ${this.props.active ? ' active' : ''}`}>
          <div className="modal-overlay"></div>
          <div className="modal-container">
            <div className="modal-body">
              <button className="btn btn-clear float-right" onClick={this.props.close}></button>
              <SignUpForm />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
