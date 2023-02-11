<template>
  <main class="custom-container py-20">
    <header class="grid grid-cols-12 gap-24 mb-16">
      <div class="col-span-12 lg:col-span-6">
        <div class="flex align-baseline">
          <h1 class="text-6xl mr-16 font-semibold">Products</h1>
          <div class="contents" id="product-search-teleport"></div>
        </div>
      </div>
    </header>
    <div class="grid grid-cols-12 gap-24">
      <div class="col-span-6">
        <Suspense>
          <ProductsTable />
          <template #fallback>
            <div class="bg-secondary p-8">
              <span class="text-xl font-medium"> Loading... </span>
            </div>
          </template>
        </Suspense>
      </div>
      <div class="col-start-8 col-span-5">
        <div id="product-form-teleport"></div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { v4 as uuid } from "uuid";

//mock data for CRUD operations
const products = useState<Product[]>("products", () => []);

const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(JSON.stringify(products.value)));
    }, Math.random() * 2_000);
  });
};

const upsertProduct = (product: Product): Promise<Product> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (product.id) {
        const productToUpdate = products.value.find((p) => p.id === product.id);
        Object.assign(productToUpdate, product);
        resolve(productToUpdate);
      } else {
        const productToAdd = { ...product, id: uuid() };
        products.value.push(productToAdd);
        resolve(productToAdd);
      }
    }, Math.random() * 2_000);
  });
};

const deleteProduct = (id: string): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      products.value = products.value.filter((product) => product.id !== id);
      resolve(toRaw(products.value));
    }, Math.random() * 2_000);
  });
};

const updateProduct = (product: Product): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = products.value.findIndex((p) => p.id === product.id);
      products.value[index] = product;
      resolve(toRaw(products.value));
    }, Math.random() * 2_000);
  });
};

provide("getProducts", getProducts);
provide("upsertProduct", upsertProduct);
provide("deleteProduct", deleteProduct);
</script>
