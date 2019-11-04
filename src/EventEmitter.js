export class EventEmitter {
  constructor() {
    this._listerner = new Map();
  }

  addEventListener(type, listener) {
    if (!this._listerner.has(type)) {
      this._listerner.set(type, new Set());
    }
    const listenerSet = this._listerner.get(type);
    listenerSet.add(listener);
  }

  emit(type) {
    const listenerSet = this._listerners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(listener => {
      listener.call(this);
    });
  }

  removeEventListenerSet(type, listener) {
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(ownListener => {
      if (ownListener === listener) {
        listenerSet.delete(listener);
      }
    });
  }
}
