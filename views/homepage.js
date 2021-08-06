module.exports = (data) => `<DOCTYPE! html>
<html>
<head>
  <link rel="stylesheet" href="/style.css"/>
</head>
<body>
  <div>
  <h1><a href="/">< A.PDF TESTING GROUNDS ></a></h1>
  </div>
  <div>
  <ul class="publication-preview">
  ${data.map(singleData => {
    return `<div class="single-publication">
    <li>
    <img src="/pub-cover-images/${singleData.id}.jpg" />
      <h2>${singleData.name}<h2>
      <button type="button"><a href="/publications/${singleData.id}">Learn More</a></button>
    </li>
    </div>
    `;
  }).join('')}
  </ul>
  </div>
</body>
</html>
`;