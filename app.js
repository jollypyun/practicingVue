// Vue로 먼저 해야할 것은 Vue 앱을 생성하는 것.
const app =  Vue.createApp({
    // 데이터 구성
    // 값으로 함수를 갖는다.
    // 객체 반환
    // 반환되는 객체는 Vue가 조정하는 HTML 코드에서 사용 가능
    // 그 자체로 함수이자 객체
    data: function() {
        return {
            courseGoalA: 'Finish',
            courseGoalB: '<h2>Master</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    /* 
        문자열 안에 html 코드를 집어넣고자 하는 경우 그냥 넣으면 그대로 출력될 것이다.
        XSS 공격으로부터 보호하기 위해서 집어넣은 것이다.
        만약 HTML 코드를 집어넣고 싶은 경우에는 v-html 디렉티브를 이용하여 사용한다.
        v-html : 해당 요소는 HTML로 인식해야 한다라는 것을 알린다.
    */


    // methods : 호출 및 이벤트가 생겼을 경우 실행할 함수 정의
    // 메서드 및 함수로 만들어진 객체
    // 객체에서 정의하는 프로퍼티는 함수여야 한다.
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA;
                /*  
                    만약 courseGoalA를 반환하고자 한다면
                    return courseGoalA 가 아닌
                    return this.courseGoalA 로 반환.
                    courseGoalA는 변수나 상수가 아닌 data의 프로퍼티이기 때문에 찾을 수 없다고 한다.
                    Vue는 data객체에서 반환하는 데이터 전체를 가져다가 병합해서 전역 Vue 인스턴스 객체로 만든다.
                    이 인스턴스 객체는 this 키워드를 사용하여 접근 가능
                */
            }
            return this.courseGoalB;
        }
    }
});

// 어느 구역을 조작할 것인지를 파악해야한다.
app.mount('#user-goal');

// Vue 기능을 이용해 조정 섹션과 상호 작용 가능

// Vue는 보이지 않는 곳에서 HTML 코드를 스캔해 지원되는 기능과 구문을 감지
// 템플릿에서 컨탠츠를 출력하고자 하는 구문은 HTML에서 이중 중괄호로 사용해 출력한다. 이런 구문을 보간법이라 한다.
// 보간법 : data에서 반환하는 객체의 일부분인 프로퍼티를 참조하고 이중 중괄호 부분에 해당 프로퍼티 값이 출력되도록 하는 방법


// 단, v-html을 기본 설정으로 사용하게 된다면 이중 중괄호에 내장된 XSS 공격에 대한 방어 기능을 회피하게 되어 보안이 위험해진다.