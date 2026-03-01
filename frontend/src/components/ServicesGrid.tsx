import { ArrowRight, Home, Users, MapPin, Briefcase, Car, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Respite Services',
    description: 'Short-term relief for primary caregivers, providing quality care in a safe, nurturing environment.',
    link: '#contact',
    linkLabel: 'Learn more',
  },
  {
    icon: Users,
    title: 'Adult Day Services',
    description: 'Structured daytime programs designed for social engagement, skill-building, and community participation.',
    link: '#contact',
    linkLabel: 'Explore calendar',
  },
  {
    icon: MapPin,
    title: 'Community Activities',
    description: 'Inclusive outings and group activities that encourage independence and social connection.',
    link: '#contact',
    linkLabel: 'View calendar',
  },
  {
    icon: Briefcase,
    title: 'Vocational Rehab',
    description: 'Building the employment skills and confidence needed for meaningful work and community integration.',
    link: '#contact',
    linkLabel: 'Career goals',
  },
  {
    icon: Car,
    title: 'Non-Medical Transport',
    description: 'Safe, reliable transportation to appointments, programs, and community activities across the region.',
    link: '#contact',
    linkLabel: 'Book a ride',
  },
  {
    icon: Stethoscope,
    title: 'On-Call Nurse Activities',
    description: 'Licensed nursing staff available around the clock to support health monitoring and medical needs.',
    link: '#contact',
    linkLabel: 'View our policy',
    badge: 'NEW',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Care for Every Stage
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We're equipped to provide specialized programs to the youth and certified medical staff for adults.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-green" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-foreground text-base">{service.title}</h3>
                  {service.badge && (
                    <span className="text-xs bg-brand-highlight/20 text-brand-highlight font-bold px-2 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:gap-2 transition-all"
                >
                  {service.linkLabel}
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
