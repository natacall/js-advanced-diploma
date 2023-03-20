import GameStateService from '../js/GameStateService';
import GamePlay from '../js/GamePlay';
import GameController from '../js/GameController';

const storage = '';
const gamePlay = new GamePlay();
const stateService = new GameStateService(storage);
const gameController = new GameController(gamePlay, stateService);

jest.mock('../js/GamePlay');

test('Тест', () => {
  jest.resetAllMocks();
  gameController.gamePlay.cellClickListeners = [1, 2, 3];
  GameController.clearLocalStorage = jest.fn(() => {});
  gameController.loadGame();
  expect(gameController.gamePlay.showPopup).toBeCalledWith('Ошибка загрузки: "Invalid state"');
});