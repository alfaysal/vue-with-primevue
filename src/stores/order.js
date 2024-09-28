import { defineStore } from 'pinia';
import {
    GET_ORDER_LIST_URL,
} from '@/constants/apiEndpoints';
import { ref } from 'vue';

export const useOrderStore = defineStore('order', () => {
    const orderList = ref([]);
    const orderListLoading = ref(false);
    const orderListError = ref(false);

    const getOrderList = async (params) => {
        orderListLoading.value = true;
        try {
            let url = GET_ORDER_LIST_URL;
            const response = await makeRequest({
                url,
                method: 'get',
                params,
            });
            orderList.value = response.data.data;
            orderListLoading.value = false;
        } catch (err) {
            orderListError.value = false;
            throw err;
        }
    };

    return {
        orderListError,
        orderListLoading,
        orderList,
        getOrderList,
    };
});
