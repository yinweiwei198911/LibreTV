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
    189o: {
      name: '虎牙资源采集网采集接口',
      api: 'https://www.huyaapi.com/api.php/provide/vod'
    },
    oytb: {
      name: '幸资源站采集接口',
      api: 'https://xzybb1.com/api.php/provide/vod',
        adult:true
    }
    v0k3:{
        api:'https://www.xiangjiaozyw.com/api.php/provide/vod',
        name:'香蕉资源采集接口',
        adult:true
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
