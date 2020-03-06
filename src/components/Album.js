import React from "react";
import { Link } from "react-router-dom";

import "../styles/album.css";

class Album extends React.Component {
  render() {
    return (
      <Link to={""} className="album">
        <div
          className="cover"
          style={{ backgroundImage: `url(${this.props.album.cover})` }}
        ></div>
        <h3>{this.props.album.album}</h3>
        <span>{this.props.album.artist}</span>
      </Link>
    );
  }
}

export default Album;
