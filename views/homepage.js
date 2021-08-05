module.exports = (data) => `<DOCTYPE! html>
<html>
<head>
  <link rel="stylsheet" href="/style.css"/>
</head>
<body>
  <div>
  <h1>A.PDF TEST GROUNDS</h1>
  </div>
  <div>
  <ul>
  ${data.map(singleData => {
    return `<li>
      <h2>${singleData.name}<h2>
      <button type="button"><a href="/publications/${singleData.id}">Learn More</a></button>
    </li>
    `;
  }).join('')}
  </ul>
  </div>
</body>
</html>
`;