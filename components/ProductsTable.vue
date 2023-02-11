<template>
  <div v-if="productsToShow.length > 0">
    <table class="w-full table-auto">
      <thead>
        <tr>
          <th class="p-4 bg-secondary text-left">Name</th>
          <th class="p-4 bg-secondary text-right">Price</th>
          <th class="p-4 bg-secondary text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productsToShow" :key="product.id">
          <td class="p-4 text-left">{{ product.name }}</td>
          <td class="p-4 text-right">
            {{ product.price.toLocaleString("en-US", { style: "currency", currency: "USD" }) }}
          </td>
          <td class="p-4 text-left">
            <UIButton
              class="mr-4"
              variant="outlined"
              type="button"
              @click="setProductToUpdate(product.id)">
              Edit
            </UIButton>
            <UIButton @click="deleteProductHandler(product.id)" variant="outlined" type="button">
              Delete
            </UIButton>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="bg-secondary p-8">
    <p class="font-medium text-xl">No products found</p>
  </div>
  <ClientOnly>
    <Teleport to="#product-form-teleport">
      <div class="bg-secondary p-8 text-center">
        <h3 class="font-semibold text-2xl mb-4">
          {{
            productToUpdate
              ? `Editing "${products.find((p) => p.id === productToUpdate).name}"`
              : "Add a product"
          }}
        </h3>
        <p class="font-medium text-low-emphasis mb-8 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        </p>
        <form @submit.prevent="upsertProductHandler">
          <input
            type="text"
            required
            class="block w-full rounded-md outline-none text-xl p-4 font-medium mb-4"
            v-model="newProduct.name"
            placeholder="Name"
            aria-label="Name" />
          <input
            min="0"
            type="number"
            class="block w-full rounded-md outline-none text-xl p-4 font-medium mb-4"
            v-model="newProduct.price"
            placeholder="Price"
            aria-label="Price" />
          <UIButton
            @click=""
            variant="primary"
            type="submit"
            class="w-full"
            :disabled="isOperationRunning">
            {{ productToUpdate ? "Save" : "Create" }} product
          </UIButton>
          <UIButton
            v-if="productToUpdate"
            @click="cancelUpdateProduct"
            variant="outlined"
            type="button"
            class="w-full mt-4"
            :disabled="isOperationRunning">
            Cancel
          </UIButton>
        </form>
      </div>
    </Teleport>
    <Teleport to="#product-search-teleport">
      <input
        v-model="searchKeyword"
        @input="setFilteredProducts()"
        type="text"
        class="block grow border-2 border-low-emphasis rounded-md outline-none text-xl px-4 py-2 font-medium"
        placeholder="Search for keywords"
        aria-label="Search for keywords" />
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";

const products = ref<Product[]>([]);
const filteredProducts = ref<Product[] | null>(null);
const getProducts = inject<() => Promise<Product[]>>("getProducts");
const upsertProduct = inject<(product: Product) => Promise<Product>>("upsertProduct");
const deleteProduct = inject<(id: string) => Promise<void>>("deleteProduct");
products.value = await getProducts();

const productsToShow = computed(() => filteredProducts.value ?? products.value);

const searchKeyword = ref("");

const setFilteredProducts = useDebounceFn(() => {
  if (!searchKeyword.value) {
    filteredProducts.value = null;
    return;
  }
  filteredProducts.value = products.value.filter((p) =>
    p.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
}, 500);

const isOperationRunning = ref(false);

const newProduct = ref<Product>({
  id: "",
  name: "",
  price: 0,
});

const productToUpdate = ref("");

const setProductToUpdate = (id: string) => {
  const product = products.value.find((p) => p.id === id);
  if (!product) return;
  Object.assign(newProduct.value, product);
  productToUpdate.value = id;
};

const cancelUpdateProduct = () => {
  productToUpdate.value = "";
  newProduct.value = {
    id: "",
    name: "",
    price: 0,
  };
};

const upsertProductHandler = async () => {
  if (isOperationRunning.value) return;
  isOperationRunning.value = true;
  try {
    const response = await upsertProduct(newProduct.value);
    if (products.value.find((p) => p.id === response.id)) {
      const updatedProduct = products.value.find((p) => p.id === response.id);
      Object.assign(updatedProduct, response);
      productToUpdate.value = "";
      alert("Product updated successfully.");
    } else {
      products.value.push(response);
      alert("Product added successfully.");
    }

    newProduct.value = {
      id: "",
      name: "",
      price: 0,
    };
  } catch (e) {
    alert(e);
  } finally {
    isOperationRunning.value = false;
  }
};

const deleteProductHandler = async (id: string) => {
  if (isOperationRunning.value) return;
  if (!confirm(`Delete ${products.value.find((p) => p.id === id)?.name}?`)) return;

  isOperationRunning.value = true;
  try {
    await deleteProduct(id);
    products.value = products.value.filter((p) => p.id !== id);
    productToUpdate.value = "";
    alert("Product deleted successfully.");
  } catch (e) {
    alert(e);
  } finally {
    isOperationRunning.value = false;
  }
};
</script>

<style>
table,
th,
td {
  @apply border-2 border-text;
}
th {
  @apply border-b-transparent;
}
</style>
