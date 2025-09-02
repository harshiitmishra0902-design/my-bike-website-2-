// Bike data
const bikes = [
  {
    name: "Hero Splendor",
    price: "₹75,000",
    image: "https://i.ibb.co/Y3VJPWs/splendor.jpg"
  },
  {
    name: "Bajaj Pulsar",
    price: "₹1,10,000",
    image: "https://i.ibb.co/L06prSZ/pulsar.jpg"
  },
  {
    name: "Royal Enfield Classic 350",
    price: "₹1,90,000",
    image: "https://i.ibb.co/1ndGjPg/classic350.jpg"
  }
];

// Select container
const bikeList = document.getElementById("bike-list");

// Add bikes
bikes.forEach(bike => {
  const card = document.createElement("div");
  card.className = "bike-card";
  card.innerHTML = `
    <img src="${bike.image}" alt="${bike.name}">
    <h2>${bike.name}</h2>
    <p>Price: ${bike.price}</p>
  `;
  bikeList.appendChild(card);
});
