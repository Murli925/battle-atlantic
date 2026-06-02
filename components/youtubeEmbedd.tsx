"use client";

import { useState } from "react";
import Image from "next/image";

export default function YoutubeEmbed() {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full aspect-video overflow-hidden">

      {!play ? (
        <button
          onClick={() => setPlay(true)}
          className="relative w-full h-full group"
        >
          <Image
            src="https://img.youtube.com/vi/tJHs3biTAdI/maxresdefault.jpg"
            alt="Battle of the Atlantic Video"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center text-black text-3xl shadow-xl">
              ▶
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src="https://www.youtube-nocookie.com/embed/tJHs3biTAdI?autoplay=1"
          title="Archival Footage: The Battle of the Atlantic"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}