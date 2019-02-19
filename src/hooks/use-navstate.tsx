import { useState } from 'react';

const useNavState = () => {
  const [isOpenState, setIsOpenState] = useState(false);

  const onChange = (e: any) => {
    setIsOpenState(!isOpenState);
  };

  return { isOpenState, onChange };
};

export default useNavState;
