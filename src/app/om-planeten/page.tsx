'use client';
import React from 'react';

export default function OmPlaneten() {
  return (
    <div className="container">
      <h1>Om Vår Planet</h1>
      <div className="section-content text-gray-300 space-y-6">
        <p>
          Jorden, vår hemplanet, är en fascinerande plats full av liv och naturliga under. 
          Som den tredje planeten från solen befinner vi oss i den perfekta zonen för liv som vi känner det.
        </p>
        
        <h2>Fakta om Jorden</h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Ålder: Cirka 4,54 miljarder år</li>
          <li>Diameter: 12 742 km</li>
          <li>Genomsnittligt avstånd från solen: 149,6 miljoner km</li>
          <li>Rotationstid: 24 timmar</li>
          <li>Omloppstid runt solen: 365,25 dagar</li>
        </ul>

        <h2>Jordens Atmosfär</h2>
        <p>
          Vår atmosfär består huvudsakligen av kväve (78%) och syre (21%). 
          Den skyddar oss från skadlig strålning och håller planeten varm genom växthuseffekten.
        </p>

        <h2>Biodiversitet</h2>
        <p>
          Jorden är hem till miljontals olika arter av liv. 
          Från de djupaste havsgravarna till de högsta bergstopparna finns det liv i nästan varje vrå av vår planet.
        </p>
      </div>
    </div>
  );
} 