const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Camiseta Essential Algodon Organico",
    description:
      "Nuestra camiseta mas vendida en algodon organico de fibra larga. Suave, resistente y perfecta para uso diario premium.",
    price: 129000,
    category: "Ropa",
    brand: "Moderna Essentials",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 45,
    variants: { size: ["XS", "S", "M", "L", "XL"], color: ["Marfil", "Negro", "Gris"] },
    sku: "MOD-ESS-001",
    isNew: true
  },
  {
    id: 2,
    name: "Sneakers Urban Pro Leather",
    description:
      "Disenadas en Italia con cuero de primera calidad. Estas zapatillas combinan estetica minimalista con comodidad ergonomica superior.",
    price: 459000,
    category: "Calzado",
    brand: "Moderna Footwear",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 12,
    variants: { size: ["38", "39", "40", "41", "42", "43", "44"], color: ["Blanco/Gris", "Negro"] },
    sku: "MOD-FTW-002"
  },
  {
    id: 3,
    name: "Smartwatch Horizon V3",
    description:
      "La interseccion perfecta entre tecnologia y elegancia. Pantalla AMOLED, monitoreo de salud avanzado y bateria de hasta 14 dias.",
    price: 699000,
    category: "Electronica",
    brand: "Moderna Tech",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1508685096489-7aac291ba597?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 8,
    sku: "MOD-TEC-003",
    isNew: true
  },
  {
    id: 4,
    name: "Mochila Nomad 30L Waterproof",
    description:
      "Material resistente al agua, compartimento para laptop y diseno ergonomico para ciudad y aventura.",
    price: 289000,
    category: "Accesorios",
    brand: "Moderna Gear",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 25,
    sku: "MOD-GER-004"
  },
  {
    id: 5,
    name: "Pantalon Chino Tailored Fit",
    description:
      "El equilibrio ideal entre formal y casual. Tejido de sarga con elastano para mayor flexibilidad.",
    price: 189000,
    category: "Ropa",
    brand: "Moderna Essentials",
    images: [
      "https://images.unsplash.com/photo-1624371414361-e6709482451e?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 30,
    variants: { size: ["30", "32", "34", "36", "38"], color: ["Arena", "Navy", "Verde"] },
    sku: "MOD-ESS-005"
  },
  {
    id: 6,
    name: "Auriculares Studio Wireless ANC",
    description:
      "Sonido de alta fidelidad con cancelacion activa de ruido y hasta 40 horas de reproduccion.",
    price: 890000,
    category: "Electronica",
    brand: "Moderna Tech",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 15,
    sku: "MOD-TEC-006"
  },
  {
    id: 7,
    name: "Chaqueta Bomber Aero",
    description: "Chaqueta ligera con acabado repelente al agua y forro interior termico.",
    price: 349000,
    category: "Ropa",
    brand: "Moderna Essentials",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 18,
    variants: { size: ["S", "M", "L", "XL"], color: ["Negro", "Oliva"] },
    sku: "MOD-ESS-007"
  },
  {
    id: 8,
    name: "Tenis Runner Flux",
    description: "Tenis deportivos de alto retorno de energia para uso urbano y entrenamiento ligero.",
    price: 399000,
    category: "Calzado",
    brand: "Moderna Footwear",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 22,
    variants: { size: ["37", "38", "39", "40", "41", "42"], color: ["Blanco", "Gris"] },
    sku: "MOD-FTW-008"
  },
  {
    id: 9,
    name: "Camara Action Pro 4K",
    description: "Camara compacta para aventura con estabilizacion digital y grabacion 4K.",
    price: 1099000,
    category: "Electronica",
    brand: "Moderna Tech",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 9,
    sku: "MOD-TEC-009",
    isNew: true
  },
  {
    id: 10,
    name: "Maletin Executive 14",
    description: "Maletin ejecutivo en cuero sintetico premium con espacios inteligentes.",
    price: 259000,
    category: "Accesorios",
    brand: "Moderna Gear",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 27,
    sku: "MOD-GER-010"
  },
  {
    id: 11,
    name: "Camisa Linen Signature",
    description: "Camisa de lino premium para clima calido con caida elegante y corte moderno.",
    price: 159000,
    category: "Ropa",
    brand: "Moderna Essentials",
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 34,
    variants: { size: ["S", "M", "L", "XL"], color: ["Blanco", "Azul cielo"] },
    sku: "MOD-ESS-011"
  },
  {
    id: 12,
    name: "Botines Chelsea Urban",
    description: "Botines de cuero con suela antideslizante y silueta atemporal.",
    price: 529000,
    category: "Calzado",
    brand: "Moderna Footwear",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 14,
    variants: { size: ["39", "40", "41", "42", "43"], color: ["Cafe", "Negro"] },
    sku: "MOD-FTW-012"
  },
  {
    id: 13,
    name: "Tablet Nova 11",
    description: "Tablet de 11 pulgadas para productividad y entretenimiento con pantalla de alta definicion.",
    price: 1399000,
    category: "Electronica",
    brand: "Moderna Tech",
    images: [
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 11,
    sku: "MOD-TEC-013"
  },
  {
    id: 14,
    name: "Gafas Voyager Polarizadas",
    description: "Gafas con proteccion UV400 y lentes polarizados para vision nitida.",
    price: 179000,
    category: "Accesorios",
    brand: "Moderna Gear",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 40,
    sku: "MOD-GER-014"
  },
  {
    id: 15,
    name: "Blazer Urban Slate",
    description: "Blazer estructurado de corte moderno para elevar cualquier look casual o formal.",
    price: 379000,
    category: "Ropa",
    brand: "Moderna Atelier",
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 16,
    variants: { size: ["S", "M", "L", "XL"], color: ["Gris", "Negro"] },
    sku: "MOD-ATL-015",
    isNew: true
  },
  {
    id: 16,
    name: "Mules Comfort Knit",
    description: "Calzado ligero con tejido transpirable y plantilla de espuma para confort diario.",
    price: 239000,
    category: "Calzado",
    brand: "Moderna Footwear",
    images: [
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 29,
    variants: { size: ["36", "37", "38", "39", "40"], color: ["Crema", "Negro"] },
    sku: "MOD-FTW-016"
  },
  {
    id: 17,
    name: "Parlante Pulse Mini",
    description: "Parlante Bluetooth compacto con sonido 360 grados y resistencia a salpicaduras.",
    price: 329000,
    category: "Electronica",
    brand: "Moderna Tech",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1520170350707-b2da59970118?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 31,
    sku: "MOD-TEC-017"
  },
  {
    id: 18,
    name: "Bolso Crossbody Metro",
    description: "Bolso compacto con acabados premium y compartimentos para tus esenciales.",
    price: 219000,
    category: "Accesorios",
    brand: "Moderna Gear",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 20,
    sku: "MOD-GER-018"
  },
  {
    id: 19,
    name: "Camiseta Tech Dry Fit",
    description: "Tela tecnica de secado rapido para entrenamiento y uso diario de alto rendimiento.",
    price: 149000,
    category: "Ropa",
    brand: "Moderna Active",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 36,
    variants: { size: ["S", "M", "L", "XL"], color: ["Negro", "Blanco", "Azul"] },
    sku: "MOD-ACT-019"
  },
  {
    id: 20,
    name: "Reloj Chrono Heritage",
    description: "Reloj analogico con caja de acero, cristal mineral y diseno elegante atemporal.",
    price: 589000,
    category: "Accesorios",
    brand: "Moderna Atelier",
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=900",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=900"
    ],
    stock: 13,
    sku: "MOD-ATL-020",
    isNew: true
  }
];

const DEFAULT_ORDERS = [
  {
    id: "ORD-32011",
    date: "2026-03-22",
    total: 889000,
    status: "Entregado",
    customer: { name: "Juan Perez", email: "cliente@moderna.co", initials: "JP" }
  },
  {
    id: "ORD-32057",
    date: "2026-03-28",
    total: 459000,
    status: "Enviado",
    customer: { name: "Maria Garcia", email: "maria@moderna.co", initials: "MG" }
  },
  {
    id: "ORD-32099",
    date: "2026-04-02",
    total: 129000,
    status: "Pendiente",
    customer: { name: "Carlos Ruiz", email: "carlos@moderna.co", initials: "CR" }
  }
];

const DEFAULT_USERS = [
  {
    name: "Administrador Principal",
    email: "admin@moderna.co",
    password: "Admin2026*",
    role: "ADMIN"
  },
  {
    name: "Cliente Demo",
    email: "cliente@moderna.co",
    password: "Cliente2026*",
    role: "CUSTOMER"
  }
];

const page = document.body.dataset.page || "";
const toastEl = document.getElementById("toast");
const FALLBACK_IMAGE_URL = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=900";

let products = readStorage("moderna_products", DEFAULT_PRODUCTS);
let orders = readStorage("moderna_orders", DEFAULT_ORDERS);
let users = readStorage("moderna_users", DEFAULT_USERS);
let cart = readStorage("moderna_cart", []);
let session = readStorage("moderna_session", null);
let role = session?.role || "CUSTOMER";
let accountTab = "orders";
let adminTab = "dashboard";

products = mergeById(products, DEFAULT_PRODUCTS);
users = mergeByEmail(users, DEFAULT_USERS);
writeStorage("moderna_products", products);
writeStorage("moderna_users", users);

const categories = [...new Set(products.map((p) => p.category))];
const brands = [...new Set(products.map((p) => p.brand))];

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function mergeById(currentList, defaults) {
  const current = Array.isArray(currentList) ? [...currentList] : [];
  const existingIds = new Set(current.map((item) => item.id));

  defaults.forEach((item) => {
    if (!existingIds.has(item.id)) current.push(item);
  });

  return current.sort((a, b) => a.id - b.id);
}

function mergeByEmail(currentList, defaults) {
  const current = Array.isArray(currentList) ? [...currentList] : [];
  const existingEmails = new Set(current.map((item) => String(item.email || "").toLowerCase()));

  defaults.forEach((item) => {
    if (!existingEmails.has(String(item.email).toLowerCase())) current.push(item);
  });

  return current;
}

function currency(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

function showToast(message, type = "info") {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.className = `toast show ${type}`;
  setTimeout(() => {
    toastEl.className = "toast";
  }, 2800);
}

function hookBrokenImages() {
  document.addEventListener(
    "error",
    (event) => {
      const img = event.target;
      if (!(img instanceof HTMLImageElement)) return;
      if (img.dataset.fallbackApplied === "1") return;

      img.dataset.fallbackApplied = "1";
      img.src = FALLBACK_IMAGE_URL;
    },
    true
  );
}

function cartCount() {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}

function cartTotal() {
  return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
}

function syncBadges() {
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(cartCount());
  });
}

