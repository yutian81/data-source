async function getRandomImage(imgElementId = "randomImage", fallbackUrl = "") {
    try {
        const response = await fetch("https://tgfile.yuzong.nyc.mn/bing");
        const data = await response.json();

        if (data.status && data.data.length > 0) {
            const randomImage = data.data[Math.floor(Math.random() * data.data.length)].url;
            const imgElement = document.getElementById(imgElementId);
            if (imgElement) {
                imgElement.src = randomImage;
                imgElement.loading = "lazy"; // 启用懒加载
            } else {
                console.warn(`元素 #${imgElementId} 不存在`);
            }
        } else {
            console.warn("API 返回数据为空，使用备用图片");
            if (fallbackUrl) {
                document.getElementById(imgElementId).src = fallbackUrl;
            }
        }
    } catch (error) {
        console.error("获取图片失败:", error);
        if (fallbackUrl) {
            document.getElementById(imgElementId).src = fallbackUrl;
        }
    }
}

// 让外部项目可以调用
window.getRandomImage = getRandomImage;
