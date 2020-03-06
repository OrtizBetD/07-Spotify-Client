import React from "react";
import axios from "axios";

import "../styles/albums.css";

import Sidebar from "../components/Sidebar";
import Artist from "../components/Artist";

class Albums extends React.Component {
  state = {
    artists: []
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/artists`)
      .then(res => {
        console.log("data", res.data);
        this.setState({
          artists: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });
  }
  render() {
    return (
      <div id="page">
        <Sidebar page="artists" />
        <div id="albums">
          {this.state.artists.map(artist => {
            return (
              <Artist
                artist={artist}
                key={artist._id}
                name={artist.name}
                cover={artist.cover}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Albums;
