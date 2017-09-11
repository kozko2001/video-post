import React from 'react';
import YouTube from 'react-youtube'
import Markdown from './markdown/VideoMarkdown'

let someMarkdownExample = `

# Header 1 [[ts 00:00:05]]
# Header 1 [[ts 00:00:15]]
# Header 1 [[ts 00:00:25]]
# Header 1 [[ts 00:00:35]]
# Header 1 [[ts 00:00:45]]
# Header 1 [[ts 00:00:55]]
# Header 1 [[ts 00:01:05]]
# Header 1 [[ts 00:01:15]]
# Header 1 [[ts 00:01:25]]
# Header 1 [[ts 00:01:35]]
# Header 1 [[ts 00:01:45]]
# Header 1 [[ts 00:01:55]]
# Header 1 [[ts 00:02:05]]
# Header 1 [[ts 00:02:15]]
# Header 1 [[ts 00:02:25]]
# Header 1 [[ts 00:02:35]]
# Header 1 [[ts 00:02:45]]
# Header 1 [[ts 00:02:55]]
`

export default class App extends React.Component {
  render() {
    const videoOpts = {
      playerVars: {
        autoplay: 1,
      }
    }

    return (
      <div>
        <YouTube
          videoId="f7rstBsOPHk"
          opts={videoOpts}
          onReady={(event) => this.videoReady(event)}
          onStateChange={(event) => this.onVideoStateChanged(event)}
        />

        <div style={{overflowY: 'scroll', height: '300px'}}>
          <Markdown markdown={someMarkdownExample}
            changeVideoTime={(time) => this.changeVideoTime(time)}
          />
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
