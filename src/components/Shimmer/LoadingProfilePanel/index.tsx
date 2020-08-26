import React from 'react';

import * as S from './styles';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

const LoadingProfilePanel: React.FC = () => {
    return (
        <S.Container>
            <Panel className="no-shadow">
                <Skeleton className="bg-skeleton" />
                <span>
                    <Skeleton className="avatar-skeleton" />
                    <Skeleton className="row-skeleton" />
                    <Skeleton className="row-skeleton" />
                </span>
            </Panel>
        </S.Container>
    );
}

export default LoadingProfilePanel;