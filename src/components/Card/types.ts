export type TaskCardProps = {
  id: string;
  title: string;
  isComplete: boolean;
  priority: string;
  onToggle?: () => void;
  onDelete?: () => void;
  onPress?: () => void;
};
