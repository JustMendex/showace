import React from 'react';
import { NavbarComponent } from '~/components/navbar';
import { NavbarWithFormComponent } from '~/components/navbar-with-form';

const SettingsPage: React.FC = () => {
    return (
        <div>
            <NavbarWithFormComponent />
            <main>
                <h1>Settings</h1>
                {/* Add your settings content here */}
            </main>
        </div>
    );
};

export default SettingsPage;