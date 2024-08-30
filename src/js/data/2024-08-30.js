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
      { name: "Trails in the sky 3rd", key: "sky3" },
    ]
  } 
];

dataSet[dataSetVersion].characterData = [

  //Trails in the sky FC
  {
    name: "Why is my present a BOY ?",
    img: "fc/present_boy.jpg",
    url: "https://youtu.be/KuU6G92UtaM?si=ZFD0JZEAnYGghKS5&t=89",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Joshua ends his dream with Estelle",
    img: "fc/joshua_dream.jpg",
    url: "https://youtu.be/Jo6rH6Hx-ng?si=mnxvcyW5h6jdJYII&t=3529",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Picnic in Manoria Village",
    img: "fc/picnic_in_manoria.jpg",
    url: "https://youtu.be/EvAF4kYs6V4?si=t3ahwYfAGKbeLtLT&t=32",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Professor Russel rescue attempt failed",
    img: "fc/tita_rescue_attempt.jpg",
    url: "https://youtu.be/lOaSSYQcaCg?si=ZyevM44AdN2l_Q_d&t=747",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Joshua snapping, Mayor Delmore chase and arrest",
    img: "fc/joshua_snaping.jpg",
    url: "https://youtu.be/Leu1KiAPBPw?si=la4LUtM7qTc2H9Hy&t=2704",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Stop being such a child, Richard!",
    img: "fc/cassius_speech_to_richard.jpg",
    url: "https://youtu.be/5RGxP0cFBxE?si=A4O__I0re0SBZzzQ&t=3707",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Olivier recounts how he got arrested",
    img: "fc/olivier_arrested.jpg",
    url: "https://youtu.be/oG9WvG50ASQ?si=n-I5fymtme3tUdDW&t=756",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle gives comfort to Kloe after the orphanage burnt down",
    img: "fc/estelle_conforts_kloe.jpg",
    url: "https://youtu.be/fdOKxCVmUs8?si=JTiYIzv7plaqGkJ6&t=2073",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Jenis Royal Academy Play",
    img: "fc/jenis_academy_play.jpg",
    url: "https://youtu.be/ndyd8dvTBmE?si=nT8x8cpsP-JFoZzi&t=1161",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "The Tournament Arc",
    img: "fc/tournament_arc.jpg",
    url: "https://youtu.be/c-TnoRPHA1o?si=eKo-Rb45yM7-DCvY&t=637",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "First time meeting Olivier",
    img: "fc/olivier_first_meeting.jpg",
    url: "https://youtu.be/R1hWpQrmmrY?si=5s44lKkmHSm3Y6Nz&t=1071",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Joshua plays harmonica for Estelle",
    img: "fc/joshua_plays_for_estelle.jpg",
    url: "https://youtu.be/wlR6qDcLjTw?si=nZ_-AIAhT_e6_uYx&t=1048",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Infiltrating the Capua Sky Bandits",
    img: "fc/infiltrating_capua_family.jpg",
    url: "https://youtu.be/UFdxm6RuPFk?si=Rf0FliO2QR6tcUPa&t=191",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Kloe confronts Gilbert for burning down the orphanage",
    img: "fc/kloe_confronting_gilbert.jpg",
    url:"https://youtu.be/Leu1KiAPBPw?si=9AUeSwba8mCuEByJ&t=862",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Agate fights Lorence for the first time",
    img: "fc/agate_fights_lorence.jpg",
    url:"https://youtu.be/-wHWKwR5UoQ?si=Kix3crotNUVO5qhg&t=95",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle declares herself Tita's big sister",
    img: "fc/estelle_tita_sister.jpg",
    url:"https://youtu.be/Lfd5DCuzpDc?si=s-mZQPKKJ4PHSquV&t=1453",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Agate hallucinating about his sister",
    img: "fc/agate_hallucinating_mischa.jpg",
    url: "https://youtu.be/lOaSSYQcaCg?si=i64r_qopkOttV6b_&t=2432",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Infiltrating Leiston Fortress",
    img: "fc/infiltrating_leiston_fortress.jpg",
    url: "https://youtu.be/r-rYGYjqVRA?si=PLcCl8t9JXv977Yv&t=844",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle tells Joshua how her mother passed away",
    img: "fc/estelle_past.png",
    url: "https://youtu.be/aVde7GlXOlc?si=uJeJ12t7C7BehvLn&t=573",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle and Joshua promise to one another",
    img: "fc/I_will_tell_you_everything.jpg",
    url: "https://youtu.be/58X-LSlXzGE?si=RShk3Luwx2SQdjHy&t=1355",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle and Joshua disguises as maids",
    img: "fc/joshua_estelle_disguising_as_maids.jpg",
    url: "https://youtu.be/sYz7zGjY680?si=MknRQ83wLNpiXjxR&t=816",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Hostage liberation, Kloe is the princess !? ",
    img: "fc/saving_the_princess.jpg",
    url: "https://youtu.be/5Rj8wFxOY1U?si=_iB0FMhw6fnTzTDj&t=667",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle, Kloe and Scherazard confront Lorence",
    img: "fc/first_fight_against_lorence.jpg",
    url: "https://youtu.be/5RGxP0cFBxE?si=XsGiKJDSrkgDl82I&t=169",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Now! finish him off !",
    img: "fc/now_finish_him_off.jpg",
    url: "https://youtu.be/5RGxP0cFBxE?si=NTNpUpZplgzAialm&t=3232",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Estelle and Joshua become bracers",
    img: "fc/estelle_joshua_become_bracers.jpg",
    url: "https://youtu.be/Jo6rH6Hx-ng?si=pHpJPi8BrBSdLglz&t=66",
    opts: {
      arcs: ["skyFC"]
    }
  },
  {
    name: "Weissman's reveal",
    img: "fc/weissman_reveal_and_joshua_past.jpg",
    url: "https://youtu.be/W7InC56YLYw?si=smvL6WRZmBTAaCTm&t=188",
    opts: {
      arcs: ["skyFC"]
    }
  },
  { // SC
    name: "Kevin helps Estelle vent her feelings",
    img: "sc/kevin_helps_estelle.jpg",
    url: "https://youtu.be/0UnpPEmQnLc?si=S0qqq2kv22CzI1ie&t=686",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle finds her resolve once again",
    img: "sc/estelle_resolve.jpg",
    url: "https://youtu.be/0UnpPEmQnLc?si=dwvl_VTcj_r8-gSK&t=1653",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Meeting Renne for the first time",
    img: "sc/meeting_renne.jpg",
    url: "https://youtu.be/wrxVNrotOSI?si=AxNaMKD0dW8j34LL&t=1405",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle and Kloe open up to each other",
    img: "sc/estelle_kloe_open_up_to_each_others.jpg",
    url: "https://youtu.be/uD-KJ0O-vTw?si=QvuVe_GHINAKxBqv&t=649",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Bleublanc and Olivier debates about beauty",
    img: "sc/true_beauty_is_love.jpg",
    url: "https://youtu.be/uD-KJ0O-vTw?si=SYSAceQuxC5DUFA5&t=3277",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Walter shows himself",
    img: "sc/walter_shows_himself.jpg",
    url: "https://youtu.be/8azI-9re0G8?si=ei5gOYRc3103pJMk&t=1992",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Olivier cheers up Estelle",
    img: "sc/olivier_cheers_up_estelle.jpg",
    url: "https://youtu.be/c7OUMTD6oGc?si=0b3EllosadXCXbIX&t=519",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Olivier saves the day with his gentle, sad song...",
    img: "sc/olivier_saving_the_day.jpg",
    url: "https://youtu.be/wrxVNrotOSI?si=lutRPTtjXnFKEWls&t=2084",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Zin saves Estelle from Walter",
    img: "sc/zin_saves_estelle.jpg",
    url: "https://youtu.be/8azI-9re0G8?si=TaexopwjHdwBE_R5&t=2399",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Renne plays hide and seek with the bracers",
    img: "sc/renne_plays_hide_and_seek.jpg",
    url: "https://youtu.be/nIjMlGSwbEE?si=_9x1x8VS0Vqi9GQO&t=791",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Renne reveals her true nature",
    img: "sc/renne_reveals_her_true_nature.jpg",
    url: "https://youtu.be/F2FprU5lF9I?si=gRa1QF3QqpGjrAVE&t=1315",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Richard disbands the intelligence division",
    img: "sc/richard_disbands_the_intelligence_division.jpg",
    url: "https://youtu.be/F2FprU5lF9I?si=GY9Qahr-Q3jzVquw&t=1935",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Josette and Joshua face off Mueller to get back the Bobcat",
    img: "sc/joshua_face_muller.jpg",
    url: "https://youtu.be/UWnJse-805Y?si=97OKqFbsQTpL7e-b&t=1100",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle places her trust in Olivier",
    img: "sc/estelle_trust_olivier.jpg",
    url: "https://youtu.be/UWnJse-805Y?si=LfbJ_Th_lmrDBF1j&t=1665",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Scherazard reminisces about how she met the Bright Family",
    img: "sc/schera_meeting_bright_family.jpg",
    url: "https://youtu.be/-r_Af30KvNY?si=q4y-7EOxJ_dSJyP7&t=1201",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Schera slaps Estelle and reminds her that everyone make mistakes",
    img: "sc/schera_slaps_estelle.jpg",
    url: "https://youtu.be/HJKxkAelK1o?si=ik1Wx1oJaH5fmlfF&t=377",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle plays the Whereabouts of Light and wakes up from her dream",
    img: "sc/estelle_wakes_up.png",
    url: "https://youtu.be/HJKxkAelK1o?si=7DLjd_xK6qZMBnwG&t=2706",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Anton confesses to Aina, they end up doing a drinking contest",
    img: "sc/anton_confesses_aina.jpg",
    url: "https://youtu.be/UZDiiTP3OYE?si=dvkVS-eUxIgaccYh&t=976",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Loewe tells Agate what separates them",
    img: "sc/loewe_speech_agate.jpg",
    url: "https://youtu.be/VQh9bJnBW3o?si=qTTN0Wl_d4HVFM_E&t=1436",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Tita rushes in to protect Agate",
    img: "sc/tita_protects_agate.jpg",
    url: "https://youtu.be/VQh9bJnBW3o?si=hSC7kDJL82HIMYBu&t=1634",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Tita helps Agate move on",
    img: "sc/tita_helps_agate_move_on.jpg",
    url: "https://youtu.be/gCDKNzorTOc?si=SUu_ak6lGDsEVwGm&t=1235",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Agate frees Ragnard from his seal",
    img: "sc/agate_frees_ragnard.jpg",
    url: "https://youtu.be/o6n8z8Q0eaQ?si=GxiaVwNmNX7CMTp0&t=3186",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Loewe pays respect to Ravennue Village's victims",
    img: "sc/loewe_pays_his_respect.jpg",
    url: "https://youtu.be/o6n8z8Q0eaQ?si=nWnASAo1PCuOwds_&t=4380",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Joshua infiltrate the Glorious",
    img: "sc/joshua_infiltrate_ouroboros.png",
    url: "https://youtu.be/AiYcr-GVrbw?si=ZsaZ_5h8uGT4jJlX&t=610",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle reminisces about the past at the lodge and plays the harmonica",
    img: "sc/estelle_plays_harmonica.jpg",
    url: "https://youtu.be/nvPLCM_mdlU?si=59UnZ5-OUTzxc7aH&t=1207",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle gets kidnapped by Ouroboros and Glorious's reveal",
    img: "sc/estelle_kidnapped_glorious.jpg",
    url: "https://youtu.be/Mun4H6JLkGg?si=6k7qIwjMIYjltXVF&t=1267",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle meets with Weissman on the Glorious",
    img: "sc/estelle_meets_weissman.jpg",
    url: "https://youtu.be/Mun4H6JLkGg?si=SGUe3s6epKQLedTK&t=1658",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Loewe tells Estelle about Hamel and Karin",
    img: "sc/loewe_tells_estelle_about_hamel.jpg",
    url: "https://youtu.be/Mun4H6JLkGg?si=_gWO4z5t7l3JxtEN&t=2557",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: '"I finally found you, Joshua. I finally reached you"',
    img: "sc/estelle_finds_joshua.jpg",
    url: "https://youtu.be/LUkSUFB_Fko?si=MmgcC4mjgiylhg_c&t=2281",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: '"Joshua... You damn fool of a son of mine... Welcome home"',
    img: "sc/welcome_home_joshua.jpg",
    url: "https://youtu.be/mBAc86uZuG0?si=zLMm7mVqn6JkxObW&t=724",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "The Liberl Ark appears",
    img: "sc/liberl_ark_appears.png",
    url: "https://youtu.be/B_l3cde9tp8?si=YOB0-l92PfXYjTOD&t=4241",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Cid and Richard save Kloe and the Queen from Ouroboros",
    img: "sc/cid_richard_saves_the_queen.jpg",
    url: "https://youtu.be/eo2YCllxhNg?si=O96ILA1L51UXnj1g&t=628",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Olivier's reveal and declaration to Zech",
    img: "sc/olivier_reveal.jpg",
    url: "https://youtu.be/eo2YCllxhNg?si=D2KYut8O3FKi5Ard&t=2191",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Battle in the sky ! The Arseille is forced to land on the Liberl Ark",
    img: "sc/arseille_glorious.png",
    url: "https://youtu.be/dIZ_nYGgRDk?si=2ZCc_5bsg_V7Kstu&t=363",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Zin vs Walter, their past and conflict resolved through their fist",
    img: "sc/zin_walter.jpg",
    url: "https://youtu.be/KHzJ1wMm52k?si=65duAW5Xn9qzW5Zi&t=1167",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Luciola tells her past and disappears from Schera's life",
    img: "sc/luciola.jpg",
    url: "https://youtu.be/KHzJ1wMm52k?si=DzyU6qkZpA3YUTZr&t=2063",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Estelle and Renne",
    img: "sc/estelle_and_renne.jpg",
    url: "https://youtu.be/KHzJ1wMm52k?si=WZCA9OFT0vPF-Rep&t=3074",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: '"People are never powerless so long as they are together!"',
    img: "sc/joshua_vs_loewe.jpg",
    url: "https://youtu.be/hb2E60ETbyA?si=jcGGwBJMxP9P0Aut&t=579",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Weissman orders Joshua to kill Estelle",
    img: "sc/weissman_orders_joshua.jpg",
    url: "https://youtu.be/hb2E60ETbyA?si=wIrhdCBHmV8Z6voL&t=3137",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Loewe's payback to Weissman",
    img: "sc/loewe_break_aureole_barrier.jpg",
    url: "https://youtu.be/VUGHNBWND58?si=9Se8VEEnhBygLX_b&t=446",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: 'At least I finally understand why Karin could smile like that at the end...',
    img: "sc/loewe_death.jpg",
    url: "https://youtu.be/VUGHNBWND58?si=Sbig5jnfrBoKdgu3&t=1311",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "Weissman meets his demise at the hand of Kevin",
    img: "sc/weissman_death.jpg",
    url: "https://youtu.be/VUGHNBWND58?si=5asvCJApQl57X88S&t=1802",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: '"Can I ask two favors ?"',
    img: "sc/two_favors.jpg",
    url: "https://youtu.be/VUGHNBWND58?si=bXQQptPStq1UaVQ9&t=2448",
    opts: {
      arcs: ["skySC"]
    }
  },
  {
    name: "The end of a journey, the beginning of a new one",
    img: "sc/sc_ending.jpg",
    url: "https://youtu.be/VUGHNBWND58?si=wyZ_qH8vBpFsnUVx&t=3403",
    opts: {
      arcs: ["skySC"]
    }
  },
  { // Third /3rd
    name: "Kevin gets back the Fool's locket and takes down Conrad for the Gralsritter",
    img: "3rd/3rd_prologue.jpg",
    url: "https://youtu.be/6DPMMsZ8XiQ?si=kWFDqyKsz-XKjeYI&t=1096",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "The recluse cube's reawakening",
    img: "3rd/cube_awakening.jpg",
    url: "https://youtu.be/Tayvm11dqo4?si=mlzJpKssfDt662nA&t=1412",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Kevin and Ries enters Phantasma",
    img: "3rd/kevin_ries_enters_phantasma.jpg",
    url: "https://youtu.be/Tayvm11dqo4?si=U6OqhrYsJ6VveE0H&t=2726",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Tita talks about how she wants to help Renne to her dad",
    img: "3rd/tita_wants_to_help_renne.jpg",
    url: "https://youtu.be/0gXeHxa4fIw?si=zk_DvkfVmgSAKzR6&t=3322",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Kevin meets the Argent sisters",
    img: "3rd/kevin_meets_argent_sisters.png",
    url: "https://youtu.be/-It8WA0a29k?si=oYoKcNyqPkMfGdqq&t=132",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Julia opens up to Mueller",
    img: "3rd/julia_opens_up_mueller.jpg",
    url: "https://youtu.be/-It8WA0a29k?si=mewLpRlpzQcv2-UX&t=2874",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Julia comes to terms with her wish of serving Kloe",
    img: "3rd/julia_comes_to_terms.jpg",
    url: "https://youtu.be/-It8WA0a29k?si=AAyJobLa_8dek0XT&t=3547",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Kloe confesses to Joshua and helps him finds motivation before leaving Liberl",
    img: "3rd/kloe_confesses.jpg",
    url: "https://youtu.be/ZAqOfMBs-6A?si=RrMBcuYmqi3S4GO3&t=3938",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Discovery of the salt pale inside of the second door in Phantasma",
    img: "3rd/salt_pale.png",
    url: "https://youtu.be/811OrPlJouc?si=saiYn2Cq6yR5RYs0&t=97",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "The capua's family backstory and how they lost their home",
    img: "3rd/capua_family.png",
    url: "https://youtu.be/811OrPlJouc?si=_ZplxrkC79rHQ4Tz&t=1360",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Ries sees through Kevin's lies",
    img: "3rd/ries_sees_through_kevin_lies.jpg",
    url: "https://youtu.be/FHqCdf6zKCk?si=5syfIlgReFbVCMQl&t=1078",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Kilika decides to go back to Calvard after getting a final push from Zin",
    img: "3rd/zin_helps_kilika.jpg",
    url: "https://youtu.be/FHqCdf6zKCk?si=Sj9Cwgv8ysh34tp7&t=2652",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Kloe thanks Lechter for the advices he gave her",
    img: "3rd/kloe_thanks_lechter.jpg",
    url: "https://youtu.be/4hqSpBj2QKw?si=hoyeIv9R1ilzzDf7&t=3148",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Anelace receives Cassius' sword",
    img: "3rd/anelace_receives_cassius_sword.jpg",
    url: "https://youtu.be/jMUWhjH2GcI?si=NosmN8woX59lYLnT&t=2637",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Schera tells Aina how she grew up",
    img: "3rd/schera_childhood.jpg",
    url: "https://youtu.be/XLxsggiPa3g?si=YMrEvZZZCF1yQp5f&t=96",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Schera and Aina become friends and have their first drink together",
    img: "3rd/schera_aina.jpg",
    url: "https://youtu.be/XLxsggiPa3g?si=J-w2eAsUsSyJfhrA&t=2861",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Deen, Rais and Rocco become junior bracors",
    img: "3rd/the_ravens_become_junior_bracers.jpg",
    url: "https://youtu.be/ySDTQ2seDrY?si=-c4RwHRhuwCG7mRA&t=2536",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Kevin unveils his stigma to save Ries",
    img: "3rd/kevin_unveils_his_stigma.jpg",
    url: "https://youtu.be/ySDTQ2seDrY?si=HZRBJyZT6bH-at5v&t=3108",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Kevin becomes the fifth dominion after Rufina's death",
    img: "3rd/kevin_becomes_a_dominion.png",
    url: "https://youtu.be/xmHX6LBzfuI?si=3X37MAI06Qz5olXn&t=14",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: '"You amaze me more than any bug ever will"',
    img: "3rd/estelle_bug.jpg",
    url: "https://youtu.be/XrRlzI99rCk?si=I7NUINfxJ2vdBLcC&t=3030",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Don't you dare give up, Tita !",
    img: "3rd/dont_give_up_tita.jpg",
    url: "https://youtu.be/bSPDvKyYjhM?si=HMNt10pNL4UD0YG9&t=2679",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Tita stops Renne and Ries from fighting",
    img: "3rd/tita_stop_renne_ries_fight.jpg",
    url: "https://youtu.be/JobjjFmNLdc?si=KNDqlAXtzUjD1kNz&t=2510",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Olivert's declaration",
    img: "3rd/olivier_osborne.jpg",
    url: "https://youtu.be/ehv9CAfHG7U?si=vTdt0Y4gGL_nUE4X&t=1654",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: '"Defeat me, that is all"',
    img: "3rd/defeat_me.jpg",
    url: "https://youtu.be/ZH13lYWy10s?si=VeDDLN-QSDAbAZhj&t=2222",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Richard's newfound motivation",
    img: "3rd/richard_motivation.jpg",
    url: "https://youtu.be/gasc3Z6sBak?si=R9ILNH7Ydgz0LBTr&t=1807",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Joshua gives Loewe a proper goodbye",
    img: "3rd/loewe_final_moments.jpg",
    url: "https://youtu.be/PVo3K2ie3Cc?si=J62v0o2pKAkSFtLe&t=1425",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "The truth behind Rufina's death",
    img: "3rd/rufina_death.png",
    url: "https://youtu.be/HEdRpE50YyE?si=QN3Y4nJ05orSwt6K&t=1378",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Kevin saves Ries from falling to Gehenna",
    img: "3rd/kevin_saves_ries.jpg",
    url: "https://youtu.be/HEdRpE50YyE?si=j_KanH5EGw9JsJOD&t=2310",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Kevin meets the ghosts of his past in Gehenna",
    img: "3rd/kevin_meets_ghosts_of_his_past.jpg",
    url: "https://youtu.be/HEdRpE50YyE?si=65J9J2lc-dINHzw6&t=3193",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Star Door 15",
    img: "3rd/star_door_15.jpg",
    url: "https://youtu.be/N5CzfVW9Eu8?si=VJnyNbeU5_9V2sR3&t=1855",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Final fight against the Lord of Phantasma",
    img: "3rd/the_final_fight_against_anima_mundi.jpg",
    url: "https://youtu.be/hBtl414Ehqk?si=L4gth-2uaYtmtDiA&t=1512",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "To the world she envisioned",
    img: "3rd/rufina_final_moments.jpg",
    url: "https://youtu.be/hBtl414Ehqk?si=ZyGy5c2f3vMXQwn7&t=2175",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Farewells",
    img: "3rd/farewells.jpg",
    url: "https://youtu.be/zFmF6ELDP8g?si=dWovZK8zmTp5vt_m&t=285",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: "Estelle's speech to Renne about parting",
    img: "3rd/estelle_renne.jpg",
    url: "https://youtu.be/zFmF6ELDP8g?si=6WBeRRWu_YD5f4cC&t=1511",
    opts: {
      arcs: ["sky3"]
    }
  },
  {
    name: '"Is it possible for a dominion to change their title after choosing one ?"',
    img: "3rd/dominion_title.jpg",
    url: "https://youtu.be/zFmF6ELDP8g?si=K4dfsKbwesv039vL&t=2831",
    opts: {
      arcs: ["sky3"]
    }
  },
];
	
