export const umrahSteps = [
  {
    id: 1,
    title: "Intention (Niyyah) & Ihram",
    description: "Make the intention for Umrah and enter the state of Ihram at the Miqat. Wear the two white sheets for men, modest clothing for women.",
    link: "/umrah-guide/ihram",
    icon: "🤲",
    step: "Step 1",
    arabic: "الإحرام"
  },
  {
    id: 2,
    title: "Talbiyah",
    description: "Recite the Talbiyah continuously after entering Ihram: 'Labbayk Allahumma labbayk...' until you begin Tawaf.",
    link: "/umrah-guide/talbiyah",
    icon: "🗣️",
    step: "Step 2",
    arabic: "التلبية"
  },
  {
    id: 3,
    title: "Tawaf al-Umrah",
    description: "Perform seven circuits around the Holy Kaaba, starting and ending at the Black Stone (Hajar al-Aswad).",
    link: "/umrah-guide/tawaf",
    icon: "🕋",
    step: "Step 3",
    arabic: "طواف العمرة"
  },
  {
    id: 4,
    title: "Salah behind Maqam Ibrahim",
    description: "Pray two Rakats of Salah behind Maqam Ibrahim (Station of Abraham) after completing Tawaf.",
    link: "/umrah-guide/salah-maqam",
    icon: "🤲",
    step: "Step 4",
    arabic: "صلاة ركعتين"
  },
  {
    id: 5,
    title: "Sa'i between Safa and Marwah",
    description: "Walk/run seven times between the hills of Safa and Marwah, starting at Safa and ending at Marwah.",
    link: "/umrah-guide/sai",
    icon: "🚶‍♂️",
    step: "Step 5",
    arabic: "السعي"
  },
  {
    id: 6,
    title: "Halq or Taqsir",
    description: "Complete Umrah by shaving the head (Halq) or cutting the hair short (Taqsir). This marks the end of Ihram.",
    link: "/umrah-guide/halq-taqsir",
    icon: "✂️",
    step: "Step 6",
    arabic: "الحلق أو التقصير"
  }
];

export const umrahEssentials = [
  {
    id: 7,
    title: "Miqat Points",
    description: "Learn about the designated boundary points where pilgrims must enter Ihram before proceeding to Makkah.",
    link: "/umrah-guide/miqat",
    icon: "📍",
    category: "Essential Knowledge"
  },
  {
    id: 8,
    title: "Prohibitions in Ihram",
    description: "Understand what is forbidden while in the state of Ihram to ensure your pilgrimage remains valid.",
    link: "/umrah-guide/ihram-prohibitions",
    icon: "⚠️",
    category: "Essential Knowledge"
  },
  {
    id: 9,
    title: "Duas and Supplications",
    description: "Important prayers and supplications to recite during different stages of your Umrah journey.",
    link: "/umrah-guide/duas",
    icon: "📖",
    category: "Essential Knowledge"
  }
];

export const getAllGuides = () => [...umrahSteps, ...umrahEssentials];
export const getUmrahSteps = () => umrahSteps;
export const getEssentialGuides = () => umrahEssentials;