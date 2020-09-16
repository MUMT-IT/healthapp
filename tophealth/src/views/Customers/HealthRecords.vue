<template>
    <div>
        <h1>{{ customer.firstname }} {{ customer.lastname }}</h1>
        <h1>Health Records</h1>
        <h2>Total records is {{ records.length }}</h2>
        <ul v-for="record in records" :key="record.id">
            <li>{{ record.labno }}</li>
        </ul>
        <button @click="loadData">Load data</button>
        <input type="text" v-model="customer.firstname">
        <input type="text" v-model="customer.lastname">
        <button>Submit</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            records: [],
            customer: {}
        }
    },
    methods: {
        loadData: function() {
            let self = this
            axios.get('http://localhost:3001/customers/1/health-records').then(function(resp) {
                self.records = resp.data.records
            })
        },
        loadCustomer: function() {
            let self = this
            axios.get('http://localhost:3001/customers/1').then((resp)=>{
                self.customer = resp.data
            })
        }
    },
    mounted() {
        this.loadData()
        this.loadCustomer()
    }
}
</script>