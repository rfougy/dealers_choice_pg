module.exports = (singleData) => `<DOCTYPE! html>
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
    <li>
      <img src="/pub-cover-images/${singleData.id}.jpg" />
      <h2>${singleData.name}<h2>
      <h4>Designer: ${singleData.designer}<h4>
      <h4>Date Published: ${singleData.publishing_date}<h4>
      <p>${singleData.description}<p>
      <button type="button"><a href="/publications">Back to Publications</a></button>
    </li>
  </ul>
  </div>
</body>
</html>
`;