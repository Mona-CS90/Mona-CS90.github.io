'use strict';

// دالة التبديل وإضافة الفئة النشطة (Toggle Class)
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// عناصر التحكم بالشريط الجانبي (Sidebar)
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// تشغيل التبديل للشريط الجانبي عند الضغط عليه في الجوال
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// عناصر التحكم في التنقل بين أقسام الموقع (Navigation)
const navigationLinks = document.querySelectorAll("[data-nav-btn]");
const pages = document.querySelectorAll("[data-portfolio-page]");

// إضافة حدث الضغط لكل زر في القائمة العلوية
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    const targetPage = this.getAttribute("data-nav-btn");

    for (let j = 0; j < pages.length; j++) {
      // التحقق من مطابقة الزر المكبوس مع الصفحة المستهدفة
      if (targetPage === pages[j].getAttribute("data-portfolio-page")) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0); // رفع الصفحة للأعلى عند الانتقال
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}