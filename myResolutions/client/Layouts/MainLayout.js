import React from 'react';

const MainLayout = ({content}) => (
    <div className='main-layout'>
        <header>
            <h2>My Resolutions</h2>
            <nav>
                <a href="/">Resolutions</a>
                <a href="/about">About</a>
            </nav>
        </header>
        <main>
            {content}
        </main>
    </div>
);

export default MainLayout;