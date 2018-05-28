import * as constants from "./results.constants";

export function playAgainRequest() {
  return {
    type: constants.PLAY_AGAIN_REQUEST,
    playAgainPressed: true
  };
}

export function resetPlayAgainPressed() {
  return {
    type: constants.RESET_PLAY_AGAIN_PRESSED
  };
}