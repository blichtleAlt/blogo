import React from "react";
import Header from './Header';
import Footer from './Footer';
import Container from '@mui/material/Container';
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface CreatePostProps {

}


export default function CreatePost(props: CreatePostProps) {
    const [value, setValue] = React.useState("**Hello world!!!**");

    let navigate = useNavigate(); 

    function handleCreate() {
        console.log(value);
        navigate('/')
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header title="Blog" sections={[]} />
                <MDEditor
                    value={value}
                    onChange={setValue}
                />
                <Button onClick={handleCreate}>Create Post</Button>

            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </React.Fragment>
    )
}