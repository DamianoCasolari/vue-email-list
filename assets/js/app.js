const { createApp } = Vue

createApp({
    data() {
        return {
            url : "https://flynn.boolean.careers/exercises/api/random/mail",
            arrayEmails : [],
            numberOfEmails : 10,
            error: "",
            finishedCycle: false,
        }
    },
    methods: {
    },
    mounted() {
        for (let index = 0; index < this.numberOfEmails; index++) {

            axios.get(this.url).then(response => {
                let email = response.data.response
                this.arrayEmails.push(email)
            }).catch(error => this.error = error.message)
            console.log(index);
            if (index == this.numberOfEmails - 1) {
                this.finishedCycle = true 
            }
        }
        
    },

}).mount('#app')





