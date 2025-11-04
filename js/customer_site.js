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
    yzh:{
        api:'https://api.yzzy-api.com/inc/api_mac10.php',
        name:'优质资源'
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
