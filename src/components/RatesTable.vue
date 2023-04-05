<script setup>
import { storeToRefs } from 'pinia'
import { useCurrencyStore } from '../stores/currency'

const { rates, transformedRates } = storeToRefs(useCurrencyStore())

const formatCurrency = (n) => {
  return n.toFixed(2)
}
</script>

<template>
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
