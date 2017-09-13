import React from 'react';
import YouTube from 'react-youtube'
import Markdown from './markdown/VideoMarkdown'
import highlight from 'highlight.js'
import './App.scss'

let someMarkdownExample = `

# Savjz [[ts 00:00:05]]
How he  is lucky enough to find the card he need!

\`\`\`js
let x = 2;
\`\`\`
meeek
\`\`\`swift
func xxx() {
  something();
}
\`\`\`

`

export default class App extends React.Component {
  componentDidMount() {
    highlight.initHighlighting();
  }

  render() {
    const videoOpts = {
      playerVars: {
        autoplay: 1,
      },
    }

    return (
      <div className='container'>
          <div className='columns video'>
            <div className='column is-12'>
              <YouTube
                videoId="f7rstBsOPHk"
                opts={videoOpts}
                onReady={(event) => this.videoReady(event)}
                onStateChange={(event) => this.onVideoStateChanged(event)}
              />
            </div>
          </div>
          <div className='columns markdown'>
            <div className='column is-12'>
              <Markdown markdown={someMarkdownExample} className='markdown-body'
                changeVideoTime={(time) => this.changeVideoTime(time)}
              />
            </div>
          </div>
      </div>
    );
  }

  /**
   * We store the youtube object, so we can seek
   *
   * @param {any} event
   * @memberof App
   */
  videoReady(event) {
    this.player = event.target;
  }

  /**
   * Seek to a current seconds
   *
   * @param {number} seconds, time where we want to seek
   * @memberof App
   */
  changeVideoTime(seconds) {
    this.player.seekTo(seconds, true)
  }

  /**
   * Receives the events from the youtube player API
   *
   * state == 1 -> means that the video has started playing
   *
   * @param {any} event dispatched from the youtube api
   * @memberof App
   */
  onVideoStateChanged(event) {
    if(event.data == 1) {
      this.startInterval()
    } else {
      this.stopInterval();
    }
  }

  /**
   * Since youtube api is a shame, we have to poll for the current time using an interval!
   *
   * @memberof App
   */
  startInterval() {
    this.interval = setInterval(() => {
      let seconds  = Math.floor(this.player.getCurrentTime())
      let elementId = `video-ts-${seconds}`
      let element = document.querySelector(`#${elementId}`)
      if (element) {
        element.scrollIntoView()
      }
    }, 200)
  }

  /**
   * Stops the interval of shame!
   *
   * @memberof App
   */
  stopInterval() {
    clearInterval(this.interval)
  }
}
