import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function Card({ image, title, description, link }: CardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="card-button">Ver más</button>
      </div>
    </div>
  );
}