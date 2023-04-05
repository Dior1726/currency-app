<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCurrencyStore } from '../stores/currency'

let from = ref('KZT')
let to = ref('USD')
let amount = ref(0)

const { getCurrency } = useCurrencyStore()
const { transformedSymbols, loading, convertResult } = storeToRefs(useCurrencyStore())

const handleChange = () => {
  const params = {
    to: to.value,
    from: from.value,
    amount: +amount.value
  }

  getCurrency(params)
}

const convertCurrencyHandler = () => {
  const params = {
    to: to.value,
    from: from.value,
    amount: +amount.value
  }

  getCurrency(params)
}

const changeSymbolHandler = () => {
  let oldToValue = to.value
  let oldFromValue = from.value

  to.value = oldFromValue
  from.value = oldToValue

  const params = {
    to: to.value,
    from: from.value,
    amount: +amount.value
  }

  getCurrency(params)
}
</script>

<template>
  <div class="loading-message" v-if="!transformedSymbols">
    <h1>Загрузка валют...</h1>
  </div>

  <div class="currency-card" v-else>
    <div class="card-header">
      <a-input v-model:value="amount" placeholder="Amount" />

      <a-button @click="convertCurrencyHandler" type="primary" :loading="loading">
        Поменять
      </a-button>
    </div>

    <div class="card-body">
      <a-select ref="select" v-model:value="from" style="width: 240px" @change="handleChange">
        <a-select-option v-for="(symbol, n) in transformedSymbols" :key="n" :value="symbol.value">
          {{ symbol.label }}
        </a-select-option>
      </a-select>

      <a-button type="primary" shape="circle" size="large" @click="changeSymbolHandler">
        <img src="./../assets/icon.png" alt="Icon" />
      </a-button>

      <a-select ref="select" v-model:value="to" style="width: 240px" @change="handleChange">
        <a-select-option v-for="(symbol, n) in transformedSymbols" :key="n" :value="symbol.value">
          {{ symbol.label }}
        </a-select-option>
      </a-select>
    </div>

    <div class="card-footer" v-if="convertResult">
      <h1 v-if="loading">Loading...</h1>
      <h1 v-if="!loading">{{ convertResult }} {{ to }}</h1>
    </div>
  </div>
</template>

<style scoped>
.loading-message {
  text-align: center;
  color: gray;
}

.currency-card {
  max-width: 800px;
  width: 100%;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  margin-bottom: 40px;
}

.card-header {
  margin-bottom: 40px;
  display: flex;
}

.card-body {
  display: flex;
  gap: 40px;
  align-items: center;
  padding-bottom: 40px;
  justify-content: center;
  border-bottom: 1px solid var(--color-border);
}

.card-footer {
  text-align: center;
  margin-top: 20px;
}

.card-footer h1 {
  color: white;
}
</style>