function persistAll() {
  writeStorage("moderna_products", products);
  writeStorage("moderna_orders", orders);
  writeStorage("moderna_users", users);
  writeStorage("moderna_cart", cart);
  writeStorage("moderna_session", session);
}

function renderAuthNav() {
  document.querySelectorAll(".nav-actions").forEach((actions) => {
    // Keep navbar clean: only the user icon should remain.
    actions.querySelectorAll(".auth-links").forEach((node) => node.remove());
  });
}

function hookLogout() {
  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-logout-btn]");
    if (!btn) return;

    session = null;
    role = "CUSTOMER";
    writeStorage("moderna_session", session);
    showToast("Sesion cerrada", "info");
    if (page === "admin") {
      window.location.href = "index.html";
      return;
    }
    renderAuthNav();
  });
}

function hookSearchForms() {
  document.querySelectorAll("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input[name='search']");
      const value = input ? input.value.trim() : "";
      if (value) {
        window.location.href = `catalogo.html?search=${encodeURIComponent(value)}`;
      }
    });
  });
}

function productCard(product) {
  return `
    <article class="card card-product">
      <div class="card-media">
        <img src="${product.images[0]}" alt="${product.name}" referrerpolicy="no-referrer">
        ${product.isNew ? '<span class="tag new">Nuevo</span>' : ""}
      </div>
      <div class="card-body">
        <div class="row-between">
          <span class="card-cat">${product.category}</span>
          <span class="price">${currency(product.price)}</span>
        </div>
        <h3 style="font-size:20px">${product.name}</h3>
        <div class="row-between">
          <small class="muted" style="font-weight:700; letter-spacing:0.08em">SKU ${product.sku}</small>
          <div style="display:flex; gap:8px;">
            <a class="btn btn-outline-soft" style="padding:9px 10px;" href="producto.html?id=${product.id}">
              <span class="material-icons">visibility</span>
            </a>
            <button class="btn btn-primary" data-add-cart="${product.id}" style="padding:9px 10px;">
              <span class="material-icons">add_shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function addToCart(product, quantity = 1, size = "", color = "") {
  const existing = cart.find(
    (item) =>
      item.product.id === product.id &&
      item.selectedSize === size &&
      item.selectedColor === color
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ product, quantity, selectedSize: size, selectedColor: color });
  }

  writeStorage("moderna_cart", cart);
  syncBadges();
  showToast(`Agregado: ${product.name}`, "success");
}

function hookAddCartClicks() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-add-cart]");
    if (!target) return;

    const productId = Number(target.getAttribute("data-add-cart"));
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    addToCart(product, 1);
  });
}

function initHomePage() {
  const grid = document.getElementById("home-featured");
  if (!grid) return;
  grid.innerHTML = products.slice(0, 6).map(productCard).join("");
}

function initCatalogPage() {
  const categoryWrap = document.getElementById("catalog-category-list");
  const brandWrap = document.getElementById("catalog-brand-list");
  const searchInput = document.getElementById("catalog-search");
  const priceInput = document.getElementById("catalog-price");
  const priceLabel = document.getElementById("catalog-price-label");
  const sortSelect = document.getElementById("catalog-sort");
  const resetBtn = document.getElementById("catalog-reset");
  const countNode = document.getElementById("catalog-count");
  const grid = document.getElementById("catalog-grid");
  const empty = document.getElementById("catalog-empty");

  if (!grid || !searchInput || !priceInput || !sortSelect || !countNode || !empty || !categoryWrap || !brandWrap || !priceLabel) {
    return;
  }

  const url = new URL(window.location.href);
  const filters = {
    search: url.searchParams.get("search") || "",
    categories: url.searchParams.get("category") ? [url.searchParams.get("category")] : [],
    brands: [],
    maxPrice: 2000000,
    sortBy: "featured"
  };

  searchInput.value = filters.search;
  priceInput.value = String(filters.maxPrice);

  categoryWrap.insertAdjacentHTML(
    "beforeend",
    categories
      .map(
        (cat) => `
          <label class="checkbox-row">
            <input type="checkbox" data-filter-cat="${cat}" ${filters.categories.includes(cat) ? "checked" : ""}>
            <span>${cat}</span>
          </label>
        `
      )
      .join("")
  );

  brandWrap.insertAdjacentHTML(
    "beforeend",
    brands
      .map(
        (brand) => `
          <label class="checkbox-row">
            <input type="checkbox" data-filter-brand="${brand}">
            <span>${brand}</span>
          </label>
        `
      )
      .join("")
  );

  function renderCatalog() {
    let list = [...products];

    if (filters.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
      );
    }

    if (filters.categories.length > 0) {
      list = list.filter((p) => filters.categories.includes(p.category));
    }

    if (filters.brands.length > 0) {
      list = list.filter((p) => filters.brands.includes(p.brand));
    }

    list = list.filter((p) => p.price <= filters.maxPrice);

    if (filters.sortBy === "price-low") list.sort((a, b) => a.price - b.price);
    if (filters.sortBy === "price-high") list.sort((a, b) => b.price - a.price);
    if (filters.sortBy === "newest") list.sort((a, b) => b.id - a.id);

    countNode.textContent = `Mostrando ${list.length} productos`;
    priceLabel.textContent = currency(filters.maxPrice);

    if (list.length === 0) {
      grid.innerHTML = "";
      empty.style.display = "block";
      return;
    }

    empty.style.display = "none";
    grid.innerHTML = list.map(productCard).join("");
  }

  searchInput.addEventListener("input", () => {
    filters.search = searchInput.value.trim();
    renderCatalog();
  });

  priceInput.addEventListener("input", () => {
    filters.maxPrice = Number(priceInput.value);
    renderCatalog();
  });

  sortSelect.addEventListener("change", () => {
    filters.sortBy = sortSelect.value;
    renderCatalog();
  });

  resetBtn.addEventListener("click", () => {
    filters.search = "";
    filters.categories = [];
    filters.brands = [];
    filters.maxPrice = 2000000;
    filters.sortBy = "featured";
    searchInput.value = "";
    priceInput.value = "2000000";
    sortSelect.value = "featured";
    categoryWrap.querySelectorAll("input").forEach((n) => {
      n.checked = false;
    });
    brandWrap.querySelectorAll("input").forEach((n) => {
      n.checked = false;
    });
    renderCatalog();
  });

  categoryWrap.addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;

    const cat = input.getAttribute("data-filter-cat");
    if (!cat) return;

    if (input.checked) filters.categories.push(cat);
    else filters.categories = filters.categories.filter((c) => c !== cat);

    renderCatalog();
  });

  brandWrap.addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement)) return;

    const brand = input.getAttribute("data-filter-brand");
    if (!brand) return;

    if (input.checked) filters.brands.push(brand);
    else filters.brands = filters.brands.filter((b) => b !== brand);

    renderCatalog();
  });

  renderCatalog();
}

function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const product = products.find((item) => item.id === id) || products[0];

  const mainImage = document.getElementById("product-main-image");
  const thumbs = document.getElementById("product-thumbs");
  const category = document.getElementById("product-category");
  const brand = document.getElementById("product-brand");
  const name = document.getElementById("product-name");
  const price = document.getElementById("product-price");
  const description = document.getElementById("product-description");
  const stock = document.getElementById("product-stock");
  const sizesWrap = document.getElementById("product-size-wrap");
  const colorsWrap = document.getElementById("product-color-wrap");
  const sizes = document.getElementById("product-sizes");
  const colors = document.getElementById("product-colors");
  const qtyText = document.getElementById("product-qty");
  const qtyInc = document.getElementById("product-qty-inc");
  const qtyDec = document.getElementById("product-qty-dec");
  const addBtn = document.getElementById("product-add-cart");
  const related = document.getElementById("related-grid");
  const breadcrumb = document.getElementById("product-breadcrumb");

  if (
    !mainImage || !thumbs || !category || !brand || !name || !price || !description || !stock || !sizesWrap || !colorsWrap || !sizes || !colors || !qtyText || !qtyInc || !qtyDec || !addBtn || !related || !breadcrumb
  ) {
    return;
  }

  let selectedImage = product.images[0];
  let selectedSize = product.variants?.size?.[0] || "";
  let selectedColor = product.variants?.color?.[0] || "";
  let quantity = 1;

  function renderDetail() {
    breadcrumb.textContent = `Inicio / Catalogo / ${product.name}`;
    mainImage.dataset.fallbackApplied = "0";
    mainImage.src = selectedImage;
    category.textContent = product.category;
    brand.textContent = product.brand;
    name.textContent = product.name;
    price.textContent = currency(product.price);
    description.textContent = product.description;
    stock.textContent = `${product.stock} disponibles`;
    qtyText.textContent = String(quantity);

    thumbs.innerHTML = product.images
      .map(
        (img) => `
          <button class="thumb ${selectedImage === img ? "active" : ""}" data-detail-image="${img}">
            <img src="${img}" alt="Miniatura" referrerpolicy="no-referrer">
          </button>
        `
      )
      .join("");

    if (product.variants?.size?.length) {
      sizesWrap.style.display = "block";
      sizes.innerHTML = product.variants.size
        .map(
          (size) => `<button class="pill ${selectedSize === size ? "active" : ""}" data-detail-size="${size}">${size}</button>`
        )
        .join("");
    }

    if (product.variants?.color?.length) {
      colorsWrap.style.display = "block";
      colors.innerHTML = product.variants.color
        .map(
          (color) => `<button class="pill ${selectedColor === color ? "active" : ""}" data-detail-color="${color}">${color}</button>`
        )
        .join("");
    }
  }

  related.innerHTML = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
    .map(productCard)
    .join("");

  document.addEventListener("click", (event) => {
    const imageBtn = event.target.closest("[data-detail-image]");
    if (imageBtn) {
      selectedImage = imageBtn.getAttribute("data-detail-image") || selectedImage;
      renderDetail();
      return;
    }

    const sizeBtn = event.target.closest("[data-detail-size]");
    if (sizeBtn) {
      selectedSize = sizeBtn.getAttribute("data-detail-size") || selectedSize;
      renderDetail();
      return;
    }

    const colorBtn = event.target.closest("[data-detail-color]");
    if (colorBtn) {
      selectedColor = colorBtn.getAttribute("data-detail-color") || selectedColor;
      renderDetail();
    }
  });

  qtyInc.addEventListener("click", () => {
    quantity += 1;
    renderDetail();
  });

  qtyDec.addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    renderDetail();
  });

  addBtn.addEventListener("click", () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  });

  renderDetail();
}

function initCartPage() {
  const empty = document.getElementById("cart-empty");
  const layout = document.getElementById("cart-layout");
  const items = document.getElementById("cart-items");
  const countInline = document.getElementById("cart-count-inline");
  const subtotal = document.getElementById("cart-subtotal");
  const tax = document.getElementById("cart-tax");
  const total = document.getElementById("cart-total");

  if (!empty || !layout || !items || !countInline || !subtotal || !tax || !total) return;

  function renderCart() {
    const count = cartCount();
    const base = cartTotal();

    countInline.textContent = String(count);
    subtotal.textContent = currency(base);
    tax.textContent = currency(base * 0.19);
    total.textContent = currency(base * 1.19);

    if (cart.length === 0) {
      empty.style.display = "block";
      layout.style.display = "none";
      return;
    }

    empty.style.display = "none";
    layout.style.display = "grid";

    items.innerHTML =
      cart
        .map(
          (item, index) => `
            <article class="cart-item">
              <img src="${item.product.images[0]}" alt="${item.product.name}" referrerpolicy="no-referrer" style="width:100%; aspect-ratio:1; object-fit:cover; border-radius:16px;">
              <div style="display:grid; gap:10px;">
                <div class="row-between">
                  <div>
                    <h3 style="font-size:20px">${item.product.name}</h3>
                    <small class="muted">SKU: ${item.product.sku}</small>
                  </div>
                  <button class="icon-btn" data-remove-item="${index}" style="background:#f8fafc"><span class="material-icons">delete_outline</span></button>
                </div>
                <div class="muted" style="font-size:13px">${item.selectedSize ? `Talla: ${item.selectedSize}` : ""} ${item.selectedColor ? `• Color: ${item.selectedColor}` : ""}</div>
                <div class="row-between">
                  <div class="qty-box">
                    <button data-qty-dec="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button data-qty-inc="${index}">+</button>
                  </div>
                  <p class="price" style="font-size:24px">${currency(item.product.price * item.quantity)}</p>
                </div>
              </div>
            </article>
          `
        )
        .join("") +
      `<div class="row-between"><a href="catalogo.html" class="btn btn-outline-soft">Seguir comprando</a><button id="clear-cart" class="btn btn-outline-soft">Vaciar carrito</button></div>`;

    const clearBtn = document.getElementById("clear-cart");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        cart = [];
        writeStorage("moderna_cart", cart);
        syncBadges();
        renderCart();
      });
    }
  }

  items.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-item]");
    if (remove) {
      const idx = Number(remove.getAttribute("data-remove-item"));
      cart = cart.filter((_, index) => index !== idx);
      writeStorage("moderna_cart", cart);
      syncBadges();
      renderCart();
      return;
    }

    const dec = event.target.closest("[data-qty-dec]");
    if (dec) {
      const idx = Number(dec.getAttribute("data-qty-dec"));
      cart[idx].quantity = Math.max(1, cart[idx].quantity - 1);
      writeStorage("moderna_cart", cart);
      syncBadges();
      renderCart();
      return;
    }

    const inc = event.target.closest("[data-qty-inc]");
    if (inc) {
      const idx = Number(inc.getAttribute("data-qty-inc"));
      cart[idx].quantity += 1;
      writeStorage("moderna_cart", cart);
      syncBadges();
      renderCart();
    }
  });

  renderCart();
}

function accountTabView(tab) {
  if (!session) {
    return `<article class="panel"><h2 style="margin-bottom:10px;">Necesitas iniciar sesion</h2><p class="muted" style="margin-bottom:12px;">Para ver tus datos y pedidos, ingresa a tu cuenta.</p><a class="btn btn-primary" href="login.html">Ir a login</a></article>`;
  }

  if (tab === "orders") {
    const userOrders = orders.filter((o) => o.customer.email === session.email || session.role === "ADMIN");
    if (userOrders.length === 0) {
      return `<article class="panel"><h3>Aun no tienes pedidos</h3><p class="muted">Explora el catalogo y realiza tu primera compra.</p></article>`;
    }

    return `<div style="display:grid; gap:12px;">${userOrders
      .map(
        (order) => `
          <article class="panel">
            <div class="row-between" style="margin-bottom:8px;">
              <strong>${order.id}</strong>
              <span class="pill">${order.status}</span>
            </div>
            <div class="row-between muted">
              <span>${order.date}</span>
              <strong style="color:var(--accent)">${currency(order.total)}</strong>
            </div>
          </article>
        `
      )
      .join("")}</div>`;
  }

  if (tab === "profile") {
    return `<div class="panel"><h2 style="margin-bottom:12px">Perfil y Seguridad</h2><div class="grid grid-2" style="margin-bottom:12px;"><input class="text-input" value="${session.name}"><input class="text-input" value="${session.email}"></div><div class="grid grid-2"><input class="text-input" placeholder="Contrasena actual" type="password"><input class="text-input" placeholder="Nueva contrasena" type="password"></div><button class="btn btn-primary" style="margin-top:14px;">Guardar cambios</button></div>`;
  }

  if (tab === "addresses") {
    return `<div class="grid grid-2"><article class="panel"><h3>Casa</h3><p class="muted" style="margin-top:8px; line-height:1.7">Calle Principal 123, Apto 4B<br>Bogota, Colombia</p></article><article class="panel"><h3>Trabajo</h3><p class="muted" style="margin-top:8px; line-height:1.7">Avenida de los Negocios 456<br>Medellin, Colombia</p></article></div>`;
  }

  return `<div class="panel"><h2 style="margin-bottom:8px">Gestion de Roles</h2><p class="muted" style="margin-bottom:14px">Solo habilitado para pruebas internas.</p><div class="grid grid-2"><button data-set-role="CUSTOMER" class="pill ${role === "CUSTOMER" ? "active" : ""}" style="padding:16px; text-align:left;">Cliente</button><button data-set-role="ADMIN" class="pill ${role === "ADMIN" ? "active" : ""}" style="padding:16px; text-align:left;">Administrador</button></div></div>`;
}

function initAccountPage() {
  if (!session) {
    window.location.href = "login.html?next=cuenta.html";
    return;
  }

  const roleText = document.getElementById("account-role");
  const content = document.getElementById("account-content");
  const tabs = document.querySelectorAll("[data-account-tab]");

  if (!roleText || !content || tabs.length === 0) return;

  const titleName = document.querySelector("main .account-layout aside h3");
  const titleEmail = document.querySelector("main .account-layout aside .muted");
  if (titleName) titleName.textContent = session.name;
  if (titleEmail) titleEmail.textContent = session.email;

  function renderAccount() {
    roleText.textContent = role;
    content.innerHTML = accountTabView(accountTab);
    tabs.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-account-tab") === accountTab);
    });
  }

  tabs.forEach((button) => {
    button.addEventListener("click", () => {
      accountTab = button.getAttribute("data-account-tab") || "orders";
      renderAccount();
    });
  });

  content.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-set-role]");
    if (!btn) return;

    role = btn.getAttribute("data-set-role") || "CUSTOMER";
    session.role = role;
    writeStorage("moderna_session", session);

    if (role === "ADMIN") {
      window.location.href = "admin.html";
    } else {
      renderAccount();
    }
  });

  renderAccount();
}

function lowStockProducts() {
  return products.filter((p) => p.stock <= 15).slice(0, 8);
}

function toStatusClass(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

function adminView(tab) {
  const totalSales = orders.reduce((acc, o) => acc + o.total, 0);
  const delivered = orders.filter((o) => o.status === "Entregado").length;
  const pending = orders.filter((o) => o.status === "Pendiente").length;
  const customersCount = [...new Set(orders.map((o) => o.customer.email))].length;

  if (tab === "dashboard") {
    return `
      <div class="admin-view">
        <div class="admin-heading">
          <p class="kicker" style="color:#64748b">Resumen General</p>
          <h2 class="section-title" style="font-size:42px">Panel de <span class="accent">Control</span></h2>
        </div>

        <div class="metrics admin-metrics-extended">
          <article class="data-card metric-card"><p class="muted">Ventas Totales</p><h3>${currency(totalSales)}</h3><small>Mes actual</small></article>
          <article class="data-card metric-card"><p class="muted">Pedidos Entregados</p><h3>${delivered}</h3><small>Ultimos 30 dias</small></article>
          <article class="data-card metric-card"><p class="muted">Pedidos Pendientes</p><h3>${pending}</h3><small>Requieren gestion</small></article>
          <article class="data-card metric-card"><p class="muted">Clientes Activos</p><h3>${customersCount}</h3><small>Base consolidada</small></article>
        </div>

        <div class="grid grid-2">
          <article class="data-card">
            <div class="admin-card-title"><span class="material-icons">warning_amber</span><h3>Alertas de inventario</h3></div>
            <div class="alert-list">
              ${lowStockProducts()
                .map(
                  (p) => `<div class="alert-item"><div class="alert-item-info"><span class="alert-item-name">${p.name}</span><span class="alert-item-price">${currency(p.price)}</span></div><div class="alert-item-stock"><strong>${p.stock} uds</strong></div></div>`
                )
                .join("")}
            </div>
          </article>

          <article class="data-card">
            <div class="admin-card-title"><span class="material-icons">timeline</span><h3>Actividad reciente</h3></div>
            <ul class="activity-list">
              <li><span class="material-icons">inventory</span>Inventario sincronizado hace 5 min</li>
              <li><span class="material-icons">payments</span>Nuevo pago confirmado ORD-32099</li>
              <li><span class="material-icons">local_shipping</span>ORD-32057 en ruta de entrega</li>
              <li><span class="material-icons">person_add</span>2 nuevos clientes registrados hoy</li>
            </ul>
          </article>
        </div>
      </div>
    `;
  }

  if (tab === "products") {
    return `
      <article class="data-card table-wrap">
        <div class="row-between admin-table-head"><h3>Productos</h3><span class="pill admin-pill">${products.length} referencias</span></div>
        <table class="admin-table">
          <thead><tr><th>Producto</th><th>Categoria</th><th>Precio</th><th>Stock</th><th>Estado</th></tr></thead>
          <tbody>
            ${products
              .map(
                (p) => `
                  <tr>
                    <td>${p.name}</td>
                    <td>${p.category}</td>
                    <td><strong class="admin-price">${currency(p.price)}</strong></td>
                    <td>${p.stock}</td>
                    <td><span class="status-chip ${p.stock > 15 ? "disponible" : "stock-bajo"}">${p.stock > 15 ? "Disponible" : "Stock bajo"}</span></td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </article>
    `;
  }

  if (tab === "orders") {
    return `
      <article class="data-card table-wrap">
        <div class="row-between admin-table-head"><h3>Pedidos</h3><span class="pill admin-pill">${orders.length} ordenes</span></div>
        <table class="admin-table">
          <thead><tr><th>ID</th><th>Cliente</th><th>Total</th><th>Estado</th><th>Actualizar</th></tr></thead>
          <tbody>
            ${orders
              .map(
                (o) => `
                  <tr>
                    <td>${o.id}</td>
                    <td>${o.customer.name}</td>
                    <td><strong class="admin-price">${currency(o.total)}</strong></td>
                    <td><span class="status-chip ${toStatusClass(o.status)}">${o.status}</span></td>
                    <td>
                      <select data-order-status="${o.id}" class="select-input admin-select">
                        ${["Pendiente", "Enviado", "Entregado", "Cancelado"]
                          .map((s) => `<option value="${s}" ${o.status === s ? "selected" : ""}>${s}</option>`)
                          .join("")}
                      </select>
                    </td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </article>
    `;
  }

  if (tab === "customers") {
    const customers = [...new Map(orders.map((o) => [o.customer.email, o.customer])).values()];
    return `
      <article class="data-card table-wrap">
        <div class="row-between admin-table-head"><h3>Clientes</h3><span class="pill admin-pill">${customers.length} activos</span></div>
        <table class="admin-table">
          <thead><tr><th>Cliente</th><th>Email</th><th>Pedidos</th><th>Gasto estimado</th></tr></thead>
          <tbody>
            ${customers
              .map((c) => {
                const customerOrders = orders.filter((o) => o.customer.email === c.email);
                const totalSpent = customerOrders.reduce((acc, o) => acc + o.total, 0);
                return `<tr><td>${c.name}</td><td>${c.email}</td><td>${customerOrders.length}</td><td><strong class="admin-price">${currency(totalSpent)}</strong></td></tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </article>
    `;
  }

  const salesByCategory = categories.map((cat) => {
    const total = orders.reduce((acc, o) => acc + o.total, 0);
    const catProducts = products.filter((p) => p.category === cat).map((p) => p.id);
    const catTotal = orders
      .filter((o, index) => catProducts.length > 0 && index % categories.length === categories.indexOf(cat))
      .reduce((acc, o) => acc + o.total, 0);
    const percentage = total ? Math.max(8, Math.round((catTotal / total) * 100)) : 0;
    return { cat, percentage };
  });

  return `
    <div class="grid grid-2">
      <article class="data-card">
        <div class="admin-card-title"><span class="material-icons">bar_chart</span><h3>Ventas por categoria</h3></div>
        ${salesByCategory
          .map(
            (item) => `
              <div class="admin-progress-row"><p>${item.cat}</p><strong>${item.percentage}%</strong></div>
              <progress class="admin-progress" value="${item.percentage}" max="100"></progress>
            `
          )
          .join("")}
      </article>
      <article class="data-card admin-growth-card">
        <span class="material-icons" style="font-size:56px; color:var(--accent)">trending_up</span>
        <h3>Crecimiento mensual</h3>
        <p class="muted">Las ventas subieron 18% frente al periodo anterior.</p>
      </article>
    </div>
  `;
}

function initAdminPage() {
  if (!session || role !== "ADMIN") {
    window.location.href = "login.html?next=admin.html";
    return;
  }

  const content = document.getElementById("admin-content");
  const tabs = document.querySelectorAll("[data-admin-tab]");
  const exitBtn = document.getElementById("admin-exit");
  const userNameNode = document.getElementById("admin-user-name");
  const roleNode = document.getElementById("admin-role-label");

  if (!content || tabs.length === 0 || !exitBtn) return;

  if (userNameNode) userNameNode.textContent = session.name;
  if (roleNode) roleNode.textContent = role === "ADMIN" ? "Administrador" : role;

  function renderAdmin() {
    content.innerHTML = adminView(adminTab);
    tabs.forEach((tab) => {
      tab.classList.toggle("active", tab.getAttribute("data-admin-tab") === adminTab);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      adminTab = tab.getAttribute("data-admin-tab") || "dashboard";
      renderAdmin();
    });
  });

  content.addEventListener("change", (event) => {
    const select = event.target.closest("[data-order-status]");
    if (!select) return;

    const id = select.getAttribute("data-order-status");
    const nextStatus = select.value;
    orders = orders.map((o) => (o.id === id ? { ...o, status: nextStatus } : o));
    writeStorage("moderna_orders", orders);
    showToast(`Pedido ${id} actualizado a ${nextStatus}`, "success");
    renderAdmin();
  });

  exitBtn.addEventListener("click", () => {
    session = null;
    role = "CUSTOMER";
    writeStorage("moderna_session", session);
    showToast("Sesion de admin cerrada", "info");
    window.location.href = "login.html";
  });

  renderAdmin();
}

function initLoginPage() {
  const form = document.getElementById("login-form");
  const errorNode = document.getElementById("login-error");
  if (!form || !errorNode) return;

  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");

  document.querySelectorAll("[data-demo-login]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-demo-login");
      if (!emailInput || !passwordInput) return;

      if (type === "admin") {
        emailInput.value = "admin@moderna.co";
        passwordInput.value = "Admin2026*";
      } else {
        emailInput.value = "cliente@moderna.co";
        passwordInput.value = "Cliente2026*";
      }

      errorNode.textContent = "";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "").trim();

    const found = users.find((u) => u.email.toLowerCase() === email && u.password === password);
    if (!found) {
      errorNode.textContent = "Correo o contrasena incorrectos.";
      return;
    }

    errorNode.textContent = "";

    session = { name: found.name, email: found.email, role: found.role };
    role = found.role;
    persistAll();

    showToast(`Bienvenido ${found.name}`, "success");

    const next = new URLSearchParams(window.location.search).get("next");
    if (next) {
      window.location.href = next;
      return;
    }

    window.location.href = found.role === "ADMIN" ? "admin.html" : "index.html";
  });
}

