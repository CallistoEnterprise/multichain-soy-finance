import { PancakeTheme } from "../..";

export interface ThemedProps {
  theme: PancakeTheme;
}

export type Status = "past" | "current" | "future";

export interface StatusProps extends ThemedProps {
  theme: PancakeTheme;
  status: Status;
}

export interface StepProps {
  index: number;
  status: Status;
  numberOfSteps?: number;
}
