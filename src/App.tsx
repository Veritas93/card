import { Card } from "./components/Card.styled";
import { Image } from "./components/Imega.styled";
import { Btn1, Btn2 } from "./components/Btn.styled";
import styled from "styled-components";
import { myTheme } from "./styles/Them.styled";
function App() {
  return (
    <div className="App">
      <Fon>
        <Card>
          <Image src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TffTGaFCAOOwDs8B9U7UzjJMNmHs5GZQR-egKn3ti0oM994pfJG4xCs2a-jDpo83DI7aF7ZF0KLC9gf6gcKBpb8IyXPXPZeC6AmjhFs-zM8b3N5Jk6v1fNevWsrYaQ3iBs8b7PiziWrUFXO7nVEGFU9o-~dpCOosAHyH9eBzKexI0gAGVFXfxgqaH8CVqytOakZJhIG5QaICv~31AcecieOJJIVFGWJWcszuBMLzwRPIeiETKTGYE4QKB0jk2Ykb-chcsCK~1j4Oy0i9FqolNy9uBVWWkW~aN1olenqCWDopK39BsFGa4rLUmsN5Vu735s0xCSs7cJPKQ2cwGwz~Eg__" />
          <h1>Headline</h1>
          <p>
            Faucibus. Faucibus. Sit sit sapien sit <br></br>tempusrisu ut. Sit
            molestie ornare in venen.
          </p>
          <Btn1>See more</Btn1>
          <Btn2>Save</Btn2>
        </Card>
      </Fon>
    </div>
  );
}

const Fon = styled.div`
  height: 1170px;
  background-color: ${myTheme.colors.grey.light};
`;

export default App;
