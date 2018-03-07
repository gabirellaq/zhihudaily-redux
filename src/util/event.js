import { EventEmitter } from "events";
require('events').EventEmitter.prototype._maxListeners = 100;
export default new EventEmitter();