export interface Challenge{
  description: string;
  difficulty: string;
  type: string;
  repeatable?: boolean;
  parameters?: Parameters;
}

interface Parameters{
  typeX: string;
  limitX?: any|NumericalLimits|DifficultyLimits;
  typeY?: string;
  limitY?: any|NumericalLimits|DifficultyLimits;
}

interface DifficultyLimits{
  easy : NumericalLimits;
  medium: NumericalLimits;
  hard: NumericalLimits;
}

interface NumericalLimits{
  min: number;
  max: number;
}