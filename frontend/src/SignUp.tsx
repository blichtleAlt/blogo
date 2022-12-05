import React from "react";
import Header from './Header';
import Footer from './Footer';
import Container from '@mui/material/Container';

export interface SignUpProps {

}

export default function SignUp(props: SignUpProps) {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header title="Blog" sections={[]} />
                <main>
                </main>
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </React.Fragment>
    )
}