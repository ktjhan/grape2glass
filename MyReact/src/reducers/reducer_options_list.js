export default function(state, action) {
  return [
    {
      selection: "My Mood",
      items: [
        { text: "Yummy", caption: "Smile & celebrate", image: "" },
        { text: "WOW!", caption: "Enjoy the show!", image: "" },
        { text: "Mmmh...", caption: "Relax & meditate", image: "" }
      ]
    },
    {
      selection: "Color",
      items: [
        { text: "Red", image: "" },
        { text: "White", image: "" },
        { text: "Rose", image: "" },
        { text: "Sparkling", image: "" }
      ]
    },
    {
      selection: "Context",
      items: [
        { text: "Family", image: "" },
        { text: "Friends", image: "" },
        { text: "Business", image: "" },
        { text: "Date", image: "" },
        { text: "Party", image: "" },
        { text: "Alone", image: "" }
      ]
    },
    {
      selection: "Pairing",
      items: [
        { text: "Red Meat", image: "" },
        { text: "White Meat", image: "" },
        { text: "Cheese", image: "" }
      ]
    },
    {
      selection: "Storage",
      items: [
        { text: "Drink Now", image: "" },
        { text: "6 Months", image: "" },
        { text: "1 Year", image: "" },
        { text: "5 Years", image: "" },
        { text: "10 Years", image: "" },
        { text: "25 Years", image: "" }
      ]
    },
    {
      selection: "Location",
      items: [{ text: "Europe", image: "" }, { text: "New World", image: "" }]
    },
    {
      selection: "Profile",
      items: [
        { text: "Sweetness: Low", image: "" },
        { text: "Sweetness: Medium", image: "" },
        { text: "Sweetness: High", image: "" }
      ]
    },
    {
      selection: "Varietals",
      items: [
        { text: "Moscato", image: "" },
        { text: "Chardonnay", image: "" },
        { text: "Riesling", image: "" },
        { text: "Chenin Blanc", image: "" },
        { text: "Tremparillo", image: "" }
      ]
    }
  ];
}
