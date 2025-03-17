import axios from 'axios';

const API_BASE_URL = ({ baseURL:"https://booking.openintech.app/api/",
    headers: {
        "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
        "Content-Type": "application/json",
      },}); 

export const getCountries = () => axios.get(`${API_BASE_URL}/countries`);
export const getCities = (countryId) => axios.get(`${API_BASE_URL}/cities?country_id=${countryId}`);
export const searchCars = (filters) => axios.get(`${API_BASE_URL}/search`, { params: filters });
