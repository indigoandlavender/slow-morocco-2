// =============================================================================
// CROSS-LINKING CONFIGURATION
// =============================================================================
// This file defines relationships between Stories, Journeys, Day Trips, and Places
// for intelligent cross-referencing across the Slow Morocco website.
// =============================================================================


// -----------------------------------------------------------------------------
// KEYWORD MAPPINGS
// -----------------------------------------------------------------------------
// Maps story tags/themes to journey slugs and day trip slugs

export const STORY_TO_JOURNEY_MAP: Record<string, string[]> = {
  // Desert & Sahara stories
  "sahara": ["3-Day-Sahara-Circle", "4-Day-Sahara-&-Valleys-Journey", "5-Day-Erg-Chigaga-Desert-Expedition", "navigation-by-stars", "tracking-the-sahara"],
  "desert": ["3-Day-Sahara-Circle", "4-Day-Sahara-&-Valleys-Journey", "5-Day-Erg-Chigaga-Desert-Expedition", "navigation-by-stars"],
  "merzouga": ["3-Day-Sahara-Circle", "4-Day-Sahara-&-Valleys-Journey", "12-Day-Grand-Tour-Eastern-Arc", "12-Day-Grand-Tour-Western-Arc", "navigation-by-stars", "tracking-the-sahara", "gnawa-road"],
  "erg chebbi": ["3-Day-Sahara-Circle", "4-Day-Sahara-&-Valleys-Journey", "navigation-by-stars"],
  "dunes": ["3-Day-Sahara-Circle", "4-Day-Sahara-&-Valleys-Journey", "5-Day-Erg-Chigaga-Desert-Expedition"],
  "camel": ["3-Day-Sahara-Circle", "4-Day-Sahara-&-Valleys-Journey", "5-Day-Erg-Chigaga-Desert-Expedition"],
  "nomad": ["5-Day-Erg-Chigaga-Desert-Expedition", "navigation-by-stars", "tracking-the-sahara"],
  "tuareg": ["5-Day-Erg-Chigaga-Desert-Expedition", "navigation-by-stars"],
  
  // Valley stories
  "draa valley": ["3-Day-Sahara-Circle", "4-Day-Sahara-&-Valleys-Journey", "5-Day-Erg-Chigaga-Desert-Expedition", "12-Day-Grand-Tour-Eastern-Arc", "architecture-pilgrimage"],
  "dades valley": ["4-Day-Sahara-&-Valleys-Journey", "12-Day-Grand-Tour-Eastern-Arc", "architecture-pilgrimage"],
  "dades": ["4-Day-Sahara-&-Valleys-Journey", "12-Day-Grand-Tour-Eastern-Arc", "architecture-pilgrimage"],
  "todra": ["4-Day-Sahara-&-Valleys-Journey", "12-Day-Grand-Tour-Eastern-Arc"],
  
  // Architecture stories
  "kasbah": ["architecture-pilgrimage", "3-Day-Sahara-Circle", "4-Day-Sahara-&-Valleys-Journey", "6-Day-High-Atlas-Trails"],
  "ksar": ["architecture-pilgrimage", "3-Day-Sahara-Circle"],
  "ksour": ["architecture-pilgrimage", "3-Day-Sahara-Circle"],
  "riad": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco"],
  "architecture": ["architecture-pilgrimage", "8-Day-Imperial-Cities"],
  "pisé": ["architecture-pilgrimage"],
  "pise": ["architecture-pilgrimage"],
  
  // Marrakech stories
  "marrakech": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco", "12-Day-Grand-Tour-Eastern-Arc", "12-Day-Grand-Tour-Western-Arc", "gnawa-road"],
  "palais bahia": ["8-Day-Imperial-Cities"],
  "el badi": ["8-Day-Imperial-Cities"],
  "koutoubia": ["8-Day-Imperial-Cities"],
  "ben youssef": ["8-Day-Imperial-Cities"],
  "medina": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco"],
  
  // Fes stories
  "fes": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco", "12-Day-Grand-Tour-Eastern-Arc"],
  "fez": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco", "12-Day-Grand-Tour-Eastern-Arc"],
  "tannery": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco"],
  "zellige": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco"],
  "leather": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco"],
  
  // Coast & Essaouira stories
  "essaouira": ["4-Day-Essaouira-&-Coastal-Villages", "10-Day-Atlantic-Coast-Journey", "12-Day-Grand-Tour-Western-Arc", "gnawa-road"],
  "coast": ["4-Day-Essaouira-&-Coastal-Villages", "10-Day-Atlantic-Coast-Journey"],
  "atlantic": ["4-Day-Essaouira-&-Coastal-Villages", "10-Day-Atlantic-Coast-Journey"],
  "thuya": ["4-Day-Essaouira-&-Coastal-Villages"],
  "argan": ["4-Day-Essaouira-&-Coastal-Villages", "10-Day-Atlantic-Coast-Journey"],
  
  // Mountains stories
  "atlas": ["6-Day-High-Atlas-Trails", "12-Day-Grand-Tour-Eastern-Arc"],
  "high atlas": ["6-Day-High-Atlas-Trails"],
  "imlil": ["6-Day-High-Atlas-Trails"],
  "toubkal": ["6-Day-High-Atlas-Trails"],
  "berber": ["6-Day-High-Atlas-Trails", "5-Day-Chefchaouen-&-the-Rif"],
  "amazigh": ["6-Day-High-Atlas-Trails", "5-Day-Chefchaouen-&-the-Rif"],
  
  // Chefchaouen & Rif stories
  "chefchaouen": ["5-Day-Chefchaouen-&-the-Rif", "6-Day-Northern-Morocco-Tangier-to-Tetouan", "12-Day-Grand-Tour-Eastern-Arc"],
  "rif": ["5-Day-Chefchaouen-&-the-Rif", "6-Day-Northern-Morocco-Tangier-to-Tetouan"],
  "blue city": ["5-Day-Chefchaouen-&-the-Rif", "6-Day-Northern-Morocco-Tangier-to-Tetouan"],
  
  // Tangier & North stories
  "tangier": ["5-Day-Chefchaouen-&-the-Rif", "6-Day-Northern-Morocco-Tangier-to-Tetouan", "12-Day-Grand-Tour-Eastern-Arc"],
  
  // Music & Gnawa stories
  "gnawa": ["gnawa-road", "4-Day-Essaouira-&-Coastal-Villages"],
  "music": ["gnawa-road"],
  "maalem": ["gnawa-road"],
  
  // Food stories
  "food": ["10-Day-Flavors-of-Morocco"],
  "tagine": ["10-Day-Flavors-of-Morocco"],
  "couscous": ["10-Day-Flavors-of-Morocco"],
  "culinary": ["10-Day-Flavors-of-Morocco"],
  "spice": ["10-Day-Flavors-of-Morocco"],
  
  // Craft stories
  "craft": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco"],
  "artisan": ["8-Day-Imperial-Cities", "10-Day-Flavors-of-Morocco"],
  "textiles": ["8-Day-Imperial-Cities"],
  "carpet": ["8-Day-Imperial-Cities"],
  "weaving": ["8-Day-Imperial-Cities"],
  
  // Literature & exploration
  "saint-exupéry": ["little-prince-route"],
  "little prince": ["little-prince-route"],
  "tarfaya": ["little-prince-route"],
  
  // Wildlife
  "wildlife": ["tracking-the-sahara"],
  "fennec": ["tracking-the-sahara"],
  
  // Agafay stories
  "agafay": ["6-Day-High-Atlas-Trails"],
  "hammada": ["3-Day-Sahara-Circle", "5-Day-Erg-Chigaga-Desert-Expedition"],
  "film": ["architecture-pilgrimage"],
  "movies": ["architecture-pilgrimage"],
  "glamping": [],
  "quarry": [],
};

