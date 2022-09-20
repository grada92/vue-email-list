console.log('JS OK')

const app = new Vue (
    {
        el: '#app',
        data: {
            emails : "",
        },
        mounted(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                const result = response.data
            })
        }
    }
)