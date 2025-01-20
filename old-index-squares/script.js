const googleDocs =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Google_Docs_2020_Logo.svg/174px-Google_Docs_2020_Logo.svg.png";

const websites = [
  ["Mev.to", "http://dev.to"],
  ["Gmail", "https://mail.google.com"],
  ["CodePen", "https://codepen.io"],
  ["Raindrop.io", "https://raindrop.io"],
  ["ChatGPT", "https://www.chatgpt.com"],
  ["Google Docs", "https://docs.google.com", googleDocs]
];

function generateWebsiteItem(website) {
  const [name, url, altIconUrl] = website;
  const iconUrl =
    altIconUrl ||
    `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=128`;

  return `
    <a href="${url}">
      <div class="grid-item">
        <img src="${iconUrl}" alt="${name} Icon">
        <p class="websiteName">${name}</p>
      </div>
    </a>
  `;
}

const gridContainer = document.getElementById("websiteGrid");
websites.forEach((website) => {
  gridContainer.innerHTML += generateWebsiteItem(website);
});
