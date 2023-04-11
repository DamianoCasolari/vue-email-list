const { createApp } = Vue

createApp({
    data() {
        return {
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            arrayEmails: [],
            numberOfEmails: 10,
            error: "",
            timeLeft: "",
            title: "Create 10 emails randomly"

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
                        if (index == this.numberOfEmails - 1) { this.timeLeft = performance.now() - start; }
                    })
                    .catch(error => this.error = error.message);

                console.log(`Iterazione numero ${index}`);

            }
        },
        scaleLetters() {
            let container_h1 = document.querySelector("h1")
            const arrayLetters = this.title.split("")
            //   arrayLetters.forEach((string) => {
            //     container_h1 += `<span class="scaleLetter"> ${string}</span>`
            //   })
            arrayLetters.forEach((string) => {
                const span = document.createElement("span");
                span.textContent = string;
                // if (string != " ") {
                //     span.classList.add("scaleLetter");
                // }
                container_h1.appendChild(span);

            });
            const arrayTotalSpan = document.querySelectorAll("h1 span")
            arrayTotalSpan.forEach((span) => {
                span.addEventListener("mouseover", function (e) {
                    if (e.target != " ") {
                        span.classList.add("scaleLetter")
                        span.previousElementSibling.classList.add("scaleLetter2")
                        span.previousElementSibling.previousElementSibling.classList.add("scaleLetter5")
                        span.nextElementSibling.classList.add("scaleLetter3")
                        span.nextElementSibling.nextElementSibling.classList.add("scaleLetter4")
                    }
                })
                span.addEventListener("mouseout", function (e) {
                    if (e.target != " ") {
                        span.classList.remove("scaleLetter")
                        span.previousElementSibling.classList.remove("scaleLetter2")
                        span.previousElementSibling.previousElementSibling.classList.remove("scaleLetter5")
                        span.nextElementSibling.classList.remove("scaleLetter3")
                        span.nextElementSibling.nextElementSibling.classList.remove("scaleLetter4")

                    }
                })
            })
        }
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
        this.scaleLetters()
        this.createEmails()
        // this.hourglasstime()
    },

}).mount('#app')





