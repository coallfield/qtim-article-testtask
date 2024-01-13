<template>
    <header class="foot-header"></header>
    <main class="foot-main">
        <div class="left-side">
            <div class="subhead">
                <p>Is there a project?</p>
            </div>
            <div class="subhead-title">
                <p>Let's work together</p>
            </div>
        </div>
        <div class="right-side">
            <div class="contact-info">
                <p>For all questions</p>
                <p class="phone">+7 (920) 278—00—68</p>
                <p class="email">qtim@agency.com</p>
            </div>
            <div class="offices">
                <div class="russian-office">
                    <p>Office in Russia</p>
                    <p class="adress">139 Ruben Station Lake Drew, NM 52678</p>
                    <LocationButton></LocationButton>
                </div>
                <div class="dubai-office">
                    <p>Office in Dubai</p>
                    <p class="adress">139 Ruben Station Lake Drew, NM 52678</p>
                    <LocationButton></LocationButton>
                </div>
            </div>
        </div>
    </main>
    <footer class="foot-footer">
        <nav class="social-links">
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Telegram</a>
        </nav>
        <div class="circle">Go</div>
        <nav class="social-links">
            <a>Behance</a>
            <a>Linkedn</a>
            <a>Privacy Policy</a>
        </nav>
    </footer>
</template>

<script setup lang="ts">
import LocationButton from '@/components/LocationButton.vue'
</script>

<style scoped>
.foot-main {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1 1 auto;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    grid-gap: 55px;
    margin-top: 140px;
    margin-left: 110px;
  }
  .subhead-title {
    color: var(--Style, #101010);
    font-size: 112px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    max-width: 460px;
    text-decoration: underline 1px;
    text-underline-offset: 10px;
  }

  .right-side {
    margin-top: 195px;
    margin-right: 345px;
  }
  
  .phone {
    margin-top: 10px;
  }
  .offices {
    margin-top: 35px;
  } 
  .dubai-office {
    margin-top: 35px;
  }

  .foot-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  

  .adress {
    width: 150px;
    margin-top:10px;
  }
 
  .social-links {
    display: flex;
    align-items: flex-end;
    grid-gap: 20px;
    margin-bottom: 30px;
    text-decoration: underline;
    text-underline-offset: 5px;
    cursor: pointer;
  }
  
  .circle {
    width: 360px;

    height: 180px;  
    background-color: #101010;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    display: flex;
    justify-content: center;
    align-items:flex-end;
    color: #F3F3F3;
    padding-bottom: 25px;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    cursor: pointer;
  }
</style>