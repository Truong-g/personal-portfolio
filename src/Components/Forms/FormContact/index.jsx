import { useState } from "react";

import classNames from "classnames/bind";
import styles from './formcontact.module.css'

import { IoIosSend } from 'react-icons/io'

import Button from "~/Components/Button";

var cx = classNames.bind(styles);



function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}


function FormContact() {

    const [objError, setObjError] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const validateForm = () => {

        let isValid = true
        if (name.length === 0 || name === "") {
            setObjError(prev => ({
                ...prev,
                name: "The name must not be emty"
            }))
            isValid = false

        }
        if (subject.length === 0 || subject === "") {
            setObjError(prev => ({
                ...prev,
                subject: "The subject must not be emty"
            }))
            isValid = false
        }
        if (message.length === 0 || message === "") {
            setObjError(prev => ({
                ...prev,
                message: "The mesage must not be emty"
            }))
            isValid = false
        }
        if (!validateEmail(email)) {
            setObjError(prev => ({
                ...prev,
                email: "Invalid email"
            }))
            isValid = false
        }

        return isValid
    }

    const handleSubMit = (e) => {
        e.preventDefault()
        e.target.reset()
        const isValids = validateForm()
        if (!isValids) {
            return
        }
        const data = {
            name,
            email,
            subject,
            message
        }

        console.log(data);
    }

    return (
        <form
            onSubmit={handleSubMit}
            className={cx("container")}>
            <div className={cx("wrapper")}>
                {/* Name */}
                <div className={cx("form-group")}>
                    <input
                        type="text"
                        value={name}
                        onChange={handleChangeName}
                        placeholder="YOUR NAME"
                        className={cx("typing-text")}
                    />
                    {
                        objError.name &&
                        <span className={cx("typing-text-invalid")}>{objError.name}</span>
                    }

                </div>
                {/* Email */}
                <div className={cx("form-group")}>
                    <input
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                        className={cx("typing-text")}
                        placeholder="EMAIL"

                    />
                    {
                        objError.email &&
                        <span className={cx("typing-text-invalid")}>{objError.email}</span>
                    }

                </div>
                {/* subject */}
                <div className={cx("form-group")}>
                    <input
                        type="text"
                        value={subject}
                        onChange={handleChangeSubject}
                        placeholder="YOUR SUBJECT"
                        className={cx("typing-text")}
                    />
                    {
                        objError.subject &&
                        <span className={cx("typing-text-invalid")}>{objError.subject}</span>
                    }

                </div>
                {/* messages */}
                <div className={cx("form-group")}>
                    <textarea
                        value={message}
                        onChange={handleChangeMessage}
                        rows="7"
                        className={cx("typing-text")}
                    />
                    {
                        objError.message &&
                        <span className={cx("typing-text-invalid")}>{objError.message}</span>
                    }
                </div>
            </div>
            <div className={cx("form-btn")}>
                <Button
                    title="send message"
                    icon={IoIosSend}
                    type="solid"
                />
            </div>
        </form>

    )
}

export default FormContact
