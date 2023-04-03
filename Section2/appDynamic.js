const appDynamic = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },

    methods: {
        boxSelected(box) {
            if(box === 'A') {
                this.boxASelected = !this.boxASelected;
            }
            else if(box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            }
            else {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    },

    // 동적 스타일링 클래스 선언.
    computed: {
        boxCClasses() {
            return {active: this.boxCSelected};
        }
    }
});

appDynamic.mount('#styling');

// 배열을 전달해서 여러 개의 동적 클래스를 선언할 수 있다.