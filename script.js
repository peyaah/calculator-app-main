const App = {
    data() {
        return {
            output: '', 
            
        }
    },
    methods: {
        inputValue(val){
            this.output +=val;
        },
        equalValue(){
            
            console.log(cookieValue);
        },
        resetValue(){
            this.output = '';
        }
    },
    
   
};
Vue.createApp(App).mount('#app');