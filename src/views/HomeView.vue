<script setup>
import { ref } from 'vue'
import { useCurrencyStore } from '../stores/currency'
import { storeToRefs } from 'pinia'

let from = ref('KZT')
let to = ref('USD')
let amount = ref(0)

const { getCurrency } = useCurrencyStore()
const { transformedSymbols, loading, convertResult, rates, transformedRates } = storeToRefs(
  useCurrencyStore()
)

const formatCurrency = (n) => {
  return n.toFixed(2)
}

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

  <div class="currency-card" v-if="rates">
    <div class="table">
      <div class="table-header">
        <h4>Base currency: 1000 {{ rates.base }}</h4>
        <h4>Date: {{ rates.date }}</h4>
      </div>

      <div class="table-body">
        <div class="row" v-for="(item, n) in transformedRates" :key="n">
          <div class="column">1000 {{ rates.base }}</div>
          <div class="column">{{ formatCurrency(item.value * 1000) }} {{ item.symbol }}</div>
        </div>
      </div>
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

.table-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 10px;
}

.table-header h4 {
  color: white;
}

.table-body .row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid var(--color-border);
  transition: all 0.2s ease;
}

.table-body .row:hover {
  border-color: var(--color-border-hover);
  background: rgba(56, 56, 56, 0.5);
}
</style>
