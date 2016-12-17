Book = function(){
          function l(a,f,c)
        {
            var b = [],
            h = f.offers[a.offerToken],
            e = f.offers[a.askToken];
            for( c && console.log("buy " + a.askToken + "; offer " + a.offerAmount + " " + a.offerToken + "; price " + a.askPrice + " " + a.offerToken + "/" + a.askToken);0 < a.offerAmount && 0 < e.length && a.askPrice >= 1/e[e.length-1].askPrice;)
            {
              var d = e.pop(),
              k = 1/d.askPrice,
              g = Math.min(a.offerAmount,d.offerAmount * k),
              g = {
              offerUser:a.offerUser,
              offerToken:a.offerToken,
              offerAmount:g,
              askUser:d.offerUser,
              askToken:a.askToken,
              askAmount: g/k
              };
              c && (console.log("deal: " + k + " " + a.offerToken + "/" + a.askToken + " (" + 1/k + ")"),
              console.log("give " + g.offerAmount + " " + g.offerToken + " for " + g.askAmount + " " + g.askToken));
              b.push(g);
              a.offerAmount -= g.offerAmount;
              d.offerAmount -= g.askAmount;
              c && (console.log("now offer "+JSON.stringify(a)),
                    console.log("now ask "+JSON.stringify(d)));
              0 < d.offerAmount && f.offers[a.askToken].push(d)
            }
                    if ( 0 < a.offerAmount)
                      {
                        c = 0;
                        for ( e = h.length; c < e ; ++c) 
                          a && a.askPrice < h[c].askPrice && (h.splice(c,0,a),a=null);
                        a && h.push(a)
                      }
                    return{
                      book:f,
                      trades:b
                    }
        }
                    return{Book:function(a,f)
                    {
                      var c=
                            {
                              offers:{
                              }};
                            c.offers[a] = [];
                            c.offers[f] = [];
                            c.pair = [a,f];
                      return c
                    },
                    sell:function(a,f,c,b){
                      return l(
                                {
                                  offerUser:a,
                                  offerToken:b.pair[1],
                                  offerAmount:f,
                                  askToken:b.pair[0],
                                  askPrice:1/c
                                },b)},
                    buy:function(a,f,c,b){
                      return l(
                                {
                                  offerUser:a,
                                  offerToken:b.pair[0],
                                  offerAmount:f * c,
                                  askToken:b.pair[1],
                                  askPrice:c
                                },b)},
                    show:function(a){
                      function f(a,b,c){
                        for(;a.length < b;)
                          a = c ? a + " " : " " + a;
                        return a.slice(0,b)
                      }
                      function c(a){
                        return f(0 === a ? "" : a.toFixed(8),14,0)
                      }
                        var b;
                        b = "" + ("[ " + a.pair[0] + " / " + a.pair[1] + " MARKET ]\n");
                        b += "| BUY ORDERS                                 | SELL ORDERS                                |\n| USER     |         AMOUNT |          PRICE | USER     |         AMOUNT |          PRICE |\n";
          var h = a.offers[a.pair[0]].slice(0);
          a = a.offers[a.pair[1]].slice(0);
          for(var e = h.pop(),d = a.pop();e || d;e = h.pop(),d = a.pop())
            b += "| " + f(e ? e.offerUser : "",8,1) + " ",b += "| " + c(e ? e.offerAmount / e.askPrice : 0) + " ",b += "| " + c(e ? e.askPrice : 0) + " ",b += "| " + f(d ? d.offerUser : "",8,1) + " ",b += "| " + c(d ? d.offerAmount : 0) + " ",b += "| " + c(d ? 1/d.askPrice : 0) + " |\n";
            return b
          }
        }
      }();

var get = function(id){ 
  return document.getElementById(id) 
};

var book = Book.Book("BRL", TeamNameFromAPI);
var trades = [];

var cmd = function (cmd){
  return function(a,b,c){
    trades = trades.concat(Book[cmd](a,b,c,book).trades);
    get("trades").innerHTML = trades.map(function(trade){
      return "TRADE: `" + trade.offerUser + "` gives " + trade.offerAmount + " " + trade.offerToken + ", "
                    + "`" + trade.askUser  + "` gives " + trade.askAmount  + " " + trade.askToken;
    }).join("<br/>");
    get("book").value = Book.show(book);
  };
};

buy = cmd("buy");
sell = cmd("sell");