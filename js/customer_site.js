const CUSTOMER_SITES = {
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'ikun'
    },
    feifan: {
        api: 'http://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡资源'
    },
    lzzy: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源'
    },
    xrzy: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源'
    },
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '虎牙'
    },
    gszy: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '光速'
    },
    jsy: {
        api: ' https://jszyapi.com/api.php/provide/vod',
        name: '极速云'
    },
    hnzy: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛'
    },
    ryyun: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意云'
    },
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台'
    },
    sony: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: 'SONY'
    },
    uuku: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'U酷'
    },
    kuaiche: {
        api: 'https://caiji.kuaichezy.org/api.php/provide/vod',
        name: '快车'
    },
    jyzy: {
        api: 'https://jyzyapi.com/provide/vod',
        name: '金鹰资源'
    },
    wlong: {
        api: 'https://collect.wolongzy.cc/api.php/provide/vod',
        name: '卧龙资源'
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: '牛牛资源'
    },
    xmy: {
        api: 'https://play.okcdn100.top/api',
        name: '小绵羊'
    },
    qilin: {
        api: 'https://www.qilinzyz.com/api.php/provide/vod',
        name: '麒麟'
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源'
    }
    };
// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
