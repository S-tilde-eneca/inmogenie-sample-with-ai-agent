import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Card from '@/components/Card';
import cardsData from '@/data/cards.json';
import ChatButton from "@/components/ChatButton";

const client = generateClient<Schema>();

interface Card {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function App() {
  const { user, signOut } = useAuthenticator();
  
  const cards: Card[] = cardsData.cards;

  const handleChatClick = () => {
    // Aquí puedes añadir la lógica para abrir el chat
    console.log('Chat clicked');
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="welcome-container">
          <h1>Bienvenido, {user?.signInDetails?.loginId || 'Usuario'}</h1>
          <button onClick={signOut} className="sign-out-button">
            Cerrar sesión
          </button>
        </div>
      </header>
      <main>
        <div className="cards-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
            />
          ))}
        </div>
      </main>
      <ChatButton onClick={handleChatClick} />
    </div>
  );
}
