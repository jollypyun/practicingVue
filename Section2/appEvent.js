const appEvent = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            lastname: '',
            address: '',
            confirmedName: '',
            welcome: ''
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

        setAddress(sentence, event) {
            this.address = sentence + ' ' + event.target.value;
        },
        // 만약 인자가 존재할 경우 event와 같이 인자를 받는다.

        submitForm() {
            alert('Submitted!');
        },

        confirmInput() {
            this.confirmedName = this.name;
        },

        resetInput() {
            this.welcome = '';
        },

        outputWelcome() {
            if(this.welcome === '') {
                return ''
            }
            return this.welcome + ' ' + 'ready'
        }
    },

    // Vue가 의존성을 인식하고 의존성 중 하나가 변경된 경우에만 재실행.
    // method처럼 객체를 취함. 객체를 값을로 전달해서 연산.
    // 기술적으로는 메서드지만 데이터 프로퍼티처럼 사용한다.
    computed: {
        fullWelcome() {
            console.log('running....');
            if(this.welcome === '') {
                return ''
            }
            return this.welcome + ' ' + 'ready'
        },

        // watch로 한 fullname 로직을 computed에서 하면 이렇게 짧아진다.
        fullname() {
            if(this.name === '' || this.lastname === '') {
                return '';
            }
            return this.name + ' ' + this.lastname;
        }
    },

    // watcher : 의존성 변경이 일어날 때 vue에 실행하도록 지시할 수 있는 함수. computed와 비슷하다.
    // computed, methods와 마찬가지로 객체를 취한다.
    // data나 computed에서 사용한 property를 watcher의 메서드의 이름으로 사용할 수 있다. 충돌 발생하지 않는다.
    // 해당 메서드의 이름이 변경될 때마다 vue에 의해 작동된다.
    // 데이터 프로퍼티를 업데이트를 해야 하지만 항상 업데이트를 하면 안 되는 로직에 있어서는 watch가 유용하다.
    watch: {
        counter(value) { // counter가 변경될 때마다 watcher 메서드는 재실행.   value 외에 두 번째 인수를 받아들일 수 있다. 이 때에는 watch 프로퍼티의 이전 값.
            // 로직 생성
            // this를 사용하지 않아도 된다. watcher는 자동적으로 watch 프로퍼티의 마지막 값을 인수로 가져온다.
            if (value > 50) {
                this.counter = 0;
            }
        },




        // fullname 로직. computed로 하면 더 짧아진다. 이것이 비효율적인 코드
        // name(value) {
        //     if (value === '') {
        //         this.fullname = ''
        //     }
        //     else {
        //         this.fullname = value + ' ' + this.lastname
        //     }
        // },
        // lastname(value) {
        //     if (value === '') {
        //         this.fullname = ''
        //     }
        //     else { 
        //         this.fullname = this.name + ' ' + value;
        //     }
        // }
    }
});



appEvent.mount('#events');