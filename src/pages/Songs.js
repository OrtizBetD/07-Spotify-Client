import React from "react";
import axios from "axios";
import Song from "../components/Song";

import "../styles/songs.css";

import Sidebar from "../components/Sidebar";

class Songs extends React.Component {
  state = {
    songs: []
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/songs`)
      .then(res => {
        console.log("data", res.data);
        this.setState({
          songs: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });
  }
  render() {
    return (
      <div id="page">
        <Sidebar page="songs" />
        <div id="songs">
          <table>
            {this.state.songs.map(song => {
              return (
                <Song
                  song={song}
                  key={song._id}
                  name={song.name}
                  artist={song.artist}
                  album={song.album}
                  genre={song.genre}
                />
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default Songs;
