<script setup>
import { ref } from 'vue'
import { useCurrencyStore } from '../stores/currency'
import { storeToRefs } from 'pinia'

let from = ref('KZT')
let to = ref('USD')

const { getCurrency, getSymbols } = useCurrencyStore()
const { transformedSymbols } = storeToRefs(useCurrencyStore())

const params = {
  to: 'KZT',
  from: 'USD',
  amount: 100
}

getCurrency(params)
getSymbols()

const handleChange = (value) => {
  console.log(`selected ${value}`)
  console.log(from.value, to.value)
}
</script>

<template>
  <div class="currency-card">
    <div class="card-header">
      <a-select ref="select" v-model:value="from" style="width: 240px" @change="handleChange">
        <a-select-option v-for="(symbol, n) in transformedSymbols" :key="n" :value="symbol.value">
          {{ symbol.label }}
        </a-select-option>
      </a-select>

      <a-button type="primary" shape="circle" size="large">
        <img src="./../assets/icon.png" alt="Icon" />
      </a-button>

      <a-select ref="select" v-model:value="to" style="width: 240px" @change="handleChange">
        <a-select-option v-for="(symbol, n) in transformedSymbols" :key="n" :value="symbol.value">
          {{ symbol.label }}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<style scoped>
.currency-card {
  max-width: 800px;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.card-header {
  display: flex;
  gap: 40px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-border);
}
</style>
