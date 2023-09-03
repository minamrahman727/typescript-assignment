function create_car(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var detail = details_1[_a];
        var key = Object.keys(detail)[0];
        var value = detail[key];
        carInfo[key] = value;
    }
    return carInfo;
}
var carInfo = create_car('Toyota', 'revolution', { color: 'Black' }, { year: 2022 }, { features: ['Sunroof', 'hill climb assist'] }, { nickname: 'dala' });
console.log(carInfo);
