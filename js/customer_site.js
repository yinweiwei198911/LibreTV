const CUSTOMER_SITES = {
    bf: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    ff:{
        api:'http://ffzy5.tv/api.php/provide/vod',
        name:'非凡资源',
    },
    lz:{
        api:'https://cj.lziapi.com/api.php/provide/vod',
        name:'量子资源',
    },
    iqy:{
        api:'https://www.iqiyizyapi.com/api.php/provide/vod',
        name:'爱奇艺资源',
    },
    js:{
        api:'https://jszyapi.com/api.php/provide/vod',
        name:'极速资源',
    },
    yh:{
        api:'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name:'樱花资源',
    },
    wj:{
        api:'https://api.wujinapi.me/api.php/provide/vod',
        name:'无尽资源',
    },
    hh:{
        api:'https://hhzyapi.com/api.php/provide/vod',
        name:'豪华资源',
    },
    gs:{
        api:'https://api.guangsuapi.com/api.php/provide/vod',
        name:'光速资源',
    },
    bd:{
        api:'https://api.apibdzy.com/api.php/provide/vod',
        name:'百度资源'
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
