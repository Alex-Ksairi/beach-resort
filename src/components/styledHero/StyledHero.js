// importing styled components
import styled from "../../../node_modules/styled-components";

// importing a default backgroundImage in case of an error or missing data
import defaultBackgroundImage from '../../images/room-12.jpeg';

let StyledHero = styled.header`
    min-height: 60vh;
    background: url(${props => ( props.img ? props.img : defaultBackgroundImage )}) center/cover no-repeat;
  
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default StyledHero;
