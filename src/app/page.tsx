'use client';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Hello World!</h1>
        <h3>
          <a 
            href="https://www.google.com/maps" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Utforska världen på Google Maps
          </a>
        </h3>
        <p>Av August Ohlin</p>
      </div>

      <div className="container section">
        <h2>Om Vår Planet</h2>
        <div className="section-content">
          Jorden är vår hemplanet, den tredje planeten från solen i vårt solsystem. 
          Med sina blå hav och gröna kontinenter är den unik i vårt kända universum. 
          Här finns miljontals arter av liv, från de minsta mikroorganismerna till de största valarna i haven.
        </div>
      </div>

      <div className="container section">
        <h2>Utforska Mer</h2>
        <div className="section-content">
          Genom modern teknologi kan vi nu utforska vår planet på sätt som tidigare generationer bara kunde drömma om. 
          Från satellitbilder till interaktiva kartor har vi möjlighet att se och uppleva världen från nya perspektiv.
          <div className="mt-6">
            <a 
              href="https://earth.google.com/web/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white bg-white/10 rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all transform hover:-translate-y-1 hover:shadow-lg text-lg backdrop-blur-sm"
            >
              Utforska i 3D med Google Earth
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 