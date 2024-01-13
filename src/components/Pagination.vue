<template>
    <div class="pages-navigation">
        <div class="page-buttons">
            <div :style="{ 'margin-left': '-' + (100 * sliderButton) + '%' }" class="slider">
                <button v-for="page in totalPages" @click="$emit('changePage', page)" :class="{ 'current-page': page === pageNumber }" class="page-button">{{ page }}</button>    
            </div>
        </div>
        <div class="next-page-container">
            <SliderButton @click="nextPage()" ></SliderButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SliderButton from '@/components/SliderButton.vue';

interface Props {
    totalPages: number,
    pageNumber: number,

}

const emits = defineEmits(['changePage', 'nextPage'])
const props = defineProps<Props>()
const sliderButton = ref<number>(0)


function nextPage(): void {
  emits('nextPage', props.pageNumber)
  if(props.pageNumber % 5 === 0) {
        sliderButton.value++
  }
  if(props.pageNumber > props.totalPages - 1) {
        sliderButton.value = 0
  }
  
}

</script>

<style scoped> 
.pages-navigation {
  margin-left: 110px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  display: flex;
  flex-direction: row;
}

.page-buttons {
  width: 240px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  grid-gap: 8px;
  
}

.slider {
  width: 240px;
  display: flex;
  flex-direction: row;
  grid-gap: 8px;
}


.page-button {
  cursor: pointer;
  display: flex;
width: 44px;
height: 44px;
padding: 11px 17px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 12px;
background: #F3F3F3;
border: none;
}

.current-page {
  background:  #101010;
  color: white;

}

.next-page {
flex-shrink: 0;
border-radius: 12px;
border: 1px solid var(--Style, #E8E8E8);
margin-left: 3px;
background-color: white;
display: flex;
width: 44px;
height: 44px;
padding: 11px 17px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
}
</style>