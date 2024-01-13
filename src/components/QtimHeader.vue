<template>
    <div class="items-container">
        <div class="logo-container">
            <QLogo @click="$router.push('/')"></QLogo>
        </div>
        <div class="navigation">
            <nav>
                <RouterLink to="/">Works</RouterLink>
                <RouterLink to="/">About</RouterLink>
            </nav>
            <div class="buttons-container">
                <div class="language-button-container">
                    <LanguageButton class="language-button"></LanguageButton>
                </div>
                <div class="work-button-container">
                    <button class="work-button">Let's work</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import QLogo from '@/components/QLogo.vue'
import LanguageButton from '@/components/LanguageButton.vue'
</script>

<style scoped>
.logo-container {
    margin-left: 40px;
  }

  .items-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navigation {
    display: flex;
    flex-direction: row;
    align-items: center;

  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    margin-right: 40px;
    grid-gap: 15px
  }

  nav {
    display:flex;
    flex-direction: row;
    grid-gap:60px;
    margin-right: 90px;
  }

  a {
    text-decoration: none;
    color: var(--Style, #101010);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  a:hover {
    text-decoration: underline;
  }


  .language-button {
    border-radius: 999px;
    border: 2px solid rgba(0, 0, 0, 0.10);
    display: flex;
    width: 52px;
    height: 52px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: white;
    cursor:pointer;
  }

  .work-button {
    display: flex;
    padding: 16px 32px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 999px;
    background: var(--Style, #101010);
    border: none;
    color: var(--Style, #FFF);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; 
    cursor: pointer;
  }
</style>