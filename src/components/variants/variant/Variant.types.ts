import { IBirdData } from '../../../data/birds.types';
import {
  scoreHandlerType,
  setDetailedBirdType,
  setNotClickableType,
  setReadyNextChapterType
} from '../../../containers/App.types';

export interface IVariant {
  key: number;
  bird: IBirdData;
  answerId: number;
  setDetailedBird: setDetailedBirdType;
  setNotClickable: setNotClickableType;
  variantsClickable: boolean;
  scoreHandler: scoreHandlerType;
  detailedBird: IBirdData | undefined;
  setReadyNextChapter: setReadyNextChapterType;
  hasDivider: boolean;
}