export const STORY_TO_DAYTRIP_MAP: Record<string, string[]> = {
  // Atlas & Mountains
  "atlas": ["imlil-atlas-hiking"],
  "high atlas": ["imlil-atlas-hiking"],
  "imlil": ["imlil-atlas-hiking"],
  "toubkal": ["imlil-atlas-hiking"],
  "berber": ["imlil-atlas-hiking", "ourika-valley"],
  "amazigh": ["imlil-atlas-hiking", "ourika-valley"],
  "mountain": ["imlil-atlas-hiking"],
  
  // Ourika
  "ourika": ["ourika-valley"],
  "waterfall": ["ourika-valley", "ouzoud-falls"],
  "saffron": ["ourika-valley"],
  
  // Agafay
  "agafay": ["agafay-desert"],
  "hammada": ["agafay-desert"],
  "stone desert": ["agafay-desert"],
  "glamping": ["agafay-desert"],
  "film": ["agafay-desert"],
  "movies": ["agafay-desert"],
  
  // Kasbahs
  "kasbah": ["route-of-the-kasbahs"],
  "ksar": ["route-of-the-kasbahs"],
  "ksour": ["route-of-the-kasbahs"],
  "ait benhaddou": ["route-of-the-kasbahs"],
  "aït benhaddou": ["route-of-the-kasbahs"],
  "pisé": ["route-of-the-kasbahs"],
  "pise": ["route-of-the-kasbahs"],
  "ouarzazate": ["route-of-the-kasbahs"],
  
  // Essaouira
  "essaouira": ["essaouira"],
  "thuya": ["essaouira"],
  "gnawa": ["essaouira"],
  "coast": ["essaouira"],
  "atlantic": ["essaouira"],
  "mogador": ["essaouira"],
  
  // Ouzoud
  "ouzoud": ["ouzoud-falls"],
  "cascade": ["ouzoud-falls"],
};


