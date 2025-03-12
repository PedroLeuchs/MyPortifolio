import "../styles/Social.css";
interface SocialMidiaProps {
  icon: React.ReactNode;
  name: string;
  linK: string;
}

const SocialMidia: React.FC<SocialMidiaProps> = ({ icon, linK, name }) => {
  return (
    <a
      href={linK}
      className="flex lg:w-32 w-14 flex-col justify-start items-center gap-2 h-14 hover:h-48 overflow-hidden text-white hover:text-indigo-500  transition-all duration-500"
      target="_blank"
      rel={name}
    >
      {/* icon */}
      <div className="h-12">{icon}</div>
      {/* name */}
      <h1 className="text-2xl lg:flex hidden">{name}</h1>
    </a>
  );
};

export default SocialMidia;
