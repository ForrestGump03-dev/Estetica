import { Award, Users, Clock, Heart } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Chi Sono
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sonia Forestieri è un'estetista professionista nel settore della bellezza e del benessere. La sua dedizione e competenza
              garantiscono trattamenti personalizzati di alta qualità in un ambiente 
              accogliente e rilassante.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Utilizzando prodotti selezionati e tecniche all'avanguardia, Sonia si prende 
              cura di ogni cliente con attenzione e professionalità, offrendo risultati 
              visibili e duraturi.
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start">
              <div className="text-center bg-white rounded-2xl shadow-lg px-8 py-6">
                <div className="text-4xl font-bold text-rose-500 mb-2">20+</div>
                <div className="text-gray-600 font-medium">Anni di Esperienza</div>
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
                <h3 className="font-semibold text-gray-800 mb-2">Esperienza Certificata</h3>
                <p className="text-gray-600">Formazione professionale e aggiornamento continuo sulle tecniche più moderne</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-rose-100 rounded-full p-3">
                <Users className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Attenzione Personalizzata</h3>
                <p className="text-gray-600">Ogni trattamento è studiato su misura in base alle esigenze individuali</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-rose-100 rounded-full p-3">
                <Clock className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Orari Flessibili</h3>
                <p className="text-gray-600">Disponibilità anche serale per adattarsi alle diverse esigenze</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-rose-100 rounded-full p-3">
                <Heart className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Ambiente Curato</h3>
                <p className="text-gray-600">Spazio accogliente pensato per garantire comfort e relax</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
