import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class VideoMarkdownTime extends React.Component {

  render() {
    let formattedTime = this.formatTime(this.props.time)
    let clickHandle = () => this.props.updateTime(this.props.time)
    let id = `video-ts-${this.props.time}`

    return <span className='ts-button button is-outlined is-dark is-small' id={id} onClick={clickHandle}> [[{formattedTime}]] </span>
  }

  /**
   * Convert seconds to nice string, I'm so lazy that I just import moment js for that xD
   *
   * @param {number} secs
   * @returns
   * @memberof VideoMarkdownTime
   */
  formatTime(secs) {
    return moment.utc(secs*1000).format('HH:mm:ss');
  }
}

VideoMarkdownTime.propTypes = {
  time: PropTypes.string.isRequired,
  updateTime: PropTypes.func.isRequired,
}

export default VideoMarkdownTime
