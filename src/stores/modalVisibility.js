import {defineStore} from "pinia";

export const useModalVisibilityStore = defineStore("modalVisibility", {
    getter: {
        isRegistrationModalVisible() {
            return false;
        },
    },
    actions: {
        openRegistrationModal() {
            this.isRegistrationModalVisible = true;
        },
        closeRegistrationModal() {
            this.isRegistrationModalVisible = false;
        },
    },
});