import { IBirdData } from '../../data/birds.types';
import {
  scoreHandlerType,
  setDetailedBirdType,
  setNotClickableType,
  setReadyNextChapterType
} from '../../containers/App.types';

export interface IVariants {
  currentData: IBirdData[];
  answerId: number;
  setReadyNextChapter: setReadyNextChapterType;
  setDetailedBird: setDetailedBirdType;
  scoreHandler: scoreHandlerType;
  currentClickId: number | undefined;
  setNotClickable: setNotClickableType;
  variantsClickable: boolean;
  detailedBird: IBirdData | undefined;
}
