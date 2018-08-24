import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteMe(todo) {
      todo.deleteRecord();
      console.log('deleting todo ' + todo.id);
    }
  }
});
