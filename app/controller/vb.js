exports.home = function* (ctx) {
    yield ctx.render('vb/index.js', {
        url: ctx.url,
        update: {
            data: {name: "ssss"},
            id: 1
        },
        bannerList: [{
            imAdvertId: "f63a1354-d497-4cdf-87d7-eb33acbc69ba",
            imProductId: "129",
            imageUrl: "http://vbimg.sibumbg.com/G1/M00/E5/85/CixLa1olGZuAcc-oAAKQCkC1VoY495.jpg",
            isShow: "",
            linkUrl: "",
            name: "浪莎",
            sortIndex: "",
            typeId: 3
        }, {
            imAdvertId: "532b01f4-4b1b-4cdf-a08f-ce76dc7e96e1",
            imProductId: "57e3480f-b2f3-4bed-926e-d3795156a556",
            imageUrl: "http://vbimg.sibumbg.com/G1/M00/E2/10/CixGgVocusCAYX7sAAI78ba71iA397.jpg",
            isShow: "",
            linkUrl: "",
            name: "浪莎",
            sortIndex: "",
            typeId: 1
        },{
            imAdvertId: "daca944c-d52e-4357-b9a2-6318d048a440",
            imProductId: "31",
            imageUrl: "http://vbimg.sibumbg.com/G1/M00/E2/C7/CixGgVofbdqAJ-JTAAJX5WZyefY916.jpg",
            isShow: "",
            linkUrl: "",
            name: "益特龙",
            sortIndex: "",
            typeId: 3
        },{
            imAdvertId: "df2c99d1-29d0-4fa1-9ce4-57a51cf33e78",
            imProductId: "75",
            imageUrl: "http://vbimg.sibumbg.com/G1/M00/E3/40/CixLa1ocvUOASPrRAAR2nxYppiY884.jpg",
            isShow: "",
            linkUrl: "",
            name: "宾爵",
            sortIndex: "",
            typeId: 3
        }
        ]
    });
};