import React, {useRef} from 'react';
import {Formik} from 'formik';
import {Text, TextInput, View, Button} from 'react-native';
import * as Yup from 'yup';

function App() {
  const user = useRef(null);
  const password = useRef(null);

  const FormSchema = Yup.object().shape({
    user: Yup.string().required('Campo obrigatório'),
    password: Yup.string()
      .required('Campo obrigatório')
      .min(8, 'Digite pelo menos 8 caracteres'),
  });

  return (
    <Formik
      initialValues={{
        user: '',
        password: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
      validationSchema={FormSchema}>
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        setFieldTouched,
      }) => (
        <View>
          <Text>Usuário</Text>
          <TextInput
            ref={user}
            value={values.user}
            onChangeText={handleChange('user')}
            onBlur={() => setFieldTouched('user', true)}
          />
          {errors.user && touched.user && <Text>{errors.user}</Text>}
          <Text>Senha</Text>
          <TextInput
            ref={password}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password', true)}
          />
          {errors.password && touched.password && (
            <Text>{errors.password}</Text>
          )}
          <Button title="Entrar" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

export default App;
