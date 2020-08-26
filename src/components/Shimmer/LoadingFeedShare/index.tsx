import React from 'react';

import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import * as S from './styles';

const LoadingFeedShare: React.FC = () => {
    return (
        <S.Container>
            <Panel className="no-shadow">
                <Skeleton className="row-skeleton"/>
                <Skeleton className="row-skeleton"/>
            </Panel>
        </S.Container>
    );
}

export default LoadingFeedShare;