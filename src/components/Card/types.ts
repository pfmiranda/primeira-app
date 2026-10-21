export type TaskCardProps = {
  id: string;
  title: string;
  isComplete: boolean;
  onToggle?: () => void;
  onDelete?: () => void;
  onPress?: () => void;
};