module.exports = (singleData) => `<DOCTYPE! html>
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
    <li>
      <h2>${singleData.name}<h2>
      <h4>Designer: ${singleData.designer}<h4>
      <h4>Date Published: ${singleData.publishing_date}<h4>
      <p>${singleData.description}<p>
      <button type="button"><a href="/publications">View All Publications</a></button>
    </li>
  </ul>
  </div>
</body>
</html>
`;