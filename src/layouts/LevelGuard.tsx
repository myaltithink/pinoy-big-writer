// components/LevelGuard.tsx
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type LevelGuardProps = {
  topic: string;
  level: number;
  userProgress: Record<string, boolean[]> | undefined;
  children: ReactNode;
};

const LevelGuard = ({
  topic,
  level,
  userProgress,
  children,
}: LevelGuardProps) => {
  const isUnlocked = userProgress?.[topic]?.[level - 2];

  if (!isUnlocked && level > 1) {
    return <Navigate to={`/games/${topic}`} replace />;
  }

  return children;
};

export default LevelGuard;
