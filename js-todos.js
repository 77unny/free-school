const todos = [
    {
        name: '자바스크립트 공부하기',
        tags: ['programming', 'javascript'],
        status: 'todo',
        id: 2
    },
    {
        name: '그림 그리기',
        tags: ['picture', 'favorite'],
        status: 'doing',
        id: 3
    },
    {
        name: '복습하기',
        tags: ['picture', 'favorite'],
        status: 'doing',
        id: 4
    },
    {
        name: '밥먹기',
        tags: ['picture', 'favorite'],
        status: 'done',
        id: 1
    }
];
const showAll = () => {
    let all = [];
    todos.forEach(v => {
        all.push(v.status);
    });
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

const showNum = num => {
    let aa = todos
        .filter(v => {
            return v.id == num;
        })
        .map(v => v.name)[0];
    console.log(aa);
};

const show = obj => {
    switch (obj) {
        case 'all':
            showAll();
            break;
        case 'todo':
            showTodo();
            break;
        case Number(obj):
            showNum(obj);
            break;
        default:
            console.log('설정 오류');
    }
};

show('all');
show('todo');
show(2);
show('doing');

/*
현재상태 :  todo: 1개, doing:2개, done:4개
todo리스트 :  총3건 : ' 자바스크립트 공부하기' , 'iOS공부하기'
*/
