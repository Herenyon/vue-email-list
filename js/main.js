'use strict'

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: [],
            
        }
    },
    beforeMount() {
        for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                
                this.message.push(response.data.response) ;
                console.log(this.message);
            })

        }
    }
}).mount('#app');

