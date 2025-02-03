import { IoClose } from "react-icons/io5";
import { AIConversation } from '@aws-amplify/ui-react-ai';
import { useAIConversation } from "@/pages/client";

interface ChatModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
    const [
        {
            data: { messages },
            isLoading,
        },
        handleSendMessage,
    ] = useAIConversation('chat');

    if (!isOpen) return null;

    return (
        <div className="chat-modal">
            <AIConversation
                messages={messages}
                isLoading={isLoading}
                handleSendMessage={handleSendMessage}
            />
        </div>
    );
} 