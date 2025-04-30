document.addEventListener("DOMContentLoaded", function () {
  // Featured Products Carousel
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselItems = [
    {
      image: "./assets/curtain.jpg",
      title: "Premium Velvet Sofa",
      description:
        "Luxurious velvet sofa with hand-carved wooden legs. Available in 5 colors.",
      price: "$899",
    },
    {
      image: "./assets/lighting.jpg",
      title: "Modern Glass Coffee Table",
      description:
        "Sleek tempered glass top with brushed metal base. Perfect for contemporary spaces.",
      price: "$349",
    },
    {
      image: "./assets/lighting.jpg",
      title: "Handwoven Area Rug",
      description:
        "Ethically sourced wool rug with traditional patterns. 5x8 ft.",
      price: "$599",
    },
  ];

  // Populate carousel
  carouselItems.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-item";
    slide.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div class="carousel-item-content">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <p class="price">${item.price}</p>
              <button class="btn">View Details</button>
          </div>
      `;
    carouselSlide.appendChild(slide);
  });

  // Carousel functionality
  const slides = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const indicatorsContainer = document.querySelector(".carousel-indicators");
  let currentIndex = 0;

  // Create indicators
  slides.forEach((_, index) => {
    const indicator = document.createElement("span");
    indicator.className = "indicator";
    if (index === 0) indicator.classList.add("active");
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  function updateCarousel() {
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicators
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto-advance carousel
  let carouselInterval = setInterval(nextSlide, 5000);

  // Pause on hover
  carouselSlide.addEventListener("mouseenter", () => {
    clearInterval(carouselInterval);
  });

  carouselSlide.addEventListener("mouseleave", () => {
    carouselInterval = setInterval(nextSlide, 5000);
  });

  // Product Data (would typically come from an API)
  const products = [
    {
      id: 1,
      image: "./assets/lighting.jpg",
      title: "Mid-Century Chair",
      price: 249,
      category: "furniture",
      rating: 4,
      isNew: true,
    },
    {
      id: 2,
      image: "./assets/lighting.jpg",
      title: "Industrial Pendant Light",
      price: 129,
      category: "lighting",
      rating: 5,
      isNew: false,
    },
    {
      id: 1,
      image: "./assets/lighting.jpg",
      title: "Mid-Century Chair",
      price: 249,
      category: "furniture",
      rating: 4,
      isNew: true,
    },
    {
      id: 2,
      image: "./assets/lighting.jpg",
      title: "Industrial Pendant Light",
      price: 129,
      category: "lighting",
      rating: 5,
      isNew: false,
    },
    {
      id: 1,
      image: "./assets/lighting.jpg",
      title: "Mid-Century Chair",
      price: 249,
      category: "furniture",
      rating: 4,
      isNew: true,
    },
    {
      id: 2,
      image: "./assets/lighting.jpg",
      title: "Industrial Pendant Light",
      price: 129,
      category: "lighting",
      rating: 5,
      isNew: false,
    },
    {
      id: 1,
      image: "./assets/lighting.jpg",
      title: "Mid-Century Chair",
      price: 249,
      category: "furniture",
      rating: 4,
      isNew: true,
    },
    {
      id: 2,
      image: "./assets/lighting.jpg",
      title: "Industrial Pendant Light",
      price: 129,
      category: "lighting",
      rating: 5,
      isNew: false,
    },
    {
      id: 1,
      image: "./assets/lighting.jpg",
      title: "Mid-Century Chair",
      price: 249,
      category: "furniture",
      rating: 4,
      isNew: true,
    },
    {
      id: 2,
      image: "./assets/lighting.jpg",
      title: "Industrial Pendant Light",
      price: 129,
      category: "lighting",
      rating: 5,
      isNew: false,
    },
    {
      id: 1,
      image: "./assets/lighting.jpg",
      title: "Mid-Century Chair",
      price: 249,
      category: "furniture",
      rating: 4,
      isNew: true,
    },
    {
      id: 2,
      image: "./assets/lighting.jpg",
      title: "Industrial Pendant Light",
      price: 129,
      category: "lighting",
      rating: 5,
      isNew: false,
    },
    {
      id: 1,
      image: "./assets/lighting.jpg",
      title: "Mid-Century Chair",
      price: 249,
      category: "furniture",
      rating: 4,
      isNew: true,
    },
    {
      id: 2,
      image: "./assets/lighting.jpg",
      title: "Industrial Pendant Light",
      price: 129,
      category: "lighting",
      rating: 5,
      isNew: false,
    },
    // Add more products...
  ];

  // Populate products grid
  const productsGrid = document.querySelector(".products-grid");

  function renderProducts(productsToRender) {
    productsGrid.innerHTML = "";

    productsToRender.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
              <img src="${product.image}" alt="${
        product.title
      }" class="product-image">
              <div class="product-info">
                  <h3 class="product-title">${product.title}</h3>
                  <p class="product-price">$${product.price.toFixed(2)}</p>
                  <div class="product-rating">
                      ${"★".repeat(product.rating)}${"☆".repeat(
        5 - product.rating
      )}
                  </div>
                  ${product.isNew ? '<span class="new-badge">New!</span>' : ""}
                  <button class="add-to-cart" data-id="${
                    product.id
                  }">Add to Cart</button>
              </div>
          `;
      productsGrid.appendChild(productCard);
    });
  }

  // Initial render
  renderProducts(products);

  // Filter functionality
  const categoryFilter = document.getElementById("category-filter");
  const priceFilter = document.getElementById("price-filter");
  const sortBy = document.getElementById("sort-by");

  function applyFilters() {
    let filteredProducts = [...products];

    // Category filter
    if (categoryFilter.value !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === categoryFilter.value
      );
    }

    // Price filter
    if (priceFilter.value !== "all") {
      const [min, max] = priceFilter.value.split("-").map(Number);
      if (priceFilter.value.endsWith("+")) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= 200
        );
      } else {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= min && product.price <= max
        );
      }
    }

    // Sort
    switch (sortBy.value) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filteredProducts.sort((a, b) => b.isNew - a.isNew);
        break;
      default:
        // Featured (default sorting)
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(filteredProducts);
  }

  categoryFilter.addEventListener("change", applyFilters);
  priceFilter.addEventListener("change", applyFilters);
  sortBy.addEventListener("change", applyFilters);

  // Add to cart functionality
  productsGrid.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {
      const productId = e.target.getAttribute("data-id");
      const product = products.find((p) => p.id == productId);

      // In a real app, you would add to cart storage/state
      alert(`Added ${product.title} to your cart!`);

      // You might update a cart counter here
    }
  });

  // Category cards click handler
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.querySelector("h3").textContent.toLowerCase();
      categoryFilter.value = category;
      applyFilters();

      // Scroll to products section
      document.querySelector(".products-section").scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
