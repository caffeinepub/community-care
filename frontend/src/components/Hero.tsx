import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-background overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-green mb-4 bg-brand-green/10 px-3 py-1 rounded-full">
                Caring Care in Northwest Ohio
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                Reliable care,{' '}
                <br />
                rooted in{' '}
                <span className="text-brand-green">community.</span>
              </h1>
            </div>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
              From youth group homes to specialized adult respite, we provide the structured support, medical expertise, and therapeutic environments your family deserves.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-pill bg-brand-green hover:bg-brand-green-dark text-white px-7 py-3 text-sm font-semibold"
              >
                <a href="#services">Our Services</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-pill border-brand-green text-brand-green hover:bg-brand-green/5 px-7 py-3 text-sm font-semibold"
              >
                <a href="#youth">Explore Youth Care</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">24/7</span>
                <span className="text-xs text-muted-foreground">Always Available</span>
              </div>
              <div className="w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">100%</span>
                <span className="text-xs text-muted-foreground">Certified Staff</span>
              </div>
              <div className="w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">Toledo</span>
                <span className="text-xs text-muted-foreground">Northwest Ohio</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Background shape */}
              <div className="absolute inset-0 bg-brand-green/10 rounded-3xl transform rotate-3 scale-105" />
              <img
                src="/assets/generated/hero-professional.dim_600x700.png"
                alt="Professional care provider"
                className="relative z-10 w-full h-auto rounded-3xl object-cover shadow-card-hover"
                style={{ maxHeight: '560px', objectPosition: 'top' }}
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-0 z-20 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/15 flex items-center justify-center">
                  <span className="text-brand-green text-lg">✓</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">DODD Accredited</p>
                  <p className="text-xs text-muted-foreground">Ohio Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
