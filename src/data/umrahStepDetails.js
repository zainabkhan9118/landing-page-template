// Detailed information for each Umrah step and essential knowledge
export const stepDetailsMap = {
  'ihram': {
    step: 'Step 1',
    title: 'Intention (Niyyah) & Ihram',
    arabic: 'الإحرام',
    icon: '🤲',
    description: 'Ihram is the sacred state that Muslims must enter before performing Umrah. It involves both physical preparation and spiritual intention.',
    instructions: [
      'Make the intention (Niyyah) in your heart to perform Umrah for the sake of Allah.',
      'Take a full shower (Ghusl) and wear clean clothes before entering Ihram.',
      'Men: Wear two white, unstitched sheets - one around the waist (Izar) and one over the shoulders (Rida).',
      'Women: Wear modest, loose-fitting clothes that cover the entire body except face and hands.',
      'Recite the Talbiyah after entering Ihram.',
      'Enter Ihram at or before reaching the Miqat (boundary points).'
    ],
    duas: [
      {
        arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ',
        transliteration: 'Labbayk Allahumma labbayk, labbayka la shareeka laka labbayk',
        translation: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am.'
      }
    ],
    tips: [
      'Enter Ihram before reaching the Miqat boundary',
      'Avoid using perfumes, soaps, or scented products',
      'Do not cut nails or hair while in Ihram',
      'Men should not cover their heads',
      'Avoid arguing or fighting while in Ihram'
    ]
  },

  'talbiyah': {
    step: 'Step 2',
    title: 'Talbiyah',
    arabic: 'التلبية',
    icon: '🗣️',
    description: 'Talbiyah is the prayer recited continuously from the time of entering Ihram until beginning the Tawaf.',
    instructions: [
      'Recite the Talbiyah loudly and clearly (men)',
      'Women should recite quietly',
      'Continue reciting throughout your journey to Makkah',
      'Stop reciting when you begin Tawaf around the Kaaba',
      'Recite with full concentration and humility'
    ],
    duas: [
      {
        arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ لاَ شَرِيكَ لَكَ',
        transliteration: 'Labbayk Allahumma labbayk, labbayka la shareeka laka labbayk, innal hamda wan-ni\'mata laka wal mulk, la shareeka lak',
        translation: 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily, all praise, grace and sovereignty belong to You. You have no partner.'
      }
    ],
    tips: [
      'Men should recite loudly, women quietly',
      'Understand the meaning while reciting',
      'Recite frequently during travel to Makkah',
      'Stop when you see the Kaaba for Tawaf'
    ]
  },

  'tawaf': {
    step: 'Step 3',
    title: 'Tawaf al-Umrah',
    arabic: 'طواف العمرة',
    icon: '🕋',
    description: 'Tawaf is the act of circling the Holy Kaaba seven times in a counter-clockwise direction, starting and ending at the Black Stone.',
    instructions: [
      'Begin at the Black Stone (Hajar al-Aswad) - face it and raise your hands',
      'If possible, kiss or touch the Black Stone. If not, point towards it and say "Bismillahi Allahu Akbar"',
      'Walk counter-clockwise around the Kaaba, keeping it on your left',
      'Complete seven circuits (rounds) - each round starts and ends at the Black Stone',
      'Men should walk briskly in the first three rounds (Ramal) and normally in the last four',
      'Women should maintain a normal walking pace throughout',
      'Try to touch or kiss the Black Stone at the end of each round if possible'
    ],
    duas: [
      {
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbana atina fi\'d-dunya hasanatan wa fi\'l-akhirati hasanatan wa qina adhab an-nar',
        translation: 'Our Lord, give us good in this world and good in the hereafter, and save us from the punishment of the Fire.'
      }
    ],
    tips: [
      'Keep the Kaaba on your left side at all times',
      'Make personal duas between Yemeni Corner and Black Stone',
      'Be patient and gentle with other pilgrims',
      'Count your rounds carefully',
      'If you lose count, assume the lesser number'
    ]
  },

  'salah-maqam': {
    step: 'Step 4',
    title: 'Salah behind Maqam Ibrahim',
    arabic: 'صلاة ركعتين',
    icon: '🤲',
    description: 'After completing Tawaf, pray two Rakats of Salah behind Maqam Ibrahim (Station of Abraham) if possible, or anywhere in the Haram.',
    instructions: [
      'Move to a place behind Maqam Ibrahim if possible',
      'If the area is crowded, pray anywhere in the Haram mosque',
      'Pray two Rakats of Salah',
      'In the first Rakat, recite Surah Al-Kafirun after Al-Fatiha',
      'In the second Rakat, recite Surah Al-Ikhlas after Al-Fatiha',
      'Make dua after completing the prayer'
    ],
    duas: [
      {
        arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
        transliteration: 'Rabbi aj\'alni muqeem as-salati wa min dhurriyyati rabbana wa taqabbal du\'a',
        translation: 'My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, and accept my supplication.'
      }
    ],
    tips: [
      'Try to pray as close to Maqam Ibrahim as possible',
      'If area is crowded, any place in Haram is acceptable',
      'Keep the prayer short to allow others to pray',
      'Make sincere dua after the prayer'
    ]
  },

  'sai': {
    step: 'Step 5',
    title: 'Sa\'i between Safa and Marwah',
    arabic: 'السعي',
    icon: '🚶‍♂️',
    description: 'Sa\'i is walking seven times between the hills of Safa and Marwah, commemorating Hajar\'s search for water for her son Ismail.',
    instructions: [
      'Go to Mount Safa and face the Kaaba',
      'Raise your hands and make dua while facing the Kaaba',
      'Walk towards Marwah - this counts as the first lap',
      'Men should run between the green lights, women walk normally',
      'At Marwah, face the Kaaba again and make dua',
      'Walk back to Safa - this is the second lap',
      'Continue until you complete seven laps, ending at Marwah'
    ],
    duas: [
      {
        arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ',
        transliteration: 'Inna as-Safa wal-Marwata min sha\'a\'ir Allah',
        translation: 'Indeed, Safa and Marwah are among the symbols of Allah.'
      },
      {
        arabic: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'La ilaha illa Allah wahdahu la shareeka lah, lahu\'l-mulku wa lahu\'l-hamdu wa huwa \'ala kulli shay\'in qadeer',
        translation: 'There is no god but Allah alone, with no partner. His is the sovereignty and His is the praise, and He is able to do all things.'
      }
    ],
    tips: [
      'Start at Safa and end at Marwah',
      'Men run between green lights, women walk normally',
      'Make dua at both Safa and Marwah',
      'Keep track of your laps carefully',
      'Drink Zamzam water during Sa\'i if needed'
    ]
  },

  'halq-taqsir': {
    step: 'Step 6',
    title: 'Halq or Taqsir',
    arabic: 'الحلق أو التقصير',
    icon: '✂️',
    description: 'The final step of Umrah is cutting the hair - either shaving completely (Halq) or trimming (Taqsir). This releases you from Ihram.',
    instructions: [
      'Men can choose between Halq (complete shaving) or Taqsir (trimming)',
      'Halq (shaving) is preferred and more rewarding for men',
      'Women should only do Taqsir - cut a small portion (fingertip length) from the ends',
      'Use clean, sharp tools or go to designated areas in Haram',
      'Cut from all parts of the head, not just one area',
      'After cutting, you are released from Ihram restrictions'
    ],
    duas: [
      {
        arabic: 'اللَّهُمَّ اغْفِرْ لِلْمُحَلِّقِينَ',
        transliteration: 'Allahumma ighfir lil-muhalliqeen',
        translation: 'O Allah, forgive those who shave their heads.'
      }
    ],
    tips: [
      'Shaving (Halq) is more rewarded than trimming for men',
      'Women must only trim, never shave',
      'Cut from all areas of the head',
      'Use clean tools to avoid infection',
      'You can now wear normal clothes and use perfumes'
    ]
  },

  // Essential Knowledge
  'miqat': {
    title: 'Miqat Points',
    arabic: 'المواقيت',
    icon: '📍',
    category: 'Essential Knowledge',
    description: 'Miqat are the designated boundary points where pilgrims must enter the state of Ihram before proceeding to Makkah for Umrah or Hajj.',
    instructions: [
      'Dhul Hulayfah (Abyar Ali) - for people from Madinah',
      'Al-Juhfah (Rabigh) - for people from Syria, Egypt, and the West',
      'Qarn al-Manazil (As-Sayl al-Kabir) - for people from Najd and the East',
      'Yalamlam (Sa\'diyah) - for people from Yemen and the South',
      'Dhat Irq - for people from Iraq and the North',
      'For air travelers: enter Ihram before crossing the Miqat boundary',
      'If you live within the Miqat boundaries, enter Ihram from your home'
    ],
    tips: [
      'You cannot pass the Miqat without Ihram if intending Umrah/Hajj',
      'Air travelers should enter Ihram before the plane crosses Miqat',
      'If you miss entering Ihram at Miqat, you must return or pay a penalty',
      'GPS apps can help identify when you\'re approaching Miqat',
      'Prepare for Ihram before reaching these points'
    ]
  },

  'ihram-prohibitions': {
    title: 'Prohibitions in Ihram',
    arabic: 'محظورات الإحرام',
    icon: '⚠️',
    category: 'Essential Knowledge',
    description: 'There are specific things that are forbidden while in the state of Ihram. Violating these may require expiation (fidyah).',
    instructions: [
      'Do not cut or remove any hair from the body',
      'Do not trim or cut fingernails or toenails',
      'Do not use any perfumes, scented soaps, or fragranced products',
      'Men: Do not wear stitched clothing or cover the head',
      'Men: Do not wear shoes that cover the ankle',
      'Do not hunt or kill animals (except harmful ones)',
      'Avoid sexual relations and intimate contact',
      'Do not get married or perform marriage ceremonies',
      'Avoid arguing, fighting, or sinful behavior'
    ],
    tips: [
      'Use unscented soap and products only',
      'Men should wear flip-flops or sandals, not closed shoes',
      'If you violate restrictions unknowingly, no penalty is required',
      'Intentional violations may require fidyah (compensation)',
      'Focus on worship and avoid worldly distractions'
    ]
  },

  'duas': {
    title: 'Important Duas and Supplications',
    arabic: 'الأدعية المهمة',
    icon: '📖',
    category: 'Essential Knowledge',
    description: 'Collection of important prayers and supplications to recite during different stages of your Umrah journey.',
    duas: [
      {
        title: 'Upon seeing the Kaaba',
        arabic: 'اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً',
        transliteration: 'Allahumma zid hadha\'l-bayta tashreefan wa ta\'zeeman wa takhriman wa mahabah',
        translation: 'O Allah, increase this House in honor, reverence, respect and awe.'
      },
      {
        title: 'During Tawaf',
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbana atina fi\'d-dunya hasanatan wa fi\'l-akhirati hasanatan wa qina adhab an-nar',
        translation: 'Our Lord, give us good in this world and good in the hereafter, and save us from the punishment of the Fire.'
      },
      {
        title: 'At Safa and Marwah',
        arabic: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration: 'La ilaha illa Allah wahdahu la shareeka lah, lahu\'l-mulku wa lahu\'l-hamdu wa huwa \'ala kulli shay\'in qadeer',
        translation: 'There is no god but Allah alone, with no partner. His is the sovereignty and His is the praise, and He is able to do all things.'
      },
      {
        title: 'General Dua',
        arabic: 'رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
        transliteration: 'Rabbana ighfir lana dhunubana wa israfana fi amrina wa thabbit aqdamana wa\'nsurna \'ala\'l-qawm al-kafireen',
        translation: 'Our Lord, forgive us our sins and our transgressions in our affairs, and make our feet firm, and help us against the disbelieving people.'
      }
    ],
    tips: [
      'Learn the meanings of duas for better concentration',
      'Make personal duas in your own language as well',
      'Dua is especially accepted at holy places',
      'Remember family and friends in your prayers',
      'Ask for forgiveness and guidance'
    ]
  }
};

// Helper function to get step details by slug
export const getStepDetails = (stepSlug) => {
  return stepDetailsMap[stepSlug] || null;
};
