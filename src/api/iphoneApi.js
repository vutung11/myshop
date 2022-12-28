import axiosClient from "./axiosClient";

const iphoneApi = {
    getAllIphone: async () => {
        const url = 'products';
        return await axiosClient.get(url)
    }
}

export default iphoneApi;