import { IBirdData } from '../data/birds.types';

export interface IAppState {
  currentTab: number;
  isDefaultBird: boolean;
  currentData: IBirdData[];
  answerBirdId: number;
  currentClickId: undefined | number;
  readyNextChapter: boolean;
  detailedBird: undefined | IBirdData;
  score: number;
  variantsClickable: boolean;
  isResultScreen: boolean;
}

export type setReadyNextChapterType = (ready: boolean) => void
export type setDetailedBirdType = (bird: IBirdData) => void
export type scoreHandlerType = (result: number) => void
export type setNotClickableType = () => void
export type resetScoreType = () => void
export type goNextChapterType = () => void
