import { createContext, useState, ReactNode } from 'react';

// Definice typu pro kontext
interface SettingContextProps {
  first: string;
  second: string;
  third: string;
  fourth: string;
  cardHolder: string;
  cardValid: string;
  handleChangeFirst: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSecond: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeThird: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeFourth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeCardHolder: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeCardValid: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Definice typu pro komponentu ContextProvider
interface ContextProviderProps {
  children: ReactNode;
}

// Vytvoření kontextu s výchozí hodnotou undefined
export const SettingContext = createContext<SettingContextProps | undefined>(
  undefined,
);

// ContextProvider komponenta
export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  // Definování stavů
  const [first, setFirst] = useState<string>('');
  const [second, setSecond] = useState<string>('');
  const [third, setThird] = useState<string>('');
  const [fourth, setFourth] = useState<string>('');
  const [cardHolder, setCardHolder] = useState<string>('');
  const [cardValid, setCardValid] = useState<string>('');

  // Funkce pro změnu stavu
  const handleChangeFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
    /^\d*$/.test(event.target.value.trim()) && setFirst(event.target.value);
  };

  const handleChangeSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
    /^\d*$/.test(event.target.value.trim()) && setSecond(event.target.value);
  };

  const handleChangeThird = (event: React.ChangeEvent<HTMLInputElement>) => {
    /^\d*$/.test(event.target.value.trim()) && setThird(event.target.value);
  };

  const handleChangeFourth = (event: React.ChangeEvent<HTMLInputElement>) => {
    /^\d*$/.test(event.target.value.trim()) && setFourth(event.target.value);
  };

  const handleChangeCardHolder = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCardHolder(event.target.value);
  };

  const handleChangeCardValid = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 4) {
      value = value.slice(0, 4);
    }
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setCardValid(value);
  };

  return (
    <SettingContext.Provider
      value={{
        first,
        handleChangeFirst,
        second,
        handleChangeSecond,
        third,
        handleChangeThird,
        fourth,
        handleChangeFourth,
        cardHolder,
        handleChangeCardHolder,
        cardValid,
        handleChangeCardValid,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};
