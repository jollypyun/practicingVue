// 앱을 구성하는 JS 객체를 취한다.
// data 프로퍼티 : 해당 앱으로 전달할 객체. 함수를 값으로 가지고 return이 필요하다.
// method : 메서드와 함수를 정의

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        }
    }
}).mount('#app'); // Vue 앱이 페이지의 어느 부분에서 적용이 되어야 하는지 알려줘야 한다.



// Vanila JS 코드

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl= documnet.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);