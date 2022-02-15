import React, {useState} from 'react';
import {
    Box, Button, Checkbox,
    Container,
    FormControl,
    FormControlLabel, FormGroup,
    FormLabel,
    Grid,
    MenuItem, Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import {useForm} from 'react-hook-form';

const TestHook = () => {
    const [showForm, setShowForm]                = useState(false);
    const [formData, setFormData] = useState({
        fullName    : "",
        email       : "",
        password    : "",
        divisionName: "Dk",
        gender      : "",
        skill       : [],
        accept      : false,
    });
    const {fullName, email, password, divisionName, gender, skill, accept} = formData;
    const deviation = [
        {
            value: 'Dk',
            label: 'Dhaka',
        },
        {
            value: 'Ku',
            label: 'Khulna',
        },
        {
            value: 'St',
            label: 'Sylhet',
        },
    ];

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container maxWidth='lg'>
            <Grid container>
                <Grid item lg={8} sx={{m: 1}}>
                    <Typography variant="h4">Registration Form React Hook</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue="test" {...register("example")} />
                        <input {...register("exampleRequired", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" />
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
        ;
};

export default TestHook;