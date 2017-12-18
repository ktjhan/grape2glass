export default function(state, action) {
  return [
    {
      selection: "My Mood",
      items: [
        { text: "Yummy", selected: 0, caption: "Smile & celebrate", image: "" },
        { text: "WOW!", selected: 0, caption: "Enjoy the show!", image: "" },
        { text: "Mmmh...", selected: 0, caption: "Relax & meditate", image: "" }
      ]
    },
    {
      selection: "Color",
      items: [
        { text: "Red", selected: 0, image: "" },
        { text: "White", selected: 0, image: "" },
        { text: "Rose", selected: 0, image: "" },
        { text: "Sparkling", selected: 0, image: "" }
      ]
    },
    {
      selection: "Context",
      items: [
        { text: "Family", selected: 0, image: "" },
        { text: "Friends", selected: 0, image: "" },
        { text: "Business", selected: 0, image: "" },
        { text: "Date", selected: 0, image: "" },
        { text: "Party", selected: 0, image: "" },
        { text: "Alone", selected: 0, image: "" }
      ]
    },
    {
      selection: "Pairing",
      items: [
        { text: "Red Meat", selected: 0, image: "" },
        { text: "White Meat", selected: 0, image: "" },
        { text: "Cheese", selected: 0, image: "" }
      ]
    },
    {
      selection: "Storage",
      items: [
        { text: "Drink Now", selected: 0, image: "" },
        { text: "6 Months", selected: 0, image: "" },
        { text: "1 Year", selected: 0, image: "" },
        { text: "5 Years", selected: 0, image: "" },
        { text: "10 Years", selected: 0, image: "" },
        { text: "25 Years", selected: 0, image: "" }
      ]
    },
    {
      selection: "Location",
      items: [
        { text: "Europe", selected: 0, image: "" },
        { text: "New World", selected: 0, image: "" }
      ]
    },
    {
      selection: "Profile",
      items: [
        { text: "Sweetness: Low", selected: 0, image: "" },
        { text: "Sweetness: Medium", selected: 0, image: "" },
        { text: "Sweetness: High", selected: 0, image: "" }
      ]
    },
    {
      selection: "Varietals",
      items: [
        { text: "Moscato", selected: 0, image: "" },
        { text: "Chardonnay", selected: 0, image: "" },
        { text: "Riesling", selected: 0, image: "" },
        { text: "Chenin Blanc", selected: 0, image: "" },
        { text: "Tremparillo", selected: 0, image: "" }
      ]
    }
  ];
}
