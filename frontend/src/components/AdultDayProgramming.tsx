import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Zap, Brain, Palette, Activity, Coffee } from 'lucide-react';

const morningActivities = [
  { icon: Brain, label: 'Cognitive Games' },
  { icon: Activity, label: 'Stretching & Mobility' },
  { icon: Palette, label: 'Art Therapy' },
  { icon: Coffee, label: 'Community Breakfast' },
];

const afternoonActivities = [
  { icon: Zap, label: 'Vocational Skills' },
  { icon: Activity, label: 'Outdoor Recreation' },
  { icon: Brain, label: 'Life Skills Training' },
  { icon: Palette, label: 'Creative Expression' },
];

export default function AdultDayProgramming() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Adult Day Programming
          </h2>
          <p className="text-muted-foreground text-sm">
            Designed for social vitality and personal growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: tabs */}
          <div>
            <Tabs defaultValue="morning">
              <TabsList className="mb-8 bg-transparent border-b border-border rounded-none w-full justify-start gap-6 h-auto p-0">
                <TabsTrigger
                  value="morning"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-green data-[state=active]:text-brand-green pb-3 px-0 text-sm font-semibold bg-transparent shadow-none"
                >
                  Morning Session (A.M.)
                </TabsTrigger>
                <TabsTrigger
                  value="afternoon"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-green data-[state=active]:text-brand-green pb-3 px-0 text-sm font-semibold bg-transparent shadow-none"
                >
                  Afternoon Session (P.M.)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="morning" className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center">
                      <Zap size={18} className="text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base">Energize & Engage</h3>
                      <p className="text-xs text-muted-foreground">Culminating engagement at high, engagement begins at 8AM, gentle physical warm-up and breakfast routine</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {morningActivities.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-brand-green">+</span>
                        <Icon size={13} className="text-brand-green/60" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="afternoon" className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center">
                      <Activity size={18} className="text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base">Grow & Connect</h3>
                      <p className="text-xs text-muted-foreground">Afternoon sessions focus on skill-building, community integration, and creative expression</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {afternoonActivities.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-brand-green">+</span>
                        <Icon size={13} className="text-brand-green/60" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right: image */}
          <div className="relative">
            <img
              src="/assets/generated/adult-day-activity.dim_500x380.png"
              alt="Adults engaged in group activities"
              className="w-full rounded-2xl object-cover shadow-card-hover"
              style={{ height: '360px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
