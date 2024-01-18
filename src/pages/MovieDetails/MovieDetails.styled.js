import { List } from '@mui/material';
import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
`;

export const MovieDetailsContainer = styled.div`
  max-width: 600px;
`;

export const MovieGenresContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const ListContainer = styled(List)`
  display: flex;
  justify-content: space-between;
`;
