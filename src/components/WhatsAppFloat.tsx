import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappNumber = "+254110380560";
  const message = "Hello! I would like to inquire about Embakasi Benedicta Academy.";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleClick} className="whatsapp-float group" aria-label="Chat on WhatsApp">
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
