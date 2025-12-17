import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const phoneNumber = "393922281816" // Numero preso da ContactSection
  const message = "Ciao! Vorrei prenotare un appuntamento."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center justify-center group animate-in fade-in zoom-in duration-500"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Prenota ora
      </span>
    </a>
  )
}
