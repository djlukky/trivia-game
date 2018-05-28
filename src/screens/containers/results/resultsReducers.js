import * as constants from "./results.constants";

export const _INITIAL_STATE_ = {
  playAgainPressed: false
};

export default function (state: any = _INITIAL_STATE_, action: Function) {
  switch (action.type) {
    case constants.PLAY_AGAIN_REQUEST:
      return {
        ...state,
        playAgainPressed: action.playAgainPressed
      };
    case constants.RESET_PLAY_AGAIN_PRESSED:
      return {
        ...state,
        playAgainPressed: false
      };
    default:
      return state;
  }
}