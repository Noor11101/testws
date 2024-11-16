// حفظ موضع التمرير عند النقر على روابط nav فقط
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        // عند الانتقال إلى صفحة أخرى، ابدأ دائمًا من الأعلى
        localStorage.setItem("scrollPosition", 0);
    });
});

// ضبط الثيم الافتراضي أو استرجاع الثيم المحفوظ عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light-theme";
    document.body.classList.add(savedTheme);

    // تجاهل موضع التمرير المحفوظ وابدأ من الأعلى عند تحديث الصفحة
    window.scrollTo(0, 0);

    // تحديث حالة الزر بناءً على الثيم الحالي
    const isDarkTheme = savedTheme === "dark-theme";
    document.getElementById("btnSwitch").checked = isDarkTheme;

    // تحديث حالة nav بناءً على موضع التمرير
    updateStickyNav();

    // تحديث nav و footer بناءً على الثيم الحالي
    updateNavAndFooterTheme();
});

// عند الضغط على زر التبديل
document.getElementById("btnSwitch").addEventListener("change", (event) => {
    if (event.target.checked) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
    }

    // تحديث nav و footer بناءً على الثيم الجديد
    updateNavAndFooterTheme();
});

// تعريف عنصر nav
const nav = document.querySelector("nav");

// إضافة مستمع للتمرير لتحديث حالة nav
window.addEventListener("scroll", () => {
    updateStickyNav();
    updateNavAndFooterTheme();
});

// دالة لتحديث حالة "sticky" للـ nav بناءً على موضع التمرير
function updateStickyNav() {
    nav.classList.toggle("sticky", window.scrollY > 0);
}

// دالة لتحديث ثيم nav و footer بناءً على وجود فئة "dark-theme"
function updateNavAndFooterTheme() {
    const footer = document.querySelector("footer");
    if (document.body.classList.contains("dark-theme")) {
        nav.classList.toggle("dark-theme", nav.classList.contains("sticky"));
        footer.classList.add("dark-theme");
    } else {
        nav.classList.remove("dark-theme");
        footer.classList.remove("dark-theme");
    }
}


// التبديل بيين الصور
// rotateButtonId
function setupProductImageControls(imageId, dotsContainerId ) {
    const productImage = document.getElementById(imageId);
    const colorDots = document.querySelectorAll(`#${dotsContainerId} .color-dot`);
    // const rotateButton = document.getElementById(rotateButtonId);
    // const rotateButton = document.getElementById(rotateButtonId);
    let isFront = true; // الحالة الافتراضية للصورة الأمامية
    
    // التبديل بين الصور حسب اللون
    colorDots.forEach(dot => {
          dot.addEventListener('click', () => {
                const imageUrl = dot.getAttribute('data-image-url');
                productImage.src = imageUrl;
    
                // إزالة اختيار اللون السابق
                colorDots.forEach(d => d.classList.remove('selected'));
    
                // إضافة التأثير للنقطة المختارة
                dot.classList.add('selected');
          });
    });
    
    // تدوير الصورة بين الأمامية والخلفية
    // rotateButton.addEventListener('click', () => {
    //       if (isFront) {
    //             productImage.src = productImage.getAttribute('data-back-src');
    //       } else {
    //             productImage.src = productImage.getAttribute('data-front-src');
    //       }
    //       isFront = !isFront; // عكس الحالة
    // });
    }
    
    // استدعاء الوظيفة لكل مجموعة من الصور
    //  'rotate-button1'
    setupProductImageControls('product-image1', 'color-dots1');
    setupProductImageControls('product-image2', 'color-dots2');
    // setupProductImageControls('product-image3', 'color-dots3');
    
    
 

// اشتراك البريد الإلكتروني
document.querySelector(".submit-email").addEventListener("mousedown", (e) => {
    e.preventDefault();
    document.querySelector(".subscription").classList.add("done");
});
var label = document.getElementById("id_username");
label && label.parentNode.removeChild(label);






// footer 
function openWhatsApp() {
    const phoneNumber = "+201092046314"; // Replace with the recipient's WhatsApp number
    const message = "Hello! I would like to contact you."; // Replace with your default message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


