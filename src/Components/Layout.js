import React, { createContext, useReducer, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import Footer from './Footer';
import Menu from './Menu';
import Burger from './Burger';
import Navigation from './Navigation';
import 'typeface-source-sans-pro';
import 'typeface-bebas-neue';
import 'typeface-poppins';
import 'focus-visible';

export const VidContext = createContext();
const initialState = {
  vidId: undefined,
  showModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      console.log('action', action);
      return {
        ...state,
        vidId: action.payload.id,
        showModal: action.payload.show,
      };
    case 'CLOSE':
      return {
        ...state,
        vidId: action.payload.id,
        showModal: action.payload.show,
      };
    default:
      return state;
  }
};

function Layout(props) {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);

  useEffect(() => {
    console.log('useEffect', VidContext);
  });

  const homepage = props.homepage;

  const modalStyles = {
    content: {
      border: 'none',
      borderRadius: 'none',
      background: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      zIndex: 5,
      padding: 0,
      height: '70vh',
      width: 'auto',
      justifyContent: 'space-between',
      inset: '48% auto auto 50%',
    },
  };

  const options = {
    playerVars: {
      autoplay: 1,
    },
  };

  const closeModal = () => {
    console.log('closeModal');
    dispatch({
      type: 'CLOSE',
      payload: {
        id: '',
        show: false,
      },
    });
  };

  return (
    <VidContext.Provider value={{ state, dispatch }}>
      <div className="layout">
        <Navigation homepage={homepage} />
        <div className="mobilenavbar sticky-top">
          <Link to="/" className="logo">
            George Simpson
          </Link>
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </div>

        <main className={homepage ? 'content homepage' : 'content'}>
          {props.children}
          <Modal
            isOpen={state.showModal}
            style={modalStyles}
            onRequestClose={closeModal}
          >
            <button className="modal-close-button" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
              <YouTube
                videoId={state.vidId}
                containerClassName="embed modal-embed-youtube"
                opts={options}
              />
            </div>
          </Modal>
        </main>
        <Footer />
      </div>
    </VidContext.Provider>
  );
}

export default Layout;
