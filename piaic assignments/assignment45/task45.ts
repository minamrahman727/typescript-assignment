function create_car(manufacturer: string, model: string, ...details: Record<string, any>[]): Record<string, any> {
    const carInfo: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    for (const detail of details) {
        const key = Object.keys(detail)[0];
        const value = detail[key];
        carInfo[key] = value;
    }

    return carInfo;
}

const carInfo = create_car('Toyota', 'revolution', { color: 'Black' }, { year: 2022 }, { features: ['Sunroof', 'hill climb assist'] },{nickname:'dala'});

console.log(carInfo);
