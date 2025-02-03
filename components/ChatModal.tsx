import { IoClose } from "react-icons/io5";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "@/amplify/data/resource";
import { AIConversation, createAIHooks } from "@aws-amplify/ui-react-ai";

export const client = generateClient<Schema>({ authMode: "userPool" });

const { useAIConversation } = createAIHooks(client);

interface ChatModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
    const [{ data: { messages }, isLoading }, sendMessage] = useAIConversation("chat")


    if (!isOpen) return null;

    return (
        <div className="chat-modal">
            <AIConversation
                messages={messages}
                handleSendMessage={sendMessage}
            />
        </div>
    );
}