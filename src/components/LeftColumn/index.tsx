import React from 'react';

import LoadingProfilePanel from '../Shimmer/LoadingProfilePanel'
import ProfilePanel from './ProfilePanel';
import HashtagPanel from './HashtagPanel';

import * as S from './styles';

const LeftColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <S.Container className="left-column">
      {isLoading ? (
        <LoadingProfilePanel />
      ) : (
          <>
            <ProfilePanel />
            <HashtagPanel />
          </>
        )}
    </S.Container >
  );
};

export default LeftColumn;
