import { createContext } from 'react';

export const UserContext = createContext<{name: string, email: string} | null>(null);
