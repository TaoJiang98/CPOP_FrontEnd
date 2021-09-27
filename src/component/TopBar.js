import React from 'react';
import '../styles/TopBar.css';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const TopBar = () => {
    return (
        <header className="topbar-header">
            <div className="topbar-logo">
                <Icon name='university' size='massive' />
            </div>
            <h1 className="topbar-title">Cloud-Based Patient Outcome Platform</h1>
            <h5 className="topbar-helper">Health Management and Data Analytics</h5>
        </header>
    )
}

export default TopBar;