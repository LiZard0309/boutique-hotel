import {defineStore} from "pinia";

export const useModalVisibilityStore = defineStore("modalVisibility", {
    state: () => ({
        isRegistrationModalVisible() {
            return false;
        },
    }),
    actions: {
        openRegistrationModal() {
            this.isRegistrationModalVisible = true;
        },
        closeRegistrationModal() {
            this.isRegistrationModalVisible = false;
        },
    },
});