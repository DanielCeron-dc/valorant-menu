import React, { CSSProperties, useEffect } from 'react';
import { shadeColor } from 'tools/shadeColor';

type PickColorProps = {
};

const style:CSSProperties = {
    width: '20rem',
    height: '20rem',
    backgroundColor: 'var(--quaternary)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
}

const PickColor: React.FC<PickColorProps> = () => {
    
    const colorRef = React.useRef<HTMLInputElement>(null);
    
    const onChangeColorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!colorRef.current) return;
        let color = colorRef.current.value;
        document.documentElement.style.setProperty('--secondary', color);
        document.documentElement.style.setProperty('--secondary-dark', shadeColor(color, -20));
    }


    return <form style={style} >
        <label>
            Select a color:{'  '}
            <input ref={colorRef} type="color" name="color" onChange={onChangeColorHandler}/>
        </label>
    </form> 
}
export default PickColor;