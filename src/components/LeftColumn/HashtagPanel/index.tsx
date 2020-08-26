import React from 'react';

import Panel from '../../Panel';

import * as S from './styles';

const tags = ['rocketseat', 'next-level', 'node', 'react', 'UX', 'UI'];

const HashtagPanel: React.FC = () => {
  return (
    <S.Container>
      <Panel>
        <span className="title">Hashtags seguidas</span>

        {tags.map((item, index) => (
          <span className="tag" key={index}>
            <S.HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </S.Container>
  );
};

export default HashtagPanel;
