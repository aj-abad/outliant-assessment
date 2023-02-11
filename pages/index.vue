<template>
  <div>
    <main class="custom-container py-20 grid grid-cols-12 gap-24">
      <div class="col-span-5 pt-[16.67%]">
        <h1 class="font-semibold text-7xl leading-tight mb-4">
          Lorem ipsum <br />
          dolor sit amet <br />
          consectetur
        </h1>
        <p role="doc-subtitle" class="text-xl font-medium text-low-emphasis mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit ut aliquam, purus sit amet luctus
          venenatis, lectus
        </p>
        <div class="flex gap-2">
          <UIButton variant="primary" type="button"> Call to action </UIButton>
          <UIButton variant="outlined" type="button"> See workspace </UIButton>
        </div>
      </div>
      <div class="col-start-7 col-span-6">
        <div class="w-full aspect-[1/1] relative" role="presentation">
          <div class="absolute w-5/6 aspect-[1/1] bottom-0 left-0 bg-img-1"></div>
          <div class="absolute w-3/6 aspect-[1/1] top-0 right-0 bg-img-2"></div>
        </div>
      </div>
    </main>

    <section class="custom-container grid grid-cols-12 gap-16 py-20">
      <div class="col-span-3">
        <h2 class="text-2xl font-semibold mb-4">Header Text</h2>
        <p class="text-low-emphasis text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit ut aliquam, purus sit amet luctus
          venenatis, lectus magna fringilla urna, portittor rhoncus dolor purus non enim dolor.
        </p>
      </div>
      <div class="col-span-6">
        <div class="w-full aspect-[1/1] bg-img-1" role="presentation"></div>
      </div>
      <div class="col-span-3 flex items-end">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Header Text</h2>
          <p class="text-low-emphasis text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit ut aliquam, purus sit amet
            luctus venenatis, lectus magna fringilla urna, portittor rhoncus dolor purus non enim
            dolor.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
