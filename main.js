
document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const profileData = {
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        profession: document.getElementById('profession').value,
        profileImage: document.getElementById('profileImage').value,
        facebook: document.getElementById('facebook').value,
        twitter: document.getElementById('twitter').value,
        instagram: document.getElementById('instagram').value,
        youtube: document.getElementById('youtube').value
    };

    let card = document.createElement('div');
    card.classList.add("card");
    card.id = "generatedCard";

    card.innerHTML = `
      <div class="card-header">
        <img src="${profileData.profileImage}" alt="Profile" class="profile-img">
      </div>
      <div class="card-body">
        <h2 class="name">${profileData.fullName}</h2>
        <p class="age">Age: ${profileData.age}</p>
        <p class="contact">📱 ${profileData.mobile}</p>
        <p class="contact">✉️ ${profileData.email}</p>
        <p class="profession">Profession: ${profileData.profession}</p>
        <div class="socials">
          <a href="${profileData.facebook}" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook"></a>
          <a href="${profileData.twitter}" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter"></a>
          <a href="${profileData.instagram}" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram"></a>
          <a href="${profileData.youtube}" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt="YouTube"></a>
        </div>
        <div class="buttons">
          <button class="btn subscribe">Subscribe</button>
          <button class="btn message">Message</button>
          <button class="btn download" onclick="downloadCard()">Download Card</button>
        </div>
      </div>
      <div class="card-footer">
        <div class="stat"><span>💖</span> 60.4k</div>
        <div class="stat"><span>💬</span> 20k</div>
        <div class="stat"><span>🔁</span> 12.4k</div>
      </div>
    `;

    document.body.appendChild(card);
    document.querySelector(".form-container").remove();
});

//Download function written by ChatGPT to download the cards dynamically 

function downloadCard() {
    const card = document.getElementById('generatedCard');

    // Hide the buttons before downloading
    const buttons = card.querySelectorAll('.buttons .btn');
    buttons.forEach(button => {
        button.style.display = 'none';
    });

    html2canvas(card, { useCORS: true }).then(canvas => {
        const link = document.createElement("a");
        link.download = "profile-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

        buttons.forEach(button => {
            button.style.display = '';
        });
    });
}

