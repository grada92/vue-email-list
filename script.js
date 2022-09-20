console.log('JS OK')

const app = new Vue (
    {
        el: '#app',
        data: {
            emails : [],
        },
        mounted() {
            
            
            for(let i = 0; i < 10; i++)
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const result = response.data
                console.log(result.response)
                
                this.emails.push(result.response)
            })  
        }
    }
);