import { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import LayoutContext from '../../contexts/LayoutContext';
import './Layout.sass';

function Layout (props) {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  function toggleDrawer () {
    setIsDrawerOpened(prevIsDrawerOpened => !prevIsDrawerOpened);
  }

  return (
    <LayoutContext.Provider value={{ toggleDrawer }}>
      <main
        onClick={() => {
          if (!isDrawerOpened) {
            return;
          }
          setIsDrawerOpened(false);
        }}
        className={`layout ${isDrawerOpened ? 'layout_drawer-opened' : ''}`}
      >
        <div className="layout__wrapper">
          {props.children}
        </div>
      </main>
      <Drawer isOpened={isDrawerOpened} toggleDrawer={toggleDrawer} />
    </LayoutContext.Provider>
  );
}

export default Layout;
