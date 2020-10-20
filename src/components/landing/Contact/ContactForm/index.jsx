import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FormiumForm } from '@formium/react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
//import Recaptcha from 'react-google-recaptcha';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import * as Yup from 'yup';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

// const ContactForm = () => (
//   <StaticQuery query={graphql`
//   {
//     formiumForm(id: {eq: "5f8f41d5c3473a000145fae5"}) {
//       id
//       name
//       slug
//       projectId
//       schema
//       createAt
//       updateAt
//     }
//   }`}
//   render={data => (<FormiumForm data={data.formiumForm} onSubmit={() => console.log('Sent!')} />)}
//   />
// )

// export default ContactForm

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
      recaptcha: '',
      success: false,
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Nome completo necessário'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail necessário'),
      message: Yup.string().required('Mensagem necessária'),
      recaptcha: Yup.string().required('Solucione o captcha primeiro'),
    })}
    onSubmit={async ({ name, email, message }, { setSubmitting, resetForm, setFieldValue }) => {
      try {
        await axios({
          method: 'POST',
          url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            "contact-name": name,
            "contact-email": email,
            "contact-message": message,
          }),
        });
        setSubmitting(false);
        setFieldValue('success', true);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        setFieldValue('success', false);
				alert('Something went wrong, please try again!') // eslint-disable-line
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form>
        { !values.success && (<InputField>
          <Input
            as={FastField}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Full name*"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" />
        </InputField>)}
        {!values.success &&(<InputField>
          <Input
            id="email"
            aria-label="email"
            component="input"
            as={FastField}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>)}
        {!values.success &&(<InputField>
          <Input
            as={FastField}
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            error={touched.message && errors.message}
          />
          <ErrorMessage component={Error} name="message" />
        </InputField>)}
        {!values.success && (
          <InputField>
            <FastField
              component={HCaptcha}
              sitekey={process.env.GATSBY_PORTFOLIO_CAPTCHA_KEY}
              name="recaptcha"
              onVerify={value => setFieldValue('recaptcha', value)}
              onChange={value => setFieldValue('recaptcha', value)}
            />
            <ErrorMessage component={Error} name="recaptcha" />
          </InputField>
        )}
        
        {values.success && (
          <InputField>
            <Center>
              <h4>Sua mensagem foi enviada, entrarei em contato o mais rápido possível!</h4>
            </Center>
          </InputField>
        )}
        {!values.success && (
          <Center>
            <Button secondary type="submit" disabled={isSubmitting}>
              Enviar
            </Button>
          </Center>
        )}
      </Form>
    )}
  </Formik>
);
