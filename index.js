


////////model start
const isLoggedIn = false; // Replace with real logic
  
document.addEventListener('DOMContentLoaded', function() {
  if (!isLoggedIn) {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
  }

  const form = document.querySelector('#loginModal form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop normal form submit

    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      dob: document.getElementById('dob').value.trim(),
      course: document.getElementById('course').value,
      state: document.getElementById('state').value,
      gender: document.getElementById('gender').value,
      whatsappUpdates: document.getElementById('whatsappUpdates').checked
    };

    console.log("Collected Form Data:", formData);
  });
});
/////////////model end

//////////////////////// collegeContainer
document.addEventListener("DOMContentLoaded", function () {
    const collegeContainer = document.getElementById("collegeContainer");
    const textItems = document.querySelectorAll(".text-item");
  
    // Default active
    let currentCategory = "Engineering";
    renderCategory(currentCategory);
  
    // Handle click on each category
    textItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Update active class
        textItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
  
        // Get clicked category
        currentCategory = item.textContent.trim();
        renderCategory(currentCategory);
      });
    });
  
    function renderCategory(category) {
      // Clear container
      collegeContainer.innerHTML = "";
  
      const data = college_data[category];
      if (!data) return;
  
      for (const section in data) {
        const card = document.createElement("div");
        card.classList.add("college-card");
  
        const header = document.createElement("div");
        header.className = "card-header";
        header.innerHTML = `<h2> ${college_data.image[section]} ${section}</h2>`;
        const pillContainer = document.createElement("div");
        pillContainer.className = "pills";
  
        data[section].forEach((item) => {
          const pill = document.createElement("a");
          pill.href = "#";
          pill.target = item.target;
          pill.className = "pill";
          pill.textContent = item.name;
          pillContainer.appendChild(pill);
        });
  
        card.appendChild(header);
        card.appendChild(pillContainer);
        collegeContainer.appendChild(card);
      }
    }
  });
/////////////////text slider start
    const slider = document.getElementById('sliderContainer');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const textItems = document.querySelectorAll('.text-item');
    const scrollAmount = 150;
  
    // Handle item click
    textItems.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelector('.text-item.active')?.classList.remove('active');
        item.classList.add('active');
      });
    });
  
    // Scroll next
    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(() => {
        prevBtn.style.visibility = 'visible';
      }, 300);
    });
  
    // Scroll previous
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setTimeout(() => {
        if (slider.scrollLeft <= 10) {
          prevBtn.style.visibility = 'hidden';
        }
      }, 300);
    });
    //text slider end


    ///////////////////search section start
    const track = document.getElementById("imageSliderTrack");
    const progress = document.getElementById("sliderProgress");
    const img_nextBtn = document.querySelector(".image-nav.next");
    const img_prevBtn = document.querySelector(".image-nav.prev");
    
    const SCROLL_AMOUNT = () => track.clientWidth * 0.8; // 80% of the track width
    
    function updateProgress() {
      const scrollPercent = (track.scrollLeft / (track.scrollWidth - track.clientWidth)) * 100;
      progress.style.width = `${scrollPercent}%`;
    }
    
    img_nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: SCROLL_AMOUNT(), behavior: "smooth" });
    });
    
    img_prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -SCROLL_AMOUNT(), behavior: "smooth" });
    });
    
    track.addEventListener("scroll", updateProgress);
    
    // Initialize progress on page load
    updateProgress();
    
    ///////////////////search section end


    //////////////collge rank start

    document.addEventListener('DOMContentLoaded', () => {
      const tbody = document.querySelector('tbody');
      const agencyButtons = document.querySelectorAll('.filters button:not(.arrow-btn)');
    
      function updateTable(agency) {
        tbody.innerHTML = '';
        const data = college_rank[agency];
        if (!data) return;
    
        data.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>
              <div class="college-info">
                <img src="${item.img}" alt="">
                ${item.college}
              </div>
            </td>
            <td>${item.Ranking}</td>
            <td>${item.Streams}</td>
          `;
          tbody.appendChild(row);
        });
      }
    
      agencyButtons.forEach(button => {
        button.addEventListener('click', () => {
          agencyButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          updateTable(button.innerText.trim());
        });
      });
    
      updateTable('India Today'); // default
    });
    

    /////////////college rank end

    ////////////faq start
    const items = document.querySelectorAll('.accordion button');

    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');
    
      for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
    
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }
    
    items.forEach((item) => item.addEventListener('click', toggleAccordion));
    
    
    
    
    ////////////faq end
    