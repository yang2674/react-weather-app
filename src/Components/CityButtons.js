import React from 'react';

function CityButtons({ setQuery }) {
    const cities = [
        {
            id: 1,
            name: 'New York',
        },
        {
            id: 2,
            name: 'Paris',
        },
        {
            id: 3,
            name: 'London',
        },
        {
            id: 4,
            name: 'Sydney',
        },
        {
            id: 5,
            name: 'Hong Kong',
        },
        {
            id: 6,
            name: 'Tokyo',
        },
    ];

    return (
        <div className="flex items-center justify-between my-6">
            {cities.map((city) => (
                <button
                    key={city.id}
                    onClick={() => setQuery({ q: city.name })}
                    className="text-white text-md font-medium transition ease-out hover:scale-120 hover:text-orange-500"
                >
                    {city.name}
                </button>
            ))}
        </div>
    );
}

export default CityButtons;
