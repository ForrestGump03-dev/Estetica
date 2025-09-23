import { Award, Users, Clock, Heart } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Chi Siamo
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Estetica Bellezza è il tuo rifugio di tranquillità nel cuore della città. 
              Da oltre 15 anni ci dedichiamo con passione alla cura della bellezza e del benessere, 
              offrendo trattamenti personalizzati in un ambiente elegante e rilassante.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Il nostro team di professioniste qualificate utilizza solo prodotti di alta qualità 
              e tecnologie all'avanguardia per garantire risultati eccellenti e un'esperienza 
              indimenticabile.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-500 mb-2">15+</div>
                <div className="text-gray-600">Anni di Esperienza</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-500 mb-2">5000+</div>
                <div className="text-gray-600">Clienti Soddisfatte</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-rose-100 rounded-full p-3">
                <Award className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Professionali Certificati</h3>
                <p className="text-gray-600">Estetiste qualificate con formazione continua sulle ultime tecniche</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-rose-100 rounded-full p-3">
                <Users className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Approccio Personalizzato</h3>
                <p className="text-gray-600">Ogni trattamento è studiato su misura per le tue esigenze specifiche</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-rose-100 rounded-full p-3">
                <Clock className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Orari Flessibili</h3>
                <p className="text-gray-600">Aperti anche la sera per adattarci ai tuoi impegni</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-rose-100 rounded-full p-3">
                <Heart className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Ambiente Rilassante</h3>
                <p className="text-gray-600">Spazi progettati per il massimo comfort e relax</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
