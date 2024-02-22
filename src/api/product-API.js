
import axios from 'axios';

 export const getAllProductsApi = async() => {
        try {
            const response = await axios.get("http://localhost:3000/posts");
            // console.log('result', response.data.products)
            const result = response.data;
            return result;
        } catch (error) {
            throw Error(error.message);
        };
}
