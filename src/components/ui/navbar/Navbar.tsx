import React from 'react';

import classes from './Navbar.module.css';
import { ReactComponent as SettingsSvg } from 'assets/svg/settings.svg';

const Navbar:React.FC = () => {
    return <div className={classes.navbar} >
        <div className= {classes.Button}>
            HOME
        </div>
        <div className={classes.Button}>
            AGENTS
        </div>
        <div className={classes.playButton}>
            <div className={classes.Trapezoid}/>
            PLAY
        </div>
        <div className={classes.Button}>
            CAREER
        </div>
        <div className={classes.Button}>
            COLLECTION
        </div>
        <SettingsSvg fill = "white" style = {{position: 'absolute', right: 10, cursor: 'pointer'}} />
    </div>
}
export default Navbar;