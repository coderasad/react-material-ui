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

const FormHook = () => {
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
    const handleChange   = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    };

    const { register, handleSubmit } = useForm();
    const updateCheckBox = (event) => {
        if (event.target.checked) {
            skill.push(event.target.value)
        } else {
            skill.splice(skill.indexOf(event.target.value), 1)
        }
        setFormData({
            ...formData,
            [event.target.name]: [...skill]
        });
    };

    const onSubmit = data =>
    {
        data.skill= formData.skill
        setFormData(data)
        console.log(data);
        console.log(formData,'formData');
        setShowForm(true);
    }

    return (
        <Container maxWidth='lg'>
            <Grid container>
                <Grid item lg={8} sx={{m: 1}}>
                    <Typography variant="h4">Registration Form React Hook</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/*fullName*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <TextField {...register("fullName", { required: true })} name="fullName" id="name" label="Full Name"
                                       variant="outlined"/>
                        </FormControl>

                        {/*Email*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <TextField {...register("email")} name="email" id="email" label="Email"
                                       variant="outlined"/>
                        </FormControl>

                        {/*Password*/}
                        <Box sx={{my: 1, display: 'flex', gap: 2}}>
                            <FormControl style={{width: '50%'}}>
                                <TextField name="password" id="password"
                                           type="password" label="Password" variant="outlined"/>
                            </FormControl>
                            <FormControl style={{width: '50%'}}>
                                <TextField id="re-type-password" type="password" label="Re-type Password"
                                           variant="outlined"/>
                            </FormControl>
                        </Box>

                        {/*Deviation*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <TextField
                                id="deviation"
                                select
                                label="Deviation"
                                value={divisionName}
                                name='divisionName'
                                {...register('divisionName')}
                                onChange={handleChange}
                            >
                                {deviation.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>

                        {/*Gender*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <FormLabel id="gender">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="gender"
                                name="gender"
                                defaultValue="male"

                            >
                                <FormControlLabel   {...register('gender')} value="female" control={<Radio/>} label="Female"/>
                                <FormControlLabel  {...register('gender')} value="male" control={<Radio/>} label="Male"/>
                                <FormControlLabel  {...register('gender')} value="other" control={<Radio/>} label="Other"/>
                            </RadioGroup>
                        </FormControl>

                        {/*skill*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <FormLabel component="legend">Skill</FormLabel>
                            <div>
                                <FormControlLabel
                                    name='skill'
                                    value='HTML'
                                    onChange={e => updateCheckBox(e)}
                                    control={<Checkbox/>}
                                    label="HTML"/>
                                <FormControlLabel
                                    name='skill'
                                    value='CSS'
                                    onChange={e => updateCheckBox(e)}
                                    control={<Checkbox/>}
                                    label="CSS"/>
                                <FormControlLabel
                                    name='skill'
                                    value='JS'
                                    onChange={e => updateCheckBox(e)}
                                    control={<Checkbox/>}
                                    label="JS"/>
                            </div>
                        </FormControl>

                        {/*CheckBox*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <FormControlLabel
                                name='accept'
                                control={<Checkbox/>}
                                {...register('accept')}
                                label="I accept the Terms of use & Privacy Policy"/>

                        </FormControl>

                        {/*SubmitBtn*/}
                        <Box sx={{my: 1}}>
                            <Button type="Submit" variant="contained">Submit</Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item lg={12}>
                    <Typography variant="h5">Registration Form Information</Typography>
                    {showForm ?
                        <Box>
                            <Typography variant="body1">Name: {fullName} </Typography>
                            <Typography variant="body1">Email: {email}</Typography>
                            <Typography variant="body1">Deviation: {divisionName}</Typography>
                            <Typography variant="body1">Gender: {gender}</Typography>
                            <Typography variant="body1">Skill: {skill.join()}</Typography>
                            <Typography variant="body1">Accept: {accept ? "true" : "false"}</Typography>
                        </Box>
                        :
                        'No data'
                    }

                </Grid>
            </Grid>
        </Container>
    )
        ;
};

export default FormHook;