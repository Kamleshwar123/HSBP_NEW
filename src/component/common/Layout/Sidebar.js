import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const Sidebar = ({ isOpen, toggleDrawer }) => {
    return (
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            overlayOpacity={0.4}
            overlayColor={'#000000'}
            size={300}
            className='custom_drawer'
        >
            <div>Hello World</div>
        </Drawer>
    )
}

export default Sidebar