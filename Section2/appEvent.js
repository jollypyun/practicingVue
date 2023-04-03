const appEvent = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            welcome: '',
            confirmedName: ''
        }
    },

    methods: {
        addNumber(num) {
            this.counter = this.counter + num
        },
        addCounter() {
            this.counter++;
        },
        reduceNumber(num) {
            this.counter= this.counter - num
        },
        
        setName(event) {
            this.name = event.target.value;
        },
        // input을 집어넣고 이름을 변경시키고자 할 때 인자로는 event를 받는다. html 코드 상에서는 인자로 넣지 않는다.

        setWelcome(event, sentence) {
            this.welcome = event.target.value + ' ' + sentence;
        },
        // 만약 인자가 존재할 경우 event와 같이 인자를 받는다.

        submitForm() {
            alert('Submitted!');
        },

        confirmInput() {
            this.confirmedName = this.name;
        }
    }
});

appEvent.mount('#events');