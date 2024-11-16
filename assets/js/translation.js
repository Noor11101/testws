// تعريف النصوص باللغتين داخل كائنات
const translations = {
      en: {
          title: "UNleash your adventure!",
          sub_title: "Indulge in the best experience",
          btn_title: "GET Started",
          Partners: "Partners",
          Descover_now: "Descover now",
          Welcome: "Welcome to your one-stop destination for travel essentials! Discover our wide range of high-quality bags and accessories perfect for any adventure, from weekend getaways to long-term travels. Whether you're a student seeking a stylish and functional backpack or a seasoned traveler in need of a durable suitcase, we've got you covered",
          Gallery: "Gallery",
          Categories: "gallery of Categories",
          Featured_Products: "Featured Products",
          redefine_wanderlust: "redefine wanderlust",
          bags: "OBINOOR bags are durable, luxurious, and sustainable. They are tough and reliable for active lifestyles. The bags feature spacious compartments, secure closures, and customizable options. You can even choose your own materials. OBINOOR bags offer a perfect combination of style, functionality, and sustainability.",          
          Prominent: "Prominent Products",
          gallery_of_Products: "gallery of Products",
          Overview: "Overview",
          versatile_bags: "Our versatile bags are designed for students and professionals, offering ample storage with a padded laptop sleeve and spacious compartments. Made from durable, tear-resistant fabric, they ensure comfort with padded straps and a breathable back. Stylish and eco-friendly, these bags suit any setting, blending function with sustainability.",
          quote : '"Your perfect companion for every adventure—our multi-purpose backpack combines style, durability, and function for life on the go."',
          toggle_button: "English"
      },
      ar: {
          title: "أطلق مغامرتك!",
          sub_title: "استمتع بالتجربة الامثل",
          btn_title: "هيا بينا",
          Partners: "الشركاء",
          Descover_now: "اكتشف الآن",
          Welcome: "مرحبًا بكم في وجهتكم الشاملة لتلبية جميع احتياجات السفر! اكتشفوا مجموعتنا الواسعة من الحقائب والإكسسوارات عالية الجودة المناسبة لأي مغامرة، سواء كانت رحلة قصيرة في عطلة نهاية الأسبوع أو رحلة طويلة الأمد. سواء كنتم طلابًا تبحثون عن حقيبة ظهر أنيقة وعملية، أو مسافرين محنكين بحاجة إلى حقيبة متينة، فإننا هنا لتلبية احتياجاتكم",
          Gallery: "المعرض",
          Categories: "معرض الفئات",
          Featured_Products: "المنتجات المميزة",
          redefine_wanderlust: "إعادة تعريف",
          bags : "حقائب OBINOOR متينة، فاخرة، ومستدامة. إنها قوية وموثوقة لنمط حياة نشط. تتميز الحقائب بأقسام واسعة وإغلاق آمن، وخيارات قابلة للتخصيص. يمكنك حتى اختيار المواد الخاصة بك. توفر حقائب OBINOOR مزيجًا مثاليًا من الأناقة، والوظائف، والاستدامة.",
          Prominent: "المنتجات البارزة",
          gallery_of_Products: "معرض المنتجات",
          Overview: "ملخص",
          versatile_bags: "حقائبنا متعددة الاستخدامات مصممة للطلاب والمحترفين، حيث توفر مساحة تخزين واسعة مع جيب مبطن للكمبيوتر المحمول وأقسام فسيحة. مصنوعة من قماش متين ومقاوم للتمزق، وتضمن الراحة بفضل الأشرطة المبطنة والظهر القابل للتنفس. أنيقة وصديقة للبيئة، تناسب هذه الحقائب جميع الأجواء، حيث تمزج بين العملية والاستدامة.",
          quote : 'رفيقك المثالي لكل مغامرة—حقيبتنا متعددة الاستخدامات تجمع بين الأناقة، والمتانة، والعملية لحياة مليئة بالحرك"ة."',
          toggle_button: "العربية"
      }
  };

// الحصول على زري اللغة
const toggleButtonEn = document.getElementById('language-en');
const toggleButtonAr = document.getElementById('language-ar');

// دالة لتحديث النصوص على الصفحة
function updateContent(language) {
    // حفظ موقع التمرير الحالي قبل تحديث المحتوى
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // تحديث محتوى جميع العناصر التي تحتوي على data-translate
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key] || element.textContent;
    });

    // تأخير بسيط لإرجاع التمرير إلى الموقع المحفوظ بعد تحديث النصوص
    setTimeout(() => {
        window.scrollTo(0, scrollPos);
    }, 0);
}

// تعيين اللغة الإنجليزية عند الضغط على زر English
toggleButtonEn.addEventListener('click', () => {
    updateContent('en');
});

// تعيين اللغة العربية عند الضغط على زر Arabic
toggleButtonAr.addEventListener('click', () => {
    updateContent('ar');
});

// تحديث النصوص عند تحميل الصفحة باللغة الإنجليزية كإعداد افتراضي
updateContent('en');
