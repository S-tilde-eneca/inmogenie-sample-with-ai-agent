import { BsChatDotsFill } from 'react-icons/bs';

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button className="chat-button" onClick={onClick} aria-label="Abrir chat">
      <BsChatDotsFill size={24} />
    </button>
  );
}