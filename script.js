// 🔹 Event Data
const events = [
  {
    title: "Mobile-First Design in Practice",
    type: "Workshop",
    date: "2025-11-20T13:00:00",
    description: "Hands-on techniques for designing responsive mobile-first layouts.",
    image: "imagesmobile-first.jpeg"
  },
  {
    title: "Next-Gen AI Tools",
    type: "Seminar",
    date: "2025-11-20T15:00:00",
    description: "Explore the newest AI frameworks shaping tomorrow’s innovations.",
    image: "imagesai-tools.jpeg"
  },
  {
    title: "Cybersecurity Essentials",
    type: "Panel Discussion",
    date: "2025-11-21T10:00:00",
    description: "Experts share real-world strategies for staying secure online.",
    image: "imagescybersecurity.jpeg"
  },
  {
    title: "Cloud Computing Masterclass",
    type: "Workshop",
    date: "2025-11-21T14:00:00",
    description: "Learn how cloud architecture powers scalable global systems.",
    image: "cloudcomputing.jpeg"
  },
  {
    title: "The Future of Robotics",
    type: "Keynote",
    date: "2025-11-22T09:00:00",
    description: "Discover cutting-edge innovations in AI-driven robotics.",
    image: "robotics.jpeg"
  }
];

// 🔹 Speaker Data
const speakers = [
  {
    name: "Dr. Maya Fernando",
    title: "Head of UX Design, PixelLabs",
    image: "Maya.jpeg"
  },
  {
    name: "Mr.James Liu",
    title: "AI Research Lead, FutureTech",
    image: "James.jpeg"
  },
  {
    name: "Miss.Anjali Perera",
    title: "Cybersecurity Expert, SecureIT",
    image: "Anjali.jpeg"
  }
];

// 🔹 Group Events by Date
function groupEventsByDate(events) {
  const grouped = {};
  events.forEach(event => {
    const date = new Date(event.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(event);
  });
  return grouped;
}

// 🔹 Display Event Schedule
function displayEvents() {
  const container = document.getElementById("event-container");
  const groupedEvents = groupEventsByDate(events);

  Object.keys(groupedEvents).forEach(date => {
    const dayGroup = document.createElement("div");
    dayGroup.classList.add("day-group");

    const dayTitle = document.createElement("h3");
    dayTitle.textContent = date;
    dayGroup.appendChild(dayTitle);

    const grid = document.createElement("div");
    grid.classList.add("event-grid");

    groupedEvents[date].forEach(event => {
      const card = document.createElement("div");
      card.classList.add("event-card");

      card.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <h4>${event.title}</h4>
        <p><strong>Type:</strong> ${event.type}</p>
        <p><strong>Time:</strong> ${new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        <p>${event.description}</p>
      `;

      grid.appendChild(card);
    });

    dayGroup.appendChild(grid);
    container.appendChild(dayGroup);
  });
}

// 🔹 Display Speakers
function displaySpeakers() {
  const container = document.getElementById("speaker-container");

  speakers.forEach(speaker => {
    const card = document.createElement("div");
    card.classList.add("speaker-card");

    card.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}">
      <h3>${speaker.name}</h3>
      <p>${speaker.title}</p>
    `;

    container.appendChild(card);
  });
}

// 🔹 Run Functions
displayEvents();
displaySpeakers();