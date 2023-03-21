'use strict'

const {createApp} = Vue;

createApp({
    data(){
        return{
            message: ''
        }
    },
    beforeMount(){

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) =>{
        console.log(response.data);
        this.message = response.data.response;
    })
    }
}).mount('#app');

