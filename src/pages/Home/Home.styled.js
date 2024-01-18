import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1976d2;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledContainer = styled(Container)`
  margin-top: 20px;
`;
