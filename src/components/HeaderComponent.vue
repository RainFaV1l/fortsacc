<script setup>
  import logo from '@/assets/logo.svg';
</script>

<template>
  <header class="border-b border-white border-opacity-10">
    <div class="container py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-12">
          <RouterLink :to="{name: 'home'}">
            <div class="flex items-center gap-4 cursor-pointer">
              <div class="h-8 w-8">
                <img class="h-full w-full object-contain" :src="logo" alt="Логотип">
              </div>
              <div class="uppercase lalezar-regular text-[20px]">Fortcases</div>
            </div>
          </RouterLink>
          <ul class="flex items-center gap-5 text-base text-[#9197C2] font-semibold">
            <li class="relative cursor-pointer menu-link flex justify-center transition hover:text-accent-green active">Home</li>
            <li class="relative cursor-pointer menu-link flex justify-center transition hover:text-accent-green">FAQ</li>
          </ul>
        </div>
        <div class="flex items-center gap-8">
          <div class="h-5 w-5 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_403_368)">
                <circle cx="9.58334" cy="9.58329" r="7.91667" stroke="#9197C2" stroke-width="1.5"/>
                <path d="M15.4167 15.4166L18.3333 18.3333" stroke="#9197C2" stroke-width="1.5" stroke-linecap="round"/>
              </g>
              <defs>
                <clipPath id="clip0_403_368">
                  <rect width="100" height="100" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="relative h-5 w-5 flex items-center cursor-pointer">
            <div class="h-5 w-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.16181 10.0243C3.60946 7.78607 3.83328 6.66697 4.57283 5.94619C4.70952 5.81298 4.8574 5.69175 5.01483 5.58384C5.86665 5 7.00792 5 9.29044 5H10.7096C12.9921 5 14.1334 5 14.9852 5.58384C15.1426 5.69175 15.2905 5.81298 15.4272 5.94619C16.1667 6.66697 16.3906 7.78607 16.8382 10.0243C17.4809 13.2376 17.8022 14.8443 17.0625 15.9828C16.9285 16.1889 16.7722 16.3796 16.5963 16.5514C15.625 17.5 13.9865 17.5 10.7096 17.5H9.29044C6.01347 17.5 4.37498 17.5 3.40367 16.5514C3.2278 16.3796 3.07147 16.1889 2.93753 15.9828C2.19781 14.8443 2.51915 13.2376 3.16181 10.0243Z" stroke="white" stroke-width="1.5"/>
                <path d="M7.5 4.99996V4.16663C7.5 2.78591 8.61929 1.66663 10 1.66663C11.3807 1.66663 12.5 2.78591 12.5 4.16663V4.99996" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M7.64243 12.5C7.98562 13.471 8.91165 14.1666 10.0002 14.1666C11.0887 14.1666 12.0147 13.471 12.3579 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="absolute h-[6px] w-[6px] rounded-full bg-accent-green top-0 right-0 text-[8px] text-accent-dark-blue text-center"></div>
          </div>
          <div class="flex items-center gap-[10px]">
            <button class="button button-outline button-hover-green-gradient py-[10px] px-[35px]">Log in</button>
            <button class="button button-fill gradient-blue py-[10px] px-[35px]">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .menu-link:after {
    position: absolute;
    content: '';
    height: 6px;
    width: 6px;
    background-color: #9CFF4F;
    opacity: 0;
    bottom: -27px;
    border-radius: 100%;
  }
  .menu-link:hover:after, .menu-link.active:after {
    opacity: 1;
  }
  .menu-link.active {
    color: #9CFF4F;
  }
</style>