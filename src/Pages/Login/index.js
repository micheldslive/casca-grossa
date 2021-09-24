import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {
  LoginForm,
  LoginWrapper,
  LoginContainer,
  Form,
  Group,
  Label,
  Input,
  LabelCheck,
  Checkbox,
  HR,
  Link,
  sign,
  center,
  flex,
  SignIn,
  SignUp,
  Radio,
  RadioLabel,
} from "./styles";

class RenderForm extends Component {
  state = {
    SignIn: null,
    SignUp: { SignUp },
  };

  handleClick = (num, id) => {
    num === 1 ? 
    this.setState({ SignIn: null, SignUp: id }) : this.setState({ SignIn: id, SignUp: null });
  };

  render() {
    return (
      <LoginForm>
        <LoginWrapper>
          <Group flex={flex}>
            <Radio id="SignIn" type="Radio" name="sign" readOnly={true} checked={this.state.SignIn == null ? "checked" : ""}/>
            <LabelCheck htmlFor="SignIn" RadioLabel={RadioLabel} onClick={() => this.handleClick(1, { SignIn })}> Entre</LabelCheck> ou 
            <Radio id="SignUp" type="Radio" name="sign"/>
            <LabelCheck htmlFor="SignUp" RadioLabel={RadioLabel} onClick={() => this.handleClick(2, { SignUp })}> Cadastre-se</LabelCheck>
          </Group>
          <LoginContainer>
            <Form SignIn={this.state.SignIn}>
              <Group>
                <Label>Usuário</Label>
                <Input id="luser" type="text" />
              </Group>
              <Group>
                <Label>Senha</Label>
                <Input id="lpass" type="password" data-type="password" />
              </Group>
              <Group flex={flex}>
                <Checkbox id="check" type="checkbox" />
                <LabelCheck htmlFor="check" no-padding> Mantenha-me conectado</LabelCheck>
              </Group>
              <Group>
                <Input type="submit" value="Entrar" sign={sign} />
              </Group>
              <HR />
              <Group center={center}>
                <Link href="#forgot">Esqueceu sua senha?</Link>
              </Group>
            </Form>

            <Form SignUp={this.state.SignUp}>
              <Group>
                <Label>Usuário</Label>
                <Input id="user" type="text" />
              </Group>
              <Group>
                <Label>Senha</Label>
                <Input id="pass" type="password" data-type="password" />
              </Group>
              <Group>
                <Label>Repetir Senha</Label>
                <Input id="rpass" type="password" data-type="password" />
              </Group>
              <Group>
                <Label>E-mail</Label>
                <Input id="email" type="text" />
              </Group>
              <Group>
                <Label>&nbsp;</Label>
              </Group>
              <Group>
                <Input type="submit" value="Cadastrar" sign={sign} />
              </Group>
              <HR />
              <Group center={center}>
                <Link onClick={() => this.handleClick(1, { SignIn })}>Já é membro?</Link>
              </Group>
            </Form>
          </LoginContainer>
        </LoginWrapper>
      </LoginForm>
    );
  }
}

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login of the Page." />
      </Helmet>
      <RenderForm />
    </div>
  );
};
