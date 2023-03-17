// Vue로 먼저 해야할 것은 Vue 앱을 생성하는 것.
const app =  Vue.createApp({
    // 데이터 구성
    // 값으로 함수를 갖는다.
    // 객체 반환
    // 반환되는 객체는 Vue가 조정하는 HTML 코드에서 사용 가능
    // 그 자체로 함수이자 객체
    data: function() {
        return {
            courseGoal: 'Finish',
            vueLink: 'https://vuejs.org/'
        };
    },

    // methods : 호출 및 이벤트가 생겼을 경우 실행할 함수 정의
    // 메서드 및 함수로 만들어진 객체
    // 객체에서 정의하는 프로퍼티는 함수여야 한다.
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return 'Learn Vue!';
            }
            return 'Master Vue!';
        }
    }
});

// 어느 구역을 조작할 것인지를 파악해야한다.
app.mount('#user-goal');

// Vue 기능을 이용해 조정 섹션과 상호 작용 가능

// Vue는 보이지 않는 곳에서 HTML 코드를 스캔해 지원되는 기능과 구문을 감지
// 템플릿에서 컨탠츠를 출력하고자 하는 구문은 HTML에서 이중 중괄호로 사용해 출력한다. 이런 구문을 보간법이라 한다.
// 보간법 : data에서 반환하는 객체의 일부분인 프로퍼티를 참조하고 이중 중괄호 부분에 해당 프로퍼티 값이 출력되도록 하는 방법
