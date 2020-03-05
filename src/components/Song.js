import React from "react";
import { Howl } from "howler";

class Song extends React.Component {
  state = {
    playing: false,
    audio: {}
  };
  componentDidMount() {
    let audio = new Howl({
      html5: true,
      src: this.props.song.audio
    });

    this.setState({ audio: audio });
  }
  play = e => {
    //
    this.state.audio.play();
    //console.log("src", audio);
    this.setState({
      playing: true
    });
    console.log(this.state.audio);
  };
  stop = e => {
    //
    this.state.audio.stop();
    this.setState({
      playing: false
    });
  };
  render() {
    return (
      <tr className={this.state.playing ? "playing" : ""}>
        <td>
          {!this.state.playing ? (
            <i
              className="button far fa-play-circle"
              onClick={e => this.play()}
            ></i>
          ) : (
            <i
              className="button far fa-stop-circle"
              onClick={e => this.stop()}
            ></i>
          )}
        </td>
        <td>{this.props.song.name}</td>
        <td>{this.props.song.artist}</td>
        <td>{this.props.song.album}</td>
        <td>{this.props.song.genre}</td>
      </tr>
    );
  }
}

export default Song;
