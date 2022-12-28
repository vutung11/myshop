import axiosClient from "./axiosClient";

const macbookApi = {
    getAllMacbook: async () => {
        const url = 'products';
        return await axiosClient.get(url)
    }
}

export default macbookApi;