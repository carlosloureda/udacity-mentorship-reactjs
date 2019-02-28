import * as React from 'react'

import {
    Form, Icon, Input, Button
} from 'antd';
import { withFormik, FormikErrors, FormikProps } from "formik";

import { validUserSchema } from '@abb/common';

const FormItem = Form.Item;

interface FormValues {
    email: string;
    password: string;
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {



    render() {
        const { values, handleChange, handleBlur, handleSubmit, touched, errors } = this.props;

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
        const errorHelper = (field: string, showTextError?: boolean) => {
            return touched[field] && errors[field] ? (showTextError ? errors[field] : "error") : ""
        }
        return (
            <form onSubmit={handleSubmit}>
                <div style={{ width: 400, margin: "auto" }}>
                    {/* <FormItem help={touched.email && errors.email ? errors.email : ""} validateStatus={touched.email && errors.email ? "error" : ""}> */}
                    <FormItem help={errorHelper("email", true)} validateStatus={errorHelper("email")}>
                        <Input
                            name="email"
                            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FormItem>
                    <FormItem help={errorHelper("password", true)} validateStatus={errorHelper("password")}>
                        <Input
                            name="password"
                            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </FormItem>
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
            </form>
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