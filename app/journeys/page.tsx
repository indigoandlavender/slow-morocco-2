"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { useCurrency } from "@/lib/currency";
import PageBanner from "@/components/PageBanner";

export default function JourneysPage() {
  const [journeys, setJourneys] = useState<any[]>([]);
  const [filteredJourneys, setFilteredJourneys] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { format } = useCurrency();
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedFocus, setSelectedFocus] = useState("all");

  // Get unique values for filters
  const durations = [
    { slug: "all", label: "All" },
    { slug: "short", label: "1-5 Days" },
    { slug: "medium", label: "6-10 Days" },
    { slug: "long", label: "11+ Days" },
  ];

  const focuses = [
    { slug: "all", label: "All" },
    { slug: "desert", label: "Desert" },
    { slug: "mountains", label: "Mountains" },
    { slug: "culture", label: "Culture" },
    { slug: "coast", label: "Coast" },
    { slug: "food", label: "Food" },
  ];

  useEffect(() => {
    fetch("/api/journeys")
      .then((r) => r.json())
      .then((data) => {
        const all = data.journeys || [];
        // Filter out epic journeys - they have their own page now
        const regular = all.filter((j: any) => j.journeyType !== 'epic');
        setJourneys(regular);
        setFilteredJourneys(regular);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Apply search and filters
  useEffect(() => {
    let filtered = [...journeys];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((j) =>
        j.title?.toLowerCase().includes(query) ||
        j.description?.toLowerCase().includes(query) ||
        j.destinations?.toLowerCase().includes(query) ||
        j.startCity?.toLowerCase().includes(query)
      );
    }

    // Duration filter
    if (selectedDuration !== "all") {
      filtered = filtered.filter((j) => {
        const days = j.durationDays || 0;
        if (selectedDuration === "short") return days >= 1 && days <= 5;
        if (selectedDuration === "medium") return days >= 6 && days <= 10;
        if (selectedDuration === "long") return days >= 11;
        return true;
      });
    }

    // Focus filter
    if (selectedFocus !== "all") {
      filtered = filtered.filter((j) =>
        j.focus?.toLowerCase().includes(selectedFocus.toLowerCase())
      );
    }

    setFilteredJourneys(filtered);
  }, [journeys, searchQuery, selectedDuration, selectedFocus]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDuration("all");
    setSelectedFocus("all");
  };

  const hasActiveFilters = searchQuery || selectedDuration !== "all" || selectedFocus !== "all";

  return (
    <div className="bg-background min-h-screen">
      {/* Immersive Hero Banner */}
      <PageBanner
        slug="journeys"
        fallback={{
          title: "Routes worth taking",
          subtitle: "Every journey is private and fully customizable. Choose a starting point, then we'll shape it around what matters to you.",
          label: "Journeys",
        }}
      />

      {/* Search & Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Search Bar */}
          <div className="max-w-xl mb-10">
            <div className="relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search journeys, destinations, experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground/60 focus:outline-none text-base placeholder:text-foreground/30 transition-colors text-foreground"
              />
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
            {/* Duration Filter */}
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">
                Duration
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                {durations.map((duration) => (
                  <button
                    key={duration.slug}
                    onClick={() => setSelectedDuration(duration.slug === selectedDuration ? "all" : duration.slug)}
                    className={`text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-colors ${
                      selectedDuration === duration.slug
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground/60 border-foreground/20 hover:border-foreground/40"
                    }`}
                  >
                    {duration.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Focus Filter */}
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">
                Focus
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                {focuses.map((focus) => (
                  <button
                    key={focus.slug}
                    onClick={() => setSelectedFocus(focus.slug === selectedFocus ? "all" : focus.slug)}
                    className={`text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-colors ${
                      selectedFocus === focus.slug
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground/60 border-foreground/20 hover:border-foreground/40"
                    }`}
                  >
                    {focus.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear filters */}
            {hasActiveFilters && (
              <div className="md:ml-auto md:self-end">
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-[0.15em] uppercase text-foreground/40 hover:text-foreground transition-colors"
                >
                  Clear filters ×
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results count */}
      {!loading && (
        <div className="container mx-auto px-6 lg:px-16 py-6">
          <p className="text-sm text-foreground/40">
            {filteredJourneys.length} {filteredJourneys.length === 1 ? "journey" : "journeys"}
          </p>
        </div>
      )}

      {/* Journeys Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6 lg:px-16">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
            </div>
          ) : filteredJourneys.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/50 mb-6">No journeys match your search.</p>
              <button
                onClick={clearFilters}
                className="text-sm text-foreground/40 hover:text-foreground underline transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {filteredJourneys.map((journey: any) => (
                <Link
                  key={journey.slug}
                  href={`/journeys/${journey.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-foreground/5">
                    {journey.heroImage && (
                      <Image
                        src={journey.heroImage}
                        alt={journey.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    {/* Category Badge */}
                    {journey.category && (
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] tracking-[0.15em] uppercase bg-background/90 text-foreground/80 px-3 py-1.5">
                          {journey.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between mb-1">
                    <p className="text-xs tracking-[0.15em] uppercase text-foreground/40">
                      {journey.durationDays} Days
                    </p>
                    {Number(journey.price) > 0 && (
                      <p className="text-xs text-foreground/40">
                        From <span className="text-foreground/70">{format(Number(journey.price))}</span>
                      </p>
                    )}
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-foreground/70 transition-colors">
                    {journey.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed line-clamp-2">
                    {journey.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#1a1916] text-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Looking for something different?
          </h2>
          <p className="text-white/70 leading-relaxed mb-4 text-lg">
            These are starting points, not scripts. Tell us what matters to you—we'll shape a route around it.
          </p>
          <p className="text-white/50 leading-relaxed mb-12 text-lg">
            Add a day in the desert. Skip the city. Stay longer where something pulls you.
          </p>
          <Link
            href="/plan-your-trip"
            className="inline-block bg-white text-[#1a1916] px-12 py-4 text-xs tracking-[0.15em] uppercase hover:bg-white/90 transition-colors"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
