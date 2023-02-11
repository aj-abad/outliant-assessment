<template>
  <div>
    <main class="custom-container py-20 grid grid-cols-12 xl:gap-24 gap-4">
      <div class="lg:col-span-5 lg:pt-[16.67%] col-span-12 text-center lg:text-left pb-16 lg:pb-0">
        <h1 class="font-semibold xl:text-7xl lg:text-5xl text-4xl leading-tight mb-4">
          Lorem ipsum <br class="hidden xl:inline" />
          dolor sit amet <br class="hidden xl:inline" />
          consectetur
        </h1>
        <p role="doc-subtitle" class="text-xl font-medium text-low-emphasis mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit ut aliquam, purus sit amet luctus
          venenatis, lectus
        </p>
        <div class="flex gap-2 justify-center lg:justify-start">
          <UIButton variant="primary" type="button"> Call to action </UIButton>
          <UIButton variant="outlined" type="button"> See workspace </UIButton>
        </div>
      </div>
      <div class="lg:col-start-7 lg:col-span-6 col-span-12">
        <div class="w-full aspect-[1/1] relative" role="presentation">
          <div class="absolute w-5/6 aspect-[1/1] bottom-0 left-0 bg-img-1"></div>
          <div class="absolute w-3/6 aspect-[1/1] top-0 right-0 bg-img-2"></div>
        </div>
      </div>
    </main>

    <section class="custom-container grid grid-cols-12 xl:gap-16 gap-4 py-20">
      <div class="lg:col-span-3 col-span-12 order-2 lg:order-1 mb-4 lg:mb-0">
        <h2 class="text-2xl font-semibold mb-4">Header Text</h2>
        <p class="text-low-emphasis text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit ut aliquam, purus sit amet luctus
          venenatis, lectus magna fringilla urna, portittor rhoncus dolor purus non enim dolor.
        </p>
      </div>
      <div class="lg:col-span-6 col-span-12 order-1 lg:order-2 mb-8 lg:mb-0">
        <div class="w-full aspect-[1/1] bg-img-1" role="presentation"></div>
      </div>
      <div class="lg:col-span-3 col-span-12 order-3 lg:order-3 lg:flex items-end">
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
