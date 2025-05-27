function generateTitles() {
  const topic = document.getElementById('titleTopic').value.trim();
  const titles = [
    `You won't believe what happened with ${topic}`,
    `Top 5 ${topic} secrets revealed`,
    `How to master ${topic} in 7 days`,
    `${topic} - What no one tells you`,
    `The ultimate ${topic} guide`
  ];
  const list = document.getElementById('titleResults');
  list.innerHTML = '';
  titles.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    list.appendChild(li);
  });
}

function estimateEarnings() {
  const url = document.getElementById('videoURL').value;
  const views = parseInt(document.getElementById('views').value);
  const isShort = url.includes('/shorts/') || url.includes('short');
  const rpm = isShort ? 0.25 : 5.00;
  const earnings = ((views * rpm) / 1000).toFixed(2);
  const result = `Estimated earnings: €${earnings} (${isShort ? 'Shorts RPM: €0.25' : 'Longform RPM: €5.00'})`;
  document.getElementById('earningsResult').textContent = result;
}

function generateHashtags() {
  const keyword = document.getElementById('hashtagInput').value.trim().toLowerCase();
  const base = [`#${keyword}`, `#${keyword}tips`, `#viral${keyword}`, `#${keyword}life`, `#${keyword}2025`];
  document.getElementById('hashtagOutput').textContent = base.join(' ');
}

function getThumbnail() {
  const url = document.getElementById('thumbURL').value.trim();
  const videoId = getYouTubeID(url);
  if (!videoId) {
    document.getElementById('thumbnailResult').innerHTML = 'Invalid URL';
    return;
  }
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  document.getElementById('thumbnailResult').innerHTML = `<img src="${thumb}" alt="Thumbnail" style="max-width:100%"><br><a href="${thumb}" download>Download Thumbnail</a>`;
}

function getYouTubeID(url) {
  const regExp = /(?:v=|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}
