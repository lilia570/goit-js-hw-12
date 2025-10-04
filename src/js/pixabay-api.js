import axios from 'axios';

export const getImagesByQuery = async (query,page) => {
 const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '52588581-69f7ab0d2e25f8850fd21ce07',
        q: query.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page,
      },
    })
    
      return response.data;
    };
