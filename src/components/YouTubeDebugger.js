// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    clickHandler = () => {
        this.setState({ settings: {...this.state.settings, bitrate: 12}
        })
    }

    btnClick = () => {
        this.setState({settings: {...this.state.settings, video: { resolution: '720p'}}}, () => console.log(this.state.settings))

        console.log(this.state.settings)
    }

    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.clickHandler}></button>
                <button className='resolution' onClick={this.btnClick}></button>
            </div>
        )
    }
}