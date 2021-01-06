import React from 'react';
import './Track.css';
//import AudioSample from '../AudioSample/AudioSample';


class Track extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            play: false,
            pause: true,
            volume: 0.1
        }

        this.playSample = this.playSample.bind(this);
        this.pauseSample = this.pauseSample.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);

        this.audioSample = new Audio(this.props.track.preview);
    }
    

    addTrack() {
        this.props.onAdd(this.props.track);
    }
    
   removeTrack() {
       this.props.onRemove(this.props.track);
   }

    renderAction() {
        if (this.props.isRemoval === true) {
            return <button className="Track-action" onClick={this.removeTrack}><i class="fas fa-minus-circle"></i></button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}><i class="fas fa-plus-circle"></i></button>
        }
    }

    // Display play or pause button based on whether track preview is currently playing or paused
    renderAudio() {
        if (this.state.play) {
            return (
                <button className="Track-action">
                    <i className="fas fa-pause-circle"
                      onClick={this.pauseSample}>
                    </i>
                </button>
                  )
        } else { 
            return (
                <button className="Track-action">
                    <i className="fas fa-play-circle"
                    onClick={this.playSample}>
                    </i>
            </button>
          )
    };
}
    // Play function using built-in JS Audio element (will be passed to AudioSample component via props)
    playSample() {
        this.audioSample.volume = 0.1;
        this.setState(
          { play: true, pause: false, volume: 0.1 },
          () => {
              this.audioSample.play();
              console.log(this.audioSample.volume);
          });
        };

    // Pause function -- want it to use the same Audio element from playSample() instead of creating a new instance
    pauseSample() {
        this.setState(
            { play: false, pause: true },
            () => {
                this.audioSample.pause();
            });
        };

    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album} </p>
                </div>
                {this.renderAction()}
                {this.renderAudio()}

            </div>
        )
    }
}

/* Removed from render statement, add back if deciding to use separate AudioSample component
                <AudioSample
                    onPlay={this.playSample}
                    onPause={this.pauseSample} />
*/

export default Track;