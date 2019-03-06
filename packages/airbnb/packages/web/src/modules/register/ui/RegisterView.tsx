import * as React from 'react'

import {
    Icon, Button, Form as FormA
} from 'antd';
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";

import { validUserSchema } from '@abb/common';
import { InputField } from '../../shared/InputField';

const FormItem = FormA.Item;

interface FormValues {
    email: string;
    password: string;
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {



    render() {
        /**
         * Helper for instead of using this:
         *
         * <FormItem help={touched.email && errors.email ? errors.email : ""} validateStatus={touched.email && errors.email ? "error" : ""}>
         *
         * Just use:
         *
         * <FormItem help={errorHelper("email", true)} validateStatus={errorHelper("email")}>
         *
         * @param field | String name of the field to be validated
         * @param showTextError | boolean If we want to show the error as a text or only show the color.
         * help in andDesign uses the text, and validateStatus the style
         */

        return (
            <Form>
                <div style={{ width: 400, margin: "auto" }}>
                    {/* <FormItem help={touched.email && errors.email ? errors.email : ""} validateStatus={touched.email && errors.email ? "error" : ""}> */}
                    <Field
                        name="email"
                        prefix={
                            <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any
                        }
                        placeholder="Email"
                        component={InputField}
                    />
                    <Field
                        name="password"
                        type="password"
                        component={InputField}
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
                        placeholder="Password"
                    />
                    <FormItem>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Register
                         </Button>
                    </FormItem>
                    <FormItem>
                        Or <a href="">login now!</a>
                    </FormItem>
                </div>
            </Form>
        )
    }
}



export const RegisterView = withFormik<Props, FormValues>({
    validationSchema: validUserSchema,
    // validateOnBlur: false,
    // validateOnChange: false,
    mapPropsToValues: (props) => ({ email: "", password: "" }),
    handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors)
        }
    }
})(C);