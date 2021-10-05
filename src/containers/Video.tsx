
import React, { CSSProperties } from 'react';
import menuVideo from 'assets/video/HomeScreen.mp4';
 

const Video: React.FC = () => {

    return <video
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
            src={menuVideo}
            style={{
                objectFit: 'fill',
                position: 'fixed',
            }}/>
    
}
export default Video;