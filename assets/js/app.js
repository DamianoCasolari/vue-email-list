const { createApp } = Vue

createApp({
    data() {
        return {
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            arrayEmails: [],
            numberOfEmails: 10,
            error: "",
            timeLeft: "",

        }
    },
    methods: {
        createEmails() {
            let start = performance.now();
            for (let index = 0; index < this.numberOfEmails; index++) {

                axios.get(this.url)
                    .then(response => {
                        let email = response.data.response;
                        console.log(email);
                        this.arrayEmails.push(email);
                        if (index == this.numberOfEmails - 1)
                        {this.timeLeft = performance.now() - start;}
                    })
                    .catch(error => this.error = error.message);

                console.log(`Iterazione numero ${index}`);

            }
        },
        // hourglasstime(){
        //     const hourglassElement = document.querySelectorAll('.hourglass_container div')

        //     let visibleIndex = 0;
        //     setInterval(() => {
        //         if(visibleIndex = hourglassElement.length ) { 
        //       hourglassElement[visibleIndex].classList.remove('hourglass_visible');
        //       visibleIndex++
        //       hourglassElement[visibleIndex].classList.add('hourglass_visible');
        //         }
        //     }, 1000);
        // }
    },
    mounted() {
        this.createEmails()
        // this.hourglasstime()
    },

}).mount('#app')