// -----------------------------------------------------------------------------
// JOURNEY TO STORY THEMES
// -----------------------------------------------------------------------------
// Maps journey focus types and destinations to relevant story themes

export const JOURNEY_THEME_TO_STORY_CATEGORIES: Record<string, string[]> = {
  "DESERT": ["Systems", "Architecture", "History", "Wildlife"],
  "CULTURE": ["Architecture", "Design", "Music", "History", "Food"],
  "FOOD": ["Food", "Design", "History"],
  "SEA": ["Design", "Music", "History"],
  "MOUNTAINS": ["Architecture", "Systems", "History"],
  "Literature": ["History", "Architecture"],
  "Expedition": ["Systems", "Wildlife"],
  "Architecture": ["Architecture", "Design"],
  "Wildlife": ["Systems", "Wildlife"],
  "Culture": ["Music", "Design", "History"],
};

export const JOURNEY_DESTINATION_TO_STORY_TAGS: Record<string, string[]> = {
  "marrakech": ["marrakech", "medina", "palais bahia", "el badi", "koutoubia", "ben youssef", "gnawa", "riad"],
  "fes": ["fes", "fez", "zellige", "tannery", "leather", "medersa", "craft"],
  "essaouira": ["essaouira", "mogador", "gnawa", "thuya", "coast", "atlantic"],
  "chefchaouen": ["chefchaouen", "blue city", "rif"],
  "tangier": ["tangier", "strait"],
  "merzouga": ["merzouga", "sahara", "desert", "dunes", "erg chebbi", "gnawa"],
  "draa-valley": ["draa valley", "kasbah", "ksar", "oasis", "palm"],
  "dades-valley": ["dades", "gorge", "kasbah", "roses"],
  "ouarzazate": ["ouarzazate", "kasbah", "film", "cinema"],
  "ait-benhaddou": ["ait benhaddou", "aït benhaddou", "kasbah", "ksar", "film"],
  "imlil": ["imlil", "atlas", "toubkal", "berber", "mountain"],
  "mhamid": ["mhamid", "sahara", "erg chigaga", "nomad"],
  "casablanca": ["casablanca", "art deco", "hassan ii"],
  "rabat": ["rabat", "kasbah", "andalusian"],
  "meknes": ["meknes", "moulay ismail", "imperial"],
  "taghazout": ["taghazout", "surf", "coast", "atlantic"],
  "tarfaya": ["tarfaya", "saint-exupéry", "little prince"],
  "sahara": ["sahara", "desert", "dunes", "nomad", "camel"],
};


// -----------------------------------------------------------------------------
// PLACE TO STORY MAPPINGS
// -----------------------------------------------------------------------------

export const PLACE_DESTINATION_TO_STORY_TAGS: Record<string, string[]> = {
  "marrakech": ["marrakech", "medina", "riad", "palais bahia", "el badi", "koutoubia", "ben youssef", "saadian", "mellah", "souk"],
  "fes": ["fes", "fez", "tannery", "zellige", "medersa", "leather", "medina"],
  "essaouira": ["essaouira", "mogador", "gnawa", "thuya", "coast"],
  "chefchaouen": ["chefchaouen", "blue city", "rif", "jewish"],
  "tangier": ["tangier", "strait", "kasbah"],
  "rabat": ["rabat", "kasbah", "andalusian", "oudaia"],
  "meknes": ["meknes", "moulay ismail", "imperial", "granary"],
  "casablanca": ["casablanca", "art deco", "hassan ii"],
  "merzouga": ["merzouga", "sahara", "desert", "dunes", "gnawa"],
  "draa-valley": ["draa valley", "kasbah", "oasis", "pottery", "tamegroute"],
  "dades-valley": ["dades", "gorge", "kasbah", "roses"],
  "ouarzazate": ["ouarzazate", "kasbah", "taourirt", "film"],
  "ait-benhaddou": ["ait benhaddou", "aït benhaddou", "kasbah", "ksar", "film"],
  "imlil": ["imlil", "atlas", "toubkal", "berber"],
  "taghazout": ["taghazout", "surf", "coast"],
  "ouzoud": ["ouzoud", "waterfall", "cascade"],
  "skoura": ["skoura", "palm", "kasbah"],
  "todra-gorge": ["todra", "gorge", "climbing"],
  "telouet": ["telouet", "glaoui", "kasbah"],
  "tinmel": ["tinmel", "almohad", "mosque"],
  "saghro": ["saghro", "jebel", "nomad"],
  "mhamid": ["mhamid", "sahara", "erg chigaga"],
};


