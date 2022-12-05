import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

export interface PostsProps {
    posts: ReadonlyArray<any>;
    title: string;
}

export default function Posts(props: PostsProps) {
    const { posts, title } = props;

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            {posts.map((post) => (
                <Markdown className="markdown" key={post.text.substring(0, 40)}>
                    {post.text}
                </Markdown>
            ))}
        </Grid>
    );
}
