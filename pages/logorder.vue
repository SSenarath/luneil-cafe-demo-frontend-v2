<template>
  <div class="flex w-full flex-col items-center py-10">
    <NuxtLink to="/orderhistory" class="ml-auto mr-4">
      <el-button >See Order History</el-button>
    </NuxtLink>
    <p class="text-4xl font-bold text-center w-full mb-10">Log an Order</p>
    <div class="border bg-luneil-orange bg-opacity-50 rounded-lg flex p-4">
      <div>
        <el-form :model="form" label-width="120px">
          <el-form-item label="Name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-date-picker
                v-model="form.date1"
                type="date"
                value-format="YYYY-MM-DD"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-time-picker
                v-model="form.date2"
                placeholder="Pick a time"
                value-format="HH:mm"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="Items">
            <div class="flex flex-col">
              <ul
                class="list-disc ml-4"
                v-if="itemsList.length > 0"
                :key="listKey"
              >
                <li v-for="(each, index) in itemsList">
                  {{ each.quantity }} {{ each.type }} {{ each.option }}
                  <button @click="deleteItem(index)" class="ml-4 text-gray-400">
                    x delete
                  </button>
                </li>
              </ul>
              <div class="flex gap-2 items-center">
                <el-input
                  v-model="itemPreview.quantity"
                  min="1"
                  type="number"
                  class="!w-20"
                />
                <el-select
                  v-model="itemPreview.type"
                  class=""
                  placeholder="Select"
                  style="width: 240px"
                >
                  <el-option
                    @click="resetOptions"
                    v-for="item in typeList"
                    :key="item"
                    :label="item"
                    :value="item"
                  />
                </el-select>
                <div
                  v-if="
                    itemPreview.type === '' ||
                    optionsList[itemPreview.type][0] !== 'noOptions'
                  "
                >
                  <el-select
                    v-model="itemPreview.option"
                    class=""
                    placeholder="Select"
                    style="width: 240px"
                  >
                    <el-option
                      v-for="item in optionsList[itemPreview.type]"
                      :key="item"
                      :label="item"
                      :value="item"
                    />
                  </el-select>
                </div>
                <el-button
                  @click="addToList"
                  :class="{
                    'is-disabled':
                      !itemPreview.quantity ||
                      !itemPreview.type ||
                      (optionsList[itemPreview.type][0] !== 'noOptions' &&
                        !itemPreview.option),
                  }"
                  >Add</el-button
                >
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :class="{'is-disabled': !form.name || !form.date1 || !form.date2 || itemsList.length < 1}">Create</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { useOrdersStore } from "~/stores/OrderStore";
const orderStore = useOrdersStore();
const form = reactive({
  name: "",
  date1: "",
  date2: "",
  items: [],
});

const listKey = ref(0);

const itemPreview = ref({
  quantity: "",
  type: "",
  option: "",
});

const itemsList = ref([]);

const typeList = [
  "rolls",
  "pastries",
  "patties",
  "cutlets",
  "roti",
  "hoppers",
  "lunu-miris",
  "seeni-sambal",
  "coconut-sambal",
];

const optionsList = {
  rolls: ["Vegetable", "Fish"],
  pastries: ["Chicken", "Fish"],
  patties: ["Cheese", "Chicken", "Fish"],
  cutlets: ["Cheese", "Chicken", "Fish"],
  roti: ["Vegetable", "Fish", "Chicken"],
  hoppers: ["noOptions"],
  "lunu-miris": ["noOptions"],
  "seeni-sambal": ["noOptions"],
  "coconut-sambal": ["noOptions"],
};

const resetOptions = () => {
  itemPreview.value.option = "";
};

const addToList = () => {
  listKey.value++;
  itemsList.value.push({
    quantity: itemPreview.value.quantity,
    type: itemPreview.value.type,
    option: itemPreview.value.option,
  });
  itemPreview.value = {
    quantity: "",
    type: "",
    option: "",
  };
};

const deleteItem = (index) => {
  itemsList.value.splice(index, 1);
};

const onSubmit = () => {
  form.items = itemsList.value;
  const res = orderStore.addOrders(form);
  form.name = "";
  form.date1 = "";
  form.date2 = "";
  form.items = [];
  itemsList.value = [];
  itemPreview.value = {
    quantity: "",
    type: "",
    option: "",
  };
};
</script>

<style scoped>
.el-select__wrapper {
  height: 32px !important;
}
</style>
