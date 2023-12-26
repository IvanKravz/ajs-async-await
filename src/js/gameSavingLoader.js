import read from "./reader"
import json from "./parser"
import GameSaving from './gameSaving'

export default class GameSavingLoader { 
  static async load() {
    try {
      const reader = await read();
      const jsonObj = await json(reader);
      return await new GameSaving(jsonObj);
    } catch (error) {
        return error
    }
  }
}
