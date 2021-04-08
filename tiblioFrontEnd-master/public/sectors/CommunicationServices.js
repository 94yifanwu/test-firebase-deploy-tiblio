let stockQuery = [
    {
        stock: "Tesla Inc.",
        ticker: "TSLA",
        priceCurrent: "650",
        priceLast: "670",
        percentChange: "5",
        change: "1.5",
        volume: "55.624",
        trend: "Buy",
    },
    {
        stock: "Tesla Inc.",
        ticker: "TSLA",
        priceCurrent: "650",
        priceLast: "670",
        percentChange: "5",
        change: "1.5",
        volume: "55.624",
        trend: "Buy",
    }
];

let sectorQuery =
    {
        stocks: "214",
        marketCap: "900",
        volume: "1.5",
        change: "-1.35",
        perfMonth: "-2.01",
        perfYear: "+90.36",
        perfYTD: "+2.69"
    };

sectorQuery = JSON.stringify(sectorQuery);
sectorQuery = JSON.parse(sectorQuery);

var output = "";


for(var i = 0; i < stockQuery.length; i++)
{
    output +=   '<div class="grid-container" id="ticker_id_'+i+'" onclick=show_stock_image("ticker_id_'+i+'")>' +
                    '<div class="grid-child-ticker" > <div >' + '<a type="button" class="btn btn-primary" >' + stockQuery[i].ticker +
                         ' </a></div> <div>' + stockQuery[i].stock + '</div></div>' +
                    '<div class="grid-child-last">' + stockQuery[i].priceLast  + '</div>' +
                    '<div class="grid-child-percent-change">' + stockQuery[i].percentChange  + '</div>' +
                    '<div class="grid-child-change">' + stockQuery[i].change  + '</div>' +
                    '<div class="grid-child-trend">' + stockQuery[i].trend  + '</div>' +
                    '<div class="grid-child-volume">' + stockQuery[i].volume  + '</div>' +
                '</div>';
}
//                    '<div id="anychart-embed-samples-stock-ohlc-01" class="anychart-embed anychart-embed-samples-stock-ohlc-01"></div>'+


function show_stock_image(ticker_id){
    var img = document.createElement("img");
    img.src = "../assert/img/Amazon_1.png"
//    document.getElementById(ticker_id).after = ( " <div id='container'></div>" );
    document.getElementById(ticker_id).after ( img );

}


document.getElementById("grid-container").innerHTML += output;

document.getElementById("header-grid").innerHTML +=  '<div class="header-grid-child>' +
                                                        '<div class="header-grid-child-numbers">' + sectorQuery.stocks + '</div>' +
                                                        '<div class="header-grid-child-numbers">' + sectorQuery.marketCap + '</div>' +
                                                        '<div class="header-grid-child-numbers">' + sectorQuery.volume + '</div>' +
                                                        '<div class="header-grid-child-numbers">' + sectorQuery.change + '</div>' +
                                                        '<div class="header-grid-child-numbers">' + sectorQuery.perfMonth + '</div>' +
                                                        '<div class="header-grid-child-numbers">' + sectorQuery.perfYear + '</div>' +
                                                        '<div class="header-grid-child-numbers">' + sectorQuery.perfYTD + '</div>' +
                                                        '</div>';