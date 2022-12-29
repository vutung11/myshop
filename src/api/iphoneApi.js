import axiosClient from "./axiosClient";

const iphoneApi = {
    getAllIphone: async () => {
        const url = 'iphones';
        return await axiosClient.get(url)
    }
}

export default iphoneApi;