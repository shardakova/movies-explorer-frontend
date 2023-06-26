import { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import LayoutContext from '../../contexts/LayoutContext';
import './Layout.sass';
import { ToastContainer } from 'react-toastify';
import { useGetMeQuery } from '../../../services/userApi';
import Loader from '../../elements/Loader/Loader';

function Layout (props) {
  const { data: user, isLoading: isUserLoading, isUninitialized: isUserUninitialized } = useGetMeQuery();
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
          {
            (isUserUninitialized || isUserLoading)
              ? (
                  <div className="layout__loading">
                    <Loader />
                  </div>
                )
              : props.children
          }
        </div>
      </main>
      {user && <Drawer isOpened={isDrawerOpened} toggleDrawer={toggleDrawer} />}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="dark"
      />
    </LayoutContext.Provider>
  );
}

export default Layout;
