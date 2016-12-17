import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

import ButtonField from 'parts/ButtonField'
import Icon from 'parts/Icon'

export default class Hero extends Component{
  constructor(props){
    super(props)
  }

  static Title = 'Social Links'

  getLinkTypes = () => {
    return [
      'facebook',
      'twitter',
      'instagram'
    ]
  }

  static propTypes = {
    data: PropTypes.object,
    setData: PropTypes.func,
    addElement: PropTypes.func.isRequired,
    removeElement: PropTypes.func.isRequired
  }

  handleChange = (field, value, index) => {
    const d = this.props.data
    if (index !== null) d[field][index] = value
    else d[field] = value
    this.props.setData('header', d)
  }

  addSocialLink = () => {
    this.props.addElement('links')
  }

  removeHeaderLink = (key) => {
    this.props.removeElement(key, 'links')
  }

  render(){
    return (
      <form>
        {
          this.props.data.links.map((d, i) => {
            return (
              <ButtonField label={`Social Link #${i+1}`}
                           types={this.getLinkTypes()}
                           onChange={this.handleChange}
                           removeElement={this.removeHeaderLink}
                           value={d} name="links" index={i}
                           key={i} />
            )
          })
        }
        <button type="button"
          className={classNames('btn', 'btn-default', 'btn-block')}
          onClick={this.addSocialLink}>
          <span>
            <Icon icon="plus"
              size={1} /> Add a Social Link
          </span>
        </button>
      </form>
    )
  }
}
