// تحديد جميع عناصر شريط التنقل
const navItems = document.querySelectorAll('.nav-item');

// تحميل العنصر النشط من LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    const activeItemId = localStorage.getItem('activeNavItem');
    if (activeItemId) {
        // إضافة الكلاس النشط للعنصر المحفوظ
        document.getElementById(activeItemId)?.classList.add('active');
    }
});


// إضافة حدث عند الضغط على أيقونة
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        // إزالة الكلاس النشط عن جميع العناصر
        navItems.forEach(nav => nav.classList.remove('active'));

        // إضافة الكلاس النشط للعنصر الذي تم الضغط عليه
        item.classList.add('active');

        // تخزين العنصر النشط في LocalStorage
        localStorage.setItem('activeNavItem', item.id);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("ad-slider"); // استهداف السلايدر

  // رابط API لجلب الصور
  const apiURL = "https://89.116.110.51:3000/aqs/api/v1/getProducts";

  // جلب البيانات من API
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      // تفريغ السلايدر الحالي
      slider.innerHTML = "";

      // إنشاء عناصر السلايدر بناءً على الصور
      data.forEach((item) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `<img src="${item.image}" alt="${item.title}">`; // استبدال المسار
        slider.appendChild(slide);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  const sliders = document.querySelectorAll(".slider"); // استهداف جميع السلايدرات
  let autoScrollIntervals = [];

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let currentIndex = 0;
    let direction = 1;
    const isRTL = document.dir === "rtl"; // تحقق إذا كانت الصفحة RTL
    let autoScroll;

    function showNextSlide() {
      if (currentIndex === slides.length - 1 && direction === 1) {
        direction = -1;
      } else if (currentIndex === 0 && direction === -1) {
        direction = 1;
      }
      currentIndex += direction;

      // حساب الإزاحة بناءً على الاتجاه
      const offset = currentIndex * slider.clientWidth;
      slider.scrollTo({
        left: isRTL ? -offset : offset, // في حالة RTL، استخدم القيم السالبة
        behavior: "smooth",
      });
    }

    function startAutoScroll() {
      autoScroll = setInterval(showNextSlide, 5000);
      autoScrollIntervals.push(autoScroll);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    slider.addEventListener("scroll", function () {
      const scrollLeft = Math.abs(slider.scrollLeft); // القيمة المطلقة للتعامل مع RTL
      const slideWidth = slider.clientWidth;
      currentIndex = Math.round(scrollLeft / slideWidth);
    });

    slider.addEventListener("touchstart", stopAutoScroll);
    slider.addEventListener("touchend", startAutoScroll);

    startAutoScroll();
  });

  // تنظيف الفواصل الزمنية عند إلغاء تحميل الصفحة
  window.addEventListener("beforeunload", () => {
    autoScrollIntervals.forEach((interval) => clearInterval(interval));
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("ad-slider2"); // استهداف السلايدر

  // رابط API لجلب الصور
  const apiURL = "https://89.116.110.51:3000/aqs/api/v1/getProducts";

  // جلب البيانات من API
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      // تفريغ السلايدر الحالي
      //slider.innerHTML = "";

      // إنشاء عناصر السلايدر بناءً على الصور
      data.forEach((item) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `<img src="${item.image}" alt="${item.title}">`; // استبدال المسار
        slider.appendChild(slide);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  const sliders = document.querySelectorAll(".slider"); // استهداف جميع السلايدرات
  let autoScrollIntervals = [];

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let currentIndex = 0;
    let direction = 1;
    const isRTL = document.dir === "rtl"; // تحقق إذا كانت الصفحة RTL
    let autoScroll;

    function showNextSlide() {
      if (currentIndex === slides.length - 1 && direction === 1) {
        direction = -1;
      } else if (currentIndex === 0 && direction === -1) {
        direction = 1;
      }
      currentIndex += direction;

      // حساب الإزاحة بناءً على الاتجاه
      const offset = currentIndex * slider.clientWidth;
      slider.scrollTo({
        left: isRTL ? -offset : offset, // في حالة RTL، استخدم القيم السالبة
        behavior: "smooth",
      });
    }

    function startAutoScroll() {
      autoScroll = setInterval(showNextSlide, 5000);
      autoScrollIntervals.push(autoScroll);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    slider.addEventListener("scroll", function () {
      const scrollLeft = Math.abs(slider.scrollLeft); // القيمة المطلقة للتعامل مع RTL
      const slideWidth = slider.clientWidth;
      currentIndex = Math.round(scrollLeft / slideWidth);
    });

    slider.addEventListener("touchstart", stopAutoScroll);
    slider.addEventListener("touchend", startAutoScroll);

    startAutoScroll();
  });

  // تنظيف الفواصل الزمنية عند إلغاء تحميل الصفحة
  window.addEventListener("beforeunload", () => {
    autoScrollIntervals.forEach((interval) => clearInterval(interval));
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider2"); // استهداف جميع السلايدرات
  let autoScrollIntervals = [];

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide2");
    let currentIndex = 0;
    let direction = 1;
    const isRTL = document.dir === "rtl"; // تحقق إذا كانت الصفحة RTL
    let autoScroll;

    function showNextSlide() {
      if (currentIndex === slides.length - 1 && direction === 1) {
        direction = -1;
      } else if (currentIndex === 0 && direction === -1) {
        direction = 1;
      }
      currentIndex += direction;

      // حساب الإزاحة بناءً على الاتجاه
      const offset = currentIndex * slider.clientWidth;
      slider.scrollTo({
        left: isRTL ? -offset : offset, // في حالة RTL، استخدم القيم السالبة
        behavior: "smooth",
      });
    }

    function startAutoScroll() {
      autoScroll = setInterval(showNextSlide, 5000);
      autoScrollIntervals.push(autoScroll);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    slider.addEventListener("scroll", function () {
      const scrollLeft = Math.abs(slider.scrollLeft); // القيمة المطلقة للتعامل مع RTL
      const slideWidth = slider.clientWidth;
      currentIndex = Math.round(scrollLeft / slideWidth);
    });

    slider.addEventListener("touchstart", stopAutoScroll);
    slider.addEventListener("touchend", startAutoScroll);

    startAutoScroll();
  });

  // تنظيف الفواصل الزمنية عند إلغاء تحميل الصفحة
  window.addEventListener("beforeunload", () => {
    autoScrollIntervals.forEach((interval) => clearInterval(interval));
  });
});
