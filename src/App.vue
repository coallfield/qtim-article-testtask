<template>
  <div class="app">
    <header class="header">
        <QtimHeader></QtimHeader>
    </header>
    <main class="main">
      <RouterView></RouterView>
    </main>
    <footer class="footer">
      <QtimFooter></QtimFooter>
    </footer>
  </div>
</template>


<script setup lang="ts">

import QtimHeader from '@/components/QtimHeader.vue'
import QtimFooter from '@/components/QtimFooter.vue'
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: TTCommons, sans-serif;
}
  @font-face {
    font-family: "TTCommons";
    src: url('@/fonts/TTCommons-Regular.ttf');
  }

  .header {
    width: 100%;
    height: 120px;
  }

  .app {
    display: flex;
    flex-direction: column;
   
  }
  .main {
    flex-shrink: 1;
  }

  .footer {
    margin-top: 140px;
    width: 100%;
    min-height: 900px;
    background-color: #E2BEFF;
    display: flex;
    flex-direction: column;

    
  }

  
  
</style>