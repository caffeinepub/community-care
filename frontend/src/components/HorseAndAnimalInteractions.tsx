export default function HorseAndAnimalInteractions() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: stacked images */}
          <div className="flex gap-4 items-start">
            <div className="flex flex-col gap-4 flex-1">
              <img
                src="/assets/generated/horse-interaction-1.dim_400x300.png"
                alt="Participants engaged in animal interactions"
                className="w-full rounded-2xl object-cover shadow-card"
                style={{ height: '220px' }}
              />
              <img
                src="/assets/generated/horse-interaction-2.dim_400x300.png"
                alt="Group activity with animals"
                className="w-full rounded-2xl object-cover shadow-card"
                style={{ height: '180px' }}
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-green mb-3 bg-brand-green/10 px-3 py-1 rounded-full">
                Nature-Based Care
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Horse and Animal Interactions
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Experience the transformative benefits of animal bonds. Our program promotes emotional healing, personal development, and sensory regulation in a nurturing, safe outdoor environment.
            </p>
            <blockquote className="border-l-4 border-brand-green pl-5 py-2">
              <p className="text-sm italic text-foreground/80 leading-relaxed">
                "The transformation we see in our residents when they interact with the horses is a turning point of character. It builds a confidence that stays with them long after the session ends."
              </p>
              <footer className="mt-2 text-xs font-semibold text-brand-green">
                — Clinical Director, Reliance Care
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
