import { BsChatDotsFill } from 'react-icons/bs';
import { useState } from 'react';
import ChatModal from './ChatModal';


const ChatButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChatClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button className="chat-button" onClick={handleChatClick} aria-label="Abrir chat">
        <BsChatDotsFill size={24} />
      </button>
      <ChatModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ChatButton;