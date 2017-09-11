import React from 'react'
import PropTypes from 'prop-types'
import showdown from 'showdown'
import { Markdown } from 'react-showdown'
import icon from 'showdown-icon' // eslint-disable-line
import VideoExtension from './VideoMarkdownExtension.js'
import VideoMarkdownTime from './VideoMarkdownTime'

class VideoMarkdown extends React.Component {
  constructor() {
    super()

    showdown.setFlavor('github')
    showdown.extension('video', VideoExtension)
  }

  render() {
    return <Markdown
      markdown={this.props.markdown}
      extensions={['icon', 'video']}
      components={{'VideoMarkdownTime': (props) => <VideoMarkdownTime {...props} updateTime={(time) => this.onUpdateTime(time)} /> }}
    />
  }

  onUpdateTime(time) {
    this.props.changeVideoTime(time)
  }
}

VideoMarkdown.propTypes = {
  markdown: PropTypes.string.isRequired,
  changeVideoTime: PropTypes.func.isRequired,
}

export default VideoMarkdown
