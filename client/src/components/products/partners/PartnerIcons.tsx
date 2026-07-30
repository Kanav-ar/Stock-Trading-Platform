type PartnerIcons = {
  img: string;
  text: string;
};

export default function PartnerIcon({ img, text }:PartnerIcons) {
  return (
    <div className="flex flex-col items-center gap-4">
        <img className="h-16 w-60" src={img} alt="Partner icon image" />
        <p className="text-xs text-gray-400 text-center max-w-sm">{text}</p>
    </div>
  
  );
}
