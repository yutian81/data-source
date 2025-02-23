async function getRandomImage(imgElementId = "randomImage") {
    try {
        const response = await fetch("https://tgfile.yuzong.nyc.mn/bing");
        const data = await response.json();

        if (data.status && data.data.length > 0) {
            const randomImage = data.data[Math.floor(Math.random() * data.data.length)].url;
            const imgElement = document.getElementById(imgElementId);
            if (imgElement) {
                imgElement.src = randomImage;
            } else {
                console.warn(`元素 #${imgElementId} 不存在`);
            }
        }
    } catch (error) {
        console.error("获取图片失败:", error);
    }
}

// 让外部项目可以调用
window.getRandomImage = getRandomImage;

