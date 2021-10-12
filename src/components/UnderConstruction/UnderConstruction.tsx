import React from 'react';
import classes from './UnderConstruction.module.css';
import { ReactComponent as ConstructionSvg } from './construction.svg';



const PageUnderContruction: React.FC = () => {

    return <div className={classes.base}>
        <ConstructionSvg className={classes.svg} />
        <h1>Page Under Construction</h1>
    </div>
}
export default PageUnderContruction;