import { createContext, useContext } from "react";
import type { IUser } from "../../types/user.type";

interface AuthContextType {
  currentUser: IUser | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>({
  currentUser: null,
  loading: false,
});

export function useAuth() {
  return useContext(AuthContext);
}
