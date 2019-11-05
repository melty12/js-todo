import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter {
  /**
   * @param {TodoListModel[]} [items] 初期アイテム一覧（デフォルトは空の配列）
   */

  constructor(items = []) {
    super();
    this.items = items;
  }

  /**
   * TodoItemsの合計個数を返す
   * @returns {number}
   */
  getTotalCount() {
    return this.items.length;
  }

  /**
   * 表示できる TodoItem の配列
   * @returns {TodoItemModel[]}
   */
  getTodoItems() {
    return this.items;
  }

  /**
   * TodoList の状態が更新されたときに呼び出されるリスナー関数を登録する
   * @param {Function} listener
   */
  onChange(listener) {
    this.addEventListener("change", listener);
  }

  /**
   * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
   */
  emitChange() {
    this.emit("change");
  }

  /**
   * TodoItem を追加する
   * @param {TodoItemMode} todoItem
   */
  addTodo(todoItem) {
    this.items.push(todoItem);
    this.emitChange();
  }
}