function initRecoverPage() {
  const form = document.getElementById("recover-form");
  const errorNode = document.getElementById("recover-error");
  if (!form || !errorNode) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "").trim();
    const confirm = String(data.get("confirm") || "").trim();

    if (!email.includes("@") || email.length < 6) {
      errorNode.textContent = "Ingresa un correo valido.";
      return;
    }

    if (password.length < 8) {
      errorNode.textContent = "La nueva contrasena debe tener al menos 8 caracteres.";
      return;
    }

    if (password !== confirm) {
      errorNode.textContent = "Las contrasenas no coinciden.";
      return;
    }

    const userIndex = users.findIndex((u) => u.email.toLowerCase() === email);
    if (userIndex < 0) {
      errorNode.textContent = "No existe una cuenta registrada con ese correo.";
      return;
    }

    users[userIndex] = { ...users[userIndex], password };
    writeStorage("moderna_users", users);
    errorNode.textContent = "";
    showToast("Contrasena actualizada. Ya puedes iniciar sesion.", "success");
    window.location.href = "login.html";
  });
}

function initRegisterPage() {
  const form = document.getElementById("register-form");
  const errorNode = document.getElementById("register-error");
  if (!form || !errorNode) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "").trim();
    const confirm = String(data.get("confirm") || "").trim();

    if (name.length < 4) {
      errorNode.textContent = "Ingresa un nombre valido.";
      return;
    }

    if (!email.includes("@") || email.length < 6) {
      errorNode.textContent = "Ingresa un correo valido.";
      return;
    }

    if (password.length < 8) {
      errorNode.textContent = "La contrasena debe tener al menos 8 caracteres.";
      return;
    }

    if (password !== confirm) {
      errorNode.textContent = "Las contrasenas no coinciden.";
      return;
    }

    const exists = users.some((u) => u.email.toLowerCase() === email);
    if (exists) {
      errorNode.textContent = "Ese correo ya tiene una cuenta registrada.";
      return;
    }

    const newUser = { name, email, password, role: "CUSTOMER" };
    users.push(newUser);
    session = { name, email, role: "CUSTOMER" };
    role = "CUSTOMER";
    persistAll();

    showToast("Cuenta creada correctamente", "success");
    window.location.href = "index.html";
  });
}

function initAccountGuardOnIcons() {
  document.querySelectorAll("a[href='cuenta.html']").forEach((link) => {
    if (!session) {
      link.setAttribute("href", "login.html?next=cuenta.html");
    }
  });
}

function routeInit() {
  if (page === "home") initHomePage();
  if (page === "catalog") initCatalogPage();
  if (page === "product") initProductPage();
  if (page === "cart") initCartPage();
  if (page === "account") initAccountPage();
  if (page === "admin") initAdminPage();
  if (page === "login") initLoginPage();
  if (page === "register") initRegisterPage();
  if (page === "recover") initRecoverPage();
}

syncBadges();
hookBrokenImages();
renderAuthNav();
initAccountGuardOnIcons();
hookLogout();
hookSearchForms();
hookAddCartClicks();
routeInit();
