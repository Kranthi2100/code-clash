list = {};

function on(event, fn) {
  const eventList = list[event] || [];
  eventList.push(fn);
  list[event] = eventList;
}

function emit(event) {
  const eventList = list[event] || [];
  eventList.forEach(fn => fn());
}

on('some', () => console.log('some'));
on('some', () => console.log('some'));
on('some', () => console.log('some'));
on('some2', () => console.log('some2'));
on('some2', () => console.log('some2'));
on('some2', () => console.log('some2'));
on('some2', () => console.log('some2'));
on('some3', () => console.log('some3'));
on('some3', () => console.log('some3'));
on('some3', () => console.log('some3'));
on('some4', () => console.log('some4'));

emit('some2');

console.log(list);