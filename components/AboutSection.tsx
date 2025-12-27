import { Award, Users, Clock, Heart, Quote } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'

export default function AboutSection() {
  return (
    <section className="py-24 bg-stone-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-200/50 skew-x-12 transform translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side (Left) */}
          <RevealOnScroll>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-400/30 rounded-2xl transform -translate-x-2 -translate-y-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5]">
                <img 
                  src="/sonia.jpg" 
                  alt="Sonia Forestieri al lavoro" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-8">
                  <div className="text-white">
                    <p className="font-serif text-2xl italic mb-2">"La bellezza è l'armonia tra corpo e mente"</p>
                    <p className="text-amber-200 font-medium">- Sonia Forestieri</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-8 w-8 text-amber-500" />
                  <span className="text-3xl font-bold text-stone-800">20+</span>
                </div>
                <p className="text-stone-600 text-sm font-medium">Anni di esperienza nel settore estetico</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Content Side (Right) */}
          <div className="space-y-8">
            <RevealOnScroll delay={200}>
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Chi Sono</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mt-2 mb-6">
                Passione per la Bellezza, <br/>
                <span className="text-amber-700/80 italic">Cura per i Dettagli</span>
              </h2>
              
              <div className="prose prose-lg text-stone-600 mb-8">
                <p className="leading-relaxed">
                  Mi chiamo <strong>Sonia</strong> e da oltre vent'anni mi dedico al benessere delle mie clienti. 
                  Ho creato questo spazio pensando a un rifugio dove poter staccare dalla frenesia quotidiana e ritrovare se stessi.
                </p>
                <p className="leading-relaxed mt-4">
                  La mia filosofia non si limita al semplice trattamento estetico, ma abbraccia un concetto di bellezza olistica. 
                  Ogni gesto, ogni prodotto e ogni tecnologia che utilizzo è scelta con cura per garantire risultati eccellenti 
                  nel massimo rispetto della tua pelle.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Users, title: "Approccio Personale", desc: "Trattamenti su misura per te" },
                { icon: Clock, title: "Flessibilità", desc: "Orari comodi per le tue esigenze" },
                { icon: Heart, title: "Passione", desc: "Amore per il mio lavoro" },
                { icon: Award, title: "Qualità", desc: "Prodotti di alta gamma" }
              ].map((item, idx) => (
                <RevealOnScroll key={idx} delay={300 + (idx * 100)}>
                  <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md border border-stone-100">
                    <div className="bg-amber-50 rounded-full p-2.5 shrink-0">
                      <item.icon className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 text-sm mb-1">{item.title}</h3>
                      <p className="text-stone-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
