import { TodoItemView } from "./TodoItemView.js";
import { element } from "./html-util.js";

export class TodoListView {
  /**
   * `todoItems` に対応する Todo リストの HTML 要素を作成して返す
   * @param {TodoItemModel[]} todoItems TodoItemModel の配列
   * @param {function({id: string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id: string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element} TodoItemModel の配列に対応したリストの HTML 要素
   */
  createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
    const todoListElement = element`<ul />`;
    todoItems.forEach(todoItem => {
      const todoItemView = new TodoItemView();
      const todoItemElement = todoItemView.createElement(todoItem, {
        onUpdateTodo,
        onDeleteTodo
      });
      todoListElement.appendChild(todoItemElement);
    });
    return todoListElement;
  }
}
