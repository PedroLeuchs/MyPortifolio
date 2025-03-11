import React from "react";

interface DownloadButtonProps {
  text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ text }) => {
  const handleDownload = () => {
    const pdfUrl = text == "Currículo" ? "/Curriculo.pdf" : "Curriculum.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${text} Pedro-Leuchs.pdf`; // Nome que o arquivo terá ao ser baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove o link após o clique
  };

  return (
    <button
      onClick={handleDownload}
      className="border-2 border-indigo-500 cursor-pointer text-white lg:px-4 lg:py-2 px-2 py-1 rounded hover:border-indigo-700 transition duration-300 lg:text-2xl md:text-xl text-lg"
    >
      {text}
    </button>
  );
};

export default DownloadButton;
