### js在header
```
<head>
    <script src="https://你的GitHub用户名.github.io/bing-random-image/randomImage.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            getRandomImage("randomImage");
        });
    </script>
</head>
<body>
    <img id="randomImage" src="" alt="随机图片" width="600">
</body>
```
