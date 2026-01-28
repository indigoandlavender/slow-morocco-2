import { NextRequest, NextResponse } from "next/server";
import { getSheetData } from "@/lib/sheets";
import {
  findRelatedJourneys,
  findRelatedDayTrips,
  findRelatedStoryTags,
  findRelatedStoryTagsForPlace,
  scoreStoriesByTags,
  JOURNEY_THEME_TO_STORY_CATEGORIES,
} from "@/lib/crosslinks";

// =============================================================================
// GET /api/related
// =============================================================================
// Fetches related content based on type and identifier
//
// Query params:
//   - type: 'story' | 'journey' | 'place'
//   - slug: the slug of the content item
//   - tags: (optional) comma-separated tags for direct matching
// =============================================================================

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");
  const tagsParam = searchParams.get("tags");

  if (!type) {
    return NextResponse.json(
      { success: false, error: "Missing 'type' parameter" },
      { status: 400 }
    );
  }

  try {
    // -------------------------------------------------------------------------
    // TYPE: STORY
    // Returns related journeys and day trips
    // -------------------------------------------------------------------------
    
    if (type === "story") {
      const tags = tagsParam || "";
      
      // Get journey and day trip slugs from crosslinks
      const relatedJourneySlugs = findRelatedJourneys(tags);
      const relatedDayTripSlugs = findRelatedDayTrips(tags);
      
      // Fetch all journeys
      const journeysData = await getSheetData("Website_Journeys");
      const allJourneys = journeysData.map((row: any) => ({
        slug: row.Slug,
        title: row.Title,
        heroImage: row.Hero_Image_URL,
        shortDescription: row.Short_Description,
        arcDescription: row.Arc_Description,
        durationDays: row.Duration_Days,
        price: row.Price_EUR,
        focus: row.Focus_Type,
        focusType: row.Focus_Type,
        destinations: row.Destinations,
        journeyType: row.Journey_Type,
        published: row.Published,
      })).filter((j: any) => j.published !== false && j.journeyType !== 'epic');
      
      // Filter to related journeys
      const relatedJourneys = allJourneys.filter((j: any) => 
        relatedJourneySlugs.includes(j.slug)
      ).slice(0, 4);
      
      // Fetch all day trips
      const dayTripsData = await getSheetData("Day_Trips");
      const allDayTrips = dayTripsData.map((row: any) => ({
        slug: row.Slug,
        title: row.Title,
        heroImage: row.Hero_Image_URL,
        shortDescription: row.Short_Description,
        durationHours: row.Duration_Hours,
        category: row.Category,
        priceEur: row.Final_Price_EUR,
        published: row.Published,
      })).filter((d: any) => d.published !== false);
      
      // Filter to related day trips
      const relatedDayTrips = allDayTrips.filter((d: any) => 
        relatedDayTripSlugs.includes(d.slug)
      ).slice(0, 3);
      
      return NextResponse.json({
        success: true,
        journeys: relatedJourneys,
        dayTrips: relatedDayTrips,
      });
    }
    
    
    // -------------------------------------------------------------------------
    // TYPE: JOURNEY
    // Returns related stories
    // -------------------------------------------------------------------------
    
    if (type === "journey") {
      if (!slug) {
        return NextResponse.json(
          { success: false, error: "Missing 'slug' parameter for journey" },
          { status: 400 }
        );
      }
      
      // Get journey data
      const journeysData = await getSheetData("Website_Journeys");
      const journey = journeysData.find((row: any) => row.Slug === slug);
      
      if (!journey) {
        return NextResponse.json(
          { success: false, error: "Journey not found" },
          { status: 404 }
        );
      }
      
      // Get related story tags based on journey focus and destinations
      const focus = journey.Focus_Type || "";
      const destinations = journey.Destinations || "";
      const relatedTags = findRelatedStoryTags(focus, destinations);
      const relatedCategories = JOURNEY_THEME_TO_STORY_CATEGORIES[focus] || [];
      
      // Fetch all stories
      const storiesData = await getSheetData("Stories");
      const allStories = storiesData
        .filter((row: any) => row.published !== false)
        .map((row: any) => ({
          slug: row.slug,
          title: row.title,
          subtitle: row.subtitle,
          category: row.category,
          heroImage: row.heroImage,
          excerpt: row.excerpt,
          tags: row.tags,
          readTime: row.readTime,
        }));
      
      // Score and filter stories
      const relatedStories = scoreStoriesByTags(
        allStories,
        relatedTags,
        relatedCategories,
        undefined,
        6
      );
      
      return NextResponse.json({
        success: true,
        stories: relatedStories,
      });
    }
    
    
    // -------------------------------------------------------------------------
    // TYPE: PLACE
    // Returns related stories
    // -------------------------------------------------------------------------
    
    if (type === "place") {
      if (!slug) {
        return NextResponse.json(
          { success: false, error: "Missing 'slug' parameter for place" },
          { status: 400 }
        );
      }
      
      // Get place data
      const placesData = await getSheetData("places");
      const place = placesData.find((row: any) => row.slug === slug);
      
      if (!place) {
        return NextResponse.json(
          { success: false, error: "Place not found" },
          { status: 404 }
        );
      }
      
      // Get related story tags based on place destination
      const destination = place.destination || "";
      const placeTags = place.tags || "";
      const relatedTags = [
        ...findRelatedStoryTagsForPlace(destination),
        ...placeTags.split(',').map((t: string) => t.trim()).filter(Boolean),
      ];
      
      // Fetch all stories
      const storiesData = await getSheetData("Stories");
      const allStories = storiesData
        .filter((row: any) => row.published !== false)
        .map((row: any) => ({
          slug: row.slug,
          title: row.title,
          subtitle: row.subtitle,
          category: row.category,
          heroImage: row.heroImage,
          excerpt: row.excerpt,
          tags: row.tags,
          readTime: row.readTime,
        }));
      
      // Score and filter stories
      const relatedStories = scoreStoriesByTags(
        allStories,
        relatedTags,
        undefined,
        undefined,
        6
      );
      
      return NextResponse.json({
        success: true,
        stories: relatedStories,
        destination: destination,
      });
    }
    
    
    // -------------------------------------------------------------------------
    // Unknown type
    // -------------------------------------------------------------------------
    
    return NextResponse.json(
      { success: false, error: "Invalid 'type' parameter. Use 'story', 'journey', or 'place'" },
      { status: 400 }
    );
    
  } catch (error) {
    console.error("Error fetching related content:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch related content" },
      { status: 500 }
    );
  }
}
