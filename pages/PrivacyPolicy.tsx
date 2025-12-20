import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

export default function PrivacyPolicy() {
  return (
    <PageTransition>
    <div className="min-h-screen bg-stone-50 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Torna alla Home
        </Link>

        <h1 className="text-4xl font-serif text-stone-800 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-stone max-w-none text-stone-600">
          <p className="text-lg mb-6">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>

          <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-4">1. Titolare del Trattamento</h2>
          <p>
            Centro Estetico di Sonia Forestieri<br />
            Via Titina De Filippo 36, 90135 Palermo<br />
            Email: soniaforestieri@hotmail.it<br />
            Telefono: +39 392 228 1816
          </p>

          <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-4">2. Tipologia di Dati Raccolti</h2>
          <p>
            Questo sito web è una vetrina informativa e <strong>non raccoglie direttamente dati personali</strong> tramite moduli di contatto o registrazione utenti.
          </p>
          <p>
            I contatti avvengono esclusivamente tramite:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Click diretti su link email (mailto)</li>
            <li>Click diretti su link telefonici (tel)</li>
            <li>Click diretti su link WhatsApp</li>
          </ul>
          <p>
            In questi casi, il trattamento dei dati (es. il tuo numero di telefono o indirizzo email) avviene sui rispettivi client di posta o app di messaggistica, al di fuori di questo sito web.
          </p>

          <h2 className="text-2xl font-semibold text-stone-800 mt-8 mb-4">3. Cookie e Contenuti Incorporati</h2>
          <p>
            Questo sito utilizza cookie tecnici strettamente necessari per il funzionamento.
          </p>
          <p>
            <strong>Video YouTube, Instagram e Facebook:</strong><br />
            Alcune pagine di questo sito possono includere contenuti incorporati (es. video). I contenuti incorporati da altri siti web si comportano esattamente come se il visitatore avesse visitato l'altro sito web.
          </p>
          <p>
            Questi siti web possono raccogliere dati su di te, usare cookie, integrare ulteriori tracciamenti di terze parti e monitorare l'interazione con essi, incluso il tracciamento della tua interazione con il contenuto incorporato se hai un account e sei connesso a quei siti web.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Diritti dell'Utente</h2>
          <p>
            In conformità con il GDPR, hai il diritto di chiedere al titolare del trattamento l'accesso ai tuoi dati personali, la rettifica, la cancellazione degli stessi o la limitazione del trattamento che ti riguarda.
          </p>
        </div>
      </div>
    </div>
    </PageTransition>
  )
}
