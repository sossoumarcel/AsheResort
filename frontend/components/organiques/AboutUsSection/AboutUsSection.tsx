import Image from "next/image";

// Il n'y a plus de prop 'isMobile'. Le composant est maintenant 100% autonome.
export const AboutUsSection = () => {
  return (
    <section className="p-8">
      {/* 
        Par défaut (mobile): 1 colonne -> format "maison".
        A partir de 768px (md): 2 colonnes -> format "desktop".
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Colonne 1: Image */}
        <div>
          <Image
            src="/images/Untitled Image.png"
            alt="Ashe Resort Farm"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Colonne 2: Texte */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
          <p className="mb-4">
            Bienvenue à Ashe Resort, un havre de paix où la nature et le bien-être se rencontrent. Notre histoire a commencé avec une passion pour l'agriculture durable et le désir de créer un lieu où nos visiteurs peuvent se reconnecter avec la terre.
          </p>
          <p>
            Notre mission est de vous offrir une expérience inoubliable, alliant le charme de la vie à la ferme avec le confort d'un resort de luxe. Nous sommes fiers de nos produits locaux, de nos pratiques écologiques et de l'accueil chaleureux que nous réservons à chaque visiteur.
          </p>
        </div>

      </div>
    </section>
  );
};