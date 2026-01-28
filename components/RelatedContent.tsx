"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// =============================================================================
// TYPES
// =============================================================================

interface Story {
  slug: string;
  title: string;
  subtitle?: string;
  category?: string;
  heroImage?: string;
  excerpt?: string;
  tags?: string;
  readTime?: string;
}

interface Journey {
  slug: string;
  title: string;
  heroImage?: string;
  description?: string;
  shortDescription?: string;
  arcDescription?: string;
  durationDays?: number;
  duration?: number;
  focus?: string;
  focusType?: string;
  destinations?: string;
  price?: number;
}

interface DayTrip {
  slug: string;
  title: string;
  heroImage?: string;
  description?: string;
  shortDescription?: string;
  durationHours?: number;
  category?: string;
  priceEur?: number;
}


// =============================================================================
// RELATED JOURNEYS & DAY TRIPS
// For Story Pages - Shows journeys and day trips related to the story
// =============================================================================

interface RelatedJourneysProps {
  journeys: Journey[];
  dayTrips: DayTrip[];
}

export function RelatedJourneysSection({ journeys, dayTrips }: RelatedJourneysProps) {
  if (journeys.length === 0 && dayTrips.length === 0) return null;

  return (
    <section className="mt-32 pt-20 border-t border-foreground/10">
      
      {/* ------------------------------------------------------------------- */}
      {/* Section Header */}
      {/* ------------------------------------------------------------------- */}
      
      <header className="mb-20">
        <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/30 mb-5">
          Continue Exploring
        </p>
        
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
          Experience This Story
        </h2>
        
        <p className="text-foreground/50 max-w-lg leading-relaxed">
          Journeys and day trips that bring these themes to life
        </p>
      </header>


      {/* ------------------------------------------------------------------- */}
      {/* Multi-Day Journeys */}
      {/* ------------------------------------------------------------------- */}
      
      {journeys.length > 0 && (
        <div className="mb-24">
          
          <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/25 mb-10">
            Multi-Day Journeys
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {journeys.slice(0, 4).map((journey) => (
              <Link
                key={journey.slug}
                href={`/journeys/${journey.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-foreground/5">
                  {journey.heroImage ? (
                    <Image
                      src={journey.heroImage}
                      alt={journey.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-foreground/5" />
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/40">
                    {journey.durationDays || journey.duration} Days
                  </span>
                  
                  {(journey.focus || journey.focusType) && (
                    <>
                      <span className="text-foreground/20">·</span>
                      <span className="text-[11px] tracking-[0.15em] uppercase text-foreground/40">
                        {journey.focus || journey.focusType}
                      </span>
                    </>
                  )}
                  
                  {journey.price && Number(journey.price) > 0 && (
                    <>
                      <span className="text-foreground/20">·</span>
                      <span className="text-[11px] text-foreground/40">
                        From €{Number(journey.price).toLocaleString()}
                      </span>
                    </>
                  )}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl text-foreground group-hover:text-foreground/70 transition-colors mb-3">
                  {journey.title}
                </h3>
                
                {/* Description */}
                {(journey.shortDescription || journey.arcDescription || journey.description) && (
                  <p className="text-sm text-foreground/45 leading-relaxed line-clamp-2">
                    {journey.shortDescription || journey.arcDescription || journey.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}


      {/* ------------------------------------------------------------------- */}
      {/* Day Trips */}
      {/* ------------------------------------------------------------------- */}
      
      {dayTrips.length > 0 && (
        <div className="mb-16">
          
          <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/25 mb-10">
            Day Experiences from Marrakech
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dayTrips.slice(0, 3).map((trip) => (
              <Link
                key={trip.slug}
                href={`/day-trips/${trip.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] mb-5 overflow-hidden bg-foreground/5">
                  {trip.heroImage ? (
                    <Image
                      src={trip.heroImage}
                      alt={trip.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-foreground/5" />
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-foreground/40">
                    {trip.durationHours ? `${trip.durationHours}h` : 'Day Trip'}
                  </span>
                  
                  {trip.category && (
                    <>
                      <span className="text-foreground/20">·</span>
                      <span className="text-[11px] tracking-[0.15em] uppercase text-foreground/40">
                        {trip.category}
                      </span>
                    </>
                  )}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg text-foreground group-hover:text-foreground/70 transition-colors">
                  {trip.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}


      {/* ------------------------------------------------------------------- */}
      {/* View All Link */}
      {/* ------------------------------------------------------------------- */}
      
      <div className="mt-16 pt-10 border-t border-foreground/5 flex justify-center">
        <Link
          href="/journeys"
          className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-foreground/40 hover:text-foreground transition-colors"
        >
          View All Journeys
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      
    </section>
  );
}


// =============================================================================
// RELATED STORIES
// For Journey Pages - Shows stories related to the journey
// =============================================================================

interface RelatedStoriesForJourneyProps {
  stories: Story[];
  journeyTitle?: string;
}

export function RelatedStoriesForJourney({ stories, journeyTitle }: RelatedStoriesForJourneyProps) {
  if (stories.length === 0) return null;

  return (
    <section className="py-28 md:py-36 bg-[#faf8f5]">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* ----------------------------------------------------------------- */}
        {/* Section Header */}
        {/* ----------------------------------------------------------------- */}
        
        <header className="mb-20 max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/30 mb-5">
            From Our Archive
          </p>
          
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">
            Stories Along the Way
          </h2>
          
          <p className="text-foreground/50 leading-relaxed">
            Deep dives into the places, crafts, and traditions you'll encounter on this journey
          </p>
        </header>


        {/* ----------------------------------------------------------------- */}
        {/* Stories Grid */}
        {/* ----------------------------------------------------------------- */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {stories.slice(0, 6).map((story) => (
            <article key={story.slug} className="group">
              <Link href={`/story/${story.slug}`} className="block">
                
                {/* Image */}
                <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-foreground/5">
                  {story.heroImage ? (
                    <Image
                      src={story.heroImage}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-foreground/5" />
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  {story.category && (
                    <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">
                      {story.category}
                    </span>
                  )}
                  
                  {story.category && story.readTime && (
                    <span className="text-foreground/20">·</span>
                  )}
                  
                  {story.readTime && (
                    <span className="text-[11px] text-foreground/40">
                      {story.readTime}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-foreground group-hover:text-foreground/70 transition-colors mb-3">
                  {story.title}
                </h3>

                {/* Subtitle */}
                {story.subtitle && (
                  <p className="text-sm text-foreground/45 leading-relaxed italic">
                    {story.subtitle}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>


        {/* ----------------------------------------------------------------- */}
        {/* View All Link */}
        {/* ----------------------------------------------------------------- */}
        
        <div className="mt-24 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-foreground/40 hover:text-foreground transition-colors"
          >
            Explore All Stories
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}


// =============================================================================
// RELATED STORIES FOR PLACES
// For Place Pages - Shows stories related to the place
// =============================================================================

interface RelatedStoriesForPlaceProps {
  stories: Story[];
  placeName?: string;
  destination?: string;
}

export function RelatedStoriesForPlace({ stories, placeName, destination }: RelatedStoriesForPlaceProps) {
  if (stories.length === 0) return null;

  return (
    <section className="py-24 md:py-32 border-t border-foreground/10">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* ----------------------------------------------------------------- */}
        {/* Section Header */}
        {/* ----------------------------------------------------------------- */}
        
        <header className="mb-20 max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/30 mb-5">
            Deeper Reading
          </p>
          
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-5">
            Stories from {destination ? destination.charAt(0).toUpperCase() + destination.slice(1) : 'This Region'}
          </h2>
          
          <p className="text-foreground/50 leading-relaxed">
            Context and history to enrich your visit
          </p>
        </header>


        {/* ----------------------------------------------------------------- */}
        {/* Stories Grid */}
        {/* ----------------------------------------------------------------- */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {stories.slice(0, 6).map((story) => (
            <article key={story.slug} className="group">
              <Link href={`/story/${story.slug}`} className="block">
                
                {/* Image */}
                <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-foreground/5">
                  {story.heroImage ? (
                    <Image
                      src={story.heroImage}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-foreground/5" />
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  {story.category && (
                    <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">
                      {story.category}
                    </span>
                  )}
                  
                  {story.category && story.readTime && (
                    <span className="text-foreground/20">·</span>
                  )}
                  
                  {story.readTime && (
                    <span className="text-[11px] text-foreground/40">
                      {story.readTime}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-foreground group-hover:text-foreground/70 transition-colors mb-2">
                  {story.title}
                </h3>

                {/* Subtitle */}
                {story.subtitle && (
                  <p className="text-sm text-foreground/45 leading-relaxed italic">
                    {story.subtitle}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>


        {/* ----------------------------------------------------------------- */}
        {/* View All Link */}
        {/* ----------------------------------------------------------------- */}
        
        <div className="mt-20 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-foreground/40 hover:text-foreground transition-colors"
          >
            Explore All Stories
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}


// =============================================================================
// COMPACT INLINE STORIES
// For sidebars or smaller spaces
// =============================================================================

interface CompactStoriesProps {
  stories: Story[];
  title?: string;
}

export function CompactStoriesList({ stories, title = "Related Stories" }: CompactStoriesProps) {
  if (stories.length === 0) return null;

  return (
    <aside className="mt-16 pt-12 border-t border-foreground/10">
      
      <h3 className="text-[10px] tracking-[0.3em] uppercase text-foreground/30 mb-8">
        {title}
      </h3>
      
      <div className="space-y-8">
        {stories.slice(0, 4).map((story) => (
          <Link
            key={story.slug}
            href={`/story/${story.slug}`}
            className="group block"
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/35 mb-2">
              {story.category}
            </p>
            
            <h4 className="font-serif text-foreground group-hover:text-foreground/70 transition-colors leading-snug">
              {story.title}
            </h4>
          </Link>
        ))}
      </div>
      
      <div className="mt-10">
        <Link
          href="/stories"
          className="text-[10px] tracking-[0.2em] uppercase text-foreground/35 hover:text-foreground transition-colors"
        >
          All Stories →
        </Link>
      </div>
      
    </aside>
  );
}
