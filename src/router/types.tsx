export type Routes = {
  [key: string]: {
    id: string;
    name: string;
    path: string;
    element: React.FC;
    isPublic: boolean;
  };
};
