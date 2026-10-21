// Daily Code News - JavaScript dasar untuk interaksi halaman.

const articles = [
  {
    id: 1,
    category: "AI",
    categoryLabel: "AI & ML",
    title: "AI coding assistants are becoming a developer's sidekick",
    description: "Explore how AI tools can support brainstorming, debugging, and repetitive tasks without replacing the thinking behind good code.",
    date: "OCT 18, 2026",
    read: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Ilustrasi teknologi kecerdasan buatan",
    tagClass: "tag-ai"
  },
  {
    id: 2,
    category: "Coding",
    categoryLabel: "CODING",
    title: "The small coding habits that make a big difference",
    description: "Readable names, smaller functions, and useful comments can make a project easier to understand and maintain.",
    date: "OCT 17, 2026",
    read: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Kode pemrograman pada layar komputer",
    tagClass: "tag-coding"
  },
  {
    id: 3,
    category: "Web",
    categoryLabel: "WEB DEV",
    title: "A beginner's guide to building a faster website",
    description: "Learn why image sizes, accessible HTML, and a little attention to loading time help create a better web experience.",
    date: "OCT 16, 2026",
    read: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Laptop di meja kerja seorang developer",
    tagClass: "tag-web"
  },
  {
    id: 4,
    category: "Tech",
    categoryLabel: "TECHNOLOGY",
    title: "Inside the hardware powering our digital world",
    description: "From tiny circuits to powerful processors, computer hardware makes the software we use every day possible.",
    date: "OCT 15, 2026",
    read: "7 MIN READ",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Detail komponen elektronik dan papan sirkuit",
    tagClass: "tag-tech"
  },
  {
    id: 5,
    category: "Coding",
    categoryLabel: "CODING",
    title: "Build something small: the best way to start learning code",
    description: "A tiny personal project gives you room to experiment, make mistakes, and turn new concepts into practical skills.",
    date: "OCT 14, 2026",
    read: "3 MIN READ",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Tim berdiskusi di depan laptop",
    tagClass: "tag-coding"
  },
  {
    id: 6,
    category: "AI",
    categoryLabel: "AI & ML",
    title: "Understanding AI: start with the basics, not the hype",
    description: "A simple look at data, models, and predictions can make the world of machine learning feel much less mysterious.",
    date: "OCT 13, 2026",
    read: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Visualisasi data digital berwarna hijau",
    tagClass: "tag-ai"
  },
  {
    id: 7,
    category: "Web",
    categoryLabel: "WEB DEV",
    title: "HTML, CSS, and JavaScript: how the three fit together",
    description: "Understand how structure, visual styling, and interaction work together to turn a few files into a website.",
    date: "OCT 12, 2026",
    read: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Tampilan desain dan pengembangan situs web",
    tagClass: "tag-web"
  },
  {
    id: 8,
    category: "Tech",
    categoryLabel: "TECHNOLOGY",
    title: "Cloud computing, explained without the jargon",
    description: "Discover what it means to use computing services over the internet and why so many apps rely on the cloud.",
    date: "OCT 11, 2026",
    read: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Rak server pusat data",
    tagClass: "tag-tech"
  },
  {
    id: 9,
    category: "Coding",
    categoryLabel: "CODING",
    title: "Debugging is a skill, not a sign that you failed",
    description: "A practical debugging routine can help beginners investigate errors calmly and learn from each problem.",
    date: "OCT 10, 2026",
    read: "3 MIN READ",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Kode dan terminal pada layar laptop",
    tagClass: "tag-coding"
  }
];

const articleGrid = document.getElementById("articleGrid");
const searchInput = document.getElementById("searchInput");
const resultsLabel = document.getElementById("resultsLabel");
const filterButtons = document.querySelectorAll(".filter-button");
const loadMoreButton = document.getElementById("loadMoreButton");
const toast = document.getElementById("toast");
let selectedCategory = "All";
let searchText = "";
let showingAll = false;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function getFilteredArticles() {
  return articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const searchableText = `${article.title} ${article.description} ${article.categoryLabel}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function makeArticleCard(article) {
  const card = document.createElement("article");
  card.className = "news-card";
  card.innerHTML = `
    <div class="card-image-wrap">
      <img class="card-image" src="${article.image}" alt="${article.imageAlt}" loading="lazy">
      <span class="card-image-label">${article.categoryLabel}</span>
    </div>
    <div class="card-body">
      <div class="card-meta"><span class="category-tag ${article.tagClass}">${article.categoryLabel}</span><span>${article.date}</span></div>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <div class="card-footer"><a href="#newsletter" class="article-read-link" data-article-title="${article.title}">Read story ↗</a><span>${article.read}</span></div>
    </div>`;
  return card;
}

function renderArticles() {
  const filteredArticles = getFilteredArticles();
  const displayedArticles = showingAll ? filteredArticles : filteredArticles.slice(0, 6);
  articleGrid.replaceChildren();

  if (displayedArticles.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = "<strong>No stories found.</strong>Try another keyword or choose a different category.";
    articleGrid.appendChild(empty);
  } else {
    displayedArticles.forEach((article) => articleGrid.appendChild(makeArticleCard(article)));
  }

  resultsLabel.textContent = `SHOWING ${String(displayedArticles.length).padStart(2, "0")} OF ${String(filteredArticles.length).padStart(2, "0")} STORIES`;
  loadMoreButton.hidden = displayedArticles.length >= filteredArticles.length || filteredArticles.length === 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;
    showingAll = false;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderArticles();
  });
});

searchInput.addEventListener("input", (event) => {
  searchText = event.target.value.trim();
  showingAll = false;
  renderArticles();
});

loadMoreButton.addEventListener("click", () => {
  showingAll = true;
  renderArticles();
  showToast("You're all caught up with the demo stories.");
});

// Link kategori pada navigasi juga mengaktifkan filter yang sesuai.
document.querySelectorAll("[data-nav-category]").forEach((link) => {
  link.addEventListener("click", () => {
    const category = link.dataset.navCategory;
    selectedCategory = category;
    showingAll = false;
    filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.category === category));
    renderArticles();
    document.getElementById("mainNav").classList.remove("is-open");
    document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
  });
});

// Menu mobile.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Mode gelap / terang.
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const darkModeOn = document.body.classList.contains("dark-mode");
  themeToggle.setAttribute("aria-label", darkModeOn ? "Aktifkan tema terang" : "Aktifkan tema gelap");
  showToast(darkModeOn ? "Dark mode on" : "Light mode on");
});

// Shortcut tombol / untuk fokus ke pencarian.
document.addEventListener("keydown", (event) => {
  const targetTag = event.target.tagName;
  if (event.key === "/" && targetTag !== "INPUT" && targetTag !== "TEXTAREA") {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape") {
    searchInput.blur();
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Form contoh: belum terhubung ke layanan email sungguhan.
document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput");
  const formMessage = document.getElementById("formMessage");
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }
  formMessage.textContent = "Thanks for checking it out! This demo form does not send emails yet.";
  showToast("Form demo berhasil dicoba, belum mengirim email sungguhan.");
  emailInput.value = "";
});

// Tanggal mengikuti perangkat pengguna.
const now = new Date();
const dateText = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "2-digit", year: "numeric" }).format(now).toUpperCase();
document.getElementById("todayDate").textContent = dateText;
document.getElementById("heroDate").textContent = dateText;
document.getElementById("currentYear").textContent = now.getFullYear();

renderArticles();
