import {Container, Title, Button} from "./index_styles";

function Landing(){
    return<Container>
        <Title>
            Grow A <span>Baby</span>
        </Title>

        <Button to="/grow">Start growing</Button>
    </Container>
}

export default Landing;