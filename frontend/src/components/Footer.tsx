import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

const serviceLinks = [
  'Adult Day Services',
  'Respite Support',
  'Community Activities',
  'Animal Therapy',
  'Transport',
];

const programLinks = [
  'Youth Group Homes',
  'CANS Assessments',
  'CPI Training',
  'Staff Development',
];

const missionLinks = [
  'About Us',
  'Careers',
  'Volunteer',
  'Donate',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'community-care');

  return (
    <footer className="bg-brand-charcoal border-t border-white/10">
      <div className="container mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
                <span className="text-white text-xs font-bold">CC</span>
              </div>
              <span className="font-semibold text-white text-lg">Reliance</span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              Building stronger communities through compassionate care, certified professionals, and unwavering commitment to every individual we serve.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: SiFacebook, href: '#' },
                { Icon: SiInstagram, href: '#' },
                { Icon: SiLinkedin, href: '#' },
                { Icon: SiX, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-green hover:text-white transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-white/50 text-xs hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Programs</h4>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link}>
                  <a href="#youth" className="text-white/50 text-xs hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Our Mission */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Join Our Mission</h4>
            <ul className="space-y-2">
              {missionLinks.map((link) => (
                <li key={link}>
                  <a href="#contact" className="text-white/50 text-xs hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} Reliance Community Care. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Built with{' '}
            <Heart size={11} className="text-brand-highlight fill-brand-highlight" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
