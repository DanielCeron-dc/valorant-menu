import React, { useState } from 'react';
import classes from "./FriendsBar.module.css";


import { ReactComponent as SearchSvg } from 'assets/svg/search.svg';
import { ReactComponent as AddSvg } from 'assets/svg/addFriend.svg';
import {ReactComponent as ExpandSvg} from "assets/svg/expand.svg";


import primer from "assets/valorant/primer.png";


const Friend: React.FC = () => <div className={classes.friend}>
    <img src={primer} alt="kjad" />
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <text>Damusan</text>
        <text className={classes.online}>Online</text>
    </div>
</div>


const FriendsBar: React.FC = () => {
    
    const [showConnected, setShowConnected] = useState(false);
    const [showOffline, setShowOffline] = useState(false); 


    return <div className={classes.base}>
        <Friend />
        <div className={classes.Section}>
            <text>10</text>
            <text>Friends</text>
            <ExpandSvg
                fill="white"
                type="checkbox"
                onClick={() => setShowConnected(c => !c)}
                style={{
                    marginLeft: 'auto',
                    marginRight: '1rem',
                    transform: showConnected ? 'rotate(180deg)' : ''
                }} />
        </div>
        {
            showConnected &&
            <ul>
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
            </ul>
        }
        <div className={classes.Section}>
            <text>10</text>
            <text>Offline</text>
            <ExpandSvg
                fill="white"
                type="checkbox"
                onClick={() => setShowOffline(c => !c)}
                style={{
                    marginLeft: 'auto',
                    marginRight: '1rem',
                    transform: showOffline ? 'rotate(180deg)' : ''
                }} />
        </div>
        {
            showOffline &&
            <ul>
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
            </ul>
        }

        <div className = {classes.tools}>
            <AddSvg fill="white" />
            <div></div>
            <SearchSvg fill="white"/>
        </div>

    </div>
}
export default FriendsBar;