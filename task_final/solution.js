// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }
function sendRequest(name, phone, address, goods, sum) {
	let objectData = { data: {
		client: '', 
		order: {address: '', sum: ''}, 
		goods: []}
    };

    objectData.data.client = name + ' ' + phone;
    objectData.data.order.address = "ул. " + address.street + ", дом " + address.house + ", " + address.entrance + " подъезд, " + address.floor + " этаж, кв " + address.flat;
    objectData.data.order.sum = sum;
    goods.forEach((product) => {
        let goodsTrueWay = {title: '', count:''};
        goodsTrueWay.title = product.title;
        goodsTrueWay.count = product.count;
        objectData.data.goods.push(goodsTrueWay);
      })

    let jsonData = JSON.stringify(objectData);
    return jsonData;
}