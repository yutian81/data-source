### js在header
```
<img id="randomBingtu" src="" alt="随机图片" width="600">
<!-- 通过 jsDelivr 加载你的 JS -->
<script src="https://cdn.jsdelivr.net/gh/yutian81/data-source@main/jsku/randomBingtu.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", () => {
        randomBingtu("randomBingtu", "https://bing.img.run/1920x1080.php");
    });
</script>
```
