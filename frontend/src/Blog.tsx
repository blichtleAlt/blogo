import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Posts from './Posts';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
    title: 'Coming Soon',
    description: 'Coming Soon',
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Coming Soon',
        description: 'Coming Soon',
        date: 'Nov 12',
        image: 'https:/source.unsplash.com/random',
        imageLabel: 'Image Text',
        postId: '9981'
    },
    {
        title: 'Coming Soon',
        description: 'Coming Soon',
        date: 'Nov 11',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
        postId: '10511'
    },
];

const sidebar = {
    title: '',
    description: '',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
        { title: 'August 1999', url: '#' },
        { title: 'July 1999', url: '#' },
        { title: 'June 1999', url: '#' },
        { title: 'May 1999', url: '#' },
        { title: 'April 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/blichtleAlt' },
        { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/blichtle/' }
    ],
};

export default function Blog() {
    const [getPosts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/posts/').then(res => {
            console.log(res.data.posts)
            setPosts(res.data.posts)
        }).catch((error: any) => {
            console.log(error)
        })
    }, [])
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Header title="Blog" sections={[]} />
                <main>
                    <MainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.postId} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Posts title="Blog" posts={getPosts} />
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </main>
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </React.Fragment>
    );
}
