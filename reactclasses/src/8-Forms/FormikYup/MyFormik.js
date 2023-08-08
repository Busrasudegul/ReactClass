import React from "react"
import { useFormik } from "formik"

const MyFormik = () => {

    const { handleSubmit, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            hobies: [],
            country: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values, bag) => {
            console.log(values)
            bag.resetForm();
        }
    })

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <br />
            <input
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <br />
            <label>Male</label>
            <input type="radio" name="gender" value="male" onChange={handleChange} />
            <label>Female</label>
            <input type="radio" name="gender" value="female" onChange={handleChange} />
            <label>Football</label>
            <input type="checkbox" name="hobies" value="football" onChange={handleChange} />
            <label>Cinema</label>
            <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange} />
            <label>Photography</label>
            <input type="checkbox" name="hobies" value="Photography" onChange={handleChange} />
            <br></br>
            <select name="country" onChange={handleChange}>
                <option value="">-</option>
                <option value="tr">Turkey</option>
                <option value="en">England</option>
                <option value="usa">USA</option>
            </select>
            <br/>
            <label>Confirm Password</label>
            <br/>
            <input name="password" onChange={handleChange} onBlur={handleBlur}></input>
            <br/>
            <br/>
            <button type="submit">Kayıt ol</button>

        </form>
    )
}

export default MyFormik;