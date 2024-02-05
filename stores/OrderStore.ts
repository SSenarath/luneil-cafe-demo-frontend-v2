import { defineStore } from "pinia";

export const useOrdersStore = defineStore("OrderStore", {
  state: () => {
    return {
      ordersList: [
        {
          id: 1,
          name: "Test 1",
          date: "2024-02-05",
          time: "15:23",
          order: [
            {
              quantity: 20,
              type: "rolls",
              option: "fish",
            },
            {
              quantity: 15,
              type: "cheese",
              option: "cutlets",
            },
          ],
        },
        {
          id: 2,
          name: "Test 2",
          date: "2024-02-04",
          time: "12:00",
          order: [
            {
              quantity: 18,
              type: "roti",
              option: "fish",
            },
            {
              quantity: 32,
              type: "cheese",
              option: "patties",
            },
          ],
        },
        {
          id: 3,
          name: "Test 3",
          date: "2024-02-08",
          time: "10:00",
          order: [
            {
              quantity: 18,
              type: "roti",
              option: "fish",
            },
            {
              quantity: 32,
              type: "cheese",
              option: "patties",
            },
          ],
        },
        {
          id: 4,
          name: "Test 4",
          date: "2024-02-10",
          time: "17:00",
          order: [
            {
              quantity: 18,
              type: "roti",
              option: "fish",
            },
            {
              quantity: 32,
              type: "cheese",
              option: "patties",
            },
          ],
        },
        {
          id: 5,
          name: "Test 5",
          date: "2024-02-02",
          time: "12:30",
          order: [
            {
              quantity: 18,
              type: "roti",
              option: "fish",
            },
            {
              quantity: 32,
              type: "cheese",
              option: "patties",
            },
          ],
        },
      ],
      orderId: 2,
    };
  },
  actions: {
    addOrders(form: Object) {
      this.ordersList.push({
        id: this.orderId++,
        name: form.name,
        date: form.date1,
        time: form.date2,
        order: form.items,
      });
      return this.ordersList;
    },
    deleteOrder(id: number) {
      let newArray = this.ordersList.filter(
        (item: { id: number }) => item.id !== id
      );
      this.ordersList = newArray;
    },
    getOrderedList() {
      this.ordersList.sort((a, b) => {
        const dateA = new Date(`${a.date} ${a.time}`).getTime();
        const dateB = new Date(`${b.date} ${b.time}`).getTime();
        return dateB - dateA;
      });
      return this.ordersList
    }
  },
});
