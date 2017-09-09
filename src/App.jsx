import React from 'react';
import YouTube from 'react-youtube'

export default class App extends React.Component {
    render(){
      const videoOpts = {
        playerVars: {
          autoplay: 1,
        }
      }
      return (
        <YouTube
          videoId="f7rstBsOPHk"
          opts={videoOpts}
        />
      );
    }
}
