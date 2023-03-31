import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/myProfile.jpg';

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        this.toggleDisplay = () => {
            this.setState({ displayBio: !this.state.displayBio });
        }
    }

    render() {
        return (
            <div className='body'>
                <img src={profile} alt='profile-picture' className='profile' />
                <h1 style={{fontStyle:'bold'}}>Nuraiman Danial</h1>
                <p>Bachelor's of Computer Science (Software Engineering) in University of Malaya.</p>
                <p>Looking forward to working on any software or application development!</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>Hometown in Setia Alam, Selangor and loves to code everyday.</p>
                            <p>Currently exploring more on programming language, web application development and ethical hacking in Linux.</p>
                            <p>Besides coding, I also loves playing guitar and read programming-related sources.</p>
                            <button onClick={this.toggleDisplay}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplay}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        );
    }
}

export default App;