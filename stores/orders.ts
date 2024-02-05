import { defineStore } from "pinia";

export const useOrdersStore = defineStore({
  id: "orders",
  state: () => {
    return {
      ordersList: [] as any ,
    };
  },
  actions: {
    addOrders(id:number, name: string, date: string, order: Array<any>) {
      this.ordersList.push({
        id: 
        name,
        date,
        order,
      });
    },
    deleteOrder(id: number){
        let newArray = this.ordersList.filter((item: { id: number; }) => item.id !== id)     
        this.ordersList = newArray
    }
  },
});
