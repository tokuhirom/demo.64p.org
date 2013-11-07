
/*
 * GET users listing.
 */

// http://kazina.com/dummy/dummy.cgi
var users = [{"name":"山上 美咲","id":"1"},{"id":"2","name":"藤野 真悠子"},{"id":"3","name":"堤 祐一"},{"id":"4","name":"松井 薫"},{"id":"5","name":"吉永 徹"},{"name":"河合 兼","id":"6"},{"name":"沼田 竜也","id":"7"},{"id":"8","name":"川原 人志"},{"name":"玉山 扶樹","id":"9"},{"id":"10","name":"大谷 薫"},{"name":"山本 一樹","id":"11"},{"id":"12","name":"奥田 由宇"},{"name":"大滝 蒼甫","id":"13"},{"id":"14","name":"会田 砂羽"},{"id":"15","name":"喜多 あや子"},{"id":"16","name":"稲葉 敦"},{"name":"飛田 栄一","id":"17"},{"id":"18","name":"曽我 メイサ"},{"id":"19","name":"黒崎 莉央"},{"name":"滝 勝久","id":"20"},{"id":"21","name":"赤坂 優"},{"name":"本山 あさみ","id":"22"},{"id":"23","name":"飛田 圭"},{"name":"伊崎 浩太郎","id":"24"},{"name":"松岡 法嗣","id":"25"},{"id":"26","name":"桜田 一樹"},{"name":"堀 完爾","id":"27"},{"name":"高野 はるみ","id":"28"},{"id":"29","name":"辻本 建"},{"id":"30","name":"宇都宮 慶二"},{"id":"31","name":"竹下 涼"},{"id":"32","name":"一木 健"},{"name":"亀井 ひとみ","id":"33"},{"id":"34","name":"寺尾 あさみ"},{"id":"35","name":"柏木 人志"},{"name":"前野 希","id":"36"},{"id":"37","name":"岩間 茂樹"},{"id":"38","name":"森山 高史"},{"name":"滝口 華子","id":"39"},{"name":"大橋 美幸","id":"40"},{"name":"杉田 由樹","id":"41"},{"name":"大場 直人","id":"42"},{"name":"寺本 高史","id":"43"},{"name":"村木 由宇","id":"44"},{"id":"45","name":"立石 寿々花"},{"id":"46","name":"白鳥 綾女"},{"name":"田村 麻緒","id":"47"},{"id":"48","name":"川本 陽子"},{"name":"今田 裕次郎","id":"49"},{"name":"川中 浩太郎","id":"50"}];

exports.list = function(req, res){
  var page = req.query.page ||  1;
  var rows = req.query.rows || 10;
  var offset = (page - 1) * rows;
  res.send(users.slice(offset, page*rows));
};

