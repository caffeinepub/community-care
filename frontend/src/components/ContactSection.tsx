import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-charcoal-light py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: form */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              Start a new chapter of care.
            </h2>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              Whether you're seeking youth group homes, adult day services, or 24/7 respite care, our team is ready to help you find the right fit.
            </p>

            {submitted ? (
              <div className="bg-brand-green/20 border border-brand-green/40 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-green text-2xl">✓</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Message Received!</h3>
                <p className="text-white/70 text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName" className="text-white/80 text-xs font-medium">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-brand-green rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="address" className="text-white/80 text-xs font-medium">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Toledo, OH"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-brand-green rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-white/80 text-xs font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(419) 555-0100"
                    type="tel"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-brand-green rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-white/80 text-xs font-medium">How can we help you?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your care needs..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-brand-green rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-pill bg-brand-highlight hover:bg-brand-highlight/90 text-white font-semibold py-3"
                >
                  Request a Consultation
                </Button>
              </form>
            )}
          </div>

          {/* Right: contact info */}
          <div className="space-y-8 lg:pt-16">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Contact Us Today</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">Location</p>
                    <p className="text-white/60 text-sm">Toledo, Ohio and Surrounding Area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">Direct Phone</p>
                    <a href="tel:4195550100" className="text-white/60 text-sm hover:text-brand-green transition-colors">
                      (419) 555-0100
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">Email</p>
                    <a href="mailto:care@reliancecare.com" className="text-white/60 text-sm hover:text-brand-green transition-colors">
                      care@reliancecare.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white/90 text-sm font-semibold mb-2">What services are you interested in?</p>
              <div className="flex flex-wrap gap-2">
                {['Youth Group Home', 'Adult Day Services', 'Respite Care', 'Animal Therapy', 'Transport'].map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
