"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Moon } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import OvernightBookingModal from "@/components/OvernightBookingModal";

export default function AgafayOvernightPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Pricing breakdown
  const pricing = {
    transfers: { label: "Private transfers (550 × 2 ways)", amount: 1100 },
    room: { label: "Suite for 2, half-board", amount: 2650 },
    camel: { label: "Sunset camel ride (300 × 2)", amount: 600 },
  };

  const totalMAD = pricing.transfers.amount + pricing.room.amount + pricing.camel.amount;
  const totalEUR = Math.round(totalMAD / 11); // Approximate conversion

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner from Sheet */}
      <PageBanner
        slug="overnight/agafay-desert"
        fallback={{
          title: "Agafay Desert Under the Stars",
          subtitle: "One night in the stone desert. Sunset camel ride, dinner under the sky, silence you can feel.",
          label: "Overnight Experience",
        }}
      />

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          {/* Back Link */}
          <Link
            href="/day-trips"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            All Experiences
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-10">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>2 Days / 1 Night</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>From Marrakech</span>
            </div>
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4" />
              <span>Desert Camp</span>
            </div>
          </div>

          {/* Intro */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 font-display italic">
            One night in the stone desert. Sunset camel ride, dinner under the sky, silence you can feel.
          </p>

          {/* Itinerary */}
          <div className="space-y-12 mb-16">
            {/* Day 1 */}
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
                Day One
              </p>
              <h2 className="font-serif text-2xl mb-4">Into the Stone Desert</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  <strong className="text-foreground">2:00 PM</strong> — Pickup from your riad in Marrakech. The drive south takes you past the last palm groves, through villages of red earth, until the landscape opens into something older—the Agafay plateau, where rocky desert meets the distant High Atlas.
                </p>
                <p>
                  Arrive at Scarabeo Stone Camp as the light softens. Settle into your suite, then join your camel for a sunset ride across the desert floor. Return to camp for dinner: Moroccan salads, tagines, the chef's trio—served under a canopy of stars.
                </p>
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
                Day Two
              </p>
              <h2 className="font-serif text-2xl mb-4">Morning Light</h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Wake to the silence of the desert. Breakfast on the terrace—fresh bread, honey, eggs, fruit—with the Atlas Mountains catching the morning sun. Take your time. The desert doesn't rush.
                </p>
                <p>
                  <strong className="text-foreground">12:00 PM</strong> — Transfer back to Marrakech, arriving early afternoon.
                </p>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="bg-sand p-8 mb-12">
            <h3 className="font-serif text-xl mb-2">Scarabeo Stone Camp</h3>
            <p className="text-sm text-muted-foreground mb-4">Suite · Half-Board</p>
            <p className="text-muted-foreground">
              A camp of stone and canvas set into the Agafay plateau. Private suite with double bed, en-suite bathroom, and terrace facing the Atlas. Dinner and breakfast included.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              We usually book Scarabeo Stone Camp, subject to availability. If unavailable, a similar camp will be proposed.
            </p>
          </div>

          {/* What's Included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Included
              </h3>
              <ul className="space-y-2">
                {[
                  "Private transfer from Marrakech",
                  "One night at Scarabeo Stone Camp",
                  "Dinner + breakfast (half-board)",
                  "Sunset camel ride with handler",
                  "Private transfer back to Marrakech",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-foreground/50 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
                Not Included
              </h3>
              <ul className="space-y-2">
                {[
                  "Drinks at camp",
                  "Lunch",
                  "Tips",
                  "Additional activities",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-foreground text-background p-8 md:p-10 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase opacity-50 mb-6">
              Investment
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="opacity-70">{pricing.transfers.label}</span>
                <span>{pricing.transfers.amount.toLocaleString()} MAD</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="opacity-70">{pricing.room.label}</span>
                <span>{pricing.room.amount.toLocaleString()} MAD</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="opacity-70">{pricing.camel.label}</span>
                <span>{pricing.camel.amount.toLocaleString()} MAD</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline pt-4 border-t border-white/20">
              <span className="text-xs tracking-[0.15em] uppercase opacity-50">Starting from</span>
              <div className="text-right">
                <p className="text-3xl font-serif">{totalMAD.toLocaleString()} MAD</p>
                <p className="text-sm opacity-50">~€{totalEUR} for 2 guests</p>
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="text-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-block bg-foreground text-background px-12 py-4 text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Reserve This Experience
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              or <Link href="/contact" className="underline hover:text-foreground">send us a note</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Other Experiences */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="font-serif text-2xl text-center mb-12">
            Other Experiences
          </h2>
          <div className="text-center">
            <Link
              href="/day-trips"
              className="inline-block border border-foreground px-8 py-3 text-xs tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              View All Day Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <OvernightBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        experienceTitle="Agafay Desert Overnight"
        pricing={pricing}
        totalMAD={totalMAD}
      />
    </div>
  );
}
