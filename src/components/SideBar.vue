<template>
    <div class="fixed top-0 left-0 bottom-0 pt-3 px-2 bg-[#471AAA] w-max z-50">
      <div>
        <div>
          <h2 class="text-white font-extrabold">welcome to your dashboard</h2>
        </div>
        <span class="block bg-white h-[1px] my-4"></span>
        <div>
          <ul class="flex flex-col gap-2 child:text-white child:font-semibold  hover:child:bg-white/50 child:py-2 hover:child:px-4 child:rounded-xl child:cursor-pointer transition-all">
            <li><router-link to="/dashboard">dashboard</router-link></li>
            <li><router-link to="/todos">todos</router-link></li>
            <li><router-link to="/weather">weather</router-link></li>
            <li><router-link to="/profile">profile</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </template>  
    
  <script >
  export default {
    name: "SideBarPanel",
  };
  </script>
    
  <style>
  /* استایل‌های شما در اینجا */
  </style>
  