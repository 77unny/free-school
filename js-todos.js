const todos = [
    {
        name: '자바스크립트 공부하기',
        tags: ['programming', 'javascript'],
        status: 'todo',
        id: 12123123
    },
    {
        name: '그림 그리기',
        tags: ['picture', 'favorite'],
        status: 'doing',
        id: 312323
    },
    {
        name: '복습하기',
        tags: ['picture', 'favorite'],
        status: 'doing',
        id: 14451
    },
    {
        name: '밥먹기',
        tags: ['picture', 'favorite'],
        status: 'done',
        id: 14451
    }
];
const showAll = () => {
    let all = []
    todos.forEach((v)=>{
        all.push(v.status);
    })
    let todo = all.filter(v => v === 'todo');
    let doing = all.filter(v => v === 'doing');
    let done = all.filter(v => v === 'done');

    return console.log(
        `현재상태 : todo ${todo.length}개, doing ${doing.length}개, done ${done.length}개`
    );
};

const showTodo = () => {
    let todo = todos.map(v => v.name);
    return console.log(`todo리스트 : 총 ${todo.length}건 : ${todo}`);
};

const show = obj => {
    switch (obj) {
        case 'all':
            showAll();
            break;
        case 'todo':
            showTodo();
            break;
        default:
            console.log('설정 오류');
    }
};

show('all');
show('todo');

/*
현재상태 :  todo: 1개, doing:2개, done:4개
todo리스트 :  총3건 : ' 자바스크립트 공부하기' , 'iOS공부하기'
*/
