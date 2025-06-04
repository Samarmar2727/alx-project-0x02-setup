export interface CardProps {
   title: string;
   content: string 
}

export interface PostModalProps {
  onSubmit: (data: { title: string; content: string }) => void;
}

export interface  ButtonProps {
  size : "small"| "medium"| "large";
  shape :"rounded-sm"| "rounded-md"| "rounded-full";
  children :React.ReactNode;
}