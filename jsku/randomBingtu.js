async function randomBingtu(imgElementId = "randomBingtu", fallbackUrl = "") {
    try {
        const response = await fetch("https://tgfile.yuzong.nyc.mn/bing");
        const data = await response.json();
        const imgElement = document.getElementById(imgElementId);

        if (imgElement) {
            if (data.status && data.data.length > 0) {
                const randomImage = data.data[Math.floor(Math.random() * data.data.length)].url;
                imgElement.src = randomImage;
                imgElement.loading = "lazy"; // 启用懒加载
            } else {
                console.warn("API 返回数据为空，使用备用图片");
                if (fallbackUrl) imgElement.src = fallbackUrl;
            }
        } else {
            console.warn(`元素 #${imgElementId} 不存在`);
        }
    } catch (error) {
        console.error("获取图片失败:", error);
        const imgElement = document.getElementById(imgElementId);
        if (imgElement && fallbackUrl) imgElement.src = fallbackUrl;
    }
}

// 让外部项目可以调用
window.randomBingtu = randomBingtu;
