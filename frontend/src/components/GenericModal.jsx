import Modal from 'react-modal';
import { useLocalStorage } from "@uidotdev/usehooks";
import Themes from '../themes/Themes';
import Header from './Header';
import ContentDiv from './ContentDiv';

Modal.setAppElement('#root');

export default function GenericModal({children, isOpen, onRequestClose}){
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  background: (darkMode ? Themes.dark.primaryBg : Themes.light.primaryBg),
                  border: "none",
                  maxWidth: '520px',
                  borderRadius: '1rem',
                  paddingTop: '0px'
                },
                overlay: {
                    background: (darkMode ? Themes.dark.faded : Themes.light.faded)
                }
            }}
        >
            <ContentDiv>
                <div className='flex justify-end mb-0 text-3xl cursor-pointer'><div onClick={onRequestClose}>x</div></div>
            </ContentDiv>
            {children}
        </Modal>
    );
}