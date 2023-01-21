import React, { useEffect } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const Sidebar = ({ isOpen, toggleDrawer }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
      return () => {document.body.style.overflow = 'unset';}
    }, [])
    
    return (
        <Drawer
            lockBackgroundScroll={true}
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            overlayOpacity={0.8}
            overlayColor={'#2e2e2e'}
            size={300}
            className='custom_drawer'
        >
            <div>Hello World</div>
        </Drawer>
    )
}

export default Sidebar