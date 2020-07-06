import { Storage } from './Storage'
import { AddStorage } from './AddStorage'

describe('Memento pattern should', () => {

  let storage: Storage;
  let addStorage: AddStorage;

  beforeAll(() => {
    storage = new Storage('start')
    addStorage = new AddStorage(storage);
  })

  test('add new storage', () => {
    addStorage.addStorage('second')
    expect(storage.item).toEqual('second')
  })

  test('restore previous storage', () => {
    addStorage.undo()
    expect(storage.item).toEqual('start')
  })
})