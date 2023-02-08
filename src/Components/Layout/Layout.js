import React from 'react';
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
          header
            <Outlet/>
            footer
        </>
    );
};

export default Layout;