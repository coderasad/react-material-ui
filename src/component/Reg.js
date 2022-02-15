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
import {AccountCircle} from "@mui/icons-material";

const Reg = () => {

    const [formData, setFormData] = useState({
        fullName     : "",
        email        : "",
        password     : "",
        divisionName: "",
        gender       : "",
        skill        : [],
        accept       : '',
    });
    const updateFormData          = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const {fullName, email, password, divisionName, gender, skill, accept} = formData;

    const deviation                   = [
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
    const [divisions, setDivisions] = useState('Dk');

    const handleChange = (event) => {
        setDivisions(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        formData.divisionName = divisions;
        console.log(formData, 'formData')
    }

    return (
        <Container maxWidth='lg'>
            <Grid container>
                <Grid item lg={8} sx={{m: 1}}>
                    <Typography variant="h4">Registration Form</Typography>
                    <form>
                        {/*fullName*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <TextField onChange={e => updateFormData(e)} name="fullName" id="name" label="Full Name"
                                       variant="outlined"/>
                        </FormControl>

                        {/*Email*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <TextField onChange={e => updateFormData(e)} name="email" id="email" label="Email"
                                       variant="outlined"/>
                        </FormControl>

                        {/*Password*/}
                        <Box sx={{my: 1, display: 'flex', gap: 2}}>
                            <FormControl style={{width: '50%'}}>
                                <TextField onChange={e => updateFormData(e)} name="password" id="password"
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
                                // onChange={e => updateFormData(e)} name="deviationName"
                                id="deviation"
                                select
                                label="Deviation"
                                value={divisions}
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
                                onChange={e => updateFormData(e)}
                                row
                                aria-labelledby="gender"
                                name="gender"
                                defaultValue="male"
                            >
                                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                            </RadioGroup>
                        </FormControl>

                        {/*skill*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <FormLabel component="legend">Skill</FormLabel>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel control={<Checkbox/>} onChange={e => updateFormData(e)}  name='skill' label="HTML"/>
                                <FormControlLabel control={<Checkbox/>} onChange={e => updateFormData(e)}  name='skill' label="CSS"/>
                                <FormControlLabel control={<Checkbox/>} onChange={e => updateFormData(e)}  name='skill' label="JS"/>
                            </FormGroup>
                        </FormControl>

                        {/*CheckBox*/}
                        <FormControl fullWidth sx={{my: 1}}>
                            <FormControlLabel
                                onChange={e => updateFormData(e)} name="accept"
                                control={<Checkbox />}
                                              label="I accept the Terms of use & Privacy Policy"/>
                        </FormControl>

                        {/*SubmitBtn*/}
                        <Box sx={{my: 1}}>
                            <Button onClick={handleFormSubmit} type="Submit" variant="contained">Submit</Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item lg={12}>
                    <Typography variant="h5">Registration Form Information</Typography>
                    <Box>
                        <Typography variant="body1">Name: </Typography>
                        <Typography variant="body1">Email: </Typography>
                        <Typography variant="body1">Deviation: </Typography>
                        <Typography variant="body1">Gender: </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
        ;
};

export default Reg;