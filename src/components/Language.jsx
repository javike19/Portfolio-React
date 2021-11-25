import React, {useContext} from 'react';
import { Context } from './Wrapper';



const Language = () => {
    const context = useContext(Context);
    return (
        <div className="select-lang">
        <select value={context.local} onChange={context.selectLanguage}>
            <option value="es">Spanish 🇪🇸</option>
            <option value="en">English 🇬🇧</option>
        </select>
        </div>
    )
}

export default Language
