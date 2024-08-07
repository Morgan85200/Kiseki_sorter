dataSetVersion = "2024-07-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by arcs",
    key: "arcs",
    tooltip: "Check this to remove scenes from certain arcs.",
    checked: false,
    sub: [
      { name: "Trails in the sky FC", key: "skyFC" },
      { name: "Trails in the sky SC", key: "skySC" },
      { name: "Crossbell", key: "crossbell" },
      { name: "Coldsteel", key: "cs" },
      { name: "Kuro", key: "kuro" }
    ]
  } 
];

dataSet[dataSetVersion].characterData = [

  //Trails in the sky FC
  {
    name: "Why is my present a BOY ?",
    img: "https://i.ibb.co/G3v0dFT/present-boy.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Joshua ends his dream with Estelle",
    img: "https://i.ibb.co/MCdn4zg/joshua-dream.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Picnic in Manoria Village",
    img: "https://i.ibb.co/RSQcVcB/picnic-in-manoria.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Professor Russel rescue attempt failed",
    img: "https://i.ibb.co/w6bMQN5/tita-rescue-attempt.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Mayor Delmore chase and arrest",
    img: "https://i.ibb.co/xG45000/joshua-snaping.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Stop being such a child, Richard!",
    img: "https://i.ibb.co/Yk3cmPZ/cassius-speech-to-richard.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Jenis Royal Academy Play",
    img: "https://i.ibb.co/ZhH25Mv/jenis-academy-play.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "The Tournament Arc",
    img: "https://i.ibb.co/ZTjtG2j/tournament-arc.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "First time meeting Olivier",
    img: "https://i.ibb.co/309QD8B/Olivier-s-first-meeting.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Joshua plays harmonica for Estelle",
    img: "https://i.ibb.co/hR6KvcF/Joshua-plays-for-estelle.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Infiltrating the Capua Sky Bandits",
    img: "https://i.ibb.co/MGS7F75/infiltrating-capua-family.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Kloe confronts Gilbert for burning down the orphanage",
    img: "https://i.ibb.co/yqMSCLR/kloe-confronting-gilbert.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Agate fights Lorence for the first time",
    img: "https://i.ibb.co/djDC1sK/agate-fights-lorence.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle declares herself Tita's sister",
    img: "https://i.ibb.co/bQBsy8J/estelle-tita-sister.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Agate hallucinating about his sister",
    img: "https://i.ibb.co/W5LFSMT/agate-hallucinating-mischa.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Infiltrating Leiston Fortress",
    img: "https://i.ibb.co/4fwDt26/infiltrating-leiston-fortress.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle tells Joshua his past",
    img: "https://i.ibb.co/dk7RN85/estelle-past.png",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle and Joshua promise to one another",
    img: "https://i.ibb.co/YXQg3My/I-will-tell-you-everything.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle and Joshua disguises as maids",
    img: "https://i.ibb.co/mDs0F8T/joshua-estelle-disguising-as-maids.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Hostage liberation, Kloe is the princess !? ",
    img: "https://i.ibb.co/z88jqZ2/saving-the-princess.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Fight against Lorence",
    img: "https://i.ibb.co/QHLnxWK/first-fight-against-lorence.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Now! finish him off !",
    img: "https://i.ibb.co/FBVv8Cj/now-finish-him-off.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle and Joshua become bracers",
    img: "https://i.ibb.co/9bMBvtk/estelle-joshua-becomes-bracers.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Weissman's reveal",
    img: "https://i.ibb.co/CsCK0dh/weissman-reveal-and-joshua-past.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "First chapter's ending",
    img: "https://i.ibb.co/5M49pd0/fc-ending.jpg",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "The end of a journey, the beginning of a new one", // SC ending 
    img: "https://i.ibb.co/5M49pd0/fc-ending.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Kevin helps Estelle vent her feelings",
    img: "https://i.ibb.co/mG5cW7N/kevin-helps-estelle.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle finds her resolve once again",
    img: "https://i.ibb.co/1K2rSG2/estelle-resolve.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Meeting Renne for the first time",
    img: "https://i.ibb.co/gMZPZRx/meeting-renne.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle and Kloe open up to each other",
    img: "https://i.ibb.co/ZShk2pB/estelle-kloe-open-up-to-each-others.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Bleublanc and Olivier debates about beauty",
    img: "https://i.ibb.co/vBCGgjL/true-beauty-is-love.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Walter shows himself",
    img: "https://i.ibb.co/HrdDyCM/walter-shows-himself.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Olivier cheers up Estelle",
    img: "https://i.ibb.co/WKgGG7m/olivier-cheers-up-estelle.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Olivier saves the day with his gentle, sad song...",
    img: "https://i.ibb.co/6RPGW5s/olivier-saving-the-day.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Zin saves Estelle from Walter",
    img: "https://i.ibb.co/47FRnf4/zin-saves-estelle.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Renne plays hide and seek with the bracers",
    img: "https://i.ibb.co/FWqmcR8/renne-plays-hide-and-seek.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Renne reveals her true nature",
    img: "https://i.ibb.co/JnsJPBy/renne-reveals-her-true-nature.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Richard disbands the intelligence division",
    img: "https://i.ibb.co/7twt2rY/richard-disbands-the-intelligence-division.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Josette and Joshua face off Mueller to get back the Bobcat",
    img: "https://i.ibb.co/7WWcYQG/joshua-face-muller.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle places her trust in Olivier",
    img: "https://i.ibb.co/xgLmZky/estelle-trust-olivier.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Scherazard reminisce about how she met the Bright Family",
    img: "https://i.ibb.co/fGKCtmQ/schera-meeting-bright-family.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Schera slaps Estelle and reminds her that everyone make mistakes",
    img: "https://i.ibb.co/pJP766f/schera-slaps-estelle.jpg",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle plays the Whereabouts of Light and wakes up from her dream",
    img: "https://i.ibb.co/PFL95Rn/estelle-wakes-up.png",
    opts: {
      arcs: ["skySC"]
    }
  },
];
	
