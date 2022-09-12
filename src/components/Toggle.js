import React    from 'react';
import { ThemeContext } from './themeContext';

const Toggle = () => {

    const{ theme, setTheme} = React.useContext(ThemeContext);
    return <div>toggle icon</div>
}

export default Toggle