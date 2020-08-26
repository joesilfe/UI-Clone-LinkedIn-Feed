import React from 'react';

import * as S from './styles';
import Skeleton from '../../Skeleton';

const LoadingTrendingPanel: React.FC = () => {

    const Row = () => (
        <div className="row">
            <Skeleton className="square-skeleton white" />

            <div className="column">
                <Skeleton className="row-skeleton white" />
                <Skeleton className="row-skeleton white" />
            </div>
        </div>
    );

    return (
        <S.Container>
            <Row />
            <Row />
            <Row />
        </S.Container>
    );
}

export default LoadingTrendingPanel;