import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Award, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '90vh' }}>
      {/* Background image */}
      <img
        src="/assets/generated/hero-redesign.dim_1440x900.png"
        alt="Care community background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay — dark on left, lighter on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center" style={{ minHeight: '90vh' }}>
        <div className="max-w-2xl py-24 lg:py-32 space-y-8">
          {/* Eyebrow label */}
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase bg-brand-green/20 border border-brand-green/40 text-white px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green inline-block" />
            Caring Care in Northwest Ohio
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white">
            Reliable care,
            <br />
            rooted in{' '}
            <span className="text-brand-green drop-shadow-[0_2px_12px_rgba(45,122,95,0.6)]">
              community.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
            From youth group homes to specialized adult respite, we provide the structured support, medical expertise, and therapeutic environments your family deserves.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="rounded-pill bg-brand-green hover:bg-brand-green-dark text-white px-8 py-3 text-sm font-semibold shadow-lg shadow-brand-green/30 transition-all duration-200 hover:shadow-brand-green/50 hover:scale-[1.02]"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-pill border-white/50 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-3 text-sm font-semibold transition-all duration-200"
            >
              <a href="#services">Learn More</a>
            </Button>
          </div>

          {/* Stat badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-brand-green" />
              <span className="text-white text-sm font-semibold">24/7</span>
              <span className="text-white/60 text-xs">Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-brand-green" />
              <span className="text-white text-sm font-semibold">100%</span>
              <span className="text-white/60 text-xs">Certified Staff</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span className="text-white text-sm font-semibold">Toledo</span>
              <span className="text-white/60 text-xs">Northwest Ohio</span>
            </div>
          </div>
        </div>

        {/* DODD Accreditation badge — bottom right */}
        <div className="absolute bottom-12 right-6 lg:right-12 z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-card-hover px-5 py-4 flex items-center gap-3 max-w-[200px]">
          <div className="w-11 h-11 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
            <span className="text-brand-green text-xl font-bold">✓</span>
          </div>
          <div>
            <p className="text-xs font-bold text-foreground leading-tight">DODD Accredited</p>
            <p className="text-xs text-muted-foreground">Ohio Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
