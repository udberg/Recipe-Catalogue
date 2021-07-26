import API from '../config/config';

const fetchMeals = async (category) => {
    const url = `${API.BASE_URL}/${API.FILTER_ENDPOINT}/?c=${category}`;
    const response = await fetch(url);

    if (response.status === 200) {
        const data = await response.json();
        return data;
    }

    throw Error(404);
};

const fetchSearchMeals = async => {
    const url = `${API.BASE_URL}/${API.SEARCH_ENDPOINT}/?s=${query}`;
    const response = await fetch(url);

    if (response.status === 200) {
        const data = await response.json();
        return data;
    }

    throw Error(404);
};