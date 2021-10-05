import FriendsBar from 'components/ui/friendsBar/FriendsBar';
import React, { CSSProperties } from 'react';

type contentProps = {
    
};

const style: CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '100%',
}

const content:React.FC<contentProps> = () => {
    
    return <div style={style}>
        <FriendsBar/>
    </div>
}
export default content;