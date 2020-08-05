import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map((a) => {
                    return (
                        <Track
                            onAdd={this.props.onAdd}
                            onRemove={this.props.onRemove}
                            isRemoval={this.props.isRemoval}
                            key={a.id}
                            track={{
                                name: a.name,
                                artist: a.artist,
                                album: a.album,
                            }}
                        />
                    );
                })}
            </div>
        );
    }
}
