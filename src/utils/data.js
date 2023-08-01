
// 菜单数据
export var MenuData = [
    {
        id: '0',
        type: "最新优惠活动",
        children: []
    },
    {
        id: '1',
        type: "面部系列",
        children: [
            {
                id: '2',
                type: "洁面产品",
                path: '/list'
            },
            {
                id: '3',
                type: "磨砂& 面膜",
            },
            {
                id: '4',
                type: "保湿水",
            },
            {
                id: '5',
                type: "精华",
            },
            {
                id: '6',
                type: "保湿乳霜",
            },
            {
                id: '7',
                type: "眼部 & 唇部护理",
            },
            {
                id: '8',
                type: "防晒护理",
            },
        ]
    },
    {
        id: '10',
        type: "完美身体系列",
        children: [
            {
                id: '12',
                type: "身体乳液",
            },
        ]
    },
    {
        id: '11',
        type: "香薰系列",
        children: [
            {
                id: '13',
                type: "身体护理油系列",
            },
            {
                id: '14',
                type: "修护基础油系列",
            },
            {
                id: '15',
                type: "精纯香薰油系列",
            },
        ]
    }
]

// 展示数据
export var productDatas = new Map([
    // 洁面产品
    ['2', [
        {
            id: '24',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-11-24/745683971215.png',
            name: '焕白亮泽洁肤油',
            price: '595元',
            capacity: '200ml',
        },
        {
            id: '132',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2023-03-30/940967415347.jpg',
            name: '玫瑰保湿洁面啫喱',
            price: '325元',
            capacity: '120ml',
        },
        {
            id: '14',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2022-06-27/797951831956.jpg',
            name: '抗氧焕肌洁肤乳液',
            price: '465元',
            capacity: '125ml',
        },
        {
            id: '3',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2023-07-14/693456228556.jpg',
            name: '水漾衡肌洁净泡沫',
            price: '385元',
            capacity: '200ml',
        },
        {
            id: '193',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2019-04-10/338643796485.png',
            name: '玫瑰润泽洁面舒芺蕾',
            price: '425元',
            capacity: '100ml',
        },
    ]],
    // 磨砂& 面膜
    ['3', [
        {
            id: '6',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2022-06-27/684442623162.jpg',
            name: '水漾衡肌面膜',
            price: '625元',
            capacity: '100ml',
        },
        {
            id: '119',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-12-07/245937164868.png',
            name: '玫瑰滋润补湿睡眠面膜',
            price: '655元',
            capacity: '50ml',
        },
        {
            id: '121',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-11-25/749908916032.png',
            name: '玫瑰水凝面膜',
            price: '545元',
            capacity: '50ml',
        },
        {
            id: '274',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2021-04-15/756367589246.png',
            name: '竹炭净化注氧面膜',
            price: '495元',
            capacity: '40ml',
        },
        {
            id: '278',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2021-06-29/260965659388.jpg',
            name: '焕肤亮肌金面膜',
            price: '795元',
            capacity: '100ml',
        },
        {
            id: '15',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2022-06-27/992739161395.jpg',
            name: '去角质焕肤精华',
            price: '595元',
            capacity: '100ml',
        },
        {
            id: '338',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2023-06-30/135445544874.jpg',
            name: '茉莉花妍亮采面膜',
            price: '425元',
            capacity: '5片',
        },
        {
            id: '192',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2019-03-15/429731103679.png',
            name: '玫瑰高效保濕精華面膜',
            price: '395元',
            capacity: '5片',
        },
    ]],
    // 保湿水
    ['4', [
        {
            id: '125',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-11-25/308506867451.png',
            name: '青瓜舒缓露水',
            price: '295元/595元',
            capacity: '100ml/250ml',
        },
        {
            id: '316',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2022-06-21/395644008781.jpg',
            name: '热情果清爽保湿露水',
            price: '295元/595元',
            capacity: '100ml/250ml',
        },
    ]],
    // 精华
    ['5', [
        {
            id: '8',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-12-02/211812582440.png',
            name: '高效水漾精华',
            price: '695元',
            capacity: '40ml',
        },
        {
            id: '28',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-11-24/786361762556.png',
            name: '极致焕白精华素',
            price: '725元',
            capacity: '40ml',
        },
        {
            id: '158',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2018-02-20/690766791371.png',
            name: '玫瑰水漾亮泽精华',
            price: '765元/1530元',
            capacity: '40ml/100ml',
        },
        {
            id: '273',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2020-12-29/676141745703.png',
            name: '茉莉紧致美容油',
            price: '595元',
            capacity: '30ml',
        },
        {
            id: '19',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2018-05-03/983843544562.png',
            name: '抗皱肌底精华',
            price: '875元',
            capacity: '40ml',
        },
        {
            id: '135',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-11-25/118520620450.png',
            name: '奥图玫瑰花妍极致精华油',
            price: '765元',
            capacity: '30ml',
        },
    ]],
    // 保湿乳霜
    ['6', [
        {
            id: '9',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2022-02-18/787743316285.png',
            name: '高效水漾日间乳液',
            price: '495元',
            capacity: '40ml',
        },
        {
            id: '10',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2022-06-27/102710379211.jpg',
            name: '高效水漾晚间疗程',
            price: '625元',
            capacity: '40ml',
        },
        {
            id: '20',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2022-06-27/850351587772.jpg',
            name: '日间紧致乳霜',
            price: '565元',
            capacity: '40ml',
        },
        {
            id: '21',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-11-23/595854158694.png',
            name: '晚间紧致乳霜',
            price: '765元',
            capacity: '30ml',
        },
        {
            id: '19',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2018-05-03/983843544562.png',
            name: '抗皱肌底精华',
            price: '875元',
            capacity: '40ml',
        },
        {
            id: '134',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-11-24/468852101721.png',
            name: '焕白亮泽全日乳霜',
            price: '525元',
            capacity: '40ml',
        },
        {
            id: '194',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2019-04-10/370083851336.png',
            name: '玫瑰24小时全效保湿乳液',
            price: '525元',
            capacity: '40ml',
        },
    ]],
    // 眼部 & 唇部护理
    ['7', [
        {
            id: '27',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2017-11-24/208728081744.png',
            name: '眼部妍亮疗程',
            price: '595元',
            capacity: '15ml',
        },
        {
            id: '259',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2020-10-21/053417880743.jpg',
            name: '玫瑰抗皱眼霜',
            price: '545元',
            capacity: '15ml',
        },
        {
            id: '18',
            imgUrl: 'https://www.canvasbeauty.com.hk/upload/product/original/2022-06-27/718314107618.jpg',
            name: '眼部紧致精华霜',
            price: '645元',
            capacity: '15ml',
        },
    ]],
])