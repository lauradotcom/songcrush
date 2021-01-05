import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);

        this.state = {
            background: 'rgba(255, 255, 255, 0.1)'
        }
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
        this.setState( { background: e.target.value === '' ? 'rgba(255, 255, 255, 0.1' : 'transparent' } );
    }

    render() {
        return (
            <div className="Playlist">
                <input placeholder="New Playlist"
                        type="text"
                        onChange={this.handleNameChange}
                        style={{ backgroundColor: this.state.background }} />
                <TrackList tracks={this.props.playlistTracks} 
                            isRemoval={true}
                            onRemove={this.props.onRemove} />
                <button className="Playlist-save"
                        onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;