// -----------------------------------------------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------------------------------------------

/**
 * Find related journey slugs for a story based on its tags
 */
export function findRelatedJourneys(storyTags: string): string[] {
  if (!storyTags) return [];
  
  const tags = storyTags.toLowerCase().split(',').map(t => t.trim());
  const journeySlugs = new Set<string>();
  
  tags.forEach(tag => {
    // Direct match
    if (STORY_TO_JOURNEY_MAP[tag]) {
      STORY_TO_JOURNEY_MAP[tag].forEach(slug => journeySlugs.add(slug));
    }
    
    // Partial match for compound tags
    Object.entries(STORY_TO_JOURNEY_MAP).forEach(([key, slugs]) => {
      if (tag.includes(key) || key.includes(tag)) {
        slugs.forEach(slug => journeySlugs.add(slug));
      }
    });
  });
  
  return Array.from(journeySlugs);
}

/**
 * Find related day trip slugs for a story based on its tags
 */
export function findRelatedDayTrips(storyTags: string): string[] {
  if (!storyTags) return [];
  
  const tags = storyTags.toLowerCase().split(',').map(t => t.trim());
  const dayTripSlugs = new Set<string>();
  
  tags.forEach(tag => {
    // Direct match
    if (STORY_TO_DAYTRIP_MAP[tag]) {
      STORY_TO_DAYTRIP_MAP[tag].forEach(slug => dayTripSlugs.add(slug));
    }
    
    // Partial match
    Object.entries(STORY_TO_DAYTRIP_MAP).forEach(([key, slugs]) => {
      if (tag.includes(key) || key.includes(tag)) {
        slugs.forEach(slug => dayTripSlugs.add(slug));
      }
    });
  });
  
  return Array.from(dayTripSlugs);
}

/**
 * Find related story tags for a journey based on its focus and destinations
 */
export function findRelatedStoryTags(journeyFocus: string, journeyDestinations: string): string[] {
  const tags = new Set<string>();
  
  // Add tags from focus type
  if (journeyFocus && JOURNEY_THEME_TO_STORY_CATEGORIES[journeyFocus]) {
    // Categories are added for filtering, not as tags
  }
  
  // Add tags from destinations
  if (journeyDestinations) {
    const destinations = journeyDestinations.toLowerCase().split(',').map(d => d.trim());
    destinations.forEach(dest => {
      if (JOURNEY_DESTINATION_TO_STORY_TAGS[dest]) {
        JOURNEY_DESTINATION_TO_STORY_TAGS[dest].forEach(tag => tags.add(tag));
      }
    });
  }
  
  return Array.from(tags);
}

/**
 * Find related story tags for a place based on its destination
 */
export function findRelatedStoryTagsForPlace(placeDestination: string): string[] {
  if (!placeDestination) return [];
  
  const dest = placeDestination.toLowerCase().trim();
  return PLACE_DESTINATION_TO_STORY_TAGS[dest] || [];
}

/**
 * Score and filter stories based on tag matches
 */
export function scoreStoriesByTags(
  stories: Array<{ slug: string; tags?: string; category?: string; title: string }>,
  targetTags: string[],
  targetCategories?: string[],
  excludeSlug?: string,
  limit: number = 6
): Array<{ slug: string; tags?: string; category?: string; title: string; score: number }> {
  
  const normalizedTargets = targetTags.map(t => t.toLowerCase().trim());
  
  const scored = stories
    .filter(story => story.slug !== excludeSlug)
    .map(story => {
      let score = 0;
      
      // Score by tag matches
      if (story.tags) {
        const storyTags = story.tags.toLowerCase().split(',').map(t => t.trim());
        normalizedTargets.forEach(target => {
          storyTags.forEach(storyTag => {
            if (storyTag === target) score += 3;
            else if (storyTag.includes(target) || target.includes(storyTag)) score += 1;
          });
        });
      }
      
      // Score by category matches
      if (targetCategories && story.category) {
        if (targetCategories.includes(story.category)) {
          score += 2;
        }
      }
      
      return { ...story, score };
    })
    .filter(story => story.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  
  return scored;
}
