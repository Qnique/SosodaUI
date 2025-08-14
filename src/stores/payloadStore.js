// stores/payloadStore.js
import { defineStore } from 'pinia';

export const usePayloadStore = defineStore('payload', {
  state: () => ({
    data: null
  }),
  actions: {
    setPayload(payload) {
      this.data = payload;
    },
    clearPayload() {
      this.data = null;
    }
  },
  persist: true // 👈 This enables persistence
});
