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
  <ul>
  ${data.map(singleData => {
    return `<div class="publication-preview">
    <li class="single-publication">
    <img src="/pub-cover-images/${singleData.id}.jpg" />
      <h2>${singleData.name}<h2>
      <button type="button"><a href="/publications/${singleData.id}">Learn More</a></button>
    </li>
    <div>
    `;
  }).join('')}
  </ul>
  </div>
</body>
</html>
`;